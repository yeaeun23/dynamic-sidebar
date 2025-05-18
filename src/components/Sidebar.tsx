import { useEffect, useRef } from "react";
import { Form } from "react-bootstrap";
import * as Styled from "./Sidebar.styles";
import TreeNode from "./TreeNode";
import orgData from "../data/tree.json";

interface SidebarProps {
  isFloating: boolean;
  isResizable: boolean;
  setIsFloating: React.Dispatch<React.SetStateAction<boolean>>;
  setIsResizable: React.Dispatch<React.SetStateAction<boolean>>;
  width: number;
  setWidth: React.Dispatch<React.SetStateAction<number>>;
}

function Sidebar(props: SidebarProps) {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const isResizing = useRef(false);

  const onMouseDown = (e: React.MouseEvent) => {
    isResizing.current = true;
    e.preventDefault();
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!isResizing.current || !sidebarRef.current) return;
    const newWidth = e.clientX - sidebarRef.current.getBoundingClientRect().left;

    if (newWidth > 100 && newWidth < 600) {
      props.setWidth(newWidth);
    }
  };

  const onMouseUp = () => {
    isResizing.current = false;
  };

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return (
    <Styled.Sidebar ref={sidebarRef} width={props.width} $isFloating={props.isFloating}>
      <Styled.Settings>
        {/* 고정 스위치 */}
        <Form.Check
          type="switch"
          label="Fixed / Floating"
          checked={props.isFloating}
          onChange={() => props.setIsFloating((prev: boolean) => !prev)}
        />
        {/* 리사이즈 스위치 */}
        <Form.Check
          type="switch"
          label="Resize Handler"
          checked={props.isResizable}
          onChange={() => props.setIsResizable((prev: boolean) => !prev)}
        />
      </Styled.Settings>

      {
        /* 리사이즈 핸들러 */
        props.isResizable && <Styled.ResizeHandler onMouseDown={onMouseDown} />
      }

      {/* 조직도(트리) */}
      <Styled.Department>
        {orgData.map((node) => (
          <TreeNode key={node.deptCode} node={node} />
        ))}
      </Styled.Department>
    </Styled.Sidebar>
  );
}

export default Sidebar;
