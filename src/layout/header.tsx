import { Avatar, Image, Layout, Flex } from "antd";
import { useRouteLoaderData } from "react-router-dom";
import { BellFilled } from "@ant-design/icons";

export function Header() {
  const me = {
    avatar: undefined,
    firstName: "Ko s"
  }
  return (
    <Layout.Header
      style={{
        display: "flex",
      }}
    >
      <Flex justify="space-between" style={{ width: "-webkit-fill-available" }}>
        <div>
          <Image src="/logo.png" height={32} />
        </div>
        <Flex gap="middle" align="center">
          <BellFilled />
          <Avatar size={36} src={me.avatar} style={{ verticalAlign: "middle" }}>
            {me.firstName.split(" ").map((e) => e.charAt(0))}
          </Avatar>
        </Flex>
      </Flex>
    </Layout.Header>
  );
}
