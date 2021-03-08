/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Pagination } from 'react-bootstrap'

interface PaginationTypes {
  data: any[]
  limit: number
  onItem: (item: any[]) => void
}

const PaginationComponent: React.FC<PaginationTypes> = ({ data, limit, onItems }) => {

  const [currentPage, setcurrentPage] = useState(1);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
  const pageNumberLimit = 5;

  const handleClick = (e: any) => setcurrentPage(Number(e.target.id));

  const pages = [];
  for (let i = 1; i <= Math.ceil(data.length / limit); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * limit;
  const indexOfFirstItem = indexOfLastItem - limit;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);


  useEffect(() => {
    handleItems()
  }, [currentPage, data]);

  const handleItems = () => onItems(currentItems)

  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <Pagination.Next onClick={handleNextbtn} />;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <Pagination.Prev onClick={handlePrevbtn} />
  }

  const renderPageNumbers = pages.map((number: any) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <Pagination.Item
          key={number}
          id={number}
          onClick={handleClick}
          active={currentPage === number}>{number}</Pagination.Item>
      );
    }
    return null;
  });

  return (
    <div className="d-flex justify-content-center align-items-baseline">
      <Pagination>
        {pageDecrementBtn}
        {renderPageNumbers}
        {pageIncrementBtn}
      </Pagination>
      <b className="ml-5">{data.length} </b> / Total data
    </div>
  );
}

export default PaginationComponent;