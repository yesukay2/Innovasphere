import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <p>© 2014 InnovaSphere. All rights reserved.</p>
      <p>Email: <a href="mailto:info@innovasphere.com">info@innovasphere.com</a></p>
      <p>Phone: +1 (820) 336-3028</p>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding: 0.2rem;
  background-color: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.black};
  margin-top: 2rem;
  font-size: 0.8rem;
`;

export default Footer;