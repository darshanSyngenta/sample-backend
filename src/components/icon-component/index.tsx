import { iff } from 'core/iff';
import PropTypes from 'prop-types';
import React, { CSSProperties, memo } from 'react';
import styled from 'styled-components';

interface IIconComponentProps {
  size?: number | string;
  name?: string;
  color?: string;
  style?: CSSProperties;
}

const IconComponent: React.FC<IIconComponentProps> = ({ size, name, color, style = {} }) => {
  const StyledIcon = styled.span`
    &::before {
      color: ${color || ''};
      font-size: ${iff(size !== undefined && size !== null && size !== '', `${size}px`, 'inherit')};
    }
  `;

  return (
    <>
      {iff(
        name !== null && name !== undefined && name !== '',
        <StyledIcon style={{ ...style }} className={`icon-${name}`} />,
        <StyledIcon style={{ ...style }} className={`icon-wheat`} />
      )}
    </>
  );
};

IconComponent.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.number,
  style: PropTypes.object,
};

export const FontIcon = memo(IconComponent);
