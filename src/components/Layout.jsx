import React from 'react';
import {Container} from "./styled/container.styled";
import {Header, Heading1} from "./styled/header.styled";
import ImagesPage from "../pages/ImagesPage.jsx";

function Layout() {
    return (
        <Container>
            <Header>
                <Heading1>Image library</Heading1>
            </Header>
            <ImagesPage/>
        </Container>
    );
}

export default Layout;