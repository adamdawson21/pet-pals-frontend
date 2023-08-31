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
  }, [showEditForm]);

  const getUsername = (id) => {
    const user = users.filter((user) => user.id === id);
    return user[0]?.username;
  };

  const handleAddComment = (e) => {
    if (newComment.id) delete newComment.id;

    setShowEditForm(false);
    setNewComment({
      text: "",
      user: 0,
      post: 0,
    });
  };

  const handleEditComment = (e) => {
    setShowEditForm(true);
    const data = e.target.dataset;

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
    console.log("new comment at submitAdd: ", newComment);
    await addComment(newComment);

    // if (newComment.id) delete newComment.id;

    setNewComment({
      text: "",
      user: 0,
      post: 0,
    });
    setToggle((prev) => !prev);
  };

  const handleSubmitEdit = async (e) => {
    e.preventDefault();
    await editComment(newComment.id, newComment);
    delete newComment.id;
    setNewComment({
      text: "",
      user: 0,
      post: 0,
    });
    setShowEditForm(false);
    setToggle((prev) => !prev);
  };

  return (
    <div>
      {comments?.map((comment) => (
        <div key={comment.id}>
          <p>{getUsername(comment.user)}</p>
          <p>{comment.text}</p>
          {comment.user == user?.id && (
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
      <button onClick={handleAddComment}>Add Comment</button>
      {user && !showEditForm && (
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
      )}
      {showEditForm && (
        <form onSubmit={handleSubmitEdit}>
          <input
            type="text"
            placeholder="Edit your comment"
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
