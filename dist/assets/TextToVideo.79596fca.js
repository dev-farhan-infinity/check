import { z as useSkin, j as jsx, F as Fragment, x as jsxs, r as react, L as useDispatch, N as useSelector, P as subscriptionActions, aC as getTextToVideo, aD as emptyGetTextToVideo, aE as postTextToVideo } from "./index.b27a7f54.js";
import { Z as v4, a as create, T as create$1, u as useFormik, c as create$2, B as BreadCrumbs, z as Row, D as Col, b as CardBody, E as Card, F as Form, L as Label, I as Input, h as FormFeedback, y as CardHeader } from "./App.beb1f410.js";
import { C as Container } from "./Container.042bd347.js";
import { B as Button } from "./Button.0782eda3.js";
import { S as Spinner } from "./Spinner.19a0d392.js";
const TextToVideoSvg = () => {
  const { skin, setSkin } = useSkin();
  return /* @__PURE__ */ jsx(Fragment, { children: skin === "light" ? /* @__PURE__ */ jsxs("svg", { width: "66", height: "68", viewBox: "0 0 66 68", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx("rect", { width: "66", height: "68", rx: "33", fill: "#177FFA", fillOpacity: "0.11" }),
    /* @__PURE__ */ jsx("rect", { x: "17", y: "19", width: "32", height: "31", rx: "6", fill: "url(#paint0_linear_1141_112954)" }),
    /* @__PURE__ */ jsx("path", { d: "M32.9184 30.7222V38.2778M32.9184 30.7222H29.1406M32.9184 30.7222H36.6962", stroke: "white", strokeWidth: "1.5", strokeLinecap: "round", "stroke-linejoin": "round" }),
    /* @__PURE__ */ jsx("path", { d: "M41.4167 35.9167V41.1111C41.4167 41.6121 41.2177 42.0925 40.8634 42.4468C40.5092 42.801 40.0287 43 39.5278 43H26.3056C25.8046 43 25.3241 42.801 24.9699 42.4468C24.6157 42.0925 24.4167 41.6121 24.4167 41.1111V35.9167M41.4167 33.0833V27.8889C41.4167 27.3879 41.2177 26.9075 40.8634 26.5532C40.5092 26.199 40.0287 26 39.5278 26H26.3056C25.8046 26 25.3241 26.199 24.9699 26.5532C24.6157 26.9075 24.4167 27.3879 24.4167 27.8889V33.0833M40 35.9167V33.0833H42.8333V35.9167H40ZM23 35.9167V33.0833H25.8333V35.9167H23Z", stroke: "white", strokeWidth: "1.5", "stroke-linejoin": "round" }),
    /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id: "paint0_linear_1141_112954", x1: "4.0359", y1: "34.5", x2: "49", y2: "34.5", gradientUnits: "userSpaceOnUse", children: [
      /* @__PURE__ */ jsx("stop", { stopColor: "#1970D7" }),
      /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "#177FFA" })
    ] }) })
  ] }, v4()) : /* @__PURE__ */ jsxs("svg", { width: "66", height: "68", viewBox: "0 0 66 68", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx("rect", { width: "66", height: "68", rx: "33", fill: "#B6D5FA" }),
    /* @__PURE__ */ jsx("rect", { x: "17", y: "19", width: "32", height: "31", rx: "6", fill: "url(#paint0_linear_1744_112966)" }),
    /* @__PURE__ */ jsx("path", { d: "M32.9184 30.7227V38.2782M32.9184 30.7227H29.1406M32.9184 30.7227H36.6962", stroke: "white", strokeWidth: "1.5", strokeLinecap: "round", "stroke-linejoin": "round" }),
    /* @__PURE__ */ jsx("path", { d: "M41.4167 35.9167V41.1111C41.4167 41.6121 41.2177 42.0925 40.8634 42.4468C40.5092 42.801 40.0287 43 39.5278 43H26.3056C25.8046 43 25.3241 42.801 24.9699 42.4468C24.6157 42.0925 24.4167 41.6121 24.4167 41.1111V35.9167M41.4167 33.0833V27.8889C41.4167 27.3879 41.2177 26.9075 40.8634 26.5532C40.5092 26.199 40.0287 26 39.5278 26H26.3056C25.8046 26 25.3241 26.199 24.9699 26.5532C24.6157 26.9075 24.4167 27.3879 24.4167 27.8889V33.0833M40 35.9167V33.0833H42.8333V35.9167H40ZM23 35.9167V33.0833H25.8333V35.9167H23Z", stroke: "white", strokeWidth: "1.5", "stroke-linejoin": "round" }),
    /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id: "paint0_linear_1744_112966", x1: "4.0359", y1: "34.5", x2: "49", y2: "34.5", gradientUnits: "userSpaceOnUse", children: [
      /* @__PURE__ */ jsx("stop", { stopColor: "#1970D7" }),
      /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "#177FFA" })
    ] }) })
  ] }, v4()) });
};
const MediaPlayer = ({ videoUrl }) => {
  const [progress, setProgress] = react.exports.useState(0);
  const videoRef = react.exports.useRef(null);
  const handleProgress = () => {
    const duration = videoRef.current.duration;
    const currentTime = videoRef.current.currentTime;
    const progress2 = currentTime / duration * 100;
    setProgress(progress2);
  };
  return /* @__PURE__ */ jsx("div", { className: "d-flex justify-content-center", children: /* @__PURE__ */ jsx(
    "video",
    {
      className: "rounded-4",
      onTimeUpdate: handleProgress,
      ref: videoRef,
      width: "450",
      height: "300",
      controls: true,
      children: /* @__PURE__ */ jsx("source", { src: videoUrl, type: "video/mp4" })
    }
  ) });
};
const TextToVideo = () => {
  const dispatch = useDispatch();
  const [show, setShow] = react.exports.useState(false);
  const [loader, setLoader] = react.exports.useState(false);
  const [videoStatus, setVideoStatus] = react.exports.useState(null);
  const [counter, setCounter] = react.exports.useState(32e3);
  const { getTextVideo, getTextVideoLoading, getTextVideoError } = useSelector((state) => state.createVideo);
  const [videoUrl, setVideoUrl] = react.exports.useState(null);
  const [videoId, setVideoId] = react.exports.useState(null);
  const { postTextVideo, postTextVideoLoading, postTextVideoError } = useSelector((state) => state.createVideo);
  const { subscription_plans_modal } = useSelector((state) => state.subscription);
  react.exports.useEffect(() => {
    if (postTextVideoLoading === "pending" && postTextVideoError === null) {
      setLoader(true);
      setShow(true);
    }
    if (postTextVideoLoading === "idle" && postTextVideoError !== null) {
      setLoader(false);
      setShow(false);
    }
    if (postTextVideoError) {
      if (postTextVideoError.includes("Insufficient Credit")) {
        dispatch(
          subscriptionActions.updateModalState({
            subscription: !subscription_plans_modal
          })
        );
        let upgrade = {
          upgradeModal: !subscription_plans_modal
        };
        localStorage.setItem("upgradeModal", JSON.stringify(upgrade));
      } else if (postTextVideoError.includes("Subscription Not Found")) {
        dispatch(
          subscriptionActions.updateModalState({
            subscription: !subscription_plans_modal
          })
        );
        let upgrade = {
          upgradeModal: !subscription_plans_modal
        };
        localStorage.setItem("upgradeModal", JSON.stringify(upgrade));
      }
    }
  }, [postTextVideoLoading, postTextVideoError]);
  react.exports.useEffect(() => {
    var _a;
    if (postTextVideo !== null) {
      setVideoId((_a = postTextVideo == null ? void 0 : postTextVideo.result) == null ? void 0 : _a.id);
    }
  }, [postTextVideo]);
  react.exports.useEffect(() => {
    if (getTextVideoLoading === "idle" && getTextVideoError !== null) {
      setLoader(false);
      setShow(false);
    }
  }, [getTextVideoLoading, getTextVideoError]);
  react.exports.useEffect(() => {
    const timer = setInterval(() => {
      if (videoId && getTextVideo === null) {
        setVideoStatus("Starting");
        dispatch(getTextToVideo(videoId));
      } else {
        if (videoId && getTextVideo !== null) {
          if (getTextVideo.video.status === "starting") {
            setVideoStatus(getTextVideo.video.status);
            dispatch(getTextToVideo(videoId));
          }
          if (getTextVideo.video.status === "processing") {
            setVideoStatus(getTextVideo.video.status);
            dispatch(getTextToVideo(videoId));
          }
          if (getTextVideo.video.status === "succeeded" && getTextVideo.video.output !== "" && videoId) {
            setVideoStatus(getTextVideo.video.status);
            formik.resetForm();
            setLoader(false);
            setVideoId(null);
            setVideoUrl(getTextVideo.video.output);
          }
        }
      }
    }, counter);
    return () => {
      clearInterval(timer);
    };
  }, [getTextVideo, videoId]);
  const validationSchema = {
    text: create().required("Text is required"),
    fps: create$1().min(5, "Number must be between 5 and 60").max(60, "Number must be between 5 and 60").required("FPS is required"),
    videoLength: create$1().min(5, "Number must be between 5 and 10000").max(1e4, "Number must be between 5 and 10000").required("Video length is required")
  };
  const formik = useFormik({
    initialValues: {
      text: "",
      fps: "",
      videoLength: ""
    },
    validationSchema: create$2(validationSchema),
    validateOnChange: true,
    onSubmit: (values, actions) => {
      setVideoId(null);
      setVideoStatus(null);
      dispatch(emptyGetTextToVideo());
      setShow(true);
      actions.setFieldValue("text", values.text);
      actions.setFieldValue("fps", values.fps);
      actions.setFieldValue("videoLength", values.videoLength);
      dispatch(postTextToVideo(values));
      actions.setSubmitting(false);
    }
  });
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { className: "spinner" }),
    /* @__PURE__ */ jsxs(Container, { className: "parent-card-2 dark-theme-parent-card-2 dark-theme-parent-card-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "breadCrumb-custom dark-breadCrumb-custom", children: [
        /* @__PURE__ */ jsx(TextToVideoSvg, {}),
        /* @__PURE__ */ jsx(BreadCrumbs, { title: "Text To Video", data: [{ title: "Create Video", link: "/create-video" }, { title: "Text To Video" }] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "inner-parent-child", children: /* @__PURE__ */ jsxs(Row, { className: "h-100", children: [
        /* @__PURE__ */ jsx(Col, { lg: "6", className: "h-100", children: /* @__PURE__ */ jsxs("div", { className: "custom-card-5 dark-theme-custom-card-5", children: [
          /* @__PURE__ */ jsxs(CardBody, { children: [
            /* @__PURE__ */ jsx(Card.Title, { children: "Text to Video" }),
            /* @__PURE__ */ jsx(Card.Text, { children: "Start creating your own videos with text" })
          ] }),
          /* @__PURE__ */ jsx(CardBody, { children: /* @__PURE__ */ jsxs(Form, { id: "form2", onSubmit: formik.handleSubmit, className: "mt-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
              /* @__PURE__ */ jsx(Label, { children: "Write about your video" }),
              /* @__PURE__ */ jsxs("div", { className: "input-affix", children: [
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    disabled: loader,
                    type: "text",
                    className: "form-control",
                    id: "text",
                    placeholder: "Start entering text e.g: A dancing panda at NYC",
                    ...formik.getFieldProps("text"),
                    onChange: formik.handleChange("text"),
                    onBlur: formik.handleBlur,
                    invalid: formik.touched.text && formik.errors.text ? true : false
                  }
                ),
                formik.touched.text && formik.errors.text ? /* @__PURE__ */ jsx(FormFeedback, { type: "invalid", children: formik.errors.text }) : null
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
              /* @__PURE__ */ jsx(Label, { children: "Frames Per Second" }),
              /* @__PURE__ */ jsxs("div", { className: "input-affix m-b-10", children: [
                /* @__PURE__ */ jsx("i", { className: "prefix-icon anticon anticon-lock" }),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    disabled: loader,
                    type: "number",
                    id: "fps",
                    className: "form-control",
                    placeholder: "Number of frames in the video between 5 to 60",
                    ...formik.getFieldProps("fps"),
                    onChange: formik.handleChange("fps"),
                    onBlur: formik.handleBlur,
                    invalid: formik.touched.fps && formik.errors.fps ? true : false
                  }
                ),
                formik.touched.fps && formik.errors.fps ? /* @__PURE__ */ jsx(FormFeedback, { type: "invalid", children: formik.errors.fps }) : null
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
              /* @__PURE__ */ jsx(Label, { children: "Total number of Frames" }),
              /* @__PURE__ */ jsxs("div", { className: "input-affix m-b-10", children: [
                /* @__PURE__ */ jsx("i", { className: "prefix-icon anticon anticon-lock" }),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    disabled: loader,
                    type: "number",
                    className: "form-control",
                    id: "videoLength",
                    placeholder: "Frame rate for the video. (minimum: 5; maximum: 10000)",
                    ...formik.getFieldProps("videoLength"),
                    onChange: formik.handleChange("videoLength"),
                    onBlur: formik.handleBlur,
                    invalid: formik.touched.videoLength && formik.errors.videoLength ? true : false
                  }
                ),
                formik.touched.videoLength && formik.errors.videoLength ? /* @__PURE__ */ jsx(FormFeedback, { type: "invalid", children: formik.errors.videoLength }) : null
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "form-group", children: /* @__PURE__ */ jsxs(Button, { disabled: loader === true ? true : false, form: "form2", type: "submit", color: "primary", className: "d-flex gap-1 flex-nowrap mt-1", style: { padding: "15px 30px", borderRadius: "20px" }, children: [
              /* @__PURE__ */ jsx("span", { children: "Generate Video" }),
              loader === true ? /* @__PURE__ */ jsx(
                Spinner,
                {
                  style: {
                    height: "1rem",
                    width: "1rem"
                  }
                }
              ) : null
            ] }) })
          ] }) })
        ] }) }),
        /* @__PURE__ */ jsx(Col, { lg: "6", className: "h-100", children: /* @__PURE__ */ jsxs("div", { className: "custom-card-5 dark-theme-custom-card-5 p-4", children: [
          /* @__PURE__ */ jsx(CardBody, { children: /* @__PURE__ */ jsx("h2", { className: "text-center font-weight-bold p-1", children: "Output" }) }),
          /* @__PURE__ */ jsxs(CardBody, { children: [
            /* @__PURE__ */ jsx(Card.Title, { className: "text-uppercase" }),
            loader === false && /* @__PURE__ */ jsx(MediaPlayer, { videoUrl }),
            loader === true && /* @__PURE__ */ jsxs(Row, { xs: 12, className: "d-flex justify-content-center align-items-center gap-2", children: [
              /* @__PURE__ */ jsx(
                Spinner,
                {
                  style: {
                    height: "4rem",
                    width: "4rem"
                  },
                  animation: "border",
                  role: "status",
                  children: /* @__PURE__ */ jsx("span", { className: "visually-hidden", children: "Loading..." })
                }
              ),
              /* @__PURE__ */ jsxs(CardHeader, { className: "d-flex text-capitalize justify-content-center align-items-center", children: [
                videoStatus,
                "..."
              ] }),
              /* @__PURE__ */ jsx(CardHeader, { className: "d-flex justify-content-center align-items-center", children: "Please wait 2 to 5 minutes while we generate your video" })
            ] })
          ] })
        ] }) })
      ] }) })
    ] })
  ] });
};
const TextToVideo$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: TextToVideo
}, Symbol.toStringTag, { value: "Module" }));
export {
  TextToVideoSvg as T,
  TextToVideo as a,
  TextToVideo$1 as b
};
