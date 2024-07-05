import { W as useNavigate, x as jsxs, j as jsx } from "./index.18b6d573.js";
import { a6 as EcommerceSvg, B as BreadCrumbs, w as Row, x as Col, y as Card } from "./App.dfab3394.js";
import { H as HCSvg } from "./HCSvg.ae95fa17.js";
import { P as PDSvg } from "./PDSvg.ecc8e122.js";
import { C as Container } from "./Container.dd96083c.js";
function Ecommerce() {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxs(Container, { className: "parent-card-2 dark-theme-parent-card-2 dark-theme-parent-card-2", children: [
    /* @__PURE__ */ jsxs("div", { className: "breadCrumb-custom dark-breadCrumb-custom", children: [
      /* @__PURE__ */ jsx(EcommerceSvg, {}),
      /* @__PURE__ */ jsx(BreadCrumbs, { title: "Ecommerce", data: [{ title: "Creation Hub", link: "/creationhub" }, { title: "Ecommerce", link: "/ecommerce" }] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "component dark-theme-component w-100", children: /* @__PURE__ */ jsxs(Row, { lg: 12, children: [
      /* @__PURE__ */ jsx(Col, { sm: "12", md: "4", lg: "3", xl: "3", children: /* @__PURE__ */ jsx("div", { className: "child-card dark-theme-child-card", children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: "inner-child-card dark-theme-inner-child-card",
          style: { cursor: "pointer" },
          onClick: () => {
            navigate("/product_description");
          },
          children: [
            /* @__PURE__ */ jsx(Row, { className: "d-flex align-items-center", children: /* @__PURE__ */ jsx(Col, { children: /* @__PURE__ */ jsx(PDSvg, {}) }) }),
            /* @__PURE__ */ jsx(Row, { children: /* @__PURE__ */ jsxs(Col, { className: "mt-2", children: [
              /* @__PURE__ */ jsx(Card.Title, { className: "", children: "Product description" }),
              /* @__PURE__ */ jsx(Card.Subtitle, { className: "text-muted", children: "Create compelling product descriptions for your listings." })
            ] }) })
          ]
        }
      ) }) }),
      /* @__PURE__ */ jsx(Col, { sm: "12", md: "4", lg: "3", xl: "3", children: /* @__PURE__ */ jsx("div", { className: "child-card dark-theme-child-card", children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: "inner-child-card dark-theme-inner-child-card",
          style: { cursor: "pointer" },
          onClick: () => {
            navigate("/home_copy");
          },
          children: [
            /* @__PURE__ */ jsx(Row, { className: "d-flex align-items-center", children: /* @__PURE__ */ jsx(Col, { children: /* @__PURE__ */ jsx(HCSvg, {}) }) }),
            /* @__PURE__ */ jsx(Row, { children: /* @__PURE__ */ jsxs(Col, { className: "mt-2", children: [
              /* @__PURE__ */ jsx(Card.Title, { className: "", children: "Home Copy" }),
              /* @__PURE__ */ jsx(Card.Subtitle, { className: "text-muted", children: "Write a creative copy for your Ecommerce" })
            ] }) })
          ]
        }
      ) }) })
    ] }) })
  ] });
}
export {
  Ecommerce as default
};
