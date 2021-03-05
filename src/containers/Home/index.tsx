/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux'
import { Loader, Tables, Pagination } from '../../components'
import { getCountries } from '../../stores/countries'
import './home.scss'

const Home = () => {
  const dispatch = useDispatch()
  const [list, setList] = useState([])
  const { items, loading } = useSelector((state: RootStateOrAny) => state.countries)

  useEffect(() => { }, [list]);

  useEffect(() => { dispatch(getCountries()) }, []);

  const keys = (item: any) => {
    return [
      { id: 'Country', type: 'link', url: `/country/${item.Slug}/detail` },
      { id: 'Slug', type: 'text', url: '' },
      { id: 'ISO2', type: 'text', url: '' },
    ]
  }

  return (
    <>
      {loading && <Loader />}
      <Container className="bg-container shadow p-4">
        <h2 className="mb-3">List of Countries</h2>
        <Tables
          headers={['Country', 'Slug', 'ISO2']}
          values={list}
          keys={keys}
        />
        <Pagination
          data={items}
          limit={10}
          onItems={setList}
        />
      </Container>
    </>
  )
}
export default Home;