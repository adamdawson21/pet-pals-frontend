import React, { useEffect, useState } from "react";
import { getUsers, addComment } from "../../services/users";

export default function CommentSection({ comments, postId }) {
  // const { username } = JSON.parse(localStorage.getItem("user"));
  // const user_
  const [users, setUsers] = useState([]);
  const [newComment, setNewComment] = useState({
    text: "",
    user: 0,
    post: 0,
  });

  useEffect(() => {
    async function fetchUsers() {
      const usersFetched = await getUsers();
      setUsers(usersFetched);
    }
    fetchUsers();
    // console.log("users: ", users);
  }, []);

  console.log("postId: ", postId);

  console.log("users: ", users);

  function getUserId(username) {
    const user = users.filter((user) => user.username === username);
    console.log("getuserid: ", user);
    return user[0].id;
  }

  const getUsername = (id) => {
    const user = users.filter((user) => user.id === id);
    return user[0].username;
  };

  const handleClick = () => {
    // open form and POST request
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNewComment((prev) => ({
      ...prev,
      [name]: value,
      post: postId,
      user: JSON,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("THIS IS THE COMMENT: ", newComment);
  };

  return (
    <div>
      {comments?.map((comment) => (
        <div key={comment.id}>
          <p>{getUsername(comment.user)}</p>
          <p>{comment.text}</p>
        </div>
      ))}
      <button onClick={handleClick}>Add Comment</button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type your comment here"
          name="text"
          value={newComment.text}
          onChange={handleChange}
          required
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
