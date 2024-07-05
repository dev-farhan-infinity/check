import { L as useDispatch, Z as useLocation, W as useNavigate, r as react, N as useSelector, z as useSkin, aG as emptyPostClips, aH as emptyGetClips, x as jsxs, F as Fragment, j as jsx, B as Button, aF as getShortClips, K as ReactToast, aq as n, aK as emptySubtitle } from "./index.b27a7f54.js";
import { C as Container } from "./Container.9d0ff769.js";
import { a1 as Modal, a2 as ModalBody, B as BreadCrumbs, R as Row, r as Col, Z as v4, S as Spinner } from "./App.beb1f410.js";
import { R as ReactPlayer } from "./index.a8a60599.js";
import { S as ShortVideoSvg } from "./ShortVideoSvg.c12024f4.js";
const ClippedVideo = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [show, setShow] = react.exports.useState(false);
  const [modalItem, setModalItem] = react.exports.useState(null);
  const [loader, setLoader] = react.exports.useState(true);
  react.exports.useRef(null);
  const [videoData, setVideoData] = react.exports.useState([]);
  const { getClips, getClipsLoading, getClipsError } = useSelector((state) => state.createVideo);
  useSelector((state) => state.createVideo);
  const { skin, setSkin } = useSkin();
  react.exports.useEffect(() => {
    const timeOutFunc = () => {
      const modifiedString = location.search.replace("?", "");
      const videoID = modifiedString;
      if (getClips) {
        if (getClips.videos.length > 0) {
          if (getClips.videos[0].status === "processing") {
            if (getClips.videos[0].clips.length > 0) {
              const updatedData = [...videoData];
              getClips.videos[0].clips.forEach((obj) => {
                if (!videoData.some((item) => item._id === obj._id)) {
                  updatedData.push(obj);
                } else
                  return;
              });
              setLoader(false);
              dispatch(emptyPostClips());
              setVideoData(updatedData);
              dispatch(getShortClips(videoID));
            }
          }
          if (getClips.videos[0].status === "completed" && videoData.length === 0) {
            if (getClips.videos[0].clips.length > 0) {
              const updatedData = [...videoData];
              getClips.videos[0].clips.forEach((obj) => {
                if (!videoData.some((item) => item._id === obj._id)) {
                  updatedData.push(obj);
                }
              });
              setLoader(false);
              setVideoData(updatedData);
              dispatch(emptyPostClips());
              dispatch(emptyGetClips());
              ReactToast({ message: "Video Clipped Completed", error: false });
            }
            if (videoData.length === 0) {
              setVideoData(getClips.videos[0].clips);
              dispatch(getShortClips(videoID));
            }
          }
          if (getClips.videos[0].status === "failed") {
            ReactToast({ message: getClips.videos[0].issue, error: true });
            n.error(getClips.videos[0].issue);
          }
        }
      }
    };
    const interval = setTimeout(timeOutFunc, 1e4);
    return () => {
      clearTimeout(interval);
    };
  }, [getClips]);
  react.exports.useEffect(() => {
    if (location.search) {
      if (!getClips) {
        dispatch(emptyPostClips);
        dispatch(emptyGetClips);
        navigate(-1);
      }
    }
  }, [location]);
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
  const handleGenerateNew = () => {
    setVideoData([]);
    dispatch(emptyPostClips());
    dispatch(emptyGetClips());
    dispatch(emptySubtitle());
    navigate("/short-clips");
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
        /* @__PURE__ */ jsx(BreadCrumbs, { title: "Clipped Video", data: [{ title: "Create Video", link: "/create-video" }, { title: "Short Clips", link: "/short-clips" }, { title: "Clipped Video" }] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "inner-parent-child dark-inner-child-card", children: [
        /* @__PURE__ */ jsx("div", { className: "d-flex justify-content-end", children: /* @__PURE__ */ jsx(Button, { disabled: loader ? true : false, onClick: () => handleGenerateNew(), style: { padding: "15px 30px", borderRadius: "15px", display: "flex", gap: "10px" }, color: "primary", children: /* @__PURE__ */ jsx("span", { children: "Generate New" }) }) }),
        /* @__PURE__ */ jsx(Row, { className: "justify-content-center", children: /* @__PURE__ */ jsxs(Col, { lg: 8, className: "align-items-center", children: [
          videoData == null ? void 0 : videoData.map((item, index) => {
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
                  /* @__PURE__ */ jsx("div", { className: "buttons pt-1", children: /* @__PURE__ */ jsx(Button, { onClick: () => handleDownload(item.url, item.title), color: "primary", style: { padding: "15px 30px", borderRadius: "15px" }, children: "Download" }) })
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
          }),
          loader && /* @__PURE__ */ jsx("div", { style: {
            marginTop: "3rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }, children: /* @__PURE__ */ jsx(
            Spinner,
            {
              style: {
                height: "3rem",
                width: "3rem"
              }
            }
          ) })
        ] }) })
      ] })
    ] })
  ] });
};
export {
  ClippedVideo as default
};
