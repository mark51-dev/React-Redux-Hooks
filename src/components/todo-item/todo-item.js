import React from 'react';

const TodoItem = ({todoItem: {text, id, done, important}, removeItem, chageStatus}) => {
  return (
    <div>
      <span onClick={() => chageStatus(id, 'important')} style={{textDecoration: important ? 'line-through': null}}>{text}</span>
      <button onClick={() => removeItem(id)}>Delete</button>
      <button onClick={() => chageStatus(id, 'done')} style={{background: done ? 'red': null}}>Done</button>
    </div>
  );
};

export default TodoItem;