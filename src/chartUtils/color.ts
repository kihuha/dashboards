const hexExp = /^#[A-Za-z0-9]{3,4}$|^#[A-Za-z0-9]{6,8}$/
const rgbExp = /^rgba?\(\s?([0-9]*)\s?,\s?([0-9]*)\s?,\s?([0-9]*)\s?\)/
const rgbaExp = /^rgba?\(\s?([0-9]*)\s?,\s?([0-9]*)\s?,\s?([0-9]*)\s?,\s?([.0-9]*)\s?\)/
// e.g. hsl(240, 60%, 50%)
const hslExp = /^hsla?\(\s?([0-9]*)\s?,\s?([0-9]*)%?\s?,\s?([0-9]*)%?\s?.*?\)/

const parseHexToRGB = (color: any) =>
  color.length < 7 // 7 is what's needed for '#RRGGBB'
    ? color.match(/[A-Za-z0-9]{1}/g).map((v: any) => parseInt(`${v}${v}`, 16))
    : // https://stackoverflow.com/a/42429333
      color.match(/[A-Za-z0-9]{2}/g).map((v: any) => parseInt(v, 16))

const hslToRGB = (h: any, s: any, l: any) => {
  let r
  let g
  let b

  if (s === 0 || s === "0") {
    // achromatic
    r = l
    g = l
    b = l
  } else {
    const hue2rgb = (p: any, q: any, inT: any) => {
      let t = inT
      if (t < 0) t += 1
      if (t > 1) t -= 1
      if (t < 0.16666667) return p + (q - p) * 6 * t
      if (t < 1 / 2) return q
      if (t < 0.66666667) return p + (q - p) * (0.66666667 - t) * 6
      return p
    }

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s
    const p = 2 * l - q
    r = hue2rgb(p, q, h + 0.33333333)
    g = hue2rgb(p, q, h)
    b = hue2rgb(p, q, h - 0.33333333)
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)]
}

const canExtractRGBArray = (color: any) =>
  hexExp.test(color) ||
  rgbExp.test(color) ||
  rgbaExp.test(color) ||
  hslExp.test(color)

const getRGBArray = (color: any) => {
  if (hexExp.test(color)) {
    const [red, green, blue, alpha] = parseHexToRGB(color)
    return [red, green, blue, alpha !== undefined ? alpha / 255.0 : undefined]
  }
  let match = color.match(rgbExp)
  if (match) {
    return match.splice(1).map((v: any) => parseInt(v, 10))
  }
  match = color.match(rgbaExp)
  if (match) {
    return match.splice(1).map((v: any) => parseFloat(v))
  }
  match = color.match(hslExp)
  if (match) {
    const [h, s, l] = match.splice(1).map((v: any) => parseInt(v, 10))
    return hslToRGB(h / 360.0, s / 100.0, l / 100.0)
  }
  return color
}

export const getRGBA = (color: any, opacity: any) => {
  if (color && canExtractRGBArray(color)) {
    const [red, green, blue, alpha] = getRGBArray(color)
    let normalizedAlpha
    if (opacity !== undefined) {
      normalizedAlpha = opacity
    } else if (alpha !== undefined) {
      normalizedAlpha = alpha
    } else {
      normalizedAlpha = 1
    }
    return `rgba(${red}, ${green}, ${blue}, ${normalizedAlpha})`
  }
  return undefined
}
