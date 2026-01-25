import { Checkbox } from "antd";
import { useNavigate } from "react-router";
import { useProductStore } from "../../store/useProductStore";

interface CategoryItemProps {
  name: string;
  isSubcategory?: boolean;
  productCount?: number;
  parentCategory?: string;
}

const CategoryItem = ({ name, isSubcategory = false, productCount, parentCategory }: CategoryItemProps) => {
  const { toggleSubcategory, selectedSubcategories, currentCategory, setCurrentCategory } = useProductStore();
  const navigate = useNavigate();
  const selected = selectedSubcategories.includes(name);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();

    // If selecting subcategory from different category, navigate to that category
    if (parentCategory && currentCategory && parentCategory !== currentCategory) {
      setCurrentCategory(parentCategory);
      navigate(`/products/${parentCategory}`);
    }

    toggleSubcategory(name);
  };

  if (!isSubcategory) {
    return (
      <span
        style={{
          color: "#222222",
          fontSize: "16px",
          fontWeight: "500",
        }}
      >
        {name}
      </span>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: "6px 0",
        cursor: "pointer",
        backgroundColor: selected ? "#0b6b3115" : "transparent",
        borderRadius: "4px",
        transition: "background-color 0.2s",
      }}
      onClick={handleClick}
    >
      <Checkbox checked={selected} />
      <span
        style={{
          color: "#0b6b31",
          fontSize: "14px",
          fontWeight: selected ? "600" : "400",
        }}
      >
        {name}
      </span>
      {productCount !== undefined && (
        <span style={{ color: "#999", fontSize: "12px" }}>
          ({productCount})
        </span>
      )}
    </div>
  );
};

export default CategoryItem;
