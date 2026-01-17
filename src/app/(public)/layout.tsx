import Navbar from "@/components/layouts/Navbar/Navbar";
import { Children } from "@/types";

const PublicLayout = ({ children }: Children) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default PublicLayout;
