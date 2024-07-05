var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { K as ReactToast, r as react, j as jsx, x as jsxs } from "./index.b27a7f54.js";
import { l as axiosInstace, m as SettingsApi, n as LocalStorageKeys, o as useSignInWithGoogle, G as GoogleSignUpApi, p as auth } from "./App.beb1f410.js";
class LoginApi {
}
__publicField(LoginApi, "login", async (values) => {
  var _a, _b, _c;
  try {
    const res = await axiosInstace.post("/login", values);
    console.log(res.data, "data");
    if (res.data.status == 1) {
      localStorage.setItem("token", res.data.token);
      const checkSub = await axiosInstace.put("/user-update-sub-and-user");
      const userData = await SettingsApi.getProfile();
      if (userData == null ? void 0 : userData.data) {
        localStorage.setItem(
          LocalStorageKeys.userData,
          JSON.stringify((_a = userData == null ? void 0 : userData.data) != null ? _a : {})
        );
      }
      return {
        error: false,
        success: true,
        data: (_b = res == null ? void 0 : res.data) == null ? void 0 : _b.data
      };
    }
    return {
      error: false,
      success: false,
      data: (_c = res == null ? void 0 : res.data) == null ? void 0 : _c.data
    };
  } catch (err) {
    return {
      error: true,
      errors: err
    };
  }
});
class GoogleLoginApi {
}
__publicField(GoogleLoginApi, "googlelogin", async (values) => {
  var _a, _b, _c;
  try {
    const res = await axiosInstace.post("/google-login", values);
    if (res.data.status === 1) {
      localStorage.setItem("token", res.data.token);
      const userData = await SettingsApi.getProfile();
      if (userData == null ? void 0 : userData.data) {
        localStorage.setItem(
          "user_data",
          JSON.stringify((_a = userData == null ? void 0 : userData.data) != null ? _a : {})
        );
      }
      return {
        error: false,
        success: true,
        data: (_b = res == null ? void 0 : res.data) == null ? void 0 : _b.data
      };
    }
    return {
      error: false,
      success: false,
      data: (_c = res == null ? void 0 : res.data) == null ? void 0 : _c.data
    };
  } catch (err) {
    ReactToast({ message: err.response.data.message, error: true });
    return {
      error: true,
      errors: err
    };
  }
});
const GoggleWithLogin = ({ func, buttonText }) => {
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);
  react.exports.useEffect(() => {
    if (!user)
      return;
    onResponseSignup(user);
  }, [user]);
  const onResponseSignup = async (user2) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
    if (user2) {
      const body = {
        userName: (_a = user2 == null ? void 0 : user2.user) == null ? void 0 : _a.displayName,
        email: (_b = user2 == null ? void 0 : user2.user) == null ? void 0 : _b.email,
        password: (_c = user2 == null ? void 0 : user2.user) == null ? void 0 : _c.uid,
        isEmailVerified: (_d = user2 == null ? void 0 : user2.user) == null ? void 0 : _d.emailVerified,
        phoneNumber: (_e = user2 == null ? void 0 : user2.user) == null ? void 0 : _e.phoneNumber,
        profileImage: (_f = user2 == null ? void 0 : user2.user) == null ? void 0 : _f.photoURL,
        firstName: (_g = user2 == null ? void 0 : user2._tokenResponse) == null ? void 0 : _g.firstName,
        lastName: (_h = user2 == null ? void 0 : user2._tokenResponse) == null ? void 0 : _h.lastName
      };
      if (buttonText === "Sign up with Google") {
        const res = await GoogleSignUpApi.userGoogleRegister(body);
        if (res.success) {
          let values = {
            email: (_i = user2 == null ? void 0 : user2.user) == null ? void 0 : _i.email,
            password: (_j = user2 == null ? void 0 : user2.user) == null ? void 0 : _j.uid
          };
          const loginRes = await LoginApi.login(values);
          if (loginRes.success) {
            location.replace("/");
          } else {
            ReactToast({ message: "Please Retry after couple of minutes", error: true });
          }
        }
      } else {
        const res = await GoogleLoginApi.googlelogin(body);
        if (res.success) {
          location.replace("/");
        }
      }
    }
  };
  return /* @__PURE__ */ jsx("div", { className: "App", children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(
    "button",
    {
      className: "btn btn-lg btn-block google-auth-btn",
      style: {
        display: "flex",
        justifyContent: "center",
        width: "100%",
        alignItems: "center",
        border: "1px solid #dbdbdb"
      },
      onClick: () => signInWithGoogle(),
      children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "https://i.ibb.co/wSpBp68/Google-G-Logo-1.png",
            className: "me-2",
            style: { width: "30px", height: "30px" }
          }
        ),
        " ",
        buttonText
      ]
    }
  ) }) });
};
export {
  GoggleWithLogin as G,
  LoginApi as L
};
