import { L as useDispatch, Z as useLocation, W as useNavigate, r as react, z as useSkin, N as useSelector, aK as getGalleryClips, x as jsxs, F as Fragment, j as jsx, B as Button } from "./index.18b6d573.js";
import { C as Container } from "./Container.6d90129c.js";
import { X as Modal, Y as ModalBody, B as BreadCrumbs, R as Row, p as Col, V as v4 } from "./App.dfab3394.js";
import { R as ReactPlayer } from "./index.cefd9311.js";
import { S as ShortVideoSvg } from "./ShortVideoSvg.0f9ddfbf.js";
const ClipsGallery = () => {
  var _a, _b;
  const dispatch = useDispatch();
  const location = useLocation();
  useNavigate();
  const [show, setShow] = react.exports.useState(false);
  const [videoData, setVideoData] = react.exports.useState(null);
  const [modalItem, setModalItem] = react.exports.useState(null);
  const { skin, setSkin } = useSkin();
  const { getGallery } = useSelector((state) => state.createVideo);
  react.exports.useEffect(() => {
    dispatch(getGalleryClips());
  }, []);
  react.exports.useEffect(() => {
    if (getGallery !== null) {
      let id = location.state;
      if (id !== null) {
        const filterDataWithData = getGallery.clips.shortClips.filter((item) => item._id === id);
        setVideoData(filterDataWithData);
      }
    }
  }, [getGallery]);
  const handleDownload = (url, title) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = encodeURIComponent(title);
    link.click();
  };
  const handleShowModal = (item) => {
    setShow(!show);
    setModalItem(item);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Modal,
      {
        size: "md",
        className: "modal modal-dialog-centered",
        toggle: () => setShow(!show),
        isOpen: show,
        children: /* @__PURE__ */ jsx(ModalBody, { className: `${skin === "light" ? "player-modal" : "dark-player-modal"}`, toggle: () => {
          setShow(!show);
          setModalItem(null);
        }, children: /* @__PURE__ */ jsx("div", { className: "w-100 d-flex justify-content-center align-content-center", children: /* @__PURE__ */ jsxs("div", { className: `d-flex flex-column align-items-center mt-1 ${skin === "light" ? "player-container" : "dark-player-container"}`, children: [
          /* @__PURE__ */ jsx("h3", { style: { color: "white", marginTop: "0.8rem" }, children: "Now Playing" }),
          /* @__PURE__ */ jsx("h5", { style: { color: "white" }, children: modalItem == null ? void 0 : modalItem.title }),
          /* @__PURE__ */ jsx(ReactPlayer, { className: `${skin === "light" ? "react-player" : "dark-react-player"}`, controls: true, playing: true, url: modalItem == null ? void 0 : modalItem.url })
        ] }) }) })
      }
    ),
    /* @__PURE__ */ jsxs(Container, { className: "parent-card-2 dark-theme-parent-card-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "breadCrumb-custom dark-breadCrumb-custom", children: [
        /* @__PURE__ */ jsx(ShortVideoSvg, {}),
        /* @__PURE__ */ jsx(BreadCrumbs, { title: "Clipped Video", data: [{ title: "Create Video", link: "/create-video" }, { title: "Gallery", link: "/video-gallery" }, { title: "Short Clips Gallery", link: "/short-clips-gallery" }, { title: "Clipped Video" }] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "inner-parent-child dark-inner-child-card", children: /* @__PURE__ */ jsx(Row, { className: "justify-content-center", children: /* @__PURE__ */ jsx(Col, { lg: 8, className: "align-items-center", children: videoData !== null && ((_b = (_a = videoData[0]) == null ? void 0 : _a.clips) == null ? void 0 : _b.map((item, index) => {
        return /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("h2", { className: "px-4 py-1 mt-4", style: { color: "#177DF5" }, children: [
            "#",
            index + 1,
            " - ",
            item.title
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "cards dark-cards", children: [
            /* @__PURE__ */ jsxs("div", { className: "video-model dark-video-model", children: [
              /* @__PURE__ */ jsxs("div", { onClick: () => handleShowModal(item), className: "card-images dark-card-images", style: { position: "relative", cursor: "pointer" }, children: [
                /* @__PURE__ */ jsx("video", { className: "card-video-images dark-card-video-images", children: /* @__PURE__ */ jsx("source", { src: `${item == null ? void 0 : item.url}#t=5` }) }),
                /* @__PURE__ */ jsxs("span", { style: { position: "absolute", top: "20px", right: "10px", backgroundColor: "#177DF5", borderRadius: "15px", color: "white", padding: "5px 10px", fontWeight: "bold", fontSize: "12px" }, children: [
                  item == null ? void 0 : item.startTime,
                  " - ",
                  item == null ? void 0 : item.endTime
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "buttons pt-1", children: /* @__PURE__ */ jsx(Button, { onClick: () => handleDownload(item == null ? void 0 : item.url, item == null ? void 0 : item.title), color: "primary", style: { padding: "15px 30px", borderRadius: "15px" }, children: "Download" }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "script dark-script w-100", children: [
              /* @__PURE__ */ jsx("div", { className: "d-flex flex-column align-items-end justify-content-center text-center", style: { padding: "5px 10px", fontWeight: "bold", fontSize: "12px" }, children: /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h1", { style: { color: "#32CD32", textAlign: "center" }, children: item == null ? void 0 : item.virality }),
                /* @__PURE__ */ jsx("h5", { style: { textAlign: "center" }, children: "Score" })
              ] }) }),
              (item == null ? void 0 : item.description) ? /* @__PURE__ */ jsx("div", { className: "script-child dark-script-child", children: /* @__PURE__ */ jsx("p", { children: item == null ? void 0 : item.description }) }) : /* @__PURE__ */ jsx("div", { className: "script-child dark-script-child", children: /* @__PURE__ */ jsx("p", { children: "This video has no description" }) })
            ] })
          ] })
        ] }, v4());
      })) }) }) })
    ] })
  ] });
};
export {
  ClipsGallery as default
};
