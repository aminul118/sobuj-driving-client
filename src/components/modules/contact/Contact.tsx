import SectionHeading from "@/components/ui/SectionHeading";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="container mx-auto overflow-x-hidden py-12 lg:py-20 ">
      <SectionHeading heading="Contact Me" />
      <div className="grid lg:grid-cols-2">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
