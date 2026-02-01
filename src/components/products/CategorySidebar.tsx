import {
  Collapse,
  Typography,
  Slider,
  InputNumber,
  Button,
  Divider,
  Input,
} from "antd";
import {
  DownOutlined,
  FilterOutlined,
  ClearOutlined,
  ExperimentOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import CategoryItem from "./CategoryItem";
import { useProductsCategories } from "../../hooks/useProducts";
import { useProductStore } from "../../store/useProductStore";
import type { Product } from "@/types/product";
import FilterByCompany from "../filters/FilterByCompany";
import FilterByAvailability from "../filters/FilterByAvailability";

const { Title, Text } = Typography;

const CategorySidebar = () => {
  const { data: categoriesData } = useProductsCategories();
  const { filters, setFilters, setPriceRange, clearFilters } =
    useProductStore();

  // Local state for price inputs
  const [minPrice, setMinPrice] = useState<number | undefined>(
    filters.min_price,
  );
  const [maxPrice, setMaxPrice] = useState<number | undefined>(
    filters.max_price,
  );

  // Local state for power input
  const [powerInput, setPowerInput] = useState<string>(filters.power || "");

  // Apply power filter
  const applyPowerFilter = () => {
    setFilters({ power: powerInput || undefined });
  };

  // Handle power input key press
  const handlePowerKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      applyPowerFilter();
    }
  };

  // Apply price filter
  const applyPriceFilter = () => {
    setPriceRange(minPrice, maxPrice);
  };

  // Handle slider change
  const handleSliderChange = (value: number[]) => {
    setMinPrice(value[0]);
    setMaxPrice(value[1]);
  };

  // Category collapse items
  const collapseItems = categoriesData?.map((category: Product) => ({
    key: category.name,
    label: <CategoryItem name={category.name} />,
    children: (
      <div style={{ paddingLeft: "8px" }}>
        {category?.subgroups?.map((sub: Product) => (
          <CategoryItem
            key={sub.id}
            name={sub.name}
            isSubcategory
            productCount={sub.product_count}
            parentCategory={category.name}
          />
        ))}
      </div>
    ),
    style: {
      marginBottom: "8px",
      background: "#f5f7f5",
      borderRadius: "8px",
      border: "1px solid #e0e5e0",
    },
  }));

  return (
    <div className="space-y-6">
      {/* Categories Section */}
      <div>
        <Title level={4} style={{ color: "#0b6b31", marginBottom: "8px" }}>
          Categories
        </Title>

        <Collapse
          items={collapseItems}
          bordered={false}
          expandIconPlacement="end"
          expandIcon={({ isActive }) => (
            <DownOutlined
              style={{
                color: "#0b6b31",
                fontSize: "12px",
                transition: "transform 0.3s",
                transform: isActive ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          )}
          style={{ background: "transparent" }}
        />
      </div>

      <Divider style={{ marginTop: 2 }} />

      <div>
        <div className="flex items-center gap-2 mb-3">
          <ShopOutlined className="text-[#0b6b31]" />
          <Title level={5} style={{ color: "#0b6b31", margin: 0 }}>
            Company
          </Title>
        </div>
        <FilterByCompany />
      </div>

      {/* Price Filter Section */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <FilterOutlined className="text-[#0b6b31]" />
          <Title level={5} style={{ color: "#0b6b31", margin: 0 }}>
            Price Range
          </Title>
        </div>

        <div className="px-2">
          <Slider
            range
            min={0}
            max={5000}
            step={50}
            value={[minPrice || 0, maxPrice || 5000]}
            onChange={handleSliderChange}
            styles={{
              track: { backgroundColor: "#0b6b31" },
              handle: { borderColor: "#0b6b31" },
            }}
          />

          <div className="flex gap-2 mt-3">
            <div className="flex-1">
              <Text className="text-xs text-gray-500 block mb-1">Min</Text>
              <InputNumber
                size="small"
                min={0}
                max={maxPrice || 5000}
                value={minPrice}
                onChange={(val) => setMinPrice(val || undefined)}
                prefix="৳"
                style={{ background: "white", border: "1px solid #0b6b31" }}
                className="!w-full"
              />
            </div>
            <div className="flex-1">
              <Text className="text-xs text-gray-500 block mb-1">Max</Text>
              <InputNumber
                size="small"
                min={minPrice || 0}
                max={10000}
                value={maxPrice}
                onChange={(val) => setMaxPrice(val || undefined)}
                prefix="৳"
                style={{ background: "white", border: "1px solid #0b6b31" }}
                className="!w-full"
              />
            </div>
          </div>

          <Button
            type="primary"
            size="small"
            onClick={applyPriceFilter}
            className="!bg-[#0b6b31] !border-none w-full mt-3"
          >
            Apply Price Filter
          </Button>
        </div>
      </div>

      <Divider className="!my-4" />

      {/* Power/Potency Filter */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <ExperimentOutlined className="text-[#0b6b31]" />
          <Title level={5} style={{ color: "#0b6b31", margin: 0 }}>
            Power / Potency
          </Title>
        </div>
        <div className="flex gap-2">
          <Input
            size="small"
            value={powerInput}
            onChange={(e) => setPowerInput(e.target.value)}
            onKeyDown={handlePowerKeyPress}
            placeholder="e.g. 30, 200, 1M"
            style={{ background: "white", border: "1px solid #0b6b31" }}
            className="flex-1"
          />
          <Button
            type="primary"
            size="small"
            onClick={applyPowerFilter}
            className="!bg-[#0b6b31] !border-none"
          >
            Apply
          </Button>
        </div>
      </div>

      <Divider className="!my-4" />

      {/* Availability Filter */}
      <FilterByAvailability />

      <Divider className="!my-4" />

      {/* Clear All Filters */}
      <Button
        type="default"
        icon={<ClearOutlined />}
        onClick={clearFilters}
        className="w-full !border-[#0b6b31] !text-[#0b6b31] hover:!bg-[#0b6b31] hover:!text-white"
      >
        Clear All Filters
      </Button>
    </div>
  );
};

export default CategorySidebar;
