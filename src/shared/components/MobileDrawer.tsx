import { Drawer, Menu } from "antd";
import type { MenuProps } from "antd";
import logo from "../../assets/logo.png";

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
  items: MenuProps["items"];
  selectedKeys: string[];
}

const MobileDrawer = ({
  open,
  onClose,
  items,
  selectedKeys,
}: MobileDrawerProps) => {
  return (
    <Drawer
      title={
        <div className="flex items-center justify-center">
          <img src={logo} alt="Logo" className="w-32 sm:w-40 h-auto" />
        </div>
      }
      placement="right"
      onClose={onClose}
      open={open}
      width={260}
      className="mobile-menu-drawer"
      styles={{
        body: { padding: 0 },
      }}
    >
      <Menu
        mode="inline"
        onClick={onClose}
        selectedKeys={selectedKeys}
        items={items}
        className="!border-none"
        style={{
          background: "transparent",
        }}
        theme="light"
      />
    </Drawer>
  );
};

export default MobileDrawer;
