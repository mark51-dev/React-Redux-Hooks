import {ADD_TODO_ITEM_TO_LIST, CHANGE_STATUS, REMOVE_TODO_ITEM} from "./actionTypes";

export function generateNewTodoItem(todoText) {
  const newTodoItem = {
    id: Math.floor(Math.random() * 100000000), // temp solution (better use hash func)
    text: todoText,
    important: false,
    done: false
  };

  return {
    type: ADD_TODO_ITEM_TO_LIST,
    payload: newTodoItem
  };
}

export function removeTodoItem(todoItemIndex) {
  return (dispatch, getState) => {
    const todoList = getState().todoReducer.todo;
    const filteredTodoList = todoList.filter(todoItem => todoItem.id !== todoItemIndex);
    dispatch({
      type: REMOVE_TODO_ITEM,
      payload: filteredTodoList
    });
  }
}

export function changeItemStatus(todoItemIndex, statusType) {
  return (dispatch, getStatus) => {
    const todoList = getStatus().todoReducer.todo;
    const index = todoList.findIndex(todoItem => todoItem.id === todoItemIndex);
    todoList[index][statusType] = !todoList[index][statusType];

    dispatch({
      type: CHANGE_STATUS,
      payload: todoList
    });
  }
}

