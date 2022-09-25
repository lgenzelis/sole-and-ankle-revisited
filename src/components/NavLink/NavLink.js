import styled from 'styled-components/macro';

import {  WEIGHTS } from '../../constants';

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary)
  }
`;

export default NavLink;
