import React from 'react'
import PropTypes from 'prop-types'

class BaseList extends React.Component {
  render() {
    if (this.props.listItems && this.props.maxItemsToShow > 0) {
      return (
        <ul>
          {this.props.listItems.slice(0, this.props.maxItemsToShow).map(item => <li key={item.id}>{item.name}</li>)}
        </ul>
      )
    } else {
      return <p>Отсутствуют элементы списка</p>
    }
  }
}

BaseList.propTypes = {
  /**
   * Массив элементов списка
   * @array
   * @param {number} id
   * @param {string} name
   */
  listItems: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })),

  /**
   * Максимальное количество элементов списка для отображения.
   * Не может быть меньше 1.
   * @number
   */
  maxItemsToShow: (props, propName, componentName) => {
    if (typeof (props[propName]) !== 'number') {
      return new Error(`Invalid prop \`${propName}\` supplied to \`${componentName}\`. Expecting a number, but \`${propName}\` is a ${typeof (props[propName])} Validation failed.`);
    }
    if (props[propName] < 1) {
      return new Error(`Invalid prop \`${propName}\` supplied to \`${componentName}\`. Value of \`${propName}\` should be greater than 0, but it is equal to ${props[propName]}. Validation failed.`);
    }
  }
}

BaseList.defaultProps = {
  maxItemsToShow: 3
}

export default BaseList
