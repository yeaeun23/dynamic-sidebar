import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Sidebar from "./components/Sidebar";
import * as Styled from "./App.styles";

function App() {
  const [isSidebarFloating, setIsSidebarFloating] = useState<boolean>(true);
  const [isSidebarResizable, setIsSidebarResizable] = useState<boolean>(true);
  const [sidebarWidth, setSidebarWidth] = useState<number>(250);

  return (
    <Styled.AppContainer>
      <Sidebar
        isFloating={isSidebarFloating}
        isResizable={isSidebarResizable}
        setIsFloating={setIsSidebarFloating}
        setIsResizable={setIsSidebarResizable}
        width={sidebarWidth}
        setWidth={setSidebarWidth}
      />
      <Styled.Contents $margin={isSidebarFloating} $marginWidth={sidebarWidth}>
        <h1>What is Lorem Ipsum?</h1>
        <div>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </div>
      </Styled.Contents>
    </Styled.AppContainer>
  );
}

export default App;
