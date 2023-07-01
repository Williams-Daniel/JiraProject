import React from "react"
import styled from "styled-components"
import { Iprops } from "../../Utils/Interface"



const InputProps:React.FC<Iprops> = (
    {Name,
    Email,
    Password,
    ConfirmPassword,

    name,
    email,
    password,
    confirmPassword,

    namePlace,
    emailPlace,
    passwordPlace,
    confirmPasswordPlace}
)=>{
    return(
        <Container>
            <Main>
                {
                    Name ? (
                        <TextAndInputDiv>
                    <Text>{name}<div  style={{color:"red", marginLeft:"2px"}}>*</div></Text>
                    <InputHolder>
                    <Input placeholder={`${namePlace}`}/>
                    </InputHolder>
                </TextAndInputDiv>
                    ) : null
                }
                
                {
                    Email ? (
                        <TextAndInputDiv>
                    <Text>{email}<div  style={{color:"red", marginLeft:"2px"}}>*</div></Text>
                    <InputHolder>
                    <Input placeholder={`${emailPlace}`}/>
                    </InputHolder>
                </TextAndInputDiv>
                    ) : null
                }
                
                {
                    Password ? (
                        <TextAndInputDiv>
                    <Text>{password}<div  style={{color:"red", marginLeft:"2px"}}>*</div></Text>
                    <InputHolder>
                    <Input placeholder={`${passwordPlace}`}/>
                    </InputHolder>
                </TextAndInputDiv>
                    ) : null
                }
                
                {
                    ConfirmPassword ? (
                        <TextAndInputDiv>
                    <Text>{confirmPassword}<div  style={{color:"red", marginLeft:"2px"}}>*</div></Text>
                    <InputHolder>
                    <Input placeholder={`${confirmPasswordPlace}`}/>
                    </InputHolder>
                </TextAndInputDiv>
                    ) : null
                }
            </Main>
        </Container>
    )
}

export default InputProps

const Container = styled.div``
const Main = styled.div``
const TextAndInputDiv = styled.div`
min-height: 50px;
width: 400px;
/* background-color: red; */
display: flex;
/* justify-content: center; */
flex-direction: column;
/* align-items: center; */
margin: 17px 0;
/* margin-bottom: 40px; */

`
const Text = styled.div`
display: flex;
font-weight: 500;
margin-bottom: 3px;
font-size: 14px;

`
const InputHolder = styled.div`
width: 400px;
height: 35px;
border: 1px solid silver;
border-radius: 6px;
display: flex;
justify-content: center;
align-items: center;
`
const Input = styled.input`
width: 100%;
height: 93.0%;
border-radius:6px;
outline: none;
border: 0;
padding-left: 10px;
font-size: 14px;
:focus{
    border: 1px solid #091E42;
}
::placeholder{
    font-size: 14px;
}
`