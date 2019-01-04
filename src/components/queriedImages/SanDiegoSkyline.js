import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from '../Image';

const query = graphql`
  query {
    SanDiegoSkyline: file(relativePath: { eq: "SD1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 640) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const SanDiegoSkyline = props => (
  <StaticQuery
    query={query}
    render={data => (
      <Image fluid={data.SanDiegoSkyline.childImageSharp.fluid} {...props} />
    )}
  />
);

export default SanDiegoSkyline;
