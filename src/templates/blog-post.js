import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import TimeAgo from 'react-timeago'
import { Flex, Box } from 'grid-styled'
import Img from "gatsby-image"
import Footer from '../components/footer'

import Breadcrumb from '../components/breadcrumb'
import Bar from '../components/bar'

const Header = styled.div`
  height: fit-contents;
  padding: 0;
  background: #292929;
  position: relative;
  overflow: hidden;

  & > div {
    padding-top: 120px;
    margin: auto;
    max-width: 600px;
  }
`

const Tags = styled.ol`
  float: right;
  list-style: none;
  margin: 0;
  & li a,
  & li {
    font-weight: 600;
    text-transform: uppercase;
    text-decoration: none;
    display: inline-block;
    color: #222;
  }
  & > li + li:before {
    padding: 0 8px;
    font-weight: 400;
    color: #444;
    content: '|';
  }
`

const Content = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 5vh;
  hr {
    margin: 0 0 40px;
  }
`

const Title = styled.h1`
  margin-top: 0;
  text-transform: capitalize;
  color: #fff;
`

const Timestamp = styled.i`
  float: right;
`

const TimeToRead = styled.h5`
  text-transform: uppercase;
  margin-top: 0.5em;
  display: inline-block;
`

export default ({ data, location }) => {
  const post = data.markdownRemark
  const fluidImages = post.frontmatter.image.childImageSharp.fluid
  const crumbs = [
    { name: 'home', link: '/' },
    { name: 'portfolio', link: '/#portfolio' },
    { name: post.frontmatter.title, link: location.pathname },
  ]
    return (
      <div>
        <Header>
          <Flex flexWrap="wrap">
            <Box px={2} width={[1, 2 / 3, 1 / 3]}>
              <Title>{post.frontmatter.title}</Title>
            </Box>
            <Box px={2} width={[1, 2 / 3]}>
              <Breadcrumb crumbs={crumbs} />
            </Box>
            <Box px={2} width={[1]}>
              <Bar />
            </Box>
          </Flex>
        </Header>
        <Content>
          <TimeToRead>{post.timeToRead} min read</TimeToRead>
          {/* <Tags>{tags}</Tags> */}
          <Bar />
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <Img fluid={fluidImages} />
          <br />
          <Timestamp>
            Posted: <TimeAgo date={post.frontmatter.date} />
          </Timestamp>
        </Content>
          <Footer/>
      </div>
    )
  }
 

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
        date
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
