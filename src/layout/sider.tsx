import { Layout, Menu } from "antd";

import { ItemType, MenuItemType } from "antd/es/menu/hooks/useItems";
import { useLocation, useNavigate } from "react-router-dom";

const items: ItemType<MenuItemType>[] = [
  {
    label: "Tài chính",
    key: "tai-chinh",
    
    children: [
      {
        label: "Thu chi",
        key: "thu-chi",
      },
      {
        label: "Công nợ",
        key: "cong-no",
      },
    ],
  },
  {
    label: "Quản lý bán hàng",
    key: "ban-hang",
    
    children: [
      {
        label: "Quản lý khách hàng",
        key: "khach-hang",
      },
      {
        label: "Đơn hàng",
        key: "don-hang",
      },
      {
        label: "Tồn kho",
        key: "ton-kho",
      },
    ],
  },
  {
    label: "Quản lý kho",
    key: "quan-ly-kho",
    
    children: [
      {
        label: "Vật tư",
        key: "vat-tu",
      },
      {
        label: "Thiết bị",
        key: "thiet-bi",
      },
    ],
  },
];


export function Sider() {
  const navigate = useNavigate();
  const {pathname} = useLocation();
  
  const onSelect = ({keyPath}: {keyPath: string[]}) => {
    navigate(keyPath.reverse().join("/"));
  };
  return (
    <Layout.Sider width={200}>
      <Menu mode="inline" items={items} onSelect={onSelect} selectedKeys={pathname.split("/")} defaultOpenKeys={["tai-chinh", "ban-hang", "quan-ly-kho"]} />
    </Layout.Sider>
  );
}
