import { useState, useEffect } from "react";
import Header from "./components/Header";
import User from "./components/User";

function App() {
  const [count, setCount] = useState(0);
  const [names, setNames] = useState(["Brian"]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users`
      );
      const resJson = await response.json();
      console.log("resJson:", resJson);
      setUsers(resJson);
    };
    fetchApi();
  }, [setCount]);

  function handleSubmit(e) {
    e.preventDefault();
    setNames([...names, e.target.firstChild.value]);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" name="minForm" />
        <input type="submit" />
      </form>
      <p>Her er nogle navne: {names.map((name) => " | " + name)}</p>
      <Header friends={count} />
      <button onClick={() => setCount(count + 1)}>Knap</button>
      {users.map((user, i) => (
        <User info={user} key={i} />
      ))}
    </div>
  );
}

export default App;
