import React from 'react';
import { connect } from 'react-redux';

const ItemList = ({ items }) => {
  return (
    <div>
      <h2>List of Items</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  items: state.arrayState,
});

export default connect(mapStateToProps)(ItemList);
