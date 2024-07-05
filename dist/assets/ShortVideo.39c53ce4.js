import { r as react, p as propTypes$2, j as jsx, c as classnames, x as jsxs, F as Fragment, L as useDispatch, W as useNavigate, N as useSelector, P as subscriptionActions, aE as getShortClips, aF as emptyPostClips, aG as emptyGetClips, aH as getAvailableSubtitle, aI as postShortClips, aJ as emptySubtitle, K as ReactToast } from "./index.18b6d573.js";
import { W as useBootstrapPrefix, x as Col, b as create, o as create$1, u as useFormik, c as create$2, B as BreadCrumbs, w as Row, d as CardBody, i as Label, I as Input, j as FormFeedback, l as Spinner, G as StateManagedSelect$1, H as selectThemeColors } from "./App.dfab3394.js";
import { S as ShortVideoSvg } from "./ShortVideoSvg.0f9ddfbf.js";
import { C as Container } from "./Container.dd96083c.js";
import { B as Button } from "./Button.62e85ee4.js";
function hasChildOfType(children, type) {
  return react.exports.Children.toArray(children).some((child) => /* @__PURE__ */ react.exports.isValidElement(child) && child.type === type);
}
const propTypes$1 = {
  type: propTypes$2.exports.string,
  tooltip: propTypes$2.exports.bool,
  as: propTypes$2.exports.elementType
};
const Feedback = /* @__PURE__ */ react.exports.forwardRef(
  ({
    as: Component = "div",
    className,
    type = "valid",
    tooltip = false,
    ...props
  }, ref) => /* @__PURE__ */ jsx(Component, {
    ...props,
    ref,
    className: classnames(className, `${type}-${tooltip ? "tooltip" : "feedback"}`)
  })
);
Feedback.displayName = "Feedback";
Feedback.propTypes = propTypes$1;
const Feedback$1 = Feedback;
const FormContext = /* @__PURE__ */ react.exports.createContext({});
const FormContext$1 = FormContext;
const FormCheckInput = /* @__PURE__ */ react.exports.forwardRef(({
  id,
  bsPrefix,
  className,
  type = "checkbox",
  isValid = false,
  isInvalid = false,
  as: Component = "input",
  ...props
}, ref) => {
  const {
    controlId
  } = react.exports.useContext(FormContext$1);
  bsPrefix = useBootstrapPrefix(bsPrefix, "form-check-input");
  return /* @__PURE__ */ jsx(Component, {
    ...props,
    ref,
    type,
    id: id || controlId,
    className: classnames(className, bsPrefix, isValid && "is-valid", isInvalid && "is-invalid")
  });
});
FormCheckInput.displayName = "FormCheckInput";
const FormCheckInput$1 = FormCheckInput;
const FormCheckLabel = /* @__PURE__ */ react.exports.forwardRef(({
  bsPrefix,
  className,
  htmlFor,
  ...props
}, ref) => {
  const {
    controlId
  } = react.exports.useContext(FormContext$1);
  bsPrefix = useBootstrapPrefix(bsPrefix, "form-check-label");
  return /* @__PURE__ */ jsx("label", {
    ...props,
    ref,
    htmlFor: htmlFor || controlId,
    className: classnames(className, bsPrefix)
  });
});
FormCheckLabel.displayName = "FormCheckLabel";
const FormCheckLabel$1 = FormCheckLabel;
const FormCheck = /* @__PURE__ */ react.exports.forwardRef(({
  id,
  bsPrefix,
  bsSwitchPrefix,
  inline = false,
  reverse = false,
  disabled = false,
  isValid = false,
  isInvalid = false,
  feedbackTooltip = false,
  feedback,
  feedbackType,
  className,
  style,
  title = "",
  type = "checkbox",
  label,
  children,
  as = "input",
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "form-check");
  bsSwitchPrefix = useBootstrapPrefix(bsSwitchPrefix, "form-switch");
  const {
    controlId
  } = react.exports.useContext(FormContext$1);
  const innerFormContext = react.exports.useMemo(() => ({
    controlId: id || controlId
  }), [controlId, id]);
  const hasLabel = !children && label != null && label !== false || hasChildOfType(children, FormCheckLabel$1);
  const input = /* @__PURE__ */ jsx(FormCheckInput$1, {
    ...props,
    type: type === "switch" ? "checkbox" : type,
    ref,
    isValid,
    isInvalid,
    disabled,
    as
  });
  return /* @__PURE__ */ jsx(FormContext$1.Provider, {
    value: innerFormContext,
    children: /* @__PURE__ */ jsx("div", {
      style,
      className: classnames(className, hasLabel && bsPrefix, inline && `${bsPrefix}-inline`, reverse && `${bsPrefix}-reverse`, type === "switch" && bsSwitchPrefix),
      children: children || /* @__PURE__ */ jsxs(Fragment, {
        children: [input, hasLabel && /* @__PURE__ */ jsx(FormCheckLabel$1, {
          title,
          children: label
        }), feedback && /* @__PURE__ */ jsx(Feedback$1, {
          type: feedbackType,
          tooltip: feedbackTooltip,
          children: feedback
        })]
      })
    })
  });
});
FormCheck.displayName = "FormCheck";
const FormCheck$1 = Object.assign(FormCheck, {
  Input: FormCheckInput$1,
  Label: FormCheckLabel$1
});
const FormControl = /* @__PURE__ */ react.exports.forwardRef(({
  bsPrefix,
  type,
  size,
  htmlSize,
  id,
  className,
  isValid = false,
  isInvalid = false,
  plaintext,
  readOnly,
  as: Component = "input",
  ...props
}, ref) => {
  const {
    controlId
  } = react.exports.useContext(FormContext$1);
  bsPrefix = useBootstrapPrefix(bsPrefix, "form-control");
  return /* @__PURE__ */ jsx(Component, {
    ...props,
    type,
    size: htmlSize,
    ref,
    readOnly,
    id: id || controlId,
    className: classnames(className, plaintext ? `${bsPrefix}-plaintext` : bsPrefix, size && `${bsPrefix}-${size}`, type === "color" && `${bsPrefix}-color`, isValid && "is-valid", isInvalid && "is-invalid")
  });
});
FormControl.displayName = "FormControl";
const FormControl$1 = Object.assign(FormControl, {
  Feedback: Feedback$1
});
const FormFloating = /* @__PURE__ */ react.exports.forwardRef(({
  className,
  bsPrefix,
  as: Component = "div",
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "form-floating");
  return /* @__PURE__ */ jsx(Component, {
    ref,
    className: classnames(className, bsPrefix),
    ...props
  });
});
FormFloating.displayName = "FormFloating";
const FormFloating$1 = FormFloating;
const FormGroup = /* @__PURE__ */ react.exports.forwardRef(({
  controlId,
  as: Component = "div",
  ...props
}, ref) => {
  const context = react.exports.useMemo(() => ({
    controlId
  }), [controlId]);
  return /* @__PURE__ */ jsx(FormContext$1.Provider, {
    value: context,
    children: /* @__PURE__ */ jsx(Component, {
      ...props,
      ref
    })
  });
});
FormGroup.displayName = "FormGroup";
const FormGroup$1 = FormGroup;
const FormLabel = /* @__PURE__ */ react.exports.forwardRef(({
  as: Component = "label",
  bsPrefix,
  column = false,
  visuallyHidden = false,
  className,
  htmlFor,
  ...props
}, ref) => {
  const {
    controlId
  } = react.exports.useContext(FormContext$1);
  bsPrefix = useBootstrapPrefix(bsPrefix, "form-label");
  let columnClass = "col-form-label";
  if (typeof column === "string")
    columnClass = `${columnClass} ${columnClass}-${column}`;
  const classes = classnames(className, bsPrefix, visuallyHidden && "visually-hidden", column && columnClass);
  htmlFor = htmlFor || controlId;
  if (column)
    return /* @__PURE__ */ jsx(Col, {
      ref,
      as: "label",
      className: classes,
      htmlFor,
      ...props
    });
  return /* @__PURE__ */ jsx(Component, {
    ref,
    className: classes,
    htmlFor,
    ...props
  });
});
FormLabel.displayName = "FormLabel";
const FormLabel$1 = FormLabel;
const FormRange = /* @__PURE__ */ react.exports.forwardRef(({
  bsPrefix,
  className,
  id,
  ...props
}, ref) => {
  const {
    controlId
  } = react.exports.useContext(FormContext$1);
  bsPrefix = useBootstrapPrefix(bsPrefix, "form-range");
  return /* @__PURE__ */ jsx("input", {
    ...props,
    type: "range",
    ref,
    className: classnames(className, bsPrefix),
    id: id || controlId
  });
});
FormRange.displayName = "FormRange";
const FormRange$1 = FormRange;
const FormSelect = /* @__PURE__ */ react.exports.forwardRef(({
  bsPrefix,
  size,
  htmlSize,
  className,
  isValid = false,
  isInvalid = false,
  id,
  ...props
}, ref) => {
  const {
    controlId
  } = react.exports.useContext(FormContext$1);
  bsPrefix = useBootstrapPrefix(bsPrefix, "form-select");
  return /* @__PURE__ */ jsx("select", {
    ...props,
    size: htmlSize,
    ref,
    className: classnames(className, bsPrefix, size && `${bsPrefix}-${size}`, isValid && `is-valid`, isInvalid && `is-invalid`),
    id: id || controlId
  });
});
FormSelect.displayName = "FormSelect";
const FormSelect$1 = FormSelect;
const FormText = /* @__PURE__ */ react.exports.forwardRef(
  ({
    bsPrefix,
    className,
    as: Component = "small",
    muted,
    ...props
  }, ref) => {
    bsPrefix = useBootstrapPrefix(bsPrefix, "form-text");
    return /* @__PURE__ */ jsx(Component, {
      ...props,
      ref,
      className: classnames(className, bsPrefix, muted && "text-muted")
    });
  }
);
FormText.displayName = "FormText";
const FormText$1 = FormText;
const Switch = /* @__PURE__ */ react.exports.forwardRef((props, ref) => /* @__PURE__ */ jsx(FormCheck$1, {
  ...props,
  ref,
  type: "switch"
}));
Switch.displayName = "Switch";
const Switch$1 = Object.assign(Switch, {
  Input: FormCheck$1.Input,
  Label: FormCheck$1.Label
});
const FloatingLabel = /* @__PURE__ */ react.exports.forwardRef(({
  bsPrefix,
  className,
  children,
  controlId,
  label,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "form-floating");
  return /* @__PURE__ */ jsxs(FormGroup$1, {
    ref,
    className: classnames(className, bsPrefix),
    controlId,
    ...props,
    children: [children, /* @__PURE__ */ jsx("label", {
      htmlFor: controlId,
      children: label
    })]
  });
});
FloatingLabel.displayName = "FloatingLabel";
const FloatingLabel$1 = FloatingLabel;
const propTypes = {
  _ref: propTypes$2.exports.any,
  validated: propTypes$2.exports.bool,
  as: propTypes$2.exports.elementType
};
const Form = /* @__PURE__ */ react.exports.forwardRef(({
  className,
  validated,
  as: Component = "form",
  ...props
}, ref) => /* @__PURE__ */ jsx(Component, {
  ...props,
  ref,
  className: classnames(className, validated && "was-validated")
}));
Form.displayName = "Form";
Form.propTypes = propTypes;
const Form$1 = Object.assign(Form, {
  Group: FormGroup$1,
  Control: FormControl$1,
  Floating: FormFloating$1,
  Check: FormCheck$1,
  Switch: Switch$1,
  Label: FormLabel$1,
  Text: FormText$1,
  Range: FormRange$1,
  Select: FormSelect$1,
  FloatingLabel: FloatingLabel$1
});
const ShortVideo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loader, setLoader] = react.exports.useState(false);
  const [postClipsLoader, setPostClipsLoader] = react.exports.useState(false);
  const [postClipsState, setPostClipsState] = react.exports.useState(false);
  const [videoID, setVideoID] = react.exports.useState(null);
  const [checkCaption, setCheckCaption] = react.exports.useState(false);
  const [subtitleLanguage, setSubtitleLanguage] = react.exports.useState(null);
  const { postClips, postClipsError } = useSelector((state) => state.createVideo);
  const { getClips, getClipsError } = useSelector((state) => state.createVideo);
  const { getSubtitle, getSubtitleError, getSubtitleLoading } = useSelector((state) => state.createVideo);
  const { subscription_plans_modal } = useSelector((state) => state.subscription);
  const captions = [
    { label: "Yes", value: true },
    { label: "No", value: false }
  ];
  const font = [
    { label: "Arial", value: "Arial" },
    { label: "Times New Roman", value: "Times New Roman" },
    { label: "Courier New", value: "Courier New" },
    { label: "Helvetica", value: "Helvetica" },
    { label: "Verdana", value: "Verdana" },
    { label: "Tahoma", value: "Tahoma" },
    { label: "Impact", value: "Impact" },
    { label: "Georgia", value: "Georgia" },
    { label: "Comic Sans MS", value: "Comic Sans MS" },
    { label: "Open Sans", value: "Open Sans" },
    { label: "Lato", value: "Lato" },
    { label: "Montserrat", value: "Montserrat" },
    { label: "Source Sans Pro", value: "Source Sans Pro" },
    { label: "PT Sans", value: "PT Sans" },
    { label: "Noto Sans", value: "Noto Sans" },
    { label: "Droid Sans", value: "Droid Sans" },
    { label: "Ubuntu", value: "Ubuntu" },
    { label: "Proxima Nova", value: "Proxima Nova" },
    { label: "DejaVu Serif", value: "DejaVu Serif" }
  ];
  const colours = [
    { label: "Black", value: "&H000000&" },
    { label: "White", value: "&HFFFFFF&" },
    { label: "Red", value: "&H0000FF&" },
    { label: "Green", value: "&H00FF00&" },
    { label: "Blue", value: "&HFF0000&" },
    { label: "Yellow", value: "&H00FFFF&" },
    { label: "Magenta", value: "&HFF00FF&" },
    { label: "Cyan", value: " &HFFFF00&" }
  ];
  const colorStyles = {
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      textShadow: `${state.label === "White" ? "-1px -1px 0 #00000081,  1px -1px 0 #00000081, -1px 1px 0 #00000081, 1px 1px 0 #00000081" : state.label === "Black" ? "-1px -1px 0 #FFFFF81,  1px -1px 0 #FFFFF81, -1px 1px 0 #FFFFF81, 1px 1px 0 #FFFFF81" : ""}`,
      color: `${state.label} !important`
    })
  };
  const fontStyles = {
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      fontFamily: `${state.label} !important`
    })
  };
  react.exports.useEffect(() => {
    if (postClips) {
      if (postClips.video._id && videoID === null) {
        setVideoID(postClips.video._id);
      }
    }
  }, [postClips]);
  react.exports.useEffect(() => {
    if (postClipsError !== null || getClipsError !== null) {
      setLoader(false);
      setVideoID(null);
      setPostClipsLoader(false);
    }
    if (postClipsError) {
      if (postClipsError.includes("Not Enough Credits")) {
        dispatch(
          subscriptionActions.updateModalState({
            subscription: !subscription_plans_modal
          })
        );
        const upgrade = {
          upgradeModal: !subscription_plans_modal
        };
        localStorage.setItem("upgradeModal", JSON.stringify(upgrade));
      } else if (postClipsError.includes("Subscription Not Found")) {
        dispatch(
          subscriptionActions.updateModalState({
            subscription: !subscription_plans_modal
          })
        );
        const upgrade = {
          upgradeModal: !subscription_plans_modal
        };
        localStorage.setItem("upgradeModal", JSON.stringify(upgrade));
      }
    }
  }, [postClipsError, getClipsError]);
  react.exports.useEffect(() => {
    const timeOutFunc = () => {
      if (getClips && postClips) {
        if (getClips.videos.length > 0) {
          if (getClips.videos[0].status === "starting") {
            dispatch(getShortClips(videoID));
          }
          if (getClips.videos[0].status === "processing") {
            if (getClips.videos[0].clips.length > 0) {
              setPostClipsLoader(false);
              setLoader(false);
              navigate({ pathname: "/clipped-video", search: `${videoID}` });
            } else {
              dispatch(getShortClips(videoID));
            }
          }
          if (getClips.videos[0].status === "completed") {
            if (getClips.videos[0].clips.length > 0) {
              setPostClipsLoader(false);
              navigate({ pathname: "/clipped-video", search: `${videoID}` });
            }
            if (getClips.videos[0].clips.length === 0) {
              dispatch(getShortClips(videoID));
            }
          }
          if (getClips.videos[0].status === "failed") {
            setPostClipsLoader(false);
            setLoader(false);
            ReactToast({ message: getClips.videos[0].issue, error: true });
          }
        }
      }
    };
    const interval = setTimeout(timeOutFunc, 2e4);
    return () => {
      clearTimeout(interval);
    };
  }, [getClips]);
  react.exports.useEffect(() => {
    if (videoID !== null) {
      setTimeout(() => {
        dispatch(getShortClips(videoID));
      }, 5e3);
    }
  }, [videoID]);
  react.exports.useEffect(() => {
    if (getSubtitle !== null && getSubtitleError === null && getSubtitleLoading === "idle") {
      setLoader(false);
      setPostClipsLoader(false);
    }
    if (getSubtitleLoading !== "idle" && getSubtitleError === null) {
      setLoader(true);
    }
    if (getSubtitleError !== null) {
      setPostClipsLoader(false);
      setLoader(false);
    }
    if (getSubtitle) {
      setSubtitleLanguage(getSubtitle.languages);
      setPostClipsLoader(true);
      setPostClipsState(true);
    }
  }, [getSubtitleLoading, getSubtitle]);
  const validation = {
    url: create().matches(
      /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/,
      "Enter youtube url!"
    ).required("Please enter a valid website"),
    addCaptions: create$1(),
    colour: create().when("addCaptions", {
      is: true,
      then: create().required("Colour is required"),
      otherwise: create()
    }),
    fontFamily: create().when("addCaptions", {
      is: true,
      then: create().required("Font family is required"),
      otherwise: create()
    }),
    languageCode: create()
  };
  const formik = useFormik({
    initialValues: {
      url: "",
      addCaptions: false,
      colour: "",
      fontFamily: "",
      languageCode: ""
    },
    validationSchema: create$2(validation),
    validateOnChange: true,
    onSubmit: (values, actions) => {
      dispatch(emptyPostClips());
      dispatch(emptyGetClips());
      if (values.languageCode === "" && postClipsState === true) {
        const errors = {};
        errors.languageCode = "Subtitle Language is required";
        return formik.setErrors(errors);
      }
      actions.setFieldValue("url", values.url);
      actions.setFieldValue("languageCode", values.languageCode);
      if (values.addCaptions === true) {
        actions.setFieldValue("addCaptions", values.addCaptions);
        actions.setFieldValue("colour", values.colour);
        actions.setFieldValue("fontFamily", values.fontFamily);
      }
      setLoader(true);
      setVideoID(null);
      if (getSubtitle === null) {
        const data = {
          url: values.url
        };
        dispatch(getAvailableSubtitle(data));
        actions.setSubmitting(true);
      } else {
        dispatch(postShortClips(values));
        dispatch(emptySubtitle());
        actions.setSubmitting(true);
      }
    }
  });
  const handleAddCaptionsSelect = (value) => {
    if (!value) {
      formik.values.fontFamily = "";
      formik.values.colour = "";
      formik.values.addCaptions = false;
      setCheckCaption(false);
      return;
    }
    if (value.value !== false) {
      setCheckCaption(true);
    }
    if (value.value === false) {
      setCheckCaption(false);
    }
    formik.handleChange("addCaptions");
    formik.values.addCaptions = value.value;
    formik.getFieldProps("addCaptions");
  };
  const handleFontSelect = (value) => {
    if (!value) {
      formik.handleChange("fontFamily");
      formik.values.fontFamily = "";
      formik.getFieldProps("fontFamily");
      return;
    }
    formik.handleChange("fontFamily");
    formik.values.fontFamily = value.value;
    formik.getFieldProps("fontFamily");
  };
  const handleColourSelect = (value) => {
    if (!value) {
      formik.handleChange("colour");
      formik.values.colour = "";
      formik.getFieldProps("colour");
      return;
    }
    formik.handleChange("colour");
    formik.values.colour = value.value;
    formik.getFieldProps("colour");
  };
  const handleSubtitleChange = (value) => {
    if (!value) {
      formik.handleChange("languageCode");
      formik.values.languageCode = "";
      formik.getFieldProps("languageCode");
      return;
    }
    formik.handleChange("languageCode");
    formik.values.languageCode = value.value;
    formik.getFieldProps("languageCode");
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { className: "spinner" }),
    /* @__PURE__ */ jsxs(Container, { className: "parent-card-2 dark-theme-parent-card-2 dark-theme-parent-card-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "breadCrumb-custom dark-breadCrumb-custom", children: [
        /* @__PURE__ */ jsx(ShortVideoSvg, {}),
        /* @__PURE__ */ jsx(BreadCrumbs, { title: "Short Clips", data: [{ title: "Create Video", link: "/create-video" }, { title: "Short Clips" }] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "inner-parent-child dark-inner-parent-child", children: /* @__PURE__ */ jsx("div", { className: "custom-card-video dark-custom-card-video", children: /* @__PURE__ */ jsx(Row, { className: "justify-content-center", children: /* @__PURE__ */ jsx(Col, { lg: 10, children: /* @__PURE__ */ jsxs(CardBody, { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-center", children: "Drop a video Link" }),
        /* @__PURE__ */ jsxs(Form$1, { id: "form3", onSubmit: formik.handleSubmit, className: "mt-1 ", children: [
          /* @__PURE__ */ jsxs("div", { className: "form-group position-relative", children: [
            /* @__PURE__ */ jsx(Label, { hidden: true, children: "Drop a video Link" }),
            /* @__PURE__ */ jsxs("div", { className: "input-affix", children: [
              /* @__PURE__ */ jsx(
                Input,
                {
                  disabled: postClipsLoader ? true : false,
                  type: "url",
                  className: "form-control",
                  id: "url",
                  placeholder: "Paste Youtube Website URL",
                  invalid: formik.touched.url && formik.errors.url ? true : false,
                  ...formik.getFieldProps("url"),
                  onChange: formik.handleChange("url"),
                  onBlur: formik.handleBlur
                }
              ),
              formik.touched.url && formik.errors.url ? /* @__PURE__ */ jsx(FormFeedback, { type: "invalid", children: formik.errors.url }) : null
            ] }),
            /* @__PURE__ */ jsx("div", { className: "form-group position-absolute top-0", style: { right: "0" }, children: /* @__PURE__ */ jsxs(Button, { disabled: loader === true ? true : false, type: "submit", form: "form3", className: "w-100 d-flex gap-1 justify-content-center align-items-center", style: { padding: "27px 30px", borderRadius: "24px" }, children: [
              /* @__PURE__ */ jsx("span", { children: !getSubtitle || !postClips || !getClips ? "Submit" : "Start Clipping" }),
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
          ] }),
          getSubtitleError && /* @__PURE__ */ jsx(Row, { lg: 12, className: "m-auto", children: /* @__PURE__ */ jsx(Col, { lg: 6, children: /* @__PURE__ */ jsx("h3", { className: "d-flex justify-content-center align-items-center", children: "There was an error with your link. kindly upload another video link" }) }) }),
          getSubtitle && /* @__PURE__ */ jsxs(Row, { lg: 12, className: "m-auto", children: [
            /* @__PURE__ */ jsxs(Col, { lg: 6, children: [
              /* @__PURE__ */ jsx(Label, { className: "form-label", children: "Subtitle Language" }),
              /* @__PURE__ */ jsx(
                StateManagedSelect$1,
                {
                  menuPlacement: "bottom",
                  theme: selectThemeColors,
                  className: "react-select dark-react-select",
                  classNamePrefix: "select",
                  name: "languageCode",
                  id: "languageCode",
                  onBlur: formik.handleBlur,
                  onChange: (e) => handleSubtitleChange(e),
                  options: subtitleLanguage,
                  placeholder: "Select Subtitle Language",
                  isClearable: true,
                  invalid: formik.touched.languageCode && formik.errors.languageCode ? true : false
                }
              ),
              formik.touched.languageCode && formik.errors.languageCode ? /* @__PURE__ */ jsx(FormFeedback, { type: "invalid", children: formik.errors.languageCode }) : null
            ] }),
            /* @__PURE__ */ jsxs(Col, { lg: 6, children: [
              /* @__PURE__ */ jsx(Label, { className: "form-label", children: "Add Captions" }),
              /* @__PURE__ */ jsx(
                StateManagedSelect$1,
                {
                  menuPlacement: "bottom",
                  theme: selectThemeColors,
                  className: "react-select dark-react-select",
                  classNamePrefix: "select",
                  name: "addCaptions",
                  id: "addCaptions",
                  onBlur: formik.handleBlur,
                  onChange: (value) => handleAddCaptionsSelect(value),
                  options: captions,
                  placeholder: "Add Captions",
                  isClearable: true,
                  invalid: formik.touched.addCaptions && formik.errors.addCaptions ? true : false
                }
              ),
              formik.touched.addCaptions && formik.errors.addCaptions ? /* @__PURE__ */ jsx(FormFeedback, { type: "invalid", children: formik.errors.addCaptions }) : null
            ] }),
            checkCaption === true ? /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsxs(Col, { lg: 6, children: [
                /* @__PURE__ */ jsx(Label, { className: "form-label", children: "Select Font" }),
                /* @__PURE__ */ jsx(
                  StateManagedSelect$1,
                  {
                    menuPlacement: "top",
                    theme: selectThemeColors,
                    className: "react-select dark-react-select",
                    classNamePrefix: "select",
                    name: "fontFamily",
                    id: "fontFamily",
                    onBlur: formik.handleBlur,
                    onChange: (value) => handleFontSelect(value),
                    styles: fontStyles,
                    options: font,
                    placeholder: "Select Font Family...",
                    isClearable: true,
                    invalid: formik.touched.fontFamily && formik.errors.fontFamily ? true : false
                  }
                ),
                formik.touched.fontFamily && formik.errors.fontFamily ? /* @__PURE__ */ jsx(FormFeedback, { type: "invalid", children: formik.errors.fontFamily }) : null
              ] }),
              /* @__PURE__ */ jsxs(Col, { lg: 6, children: [
                /* @__PURE__ */ jsx(Label, { className: "form-label", children: "Select Color" }),
                /* @__PURE__ */ jsx(
                  StateManagedSelect$1,
                  {
                    menuPlacement: "top",
                    theme: selectThemeColors,
                    className: "react-select dark-react-select",
                    classNamePrefix: "select",
                    name: "colour",
                    id: "colour",
                    onBlur: formik.handleBlur,
                    onChange: (value) => handleColourSelect(value),
                    styles: colorStyles,
                    options: colours,
                    placeholder: "Select Color",
                    isClearable: true,
                    invalid: formik.touched.colour && formik.errors.colour ? true : false
                  }
                ),
                formik.touched.colour && formik.errors.colour ? /* @__PURE__ */ jsx(FormFeedback, { type: "invalid", children: formik.errors.colour }) : null
              ] })
            ] }) : null
          ] })
        ] })
      ] }) }) }) }) })
    ] })
  ] });
};
export {
  ShortVideo as default
};
