import { useDispatch, useSelector } from "react-redux";
// import { fetchTodos } from "./redux/slice/todo";
import "./App.css";
import { getPosts } from "./redux/slice/postSlice";
import { useEffect } from "react";
function App() {
  // const dispatch = useDispatch();
  // const state = useSelector((state) => state);
  // console.log("State", state);

  // if (state.todo.isLoading) {
  //   return <h1>Loading....</h1>;
  // }

  const { posts, loading } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  if (loading) {
    return <h2>Loading....</h2>;
  }
  return (
    <div className="App">
      {posts.map((items) => (
        <h2>{items.title}</h2>
      ))}
      {/* <button onClick={(e) = > dispatch(fetchTodos())}>Fetch Todos</button>
      {state.todo.data && state.todo.data.map((e) => <li>{e.title}</li>)} */}
    </div>
  );
}

export default App;
