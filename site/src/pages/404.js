import { Link } from "gatsby"
import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>The page you are trying to access does not exists.</p>
    <Link to="/">Back to the Home Page</Link>
  </Layout>
)

export default NotFoundPage
