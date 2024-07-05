import { W as useNavigate, L as useDispatch, N as useSelector, r as react, aK as getGalleryClips, x as jsxs, j as jsx, F as Fragment, U as Link } from "./index.18b6d573.js";
import { P as PictureToVideoSvg } from "./PictureToVideoSvg.34811482.js";
import { B as BreadCrumbs, w as Row, x as Col, t as hooks, Z as ComponentSpinner } from "./App.dfab3394.js";
import { V as VideoFrameCapture } from "./CreateImage.ee4a4864.js";
import { C as Container } from "./Container.dd96083c.js";
const ShortClipsGallery = () => {
  var _a, _b, _c;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { getGallery, getGalleryLoading } = useSelector((state) => state.createVideo);
  react.exports.useEffect(() => {
    dispatch(getGalleryClips());
  }, []);
  const handleNavigate = (id) => {
    navigate(`/short-clips-gallery/video=${id}`, { state: id });
  };
  return /* @__PURE__ */ jsxs(Container, { className: "parent-card-2 dark-theme-parent-card-2", children: [
    /* @__PURE__ */ jsxs("div", { className: "breadCrumb-custom dark-breadCrumb-custom", children: [
      /* @__PURE__ */ jsx(PictureToVideoSvg, {}),
      /* @__PURE__ */ jsx(BreadCrumbs, { title: "Short Clips", data: [{ title: "Create Video", link: "/create-video" }, { title: "Gallery", link: "/video-gallery" }, { title: "Short Clips", link: "/short-clips-gallery" }] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "component w-100", children: ((_a = getGallery == null ? void 0 : getGallery.clips) == null ? void 0 : _a.shortClips.length) > 0 ? /* @__PURE__ */ jsx(Row, { lg: 12, children: (_c = (_b = getGallery == null ? void 0 : getGallery.clips) == null ? void 0 : _b.shortClips) == null ? void 0 : _c.map((clip) => {
      var _a2, _b2, _c2;
      return /* @__PURE__ */ jsx(Col, { lg: 4, children: /* @__PURE__ */ jsx("div", { className: "child-card dark-theme-child-card", children: /* @__PURE__ */ jsx("div", { className: "inner-child-image-card dark-theme-inner-child-image-card", children: /* @__PURE__ */ jsxs(Row, { lg: 12, children: [
        /* @__PURE__ */ jsx(Col, { onClick: () => handleNavigate(clip == null ? void 0 : clip._id), children: /* @__PURE__ */ jsx(VideoFrameCapture, { url: (_a2 = clip == null ? void 0 : clip.clips[0]) == null ? void 0 : _a2.url }) }),
        /* @__PURE__ */ jsx(Col, { children: /* @__PURE__ */ jsxs("div", { className: "d-flex flex-column mt-1", style: { gap: "2px" }, children: [
          /* @__PURE__ */ jsxs("div", { children: [
            "Title: ",
            ((_b2 = clip == null ? void 0 : clip.clips[0]) == null ? void 0 : _b2.title) ? (_c2 = clip == null ? void 0 : clip.clips[0]) == null ? void 0 : _c2.title : "Not Available"
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            "Status: ",
            clip == null ? void 0 : clip.status
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            "Caption: ",
            (clip == null ? void 0 : clip.withCaptions) === true ? "Yes" : "No"
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            "Date: ",
            hooks(clip == null ? void 0 : clip.createdAt).format("DD MMM YY")
          ] })
        ] }) })
      ] }) }) }) }, clip == null ? void 0 : clip._id);
    }) }) : /* @__PURE__ */ jsx(Fragment, { children: getGalleryLoading !== "idle" ? /* @__PURE__ */ jsx(ComponentSpinner, { style: { width: "2rem", height: "2rem" } }) : /* @__PURE__ */ jsxs("div", { style: { display: "flex", textAlign: "center", width: "100%", justifyContent: "center", color: "gray" }, children: [
      "You have not created any videos, visit ",
      /* @__PURE__ */ jsx(Link, { style: { color: "#177FFA", fontWeight: "500" }, to: "/create-video", children: "\xA0Create Video\xA0" }),
      " tab to start creating short clips"
    ] }) }) })
  ] });
};
export {
  ShortClipsGallery as default
};
