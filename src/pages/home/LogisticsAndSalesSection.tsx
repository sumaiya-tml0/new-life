import React from "react";
import { Typography } from "antd";
import {
  TruckOutlined,
  EnvironmentOutlined,
  TeamOutlined,
  CustomerServiceOutlined,
  ApartmentOutlined,
  GlobalOutlined,
  SafetyCertificateOutlined,
  HeartOutlined,
  ShopOutlined,
  RocketOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

type Item = {
  icon: React.ReactNode;
  title: string;
  text: string;
};

const strengthItems: Item[] = [
  {
    icon: <ApartmentOutlined />,
    title: "Own Infrastructure",
    text: "Nationwide logistics infrastructure of our own.",
  },
  {
    icon: <GlobalOutlined />,
    title: "Nationwide Delivery",
    text: "Delivering products to every corner of the country.",
  },
  {
    icon: <CustomerServiceOutlined />,
    title: "Always Reachable",
    text: "Distribution team is always within your reach.",
  },
  {
    icon: <SafetyCertificateOutlined />,
    title: "Vast Network",
    text: "Vast marketing network ensures your need.",
  },
  {
    icon: <TeamOutlined />,
    title: "Supply Chain",
    text: "Supply chain management team always on duties.",
  },
  {
    icon: <EnvironmentOutlined />,
    title: "100+ Cities",
    text: "Reaching 100+ cities & towns every day.",
  },
  {
    icon: <TruckOutlined />,
    title: "Dedicated Field Force",
    text: "Steadfast field force committed to product availability.",
  },
  {
    icon: <ShopOutlined />,
    title: "Business Commitment",
    text: "Business strength lies in our commitment.",
  },
  {
    icon: <RocketOutlined />,
    title: "300+ Representatives",
    text: "Dedicated team of representatives.",
  },
  {
    icon: <HeartOutlined />,
    title: "Serving Humanity",
    text: "We sell Medicines & we serve Humanity.",
  },
];

const LogisticsAndSalesSection: React.FC = () => {
  return (
    <section className="py-14 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <Title level={2} className="!text-2xl sm:!text-3xl md:!text-4xl !mb-3">
            Our Strength, <span className="text-[#0b6b31]">Your Support</span>
          </Title>
          <Text className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto block">
            A strong nationwide distribution backbone powered by an always-ready
            supply chain and a dedicated field team.
          </Text>
        </div>

        {/* Grid of Items */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {strengthItems.map((item, idx) => (
            <div
              key={idx}
              className="group text-center p-4 md:p-6 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-[#0b6b31]/10 flex items-center justify-center text-2xl md:text-3xl text-[#0b6b31] group-hover:bg-[#0b6b31] group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>

              {/* Description */}
              <Text className="text-gray-500 text-xs md:text-sm leading-relaxed">
                {item.text}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogisticsAndSalesSection;
