import { Collapse, type MenuProps } from "antd";
import {
  DownOutlined,
  ExperimentOutlined,
} from "@ant-design/icons";
import CategoryItem from "../products/CategoryItem";
import type { Product } from "@/types/product";

const FilterByCompany = () => {
//   const collapseItems = categoriesData?.map((category: Product) => ({
//     key: category.name,
//     label: <CategoryItem name={category.name} />,
//     children: (
//       <div style={{ paddingLeft: "8px" }}>
//         {category?.subgroups?.map((sub: Product) => (
//           <CategoryItem
//             key={sub.id}
//             name={sub.name}
//             isSubcategory
//             productCount={sub.product_count}
//             parentCategory={category.name}
//           />
//         ))}
//       </div>
//     ),
//     style: {
//       marginBottom: "8px",
//       background: "#f5f7f5",
//       borderRadius: "8px",
//       border: "1px solid #e0e5e0",
//     },
//   }));
  return (
   <div>
        
    <Collapse
    //   items={collapseItems}
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
  );
};

export default FilterByCompany;
