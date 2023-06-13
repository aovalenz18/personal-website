'use client'
import Head from "next/head";
import { styled } from "styled-components";


const HeadingName = styled.h3`
    color: #ea744c;
    padding-top: 0.5rem;
`;

const StyledButton = styled.button`
    color: #c5ca54;
    background: transparent;
    border: none;
`;

const NavBarContainer = styled.div`
    display: flex;
    background-color: #015265;
    border-top: 2px solid #d4cac9;
    justify-content: space-evenly;
`;

const NavBar = (props) => {

    const sections = ["Home", "Projects", "Personal Life"];

    return (
    <NavBarContainer {...props}>
    <HeadingName>Anthony Omar Valenzuela</HeadingName>
    {sections.map((section, index) => {
        return <StyledButton key={index}>{section}</StyledButton>
    })}
    </NavBarContainer>
    
    )
};

export default NavBar;