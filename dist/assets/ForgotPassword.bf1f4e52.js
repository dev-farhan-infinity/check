import { Z as useLocation, L as useDispatch, z as useSkin, W as useNavigate, N as useSelector, ar as resetPassword, j as jsx, x as jsxs, B as Button, U as Link } from "./index.b27a7f54.js";
import { a as create, t as create$1, u as useFormik, c as create$2, C as Card, b as CardBody, d as Clatterdark, e as ClatterLogo, f as CardTitle, g as CardText, F as Form, L as Label, i as InputPasswordToggle, h as FormFeedback, S as Spinner } from "./App.beb1f410.js";
import { C as ChevronLeft } from "./chevron-left.d82b9ee7.js";
const ForgotPassword = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { skin } = useSkin();
  const navigate = useNavigate();
  const { resetPassError, resetPassLoading } = useSelector((state) => state.authUser);
  const validation = {
    password: create().matches(
      /^(?=.*[!@#$%^&*])(?=.*[0-9])/,
      "Password must include at least one special character and one number"
    ).min(8, "Password must be at least 8 characters").required("Password is required"),
    confirmPassword: create().oneOf([create$1("password"), null], "New Passwords and Confirm password must match").matches(
      /^(?=.*[!@#$%^&*])(?=.*[0-9])/,
      "Password must include at least one special character and one number"
    ).min(8, "Password must be at least 8 characters").required("Confirm Password is required")
  };
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: ""
    },
    validationSchema: create$2(validation),
    validateOnChange: false,
    onSubmit: (values, actions) => {
      actions.setFieldValue("password", values.password);
      const token = location.search.replace("?token=", "");
      let password = {
        password: values.password,
        path: "/login",
        token,
        navigate
      };
      dispatch(resetPassword(password));
      actions.setSubmitting(false);
      actions.resetForm();
    }
  });
  return /* @__PURE__ */ jsx("div", { className: "auth-wrapper auth-basic px-2", children: /* @__PURE__ */ jsx("div", { className: "auth-inner my-2", children: /* @__PURE__ */ jsx(Card, { className: "mb-0", children: /* @__PURE__ */ jsxs(CardBody, { children: [
    /* @__PURE__ */ jsx(CardBody, { className: "px-0", children: /* @__PURE__ */ jsx(
      "img",
      {
        className: "brand-full-logo",
        src: skin === "dark" ? Clatterdark : ClatterLogo,
        alt: "logo"
      }
    ) }),
    /* @__PURE__ */ jsx(CardTitle, { tag: "h4", className: "mb-1", children: "Reset Password \u{1F512}" }),
    /* @__PURE__ */ jsx(CardText, { className: "mb-2", children: "Your new password must be different from previously used passwords" }),
    /* @__PURE__ */ jsxs(Form, { className: "auth-reset-password-form mt-2", onSubmit: formik.handleSubmit, children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-1", children: [
        /* @__PURE__ */ jsx(Label, { className: "form-label", for: "password", children: "New Password" }),
        /* @__PURE__ */ jsx(
          InputPasswordToggle,
          {
            className: "input-group-merge",
            id: "password",
            autoFocus: true,
            ...formik.getFieldProps("password"),
            onChange: formik.handleChange("password"),
            onBlur: formik.handleBlur,
            invalid: formik.touched.password && formik.errors.password ? true : false
          }
        ),
        formik.touched.password && formik.errors.password ? /* @__PURE__ */ jsx(FormFeedback, { type: "invalid", children: formik.errors.password }) : null
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-1", children: [
        /* @__PURE__ */ jsx(Label, { className: "form-label", for: "confirm-password", children: "Confirm Password" }),
        /* @__PURE__ */ jsx(
          InputPasswordToggle,
          {
            className: "input-group-merge",
            id: "confirm-password",
            ...formik.getFieldProps("confirmPassword"),
            onChange: formik.handleChange("confirmPassword"),
            onBlur: formik.handleBlur,
            invalid: formik.touched.confirmPassword && formik.errors.confirmPassword ? true : false
          }
        ),
        formik.touched.confirmPassword && formik.errors.confirmPassword ? /* @__PURE__ */ jsx(FormFeedback, { type: "invalid", children: formik.errors.confirmPassword }) : null
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mb-1", children: /* @__PURE__ */ jsx(FormFeedback, { type: "invalid", children: resetPassError }) }),
      /* @__PURE__ */ jsxs(
        Button,
        {
          disabled: resetPassLoading !== "idle" ? true : false,
          type: "submit",
          color: "primary",
          style: { padding: "15px 30px", borderRadius: "15px", display: "flex", gap: "10px", width: "100%", justifyContent: "center", alignItems: "center" },
          children: [
            /* @__PURE__ */ jsx("span", { children: "Set New Password" }),
            resetPassLoading !== "idle" ? /* @__PURE__ */ jsx(
              Spinner,
              {
                style: {
                  height: "1rem",
                  width: "1rem"
                }
              }
            ) : null
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-center mt-2", children: /* @__PURE__ */ jsxs(Link, { to: "/login", children: [
      /* @__PURE__ */ jsx(ChevronLeft, { className: "rotate-rtl me-25", size: 14 }),
      /* @__PURE__ */ jsx("span", { className: "align-middle", children: "Back to login" })
    ] }) })
  ] }) }) }) });
};
export {
  ForgotPassword as default
};
