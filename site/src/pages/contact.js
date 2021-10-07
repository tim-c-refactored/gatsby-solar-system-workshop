import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import ContactInfo from "../components/contactInfo"

const ContactPage = () => {

  return (
    <Layout>
      <Seo title="Contact" />
      <h1>Contact</h1>
      <ContactInfo />
    </Layout>
  )
}

export default ContactPage
