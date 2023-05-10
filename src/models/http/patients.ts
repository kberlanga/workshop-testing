export interface PatientI {
  id: string;
  first_name: string;
  last_name: string;
  age: string;
}

export interface PatientResponse {
  total: number;
  data: PatientI[]
}