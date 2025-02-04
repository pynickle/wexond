import styled, { css } from 'styled-components';

import { transparency, icons } from '~/renderer/constants';
import { ITheme } from '~/interfaces';
import { centerIcon, noButtons } from '~/renderer/mixins';

export const StyledNavigationDrawer = styled.div`
  width: 323px;
  height: 100%;
  position: fixed;
  left: 0;
  display: flex;
  flex-flow: column;

  ${({ theme }: { theme?: ITheme }) => css`
    background-color: ${theme['overlay.section.backgroundColor']};
  `}
`;

export const MenuItems = styled.div`
  display: flex;
  flex-flow: column;
  flex: 1;
  margin-top: 24px;
  padding-bottom: 24px;
  overflow: hidden auto;
  ${noButtons('6px', 'rgba(0, 0, 0, 0.04)', 'rgba(0, 0, 0, 0.12)')};
`;

export const Header = styled.div`
  display: flex;
  margin-top: 32px;
  margin-left: 32px;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: 300;
`;

export const Back = styled.div`
  ${centerIcon()};
  background-image: url(${icons.arrowBack});
  height: 24px;
  width: 24px;
  opacity: 0.54;
  margin-right: 24px;

  ${({ theme }: { theme?: ITheme }) => css`
    filter: ${theme['overlay.foreground'] === 'light'
      ? 'invert(100%)'
      : 'none'};
  `}

  &:hover {
    opacity: 1;
  }
`;

export const Input = styled.input`
  border: none;
  outline: none;

  width: 100%;
  padding-left: 42px;
  background-color: transparent;
  height: 100%;
  font-size: 14px;

  ${({ theme }: { theme?: ITheme }) => css`
    color: ${theme['overlay.foreground'] === 'light'
      ? 'white'
      : `rgba(0, 0, 0, ${transparency.text.high})`};

    &::placeholder {
      color: ${theme['overlay.foreground'] === 'light'
      ? 'rgba(255, 255, 255, 0.54)'
      : `rgba(0, 0, 0, ${transparency.text.medium})`};
    }
  `}
`;

export const Search = styled.div`
  margin-left: 32px;
  margin-right: 32px;
  margin-top: 24px;
  height: 42px;
  border-radius: 30px;

  position: relative;

  ${({ theme }: { theme?: ITheme }) => css`
    background-color: ${theme['overlay.foreground'] === 'light'
      ? 'rgba(255, 255, 255, 0.12)'
      : 'rgba(0, 0, 0, 0.04)'};
  `}

  &:after {
    content: '';
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    ${centerIcon(16)};
    background-image: url(${icons.search});

    ${({ theme }: { theme?: ITheme }) => css`
      filter: ${theme['overlay.foreground'] === 'light'
      ? 'invert(100%)'
      : 'none'};
    `}
  }
`;
