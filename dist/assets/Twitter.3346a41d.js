import { W as useNavigate, x as jsxs, j as jsx } from "./index.18b6d573.js";
import { a3 as TwitterSvg, B as BreadCrumbs, w as Row, x as Col, y as Card } from "./App.dfab3394.js";
import { T as TMSvg } from "./TMSvg.a378fb43.js";
import { C as Container } from "./Container.dd96083c.js";
function Twitter() {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxs(Container, { className: "parent-card-2 dark-theme-parent-card-2 dark-theme-parent-card-2", children: [
    /* @__PURE__ */ jsxs("div", { className: "breadCrumb-custom dark-breadCrumb-custom", children: [
      /* @__PURE__ */ jsx(TwitterSvg, {}),
      /* @__PURE__ */ jsx(BreadCrumbs, { title: "Twitter", data: [{ title: "Creation Hub", link: "/creationhub" }, { title: "Twitter", link: "/twitter" }] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "inner-parent-child", children: /* @__PURE__ */ jsx(Row, { children: /* @__PURE__ */ jsx(Col, { sm: "12", md: "4", lg: "3", xl: "3", children: /* @__PURE__ */ jsx("div", { className: "child-card dark-theme-child-card", children: /* @__PURE__ */ jsxs(
      "div",
      {
        className: "inner-child-card dark-theme-inner-child-card",
        style: { cursor: "pointer" },
        onClick: () => {
          navigate("/twitter_machine");
        },
        children: [
          /* @__PURE__ */ jsx(Row, { className: "d-flex align-items-center", children: /* @__PURE__ */ jsx(Col, { children: /* @__PURE__ */ jsx(TMSvg, {}) }) }),
          /* @__PURE__ */ jsx(Row, { children: /* @__PURE__ */ jsxs(Col, { className: "mt-2", children: [
            /* @__PURE__ */ jsx(Card.Title, { className: "", children: "Tweet Machine" }),
            /* @__PURE__ */ jsx(Card.Subtitle, { className: "text-muted", children: "Generate viral tweets for Twitter." })
          ] }) })
        ]
      }
    ) }) }) }) })
  ] });
}
export {
  Twitter as default
};
