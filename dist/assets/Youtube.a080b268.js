import { W as useNavigate, x as jsxs, j as jsx } from "./index.18b6d573.js";
import { a1 as YoutubeSvg, B as BreadCrumbs, w as Row, x as Col, y as Card } from "./App.dfab3394.js";
import { Y as YSSvg } from "./YSSvg.4b1be096.js";
import { Y as YTISvg } from "./YTISvg.6b63fa35.js";
import { Y as YTSvg } from "./YTSvg.62ed04fd.js";
import { C as Container } from "./Container.dd96083c.js";
function Youtube() {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxs(Container, { className: "parent-card-2 dark-theme-parent-card-2 dark-theme-parent-card-2", children: [
    /* @__PURE__ */ jsxs("div", { className: "breadCrumb-custom dark-breadCrumb-custom", children: [
      /* @__PURE__ */ jsx(YoutubeSvg, {}),
      /* @__PURE__ */ jsx(BreadCrumbs, { title: "Youtube", data: [{ title: "Creation Hub", link: "/creationhub" }, { title: "Youtube", link: "/youtube" }] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "inner-parent-child", children: /* @__PURE__ */ jsxs(Row, { children: [
      /* @__PURE__ */ jsx(Col, { sm: "12", md: "4", lg: "3", xl: "3", children: /* @__PURE__ */ jsx("div", { className: "child-card dark-theme-child-card", children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: "inner-child-card dark-theme-inner-child-card",
          style: { cursor: "pointer" },
          onClick: () => {
            navigate("/youtube_script");
          },
          children: [
            /* @__PURE__ */ jsx(Row, { className: "d-flex align-items-center", children: /* @__PURE__ */ jsx(Col, { children: /* @__PURE__ */ jsx(YSSvg, {}) }) }),
            /* @__PURE__ */ jsx(Row, { children: /* @__PURE__ */ jsxs(Col, { className: "mt-2", children: [
              /* @__PURE__ */ jsx(Card.Title, { className: "", children: "Youtube Video Script" }),
              /* @__PURE__ */ jsxs(Card.Subtitle, { className: "text-muted", children: [
                "Create Youtube script for your videos.",
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
            navigate("/youtube_title");
          },
          children: [
            /* @__PURE__ */ jsx(Row, { className: "d-flex align-items-center", children: /* @__PURE__ */ jsx(Col, { children: /* @__PURE__ */ jsx(YTSvg, {}) }) }),
            /* @__PURE__ */ jsx(Row, { children: /* @__PURE__ */ jsxs(Col, { className: "mt-2", children: [
              /* @__PURE__ */ jsx(Card.Title, { className: "", children: "Youtube Video Titles" }),
              /* @__PURE__ */ jsx(Card.Subtitle, { className: "text-muted", children: "Create engaging, click-worthy titles for your videos." })
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
            navigate("/youtube_topic_idea");
          },
          children: [
            /* @__PURE__ */ jsx(Row, { className: "d-flex align-items-center", children: /* @__PURE__ */ jsx(Col, { children: /* @__PURE__ */ jsx(YTISvg, {}) }) }),
            /* @__PURE__ */ jsx(Row, { children: /* @__PURE__ */ jsxs(Col, { className: "mt-2", children: [
              /* @__PURE__ */ jsx(Card.Title, { className: "", children: "Youtube Video Topic ideas" }),
              /* @__PURE__ */ jsxs(Card.Subtitle, { className: "text-muted", children: [
                "Brainstirm new video topics that will engages viewrs.",
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
  Youtube as default
};
