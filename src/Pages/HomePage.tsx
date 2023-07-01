import styled from "styled-components";
import img from "../Assets/hero-illustration.png";
import img1 from "../Assets/Team23_Official_white_Large.svg";
import {MdArrowOutward} from "react-icons/md"
import Buttons from "../Components/Statics/Button";

const HomePage = () => {
const myArr = [{text:"Plan"},{text:"Track"},{text:"Release"},{text:"Report"},{text:"Automate"}]

  return (
    <Container>
      <Main>
        <Hero>
          <HeroMain>
            <LeftSide>
              <LeftsideMain>
                <MainTextDiv>
                  <Title>
                    Move fast, stay aligned, and build better - together
                  </Title>
                  <Text>
                    The #1 software development tool used by agile teams
                  </Text>
                  <Button>Get it free</Button>
                </MainTextDiv>
              </LeftsideMain>
            </LeftSide>
            <RightSide>
              <Image1 src={img} />
            </RightSide>
          </HeroMain>
        </Hero>
        <Card2>
          <Card2Main>
            <InnerCard2>
              <Team23>
                <Image src={img1}/>
                <Card2Right>
                  <Card2Text>
                    Catch up on what you missed at Team '23! Power up your Jira
                    Software skills with our on-demand sessions.
                  </Card2Text>
                  <LinkText>Watch now<div><ArrIcon/></div></LinkText>
                </Card2Right>
              </Team23>
            </InnerCard2>
          </Card2Main>
        </Card2>
        <Card3>
            <TruthDiv>
                <TruthTitle>All from a single source of truth</TruthTitle>
                <TruthButtons>
                    {
                        myArr.map((props)=>(
                            <TruthMainButton>{props.text}</TruthMainButton>
                        ))
                    }
                </TruthButtons>
            </TruthDiv>
        </Card3>
      </Main>
    </Container>
  );
};

export default HomePage;


const TruthDiv = styled.div`
width: 100%;
height: 105px;
/* background-color: red; */
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
`
const TruthTitle = styled.div`
font-size: 30px;
font-weight: 500;
color: #253858;
margin-bottom: 15px;
`
const TruthMainButton = styled.div`
height: 38px;
width: 110px;
background-color: white;
border-radius: 30px;
display: flex;
justify-content: center;
align-items: center;
font-size: 20px;
margin: 0 5px;

`
const TruthButtons = styled.div`
display: flex;
`
const ArrIcon = styled(MdArrowOutward)`
margin-top: 5px;
`
const Card2Text = styled.div`
font-size: 16px;
font-weight: 500;
width: 380px;
margin-left: 15px;
/* background-color: white; */
color: white;
`;
const Card3 = styled.div`
width: 100%;
height: 800px;
background-color: #DEEBFF;
`;
const LinkText = styled.div`
font-size: 16px;
font-weight: 500;
display: flex;
justify-content: center;
align-items: center;
margin-right: 20px;
color: #FFBDF0;
`;
const Card2Right = styled.div`
display: flex;
justify-content: space-between;
/* background-color: purple; */
width: 550px;
`;
const Image = styled.img`
height: 45px;
`;
const Team23 = styled.div`
 display: flex;
 justify-content: space-between;
 /* background-color: green; */
 width: 700px;
 align-items: center;
`;
const InnerCard2 = styled.div`
  height: 130px;
  width: 750px;
  background-image: linear-gradient(
  90deg,
  hsl(223deg 66% 17%) 0%,
  hsl(226deg 64% 20%) 19%,
  hsl(229deg 62% 22%) 29%,
  hsl(232deg 60% 25%) 33%,
  hsl(236deg 57% 28%) 38%,
  hsl(239deg 55% 30%) 48%,
  hsl(242deg 53% 33%) 62%,
  hsl(245deg 51% 36%) 80%,
  hsl(249deg 49% 39%) 100%
);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  position: absolute;
  bottom: -20px;
  border: 1px solid #FA3C3E;
`;
const Card2Main = styled.div`
  height: 100%;
  width: 83%;
  /* background-color: brown; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Card2 = styled.div`
  width: 100%;
  height: 133px;
  /* background-color: darkblue; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  background-color: #DEEBFF;
`;
const Main = styled.div`
  height: 100vh;
  width: 100%;
`;
const Hero = styled.div`
  width: 100%;
  height: 550px;
  background-image: linear-gradient(
    55deg,
    hsl(0deg 0% 100%) 0%,
    hsl(217deg 94% 97%) 14%,
    hsl(217deg 94% 93%) 25%,
    hsl(216deg 93% 89%) 36%,
    hsl(215deg 93% 86%) 45%,
    hsl(215deg 93% 86%) 54%,
    hsl(216deg 93% 89%) 63%,
    hsl(217deg 94% 93%) 72%,
    hsl(217deg 94% 97%) 82%,
    hsl(0deg 0% 100%) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HeroMain = styled.div`
  width: 1265px;
  height: 380px;
  /* background-color: darkorange; */
  display: flex;
  justify-content: space-between;
`;
const LeftSide = styled.div`
  width: 620px;
  height: 100%;
  /* background-color: brown; */
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const LeftsideMain = styled.div`
  width: 500px;
  height: 350px;
  /* background-color: chocolate; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MainTextDiv = styled.div`
  width: 100%;
  height: 280px;
  /* background-color: wheat; */
`;
const Title = styled.div`
  width: 100%;
  height: 180px;
  /* background-color: aquamarine; */
  font-size: 45px;
  font-weight: 500;
  color: #253858;
`;
const Text = styled.div`
  font-size: 20px;
  margin: 15px 0;
  color: #253858;
`;
const Button = styled.div`
  width: 115px;
  height: 40px;
  border-radius: 3px;
  background-color: #0052cc;
  color: white;
  font-size: 16px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const RightSide = styled.div`
  width: 620px;
  height: 100%;
  /* background-color: darkkhaki; */
`;
const Image1 = styled.img`
  width: 620px;
  height: 100%;
  object-fit: contain;
`;
