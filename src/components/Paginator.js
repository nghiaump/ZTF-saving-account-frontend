import Pagination from "react-bootstrap/Pagination";
import "./Paginator.css";

function Paginator({ totalPages, currentPageIndex, onPageChange }) {
  let items = [];
  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === currentPageIndex}
        activeLabel=""
        onClick={() => onPageChange(number)}
      >
        {number}
      </Pagination.Item>
    );
  }
  return <Pagination>{items}</Pagination>;
}

export default Paginator;
