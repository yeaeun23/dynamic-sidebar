import styled from "styled-components";

export const Sidebar = styled.div.attrs<{ width: number }>((props) => ({
  style: {
    width: `${props.width}px`, // 자주 바뀌는 스타일은 inline style로
  },
}))<{ $isFloating: boolean }>`
  background-color: #fff;
  height: 100vh;
  overflow: auto;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  padding: 20px;
  z-index: 1000;
`;

export const ResizeHandler = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  width: 6px;
  height: 50px;
  cursor: col-resize;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  z-index: 20;
  user-select: none;
`;

export const Department = styled.div`
  margin-top: 50px;
`;
