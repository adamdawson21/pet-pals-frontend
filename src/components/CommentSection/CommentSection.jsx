import React, { useEffect, useState } from "react";
import { getUsers, addComment, editComment } from "../../services/users";

export default function CommentSection({ comments, postId, user, setToggle }) {
  const [users, setUsers] = useState([]);
  const [newComment, setNewComment] = useState({
    text: "",
    user: 0,
    post: 0,
  });
  const [showEditForm, setShowEditForm] = useState(false);

  useEffect(() => {
    async function fetchUsers() {
      const usersFetched = await getUsers();
      setUsers(usersFetched);
    }
    fetchUsers();
  }, []);

  const getUsername = (id) => {
    const user = users.filter((user) => user.id === id);
    return user[0].username;
  };

  const handleEditComment = (e) => {
    const data = e.target.dataset;
    // console.log("comment: ", data);

    setNewComment((prev) => ({
      id: data.id,
      text: data.text,
      post: data.post,
      user: user.id,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNewComment((prev) => ({
      ...prev,
      [name]: value,
      post: postId,
      user: user.id,
    }));
  };

  const handleSubmitAdd = async (e) => {
    e.preventDefault();
    await addComment(newComment);
    setNewComment({
      text: "",
      user: 0,
      post: 0,
    });
    setToggle((prev) => !prev);
  };

  const handleSubmitEdit = async (e) => {
    e.preventDefault();
    console.log("new comment: ", newComment);
    await editComment(newComment.id, newComment);
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
          {comment.user == user.id && (
            <button
              onClick={handleEditComment}
              data-id={comment.id}
              data-text={comment.text}
              data-postid={comment.post}
              data-userid={comment.user}
            >
              Edit your comment
            </button>
          )}
        </div>
      ))}
      <button onClick={handleEditComment}>Add Comment</button>
      {showEditForm ? (
        <form onSubmit={handleSubmitAdd}>
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
      ) : (
        <form onSubmit={handleSubmitEdit}>
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
      )}
    </div>
  );
}
