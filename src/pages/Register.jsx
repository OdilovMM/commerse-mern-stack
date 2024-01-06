import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://png.pngtree.com/background/20230623/original/pngtree-shop-in-the-palm-of-your-hand-3d-store-on-smartphone-picture-image_3989714.jpg")
      center;
  display: flex;
  background-size: cover;

  align-items: center;
  justify-content: center;

`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  opacity: 0.92;
  ${mobile({ width: "75%", borderRadius: "5px" })}

`;
const Title = styled.h1`
font-size: 24px;
font-weight: 300;

`;
const Form = styled.form`
display: flex;
flex-wrap: wrap;
${mobile({ flexDirection: "column" })}

`;
const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;
`;
const Agreement = styled.span`
font-size: 12px;
margin: 12px 0px;
${mobile({ textAlign: "center" })}

`;
const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
${mobile({ width: "100%", borderRadius: "5px" })}

`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create an account</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="email" />
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
