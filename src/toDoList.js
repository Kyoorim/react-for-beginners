import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return; // 함수가 작동하지 않는 것
    }
    setToDos((currentArray) => [toDo, ...currentArray]); // 새로운 투두가 기존 투두 위에 쌓이게 됨
    setToDo(""); // 엔터 눌렀을 때 칸이 비워지도록 함
  };
  return (
    <div>
      <h1>My To-dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="write your to-dos.."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      {toDos.map((item, index) => (
        <ul>
          <li key={index}>{item}</li>
        </ul>
      ))}
    </div>
  );
}

export default App;
