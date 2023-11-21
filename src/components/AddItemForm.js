import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addItem, removeItem, changeItem } from '../actions';

const AddItemForm = ({ arrayState, dispatch }) => {
  const [newText, setNewText] = useState('');
  const [changeIndex, setChangeIndex] = useState(-1);

  const handleAdd = () => {
    const newItem = `Item ${arrayState.length + 1}`;
    dispatch(addItem(newItem));
  };

  const handleRemove = (index) => {
    dispatch(removeItem(index));
  };

  const handleChange = () => {
    if (newText && changeIndex >= 0 && changeIndex < arrayState.length) {
      dispatch(changeItem(changeIndex, newText));
      setNewText('');
      setChangeIndex(-1);
    }
  };

  return (
    <div>
      <h2>Array State:</h2>
      <button onClick={handleAdd}>Add Item</button>
      <ul>
        {arrayState.map((item, index) => (
          <li key={index}>
            <input
              type="text"
              value={item}
              onChange={(e) => setNewText(e.target.value)}
            />
            <button onClick={() => setChangeIndex(index)}>Change</button>
            <button onClick={() => handleRemove(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={handleChange}>Apply Change</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  arrayState: state.arrayState,
});

export default connect(mapStateToProps)(AddItemForm);