import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Contents from "./components/Contents";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Contents />} />
          <Route path="dept/:deptCode" element={<Contents />} />
          <Route path="*" element={<Contents />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
