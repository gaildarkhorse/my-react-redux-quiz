import React from 'react';
import { connect } from 'react-redux';
import { updateObjectState } from '../actions';

const ObjectState = ({ objectState, dispatch }) => {
  const handleUpdateState = () => {
    const updatedState = { name: 'Jane Doe', age: 25 };
    dispatch(updateObjectState(updatedState));
  };

  return (
    <div>
      <h2>Object State</h2>
      <p>Name: {objectState.name}</p>
      <p>Age: {objectState.age}</p>
      <button onClick={handleUpdateState}>
        Update Object State
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  objectState: state.objectState,
});

export default connect(mapStateToProps)(ObjectState);
