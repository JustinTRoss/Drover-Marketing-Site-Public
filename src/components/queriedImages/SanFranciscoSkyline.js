import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from '../Image';

const query = graphql`
  query {
    SanFranciscoSkyline: file(relativePath: { eq: "SF4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 640) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const SanFranciscoSkyline = props => (
  <StaticQuery
    query={query}
    render={data => (
      <Image
        fluid={data.SanFranciscoSkyline.childImageSharp.fluid}
        {...props}
      />
    )}
  />
);

export default SanFranciscoSkyline;
