import { Z as useLocation, W as useNavigate, r as react, K as ReactToast, j as jsx, x as jsxs } from "./index.b27a7f54.js";
import { ah as getUrlParam, l as axiosInstace, ai as Correct } from "./App.beb1f410.js";
const Success = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const sessionId = getUrlParam("session_id", location.search);
  react.exports.useEffect(() => {
    subscriptionActivated();
  }, []);
  const subscriptionActivated = () => {
    axiosInstace.post("/activate-subscription", {
      sessionId
    }).then(function(response) {
      let userData = JSON.parse(localStorage.getItem("user_data"));
      if (userData) {
        navigate("/");
      } else {
        navigate("/login");
      }
      console.log({ response });
    }).catch(function(error) {
      ReactToast({ message: error.message, error: true });
      console.log(error);
    });
  };
  return /* @__PURE__ */ jsx("div", { className: "vh-100 d-flex justify-content-center align-items-center", children: /* @__PURE__ */ jsxs("div", { className: "card col-md-4 bg-white shadow-md p-5", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "m-auto mb-4 text-center d-flex justify-content-between",
        style: { height: "75px", width: "75px" },
        children: /* @__PURE__ */ jsx(
          "img",
          {
            src: Correct,
            className: "text-success bi bi-check-circle"
          }
        )
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("h1", { children: "Subscription completed!" }),
      /* @__PURE__ */ jsx("p", { children: " " })
    ] })
  ] }) });
};
export {
  Success as default
};
