// import Button from "./Button";
// import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time");
  const iRunOnlyOnce = () => {
    console.log("i run only once/ Call the API");
  };
  useEffect(iRunOnlyOnce, []); // []은 지켜볼 대상이 없다는 의미로 딱 한번만 실행된다는 뜻
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("SEARCH FOR", keyword);
    }
  }, [keyword]); // keyword가 변화할 때 코드를 실행할 것이라고 react.js에게 알려주는 것
  useEffect(() => {
    console.log("i run when 'keyword & counter' changes");
  }, [keyword, counter]); // 동시에 여러개 적는 것도 가능
  return (
    <div>
      {/* <h1 className={styles.title}>Welcome back! </h1>
      <Button text={"Continue"} /> */}
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      ></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
