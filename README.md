# Dashboard Collection

A comprehensive React TypeScript application showcasing 15 different dashboard designs with interactive data visualizations, charts, and modern UI components.

## 🚀 Overview

This project is a collection of beautifully designed dashboards built with React, TypeScript, and styled-components. Each dashboard demonstrates different approaches to data visualization, layout design, and user interface patterns commonly found in modern web applications.

## ✨ Features

- **15 Unique Dashboard Designs** - Each with distinct layouts and visualization styles
- **Interactive Data Visualizations** - Built with D3.js and Chart.js
- **Responsive Design** - Mobile-first approach with desktop optimization
- **TypeScript Support** - Full type safety and better developer experience
- **Modern UI Components** - Reusable components with styled-components
- **Router Navigation** - Seamless navigation between dashboards
- **Design System** - Consistent color palette and typography

## 🛠️ Tech Stack

- **React 19.2.0** - Modern React with latest features
- **TypeScript 4.0.3** - Type-safe JavaScript
- **Styled Components 5.2.1** - CSS-in-JS styling solution
- **D3.js 6.3.1** - Data-driven document manipulation
- **Chart.js 2.9.4** - Simple yet flexible charting library
- **Reach Router 1.3.4** - Accessible router for React
- **Vite 7.1.9** - Fast build tool and dev server
- **React Icons 4.1.0** - Popular icon library

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── badge.tsx
│   ├── button.tsx
│   ├── progress.tsx
│   ├── sidebar.tsx
│   ├── layout.tsx
│   └── ...
├── dashboards/          # 15 dashboard implementations
│   ├── one.tsx
│   ├── two.tsx
│   ├── ...
│   └── fifteen.tsx
├── pages/               # Main application pages
│   ├── Landing.tsx
│   └── Components.tsx
├── chartUtils/          # Chart generation utilities
│   ├── generateArc.tsx
│   ├── generateDoughnut.tsx
│   └── index.ts
├── design/              # Design system
│   ├── color.ts
│   ├── font.ts
│   └── index.ts
├── img/                 # Static assets and images
└── utils.ts             # Utility functions
```

## 🎨 Dashboard Showcase

### Available Dashboards

1. **Dashboard One** - Social media analytics with progress bars and doughnut charts
2. **Dashboard Two** - [In Progress]
3. **Dashboard Three** - [In Progress]
4. **Dashboard Four** - Multi-layered bar charts with user profiles
5. **Dashboard Five** - Timeline-based data with custom progress indicators
6. **Dashboard Six** - [In Progress]
7. **Dashboard Seven** - Hero-style layout with data visualization
8. **Dashboard Eight** - Progress tracking with custom SVG graphics
9. **Dashboard Nine** - Grid-based layout with multiple chart types
10. **Dashboard Ten** - [In Progress]
11. **Dashboard Eleven** - Avatar-based interface with interactive elements
12. **Dashboard Twelve** - [In Progress]
13. **Dashboard Thirteen** - Advanced data grid with multiple visualization types
14. **Dashboard Fourteen** - [In Progress]
15. **Dashboard Fifteen** - [In Progress]

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/kihuha/dashboards.git
cd dashboards
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🎯 Key Components

### Layout System

- **Layout Component** - Consistent wrapper with navigation and header
- **Sidebar** - Responsive navigation sidebar
- **Mobile Header** - Mobile-optimized header component

### Data Visualization

- **Progress Components** - Customizable progress bars and indicators
- **Chart Utilities** - D3.js-based chart generation functions
- **Graph Components** - Reusable graph components with legends

### UI Components

- **Button** - Styled button component with modifiers
- **Badge** - Status and notification badges
- **Slider** - Interactive range slider component

## 🎨 Design System

### Color Palette

The application uses a comprehensive color system with:

- Primary colors for main actions and highlights
- Secondary colors for supporting elements
- Success, warning, danger, and info colors for status indicators
- Neutral colors for text and backgrounds

### Typography

Consistent font sizing and weights throughout the application using the design system's font utilities.

## 📱 Responsive Design

All dashboards are built with a mobile-first approach:

- **Mobile (< 600px)** - Single column layouts with stacked components
- **Tablet (600px - 1000px)** - Optimized two-column layouts
- **Desktop (> 1000px)** - Full multi-column grid layouts

## 🔧 Development

### Adding New Dashboards

1. Create a new component in `src/dashboards/`
2. Add the route in `App.tsx`
3. Include the dashboard image in `src/pages/Landing.tsx`
4. Update the navigation as needed

### Customizing Charts

Chart utilities are located in `src/chartUtils/`. These functions generate SVG-based charts using D3.js and can be customized for different data sets and styling requirements.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📞 Support

If you have any questions or need help with the project, please open an issue on GitHub.

---

Built with ❤️ using React, TypeScript, and modern web technologies.
