import { StyledMenuItem } from 'components/styled-menu-item';
import React from 'react';
import './style.less';

interface ContextCardProps {
  header?: string;
  text?: string;
  icon?: any;
  showLeftNotch?: boolean;
  showRightNotch?: boolean;
}

export const ContextCard: React.FC<ContextCardProps> = ({
  header,
  text,
  icon,
  showLeftNotch,
  showRightNotch,
}) => {
  const styledClass =
    !showLeftNotch && !showRightNotch
      ? 'menu-begin'
      : !showLeftNotch && showRightNotch
      ? 'menu-organization'
      : 'menu-continue';

  return (
    <>
      <StyledMenuItem className={styledClass}>
        <img src={icon} className={'cw-logo-card-placeholder'} />
        <div className="title-container">
          <>
            <p className="title">{header}</p>
            <p className="subTitle">{text}</p>
          </>
        </div>
      </StyledMenuItem>
    </>
  );
};
