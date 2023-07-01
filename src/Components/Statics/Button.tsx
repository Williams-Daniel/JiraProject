import styled from "styled-components"
import { IButtons } from "../../Utils/Interface"



const Button:React.FC<IButtons> = (
    {
        text,
        bg,
        color
    }
)=>{
    return(
        <Buttons bg = {`${bg}`}>
            <Text color={`${color}`}>{text}</Text>
        </Buttons>
    )
}

export default Button


const Text = styled.div<{color:string}>`
font-weight: 500;
color: ${({color})=>color};
`
const Buttons = styled.div<{bg:string}>`
width: 90px;
height: 50px;
border-radius: 30px;
background-color: ${({bg})=>bg};
display: flex;
justify-content: center;
align-items: center;
:hover{
    cursor: pointer;
    background-color: #0d3579;
}
`
