import { iUser } from "@customTypes/api";
import { iUserFormValue } from "@customTypes/form";

export interface iUserContext {
  authenticated: boolean;
  setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  userInfo: iUser | null;
  loading: boolean;
  login: (formValue: iUserFormValue) => Promise<void>;
  signUp: (formValue: iUserFormValue) => Promise<void>;
  logout: () => void;
}
