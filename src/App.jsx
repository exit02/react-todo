import "./styles.css";

export const App = () => {
  return (
    <>
      <div>
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div>
        <p>未完了のTODO</p>
        <ul>
          <div>
            <li>ああああああ</li>
            <button>完了</button>
            <button>削除</button>
          </div>
          <div>
            <li>いいいいいい </li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      <div>
        <p>完了のTODO</p>
        <ul>
          <div>
            <li>ううううううう</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </>
  );
};
