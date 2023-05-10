import {rest} from "msw";
import {faker} from "@faker-js/faker"
import { API_URL } from "../services/urlBase";

function createPatient() {
  return {
    id: faker.datatype.uuid(),
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    age: faker.datatype.number({max: 100, min: 2}),
  };
}

export const patientHandlers = [
  // Handles a GET /patients request
  rest.get(`${API_URL}/patients`, (_, res, ctx) => {

    const totalRecords = 5;
    const patients = Array(totalRecords).fill(null).map(createPatient);

    return res(ctx.delay(), ctx.status(200), ctx.json({total: totalRecords, data: patients}));
  }),

  // rest.post(`${API_URL}/users`, async (req, res, ctx) => {

  //   const response = req.json();
  //   const {first_name, last_name} = await response;


  //   return res(ctx.delay(), ctx.status(200), ctx.json({user:{...createUser(), first_name, last_name}}));
  // }),
];