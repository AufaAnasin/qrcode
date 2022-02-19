import styled from "styled-components";
import image from '../images/image-qr-code.png';

export const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 250px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400&display=swap');
  font-family: "Outfit", sans-serif;
`;

export const CardHeader = styled.header`

    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 10px;
    padding-left: 10px;
`;

export const CardHeading = styled.h1`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
`;

export const CardBody = styled.div`
    padding-right: 32px;
    padding-left: 32px;
`

export const CardHeadline = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400&display=swap');
    font-size: 15px;
    font-weight: bold;
    text-align: center;
    font-family: "Outfit", sans-serif;

`;

export const CardDescription = styled.h1`
    font-size: 10px;
    font-weight: lighter;
    text-align: center;
    color: #595857;
`;

export const ImageQR = styled.div`
    border-radius: 20px;
    background-image: url(${image});
    background-size: cover;
    width: 230px;
    height: 230px;
    margin: auto;
`;
