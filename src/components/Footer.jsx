import {
  Facebook,
  Instagram,
  Telegram,
  Twitter,
  WhatsApp,
  YouTube,
  
  LocationOn,
  Call,
  AlternateEmail,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}

`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Description = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}

`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}

`;

const ContactItem = styled.div`
margin-bottom: 15px;
display: flex;
align-items: center;
`;


const Payment = styled.img`
width: 50%;
${mobile({ width: "100%" })}

`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>ShopMe.</Logo>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          impedit molestiae voluptatem porro! Neque nisi debitis voluptatem porro! Neque nisi consequuntur
          harum aut eos?
        </Description>
        <SocialContainer>
          <SocialIcon color="BB5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="E60033">
            <YouTube />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Telegram />
          </SocialIcon>
          <SocialIcon color="E60033">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60033">
            <WhatsApp />
          </SocialIcon>

        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Kid's Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <LocationOn style={{marginRight: "10px"}} /> Uzbekistan. Fergana City. 150100
        </ContactItem>
        <ContactItem>
          {" "}
          <Call style={{marginRight: "10px"}} /> +99890000056
        </ContactItem>
        <ContactItem>
          {" "}
          <AlternateEmail style={{marginRight: "10px"}} /> contact@shopme.org
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
<SocialIcon></SocialIcon>;
