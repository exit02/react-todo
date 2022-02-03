import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  // 追加ボタン
  const [todoText, setTodoText] = useState("");
  // 未完了のTODO
  const [incompleteTodos, setIncompleteTodos] = useState([
    "あああああ",
    "いいいいい"
  ]);
  // 完了のTODO
  const [completeTodos, setCompleteTodos] = useState(["ううううう"]);

  // todoTextの入力処理
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  // 追加ボタン処理
  const onClickAdd = () => {
    // 空文字は未処理
    if (todoText === "") return;
    // スプレッド構文で新しい配列を生成する。
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
