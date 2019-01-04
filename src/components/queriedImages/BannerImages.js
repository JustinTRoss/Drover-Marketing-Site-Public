import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from '../Image';

export const BannerImageFragment = graphql`
  fragment BannerImage on File {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
`;

const BannerImages = graphql`
  query {
    peachjar: file(relativePath: { eq: "peachjar-banner-candidate-dark.png" }) {
      ...BannerImage
    }
    facebook: file(relativePath: { eq: "facebook-banner-candidate-dark.png" }) {
      ...BannerImage
    }
  }
`;

export const BannerImage = props => (
  <StaticQuery
    query={BannerImages}
    render={data => (
      <Image
        fluid={data[props.fileAlias].childImageSharp.fluid}
        objFit="cover"
        objPosition="50 50%"
        style={{
          overflow: 'unset',
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}
        {...props}
      />
    )}
  />
);

export const FacebookCaseStudyBannerImage = props => (
  <BannerImage fileAlias="facebook" {...props} />
);
export const PeachjarCaseStudyBannerImage = props => (
  <BannerImage fileAlias="peachjar" {...props} />
);
