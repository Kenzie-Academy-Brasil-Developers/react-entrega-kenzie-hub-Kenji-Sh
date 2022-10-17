import { iTech, iUser } from "@customTypes/api";
import { iUserFormValue } from "@customTypes/form";

export interface iUserContext {
  authenticated: boolean;
  setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  userInfo: iUser | null;
  techList: iTech[];
  setTechList: React.Dispatch<React.SetStateAction<iTech[]>>;
  loading: boolean;
  login: (formValue: iUserFormValue) => Promise<void>;
  signUp: (formValue: iUserFormValue) => Promise<void>;
  logout: () => void;
}
