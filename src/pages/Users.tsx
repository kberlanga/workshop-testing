import { useEffect, useState } from "react";
import { UserI } from "../models/http/users";
import { API_URL } from "../services/urlBase";
import { User } from "../components/user/user";

export function Users() {
  const [users, setUsers] = useState<UserI[]>([]);
  const [totalRecords, setTotalRecords] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${API_URL}/users`);
      const {total, data} = await response.json();

      setUsers(data);
      setTotalRecords(total);
    };

    fetchData();
  }, []);


  if (!users.length) {
    return <p>Loading ...</p>;
  }

  return (
    <>
      <h1>Users</h1>
      <h3>Users count: {totalRecords}</h3>
      <div>
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </>
  );
}