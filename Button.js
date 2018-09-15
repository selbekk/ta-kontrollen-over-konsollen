import styled from 'styled-components';
import { colors, fonts } from '@bekk/mdx-deck-theme';
const Button = styled.button`
  padding: 10px 20px;
  background-color: ${colors.red};
  color: ${colors.white};
  font-size: 20px;
  font-family: ${fonts.sansSerif};
  border: 0;
  appearance: none;
  border-radius: 3px;
  margin: 20px 0;
`;

export default Button;
