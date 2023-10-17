import React from 'react'
import { useState, useEffect } from 'react'
import NavBar from './NavBar'
import SearchItem from './SearchItem'
import Content from './Content'

const Home = () => {
  const [items, setItems] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    document.title = "Home"
  }, [])

  useEffect(() => {
    setItems([{'task_id': 1, 'description': 'A'}, {'task_id': 2, 'description': 'B'}, {'task_id': 3, 'description': 'Ace'}])
  }, [])

  return (
    <>
        <header>
            <NavBar />
        </header>
        <main>
            <SearchItem search={search} setSearch={setSearch} />
            <Content items={items.filter((item) => item.description.toLowerCase().includes(search.toLowerCase()))} />
        </main>
    </>
  )
}

export default Home