import React, { useState } from "react";
import './index.css';
export const App = () => {
  const [todoText, setTodoText] = useState('');

  const [incompleteTodos, setIncompleteTodos] = useState(['aadddddddaa', 'eeeeeee']);

  const [completeTodos, setcompleteTodos] = useState(['uuuuuu']);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    alert(todoText);
  }

  return (
    <>
      <div className="input-area">
        <input type="text" placeholder="TODOを入力してください" value={todoText} onChange={onChangeTodoText}/>
        <button onClick={onClickAdd}>追加</button>
      </div>
      
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              <li key={todo}>
                <div className="list-row">
                  <p>{todo}</p>
                  <button>完了</button>
                  <button>削除</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="complete-area">
        <p className="title">完了TODO</p>
          <ul>
            {completeTodos.map((todo) => {
              return(
                <li key={todo}>
                  <div className="list-row">
                    <p>{todo}</p>
                    <button>戻す</button>
                  </div>
                </li>
              )
            })}

          </ul>
      </div>

    </>
  )
}

export default App;
