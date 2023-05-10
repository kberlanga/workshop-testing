import {Avatar, Box, Divider} from "@mantine/core";

import "./styles.css";
import { UserI } from "../../models/http/users";

interface Props {
  user: UserI;
}

export function User({user}: Props) {
  return (
    <>
      <Box className="box">
        <Avatar alt={user.email} className="box__image" radius="xl" src={user.avatar} />
        <Divider orientation="vertical" />
        <section>
          <p>
            <b>ID: </b>
            {user.id}
          </p>
          <p>
            <b>Name: </b> {user.first_name} {user.last_name}
          </p>
          <p>
            <b>Email:</b> {user.email}
          </p>
        </section>
      </Box>
      <Divider />
    </>
  );
}
