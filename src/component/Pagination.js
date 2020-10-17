import React from "react";

const Pagination = ({ page, setPage, numbPages }) => {
  return (
    <nav className="pagination" role="navigation" aria-label="pagination">
      <button
        className="pagination-previous is-clickable"
        onClick={() => (page !== 1 ? setPage(page - 1) : setPage(page))}
      >
        Previous
      </button>
      <button
        className="pagination-next is-clickable"
        onClick={() => (page !== numbPages ? setPage(page + 1) : setPage(page))}
      >
        Next page
      </button>
      <ul className="pagination-list">
        <li>
          <button
            className="pagination-link is-clickable"
            aria-label="Goto page 1"
            onClick={() => setPage(1)}
          >
            1
          </button>
        </li>
        <li>
          <span className="pagination-ellipsis">&hellip;</span>
        </li>
        <li>
          <button
            className="pagination-link is-current is-disabled"
            aria-label={"Page" + page}
            aria-current="page"
          >
            {page}
          </button>
        </li>
        <li>
          <span className="pagination-ellipsis">&hellip;</span>
        </li>
        <li>
          <button
            className="pagination-link is-clickable"
            aria-label={"Goto" + numbPages}
            onClick={() => setPage(numbPages)}
          >
            {numbPages}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
