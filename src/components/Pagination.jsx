import React from 'react';
import styled from 'styled-components';

const Pagination = ({ commentsPerPage, totalComments, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalComments / commentsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <PaginationUl>
        {pageNumbers.map((number) => (
          <PaginationList key={number} className="page-item">
            <button onClick={() => paginate(number)} className="page-link">
              {number}
            </button>
          </PaginationList>
        ))}
      </PaginationUl>
    </nav>
  );
};

export default Pagination;

const PaginationUl = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const PaginationList = styled.li`
  margin: 0 4px;
`;
