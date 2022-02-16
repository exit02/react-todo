import React, { useState } from "react";
import "./styles.css";
import {InputTodo} from "./components/inputTodo";

export const App = () => {
  // 追加ボタン
  const [todoText, setTodoText] = useState("");
  // 未完了のTODO
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  // 完了のTODO
  const [completeTodos, setCompleteTodos] = useState([]);

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

  // 削除ボタン処理
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    // 指定されたインデックスから指定個数を削除する関数
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  // 完了ボタン
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    // 指定されたインデックスから指定個数を削除する関数
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];

    // 未完了のTODO更新
    setIncompleteTodos(newIncompleteTodos);
    // 完了のTODO更新
    setCompleteTodos(newCompleteTodos);
  };

  // 戻すボタン
  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    // 指定されたインデックスから指定個数を削除する関数
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];

    // 未完了のTODOを更新
    setIncompleteTodos(newIncompleteTodos);
    // 完了のTODOを更新
    setCompleteTodos(newCompleteTodos);
  };

  return (
    <>
      <InputTodo todoText={todoText} onChange={onChangeTodoText} onClick={onClickAdd} />
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
