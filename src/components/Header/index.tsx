import { HeadContainer, Text, Dropdown } from "./styles";
import { COLUMN, columns } from "../../constants";

const { Option } = Dropdown;

function Header({ onChange }) {
  const dropdownData = [
    { label: "All", value: COLUMN.All },
    { label: columns.departments, value: COLUMN.Departments },
    { label: columns.project_name, value: COLUMN.Project_Name },
    { label: columns.date, value: COLUMN.Date },
    { label: columns.member_name, value: COLUMN.Name },
  ];

  return (
    <HeadContainer>
      <Text>Total Expenses by: </Text>
      <Dropdown defaultValue={dropdownData[0]} onSelect={onChange}>
        {dropdownData.map((option) => (
          <Option value={option.value} key={option.value}>
            {option.label}
          </Option>
        ))}
      </Dropdown>
    </HeadContainer>
  );
}

export default Header;
