import { Footer } from "./Footer";
import { NavBar } from "./navigation/NavBar";
import { Toaster } from "./util/Toaster";

interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Toaster />
      <Footer />
    </>
  );
};
