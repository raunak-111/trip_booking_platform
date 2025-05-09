
import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
  transparent?: boolean;
}

const Layout = ({ children, transparent = false }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar transparent={transparent} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
