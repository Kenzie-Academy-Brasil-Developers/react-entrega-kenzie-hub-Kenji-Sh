import { Toaster } from "react-hot-toast";
import GlobalStyle from "@styles/global";
import AppRouter from "@routes/router";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Toaster position="top-right" reverseOrder={false} />
      <AppRouter />
    </>
  );
};

export default App;
