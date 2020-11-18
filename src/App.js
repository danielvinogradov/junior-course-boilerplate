import React from 'react'

import BaseHeadline from './components/BaseHeadline/BaseHeadline'
import BaseList from './components/BaseList/BaseList'

import listItems from './data/products.json'

const data = { headline: 'Список товаров', listItems, }

class App extends React.Component {
  render() {
    return (
      <main className="container">
        <BaseHeadline children={data.headline}/>
        <BaseList listItems={data.listItems}/>
      </main>
    )
  }
}

export default App
