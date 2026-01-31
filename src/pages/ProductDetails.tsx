import { useParams, useNavigate } from "react-router";
import { Typography, Button, Tag, Breadcrumb, Tabs } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useSingleProduct } from "../hooks/useProducts";
import { Loading } from "../shared/Loading";
import type { Product } from "@/types/product";

const { Title, Text, Paragraph } = Typography;

const ProductDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { data: singleProduct, isLoading, error } = useSingleProduct(slug);

  if (isLoading) return <Loading />;

  if (error || !singleProduct) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Title level={2} className="!text-gray-500">
            Product not found
          </Title>
          <Button type="primary" onClick={() => navigate("/products")}>
            Back to Products
          </Button>
        </div>
      </div>
    );
  }

  const tabItems = [
    {
      key: "description",
      label: "Description",
      children: (
        <div className="py-4">
          <Paragraph className="text-gray-600 leading-relaxed">
            {singleProduct?.details?.diseases_text}
          </Paragraph>
        </div>
      ),
    },
    {
      key: "usage",
      label: "How to Use",
      children: (
        <div className="py-4">
          <Paragraph className="text-gray-600 leading-relaxed">
            {singleProduct?.details?.how_to_use}
          </Paragraph>
        </div>
      ),
    },
    {
      key: "dosages",
      label: "Dosages",
      children: (
        <div className="py-4">
          <Paragraph className="text-gray-600 leading-relaxed">
            {singleProduct?.details?.dosages}
          </Paragraph>
        </div>
      ),
    },
    {
      key: "preservation",
      label: "Preservation",
      children: (
        <div className="py-4">
          <Paragraph className="text-gray-600 leading-relaxed">
            {singleProduct?.details?.preservation}
          </Paragraph>
        </div>
      ),
    },
    {
      key: "sideEffect",
      label: "Side effect",
      children: (
        <div className="py-4">
          <Paragraph className="text-gray-600 leading-relaxed">
            {singleProduct?.details?.side_effects}
          </Paragraph>
        </div>
      ),
    },
    {
      key: "awareness",
      label: "Awareness / warnings",
      children: (
        <div className="py-4">
          <Paragraph className="text-gray-600 leading-relaxed">
            {singleProduct?.details?.awareness}
          </Paragraph>
          <Paragraph className="text-gray-600 leading-relaxed">
            {singleProduct?.details?.warnings}
          </Paragraph>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 md:px-8">
        {/* Breadcrumb */}
        <Breadcrumb
          className="mb-6"
          items={[
            { title: <a href="/">Home</a> },
            { title: <a href="/products">Products</a> },
            {
              title: (
                <a
                  href={`/products/${singleProduct?.product_type?.subgroup?.group?.name}`}
                >
                  {singleProduct?.product_type?.subgroup?.group?.name}
                </a>
              ),
            },
            { title: singleProduct.name },
          ]}
        />

        {/* Back Button */}
        <Button
          type="text"
          icon={<ArrowLeftOutlined />}
          onClick={() => navigate(-1)}
          className="!text-[#0b6b31] !mb-4"
        >
          Back
        </Button>

        {/* Product Details Section */}
        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Product Image */}
            <div className="w-full lg:w-1/2">
              <div className="h-64 md:h-96 bg-gradient-to-br from-[#f5f7f5] to-[#e8ebe8] rounded-xl flex items-center justify-center relative overflow-hidden">
                {singleProduct?.images?.map((img: Product) =>
                  // 1. Check if the image URL exists on the current item 'img'
                  img?.image_url ? (
                    <img
                      key={img?.id} // 2. Always add a unique key in a map
                      src={img?.image_url}
                      // 3. Use singleProduct.name for the alt text
                      alt={singleProduct?.name || "Product image"}
                      style={{height: "100%"}}
                      className="w-full object-cover rounded-xl"
                    />
                  ) : (
                    <div
                      key={img.id}
                      className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#0b6b31]/10 flex items-center justify-center"
                    >
                      <span className="text-[#0b6b31] text-sm">No Image</span>
                    </div>
                  ),
                )}

                <Tag className="!absolute !top-4 !left-4 !bg-[#0b6b31] !text-white !border-none !rounded-lg !text-sm !px-3 !py-1">
                  {singleProduct?.product_type?.subgroup?.group?.name}
                </Tag>
              </div>
            </div>

            {/* Product Info */}
            <div className="w-full lg:w-1/2">
              {/* <Text className="text-[#2e3191] text-sm uppercase tracking-wide">
                {product.subcategory || product.category}
              </Text> */}
              <Title level={1} className="!text-[#222] !mt-2">
                {singleProduct?.name}
              </Title>
              <Text className="text-xs !mb-2">
                prod_id: {singleProduct?.prod_id}{" "}
              </Text>
              <br />
              <Text className="text-[#2e3191] text-[9px] sm:text-[10px] md:text-[11px] tracking-wide">
                {singleProduct?.size} {singleProduct?.unit?.code} .{" "}
                {singleProduct?.product_type?.name}
              </Text>
              <Text className="tracking-wide">{singleProduct?.size}</Text>

              <Paragraph className="text-gray-600 my-6 leading-relaxed">
                {singleProduct?.details?.effectiveness}
              </Paragraph>
              <Paragraph className="text-gray-600 mb-6 leading-relaxed">
                {singleProduct?.details?.reference_info}
              </Paragraph>

              <Title level={2} className="!text-[#0b6b31] !m-0">
                ৳{singleProduct?.price}
              </Title>
            </div>
          </div>

          {/* Product Tabs */}
          <div className="mt-10 border-t border-gray-200 pt-8">
            <Tabs items={tabItems} className="product-details-tabs" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
