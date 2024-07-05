import { W as useNavigate, r as react, z as useSkin, x as jsxs, j as jsx, U as Link, B as Button, K as ReactToast } from "./index.18b6d573.js";
import { A as AuthApi } from "./App.dfab3394.js";
import { i as illustrationsDark, a as illustrationsLight } from "./not-authorized-dark.ca63a4c2.js";
/* empty css                    */const AccountDeactivated = () => {
  const navigate = useNavigate();
  const [state, setState] = react.exports.useState({
    loading: false
  });
  const { skin } = useSkin();
  const source = skin === "dark" ? illustrationsDark : illustrationsLight;
  const handleLogOut = () => {
    AuthApi.logout();
    navigate("/login");
  };
  const handleActivate = async () => {
    setState({
      ...state,
      loading: true
    });
    const res = await AuthApi.activateAccount();
    if (res == null ? void 0 : res.success) {
      navigate("/login");
      return;
    }
    setState({
      ...state,
      loading: false
    });
    ReactToast({ message: "Something went wrong!", error: true });
    console.log("Something went wrong!", res == null ? void 0 : res.errors);
  };
  return /* @__PURE__ */ jsxs("div", { className: "misc-wrapper", children: [
    /* @__PURE__ */ jsx(Link, { className: "brand-logo", to: "/", children: /* @__PURE__ */ jsx("h2", { className: "brand-text text-primary ms-1", children: "Leo AI" }) }),
    /* @__PURE__ */ jsx("div", { className: "misc-inner p-2 p-sm-3", children: /* @__PURE__ */ jsxs("div", { className: "w-100 text-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "mb-1", children: "Activate !!" }),
        /* @__PURE__ */ jsx("p", { children: "You have deactivated your own account, starting using your account by activating it." }),
        /* @__PURE__ */ jsxs("div", { className: "d-flex gap-1 justify-content-center", children: [
          /* @__PURE__ */ jsx(
            Button,
            {
              onClick: handleActivate,
              color: "primary",
              className: "btn-sm-block mb-1",
              children: "Activate"
            }
          ),
          /* @__PURE__ */ jsx(
            Button,
            {
              onClick: handleLogOut,
              color: "primary",
              className: "btn-sm-block mb-1",
              children: "Logout"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx("img", { className: "img-fluid w-75", src: source, alt: "Not authorized page" })
    ] }) })
  ] });
};
export {
  AccountDeactivated as default
};
