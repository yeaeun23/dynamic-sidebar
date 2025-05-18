import styled from "styled-components";

export const NodeRow = styled.div<{ $active: boolean; $level: number }>`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  user-select: none;
  padding: 8px 10px;
  padding-left: ${({ $level }) => ($level === 0 ? 10 : $level * 20)}px;
  background-color: ${({ $active }) => ($active ? "#0d6efd" : "transparent")};
  color: ${({ $active }) => ($active ? "#fff" : "inherit")};
`;

export const IconPlaceholder = styled.span`
  width: 1em;
`;
