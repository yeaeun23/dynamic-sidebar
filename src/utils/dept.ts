interface DeptNode {
  deptCode: number;
  deptName: string;
  subDept?: DeptNode[];
}

// 부서 코드로 부서명 찾기
export function findDeptByCode(data: DeptNode[], targetCode: string): DeptNode | null {
  for (const node of data) {
    if (String(node.deptCode) === targetCode) {
      return node;
    }

    if (node.subDept) {
      const found = findDeptByCode(node.subDept, targetCode);
      if (found) return found;
    }
  }

  return null;
}
