import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 5%;

  font-family: ${props => props.theme.fontFamily.main};
  font-size: calc(1rem + 1vw); 
`;

const Title = styled.p`
  font-size: 1.5em;
  font-weight: 600;
  width: 60%;


  @media(max-width: 720px) {
    width: 80%;
  }
  @media(max-width: 480px) {
    width: 100%;
  }
`;

/* author contact info */
const Author = styled.div`
  display: flex;
  flex-direction: row;
`;
const Image = styled.img`
  max-width: 100%;
  object-fit: scale-down;
`;
const Extract = styled.span`
  display: block;
`;
const ReadMore = styled(Link)`
  display: inline-block;
  text-decoration: none;
  border: none;
  color: ${props => props.theme.color.lightBlue};
`;

const AuthorName = styled.p`
  color: ${props => props.theme.color.lightBlue};
`;

const FeaturedBlog = (props) => {

  const node = props.postData.allMarkdownRemark.edges[0].node;

  return (
    <Container>
      <Title>{node.frontmatter.title}</Title>
      <Author>
        {/* <AuthorName>{node.frontmatter.author}</AuthorName> */}
      </Author>
      <Image src={node.frontmatter.thumbnail}></Image>
      <Extract>
        {node.excerpt}
        <ReadMore to={node.fields.route}>... see more</ReadMore>
      </Extract>
    </Container>
  );
}

export default FeaturedBlog;