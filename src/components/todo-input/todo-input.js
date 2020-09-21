import React from 'react';

const TodoInput = ({addTodoToList}) => {
  return (
    <div>
      <input onKeyUp={addTodoToList} type="text"/>
    </div>
  );
};

export default TodoInput;