import { Checkbox, Typography } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import { useProductStore } from "../../store/useProductStore";

const { Title } = Typography;

const FilterByAvailability = () => {
  const { filters, setFilters } = useProductStore();

  const handleHomeAvailableChange = (checked: boolean) => {
    setFilters({ home_available: checked || undefined });
  };

  const handleWebAvailableChange = (checked: boolean) => {
    setFilters({ web_available: checked || undefined });
  };

  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <GlobalOutlined className="text-[#0b6b31]" />
        <Title level={5} style={{ color: "#0b6b31", margin: 0 }}>
          Availability
        </Title>
      </div>
      <div className="space-y-2">
        <div>
          <Checkbox
            checked={filters.home_available === true}
            onChange={(e) => handleHomeAvailableChange(e.target.checked)}
          >
            Home Available
          </Checkbox>
        </div>
        <div>
          <Checkbox
            checked={filters.web_available === true}
            onChange={(e) => handleWebAvailableChange(e.target.checked)}
          >
            Web Available
          </Checkbox>
        </div>
      </div>
    </div>
  );
};

export default FilterByAvailability;
