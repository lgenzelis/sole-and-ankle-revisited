import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { COLORS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import NavLink from '../NavLink';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <StyledDialogOverlay isOpen={isOpen} onDismiss={onDismiss} >
      <StyledDialogContent aria-label="navigation menu">
        <CloseButton onClick={onDismiss}>
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
          <Icon id="close" strokeWidth={2} />
        </CloseButton>
        <Filler />
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Filler>
          <Footer>
            <FooterLink href="/terms">Terms and Conditions</FooterLink>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/contact">Contact Us</FooterLink>
          </Footer>
        </Filler>
      </StyledDialogContent>
    </StyledDialogOverlay>
  );
};

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 32px;
  right: 22px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StyledDialogOverlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: hsla(220, 5%, 40%, 0.8);
`;

const StyledDialogContent = styled(DialogContent)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 20%;
  display: flex;
  flex-direction: column;
  background: ${COLORS.white};
  padding: 32px;
`;

const Filler = styled.div`
  flex: 1;
`;

const Footer = styled.footer`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: ${COLORS.gray[700]};
  font-size: ${14 / 16}rem;
  
  :first-child {
    margin-top: auto;
  }
`;

export default MobileMenu;
