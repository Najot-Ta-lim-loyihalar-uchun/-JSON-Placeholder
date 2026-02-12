import React from "react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import UniversalCard from "../components/UniversalCard";

function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      try {
        let res = await fetch("https://jsonplaceholder.typicode.com/users");
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
      <UniversalCard data={users} type={"users"} />
    </div>
  );
}

export default UsersPage;
