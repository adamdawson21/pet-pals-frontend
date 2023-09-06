import { useEffect, useState } from "react";
import { getUsers, addComment, editComment } from "../../services/users";
import { useNavigate } from "react-router-dom";
import "./CommentSection.css";

export default function CommentSection({ comments, postId, user, setToggle }) {
  const [users, setUsers] = useState([]);
  const [newComment, setNewComment] = useState({
    text: "",
    user: 0,
    post: 0,
  });
  const [showEditForm, setShowEditForm] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const navigate = useNavigate();

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

  const formatDate = (date) => {
    const dateArr = date.split("-");

    let newDate = "";

    switch (dateArr[1]) {
      case "01":
        newDate = "January ";
        break;
      case "02":
        newDate = "February ";
        break;
      case "03":
        newDate = "March ";
        break;
      case "04":
        newDate = "April ";
        break;
      case "05":
        newDate = "May ";
        break;
      case "06":
        newDate = "June ";
        break;
      case "07":
        newDate = "July ";
        break;
      case "08":
        newDate = "August ";
        break;
      case "09":
        newDate = "September ";
        break;
      case "10":
        newDate = "October ";
        break;
      case "11":
        newDate = "November ";
        break;
      case "12":
        newDate = "December ";
        break;
    }

    if (dateArr[2].charAt(0) === "0") newDate += dateArr[2].charAt(1) + ", ";
    else newDate += dateArr[2] + ", ";

    newDate += dateArr[0];

    return newDate;
  };

  const handleAddComment = (e) => {
    if (!user) navigate("/signin");
    if (newComment.id) delete newComment.id;

    setShowAddForm(true);
    setShowEditForm(false);
    setNewComment({
      text: "",
      user: 0,
      post: 0,
    });
  };

  const handleEditComment = (e) => {
    setShowEditForm(true);
    setShowAddForm(false);
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

  const handleClickCancel = (e) => {
    setShowAddForm(false);
    setShowEditForm(false);
  };

  return (
    <div className="comment-section-container">
      <h1 className="comment-section-header">Comments</h1>
      {!comments?.length && (
        <p className="no-comments-message">(no comments yet)</p>
      )}
      {comments?.map((comment) => (
        <div className="comment-container" key={comment.id}>
          <div className="comment-header">
            <p className="comment-user">{getUsername(comment.user)}</p>
            <p className="comment-date">{formatDate(comment.created_at)}</p>
          </div>
          <hr className="comment-hr" />
          <p className="comment-text">{comment.text}</p>
          {comment.user == user?.id && (
            <button
              className="comment-section-buttons comment-edit-button"
              onClick={handleEditComment}
              data-id={comment.id}
              data-text={comment.text}
              data-postid={comment.post}
              data-userid={comment.user}
            >
              Edit
            </button>
          )}
        </div>
      ))}
      <button
        className="comment-section-buttons comment-add-button"
        onClick={handleAddComment}
      >
        Add Comment
      </button>
      {user && showAddForm && (
        <div className="comment-section-forms-container">
          <hr className="comment-hr" />
          <h1>New Comment</h1>
          <form className="comment-section-forms" onSubmit={handleSubmitAdd}>
            <textarea
              type="text"
              placeholder="Type your comment here..."
              name="text"
              value={newComment.text}
              onChange={handleChange}
              required
            />
            <div>
              <button
                className="comment-section-buttons comment-cancel-button"
                onClick={handleClickCancel}
              >
                Cancel
              </button>
              <button className="comment-section-buttons">Submit</button>
            </div>
          </form>
        </div>
      )}
      {showEditForm && (
        <div className="comment-section-forms-container">
          <hr className="comment-hr" />
          <h1>Edit Your Comment</h1>
          <form className="comment-section-forms" onSubmit={handleSubmitEdit}>
            <textarea
              type="text"
              placeholder="Edit your comment..."
              name="text"
              value={newComment.text}
              onChange={handleChange}
              required
            />
            <div>
              <button
                className="comment-section-buttons comment-cancel-button"
                onClick={handleClickCancel}
              >
                Cancel
              </button>
              <button className="comment-section-buttons">Submit</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
