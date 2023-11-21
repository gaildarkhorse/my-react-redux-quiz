export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const CHANGE_ITEM = 'CHANGE_ITEM';
export const UPDATE_OBJECT_STATE = 'UPDATE_OBJECT_STATE';
export const CHANGE_ELEMENT = 'CHANGE_ELEMENT';
export const INCREASE_CHECKED = 'INCREASE_CHECKED';
export const DECREASE_CHECKED = 'DECREASE_CHECKED';
export const INCREASE_RISK_CNT = 'INCREASE_RISK_CNT';
export const DECREASE_RISK_CNT = 'DECREASE_RISK_CNT'; 

export const increaseRiskCnt = () => ({
    type: INCREASE_RISK_CNT,
});

export const decreaseRiskCnt = () => ({
    type: DECREASE_RISK_CNT,
});

export const changeElement = (index, val) => ({
    type: CHANGE_ELEMENT,
    payload: {index, val},
});

export const  increaseChecked = () => ({
    type: INCREASE_CHECKED,
});

export const  decreaseChecked = () => ({
    type: DECREASE_CHECKED,
});

export const addItem = (item) => ({
    type: ADD_ITEM,
    payload: item,
});

export const removeItem = (index) => ({
    type: REMOVE_ITEM,
    payload: index,
});

export const changeItem = (index, newItem) => ({
    type: CHANGE_ITEM,
    payload: { index, newItem },
});

export const updateObjectState = (updatedState) => ({
    type: UPDATE_OBJECT_STATE,
    payload: updatedState,
});
