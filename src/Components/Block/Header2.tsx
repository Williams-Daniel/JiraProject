import styled from "styled-components"
import img from "../Reuse/jira.png"


const Header2 = ()=>{
    return(
        <Container>
            <Main>
                <ImageDiv><Image src={img}/></ImageDiv>
                <NavHolder>
                    <Navs>Features</Navs>
                    <Navs>Product guide</Navs>
                    <Navs>Templates</Navs>
                    <Navs>Pricing</Navs>
                    <Navs>Enterprise</Navs>
                </NavHolder>
                <ButtonDiv>
                    <Button>Get it free</Button>
                </ButtonDiv>
            </Main>
        </Container>
    )
}

export default Header2

const Container = styled.div`
width: 100%;
height: 60px;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
position: fixed;
`
const Main = styled.div`
width: 94%;
height: 100%;
/* background-color: brown; */
display: flex;
justify-content: space-between;
align-items: center;

`
const ImageDiv = styled.div`
width: 180px;
height: 100%;
/* background-color: beige; */
display: flex;
justify-content: flex-end;
align-items: center;
`
const Image = styled.img`

height: 31px;
`
const NavHolder = styled.div`
display: flex;
width: 840px;
height:100%;
/* background-color: purple; */
display: flex;
/* justify-content: center; */
align-items: center;
`
const Navs = styled.div`
font-size: 16px;
margin: 0 15px;
color: #0052CC;
:hover{
    cursor: pointer;
    color: #1770FC;
}
`
const ButtonDiv = styled.div`
width: 100px;
height: 100%;
/* background-color: gold; */
display: flex;
justify-content: center;
align-items: center;
`
const Button = styled.div`
width: 100px;
height: 32px;
border-radius: 3px;
border: 1px solid #0052CC;
color: #0052CC;
font-size: 16px;
font-weight: 700;
display: flex;
justify-content: center;
align-items: center;
transition: all 250ms;
:hover{

    background-color: #F4F5F7;
    cursor: pointer;
}
`