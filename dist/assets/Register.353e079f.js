import { r as react, z as useSkin, W as useNavigate, Z as useLocation, x as jsxs, j as jsx, B as Button, U as Link } from "./index.18b6d573.js";
import { c as create, b as create$1, o as create$2, u as useFormik, C as Card, p as Col, d as CardBody, e as Clatterdark, f as ClatterLogo, i as Label, I as Input, j as FormFeedback, k as InputPasswordToggle, m as authPosterForDarkLayout, n as ImgeLogo, A as AuthApi } from "./App.dfab3394.js";
const profileDetailsValidationSchema = create({
  email: create$1().email("Enter a valid email").required("Email is required"),
  userName: create$1().required("Username is required"),
  firstName: create$1().required("Firstname is required"),
  lastName: create$1().required("Last name is required"),
  password: create$1().min(8, "Password must be at least 8 characters").matches(
    /^(?=.*[!@#$%^&*])(?=.*[0-9])/,
    "Password must include at least one special character and one number"
  ).required("Password is required"),
  termsConditions: create$2().oneOf([true], "You must agree to the terms and conditions.").required("You must agree to the terms and conditions."),
  referencedBy: create$1().notRequired()
});
const Register = () => {
  const [registerError, setRegisterError] = react.exports.useState(null);
  const { skin } = useSkin();
  const navigate = useNavigate();
  const location = useLocation();
  const [phoneNumber, setPhoneNumber] = react.exports.useState({});
  const [phoneNumberError, setPhoneNumberError] = react.exports.useState("");
  const handleSubmit = async (values) => {
    const phonenumber = phoneNumber.countryCode + phoneNumber.phoneNumber;
    if (!(phonenumber == null ? void 0 : phonenumber.length)) {
      setPhoneNumberError("Enter your phone number");
      return;
    }
    const data = { ...values, phoneNumber: phonenumber };
    const res = await AuthApi.userRegister(data);
    if (res == null ? void 0 : res.success) {
      navigate("/login");
    } else {
      console.log(res.errors, "response");
      setRegisterError(res.errors);
    }
  };
  react.exports.useEffect(() => {
    if (location.search !== "") {
      let string = location.search;
      let modified_string = string.replace("?fpr=", "");
      formik.values.referencedBy = modified_string;
    }
  }, [location]);
  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      termsConditions: false,
      referencedBy: ""
    },
    validationSchema: profileDetailsValidationSchema,
    onSubmit: handleSubmit
  });
  return /* @__PURE__ */ jsxs("div", { className: "register-maim-dev register-page", children: [
    /* @__PURE__ */ jsx(Card, { className: "register-card m-0", children: /* @__PURE__ */ jsxs(Col, { xs: "10", sm: "10", md: "10", lg: "10", children: [
      /* @__PURE__ */ jsx(CardBody, { className: "px-0", children: /* @__PURE__ */ jsx(
        "img",
        {
          className: "brand-full-logo",
          src: skin === "dark" ? Clatterdark : ClatterLogo,
          alt: "logo"
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "auth-register-form mt-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-1", children: [
          /* @__PURE__ */ jsx(Label, { className: "form-label", for: "register-userName", children: "Username" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              type: "text",
              name: "userName",
              id: "register-userName",
              placeholder: "Enter Your Username ",
              value: formik.values.userName,
              onChange: formik.handleChange,
              onBlur: formik.handleBlur,
              invalid: formik.touched.userName && formik.errors.userName ? true : false
            }
          ),
          formik.touched.userName && formik.errors.userName ? /* @__PURE__ */ jsx(FormFeedback, { type: "invalid", children: formik.errors.userName }) : null
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-1", children: [
          /* @__PURE__ */ jsx(Label, { className: "form-label", for: "register-email", children: "Email" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              type: "email",
              name: "email",
              id: "register-email",
              placeholder: "example@gmail.com",
              value: formik.values.email,
              onChange: formik.handleChange,
              onBlur: formik.handleBlur || registerError,
              invalid: formik.touched.email && formik.errors.email || registerError !== null ? true : false
            }
          ),
          formik.touched.email && formik.errors.email ? /* @__PURE__ */ jsx(FormFeedback, { type: "invalid", children: formik.errors.email }) : null
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-1", children: [
          /* @__PURE__ */ jsx(Label, { className: "form-label", for: "register-userName", children: "First Name" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              type: "text",
              name: "firstName",
              id: "register-firstName",
              placeholder: "Enter Your First Name",
              autoFocus: true,
              value: formik.values.firstName,
              onChange: formik.handleChange
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-1", children: [
          /* @__PURE__ */ jsx(Label, { className: "form-label", for: "register-userName", children: "Last Name" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              type: "text",
              name: "lastName",
              id: "register-lastName",
              placeholder: "Enter Your Last Name",
              autoFocus: true,
              value: formik.values.lastName,
              onChange: formik.handleChange
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-1", children: [
          /* @__PURE__ */ jsx(Label, { className: "form-label", for: "register-password", children: "Password" }),
          /* @__PURE__ */ jsx(
            InputPasswordToggle,
            {
              className: "input-group-merge",
              name: "password",
              id: "register-password",
              value: formik.values.password,
              onChange: formik.handleChange,
              onBlur: formik.handleBlur,
              invalid: formik.touched.password && formik.errors.password ? true : false
            }
          ),
          formik.touched.password && formik.errors.password ? /* @__PURE__ */ jsx(FormFeedback, { type: "invalid", children: formik.errors.password }) : null
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-1", children: [
          /* @__PURE__ */ jsx(Label, { className: "form-label", for: "register-userName", children: "Phone Number" }),
          phoneNumberError ? /* @__PURE__ */ jsx(FormFeedback, { type: "invalid", children: phoneNumberError }) : null
        ] }),
        registerError !== null && /* @__PURE__ */ jsx("div", { className: "mb-1", children: /* @__PURE__ */ jsx(FormFeedback, { type: "invalid", children: registerError }) }),
        /* @__PURE__ */ jsxs("div", { className: "form-check mb-1", children: [
          /* @__PURE__ */ jsx(
            Input,
            {
              type: "checkbox",
              name: "termsConditions",
              id: "termsConditions",
              value: formik.values.firstName,
              onChange: formik.handleChange,
              invalid: formik.touched.termsConditions && formik.errors.termsConditions ? true : false
            }
          ),
          formik.touched.termsConditions && formik.errors.termsConditions ? /* @__PURE__ */ jsx(FormFeedback, { type: "invalid", children: formik.errors.termsConditions }) : null,
          /* @__PURE__ */ jsxs(Label, { className: "form-check-label", for: "terms", children: [
            "I agree to",
            /* @__PURE__ */ jsx(
              "a",
              {
                className: "ms-25",
                href: "/",
                onClick: (e) => e.preventDefault(),
                children: "privacy policy & terms"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          Button,
          {
            type: "button",
            tag: Link,
            color: "primary",
            block: true,
            onClick: () => formik.submitForm(),
            children: "Sign up"
          }
        ),
        /* @__PURE__ */ jsxs("p", { className: "text-center mt-2", children: [
          /* @__PURE__ */ jsx("span", { className: "me-25", children: "Already have an account?" }),
          /* @__PURE__ */ jsx(Link, { to: "/login", children: /* @__PURE__ */ jsx("span", { children: "Sign in instead" }) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Card, { className: "m-0 img-container", children: /* @__PURE__ */ jsx(
      "img",
      {
        className: "img",
        src: skin === "dark" ? authPosterForDarkLayout : ImgeLogo
      }
    ) })
  ] });
};
export {
  Register as default,
  profileDetailsValidationSchema
};
