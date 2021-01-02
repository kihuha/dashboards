import { RouteComponentProps } from "@reach/router"

// COMPONENTS
import Layout from "../components/layout"
import InProgress from "../components/inProgress"

const Eleven = (props: RouteComponentProps) => {
  return (
    <Layout>
      <InProgress />
    </Layout>
  )
}

export default Eleven
