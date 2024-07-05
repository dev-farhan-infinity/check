import { L as useDispatch, N as useSelector, r as react, P as subscriptionActions, aP as emptyPostSuggestion, x as jsxs, j as jsx, U as Link, aQ as postSuggestions } from "./index.b27a7f54.js";
import { d as dist } from "./index.eb9d3d3e.js";
import { S as SelectLanguage, B as BsSaveFill, C as CreationHubApi } from "./SelectLanguage.edfa7268.js";
import { ae as Breadcrumb, af as BreadcrumbItem, ag as Modal, z as Row, D as Col, E as Card, S as Spinner, b as CardBody } from "./App.beb1f410.js";
import { C as Container } from "./Container.042bd347.js";
import { B as Button } from "./Button.0782eda3.js";
import "./iconBase.41b88a80.js";
const Any = () => {
  const dispatch = useDispatch();
  const [prompt, setPrompt, promptRef] = dist("");
  const [prompt1, setPrompt1, prompt1Ref] = dist("");
  const [prompt2, setPrompt2, prompt2Ref] = dist("");
  const [prompt3, setPrompt3, prompt3Ref] = dist("");
  const [prompt4, setPrompt4, prompt4Ref] = dist("");
  const [language, setLanguage, languageRef] = dist("English");
  const [data, setData] = dist();
  const [docId, setDocId, docIdRef] = dist();
  const [show, setShow] = dist(false);
  const [msg, setMsg, msgRef] = dist("");
  const [documentloding, setdocumentloding] = dist(false);
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
      prompt2: `${prompt1Ref.current}`,
      prompt3: `${prompt2Ref.current}`,
      prompt4: `${prompt3Ref.current}`,
      prompt5: `${prompt4Ref.current}`,
      language: `${languageRef.current}`,
      type: "any_commands"
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
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { className: "pb-3", children: /* @__PURE__ */ jsxs(Breadcrumb, { className: "ms-1", children: [
      /* @__PURE__ */ jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsx(Link, { to: "/creationhub", children: "Creation Hub" }) }),
      /* @__PURE__ */ jsx(BreadcrumbItem, { active: true, children: /* @__PURE__ */ jsx(Link, { to: "/command", children: /* @__PURE__ */ jsx("span", { active: true, children: "Commands" }) }) })
    ] }) }),
    /* @__PURE__ */ jsx(Modal, { show, onHide: handleClose, children: /* @__PURE__ */ jsx(Modal.Body, { children: msgRef.current }) }),
    /* @__PURE__ */ jsx("div", { className: "spinner" }),
    /* @__PURE__ */ jsx(Container, { className: "", children: /* @__PURE__ */ jsxs(Row, { className: "h-100 customcard", children: [
      /* @__PURE__ */ jsx(Col, { lg: "6", className: "h-100", children: /* @__PURE__ */ jsxs("div", { className: "h-100 ", children: [
        /* @__PURE__ */ jsx("div", { className: "borderbottom", children: /* @__PURE__ */ jsxs(Card.Body, { children: [
          /* @__PURE__ */ jsx(Card.Title, { children: "Any Commands" }),
          /* @__PURE__ */ jsx(Card.Text, { children: "Endless possibility. " })
        ] }) }),
        /* @__PURE__ */ jsx(Card.Body, { children: /* @__PURE__ */ jsxs("form", { className: "mt-5", onSubmit: (e) => handleSubmit(e), children: [
          /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
            /* @__PURE__ */ jsx("label", { children: "Industry" }),
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
            /* @__PURE__ */ jsx("label", { children: "Create a" }),
            /* @__PURE__ */ jsx("div", { className: "input-affix", children: /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                onChange: (e) => setPrompt1(e.target.value),
                className: "form-control",
                id: "userName",
                placeholder: "Travel to India"
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
            /* @__PURE__ */ jsx("label", { children: "About" }),
            /* @__PURE__ */ jsx("div", { className: "input-affix", children: /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                onChange: (e) => setPrompt2(e.target.value),
                className: "form-control",
                id: "userName",
                placeholder: "Travel to India"
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
            /* @__PURE__ */ jsx("label", { children: "In order to" }),
            /* @__PURE__ */ jsx("div", { className: "input-affix", children: /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                onChange: (e) => setPrompt3(e.target.value),
                className: "form-control",
                id: "userName",
                placeholder: "Travel to India"
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
            /* @__PURE__ */ jsx("label", { children: "How much long" }),
            /* @__PURE__ */ jsx("div", { className: "input-affix", children: /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                onChange: (e) => setPrompt4(e.target.value),
                className: "form-control",
                id: "userName",
                placeholder: "Travel to India"
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
      /* @__PURE__ */ jsx(Col, { lg: "6", children: /* @__PURE__ */ jsxs("div", { className: "h-100", children: [
        /* @__PURE__ */ jsx("div", { className: "borderbottom", children: /* @__PURE__ */ jsxs(Card.Body, { children: [
          /* @__PURE__ */ jsx(Card.Title, { className: "text-center font-weight-bold text-uppercase", children: "Output" }),
          /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
            BsSaveFill,
            {
              style: { cursor: "pointer" },
              onClick: (e) => saveDocument(e)
            }
          ) }) })
        ] }) }),
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
  Any as default
};
