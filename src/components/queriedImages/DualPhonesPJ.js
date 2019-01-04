import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from '../Image';

const query = graphql`
  query {
    dualPhonesPJ: file(
      relativePath: { eq: "Dual-iPhone-Peachjar-noBrandbar.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const DualPhonesPJ = props => (
  <StaticQuery
    query={query}
    render={data => (
      <Image fluid={data.dualPhonesPJ.childImageSharp.fluid} {...props} />
    )}
  />
);

export default DualPhonesPJ;
