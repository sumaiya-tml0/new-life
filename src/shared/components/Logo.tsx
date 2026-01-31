import { Tag } from "antd";
import { Link } from "react-router";
import logo from "../../assets/logo.png";

interface LogoProps {
  isHomePage?: boolean;
  size?: "small" | "medium" | "large";
  showTag?: boolean;
  centered?: boolean;
}

const Logo = ({
  isHomePage = false,
  size = "large",
  showTag = true,
  centered = false,
}: LogoProps) => {
  const sizeClasses = {
    small: "w-24 sm:w-28",
    medium: "w-28 sm:w-32 md:w-36",
    large: "w-28 sm:w-36 md:w-40 lg:w-48",
  };

  return (
    <div
      className={`flex ${centered ? "flex-col sm:flex-row" : ""} items-center gap-1 sm:gap-3`}
    >
      <Link to="/">
        <img
          src={logo}
          alt="New Life Logo"
          className={`${sizeClasses[size]} h-auto`}
        />
      </Link>
      {showTag && (
        <Tag
          className="!m-0"
          style={{
            padding: "2px 8px",
            backgroundColor: "transparent",
            color: isHomePage ? "#fff" : "#0b6b31",
            border: isHomePage ? "1px solid #fff" : "1px solid #0b6b31",
            fontSize: "10px",
          }}
        >
          Since 1948
        </Tag>
      )}
    </div>
  );
};

export default Logo;
