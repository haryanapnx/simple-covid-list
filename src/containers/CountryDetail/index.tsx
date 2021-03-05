/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux'
import { Loader, Tables, Pagination, SelectOptions } from '../../components'
import { getCountriesDetail } from '../../stores/countries'
import { formatDate } from '../../utils/formatDate'

const CountryDetail = () => {
  const dispatch = useDispatch()
  const { slug } = useParams<any>()
  const [list, setList] = useState([])
  const [sortBy, setSortby] = useState('confirmed')
  const { details, loading } = useSelector((state: RootStateOrAny) => state.countries)

  useEffect(() => { }, [list]);

  useEffect(() => { dispatch(getCountriesDetail(slug, sortBy)) }, [sortBy]);

  const keys = (item: any) => {
    return [
      { id: 'Country', type: 'text'},
      { id: 'CountryCode', type: 'text' },
      { id: 'Date', type: 'custom', customValue: formatDate(item.Date) },
      { id: 'Cases', type: 'text' },
    ]
  }

  const options = [
    { value: 'confirmed', label: 'Confirmed' },
    { value: 'recovered', label: 'Recovered' },
    { value: 'deaths', label: 'Deaths' },
  ]

  return (
    <>
      {loading && <Loader />}
      <Container className="bg-container shadow p-5">
        <div className="d-flex justify-content-between">
          <h2>Country Detail</h2>
          <SelectOptions
            options={options}
            value={sortBy}
            onChange={setSortby}
          />
        </div>
        <Tables
          headers={['Name', 'Country Code', 'Date', 'Cases']}
          values={list}
          keys={keys}
        />
        <Pagination
          data={details}
          limit={10}
          onItems={setList}
        />
      </Container>
    </>
  )
}
export default CountryDetail;