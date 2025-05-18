import { useState } from "react";

interface TreeNodeProps {
  node: any;
  level?: number;
}

function TreeNode({ node, level = 0 }: TreeNodeProps) {
  const [expanded, setExpanded] = useState<boolean>(false);
  const hasChildren: boolean = node.subDept && node.subDept.length > 0;

  return (
    <div style={{ marginLeft: level === 0 ? 0 : 20 }}>
      <div
        onClick={() => hasChildren && setExpanded(!expanded)}
        style={{
          cursor: "pointer",
          display: "flex",
          gap: 10,
        }}
      >
        {hasChildren ? (
          <i className={`bi ${expanded ? "bi-dash-circle" : "bi-plus-circle-fill"}`} />
        ) : (
          <span style={{ marginLeft: 20 }} />
        )}
        <span>{node.deptName}</span>
      </div>

      {expanded &&
        hasChildren &&
        node.subDept.map((dept: any) => (
          <TreeNode key={dept.deptCode} node={dept} level={level + 1} />
        ))}
    </div>
  );
}

export default TreeNode;
