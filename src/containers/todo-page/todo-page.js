import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import TodoInput from "../../components/todo-input/todo-input";
import {generateNewTodoItem, removeTodoItem, changeItemStatus} from "../../redux/actions/todo";
import TodoItem from "../../components/todo-item/todo-item";

const TodoPage = () => {
  const dispatch = useDispatch();
  const { todoItemList } = useSelector(({todoReducer: {todo}}) => {
    return {
      todoItemList: todo
    }
  });

  const addTodoToList = (todoText) => {
    if (todoText.keyCode === 13 && todoText.target.value) {
      dispatch(generateNewTodoItem(todoText.target.value))
    }
  };

  const removeItem = (todoItemIndex) => {
    dispatch(removeTodoItem(todoItemIndex))
  };

  const chageStatus = (todoItemIndex, statusType) => {
    dispatch(changeItemStatus(todoItemIndex, statusType));
  };

  const getAllItems = () => {
    if (todoItemList.length) {
      return todoItemList.map(todoItem => {
        return (<TodoItem key={todoItem.id} todoItem={todoItem}
                                            removeItem={removeItem}
                                            chageStatus={chageStatus}/>);
      });
    }
    return (<h1>Empty</h1>);
  };

  return (
    <div>
      <TodoInput addTodoToList={addTodoToList}/>
      {getAllItems()}
    </div>
  );
};

export default TodoPage;