import React from 'react'
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";

interface TableTypes {
  headers: string[]
  values: any[]
  keys: (v: any) => any[]
}
const Tables: React.FC<TableTypes> = ({ headers, values, keys }) => {

  const renderColumn = (item: any) => {
    let columns: any = [];
    keys(item).forEach(key => {
      switch (key.type) {
        case 'link':
          columns.push((
            <Link to={key.url}>{item[key.id]}</Link>
          ))
          break;
        case 'custom':
          columns.push(key.customValue)
          break;
        default:
          columns.push(item[key.id])
          break;
      }
      // if (key.type === 'link') {
      //   columns.push((
      //     <Link to={key.url}>{item[key.id]}</Link>
      //   ))
      // } else if() {
      //   columns.push(item[key.id])
      // } else {
      //   columns.push(item[key.id])
      // }
    });
    return columns;
  }

  return (
    <Table responsive striped bordered hover>
      <thead>
        <tr>
          {headers && headers.map(item => <th key={item}>{item}</th>)}
        </tr>
      </thead>
      <tbody>
        {values && values.map((item: any, i: number) => (
          <tr key={i}>
            {renderColumn(item).map((val: any, idx: number) => (
              <td key={idx}>{val}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default Tables;