import { x as jsxs, j as jsx } from "./index.b27a7f54.js";
const PlayButtonSvg = () => {
  return /* @__PURE__ */ jsxs("svg", { width: "49", height: "49", viewBox: "0 0 49 49", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx("circle", { cx: "24.5", cy: "24.5", r: "24.5", fill: "#ECF4FD", fillOpacity: "0.85" }),
    /* @__PURE__ */ jsx("path", { d: "M34 24.5L19.75 32.7272L19.75 16.2728L34 24.5Z", fill: "#177FFA" })
  ] });
};
function VideoFrameCapture(url) {
  return /* @__PURE__ */ jsxs("div", { className: "image-container", children: [
    /* @__PURE__ */ jsx("video", { className: "capture-image", children: /* @__PURE__ */ jsx("source", { src: `${url.url}#t=6` }) }),
    /* @__PURE__ */ jsx("div", { className: "background" }),
    /* @__PURE__ */ jsx("div", { className: "playbutton", children: /* @__PURE__ */ jsx(PlayButtonSvg, {}) })
  ] });
}
export {
  VideoFrameCapture as V
};
