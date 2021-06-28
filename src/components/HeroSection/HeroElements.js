import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  ${'' /* justify-content: space-between; */}
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: relative;
  z-index: 1;
`;

export const HeroBkg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #39332C;
`;

export const HeroContent = styled.div`
  z-index: 3;
  ${'' /* background: green; */}
  max-width: 1200px;
  padding: 0px 24px;
  ${'' /* display: flex; */}
  flex-direction: column;
  align-items: center; 
`;

export const HeroH1 = styled.h1 `
  color: #9D9085;
  font-size: 72px;
  ${'' /* text-align: center; */}

  @media screen and (max-width: 768px) {
    font: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroH2 = styled.h2 `
  color: #9D9085;
  font-size: 64px;
  ${'' /* text-align: center; */}

  @media screen and (max-width: 768px) {
    font: 32px;
  }

  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: #F4F4F4;
  font-size: 18px;
  ${'' /* text-align: center; */}
  max-width: 700px;

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const HeroBtnWrapper = styled.div `
  margin-top: 32px;
  display: flex;
  ${'' /* flex-direction: column;
  align-items: center; */}
`;

export const HeroImg = styled


