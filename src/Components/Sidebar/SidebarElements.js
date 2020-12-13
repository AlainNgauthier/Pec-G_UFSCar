import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';


export const SidebarContainer = styled.aside`
    font-family: 'Nunito Sans', sans-serif;
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #010606;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${ ({isOpen}) => ( isOpen ? '100%' : '0') };
    top: ${ ({isOpen}) => ( isOpen ? '0' : '-100%') };
`;

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 1.2rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div`
    color: #fff;
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-rows: repeat(3, 8rem);
    grid-template-columns: 1fr;
    justify-content: center;
    text-align: center;

    @media screen and (max-width: 48rem){
        grid-template-rows: repeat(3, 5rem);
    }
`;

export const SidebarLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    
    font-size: 1.7rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #33A0FF;
        transition: 0.2s ease-in-out;
    }
`;
