import { FavoriteBorder, Search, ShoppingCart } from "@material-ui/icons"

import styled from "styled-components"

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
`;

const Container = styled.div`
    flex= 1;
    margin: 20px;
    min-width: 200px;
    height: 450px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f5fbfd;
    position: relative;

    &:hover ${Info}{
        opacity: 1;
    }
`;

const Rectangle = styled.div`
    width: 400px;
    height: 350px;
    background-color: white;
    position: absolute;
`;

const Image = styled.img`
    height: 75%;
    z-index: 2;

`;


const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;


    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.1);

 }
`;

const Product = ({item}) => {
  return (
    <Container>
        <Rectangle/>
        <Image src={item.img}/>
        <Info>
            <Icon>
                <ShoppingCart/>
            </Icon>
            <Icon>
                <Search/>
            </Icon>
            <Icon>
                <FavoriteBorder/>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product
