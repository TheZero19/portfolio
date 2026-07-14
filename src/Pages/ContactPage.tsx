import React, { useState } from 'react';
import styled from 'styled-components';
import { Column } from '../Styles/StyledComponents';

const CenterContainer = styled(Column)`
  align-items: center;
  margin-top: 24px;
`;

const ContactContainer = styled(Column)`
  width: min(100%, 520px);
  padding: 24px;
  align-items: center;
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 12px;
  color: var(--text);

  @media (max-width: 768px) {
    padding: 20px 16px;
  }
`;

const Title = styled.h2`
  margin: 8px 0 8px;
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--text);

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Input = styled.input`
  width: 100%;
  max-width: 420px;
  padding: 11px 13px;
  margin: 8px 0;
  border: 1px solid var(--border);
  border-radius: 8px;
  font-size: 0.95rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  max-width: 420px;
  padding: 11px 13px;
  margin: 8px 0;
  border: 1px solid var(--border);
  border-radius: 8px;
  font-size: 0.95rem;
  min-height: 120px;
  resize: vertical;
`;

const Button = styled.button`
  padding: 11px 18px;
  margin: 16px 0 8px;
  background: var(--accent);
  color: #0c0e13;
  border: none;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    filter: brightness(1.05);
  }
`;

const ContactMe: React.FC = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    const formattedMessage = `Hey my name is ${name}\n${message}`;
    const url = `https://wa.me/${process.env.REACT_APP_WA_NUMBER}?text=${encodeURIComponent(formattedMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <CenterContainer>
      <ContactContainer>
        <Title>Contact Me</Title>
        <Input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextArea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button onClick={handleSubmit}>Send via WhatsApp</Button>
      </ContactContainer>
    </CenterContainer>
  );
};

export default ContactMe;