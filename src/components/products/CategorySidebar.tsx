import { Collapse, ConfigProvider, Typography } from "antd";
import { DownOutlined } from "@ant-design/icons";
import CategoryItem from "./CategoryItem";
import { dummyProducts } from "../../data/products";

const { Title } = Typography;

const categories = [
  {
    name: "Ayurvedic",
    subcategories: [
      "Churna",
      "Vati & Gutika",
      "Asava & Arishta",
      "Kwath & Kadha",
      "Tailam",
      "Ghrita",
      "Rasayana",
      "Guggulu",
    ],
  },
  {
    name: "Homeo",
    subcategories: [
      "Mother Tincture",
      "Dilution",
      "Homoeo Combination",
      "Bio-Chemic",
      "Bio Combination",
      "Trituration Tablet",
      "Trituration Powder",
      "NL Series",
      "Homeo Ointment",
    ],
  },
  {
    name: "Unani",
    subcategories: [
      "Majun",
      "Habbe",
      "Sharbat",
      "Roghan",
      "Arq",
      "Khamira",
      "Jawarish",
      "Safoof",
    ],
  },
  {
    name: "Herbal",
    subcategories: [
      "Herbal Juice",
      "Herbal Capsules",
      "Herbal Syrup",
      "Herbal Tea",
      "Herbal Oil",
      "Herbal Powder",
      "Herbal Cream",
    ],
  },
];

const getProductCount = (subcategory: string) => {
  return dummyProducts.filter((p) => p.subcategory === subcategory).length;
};

const collapseItems = categories.map((category) => ({
  key: category.name,
  label: <CategoryItem name={category.name} />,
  children: (
    <div style={{ paddingLeft: "8px" }}>
      {category.subcategories.map((sub) => (
        <CategoryItem
          key={sub}
          name={sub}
          isSubcategory
          productCount={getProductCount(sub)}
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

const CategorySidebar = () => {
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
          expandIconPosition="end"
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
