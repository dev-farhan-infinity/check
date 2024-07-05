import { W as useNavigate, j as jsx, F as Fragment, x as jsxs, z as useSkin, Z as useLocation } from "./index.b27a7f54.js";
import { C as Container } from "./Container.9d0ff769.js";
import { z as Row, D as Col, E as Card, B as BreadCrumbs } from "./App.beb1f410.js";
import { S as ShortVideoSvg } from "./ShortVideoSvg.c12024f4.js";
import { T as TextToVideoSvg, a as TextToVideo } from "./TextToVideo.79596fca.js";
import { P as PictureToVideoSvg } from "./PictureToVideoSvg.667caad7.js";
import PictureToVideo from "./PictureToVideo.666a5226.js";
import ShortVideo from "./ShortVideo.4e897f05.js";
import "./Container.042bd347.js";
import "./Button.0782eda3.js";
import "./Spinner.19a0d392.js";
function CreateVideoCards() {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(Row, { lg: 12, children: [
    /* @__PURE__ */ jsx(Col, { sm: "12", md: "4", lg: "3", xl: "3", children: /* @__PURE__ */ jsx("div", { className: "child-card dark-theme-child-card", children: /* @__PURE__ */ jsxs(
      "div",
      {
        className: "inner-child-card dark-theme-inner-child-card",
        style: { cursor: "pointer" },
        onClick: () => {
          navigate("/picture-to-video");
        },
        children: [
          /* @__PURE__ */ jsx(Row, { className: "d-flex align-items-center", children: /* @__PURE__ */ jsx(Col, { children: /* @__PURE__ */ jsx(PictureToVideoSvg, {}) }) }),
          /* @__PURE__ */ jsx(Row, { children: /* @__PURE__ */ jsxs(Col, { className: "mt-2", children: [
            /* @__PURE__ */ jsx(Card.Title, { children: "Picture to Video" }),
            /* @__PURE__ */ jsx(Card.Subtitle, { className: "text-muted", children: "Generate your own video with picture and script or audio." })
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
          navigate("/text-to-video");
        },
        children: [
          /* @__PURE__ */ jsx(Row, { className: "d-flex align-items-center", children: /* @__PURE__ */ jsx(Col, { children: /* @__PURE__ */ jsx(TextToVideoSvg, {}) }) }),
          /* @__PURE__ */ jsx(Row, { children: /* @__PURE__ */ jsxs(Col, { className: "mt-2", children: [
            /* @__PURE__ */ jsx(Card.Title, { className: "", children: "Text to Video" }),
            /* @__PURE__ */ jsx(Card.Subtitle, { className: "text-muted", children: "Create unique animated videos for Social media using text." })
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
          navigate("/short-clips");
        },
        children: [
          /* @__PURE__ */ jsx(Row, { className: "d-flex align-items-center", children: /* @__PURE__ */ jsx(Col, { children: /* @__PURE__ */ jsx(ShortVideoSvg, {}) }) }),
          /* @__PURE__ */ jsx(Row, { children: /* @__PURE__ */ jsxs(Col, { className: "mt-2", children: [
            /* @__PURE__ */ jsx(Card.Title, { className: "", children: "Short Clips" }),
            /* @__PURE__ */ jsx(Card.Subtitle, { className: "text-muted", children: "Generate viral & unique short videos." })
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
          navigate("/video-gallery");
        },
        children: [
          /* @__PURE__ */ jsx(Row, { className: "d-flex align-items-center", children: /* @__PURE__ */ jsx(Col, { children: /* @__PURE__ */ jsx(PictureToVideoSvg, {}) }) }),
          /* @__PURE__ */ jsx(Row, { children: /* @__PURE__ */ jsxs(Col, { className: "mt-2", children: [
            /* @__PURE__ */ jsx(Card.Title, { className: "", children: "Gallery" }),
            /* @__PURE__ */ jsx(Card.Subtitle, { className: "text-muted", children: "Visit here & see all videos that are created." })
          ] }) })
        ]
      }
    ) }) })
  ] }) });
}
const CreateVideoSvg = () => {
  const { skin, setSkin } = useSkin();
  return /* @__PURE__ */ jsx(Fragment, { children: skin === "light" ? /* @__PURE__ */ jsxs("svg", { width: "68", height: "70", viewBox: "0 0 68 70", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx("rect", { width: "68", height: "70", rx: "34", fill: "#177FFA", fillOpacity: "0.11" }),
    /* @__PURE__ */ jsx("rect", { x: "18", y: "20", width: "32", height: "31", rx: "6", fill: "url(#paint0_linear_1173_112953)" }),
    /* @__PURE__ */ jsx("path", { d: "M39.3299 35.729C39.3299 35.5683 39.3937 35.4141 39.5074 35.3005C39.621 35.1869 39.7751 35.1231 39.9358 35.1231C40.0965 35.1231 40.2506 35.1869 40.3643 35.3005C40.4779 35.4141 40.5417 35.5683 40.5417 35.729V42.3939C40.5417 42.5546 40.4779 42.7087 40.3643 42.8224C40.2506 42.936 40.0965 42.9998 39.9358 42.9998H26.6059C26.4452 42.9998 26.2911 42.936 26.1775 42.8224C26.0638 42.7087 26 42.5546 26 42.3939V29.064C26 28.9033 26.0638 28.7492 26.1775 28.6356C26.2911 28.5219 26.4452 28.4581 26.6059 28.4581H33.2709C33.4316 28.4581 33.5857 28.5219 33.6993 28.6356C33.8129 28.7492 33.8768 28.9033 33.8768 29.064C33.8768 29.2247 33.8129 29.3788 33.6993 29.4924C33.5857 29.6061 33.4316 29.6699 33.2709 29.6699H27.2118V41.788H39.3299V35.729Z", fill: "#AFD0F6" }),
    /* @__PURE__ */ jsx("path", { d: "M32.476 36.5289L33.4757 36.3859L39.6172 30.2457C39.6751 30.1898 39.7212 30.123 39.753 30.049C39.7847 29.9751 39.8015 29.8956 39.8022 29.8151C39.8029 29.7347 39.7875 29.6549 39.7571 29.5804C39.7266 29.506 39.6816 29.4383 39.6247 29.3814C39.5678 29.3246 39.5002 29.2796 39.4257 29.2491C39.3512 29.2186 39.2715 29.2033 39.191 29.204C39.1106 29.2047 39.031 29.2214 38.9571 29.2532C38.8832 29.2849 38.8163 29.3311 38.7605 29.389L32.6178 35.5292L32.4748 36.5289H32.476ZM40.474 28.531C40.6429 28.6998 40.7769 28.9002 40.8683 29.1208C40.9597 29.3415 41.0068 29.5779 41.0068 29.8167C41.0068 30.0555 40.9597 30.292 40.8683 30.5126C40.7769 30.7332 40.6429 30.9336 40.474 31.1025L34.1907 37.3857C34.0981 37.4787 33.9777 37.5391 33.8478 37.5578L31.8483 37.8438C31.7551 37.8571 31.6601 37.8486 31.5708 37.8189C31.4814 37.7891 31.4003 37.739 31.3337 37.6724C31.2671 37.6059 31.217 37.5247 31.1873 37.4354C31.1575 37.3461 31.149 37.251 31.1624 37.1579L31.4484 35.1584C31.4668 35.0286 31.5267 34.9083 31.6193 34.8154L37.9037 28.5322C38.2446 28.1914 38.7068 28 39.1888 28C39.6708 28 40.1331 28.1914 40.474 28.5322V28.531Z", fill: "#AFD0F6" }),
    /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id: "paint0_linear_1173_112953", x1: "5.0359", y1: "35.5", x2: "50", y2: "35.5", gradientUnits: "userSpaceOnUse", children: [
      /* @__PURE__ */ jsx("stop", { stopColor: "#1970D7" }),
      /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "#177FFA" })
    ] }) })
  ] }) : /* @__PURE__ */ jsxs("svg", { width: "68", height: "70", viewBox: "0 0 68 70", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx("rect", { width: "68", height: "70", rx: "34", fill: "#B6D5FA" }),
    /* @__PURE__ */ jsx("rect", { x: "18", y: "20", width: "32", height: "31", rx: "6", fill: "url(#paint0_linear_1742_112955)" }),
    /* @__PURE__ */ jsx("path", { d: "M38.15 33.1677V32.5C38.15 31.7972 37.8708 31.1231 37.3738 30.6262C36.8769 30.1292 36.2028 29.85 35.5 29.85H28.5C27.7972 29.85 27.1231 30.1292 26.6262 30.6262C26.1292 31.1231 25.85 31.7972 25.85 32.5V39.5C25.85 40.2028 26.1292 40.8769 26.6262 41.3738C27.1231 41.8708 27.7972 42.15 28.5 42.15H35.5C36.2028 42.15 36.8769 41.8708 37.3738 41.3738C37.8708 40.8769 38.15 40.2028 38.15 39.5V38.8323L40.2921 40.5054L40.2921 40.5054C41.0474 41.0951 42.15 40.557 42.15 39.5992V32.4008C42.15 31.443 41.0474 30.9049 40.2921 31.4946L40.2921 31.4946L38.15 33.1677ZM38.15 37.1828V34.8172L40.85 32.7083V39.2913L38.15 37.1828ZM36.85 32.5V39.5C36.85 39.6773 36.8151 39.8528 36.7472 40.0166C36.6794 40.1804 36.58 40.3292 36.4546 40.4546C36.3292 40.58 36.1804 40.6794 36.0166 40.7472C35.8528 40.8151 35.6773 40.85 35.5 40.85H28.5C28.142 40.85 27.7986 40.7078 27.5454 40.4546C27.2922 40.2014 27.15 39.858 27.15 39.5V32.5C27.15 32.142 27.2922 31.7986 27.5454 31.5454C27.7986 31.2922 28.142 31.15 28.5 31.15H35.5C35.6773 31.15 35.8528 31.1849 36.0166 31.2528C36.1804 31.3206 36.3292 31.42 36.4546 31.5454C36.58 31.6708 36.6794 31.8196 36.7472 31.9834C36.8151 32.1472 36.85 32.3227 36.85 32.5Z", fill: "#AFD0F6", stroke: "#AFD0F6", strokeWidth: "0.3" }),
    /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id: "paint0_linear_1742_112955", x1: "5.0359", y1: "35.5", x2: "50", y2: "35.5", gradientUnits: "userSpaceOnUse", children: [
      /* @__PURE__ */ jsx("stop", { stopColor: "#1970D7" }),
      /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "#177FFA" })
    ] }) })
  ] }) });
};
const CreateVideo = () => {
  const location = useLocation();
  let childComponent;
  switch (location.pathname) {
    case "/create-video":
      childComponent = /* @__PURE__ */ jsx(CreateVideoCards, {});
      break;
    case "/picture-to-video":
      childComponent = /* @__PURE__ */ jsx(PictureToVideo, {});
      break;
    case "/text-to-video":
      childComponent = /* @__PURE__ */ jsx(TextToVideo, {});
      break;
    case "/short-clips":
      childComponent = /* @__PURE__ */ jsx(ShortVideo, {});
      break;
    default:
      childComponent = null;
  }
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(Container, { className: "parent-card-2 dark-theme-parent-card-2", children: [
    /* @__PURE__ */ jsxs("div", { className: "breadCrumb-custom dark-breadCrumb-custom", children: [
      /* @__PURE__ */ jsx(CreateVideoSvg, {}),
      /* @__PURE__ */ jsx(BreadCrumbs, { title: "Create Video", data: [{ title: "Create Video", link: "/create-video" }] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "component dark-theme-component w-100", children: childComponent })
  ] }) });
};
export {
  CreateVideo as default
};
