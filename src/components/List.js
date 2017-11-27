import React, { Component } from 'react';

class List extends Component {
  render() {
    return (
      <ul className="collection">
        {
          Object
            .keys(this.props.items)
            .map(key => <li className="collection-item">{key} - {this.props.items[key]}</li>)
        }
      </ul>
    )
  }
}

export default List;
