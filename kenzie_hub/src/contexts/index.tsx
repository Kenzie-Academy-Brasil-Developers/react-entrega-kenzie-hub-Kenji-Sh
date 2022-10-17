import UserProvider from "./UserContext";
import TechProvider from "./TechContext";

type iProvidersProps = {
  children?: React.ReactNode;
};

const Providers = ({ children }: iProvidersProps) => {
  return (
    <UserProvider>
      <TechProvider>{children}</TechProvider>
    </UserProvider>
  );
};

export default Providers;
