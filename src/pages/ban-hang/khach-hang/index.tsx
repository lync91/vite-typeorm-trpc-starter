import { ContentContainer } from "@/layout";
import { Col, Row } from "antd";
import KhachHangTable from "./khach-hang-table";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

export const khachLoader = async () => {
  return "await fetchPeople";
}

export function KhachHang() {
  const res = useLoaderData();
  console.log(res);
  
  return (
    <ContentContainer>
      <Row>
        <Col span={8}>Col</Col>
        <Col span={8}>Col</Col>
        <Col span={8}>Col</Col>
      </Row>
      <Row>
        <Col span={24}>
          <KhachHangTable />
        </Col>
      </Row>
    </ContentContainer>
  );
}

