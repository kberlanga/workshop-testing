import { useEffect, useState } from "react";
import { PatientResponse } from "../models/http/patients";
import { API_URL } from "../services/urlBase";
import { Patient } from "../components/patient/patient";

export function Patients() {
  const [data, setData] = useState<PatientResponse>({total: 0, data: []});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${API_URL}/patients`);
      const responseJson = await response.json();

      setData(responseJson);
    };

    fetchData();
  }, []);


  if (data.total === 0) {
    return <p>Loading ...</p>;
  }

  return (
    <>
      <h1>Patients</h1>
      <h3>Patients count: {data.total}</h3>
      <div>
        {data.data.map((patient) => (
          <Patient key={patient.id} patient={patient} />
        ))}
      </div>
    </>
  );
}