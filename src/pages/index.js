import React from 'react'
import { graphql } from 'gatsby'
import { Flex, Box } from 'grid-styled'
import styled, { css } from 'styled-components'
import Img from 'gatsby-image'
import FlickrHero from 'react-flickr-hero'
import Button from '../components/button'
import { media } from '../utils/style'

import Layout from '../components/layout'
import NavBar from '../components/navbar'
import HeroText from '../components/heroText'
import SocialIcons from '../components/socialIcons'
import Portfolio from '../components/portfolio'

const Content = styled.div`
  & > a {
    visibility: hidden;
    display: block;
    height: 0;
  }
  & > h1 {
    text-align: center;
  }
`

const Title = styled.h1`
  font-family: 'Raleway';
  text-transform: uppercase;
  letter-spacing: 6px;
  margin-bottom: 40px;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  border: none;
  color: #292929;

  ${props =>
    props.small &&
    css`
      font-size: 12px;
      letter-spacing: 2px;
      font-weight: 700;
      line-height: 24px;
    `}
`

const Section = styled.div`
  text-align: center;
  padding-top: 45px;
  padding-bottom: 40px;

  a {
    font-family: 'Lato';
  }

  p {
    margin-bottom: 64px;
    font-size: large;
    color: #666;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Raleway';
    text-transform: uppercase;
    color: #292929;
  }

  h4 {
    letter-spacing: 3px;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    color: #292929;
  }

  span {
    color: #666;
    opacity: 0.5;
    display: block;
  }

  & > div:last-child {
    border-bottom: none !important;
  }

  ${props =>
    props.center &&
    css`
      text-align: left;
      & > * {
        margin-left: 30vw;
      }
      h4 {
        margin-left: 20vw;
      }

      ${media.xs`
        & > div {
          margin-left: 3vw !important;
        }
    `}
    `}

  ${props =>
    props.dark &&
    css`
      background: #292929;
      * {
        color: #eee;
      }
      span {
        text-align: left;
        font-size: 16px;
        line-height: 28px;
        font-weight: 400;
        opacity: 0.5;
      }
      span,
      p {
        color: #fefefe !important;
      }
      h6 {
        color: #fff;
        font-weight: 700;
      }
      h4 {
        color: #fff;
      }
      div {
        border-bottom: 1px solid #333 !important;
      }
    `}
`

const Item = styled.div`
  width: 40%;
  margin: 0 auto;
  border: none;
  border-bottom: 1px solid #eee;
  h6 {
    letter-spacing: 2px;
    font-weight: 700;
    padding-top: 6px;
  }
  span,
  p {
    font-size: 13px;
    line-height: 24px;
    color: #666;
  }
  span {
    opacity: 0.75;
    float: right;
    text-transform: uppercase;
  }
  p {
    margin-bottom: 24px;
    opacity: 0.5;
  }
  ${media.xs`
    width: 90%;

  `}
`

const styles = {
  Input: {
    width: `19.4vw`,
    color: `black`,
    textAlign: `center`,
    padding: `0.7rem`,
    marginBottom: `0.5rem`,
    fontFamily: `Ubuntu`,
    marginRight: `0.5rem`,
    marginBottom: `1rem`
  },
  textAreaInput: {
    width: `39.5vw`,
    color: `black`,
    textAlign: `center`,
    padding: `0.7rem`,
    marginBottom: `0.5rem`,
    fontFamily: `Ubuntu`
  }

}

export default props => {
  const content = (
    <Content>
      <FlickrHero
        api_key="113350a1c8beac2d888d1d0b6f249e08"
        user_id="185242219@N06"
        album_id="72157711534624156"
        fillPage
      />
      <HeroText />
      <SocialIcons
        style={{
          position: 'absolute',
          margin: '0 auto',
          left: 0,
          right: 0,
          bottom: 16,
        }}
        icons={[
          // {
          //   name: 'twitter',
          //   href: 'https://twitter.com/darren_britton',
          // },
          // {
          //   name: 'github-alt',
          //   href: 'https://github.com/darrenbritton',
          // },
          {
            name: 'linkedin',
            href: 'https://ie.linkedin.com/in/lukonez',
          },
        ]}
      />
      <a id="onama">O nama</a>
      <Section>
        <Title>O nama</Title>
        <Flex alignItems="center" flexDirection="column">
          <Box px={2} width={[1, 1 / 2]}>
            <p>
              Currently working as a software engineer at{' '}
              <a href="https://shutterstock.com">Shutterstock</a> focusing on
              the editorial content platform. As far as my work goes I've
              probably worn every hat on the rack, most notable being Web
              Developer, Software Engineer and Photographer. Don’t let my clean
              lines and weakness for Swiss type fool you; My work has been
              pretty diverse and enjoyable. For more information about me follow
              one of my social media links above or at the bottom of the page.
            </p>
          </Box>
          <Box px={2} width={180}>
            <Img
              sizes={
                props.data.allFile
                  ? props.data.allFile.edges[0].node.childImageSharp.sizes
                  : {}
              }
            />
          </Box>
        </Flex>
      </Section>
      <Title >Blog</Title>
      <a id="portfolio">Blog</a>
      <Portfolio items={props.data.allMarkdownRemark.edges} />
      <a id="kontakt">Kontakt</a>
      <Section dark center>
        <h4>Kontakt</h4>
        <span>Ukoliko zelite da nas kontaktirate ispunite formular ispod.</span>
        <Item>
        <form  name="contact" method="post" action="/success" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contact" />
            <input 
              style={styles.Input}
              type="text" 
              name="name" 
              id="name" 
              placeholder="Vase ime"/>
             
            <input
              style={styles.Input}
              placeholder="Vas Email"
              type="text" 
              name="email" 
              id="email" />
              <br />

            <textarea 
              style={styles.textAreaInput}
              autoFocus={false}
              name="message" 
              id="message" 
              rows="6" 
              placeholder="Sadrzaj kratke poruke..."/> 
              <br/>  
              <Button
                dark="dark"
                opaque="opaque">Send</Button>
          </form>
        </Item>
      </Section>
    </Content>
  )
  return (
    <Layout location={props.location}>
      <NavBar main children={content.props.children} />
      {content}
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          timeToRead
          excerpt(pruneLength: 120)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
            image {
              childImageSharp {
                sizes(
                  maxWidth: 500
                  duotone: {
                    highlight: "#000000"
                    shadow: "#111111"
                    opacity: 65
                  }
                  ) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
    # allImageSharp: allFile(filter: { relativePath: { regex: "/logos/" } }) {
    #   edges {
    #     node {
    #       id
    #       childImageSharp {
    #         sizes(maxWidth: 300, grayscale: true) {
    #           ...GatsbyImageSharpSizes_tracedSVG
    #         }
    #       }
    #     }
    #   }
    # }
    allFile(filter: { name: { regex: "/lukonez/" } }) {
      edges {
        node {
          childImageSharp {
            sizes(maxWidth: 200, grayscale: true) {
              ...GatsbyImageSharpSizes_tracedSVG
            }
          }
        }
      }
    }
  }
`
