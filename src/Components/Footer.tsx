import React from 'react';
import styled from 'styled-components';
import { Row } from '../Styles/StyledComponents';

const FooterContainer = styled(Row)`
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    color: var(--muted);
    min-height: 48px;
    padding: 14px 16px 28px;
    font-size: 0.82rem;
    gap: 6px;

    a {
        color: var(--accent);
    }
`;

const MyLink = styled.a`
    color: var(--text) !important;
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
            <span>Email: </span>
            <MyLink>sampurnakc19@gmail.com</MyLink>
        </FooterContainer>
    );
};

export default Footer;