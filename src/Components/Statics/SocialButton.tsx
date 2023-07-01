import styled from "styled-components"
import { ISocials } from "../../Utils/Interface"



const SocialButton: React.FC<ISocials> = (
    {
        icon,
        text,
        color
    }
)=>{
    return(
            <Button>
                <Icon color={`${color}`}>{icon}</Icon>
                <Text>{text}</Text>
            </Button>
    )
}

export default SocialButton

// const ButtonDiv = styled.div`
// width: 400px;
// height: 50px;
// background-color: burlywood;
// display: flex;
// /* justify-content: center; */
// align-items: center;
// `
const Button = styled.div`
height: 40px;
width: 190px;
border: 1px solid silver;
border-radius: 30px;
display: flex;
justify-content: center;
align-items: center;
:hover{
    cursor: pointer;
    background-color: #F8F9FA;
}
`
const Icon = styled.div<{color:string}>`
display: flex;
justify-content: center;
align-items: center;
margin-right: 5px;
color:${({color})=>color}
`
const Text = styled.div`
font-size: 14px;
font-weight: 500;
`