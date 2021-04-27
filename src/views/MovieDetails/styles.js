import styled from "styled-components";
import { colors, styles } from "../../config/theme";

export const Container = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  min-height: calc(100vh - 100px);
  padding: 0 calc(4vh - 5px);
  overflow-x: hidden;
`;

export const BgImage = styled.div`
  position: fixed;
  opacity: 0.8;
  top: 0px;
  left: 0px;
  right: 0px;
  flex: 1;

  z-index: -1;

  img {
    width: 100vw;
    height: 100vh;

    @media screen and (max-width: 768px) {
      width: initial;
    }
  }
`;

export const TitleImage = styled.div`
  display: flex;
  align-items: flex-end;

  width: 100%;
  min-height: 170px;
  justify-content: flex-start;
  margin: 0 auto;
  padding: 3rem 0;

  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`;

export const ContentMeta = styled.section`
  max-width: 874px;
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row wrap;
  gap: 1.2rem;
`;

export const Player = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.2rem 2rem;
  cursor: pointer;
  gap: 0.8rem;
  font-size: 1.8rem;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  border-radius: ${styles.borderRadius};
  border: none;
  background: ${colors.colorWhite};
  color: ${colors.colorBlack};

  &:hover {
    background: ${colors.colorGray};
  }

  transition: 0.3s;
`;

export const Trailer = styled(Player)`
  border: 1px solid ${colors.colorWhite};
  background: ${colors.colorBlackLight};
  color: ${colors.colorWhite};
`;

export const AddList = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  width: 5rem;
  height: 5rem;
  background: ${colors.colorBlackLight};
  border: 2px solid ${colors.colorWhite};
  border-radius: 50%;

  &:hover {
    background: ${colors.colorGray};
  }
  transition: 0.3s;
`;

export const GroupWatch = styled(AddList)`
  background: ${colors.colorBlack};
`;

export const SubTitle = styled.small`
  display: block;
  font-size: 1.5rem;
  margin: 2rem 0;
`;

export const Description = styled.p`
  font-size: 2rem;
  padding-bottom: 2rem;

  @media screen and (max-width: 768px) {
    font-size: 1.7rem;
  }
`;
