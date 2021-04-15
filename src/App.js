import React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import TopNews from './pages/TopNews/TopNews'
import Categories from './pages/Categories/Categories'
import Search from './pages/Search/Search'
import Article from './pages/Article/Article'

const Content = styled.div`
  padding: 10px 20px;
`

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Content>
        <Switch>
          <Route exact path="/">
            <TopNews />
          </Route>
          <Route path="/categories">
            <Categories />
          </Route>
          <Route path="/category/:category">
            <TopNews />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/article/:index">
            <Article />
          </Route>
        </Switch>
      </Content>
    </BrowserRouter>
  )
}

export default App
