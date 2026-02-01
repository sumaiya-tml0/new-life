import { Outlet, useLocation } from "react-router";
import { ConfigProvider } from "antd";
import { useEffect } from "react";
import Header from "../shared/Header.tsx";
import Footer from "../shared/Footer.tsx";

// Color palette from logo
// Primary Green: #0b6b31
// Secondary Blue: #2e3191
// Accent Red: #b11319

const MainLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: "Roboto Slab",
            colorBgContainer: "#0b6b31",
            colorPrimary: "#0b6b31",
            colorTextSecondary: "#2e3191",
            colorText: "#222222",
          },
          components: {
            Button: {
              colorPrimary: "#0b6b31",
              algorithm: true,
            },
            Tag: {
              borderRadius: 6,
              colorBorder: "#0b6b31",
              colorText: "#0b6b31",
              colorFillSecondary: "#e8f5ec",
            },
            Layout: {
              headerBg: "transparent",
              colorBgBase: "transparent",
              siderBg: "#0b6b31",
              colorText: "#222222",
              colorBgTextHover: "#2e3191",
              colorBgTextActive: "#0b6b31",
            },
            Menu: {
              colorBgBase: "transparent",
              itemBg: "transparent",
              itemColor: "#ffffff",
              itemHoverColor: "#ffffff",
              itemSelectedColor: "#ffffff",
              horizontalItemSelectedColor: "#ffffff",
              horizontalItemHoverColor: "#ffffff",
              darkItemColor: "#ffffff",
              darkItemHoverColor: "#ffffff",
              darkItemSelectedColor: "#ffffff",
              darkSubMenuItemBg: "#0b6b31",
              popupBg: "#0b6b31",
            },
            Card: {
              colorBgBase: "#ffffff",
              colorBgContainer: "#ffffff",
              headerHeight: "100px",
              borderRadiusLG: 8,
              borderRadius: 8,
              colorBorderBg: "#e0e0e0",
            },
              Collapse: {
                headerBg: "transparent",
                contentBg: "transparent",
                headerPadding: "12px 16px",
                contentPadding: "0 16px 12px",
              },
            Pagination: {
              colorPrimary: "#fff",
            },
          },
        }}
      >
        <Header />
        <Outlet />
        <Footer />
      </ConfigProvider>
    </>
  );
};

export default MainLayout;
