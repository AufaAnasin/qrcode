import styled from "styled-components";

export const Button = styled.button`
    width: 200px;
    height: 50px;
    background-color: ${(props) => props.backgroundColor}; //bikin warna warni dalam satu kode 

    &:hover { //apabila button ini dideketin
        background-color: coral;
    }

    &:active { //apabila button ini diklik
        background-color: white;
    }
`;

export const ButtonLabel = styled.label`
    font-size: 25px;
    color: white;
`