import { z as useSkin, x as jsxs, j as jsx, B as Button, U as Link } from "./index.b27a7f54.js";
/* empty css                    */const illustrationsLight = "/assets/error.28b80857.svg";
const illustrationsDark = "/assets/error-dark.e32be724.svg";
const Error = () => {
  const { skin } = useSkin();
  const source = skin === "dark" ? illustrationsDark : illustrationsLight;
  return /* @__PURE__ */ jsxs("div", { className: "misc-wrapper", children: [
    /* @__PURE__ */ jsx("a", { className: "brand-logo", href: "/", children: /* @__PURE__ */ jsx("h2", { className: "brand-text text-primary ms-1", children: "Clatter AI" }) }),
    /* @__PURE__ */ jsx("div", { className: "misc-inner p-2 p-sm-3", children: /* @__PURE__ */ jsxs("div", { className: "w-100 text-center d-flex flex-column", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-1", children: "Page Not Found \u{1F575}\u{1F3FB}\u200D\u2640\uFE0F" }),
      /* @__PURE__ */ jsx("p", { className: "mb-2", children: "Oops! \u{1F616} The requested URL was not found on this server." }),
      /* @__PURE__ */ jsx(
        Button,
        {
          tag: Link,
          to: "/",
          color: "primary",
          className: "btn-sm-block mb-2",
          children: "Back to home"
        }
      ),
      /* @__PURE__ */ jsx("img", { className: "img-fluid w-75", src: source, alt: "Not authorized page" })
    ] }) })
  ] });
};
export {
  Error as default
};
