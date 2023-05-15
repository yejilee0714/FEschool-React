import styled from "styled-components";

const Button = styled.button`
        background-color: royalblue;
        color: #fff;
        padding: 10px;
    `
const ButtonStyle2 = styled(Button)`
        color: #000;
        border: none;
        border-radius: 10px;
        font-weight: bold;
        box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.3);
    `

const ButtonStyle3 = styled(Button)`
        color: goldenrod;
        width: 100%;
        background: lightcyan;
    `

const ButtonStyle4 = styled(ButtonStyle2)`
        border-radius: 20px;
        color: #fff;
        background-color: hotpink;
    `

export { Button, ButtonStyle2, ButtonStyle3, ButtonStyle4 }