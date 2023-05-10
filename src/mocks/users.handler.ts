import {rest} from "msw";
import {faker} from "@faker-js/faker"
import { API_URL } from "../services/urlBase";
import { users } from "./data/users.data";

function createUser() {
  return {
    id: faker.datatype.uuid(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
  };
}

export const usersHandlers = [
  // Handles a GET /users request
  rest.get(`${API_URL}/users`, (_, res, ctx) => {

    return res(ctx.delay(), ctx.status(200), ctx.json(users));
  }),

  rest.post(`${API_URL}/users`, async (req, res, ctx) => {

    const response = req.json();
    const {first_name, last_name} = await response;


    return res(ctx.delay(), ctx.status(200), ctx.json({user:{...createUser(), first_name, last_name}}));
  }),
];