import { W as useNavigate, x as jsxs, j as jsx } from "./index.b27a7f54.js";
import { a8 as FacebookSvg, B as BreadCrumbs, z as Row, D as Col, E as Card } from "./App.beb1f410.js";
import { F as FACSvg } from "./FACSvg.8af60508.js";
import { C as Container } from "./Container.042bd347.js";
function Facebook() {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxs(Container, { className: "parent-card-2 dark-theme-parent-card-2 dark-theme-parent-card-2", children: [
    /* @__PURE__ */ jsxs("div", { className: "breadCrumb-custom dark-breadCrumb-custom", children: [
      /* @__PURE__ */ jsx(FacebookSvg, {}),
      /* @__PURE__ */ jsx(BreadCrumbs, { title: "Facebook", data: [{ title: "Creation Hub", link: "/creationhub" }, { title: "Facebook", link: "/facebook" }] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "inner-parent-child", children: /* @__PURE__ */ jsx(Row, { children: /* @__PURE__ */ jsx(Col, { sm: "12", md: "4", lg: "3", xl: "3", children: /* @__PURE__ */ jsx("div", { className: "child-card dark-theme-child-card", children: /* @__PURE__ */ jsxs(
      "div",
      {
        className: "inner-child-card dark-theme-inner-child-card",
        style: { cursor: "pointer" },
        onClick: () => {
          navigate("/facebook_ad_caption");
        },
        children: [
          /* @__PURE__ */ jsx(Row, { className: "d-flex align-items-center", children: /* @__PURE__ */ jsx(Col, { children: /* @__PURE__ */ jsx(FACSvg, {}) }) }),
          /* @__PURE__ */ jsx(Row, { children: /* @__PURE__ */ jsxs(Col, { className: "mt-2", children: [
            /* @__PURE__ */ jsx(Card.Title, { className: "", children: "Facebook Ads Captions" }),
            /* @__PURE__ */ jsxs(Card.Subtitle, { className: "text-muted", children: [
              "Write catchy captions for your Facebook ads",
              " "
            ] })
          ] }) })
        ]
      }
    ) }) }) }) })
  ] });
}
export {
  Facebook as default
};
