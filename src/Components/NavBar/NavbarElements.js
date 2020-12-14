import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';

export const Nav = styled.nav`
    background-color: #121214;
    height: 6rem;
    display: flex;
    justify-content: space-between;
    z-index: 10;
    font-size: 1rem;
`
export const NavLogo = styled(Link)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: 5rem;
    font-weight: bold;
    text-decoration: none;
`
export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &.active{
        border-bottom: 0.3rem solid #33a0ff;
        color:#33a0ff;
    }
    &:hover{
        color:#33a0ff;
    }
`
export const Bars = styled(FaBars)`
        display:none;
        color: #fff;

        @media screen and (max-width: 76.8rem){
            display: block;
            position: absolute;
            top: 0;
            right: 0;
            transform: translate(-100%, 100%);
            font-size: 2rem;
            cursor: pointer;
        }
`
export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: 5rem;

    @media screen and (max-width: 76.8rem){
        display: none;
    }
`
