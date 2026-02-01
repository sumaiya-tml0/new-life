import { Typography, Tag, Row, Col, Spin, Pagination, Empty, Select } from "antd";
import { SortAscendingOutlined } from "@ant-design/icons";
import { useProductStore } from "../../store/useProductStore";
import { useProducts } from "../../hooks/useProducts";
import ProductCard from "./ProductCard";
import type { SortOption } from "../../api/product_api";

const { Text, Title } = Typography;

// Sorting options
const sortOptions = [
  { value: "", label: "Default" },
  { value: "name", label: "Name (A-Z)" },
  { value: "-name", label: "Name (Z-A)" },
  { value: "price", label: "Price (Low to High)" },
  { value: "-price", label: "Price (High to Low)" },
  { value: "-created_at", label: "Newest First" },
  { value: "created_at", label: "Oldest First" },
];

const ProductGrid = () => {
  const {
    filters,
    currentCategory,
    selectedSubgroup,
    searchQuery,
    currentPage,
    clearSearch,
    setSelectedSubgroup,
    setCurrentPage,
    setPriceRange,
    setFilters,
    setSorting,
    clearFilters,
  } = useProductStore();

  // Use the unified products hook with all filters
  const { data, isLoading } = useProducts(filters);

  const products = data?.results || [];
  const totalItems = data?.count || 0;

  // Check if any filters are active
  const hasActiveFilters =
    selectedSubgroup ||
    filters.min_price ||
    filters.max_price ||
    filters.featured ||
    filters.power;

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  // Handle sort change
  const handleSortChange = (value: string) => {
    setSorting(value as SortOption);
  };

  // Clear price filter
  const clearPriceFilter = () => {
    setPriceRange(undefined, undefined);
  };

  // Clear featured filter
  const clearFeaturedFilter = () => {
    setFilters({ featured: undefined });
  };

  // Clear power filter
  const clearPowerFilter = () => {
    setFilters({ power: undefined });
  };

  // Clear sorting
  const clearSorting = () => {
    setSorting("");
  };

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
          {currentCategory}
        </Title>
      )}

      {/* Active filters display */}
      {hasActiveFilters && (
        <div className="mb-3 sm:mb-4 flex items-center flex-wrap gap-2">
          <Text className="text-gray-600 text-sm">Active Filters:</Text>

          {/* Subgroup filter */}
          {selectedSubgroup && (
            <Tag
              closable
              onClose={() => setSelectedSubgroup(null)}
              className="!bg-[#0b6b31] !text-white !border-none !rounded text-xs sm:text-sm"
            >
              {selectedSubgroup}
            </Tag>
          )}

          {/* Price filter */}
          {(filters.min_price || filters.max_price) && (
            <Tag
              closable
              onClose={clearPriceFilter}
              className="!bg-[#2e3191] !text-white !border-none !rounded text-xs sm:text-sm"
            >
              ৳{filters.min_price || 0} - ৳{filters.max_price || "∞"}
            </Tag>
          )}

          {/* Featured filter */}
          {filters.featured && (
            <Tag
              closable
              onClose={clearFeaturedFilter}
              className="!bg-[#b11319] !text-white !border-none !rounded text-xs sm:text-sm"
            >
              Featured Only
            </Tag>
          )}

          {/* Power filter */}
          {filters.power && (
            <Tag
              closable
              onClose={clearPowerFilter}
              className="!bg-[#6b5b0b] !text-white !border-none !rounded text-xs sm:text-sm"
            >
              Power: {filters.power}
            </Tag>
          )}

          {/* Clear all */}
          <Tag
            onClick={clearFilters}
            className="!bg-transparent !text-[#0b6b31] !border !border-[#0b6b31] !rounded cursor-pointer text-xs sm:text-sm hover:!bg-[#0b6b31] hover:!text-white transition-colors"
          >
            Clear All
          </Tag>
        </div>
      )}

      {/* Results count and Sorting */}
      <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <Text className="text-gray-500 text-sm">
          {totalItems} product{totalItems !== 1 ? "s" : ""} found
        </Text>

        {/* Sorting Dropdown */}
        <div className="flex items-center gap-2">
          <SortAscendingOutlined className="text-gray-500" />
          <Select
            value={filters.ordering || ""}
            onChange={handleSortChange}
            options={sortOptions}
            style={{ width: 180,  background: "white", border: "1px solid #0b6b31" }}
            size="small"
            placeholder="Sort by"
          />
          {filters.ordering && (
            <Tag
              closable
              onClose={clearSorting}
              className="!bg-gray-100 !text-gray-700 !border-gray-300 !rounded text-xs"
            >
              {sortOptions.find((o) => o.value === filters.ordering)?.label}
            </Tag>
          )}
        </div>
      </div>

      {/* Results Section */}
      {isLoading ? (
        <div className="flex justify-center py-10">
          <Spin size="large" />
        </div>
      ) : products.length === 0 ? (
        <div className="flex justify-center py-10">
          <Empty
            description={
              <span className="text-gray-500">
                No products found. Try adjusting your filters.
              </span>
            }
          />
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
          {totalItems > 24 && (
            <div className="flex justify-center mt-10 mb-6">
              <Pagination
                current={currentPage}
                total={totalItems}
                pageSize={24}
                onChange={handlePageChange}
                showSizeChanger={false}
                responsive
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProductGrid;
