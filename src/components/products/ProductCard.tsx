import { Card, Typography, Button, Tag } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import type { Product } from "../../types/product";

const { Text, Title } = Typography;

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card
      hoverable
      className="!rounded-xl !overflow-hidden !border !border-gray-200 hover:!shadow-lg transition-all duration-300"
      styles={{
        body: {
          padding: "12px",
        },
      }}
      cover={
        <div className="h-32 sm:h-40 md:h-48 bg-gradient-to-br from-[#f5f7f5] to-[#e8ebe8] flex items-center justify-center relative">
          <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-[#0b6b31]/10 flex items-center justify-center">
            <Text className="text-[#0b6b31] text-[10px] sm:text-xs">Image</Text>
          </div>
          <Tag className="!absolute !top-2 !left-2 !bg-[#0b6b31] !text-white !border-none !rounded !text-[9px] sm:!text-[10px] !px-1.5 sm:!px-2">
            {product.category}
          </Tag>
        </div>
      }
    >
      <div className="min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
        <Text className="text-[#2e3191] text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-wide">
          {product.subcategory || product.category}
        </Text>
        <Title
          level={5}
          className="!m-0 !mt-1 !mb-2 !text-[#222] !text-xs sm:!text-sm md:!text-[15px] !leading-tight line-clamp-2"
        >
          {product.name}
        </Title>
      </div>
      <div className="flex justify-between items-center pt-2 sm:pt-3 border-t border-gray-200">
        <Text strong className="text-[#0b6b31] text-sm sm:text-base md:text-lg">
          ৳{product.price}
        </Text>
        <Button
          type="primary"
          size="small"
          icon={<ShoppingCartOutlined />}
          className="!bg-[#0b6b31] !border-[#0b6b31] !rounded-md !text-[10px] sm:!text-xs !px-2 sm:!px-3 !h-7 sm:!h-8"
        >
          <span className="hidden sm:inline">Add</span>
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
