import styled from 'styled-components';

const ButtonLink = styled.a`
  float: right;
  padding: 10px 30px;
  border-radius: 10px;
  background-color: #b3ffcc;
  transition: background 0.5s ease;
  cursor: pointer;

  &:hover {
    background: #66ff99;
    transition: background 0.5s ease;
  }
`

export default ButtonLink;
