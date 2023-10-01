declare interface UserInfo {
  email: string;
  password: string;
}

declare interface SignUpInfo {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

declare interface SignUpResponse {
  message: string;
  statusCode: boolean;
  data: {
    email: string;
    firstName: string;
    lastName: string;
  };
}

declare interface SignInResponse {
  message: string;
  user: {
    email: string;
    firstName: string;
    lastName: string;
  };
  statusCode: number;
}
