import { Box, Divider } from "@mantine/core";
import { PatientI } from "../../models/http/patients";

interface Props {
  patient: PatientI;
}

export function Patient({patient}: Props) {
  return (
    <>
      <Box className="box">
        <Divider orientation="vertical" />
        <section>
          <p>
            <b>ID: </b>
            {patient.id}
          </p>
          <p>
            <b>Name: </b> {patient.first_name} {patient.last_name}
          </p>
          <p>
            <b>Age:</b> {patient.age}
          </p>
        </section>
      </Box>
      <Divider />
    </>
  );
}