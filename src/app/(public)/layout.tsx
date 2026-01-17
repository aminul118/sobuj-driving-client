import Navbar from "@/components/layouts/Navbar/Navbar";
import { Children } from "@/types";

const PublicLayout = ({ children }: Children) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default PublicLayout;
