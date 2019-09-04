import React from "react";
import styled, { css } from "styled-components";

import { PALETTE, MEDIA_QUERIES, FONT_WEIGHT } from "constants/styles";

import { makeLinkedHeader } from "helpers/makeLinkedHeader";
import { useMatchMedia } from "helpers/useMatchMedia";

const textStyles = css`
  line-height: 1.5;
  color: ${({ theme }) => theme.text};
`;

export const Text = styled.p`
  ${textStyles}
`;

export const Colored = styled.span`
  color: ${(props) => props.color};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "default")};
`;

const headingBase = ({ theme }) => `
  color: ${theme.text};
`;
export const H1 = styled.h1`
  ${headingBase};
  font-size: 2.5rem;
  margin: 1.25em 0 0.67em;
  letter-spacing: -1.2px;
  font-weight: ${FONT_WEIGHT.bold};
`;
export const H2 = styled.h2`
  ${headingBase};
  margin: 3.125rem 0 1.56rem;
  letter-spacing: -1.2px;
  font-weight: ${FONT_WEIGHT.bold};
`;
export const H3 = styled.h3`
  ${headingBase};
`;
export const H4 = styled.h4`
  ${headingBase};
`;
export const H5 = styled.h5`
  ${headingBase};
`;
export const H6 = styled.h6`
  ${headingBase};
`;
export const LinkedH1 = makeLinkedHeader(H1);
export const LinkedH2 = makeLinkedHeader(H2);
export const LinkedH3 = makeLinkedHeader(H3);
export const LinkedH4 = makeLinkedHeader(H4);
export const LinkedH5 = makeLinkedHeader(H5);
export const LinkedH6 = makeLinkedHeader(H6);

export const Quote = styled.blockquote`
  position: relative;
  margin: 2.3rem 0;
  width: 100%;

  p {
    font-size: 1.5rem;
    font-weight: ${FONT_WEIGHT.normal};
    line-height: 1.29;
    color: ${PALETTE.dark};
    margin-left: 2.4rem;
  }

  ::before {
    content: "“";
    font-size: 4rem;
    font-weight: ${FONT_WEIGHT.bold};
    position: absolute;
    left: -0.2rem;
    top: -1rem;
    width: auto;
  }

  @media (${MEDIA_QUERIES.gtLaptop}) {
    width: 80%;
  }
`;

const listBase = css`
  padding: 0;
  padding-left: 2rem;
`;
export const List = styled.ul`
  ${listBase}
`;
export const OrderedList = styled.ol`
  counter-reset: ordered-list-counter;
  ${listBase}
`;
const lineHeight = 1.5;
const bulletPosition = css`
  position: absolute;
  left: -2rem;
`;
export const ListItem = styled.li`
  color: ${({ theme }) => theme.darkGrey};
  line-height: ${lineHeight};
  position: relative;
  margin-top: 1rem;
  margin-bottom: 1rem;
  list-style: none;

  ${(props) =>
    props.hasDot !== false &&
    css`
      ${List} > &:before {
        font-size: 1.5rem;
        line-height: 0.9;
        color: ${PALETTE.darkGray};
        content: "\\002022";
        ${bulletPosition}
      }

      ${OrderedList} > &:before {
        counter-increment: ordered-list-counter;
        line-height: ${lineHeight};
        font-weight: ${FONT_WEIGHT.bold};
        color: ${PALETTE.darkGray};
        content: counter(ordered-list-counter)".";
        ${bulletPosition}
      }

      ${OrderedList} ${OrderedList} > &:before {
        content: counter(ordered-list-counter, lower-roman);
      }
      ${OrderedList} ${OrderedList} ${OrderedList} > &:before {
        content: counter(ordered-list-counter, lower-alpha);
      }
    `}

  @media (${MEDIA_QUERIES.ltTablet}) {
    font-size: 1rem;
  }

  & input[type=checkbox] {
    ${bulletPosition}
    margin-top: .25rem;
    margin-left: -.125rem;
  }
`;
export const Small = styled.small`
  font-size: 75%;
`;
export const Table = styled.table`
  word-break: normal;
  width: 100%;
  margin-top: 1.5rem;
  border-collapse: collapse;
  display: block;
  overflow: auto;
`;
export const TableHead = styled.thead``;
export const TableHeadCell = styled.th`
  font-size: 0.9rem;
  line-height: 2.5;
  text-align: left;
  border-bottom: 1px solid ${PALETTE.lightestGrey};
  color: ${({ theme }) => theme.text};
  padding: 0 1.25rem;
`;
export const TableBody = styled.tbody``;
export const TableRow = styled.tr``;
export const TableCell = styled.td`
  font-size: 1rem;
  background-color: ${({ theme }) => theme.contrast};
  color: ${({ theme }) => theme.darkGrey};
  padding: 1.1rem 1.25rem;
  border-bottom: 1px solid ${PALETTE.lightestGrey};

  @media (${MEDIA_QUERIES.ltMobile}) {
    padding: 1.1rem 0.9rem;
  }
`;
export const Code = styled.code`
  border-radius: 3px;
  border: solid 0.5px ${({ theme }) => theme.medium};
  background-color: ${PALETTE.lighterYellow};
  padding: 0.125rem 0.25rem;
`;
export const Preformatted = styled.pre`
  &&& {
    position: relative;
    background-color: ${PALETTE.lighterGrey};
    padding: 1.25rem 0;
    padding-left: 2.2rem;
    font-size: 0.8rem;
    line-height: 1.7em;
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 0.5rem;
    color: ${PALETTE.darkGrey};
  }

  & ${Code} {
    display: inline-block;
    max-width: 100%;
    padding: 0;
    padding-left: 1rem;
    border: none;
    background-color: transparent;
    overflow: auto;
    line-height: inherit;
  }
  && .line-numbers-rows {
    bottom: 0;
    border: none;
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    margin: -1px;
    padding: 1.25rem 0;
    padding-left: 0.8rem;
    text-shadow: none;
    line-height: inherit;

    // This is gross but gotta override
    & > span::before {
      font-size: 12px;
      color: ${({ theme }) => theme.contrast};
    }
  }
`;
export const Italic = styled.em``;
export const Bold = styled.strong`
  font-weight: ${FONT_WEIGHT.bold};
`;
export const Muted = styled(Text).attrs(() => ({ as: "span" }))`
  color: ${({ theme }) => theme.medium};
`;
export const Strike = styled(Text)`
  text-decoration: line-through;
`;
export const HorizontalRule = styled.hr`
  margin: 2rem 0;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;

export const Sup = styled(({ children, ...props }) => {
  const isMobile = useMatchMedia(`(${MEDIA_QUERIES.ltLaptop})`);
  return isMobile ? null : <sup {...props}>{children}</sup>;
})`
  font-size: 0.687rem;
  color: ${PALETTE.yellow};
  font-weight: ${FONT_WEIGHT.bold};
  padding-left: 2px;
`;
