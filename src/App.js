import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addPost, deletePost } from "./fuatures/postSlice";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const postList = useSelector((state) => state.posts.value);

  const dispach = useDispatch();

  const handleClick = () => {
    dispach(
      addPost({
        id: postList.length,
        name: name,
        content: content,
      })
    );
    setName("");
    setContent("");
  };
  return (
    <div className="App">
      <div>
        <h1>Redux Bulletin Board</h1>
      </div>
      <div className="addPost">
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="text"
          placeholder="Posted content"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
        <button onClick={() => handleClick()}>Post</button>
        <hr />
      </div>
      <div className="displayPosts">
        {postList.map((post) => (
          <div className="post" key={post.id}>
            <h1 className="postName">{post.name}</h1>
            <h1 className="postContent">{post.content}</h1>
            <button onClick={() => dispach(deletePost({ id: post.id }))}>
              削除
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
