/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Pagination } from 'react-bootstrap'

function PaginationComponent(props: any) {

  const [currentPage, setcurrentPage] = useState(1);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
  const pageNumberLimit = 5;

  const handleClick = (e: any) => setcurrentPage(Number(e.target.id));

  const pages = [];
  for (let i = 1; i <= Math.ceil(props.data.length / props.limit); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * props.limit;
  const indexOfFirstItem = indexOfLastItem - props.limit;
  const currentItems = props.data.slice(indexOfFirstItem, indexOfLastItem);


  useEffect(() => {
    handleItems()
  }, [currentPage, props.data]);

  const handleItems = () =>  props.onItems(currentItems)

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
      <b className="ml-5">{props.data.length} </b> / Total data
    </div>
  );
}

export default PaginationComponent;