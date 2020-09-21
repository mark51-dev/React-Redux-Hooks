import {ADD_TODO_ITEM_TO_LIST, CHANGE_STATUS, REMOVE_TODO_ITEM} from "../actions/actionTypes";

const initialState = {
  todo: [
    {
      id: 0,
      text: 'First todo',
      important: true,
      itemFilterStatus: 'all',
      done: false
    },
    {
      id: 2,
      text: 'Second todo',
      important: false,
      itemFilterStatus: 'all',
      done: false
    }
  ]
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO_ITEM_TO_LIST:
      return {
        ...state,
        todo: [...state.todo, action.payload]
      };
    case REMOVE_TODO_ITEM:
      return {
        ...state,
        todo: [...action.payload]
      };
    case CHANGE_STATUS:
      return {
        ...state,
        todo: [...action.payload]
      };
    default:
      return state;
  }
};

export default todoReducer;