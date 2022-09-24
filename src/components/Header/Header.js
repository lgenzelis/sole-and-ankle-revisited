import React from 'react';
import styled from 'styled-components/macro';

import { BREAKPOINTS, COLORS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';
import NavLink from '../NavLink';
import UnstyledButton from '../UnstyledButton/UnstyledButton';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <DesktopNav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </DesktopNav>
        <MobileIcons>
          <UnstyledButton>
            <Icon id="shopping-bag" strokeWidth={1} />
          </UnstyledButton>
          <UnstyledButton>
            <Icon id="search" strokeWidth={1} />
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(smm => !smm)}>
            <Icon id="menu" strokeWidth={1} />
          </UnstyledButton>
        </MobileIcons>
        <ResponsiveSide />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  --spacing: 32px;
  display: flex;
  align-items: baseline;
  padding: 18px var(--spacing);
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  overflow: auto;

  ${BREAKPOINTS.tabletAndDown} {
    border-top: 4px solid ${COLORS.gray[900]};
    align-items: center;
  }

  ${BREAKPOINTS.phone} {
    --spacing: 16px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 8vw - 3.75rem, 3rem);
  margin: 0px 48px;
  
  ${BREAKPOINTS.tabletAndDown} {
    display: none;
  }
`;

const MobileIcons = styled.div`
  display: none;
  
  ${BREAKPOINTS.tabletAndDown} {
    display: flex;
    gap: var(--spacing);
    margin-left: auto;
  }
`;

const Side = styled.div`
  flex: 1;

  ${BREAKPOINTS.tabletAndDown} {
    flex: revert;
  }
`;

const ResponsiveSide = styled.div`
  flex: 1;

  ${BREAKPOINTS.tabletAndDown} {
    display: none;
  }
`;

export default Header;
