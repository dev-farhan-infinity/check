import { L as useDispatch, N as useSelector, r as react, P as subscriptionActions, aO as emptyPostSuggestion, x as jsxs, j as jsx, aP as postSuggestions } from "./index.18b6d573.js";
import { d as dist } from "./index.ff83662d.js";
import { S as SelectLanguage, B as BsSaveFill, C as CreationHubApi } from "./SelectLanguage.7c694399.js";
import { B as BreadCrumbs, aa as Modal, w as Row, x as Col, y as Card, l as Spinner, d as CardBody } from "./App.dfab3394.js";
import { T as TSSvg } from "./TSSvg.09027aff.js";
import { C as Container } from "./Container.dd96083c.js";
import { B as Button } from "./Button.62e85ee4.js";
import "./iconBase.696fb3d7.js";
const TS = () => {
  const dispatch = useDispatch();
  const [prompt, setPrompt, promptRef] = dist("");
  const [language, setLanguage, languageRef] = dist("English");
  const [data, setData] = dist();
  const [index, setIndex, indexRef] = dist("15");
  const [documentloding, setdocumentloding] = dist(false);
  const [docId, setDocId, docIdRef] = dist();
  const [show, setShow] = dist(false);
  const [msg, setMsg, msgRef] = dist("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { postSuggestion, postSuggestionLoading, postSuggestionError } = useSelector((state) => state.suggestion);
  const { subscription_plans_modal } = useSelector((state) => state.subscription);
  react.exports.useEffect(() => {
    var _a;
    if (postSuggestion) {
      let suggest = (_a = postSuggestion.data) == null ? void 0 : _a.replace(/(?:\r\n|\r|\n)/g, "<br />");
      setData(suggest);
    }
    if (postSuggestionError) {
      if (postSuggestionError.includes("Insufficient Credit")) {
        dispatch(
          subscriptionActions.updateModalState({
            subscription: !subscription_plans_modal
          })
        );
        let upgrade = {
          upgradeModal: !subscription_plans_modal
        };
        localStorage.setItem("upgradeModal", JSON.stringify(upgrade));
      } else if (postSuggestionError.includes("Subscription Not Found")) {
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
  }, [postSuggestion, postSuggestionError]);
  react.exports.useEffect(() => {
    if (data) {
      dispatch(emptyPostSuggestion());
    }
  }, [data]);
  const handleSubmit = (e) => {
    e.preventDefault();
    var postData = {
      prompt: `${promptRef.current}`,
      prompt2: indexRef.current,
      language: `${languageRef.current}`,
      type: "tiktok_script"
    };
    dispatch(postSuggestions(postData));
  };
  async function saveDocument(e) {
    e.preventDefault();
    setdocumentloding(true);
    if (docIdRef.current) {
      const id = docIdRef.current;
      const res = await CreationHubApi.saveDocumentCreation(id);
      if (res.success) {
        setdocumentloding(false);
        setMsg("Document Saved Successfully");
        handleShow();
      } else {
        setdocumentloding(false);
        setMsg("First generate content then you can save");
        handleShow();
      }
    } else {
      setdocumentloding(false);
      setMsg("First generate content then you can save");
      handleShow();
    }
  }
  const handleSelect = (e) => {
    if (e.target.value === "1") {
      setIndex("15");
      console.log(indexRef.current);
    } else if (e.target.value === "2") {
      setIndex("30");
      console.log(indexRef.current);
    } else if (e.target.value === "3") {
      setIndex("60");
      console.log(indexRef.current);
    }
  };
  return /* @__PURE__ */ jsxs(Container, { className: "parent-card-2 dark-theme-parent-card-2 dark-theme-parent-card-2", children: [
    /* @__PURE__ */ jsxs("div", { className: "breadCrumb-custom dark-breadCrumb-custom", children: [
      /* @__PURE__ */ jsx(TSSvg, {}),
      /* @__PURE__ */ jsx(BreadCrumbs, { title: "Tiktok Script", data: [{ title: "Creation Hub", link: "/creationhub" }, { title: "Tiktok", link: "/tiktok" }, { title: "Tiktok Script", link: "/tiktok_script" }] })
    ] }),
    /* @__PURE__ */ jsx(Modal, { show, onHide: handleClose, children: /* @__PURE__ */ jsx(Modal.Body, { children: msgRef.current }) }),
    /* @__PURE__ */ jsx("div", { className: "spinner" }),
    /* @__PURE__ */ jsx("div", { className: "component dark-theme-component w-100", children: /* @__PURE__ */ jsxs(Row, { className: "h-100", children: [
      /* @__PURE__ */ jsx(Col, { lg: "6", children: /* @__PURE__ */ jsxs("div", { className: "h-100 custom-card-5 dark-theme-custom-card-5", children: [
        /* @__PURE__ */ jsxs(Card.Body, { children: [
          /* @__PURE__ */ jsx(Card.Title, { children: "Tiktok Script" }),
          /* @__PURE__ */ jsx(Card.Text, { children: "Create Tiktok script for viral tiktok videos." })
        ] }),
        /* @__PURE__ */ jsx(Card.Body, { children: /* @__PURE__ */ jsxs("form", { className: "mt-5", onSubmit: (e) => handleSubmit(e), children: [
          /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
            /* @__PURE__ */ jsx("label", { children: "Video title/topic" }),
            /* @__PURE__ */ jsx("div", { className: "input-affix", children: /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                onChange: (e) => setPrompt(e.target.value),
                className: "form-control",
                id: "userName",
                placeholder: "Travel to India"
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
            /* @__PURE__ */ jsx("label", { children: "Timeline" }),
            /* @__PURE__ */ jsx("div", { className: "input-affix m-b-10", children: /* @__PURE__ */ jsxs(
              "select",
              {
                onChange: (e) => handleSelect(e),
                className: "form-select form-select-lg py-2 w-100",
                "aria-label": "Default select example",
                children: [
                  /* @__PURE__ */ jsx(
                    "option",
                    {
                      className: "text-uppercase",
                      value: "1",
                      defaultValue: true,
                      children: "15 Seconds"
                    }
                  ),
                  /* @__PURE__ */ jsx("option", { className: "text-uppercase", value: "2", children: "30 Seconds" }),
                  /* @__PURE__ */ jsx("option", { className: "text-uppercase", value: "3", children: "60 Seconds" })
                ]
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
            /* @__PURE__ */ jsx("label", { children: "Language" }),
            /* @__PURE__ */ jsxs("div", { className: "input-affix m-b-10", children: [
              /* @__PURE__ */ jsx("i", { className: "prefix-icon anticon anticon-lock" }),
              /* @__PURE__ */ jsx(SelectLanguage, { setLanguage, language })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "form-group", children: /* @__PURE__ */ jsxs(Button, { onClick: (e) => handleSubmit(e), form: "form", type: "submit", color: "primary", className: "d-flex gap-1 flex-nowrap mt-1", style: { padding: "15px 30px", borderRadius: "20px" }, children: [
            /* @__PURE__ */ jsx("span", { children: postSuggestionLoading !== "idle" ? "Generating" : "Generate" }),
            postSuggestionLoading !== "idle" ? /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsx(Col, { lg: "6", children: /* @__PURE__ */ jsxs("div", { className: "h-100 custom-card-5 dark-theme-custom-card-5", children: [
        /* @__PURE__ */ jsxs(Card.Body, { children: [
          /* @__PURE__ */ jsx(Card.Title, { className: "text-center font-weight-bold text-uppercase", children: "Output" }),
          /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
            BsSaveFill,
            {
              style: { cursor: "pointer" },
              onClick: (e) => saveDocument(e)
            }
          ) }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: " h-100", children: documentloding ? /* @__PURE__ */ jsxs(CardBody, { className: "py-4 col-12", children: [
          /* @__PURE__ */ jsx(Loader, {}),
          " "
        ] }) : /* @__PURE__ */ jsxs(Card.Body, { children: [
          /* @__PURE__ */ jsx(Card.Title, { className: "text-uppercase" }),
          /* @__PURE__ */ jsx(Card.Text, { children: /* @__PURE__ */ jsx("div", { dangerouslySetInnerHTML: { __html: data } }) })
        ] }) })
      ] }) })
    ] }) })
  ] });
};
export {
  TS as default
};
