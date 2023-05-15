import React from "react";
// import styled, { css } from 'styled-components'
import { Button, ButtonStyle2, ButtonStyle3, ButtonStyle4 } from './Components/Buttons'

export default function App6(){
    return (
        <div>
            <Button>버튼1</Button>
            <ButtonStyle2>버튼2</ButtonStyle2>
            <ButtonStyle3>버튼3</ButtonStyle3>
            <ButtonStyle4>버튼3</ButtonStyle4>
        </div>
    )
}

// const Box = styled.div`
//     display: flex;
//     gap: 5px;
// `
// const One = styled.div`
//     border: 1px solid #000;
//     box-shadow: 2px 2px 1px #000;
//     background: skyblue;
//     color: white;
//     padding: 10px;
// `;

// const Two = styled(One)`
//     box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.6);

//     border: 1px solid black;
//     border-radius: 14px;
//     color: black;
// `;

// const Three = styled(Two)`
//     color: white;
//     border-radius: 20px;
//     background: green;
// `

// const App = () => {
//     return (
//         <Box>
//             <One>버튼 1</One>
//             <Two>버튼 2</Two>
//             <Three>버튼 3</Three>
//         </Box>
//     );
// };

// export default App;