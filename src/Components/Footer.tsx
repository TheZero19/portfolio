import React from 'react';
import styled from 'styled-components';
import { Row } from '../Styles/StyledComponents';

const FooterContainer = styled(Row)`
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    color: #9fb4c8;
    min-height: 48px;
    padding: 14px 16px 28px;
    font-size: 0.82rem;
    gap: 6px;

    a {
        color: #7fd3ff;
    }
`;

const MyLink = styled.a`
    color: #f6fbff !important;
    font-weight: 600;
`

const Icon = styled.img`
    height: 16px;
    width: 16px;
    border-radius: 4px;
`

const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <span>This portfolio was made by</span>
            <MyLink href="https://solilius.github.io/portfolio/#/about-me" target="_blank" rel="noopener noreferrer">Sol Elan</MyLink>
            <Icon src={`${process.env.PUBLIC_URL}/favicon.ico`} />
            <a href="https://github.com/solilius/portfolio-template" target="_blank" rel="noopener noreferrer">Open the free template</a>
        </FooterContainer>
    );
};

export default Footer;