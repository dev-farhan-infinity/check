import { r as react, j as jsx, c as classnames } from "./index.18b6d573.js";
import { W as useBootstrapPrefix } from "./App.dfab3394.js";
const Spinner = /* @__PURE__ */ react.exports.forwardRef(({
  bsPrefix,
  variant,
  animation = "border",
  size,
  as: Component = "div",
  className,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "spinner");
  const bsSpinnerPrefix = `${bsPrefix}-${animation}`;
  return /* @__PURE__ */ jsx(Component, {
    ref,
    ...props,
    className: classnames(className, bsSpinnerPrefix, size && `${bsSpinnerPrefix}-${size}`, variant && `text-${variant}`)
  });
});
Spinner.displayName = "Spinner";
const Spinner$1 = Spinner;
export {
  Spinner$1 as S
};
