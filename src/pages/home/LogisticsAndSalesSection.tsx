import React from "react";
import { Row, Col, Typography, Space, Divider, Flex } from "antd";
import {
  TruckOutlined,
  EnvironmentOutlined,
  TeamOutlined,
  CustomerServiceOutlined,
  ApartmentOutlined,
  GlobalOutlined,
  SafetyCertificateOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import logistic from "../../assets/home/logistic.jpg";
import sales from "../../assets/home/sales.jpg";

const { Title, Text } = Typography;

type Item = {
  icon: React.ReactNode;
  text: string;
};

const logisticsItems: Item[] = [
  {
    icon: <ApartmentOutlined />,
    text: "Nationwide logistics infrastructure of our own.",
  },
  {
    icon: <GlobalOutlined />,
    text: "Delivering products to every corner of the country.",
  },
  {
    icon: <CustomerServiceOutlined />,
    text: "Distribution team is always within your reach.",
  },
  {
    icon: <SafetyCertificateOutlined />,
    text: "Vast marketing network ensures your need.",
  },
  {
    icon: <TeamOutlined />,
    text: "Supply chain management team always on duties.",
  },
  {
    icon: <EnvironmentOutlined />,
    text: "Reaching 100+ cities & towns every day.",
  },
];

const salesItems: Item[] = [
  {
    icon: <TeamOutlined />,
    text: "Steadfast field force committed to product availability.",
  },
  {
    icon: <SafetyCertificateOutlined />,
    text: "Business strength lies in our commitment.",
  },
  {
    icon: <TeamOutlined />,
    text: "300+ dedicated team of expert representatives.",
  },
  { icon: <HeartOutlined />, text: "We sell Medicines & we server Humanity." },
];

const LogisticsAndSalesSection: React.FC = () => {
  return (
    <section style={{ padding: "56px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 16px" }}>
        <Space
          vertical
          style={{ width: "100%" }}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center text-[#222]"
        >
          <Title level={2} style={{ marginBottom: 0 }}>
            Our Strength, <span className="text-[#0b6b31]">Your Support</span>
          </Title>
          <p className="text-gray-500 text-xs sm:text-sm md:text-base max-w-xl mx-auto px-2">
            A strong nationwide distribution backbone powered by an always-ready
            supply chain and a dedicated field team.
          </p>
        </Space>

        <Divider style={{ margin: "20px 0 28px" }} />

        <Row gutter={[16, 16]}>
          <Col xs={24} md={24}>
            <Flex
        
              align="center"
              gap={30}
              style={{ height: "100%", borderRadius: 16 }}
            >
              <div>
                <Space align="center" size={10} style={{ marginBottom: 12 }}>
                  <span style={{ fontSize: 22 }}>
                    <TruckOutlined />
                  </span>
                  <Title level={3} style={{ margin: 0 }}>
                    Our Logistics
                  </Title>
                </Space>

                <Space direction="vertical" size={10} style={{ width: "100%" }}>
                  {logisticsItems.map((item, idx) => (
                    <Space key={idx} align="start" size={10}>
                      <span style={{ fontSize: 18, marginTop: 2 }}>
                        {item.icon}
                      </span>
                      <Text>{item.text}</Text>
                    </Space>
                  ))}
                </Space>
              </div>
              <Space>
                <img src={logistic} alt="" />
              </Space>
            </Flex>
          </Col>

          <Col xs={24} md={24}>
            <Flex
              align="center"
              gap={30}
              style={{ height: "100%", borderRadius: 16 }}
            >
              <Space>
                <img src={sales} alt="" />
              </Space>
              <div>
                <Space align="center" size={10} style={{ marginBottom: 12 }}>
                  <span style={{ fontSize: 22 }}>
                    <TeamOutlined />
                  </span>
                  <Title level={3} style={{ margin: 0 }}>
                    Our Sales Force
                  </Title>
                </Space>

                <Space direction="vertical" size={10} style={{ width: "100%" }}>
                  {salesItems.map((item, idx) => (
                    <Space key={idx} align="start" size={10}>
                      <span style={{ fontSize: 18, marginTop: 2 }}>
                        {item.icon}
                      </span>
                      <Text>{item.text}</Text>
                    </Space>
                  ))}
                </Space>

                <Divider style={{ margin: "16px 0" }} />

                <Space direction="vertical" size={0}>
                  <Text type="secondary">Team Size</Text>
                  <Title level={4} style={{ margin: 0 }}>
                    300+ Expert Representatives
                  </Title>
                </Space>
              </div>
            </Flex>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default LogisticsAndSalesSection;
