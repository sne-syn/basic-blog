import React from "react"
import {graphql, Link} from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogLink = styled(Link)`
  text-decoration: none;
`

const BlogTitle = styled.h3`
  margin-bottom: 20px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.9);
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <section>
      <h1>My Way To Study Frontend Development</h1>
      <p>Welcome to my blog</p>
      <p>Here I am going to save notes about my studying process and monitor progress. </p>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {
        data.allMarkdownRemark.edges.map(({node}) => (
          <dev key={node.id}>
          <BlogLink to={node.fields.slug}>
            <BlogTitle>{node.frontmatter.title} - {node.frontmatter.date}</BlogTitle>
          </BlogLink>
            <p>{node.excerpt}</p>
          </dev>
        ))
      }
    </section>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            description
            title
            date
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
