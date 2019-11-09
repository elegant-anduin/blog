import React from "react";
import Layout from "../components/layout";
import NavBar from "../components/navbar";
import FlickrHero from "react-flickr-hero";
import styled from "styled-components";
import HeroTextSuccess from "../components/heroTextSuccess";

const ContentDiv = styled.div`
  & > a {
    visibility: hidden;
    display: block;
    height: 0;
    color: wheat;
  }

  a:hover {
    text-decoration: underline;
    color: wheat;
    transition: 0.4s;
    width: 300px;
  }
  & > h1 {
    text-align: center;
  }
`;

export default props => {
  const content = (
    <ContentDiv>
      <FlickrHero
        api_key="113350a1c8beac2d888d1d0b6f249e08"
        user_id="185242219@N06"
        album_id="72157711534624156"
        fillPage
      />
      <HeroTextSuccess />
      <a href="/">Nazad na početnu</a>
    </ContentDiv>
  );
  return (
    <Layout location={props.location}>
      <NavBar main children={content.props.children} />
      {content}
    </Layout>
  );
};
