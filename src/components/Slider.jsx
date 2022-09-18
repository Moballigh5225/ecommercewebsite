import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
`;

const Wrapper = styled.div`
  height: 100%;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) =>
    props.direction === "right" &&
    "10px"}; //here we are using/calling props for the styling
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
`;
const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img``;

const InfoContainer = styled.div`
  flex: 1;
`;

const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        {/* //using props(direction) for styling */}
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper>
        <ImgContainer>
          <Image />
        </ImgContainer>
        <InfoContainer></InfoContainer>
      </Wrapper>
      <Arrow direction="right">
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
