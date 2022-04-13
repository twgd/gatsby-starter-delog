import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const ContactPage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>Contact — {site.siteMetadata.title}</title>
        <meta name="description" content={"Contact page of " + site.siteMetadata.description} />
      </Helmet>
      <div className="two-grids -contact">
        <div className="post-thumbnail" style={{backgroundImage: `url('/assets/alexander-andrews-HgUDpaGPTEA-unsplash.jpg')`, marginBottom: 0}}>
          <h1 className="post-title">Get in Touch</h1>
          <p>Let me help you kick start your next project &rarr;</p>
        </div>
        <div>
          <form className="form-container" action="https://formspree.io/f/xknyqbko" method="post">
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" required/>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" required/>
            </div>
            <div>
              <label htmlFor="subject">Subject</label>
              <input type="text" name="subject" id="subject" required/>
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" required></textarea>
            </div>
            <div style={{display: "flex", justifyContent: "flex-end"}}>
              <input type="submit" className="button -primary" style={{marginRight: 0}} />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}
export default ContactPage
export const pageQuery = graphql`
  query ContactPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
