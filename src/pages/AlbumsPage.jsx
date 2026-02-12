import React from "react";
import { useState, useEffect } from "react";
import UniversalCard from "../components/UniversalCard";

function AlbumsPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      try {
        let res = await fetch("https://jsonplaceholder.typicode.com/albums");
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
      <UniversalCard data={users} type={"albums"} />
    </div>
  );
}

export default AlbumsPage;
