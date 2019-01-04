import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from '../Image';

const query = graphql`
  query {
    dualPhonesFB: file(relativePath: { eq: "facebook-showcase.png" }) {
      childImageSharp {
        fluid(maxHeight: 750) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const DualPhonesFB = props => (
  <StaticQuery
    query={query}
    render={data => (
      <Image fluid={data.dualPhonesFB.childImageSharp.fluid} {...props} />
    )}
  />
);

export default DualPhonesFB;
