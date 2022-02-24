import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

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
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && <p style={{ color: 'red'}}>登録できるTodoは5個までだよ！！</p>}
      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
