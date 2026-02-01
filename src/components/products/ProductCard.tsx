import { Card, Typography, Button, Tag, Modal, Tooltip, Space } from "antd";
import { EyeOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useNavigate } from "react-router";
import type { Product } from "../../types/product";
import { useSingleProduct } from "../../hooks/useProducts";

const { Text, Title } = Typography;

interface ProductCardProps {
  product: Product;
  compact?: boolean;
}

const ProductCard = ({ product, compact = false }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [quickViewOpen, setQuickViewOpen] = useState(false);
  const navigate = useNavigate();

  const { data: singleProduct } = useSingleProduct(product?.slug);

  const handleDetailsClick = () => {
    navigate(`/product/${product?.slug}`);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.stopPropagation();
    setQuickViewOpen(true);
  };

  return (
    <>
      <Card
        hoverable
        className="!rounded-xl !overflow-hidden !border !border-gray-200 hover:!shadow-lg transition-all duration-300"
        styles={{
          body: {
            padding: compact ? "10px" : "12px",
          },
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        cover={
          <div
            className={`w-full h-48 lg:h-56 bg-gradient-to-br from-[#f5f7f5] to-[#e8ebe8] flex items-center justify-center relative overflow-hidden`}
          >
            {product.primary_image ? (
              <img
                src={product?.primary_image}
                alt={product?.name}
                style={{ height: "100%" }}
                className={`w-full object-cover transition-transform duration-300 ${
                  isHovered ? "scale-110" : "scale-100"
                }`}
              />
            ) : (
              <div className="w-14 h-14  flex items-center justify-center"></div>
            )}
            <Tag className="!absolute !top-2 !left-2 !bg-[#0b6b31] !text-white !border-none !rounded !text-[9px] sm:!text-[10px] !px-1.5 sm:!px-2 !z-10">
              {product?.group_name}
            </Tag>

            {/* Hover Buttons - Slide up from bottom */}
            <div
              className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2 sm:p-3 flex items-center justify-center gap-2 transition-all duration-300 ${
                isHovered
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-full"
              }`}
            >
              <Tooltip title="Quick View">
                <Button
                  type="primary"
                  shape="circle"
                  icon={<EyeOutlined />}
                  onClick={handleQuickView}
                  className="!bg-white !text-[#0b6b31] !border-none hover:!bg-[#0b6b31] hover:!text-white"
                />
              </Tooltip>
              <Tooltip title="View Details">
                <Button
                  type="primary"
                  shape="circle"
                  icon={<ArrowRightOutlined />}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDetailsClick();
                  }}
                  className="!bg-[#0b6b31] !text-white !border-none hover:!bg-[#095228]"
                />
              </Tooltip>
            </div>
          </div>
        }
      >
        <Space vertical size={"small"}>
          <Title
            level={5}
            className=" !text-[#222] !text-xs sm:!text-sm md:!text-[15px] !leading-tight line-clamp-2"
          >
            {product?.name}
          </Title>
          <Text className="text-[#2e3191] text-[9px] sm:text-[10px] md:text-[11px] tracking-wide">
            {product?.size} {product?.unit_display} . {product?.type_name}
          </Text>

          {singleProduct?.details?.diseases_text && (
            <Text className="text-xs">
              {singleProduct?.details?.diseases_text}
            </Text>
          )}
        </Space>
        <div className="flex justify-between items-center pt-2 sm:pt-3 border-t border-gray-200">
          <Text
            strong
            className="text-[#0b6b31] text-sm sm:text-base md:text-lg"
          >
            ৳{product?.price}
          </Text>
        </div>
      </Card>

      {/* Quick View Modal */}
      <Modal
        open={quickViewOpen}
        onCancel={() => setQuickViewOpen(false)}
        footer={null}
        width={600}
        centered
        className="quick-view-modal"
      >
        <div className="flex flex-col md:flex-row gap-6 p-4">
          {/* Product Image */}
          <div className="w-full md:w-1/2 h-48 md:h-64 bg-gradient-to-br from-[#f5f7f5] to-[#e8ebe8] rounded-lg flex items-center justify-center overflow-hidden">
            {product.primary_image ? (
              <img
                src={product.primary_image}
                alt={product.name}
                style={{ height: "100%" }}
                className="w-full object-cover rounded-lg"
              />
            ) : (
              <div className="w-20 h-20 rounded-full bg-[#0b6b31]/10 flex items-center justify-center">
                <Text className="text-[#0b6b31] text-xs">Image</Text>
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="w-full md:w-1/2 flex flex-col justify-between">
            <Space vertical size="small">
              {product?.name && (
                <Title level={3} className="!text-[#222]">
                  {product?.name}
                </Title>
              )}
              <Text className="text-xs">Product Id: {product?.prod_id} </Text>

              <Text className="text-xs">
                {product?.size} {product?.unit_display} . {product?.type_name}
              </Text>

              {product?.company_name && (
                <Text className="text-xs" style={{ whiteSpace: "nowrap" }}>
                  <span className="text-[#0b6b31]">Company Name:</span>{" "}
                  {product?.company_name}
                </Text>
              )}

              {product?.group_name && (
                <Text className="text-xs">
                  <span className="text-[#0b6b31]">Category:</span>{" "}
                  {product?.group_name}
                </Text>
              )}
              {singleProduct?.details?.diseases_text && (
                <Text className="text-xs">
                  {singleProduct?.details?.diseases_text}
                </Text>
              )}

              <Title level={3} className="!text-[#0b6b31] !mb-4">
                ৳{product.price}
              </Title>
            </Space>

            <div className="flex gap-3">
              {/* <Button
                type="primary"
                icon={<ShoppingCartOutlined />}
                size="large"
                className="!bg-[#0b6b31] !border-[#0b6b31] !rounded-lg flex-1"
              >
                Add to Cart
              </Button> */}
              <Button
                type="default"
                icon={<ArrowRightOutlined />}
                size="large"
                onClick={() => {
                  setQuickViewOpen(false);
                  handleDetailsClick();
                }}
                className="!border-[#0b6b31] !text-[#0b6b31] !rounded-lg flex-1"
              >
                View Details
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ProductCard;
