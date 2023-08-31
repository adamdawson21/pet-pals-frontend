import React, { useEffect, useState } from "react";
import { getUsers, addComment } from "../../services/users";

export default function CommentSection({ comments, postId, user, setToggle }) {
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

  // console.log("postId: ", postId);

  // console.log("users: ", users);

  const getUsername = (id) => {
    const user = users.filter((user) => user.id === id);
    console.log("usrr:", user);
    return user[0].username;
  };

  const handleClick = () => {
    // open form and POST request
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    console.log("user: ", user);
    setNewComment((prev) => ({
      ...prev,
      [name]: value,
      post: postId,
      user: user.id,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("THIS IS THE COMMENT: ", newComment);
    await addComment(newComment);
    setNewComment({
      text: "",
      user: 0,
      post: 0,
    });
    setToggle((prev) => !prev);
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
