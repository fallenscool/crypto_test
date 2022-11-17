import "./styles.css";

const Pagination = ({ page, itemsPerPage, count, onPageChange }) => {
  const startIndex = page * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <div className="pagination__wrap">
      <p className="pagination__info">
        {startIndex + 1}-{endIndex}
        <span style={{ padding: "0 5px" }}>of</span>
        {count}
      </p>
      <div className="pagination__buttons">
        <button onClick={() => onPageChange(page - 1)} disabled={page <= 0}>
          <i className="fa fa-solid fa-chevron-left"></i>
        </button>
        <button
          onClick={() => onPageChange(page + 1)}
          disabled={page >= Math.floor(count / itemsPerPage) - 1}
        >
          <i className="fa fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
