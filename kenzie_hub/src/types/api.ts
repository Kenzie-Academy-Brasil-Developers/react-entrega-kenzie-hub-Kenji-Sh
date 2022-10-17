export interface iTech {
  id: string;
  title: string;
  status: string;
}

export interface iUser {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  techs: iTech[];
}

export interface iLoginResponse {
  data: {
    token: string;
    user: iUser;
  };
}

export interface iGetUserResponse {
  data: iUser;
}
