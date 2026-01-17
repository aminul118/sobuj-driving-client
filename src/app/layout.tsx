import "@/styles/globals.css";
import { Children } from "@/types";

const RootLayout = ({ children }: Children) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
