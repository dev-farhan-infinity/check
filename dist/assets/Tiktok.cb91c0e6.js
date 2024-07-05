import { W as useNavigate, x as jsxs, j as jsx } from "./index.18b6d573.js";
import { a5 as TiktokSvg, B as BreadCrumbs, w as Row, x as Col, y as Card } from "./App.dfab3394.js";
import { T as TCVSvg } from "./TCVSvg.f6682a64.js";
import { T as TSSvg } from "./TSSvg.09027aff.js";
import { T as TVTISvg } from "./TVTISvg.a60bf59d.js";
import { C as Container } from "./Container.dd96083c.js";
function Tiktok() {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxs(Container, { className: "parent-card-2 dark-theme-parent-card-2 dark-theme-parent-card-2", children: [
    /* @__PURE__ */ jsxs("div", { className: "breadCrumb-custom dark-breadCrumb-custom", children: [
      /* @__PURE__ */ jsx(TiktokSvg, {}),
      /* @__PURE__ */ jsx(BreadCrumbs, { title: "Tiktok", data: [{ title: "Creation Hub", link: "/creationhub" }, { title: "Tiktok", link: "/tiktok" }] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "component dark-theme-component w-100", children: /* @__PURE__ */ jsxs(Row, { lg: "12", children: [
      /* @__PURE__ */ jsx(Col, { sm: "12", md: "4", lg: "3", xl: "3", children: /* @__PURE__ */ jsx("div", { className: "child-card dark-theme-child-card", children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: "inner-child-card dark-theme-inner-child-card",
          style: { cursor: "pointer" },
          onClick: () => {
            navigate("/tiktok_video_caption");
          },
          children: [
            /* @__PURE__ */ jsx(Row, { className: "d-flex align-items-center", children: /* @__PURE__ */ jsx(Col, { children: /* @__PURE__ */ jsx(TCVSvg, {}) }) }),
            /* @__PURE__ */ jsx(Row, { children: /* @__PURE__ */ jsxs(Col, { className: "mt-2", children: [
              /* @__PURE__ */ jsx(Card.Title, { className: "", children: "Tiktok Caption for Video" }),
              /* @__PURE__ */ jsx(Card.Subtitle, { className: "text-muted", children: "Generate viral captions for your TikTok videos." })
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
            navigate("/tiktok_script");
          },
          children: [
            /* @__PURE__ */ jsx(Row, { className: "d-flex align-items-center", children: /* @__PURE__ */ jsx(Col, { children: /* @__PURE__ */ jsx(TSSvg, {}) }) }),
            /* @__PURE__ */ jsx(Row, { children: /* @__PURE__ */ jsxs(Col, { className: "mt-2", children: [
              /* @__PURE__ */ jsx(Card.Title, { className: "", children: "Tiktok Script" }),
              /* @__PURE__ */ jsx(Card.Subtitle, { className: "text-muted", children: "Create Tiktok script for viral tiktok videos." })
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
            navigate("/tiktok_video_topic_idea");
          },
          children: [
            /* @__PURE__ */ jsx(Row, { className: "d-flex align-items-center", children: /* @__PURE__ */ jsx(Col, { children: /* @__PURE__ */ jsx(TVTISvg, {}) }) }),
            /* @__PURE__ */ jsx(Row, { children: /* @__PURE__ */ jsxs(Col, { className: "mt-2", children: [
              /* @__PURE__ */ jsx(Card.Title, { className: "", children: "Tiktok Video Topic Ideas" }),
              /* @__PURE__ */ jsx(Card.Subtitle, { className: "text-muted", children: "Generate viral Video Topic Ideas for Tiktok." })
            ] }) })
          ]
        }
      ) }) })
    ] }) })
  ] });
}
export {
  Tiktok as default
};
