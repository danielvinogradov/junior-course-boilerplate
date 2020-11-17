import React from 'react'
import PropTypes from 'prop-types'

const params = { maxItemsToShow: 3 }

class BaseList extends React.Component {
  render() {
    if (this.props.listItems && params.maxItemsToShow > 1) {
      return (
        <ul>
          {this.props.listItems.slice(0, params.maxItemsToShow).map(item => <li key={item.id}>{item.name}</li>)}
        </ul>
      )
    } else if (params.maxItemsToShow < 1) {
      return <p>Ошибка конфигурации: <code>params.maxItemsToShow</code> меньше 1</p>
    } else {
      return <p>Отсутствуют элементы списка</p>
    }
  }
}

BaseList.propTypes = {
  listItems: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }))
}

export default BaseList
