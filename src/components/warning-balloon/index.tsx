import styled from 'styled-components';

export const WarningBalloon = styled.div`
  /* -ms-flex-align: center;
  -ms-flex-pack: center; */
  border-radius: 8px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  /* line-height: 22px; */
  color: #515253;
  margin: 9em auto;
  padding: 0 2em;
  width: 40vw;
  /* display: inline-block; */
  .box {
    width: 37vw;
    height: 50px;

    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    align-items: center;
    -webkit-align-items: center;

    -ms-flex-align: center;

    background: #f0f3f7;
  }
`;

export const WarningBalloonImage = styled.img`
  src: ${(props) => props.src};
  margin: 0px 10px;
`;
