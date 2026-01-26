import { Row, Col, Empty, Typography, Tag } from "antd";
import ProductCard from "./ProductCard";
import { dummyProducts } from "../../data/products";
import { useProductStore } from "../../store/useProductStore";

const { Text, Title } = Typography;

const ProductGrid = () => {
  const { currentCategory, selectedSubcategories, toggleSubcategory, clearSubcategories, searchQuery, clearSearch } = useProductStore();

  // Filter products based on search query, current category and selected subcategories
  const filteredProducts = dummyProducts.filter((product) => {
    // First filter by search query if present
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        (product.subcategory && product.subcategory.toLowerCase().includes(query));
      if (!matchesSearch) return false;
    }

    // If no category selected, show all products (that match search)
    if (!currentCategory) {
      if (selectedSubcategories.length === 0) return true;
      return product.subcategory && selectedSubcategories.includes(product.subcategory);
    }

    // Filter by current category
    if (product.category !== currentCategory) return false;

    // If no subcategory selected, show all products in this category
    if (selectedSubcategories.length === 0) return true;

    // Filter by selected subcategories
    return product.subcategory && selectedSubcategories.includes(product.subcategory);
  });

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
        <Title level={3} className="!text-xl sm:!text-2xl md:!text-3xl !text-[#0b6b31] !mb-3 sm:!mb-4">
          {currentCategory}
        </Title>
      )}

      {/* Active filters */}
      {selectedSubcategories.length > 0 && (
        <div className="mb-3 sm:mb-4 flex items-center flex-wrap gap-2">
          <Text className="text-gray-600 text-sm">Filters:</Text>
          {selectedSubcategories.map((sub) => (
            <Tag
              key={sub}
              closable
              onClose={() => toggleSubcategory(sub)}
              className="!bg-[#0b6b31] !text-white !border-none !rounded text-xs sm:text-sm"
            >
              {sub}
            </Tag>
          ))}
          <Tag
            onClick={clearSubcategories}
            className="!bg-transparent !text-[#0b6b31] !border !border-[#0b6b31] !rounded cursor-pointer text-xs sm:text-sm hover:!bg-[#0b6b31] hover:!text-white transition-colors"
          >
            Clear All
          </Tag>
        </div>
      )}

      {/* Results count */}
      <div className="mb-3 sm:mb-4">
        <Text className="text-gray-600 text-sm">
          Showing {filteredProducts.length} products
        </Text>
      </div>

      {/* Product grid */}
      {filteredProducts.length === 0 ? (
        <Empty description="No products found" />
      ) : (
        <Row gutter={[12, 12]} className="sm:gutter-[16,16]">
          {filteredProducts.map((product) => (
            <Col key={product.id} xs={12} sm={12} md={8} lg={6}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default ProductGrid;
