import { iTech } from "@customTypes/api";
import { iTechFormValue } from "@customTypes/form";

export interface iTechContext {
  loading: boolean;
  type: string | null;
  tech?: iTech | null;
  isOpen: boolean;
  addTech: (formData: iTechFormValue) => Promise<void>;
  editTech: (formData: iTechFormValue, techId?: string) => Promise<void>;
  deleteTech: (techId?: string) => Promise<void>;
  openTechModal: (modalType: string, techDetail?: iTech | null) => void;
  closeTechModal: () => void;
}
