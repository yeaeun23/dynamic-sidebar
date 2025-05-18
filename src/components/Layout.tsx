import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./Sidebar";
import * as Styled from "./Layout.styles";

function Layout() {
  const [isSidebarFloating, setIsSidebarFloating] = useState(true);
  const [isSidebarResizable, setIsSidebarResizable] = useState(true);
  const [sidebarWidth, setSidebarWidth] = useState(250);

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
        <Outlet />
      </Styled.Contents>
    </Styled.AppContainer>
  );
}

export default Layout;
