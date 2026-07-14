import React, { useState } from 'react';
import styled from 'styled-components';
import { Column } from '../Styles/StyledComponents';

const CenterContainer = styled(Column)`
  align-items: center;
  margin-top: 24px;
`;

const ContactContainer = styled(Column)`
  width: min(100%, 520px);
  padding: 28px 24px;
  align-items: center;
  background: linear-gradient(135deg, rgba(9, 18, 34, 0.94), rgba(10, 20, 35, 0.78));
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 24px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.24);
  color: white;
  backdrop-filter: blur(16px);

  @media (max-width: 768px) {
    padding: 20px 16px;
  }
`;

const Title = styled.h2`
  margin: 8px 0 8px;
  font-size: 1.4rem;
  color: #7fd3ff;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Input = styled.input`
  width: 100%;
  max-width: 420px;
  padding: 12px 14px;
  margin: 8px 0;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 12px;
  font-size: 0.95rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  max-width: 420px;
  padding: 12px 14px;
  margin: 8px 0;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 12px;
  font-size: 0.95rem;
  min-height: 120px;
  resize: vertical;
`;

const Button = styled.button`
  padding: 12px 18px;
  margin: 16px 0 8px;
  background: linear-gradient(90deg, #25d366, #1cae55);
  color: white;
  border: none;
  border-radius: 999px;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 10px 24px rgba(37, 211, 102, 0.22);

  &:hover {
    transform: translateY(-1px);
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