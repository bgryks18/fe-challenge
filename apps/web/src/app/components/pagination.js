import React from 'react';
import styles from './styles/pagination.module.scss';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

const ItemsPagination = ({ perPage, totalItems, setPage, currentPage }) => {
  const pageNumbers = [];
  const min = 1;
  const max = Math.ceil(totalItems / perPage);
  for (let i = 1; i <= max; i++) {
    pageNumbers.push(i);
  }
  const setPagination = (pageNumber) => {
    if (pageNumber <= max && pageNumber >= min) {
      setPage(pageNumber);
    }
  };
  return (
    <div className={styles.pagination}>
      <div className={styles.paginationItems}>
        <div
          className={`${styles.paginationItem} ${styles.move}`}
          onClick={() => setPagination(currentPage - 1)}
        >
          <IoIosArrowBack />
        </div>
        {pageNumbers.map((number) => (
          <div
            className={`${styles.paginationItem} ${
              number === currentPage ? styles.chosen : ''
            }`}
            onClick={() => setPagination(number)}
            key={number}
          >
            {number}
          </div>
        ))}
        <div
          className={`${styles.paginationItem} ${styles.move}`}
          onClick={() => setPagination(currentPage + 1)}
        >
          <IoIosArrowForward />
        </div>
      </div>
    </div>
  );
};

export default React.memo(ItemsPagination);
