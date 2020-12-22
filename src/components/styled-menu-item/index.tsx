import React from 'react';
import styled from 'styled-components';

export const StyledMenuItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 0px 5px 0px;
  border-radius: 8px;
  width: 234px;
  height: 44px;
  padding: 6px;

  .title-container {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 0px 5%;
    max-width: 100%;
    max-height: inherit;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    p {
      margin: 0px;
    }

    .title {
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 14px;
      color: #f2f4f6;
      max-width: inherit;
    }

    .subTitle {
      margin: 0;
      font-family: Rubik;
      font-style: normal;
      font-size: 14px;
      line-height: 17px;
      color: #ffffff;
    }
  }

  .app {
    .appBox {
      display: inline-flex;
      align-items: center;
    }
  }
`;
