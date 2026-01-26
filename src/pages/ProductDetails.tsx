import { useParams, useNavigate } from "react-router";
import { Typography, Button, Tag, Breadcrumb, Tabs } from "antd";
import {  ArrowLeftOutlined } from "@ant-design/icons";
import { dummyProducts } from "../data/products";

const { Title, Text, Paragraph } = Typography;

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = dummyProducts.find((p) => p.id === Number(id));

  if (!product) {
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

  const relatedProducts = dummyProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const tabItems = [
    {
      key: "description",
      label: "Description",
      children: (
        <div className="py-4">
          <Paragraph className="text-gray-600 leading-relaxed">
            This is a premium quality {product.category.toLowerCase()} product - {product.name}.
            Made with carefully selected natural ingredients following traditional methods
            that have been passed down through generations.
          </Paragraph>
          <Paragraph className="text-gray-600 leading-relaxed">
            Our products are manufactured under strict quality control measures to ensure
            the highest standards of purity and effectiveness. Each batch is tested for
            quality and potency before being released for sale.
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
            <strong>Dosage:</strong> As directed by the physician or as per the instructions
            on the label.
          </Paragraph>
          <Paragraph className="text-gray-600 leading-relaxed">
            <strong>Storage:</strong> Store in a cool, dry place away from direct sunlight.
            Keep out of reach of children.
          </Paragraph>
        </div>
      ),
    },
    {
      key: "ingredients",
      label: "Ingredients",
      children: (
        <div className="py-4">
          <Paragraph className="text-gray-600 leading-relaxed">
            Made with 100% natural ingredients sourced from trusted suppliers.
            Contains no artificial preservatives, colors, or flavors.
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
            { title: <a href={`/products/${product.category}`}>{product.category}</a> },
            { title: product.name },
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
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-xl"
                  />
                ) : (
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#0b6b31]/10 flex items-center justify-center">
                    <Text className="text-[#0b6b31] text-sm">Image</Text>
                  </div>
                )}
                <Tag className="!absolute !top-4 !left-4 !bg-[#0b6b31] !text-white !border-none !rounded-lg !text-sm !px-3 !py-1">
                  {product.category}
                </Tag>
              </div>
            </div>

            {/* Product Info */}
            <div className="w-full lg:w-1/2">
              <Text className="text-[#2e3191] text-sm uppercase tracking-wide">
                {product.subcategory || product.category}
              </Text>
              <Title level={1} className="!text-[#222] !mt-2 !mb-4">
                {product.name}
              </Title>

              <div className="flex items-center gap-4 mb-6">
                <Title level={2} className="!text-[#0b6b31] !m-0">
                  ৳{product.price}
                </Title>
                <Tag color="green">In Stock</Tag>
              </div>

              <Paragraph className="text-gray-600 mb-6 leading-relaxed">
                Experience the natural healing power of {product.name}. This premium
                {" "}{product.category.toLowerCase()} product is crafted using traditional
                formulations that have been trusted for generations.
              </Paragraph>

              {/* Quantity Selector */}
              {/* <div className="flex items-center gap-4 mb-6">
                <Text className="text-gray-600">Quantity:</Text>
                <InputNumber
                  min={1}
                  max={10}
                  value={quantity}
                  onChange={(value) => setQuantity(value || 1)}
                  className="!w-20"
                />
              </div> */}

              {/* Action Buttons */}
              {/* <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  type="primary"
                  size="large"
                  icon={<ShoppingCartOutlined />}
                  className="!bg-[#0b6b31] !border-[#0b6b31] !rounded-lg !h-12 flex-1"
                >
                  Add to Cart
                </Button>
                <Button
                  type="default"
                  size="large"
                  icon={<HeartOutlined />}
                  className="!border-[#0b6b31] !text-[#0b6b31] !rounded-lg !h-12"
                >
                  Wishlist
                </Button>
              </div> */}

              {/* Product Meta */}
              <div className="border-t border-gray-200 pt-6 space-y-2">
                <Text className="text-gray-500 block">
                  <strong>Category:</strong> {product.category}
                </Text>
                {product.subcategory && (
                  <Text className="text-gray-500 block">
                    <strong>Type:</strong> {product.subcategory}
                  </Text>
                )}
                <Text className="text-gray-500 block">
                  <strong>SKU:</strong> NL-{product.id.toString().padStart(4, "0")}
                </Text>
              </div>
            </div>
          </div>

          {/* Product Tabs */}
          <div className="mt-10 border-t border-gray-200 pt-8">
            <Tabs items={tabItems} className="product-details-tabs" />
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-12">
            <Title level={3} className="!text-[#222] !mb-6">
              Related Products
            </Title>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {relatedProducts.map((relatedProduct) => (
                <div
                  key={relatedProduct.id}
                  onClick={() => navigate(`/product/${relatedProduct.id}`)}
                  className="bg-white rounded-xl p-4 cursor-pointer hover:shadow-lg transition-shadow"
                >
                  <div className="h-24 md:h-32 bg-gradient-to-br from-[#f5f7f5] to-[#e8ebe8] rounded-lg flex items-center justify-center mb-3 overflow-hidden">
                    {relatedProduct.image ? (
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-[#0b6b31]/10 flex items-center justify-center">
                        <Text className="text-[#0b6b31] text-[8px]">Image</Text>
                      </div>
                    )}
                  </div>
                  <Text className="text-[#222] font-medium text-sm line-clamp-2 block">
                    {relatedProduct.name}
                  </Text>
                  <Text className="text-[#0b6b31] font-semibold">
                    ৳{relatedProduct.price}
                  </Text>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
