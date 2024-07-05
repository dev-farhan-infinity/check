import { W as useNavigate, x as jsxs, j as jsx, U as Link } from "./index.18b6d573.js";
import { G as GenIcon } from "./iconBase.696fb3d7.js";
import { a8 as Breadcrumb, a9 as BreadcrumbItem, w as Row, x as Col, y as Card } from "./App.dfab3394.js";
import { C as Container } from "./Container.dd96083c.js";
function GrCommand(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeWidth": "2", "d": "M12,9 C9,9 6.83333333,9 5.5,9 C3.5,9 2,7.5 2,5.5 C2,3.5 3.5,2 5.5,2 C7.5,2 9,3.5 9,5.5 C9,6.83333333 9,9 9,12 C9,15 9,17.1666667 9,18.5 C9,20.5 7.5,22 5.5,22 C3.5,22 2,20.5 2,18.5 C2,16.5 3.5,15 5.5,15 C6.83333333,15 9,15 12,15 C15,15 17.1666667,15 18.5,15 C20.5,15 22,16.5 22,18.5 C22,20.5 20.5,22 18.5,22 C16.5,22 15,20.5 15,18.5 C15,17.1666667 15,15 15,12 L15,5.5 C15,3.5 16.5,2 18.5,2 C20.5,2 22,3.5 22,5.5 C22,7.5 20.5,9 18.5,9 L12,9 Z" } }] })(props);
}
function Command() {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { className: "pb-3", children: /* @__PURE__ */ jsx(Breadcrumb, { className: "ms-1", children: /* @__PURE__ */ jsx(BreadcrumbItem, { active: true, children: /* @__PURE__ */ jsx(Link, { to: "/creationhub", children: "Creation Hub" }) }) }) }),
    /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsx(Row, { children: /* @__PURE__ */ jsx(Col, { sm: "12", md: "4", lg: "3", xl: "3", children: /* @__PURE__ */ jsx(
      Card,
      {
        style: { cursor: "pointer" },
        onClick: () => {
          navigate("/any_commands");
        },
        className: "card",
        children: /* @__PURE__ */ jsx(Card.Body, { children: /* @__PURE__ */ jsxs(Container, { children: [
          /* @__PURE__ */ jsx(Row, { className: "d-flex align-items-center", children: /* @__PURE__ */ jsx(Col, { children: /* @__PURE__ */ jsx(
            GrCommand,
            {
              color: "#000",
              style: {
                fontSize: "4rem",
                background: "#F4F7FA",
                borderRadius: "21%",
                padding: "1rem"
              }
            }
          ) }) }),
          /* @__PURE__ */ jsx(Row, { children: /* @__PURE__ */ jsxs(Col, { className: "mt-2", children: [
            /* @__PURE__ */ jsx(Card.Title, { className: "", children: "Any command" }),
            /* @__PURE__ */ jsx(Card.Subtitle, { className: "text-muted", children: "Endless possibility." })
          ] }) })
        ] }) })
      }
    ) }) }) })
  ] });
}
export {
  Command as default
};
