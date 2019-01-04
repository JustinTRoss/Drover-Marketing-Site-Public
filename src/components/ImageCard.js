import * as React from 'react';
import { css } from 'emotion';

import { colors } from '../constants/colors';

const ImageCard = ({ ImageComponent, imagePosition = '50% 50%', title }) => (
  <div className={cn.locationTile}>
    <ImageComponent
      objFit="cover"
      objPosition={imagePosition}
      className={cn.locationTileImage}
    />
    <div className={cn.locationTileInfo}>
      <div className={cn.locationTileName}>{title}</div>
    </div>
  </div>
);

const cn = {
  locationTile: css`
    flex: 1 1 300px;
    margin: 1rem;
    box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.05),
      0 2px 7px 0 rgba(72, 22, 66, 0.05);
  `,
  locationTileImage: css`
    height: 260px;
  `,
  locationTileInfo: css`
    background: ${colors.white};
    padding: 31px 7.56% 44px;
  `,
  locationTileName: css`
    text-transform: uppercase;
    font-weight: 900;
    font-size: 1rem;
    line-height: 1.125;
  `,
};

export default ImageCard;
