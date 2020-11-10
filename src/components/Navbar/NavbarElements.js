import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { GiScissors } from "react-icons/gi";

export const Nav = styled.nav`
background: transparent;
height: 150px;
display: flex;
justify-content: center;

front-weight: 500;
`;

export const NavLink = styled(Link)`
    color: #fff;
    font-size: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    
    @media screen and(max-width: 400px){
        position: absolute;
        top: 10px;
        left: 25px;

    }
`;

export const NavIcon=styled.div`
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    color: #fff;

    p {
        transform: translate(-175%, 100%);
        font-weight: none;
    }
`;
export const Bars= styled(GiScissors)`
    font-size: 2rem;
    transform: translate(-50%,-15%);

`;