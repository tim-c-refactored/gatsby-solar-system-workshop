import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { formStyle, formLabelStyle, formInputStyle, formInputItem } from './contactInfo.module.css'

const ContactInfo = () => {
  const contactData = useStaticQuery(graphql`
    query ContactInfoQuery {
      site {
        siteMetadata {
          phoneNumber
          contactEmail
        }
      }
    }
  `)

  const nameRef = React.useRef(),
    emailRef = React.useRef(),
    messageRef = React.useRef()

  return (
    <>
      <p>
        Thank you for your interest in reaching out. You can contact us via the
        below methods:
      </p>
      <ul>
        <li>Phone Number: {contactData.site.siteMetadata.phoneNumber} </li>
        <li>
          Email Address:{" "}
          <a href={`mailto:${contactData.site.siteMetadata.contactEmail}"`}>{contactData.site.siteMetadata.contactEmail}</a>{" "}
        </li>
      </ul>
      <form className={formStyle}>
        <div className={formInputItem}>
          <label className={formLabelStyle} htmlFor="name">Name</label>
          <input id="name" ref={nameRef} className={formInputStyle} />
        </div>
        <div className={formInputItem}>
          <label className={formLabelStyle} htmlFor="email">Email</label>
          <input id="email" ref={emailRef} className={formInputStyle} />
        </div>
        <div className={formInputItem}>
          <label className={formLabelStyle} htmlFor="message">Message</label>
          <textarea ref={messageRef} rows="4" className={formInputStyle}></textarea>
        </div>
      </form>
    </>
  )
}

export default ContactInfo
