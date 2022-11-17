import { connect } from "react-redux";
import { getCoinsRequest, updateCoins } from "./actions/coins";
import Table from "./components/Table";
import "./styles.css";

const App = (props) => {
  const { getCoinsRequest, coins, loading, updateCoins } = props;

  const columns = [
    { field: "id", name: "ID" },
    { field: "symbol", name: "Symbol" },
    { field: "name", name: "Name" },
  ];

  const updateData = (newData) => {
    updateCoins(newData);
  };

  return (
    <div className="container">
      <button
        onClick={() => getCoinsRequest()}
        className="button"
        disabled={loading}
      >
        {loading ? <i className="fa fa-spinner fa-spin"></i> : ""} Get Coins
      </button>
      <Table columns={columns} data={coins} setData={updateData}></Table>
    </div>
  );
};

const mapStateToProps = ({ coins }) => ({
  coins: coins.items,
  loading: coins.loading,
});

export default connect(mapStateToProps, {
  getCoinsRequest,
  updateCoins,
})(App);
