import React, { useEffect, useState } from "react";

export default function CommentSection({ comments }) {
  // const [comments, setComments] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    // setComments(post.comments);
    // setComments(comments)
    // setUser(JSON.parse(localStorage.getItem("user")));
    console.log("posts: ", comments);
  }, []);

  return (
    <div>
      {comments?.map((comment) => (
        <div key={comment.id}>
          <p>user here</p>
          <p>{comment.text}</p>
        </div>
      ))}
    </div>
  );
}
