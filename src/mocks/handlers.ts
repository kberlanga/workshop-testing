import { patientHandlers } from "./patients.handler";
import { usersHandlers } from "./users.handler";

export const handlers = [...usersHandlers, ...patientHandlers];