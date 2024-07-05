import { z as useSkin, W as useNavigate, r as react, j as jsx, x as jsxs, B as Button, U as Link, I as axios, J as Domain, aq as n, ar as cancelSvg } from "./index.18b6d573.js";
import { C as Card, d as CardBody, e as Clatterdark, f as ClatterLogo, g as CardTitle, h as CardText, F as Form, i as Label, I as Input, j as FormFeedback, l as Spinner } from "./App.dfab3394.js";
import { C as ChevronLeft } from "./chevron-left.f6c5ac99.js";
const Forgot = () => {
  const { skin } = useSkin();
  useNavigate();
  const [loader, setLoader] = react.exports.useState(false);
  const [email, setEmail] = react.exports.useState(null);
  const [emailError, setEmailError] = react.exports.useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(!loader);
    try {
      const response2 = await axios.post(`${Domain}/forgot-password`, email);
      setLoader(false);
      n((t) => /* @__PURE__ */ jsxs("div", { className: "toast-body", children: [
        /* @__PURE__ */ jsx("div", {}),
        /* @__PURE__ */ jsx("div", { className: "toast-message", children: response2.data.message }),
        /* @__PURE__ */ jsx("div", { className: "toast-button-container", children: /* @__PURE__ */ jsx("button", { className: "toast-button", onClick: () => n.dismiss(t.id), children: /* @__PURE__ */ jsx(cancelSvg, {}) }) })
      ] }));
    } catch (error) {
      setLoader(false);
      setEmailError(response.error);
    }
  };
  return /* @__PURE__ */ jsx("div", { className: "auth-wrapper auth-basic px-2", children: /* @__PURE__ */ jsx("div", { className: "auth-inner my-2", children: /* @__PURE__ */ jsx(Card, { className: "mb-0", style: { maxWidth: "460px", width: "100%" }, children: /* @__PURE__ */ jsxs(CardBody, { children: [
    /* @__PURE__ */ jsx(CardBody, { className: "px-0", children: /* @__PURE__ */ jsx(
      "img",
      {
        className: "brand-full-logo",
        src: skin === "dark" ? Clatterdark : ClatterLogo,
        alt: "logo"
      }
    ) }),
    /* @__PURE__ */ jsx(CardTitle, { tag: "h4", className: "mb-1", children: "Forgot Password \u{1F512}" }),
    /* @__PURE__ */ jsx(CardText, { className: "mb-2 hidden", children: "Your new password must be different from previously used passwords" }),
    /* @__PURE__ */ jsxs(Form, { className: "auth-reset-password-form mt-2", onSubmit: (e) => handleSubmit(e), children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-1", children: [
        /* @__PURE__ */ jsx(Label, { className: "form-label", for: "new-password", children: "Your Email" }),
        /* @__PURE__ */ jsx(
          Input,
          {
            className: "input-group-merge",
            id: "text",
            autoFocus: true,
            onChange: (e) => setEmail({ email: e.target.value }),
            placeholder: "Enter Your Email"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mb-1", children: /* @__PURE__ */ jsx(FormFeedback, { type: "invalid", children: emailError }) }),
      /* @__PURE__ */ jsxs(
        Button,
        {
          disabled: loader ? true : false,
          type: "submit",
          color: "primary",
          style: { padding: "15px 30px", borderRadius: "15px", display: "flex", gap: "10px", width: "100%", justifyContent: "center", alignItems: "center" },
          children: [
            /* @__PURE__ */ jsx("span", { children: "Reset Password" }),
            loader === true ? /* @__PURE__ */ jsx(
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
  Forgot as default
};
