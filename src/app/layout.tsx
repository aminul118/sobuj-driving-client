import generateMetaTags from "@/seo/generateMetaTags";
import "@/styles/globals.css";
import { Children } from "@/types";
import { Metadata } from "next";

const RootLayout = ({ children }: Children) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;

//  SEO
export const metadata: Metadata = generateMetaTags({
  title: "Aminul Islam",
  description:
    "Aminul Islam is a skilled Software Developer specializing in MERN stack, Next.js, TypeScript and scalable web applications. Currently working at TabEdge, delivering high-performance solutions.",
  keywords:
    "Software Developer, MERN Stack Developer, Next.js Developer, React Developer, TypeScript Developer, Full-Stack Developer, Web Development, API Development, Payment Solutions, E-commerce Development,SEO Specialist, Scalable Web Apps, DevOps, Software Engineer, Aminul118, Hyper118",
});
