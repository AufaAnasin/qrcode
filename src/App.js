import {CardWrapper, CardHeader, CardBody, CardHeadline, CardDescription, ImageQR} from "./Components/qrcard.style";

function App() {
  return (
    <div className="App">
        <CardWrapper>
          <CardHeader>
            <ImageQR></ImageQR>
          </CardHeader>
          <CardBody>
            <CardHeadline>Improve your front-end skills by buliding projects
            </CardHeadline>
            <CardDescription>
              Scan the QR code to visit Frontend mentor and take your
              coding skill to the next level
            </CardDescription>
          </CardBody>
        </CardWrapper>
    </div>
  );
}

export default App;
