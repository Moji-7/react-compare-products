import styled from "styled-components";

export const Button = styled.a`
  display: block;
  cursor: pointer;
  width: 30px;
  min-width: 30px;
  height: 30px;
  background-color: ${({ theme }) => theme.yellow};
  border-radius: 50%;
  position: relative;

  svg {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
  }
`;

export const Container = styled.div`
  height: 30px;
  display: flex;
`;

export const ButtonLabel = styled.a`
  cursor: pointer;
  font-size: 16px;
  line-height: 22px;
  color: ${({ theme }) => theme.black};
  position: absolute;
  left: 7px;
  max-width: 100%;
  opacity: 1;
  transition: opacity 0.2s ease-in;
`;

export const ShareMenuContainer = styled.div`
  max-width: 0;
  opacity: 0;
  width: auto;
  background-color: ${({ theme }) => theme.yellow};
  border-radius: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  transition: max-width 0.3s ease-in, opacity 0.3s ease-in;
  margin-left: 26px;

  ul {
    margin: 0 13px;
    padding: 0;
    display: flex;
    align-items: center;

    li {
      list-style: none;
      margin-right: 5px;

      button {
        display: flex;
        align-items: center;
      }

      a {
        display: block;
        line-height: 1;
      }
    }
  }
`;

export const ShareClose = styled.a`
  display: block;
  width: 15px;
  height: 15px;
  cursor: pointer;
  position: relative;
  margin-right: 13px;

  &:before,
  &:after {
    position: absolute;
    display: block;
    left: 50%;
    content: "";
    height: 15px;
    width: 1px;
    background-color: ${({ theme }) => theme.black};
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

export const ShareContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;

  &.active {
    ${ShareMenuContainer} {
      max-width: 100%;
      opacity: 1;
    }

    ${ButtonLabel} {
      opacity: 0;
    }
  }
`;
