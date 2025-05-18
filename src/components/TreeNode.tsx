import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as Styled from "./TreeNode.styles";

interface TreeNodeProps {
  node: any;
  level?: number;
}

function TreeNode({ node, level = 0 }: TreeNodeProps) {
  const [expanded, setExpanded] = useState<boolean>(false);
  const hasChildren: boolean = node.subDept && node.subDept.length > 0;
  const navigate = useNavigate();
  const { deptCode } = useParams<{ deptCode?: string }>();
  const isActive = deptCode === String(node.deptCode);
  const depthWidth = 20;

  const handleClickDept = () => {
    navigate(`/dept/${node.deptCode}`);
  };

  return (
    <>
      <Styled.NodeRow $active={isActive} $level={level} onClick={handleClickDept}>
        {/* 들여쓰기 */}
        <span style={{ paddingLeft: level === 0 ? 0 : depthWidth }}></span>
        {
          /* 펼치기/접기 아이콘 */
          hasChildren ? (
            <i
              className={`bi ${expanded ? "bi-dash-circle" : "bi-plus-circle-fill"}`}
              onClick={(e) => {
                e.stopPropagation(); // 부모 클릭 이벤트 전파 차단
                setExpanded(!expanded);
              }}
            />
          ) : (
            <Styled.IconPlaceholder />
          )
        }
        {/* 부서명 */}
        <span>{node.deptName}</span>
      </Styled.NodeRow>

      {
        /* 하위 부서 */
        expanded &&
          hasChildren &&
          node.subDept.map((dept: any) => (
            <TreeNode key={dept.deptCode} node={dept} level={level + 1} />
          ))
      }
    </>
  );
}

export default TreeNode;
