import { styled } from "styled-components";

export const EventDiv = styled.div`
  padding: 5px;
  list-style: none;
  background-color: ${({ highlight }) => (highlight ? "#cacaca" : "none")};
  display: "flex";
`;

export const EventDivWithChildCollapsed = styled(EventDiv)`
  &:before {
    content: "+";
  }
`;

export const EventDivWithChildExpanded = styled(EventDiv)`
  &:before {
    content: "-";
  }
`;
