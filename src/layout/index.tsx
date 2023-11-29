import { Layout as AntdLayout, Breadcrumb, theme } from "antd";
import { Header } from "./header";
import { Sider } from "./sider";
import { Content } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";
import { ReactNode } from "react";
function Layout() {
  return (
    <AntdLayout>
      <Header />
      <AntdLayout>
        <Sider />
        <AntdLayout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Outlet />
        </AntdLayout>
      </AntdLayout>
    </AntdLayout>
  );
}

export default Layout;

export function ContentContainer({children}: {children?: ReactNode | ReactNode[] | undefined}) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Content
      style={{
        padding: 24,
        margin: 0,
        minHeight: 280,
        background: colorBgContainer,
      }}
    >
      {children}
    </Content>
  );
}
