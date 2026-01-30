import { Collapse, ConfigProvider, Typography } from "antd";
import { DownOutlined } from "@ant-design/icons";
import CategoryItem from "./CategoryItem";
import { useProductsCategories } from "../../hooks/useProducts";
import type { Product } from "@/types/product";

const { Title } = Typography;


const CategorySidebar = () => {
  const {data: categoriesData} = useProductsCategories()

const collapseItems = categoriesData?.map((category: Product) => ({
  key: category.name,
  label: <CategoryItem name={category.name} />,
  children: (
    <div style={{ paddingLeft: "8px" }}>
      {category?.subgroups?.map((sub:Product) => (
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
    <div>
      <Title level={4} style={{ color: "#0b6b31", marginBottom: "16px" }}>
        Categories
      </Title>
      <ConfigProvider
        theme={{
          components: {
            Collapse: {
              headerBg: "transparent",
              contentBg: "transparent",
              headerPadding: "12px 16px",
              contentPadding: "0 16px 12px",
            },
          },
        }}
      >
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
      </ConfigProvider>
    </div>
  );
};

export default CategorySidebar;
