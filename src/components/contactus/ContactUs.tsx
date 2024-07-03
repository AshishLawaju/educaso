"use client";
import { FaRegEnvelope } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import { MdOutlineLocalPhone } from "react-icons/md";
import facebook from "./assets/facebook.webp";
import youtube from "./assets/youtube.webp";
import instagram from "./assets/instagram.webp";
import Image from "next/image";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { contactSchema } from "@/schema/contact.schema";
import Button from "../common/button/Button";
const ContactUs = () => {
  const onSubmit = async (values: any, actions: any) => {
    try {
      // await new Promise((resolve) => setTimeout(resolve, 1000));
      /*  const sendSuccess = await axios.post(
        // "http://localhost:4000/sendmessage",
        "https://api.dkrecruitmentspzoo.com/sendmessage",
        {
          contactmethod: values.contactmethod,

          contactnumber: values.contactnumber,

          email: values.email,

          fullname: values.fullname,

          message: values.message,
        }
      
      );
 */
      /*  if (sendSuccess) {
        console.log("Submitted:", values);
        alert("Form submitted successfully!");
      } */

      actions.resetForm();
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  };
  const fieldClass =
    "w-full lg:min-w-[270px] h-[44px] rounded-lg outline-none py-3 px-2 border border-[#a5a5a5] lg:mt-2 ";
  return (
    <section className=" xl:py-[56px] max-xl:py-10">
      <div className="container flex max-xl:flex-col-reverse max-xl:gap-y-10 justify-between">
        <div>
          <h3 className="small-sub-heading text-primary">
            Contact us for more Information
          </h3>
          <hr className="mt-3 w-full border border-primary" />
          <div className="mt-6 text-primary">
            <div className="flex gap-2">
              <div className="flex h-[32px] w-[32px] items-center justify-center rounded-full border">
                <FaRegEnvelope />
              </div>
              <div>
                <p>infoeducasoabroad@gmail.com </p>
                <p className="break-all	">infoeducasoabroadconsultancy@gmail.com</p>
                <p>mayakarki020@gmail.com</p>
              </div>
            </div>
            <div className="mt-5 flex gap-2">
              <div className="flex h-[32px] w-[32px] items-center justify-center rounded-full border">
                <MdOutlineLocalPhone />
              </div>
              +977 9848743847
            </div>

            <div className="mt-4 flex gap-2">
              <div className="flex h-[32px] w-[32px] items-center justify-center rounded-full border">
                <LuMapPin />
              </div>
              Putalisadak, Kathmandu
            </div>
          </div>

          <div className="mt-[18px]">
            <h3 className="small-sub-heading text-primary">
              Follow our social media
            </h3>
            <hr className="mt-3 w-full border border-primary" />

            <div className="mt-6 flex gap-x-3">
              <Image src={instagram} alt="instagram"></Image>
              <Image src={facebook} alt="facebook"></Image>
              <Image src={youtube} alt="youtube"></Image>
            </div>

            <div className="mt-[18px] h-[211px] w-full xl:w-[440px] overflow-hidden rounded-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d312.2175080176686!2d85.32314813998751!3d27.70685242422554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1907e99e0391%3A0xcce47de157f588d3!2sStar%20Mall!5e0!3m2!1sen!2snp!4v1719302907512!5m2!1sen!2snp"
                // width="450"
                height="220"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full xl:w-[440px]"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="shadow-yellow-500 p-6 shadow-2xl">
          <h2 className="sub-heading text-primary">Get in Touch</h2>

          <Formik
            initialValues={{
              firstname: "",
              lastname: "",
              email: "",
              contact: "",
              message: "",
              subject: "",
            }}
            onSubmit={onSubmit}
            validationSchema={contactSchema}
          >
            {() => (
              <Form>
                <div className="mt-5 flex max-xl:flex-col justify-between gap-6">
                  <div className="flex flex-col ">
                    <label htmlFor="">
                      First Name{" "}
                      <span className="text-[#a3a3a3]">(required)</span>
                    </label>
                    <Field
                      type="text"
                      name="firstname"
                      className={`${fieldClass}`}
                    />
                    <ErrorMessage
                      name="firstname"
                      component="div"
                      className="text-[#ff0000]"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="">
                      Last Name
                      <span className="text-[#a3a3a3]">(required)</span>
                    </label>
                    <Field
                      type="text"
                      name="lastname"
                      className={`${fieldClass}`}
                    />
                    <ErrorMessage
                      name="lastname"
                      component="div"
                      className="text-[#ff0000]"
                    />
                  </div>
                </div>

                <div className="mt-5 flex  max-xl:flex-col justify-between gap-6">
                  <div className="flex flex-col">
                    <label htmlFor="">
                      Email
                      <span className="text-[#a3a3a3]">(required)</span>
                    </label>
                    <Field
                      type="email"
                      name="email"
                      className={`${fieldClass}`}
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-[#ff0000]"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="">
                      Contact
                      <span className="text-[#a3a3a3]">(required)</span>
                    </label>
                    <Field
                      type="number"
                      name="contact"
                      className={`${fieldClass}`}
                    />
                    <ErrorMessage
                      name="contact"
                      component="div"
                      className="text-[#ff0000]"
                    />
                  </div>
                </div>

                <div className="mt-5 flex flex-col">
                  <label htmlFor="">
                    Subject
                    <span className="text-[#a3a3a3]">(required)</span>
                  </label>
                  <Field
                    type="text"
                    name="subject"
                    className={`${fieldClass} w-full`}
                  />
                  <ErrorMessage
                    name="subject"
                    component="div"
                    className="text-[#ff0000]"
                  />
                </div>
                <div className="mt-5 flex flex-col">
                  <label htmlFor="">
                    Message
                    <span className="text-[#a3a3a3]">(required)</span>
                  </label>
                  <Field
                    as="textarea"
                    name="message"
                    className={`h-[115px] w-full rounded-lg border border-[#a5a5a5] px-2 py-3 outline-none lg:mt-2 lg:min-w-[270px]`}
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-[#ff0000]"
                  />
                </div>
                <div className="mt-5">
                  <Button buttonTittle={"Submit"} />
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
