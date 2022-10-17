import toast from "react-hot-toast";

const useToast = (type: string, text: string) => {
  type === "success"
    ? toast.success(text, {
        style: {
          color: "var(--grey_0)",
          background: "var(--grey_2)",
        },
        iconTheme: {
          primary: "var(--success)",
          secondary: "var(--grey_2)",
        },
      })
    : toast.error(text, {
        style: {
          color: "var(--grey_0)",
          background: "var(--grey_2)",
        },
        iconTheme: {
          primary: "var(--negative)",
          secondary: "var(--grey_2)",
        },
      });
};

export default useToast;
