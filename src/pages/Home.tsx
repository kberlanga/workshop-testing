import { Button, TextInput } from "@mantine/core";
import { API_URL } from "../services/urlBase";
import { useState } from "react";
import { User } from "../components/user/user";
import { UserI } from "../models/http/users";
import { useForm } from "@mantine/form";

export default function Home() {
  const [newUser, setNewUser] = useState<UserI>()

  const form = useForm({
    initialValues: {
      first_name: '',
      last_name: '',
    },
  });

  const addUser = async (values: {first_name: string , last_name: string}) => {

    console.log(values)

    const response = await fetch(`${API_URL}/users`, { method: "POST", body: JSON.stringify(values) });
    const { user } = await response.json();
    setNewUser(user)
  };


  const handleClick = (evt: any) => {
    evt.preventDefault();
    addUser(form.values)
  }

  return <section className="actions-content">
    <h1>Home</h1>
    <form className="actions-form" onSubmit={handleClick}>
      <TextInput
        autoFocus
        required
        id="first_name"
        label="First Name"
        name="first_name"
        {...form.getInputProps("first_name")}
      />
      <TextInput
        required
        id="last_name"
        label="last Name"
        name="last_name"
        {...form.getInputProps("last_name")}
      />
      <br />
      <Button type="submit">Create user</Button>
    </form>
    {newUser && <>
      <h3>Generate User</h3>
      <User user={newUser} />
    </> 
    }
  </section>
}