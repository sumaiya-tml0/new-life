import { Layout, Drawer, Button } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { FiFilter, FiX } from "react-icons/fi";
import CategorySidebar from "../components/products/CategorySidebar";
import ProductGrid from "../components/products/ProductGrid";
import { useProductStore } from "../store/useProductStore";

const { Content, Sider } = Layout;

const ProductsLayout = () => {
  const { category } = useParams();
  const { setCurrentCategory } = useProductStore();
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  useEffect(() => {
    setCurrentCategory(category || null);
  }, [category, setCurrentCategory]);

  return (
    <Layout className="min-h-screen bg-gradient-to-b from-[#f8faf8] to-[#f0f5f1]">
      {/* Mobile Filter Button */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        <Button
          type="primary"
          shape="circle"
          size="large"
          icon={<FiFilter className="text-lg" />}
          onClick={() => setMobileFilterOpen(true)}
          className="!bg-[#0b6b31] hover:!bg-[#095228] !border-none !w-14 !h-14 !flex !items-center !justify-center shadow-lg"
        />
      </div>

      {/* Mobile Filter Drawer */}
      <Drawer
        title={
          <div className="flex items-center justify-between">
            <span className="text-[#0b6b31] font-semibold">Filter Products</span>
          </div>
        }
        placement="left"
        onClose={() => setMobileFilterOpen(false)}
        open={mobileFilterOpen}
        width={280}
        closeIcon={<FiX className="text-gray-500" />}
        className="lg:hidden"
      >
        <CategorySidebar />
      </Drawer>

      <div className="px-4 sm:px-6 md:px-8 lg:px-12 pt-6 sm:pt-8 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-6 lg:gap-8">
            {/* Desktop Sidebar */}
            <aside className="hidden lg:block w-[250px] flex-shrink-0">
              <CategorySidebar />
            </aside>

            {/* Main Content */}
            <main className="flex-1 min-w-0">
              <ProductGrid />
            </main>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductsLayout;
