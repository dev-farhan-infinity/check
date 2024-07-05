import { r as react, j as jsx, c as classnames } from "./index.18b6d573.js";
import { W as useBootstrapPrefix } from "./App.dfab3394.js";
const Container = /* @__PURE__ */ react.exports.forwardRef(({
  bsPrefix,
  fluid = false,
  as: Component = "div",
  className,
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, "container");
  const suffix = typeof fluid === "string" ? `-${fluid}` : "-fluid";
  return /* @__PURE__ */ jsx(Component, {
    ref,
    ...props,
    className: classnames(className, fluid ? `${prefix}${suffix}` : prefix)
  });
});
Container.displayName = "Container";
const Container$1 = Container;
export {
  Container$1 as C
};
