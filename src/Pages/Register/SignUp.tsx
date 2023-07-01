import styled from "styled-components"
import InputProps from "../../Components/Reuse/InputProps"
import SocialButton from "../../Components/Statics/SocialButton"
import {FcGoogle} from "react-icons/fc"
import {AiOutlineTwitter} from "react-icons/ai"
import Button from "../../Components/Statics/Button"


const SignUp = ()=>{
    return(
        <Container>
                <Main>
                    <TitleDiv>
                    <SubTitle>Free for up to 10 users</SubTitle>
                        <MainTitle>Get started</MainTitle>
                        <SubTitle2>With</SubTitle2>
                    </TitleDiv>
                    
                    <MainSocialButtonDiv>
                    <SocialButtonDiv>
                    <SocialButton
                    icon={<FcGoogle/>}
                    text="Google"
                    />
                    </SocialButtonDiv>

                    <SocialButtonDiv>
                    <SocialButton
                    icon={<AiOutlineTwitter/>}
                    text="Twitter"
                    color="#00ACEE"
                    />
                    </SocialButtonDiv>
                    </MainSocialButtonDiv>

                    <LineDiv>
                        <InnerLineDiv1><Line/></InnerLineDiv1>
                        <TextDiv><Text>Or continue with email</Text></TextDiv>
                        <InnerLineDiv><Line/></InnerLineDiv>
                    </LineDiv>
                    
                    <InputProps
                Name
                name="Name"
                namePlace="Your name"
                />

<InputProps
                Email
                email="Email"
                emailPlace="Your email"
                />

                <InputProps
                Password
                password="Password"
                passwordPlace="Your password"
                />
                
                <InputProps
                ConfirmPassword
                confirmPassword="Confirm password"
                confirmPasswordPlace="Confirm your password"
                />

                <BottomDiv>
                    <BottomTextDiv>Don't have an account? Register</BottomTextDiv>
                    <Button
                    bg="#091E42"
                    text="SignUp"
                    color="#ffffff"
                    />
                </BottomDiv>
                </Main>
            </Container>
    )
}

export default SignUp



const BottomDiv = styled.div`
width: 400px;
height: 50px;
/* background-color: brown; */
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 20px;

`
const BottomTextDiv = styled.div`
font-size: 12px;
font-weight: 400;
`
const InnerLineDiv1 = styled.div`
width: 135px;
height: 100%;
display: flex;
/* justify-content: flex-end; */
align-items: center;
`
const InnerLineDiv = styled.div`
width: 140px;
height: 100%;
display: flex;
justify-content: flex-end;
align-items: center;
/* background-color: black; */
`
const TextDiv = styled.div`
width: 130px;
height: 100%;
display: flex;
justify-content: center;
align-items: center;


`
const LineDiv = styled.div`
width: 400px;
height: 20px;
/* background-color: red; */
display: flex;
`
const Text = styled.div`
font-size: 12px;
`
const Line = styled.div`
height: 0.5px;
width: 130px;
background-color: silver;
/* margin-top: 5px; */
`
const MainSocialButtonDiv = styled.div`
 width: 400px;
 height: 50px;
 /* background-color: burlywood; */
 display: flex;
justify-content: space-between; 
align-items: center;
margin: 20px 0;
`
const SocialButtonDiv = styled.div`
`
const TitleDiv = styled.div`
width: 400px;
height: 70px;
/* background-color: burlywood; */
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-top: 50px;
`
const MainTitle = styled.div`
height: 70%;
width: 180px;
/* background-color: aqua; */
color: #091E42;
font-size: 35px;
font-weight: 500;
display: flex;
justify-content: center;
`
const SubTitle = styled.div`
height: 30%;
width: 180px;
/* background-color: blanchedalmond; */
color: #091E42;
font-size: 15px;
display: flex;
justify-content: center;
`
const SubTitle2 = styled.div`
color: #091E42;
font-size: 20px;
font-weight: 500;
`
const Container = styled.div`
width: 100%;
height: calc(100vh - 45px);
display: flex;
justify-content: center;
align-items: center;
background-color: #DEEBFF;
`
const Main = styled.div`
width: 450px;
min-height: 350px;
/* border: 1px solid  silver; */
display: flex;
/* justify-content: center; */
align-items: center;
flex-direction: column;
border-radius: 5px;
background-color: white;
box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`