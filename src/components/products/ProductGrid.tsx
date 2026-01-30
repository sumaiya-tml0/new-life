import { Typography, Tag, Row, Col, Spin, Pagination } from "antd";
import { useProductStore } from "../../store/useProductStore";
import { useAllProducts, usefilterProductsBySubgroup, useItemsByCategory } from "../../hooks/useProducts";
import ProductCard from "./ProductCard";
import { useState } from "react";

const { Text, Title } = Typography;

const ProductGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const {
    currentCategory,
    selectedSubgroup,
    searchQuery,
    clearSearch,
    setSelectedSubgroup,
  } = useProductStore();

  // Fetch all products when no category/subgroup is selected
  const { data: allProductsData, isLoading: allLoading } = useAllProducts(
    [],
    currentPage,
  );

  // Fetch products by category
  const { data: categoryData, isLoading: categoryLoading } = useItemsByCategory(
    currentCategory || "",
  );

  // Fetch filtered products when a subgroup is selected
  const { data: filteredData, isLoading: filteredLoading } = usefilterProductsBySubgroup(
    selectedSubgroup || "",
  );

  // Priority: subgroup > category > all products
  const data = selectedSubgroup
    ? filteredData
    : currentCategory
      ? categoryData
      : allProductsData;
  const isLoading = selectedSubgroup
    ? filteredLoading
    : currentCategory
      ? categoryLoading
      : allLoading;

  // Note: Adjust 'data.results' and 'data.count' based on your actual API response structure
  const products = data?.results || [];
  const totalItems = data?.count || 0;

  // 2. Client-side search filtering (if your API doesn't handle search)
  const filteredProducts =
    products?.results?.filter((product) => {
      if (!searchQuery) return true;
      const query = searchQuery.toLowerCase();
      return (
        product.name.toLowerCase().includes(query) ||
        product.category?.toLowerCase().includes(query)
      );
    }) || [];

  return (
    <div>
      {/* Search query indicator */}
      {searchQuery && (
        <div className="mb-3 sm:mb-4 flex items-center flex-wrap gap-2">
          <Text className="text-gray-600 text-sm">Search results for:</Text>
          <Tag
            closable
            onClose={clearSearch}
            className="!bg-[#0b6b31] !text-white !border-none !rounded text-xs sm:text-sm"
          >
            "{searchQuery}"
          </Tag>
        </div>
      )}

      {/* Category title */}
      {currentCategory && !searchQuery && (
        <Title
          level={3}
          className="!text-xl sm:!text-2xl md:!text-3xl !text-[#0b6b31] !mb-3 sm:!mb-4"
        >
          {currentCategory || "All Products"}
        </Title>
      )}

      {/* Active filter */}
      {selectedSubgroup && (
        <div className="mb-3 sm:mb-4 flex items-center flex-wrap gap-2">
          <Text className="text-gray-600 text-sm">Filter:</Text>
          <Tag
            closable
            onClose={() => setSelectedSubgroup(null)}
            className="!bg-[#0b6b31] !text-white !border-none !rounded text-xs sm:text-sm"
          >
            {selectedSubgroup}
          </Tag>
        </div>
      )}

      {/* Results Section */}
      {isLoading ? (
        <div className="flex justify-center py-10">
          <Spin size="large" />
        </div>
      ) : (
        <>
          <Row gutter={[16, 16]}>
            {products.map((product) => (
              <Col key={product.id} xs={12} md={8} lg={6}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>

          {/* Pagination Component */}
          <div className="flex justify-center mt-10 mb-6">
            <Pagination
              current={currentPage}
              total={totalItems}
              pageSize={24}
              onChange={(page) => {
                setCurrentPage(page);
                window.scrollTo(0, 0); // Scroll to top on page change
              }}
              showSizeChanger={false}
              responsive
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ProductGrid;
