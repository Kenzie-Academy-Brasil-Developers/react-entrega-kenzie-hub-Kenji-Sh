import { Toaster } from "react-hot-toast";

import GlobalStyle from "@styles/global";
import Providers from "@contexts";
import AppRouter from "@routes/router";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Toaster position="top-right" reverseOrder={false} />
      <Providers>
        <AppRouter />
      </Providers>
    </>
  );
};

export default App;
