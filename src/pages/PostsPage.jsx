import React from "react";
import { useState, useEffect } from "react";
import UniversalCard from "../components/UniversalCard";

function PostsPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      try {
        let res = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!res.ok) {
          throw new Error("Ma'lumotlar qanul qilinmadi");
        }

        let data = await res.json();

        setUsers(data);
      } catch (error) {
        toast.error(error);
      }
    }
    getUsers();
  }, []);
  return (
    <div className="container">
      <UniversalCard data={users} type={"posts"} />
    </div>
  );
}

export default PostsPage;
