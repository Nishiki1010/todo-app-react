import React from "react";

function App() {
  return (
    <>
      <div>
        <input type="text" placeholder="TODOを入力してください" />
        <button>追加</button>
      </div>
      
      <div>
        <p>未完了のTODO</p>
        <ul>
          <li>aa</li>
          <button>完了</button>
          <button>削除</button>
        </ul>
        <ul>
          <li>ii</li>
          <button>完了</button>
          <button>削除</button>
        </ul>
      </div>

      <div>
        <p>完了TODO</p>
          <ul>
            <li>uu</li>
            <button>戻す</button>
          </ul>
      </div>
    </>
  )
}

export default App;
