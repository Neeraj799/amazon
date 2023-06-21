import {Facebook, Instagram, MailOutlined, Phone, Room, Twitter } from "@material-ui/icons";
import { styled } from "styled-components"
import { mobile } from "../Responsive";

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column"})}
`;

const Left = styled.div`
    flex: 1;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1`
    font-size: 25px;
    font-family: cursive;
`;
const Desc= styled.p`
    font-size: 15px;
    font-family: cursive;
`;
const SocialContainer = styled.div`
    display: flex;
`;
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    margin-top: 10px;
`;






const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none"})}
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8"})}
`;

    const ContactItem = styled.div`
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    `;

    const Payment = styled.img`
    width: 60%;
    `;


const Footer = () => {
  return (
        <Container>
            <Left>
                <Logo>NYKA.</Logo>
                <Desc>Discover the latest trends and express your personal style with our fashion website. Shop a curated collection of stylish clothing and accessories for men, women, and children. Stay updated with fashion news, get inspired by fashion influencers, and enjoy a seamless shopping experience. Elevate your wardrobe and embrace your fashion journey with us.</Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook />
                    </SocialIcon >
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Women Fashion</ListItem>
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
                        <Room style={{marginRight:"10px"}}/>California Street ,South Eastern California 98447
                        </ContactItem>
                    <ContactItem>
                        <Phone style={{marginRight:"10px"}}/>7994459159
                        </ContactItem>
                    <ContactItem>
                        <MailOutlined style={{marginRight:"10px"}}/>neerajpc744@gmail.com
                    </ContactItem>
                    <Payment src= "https://i.ibb.co/Qfvn4z6/payment.png"/>

            </Right>
        </Container>
  )
}

export default Footer
