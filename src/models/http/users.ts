export interface UserI {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface UserResponse {
  total: number;
  data: UserI[]
}