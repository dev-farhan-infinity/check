import { W as useNavigate, x as jsxs, j as jsx } from "./index.18b6d573.js";
import { a0 as InstagramSvg, B as BreadCrumbs, w as Row, x as Col, y as Card } from "./App.dfab3394.js";
import { I as IBSvg } from "./IBSvg.f4adc062.js";
import { I as ICPSvg } from "./ICPSvg.6d1fb8d2.js";
import { I as IPISvg } from "./IPISvg.f1475d33.js";
import { I as ISSvg } from "./ISSvg.aaef29e4.js";
function Instagram() {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxs("div", { className: "parent-card-2 dark-theme-parent-card-2 dark-theme-parent-card-2", children: [
    /* @__PURE__ */ jsxs("div", { className: "breadCrumb-custom dark-breadCrumb-custom", children: [
      /* @__PURE__ */ jsx(InstagramSvg, {}),
      /* @__PURE__ */ jsx(BreadCrumbs, { title: "Instagram", data: [{ title: "Creation Hub", link: "/creationhub" }, { title: "Instagram", link: "/instagram" }] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "component dark-theme-component w-100", children: /* @__PURE__ */ jsxs(Row, { className: "row-gap", children: [
      /* @__PURE__ */ jsx(Col, { sm: "12", md: "4", lg: "3", xl: "3", children: /* @__PURE__ */ jsx("div", { className: "child-card dark-theme-child-card", children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: "inner-child-card dark-theme-inner-child-card",
          style: { cursor: "pointer" },
          onClick: () => {
            navigate("/instagram_post_caption");
          },
          children: [
            /* @__PURE__ */ jsx(Row, { className: "d-flex align-items-center ", children: /* @__PURE__ */ jsx(Col, { className: "", children: /* @__PURE__ */ jsx(ICPSvg, {}) }) }),
            /* @__PURE__ */ jsx(Row, { children: /* @__PURE__ */ jsxs(Col, { className: "mt-2", children: [
              /* @__PURE__ */ jsx(Card.Title, { children: "Instagram Post Caption" }),
              /* @__PURE__ */ jsxs(Card.Subtitle, { className: "text-muted", children: [
                " ",
                "Write catchy captions for your instagram posts",
                " "
              ] })
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
            navigate("/instagram_bio");
          },
          children: [
            /* @__PURE__ */ jsx(Row, { className: "d-flex align-items-center ", children: /* @__PURE__ */ jsx(Col, { className: "", children: /* @__PURE__ */ jsx(IBSvg, {}) }) }),
            /* @__PURE__ */ jsx(Row, { children: /* @__PURE__ */ jsxs(Col, { className: "mt-2", children: [
              /* @__PURE__ */ jsx(Card.Title, { children: "Instagram Bio" }),
              /* @__PURE__ */ jsxs(Card.Subtitle, { className: "text-muted", children: [
                " ",
                "Write a creative personal bio that captures attention",
                " "
              ] })
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
            navigate("/instagram_story");
          },
          children: [
            /* @__PURE__ */ jsx(Row, { className: "d-flex align-items-center ", children: /* @__PURE__ */ jsx(Col, { className: "", children: /* @__PURE__ */ jsx(ISSvg, {}) }) }),
            /* @__PURE__ */ jsx(Row, { children: /* @__PURE__ */ jsxs(Col, { className: "mt-2", children: [
              /* @__PURE__ */ jsx(Card.Title, { children: "Instagram Story" }),
              /* @__PURE__ */ jsxs(Card.Subtitle, { className: "text-muted", children: [
                " ",
                "write wildly creative story to engage your readers.",
                " "
              ] })
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
            navigate("/instagram_post_idea");
          },
          children: [
            /* @__PURE__ */ jsx(Row, { className: "d-flex align-items-center ", children: /* @__PURE__ */ jsx(Col, { className: "", children: /* @__PURE__ */ jsx(IPISvg, {}) }) }),
            /* @__PURE__ */ jsx(Row, { children: /* @__PURE__ */ jsxs(Col, { className: "mt-2", children: [
              /* @__PURE__ */ jsx(Card.Title, { children: "Instagram Post Ideas" }),
              /* @__PURE__ */ jsxs(Card.Subtitle, { className: "text-muted", children: [
                " ",
                "Generate viral posts for Instagram.",
                " "
              ] })
            ] }) })
          ]
        }
      ) }) })
    ] }) })
  ] });
}
export {
  Instagram as default
};
