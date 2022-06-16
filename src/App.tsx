import { Spin } from "antd";
import Table from "./components/Table";
import { Container, SpinnerWrapper } from "./styles";
import { ACTION } from "./constants";
import { useExpensesData } from "./providers/ExpensesDataProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const { data, column, loading, dispatch, total } = useExpensesData();

  const handleSortBy = (value) => {
    dispatch && dispatch({ type: ACTION.CHANGE_COLUMN, payload: value });
  };

  return (
    <Container>
      <Header onChange={handleSortBy} />
      {loading ? (
        <SpinnerWrapper>
          <Spin size="large"/>
        </SpinnerWrapper>
      ) : (
        <Table
          column={column}
          data={data}
          footer={() => <Footer total={total} />}
        />
      )}
    </Container>
  );
}

export default App;
