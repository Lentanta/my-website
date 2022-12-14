import NextLink from 'next/link'

import styled from "styled-components";
import { colors } from "@styles/style-constant";
import { StyledTypography } from "@components/Styled/Typography"

export const Link = styled(NextLink)`
  ${StyledTypography}

  font-size: 1.125em;
  line-height: 27px;

  &:hover {
    color: ${colors.lightBlue};
  };
`;