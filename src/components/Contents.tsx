import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import orgData from "../data/tree.json";
import { findDeptByCode } from "../utils/dept";

function Contents() {
  const { deptCode } = useParams<{ deptCode?: string }>();
  const [deptName, setDeptName] = useState<string | null>(null);

  useEffect(() => {
    if (deptCode) {
      const found = findDeptByCode(orgData, deptCode);
      setDeptName(found ? found.deptName : null);
    }
  }, [deptCode]);

  return (
    <>
      {deptCode ? (
        <>
          <h1>{deptName ?? "Loading.."}</h1>
          <div>{deptCode}</div>
        </>
      ) : (
        <>
          <h1>What is Lorem Ipsum?</h1>
          <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </div>
        </>
      )}
    </>
  );
}

export default Contents;
