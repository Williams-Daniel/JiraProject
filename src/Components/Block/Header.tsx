import styled from "styled-components"
import img from "../Reuse/Atlassian-horizontal-blue-rgb.svg"
import {HiUserCircle} from "react-icons/hi"
import {RiSearchLine,RiArrowDownSLine} from "react-icons/ri"



const Header = ()=>{
    return(
        <Container>
            <Main>
                <LeftSide>
                    <LogoHolder><Logo src={img}/></LogoHolder>
                    <NavHolder>
                        <Navs>Product<div><Icon/></div></Navs>
                        <Navs>For teams<div><Icon/></div></Navs>
                        <Navs>Support<div><Icon/></div></Navs>
                    </NavHolder>
                </LeftSide>
                <RightSide>
                    <BuyNow>Buy now</BuyNow>
                    <SearchDiv><Search/></SearchDiv>
                    <Line/>
                    <MyAccountDiv>
                        <ContactIcon/>
                        <AccountText>My account</AccountText>
                        <DropDown/>
                    </MyAccountDiv>
                </RightSide>
            </Main>
        </Container>
    )
}

export default Header

const DropDown = styled(RiArrowDownSLine)`
color: #0052CC;
`
const BuyNow = styled.div`
font-size: 13px;
font-weight: 500;
color: #0052CC;
width: 90px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    transition: all 380ms;
:hover{
    cursor: pointer;
    background-color: #ededed;
}
`
const ContactIcon = styled(HiUserCircle)`
font-size: 32px;
color: #cccdcd;
`
const AccountText = styled.div`
font-size: 14px;
font-weight: 500;
color: #0052CC;
`
const SearchDiv = styled.div`
height: 40px;
width: 40px;
border-radius: 100px;
display: flex;
justify-content: center;
align-items: center;
transition: all 380ms;
:hover{
    cursor: pointer;
    background-color: #ededed;
}
`
const Search = styled(RiSearchLine)`
font-size: 20px;
color: #c6c6c7;


`
const Line = styled.div`
width: 0.5px;
height: 30px;
background-color: #d7d7d7;
`
const MyAccountDiv = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
width: 135px;
height: 40px;
border-radius: 3px;
transition: all 380ms;
/* background-color: blue; */
:hover{
    cursor: pointer;
    background-color: #ededed;
}
`
const Container = styled.div`
width: 100%;
height: 75px;
background-color: #F4F5F7;
display: flex;
justify-content: center;
align-items: center;
`
const Main = styled.div`
width: 92%;
height: 100%;
/* background-color: brown; */
display: flex;
justify-content: space-between;
align-items: center;
`
const LeftSide = styled.div`
width: 535px;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
/* background-color: green; */

`
const LogoHolder = styled.div`
display: flex;
/* justify-content: center; */
align-items: center;
width: 205px;
height: 100%;
/* background-color: burlywood; */
`
const Logo = styled.img`
height: 25px;
`
const NavHolder = styled.div`
width: 320px;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
/* background-color: darkorange; */

`
const Navs = styled.div`
/* margin: 0 30px; */
/* border: 1px solid black; */
width: 110px;
height: 30px;
display: flex;
justify-content: center;
align-items: center;
color: #42526E;
transition: all 350ms;
:hover{
    cursor: pointer;
    background-color: #e6e6e6;
}
`
const Icon = styled(RiArrowDownSLine)`
font-size: 15px;
display: flex;
justify-content: center;
align-items: center;
color: #0052CC;
margin-top: 4px;
margin-left: 7px;
`
const RightSide = styled.div`
width: 350px;
height: 100%;
/* background-color: brown; */
display: flex;
justify-content: space-evenly;
align-items: center;
`






