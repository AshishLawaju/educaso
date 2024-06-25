import * as Yup from "yup";

let contactSchema = Yup.object({
  firstname: Yup.string().required("required").min(3, "min 3 character long"),
  lastname: Yup.string().required("required").min(3, "min 3 character long"),
  email: Yup.string().email("please enter valid email").required("required"),
  contact: Yup.string().required("contact number is required"),
  subject: Yup.string().required("required").min(3, "min 3 character long"),
  message: Yup.string().required("required").min(3, "min 3 character long"),
});


export {contactSchema}