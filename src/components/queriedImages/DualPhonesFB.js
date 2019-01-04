import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from '../Image';

const query = graphql`
  query {
    dualPhonesFB: file(relativePath: { eq: "Dual-iPhone-Facebook.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
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
