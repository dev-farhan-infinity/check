import { W as useNavigate, z as useSkin, x as jsxs, j as jsx, U as Link, B as Button } from "./index.b27a7f54.js";
import "./App.beb1f410.js";
import { i as illustrationsDark, a as illustrationsLight } from "./not-authorized-dark.ca63a4c2.js";
/* empty css                    */const AccountBanned = () => {
  useNavigate();
  const { skin } = useSkin();
  const source = skin === "dark" ? illustrationsDark : illustrationsLight;
  return /* @__PURE__ */ jsxs("div", { className: "misc-wrapper", children: [
    /* @__PURE__ */ jsx(Link, { className: "brand-logo", to: "/", children: /* @__PURE__ */ jsx("h2", { className: "brand-text text-primary ms-1", children: "Leo AI" }) }),
    /* @__PURE__ */ jsx("div", { className: "misc-inner p-2 p-sm-3", children: /* @__PURE__ */ jsxs("div", { className: "w-100 text-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "mb-1", children: "You account is banned by leo administrator! \u{1F510}" }),
        /* @__PURE__ */ jsx("p", { children: "Please contact support@leo.com to know more." }),
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "/login",
            children: /* @__PURE__ */ jsx(
              Button,
              {
                color: "primary",
                className: "btn-sm-block mb-1",
                children: "Go Back"
              }
            )
          }
        )
      ] }),
      /* @__PURE__ */ jsx("img", { className: "img-fluid w-75", src: source, alt: "Not authorized page" })
    ] }) })
  ] });
};
export {
  AccountBanned as default
};
