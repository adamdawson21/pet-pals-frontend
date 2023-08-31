import React, { useEffect, useState } from "react";
import { getUsers } from "../../services/users";

export default function CommentSection({ comments }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const usersFetched = await getUsers();
      setUsers(usersFetched);
    }
    fetchUsers();
  }, []);

  const getUsername = (id) => {
    const user = users.filter((user) => user.id === id);
    console.log("user: ", user);
    return user[0].username;
  };

  return (
    <div>
      {comments?.map((comment) => (
        <div key={comment.id}>
          <p>{`${getUsername(comment.user)}`}</p>
          <p>{comment.text}</p>
        </div>
      ))}
    </div>
  );
}
