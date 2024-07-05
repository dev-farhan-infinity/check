import { t as tagPropType, p as propTypes$1, m as mapToCssModules, c as classnames, j as jsx } from "./index.18b6d573.js";
var _excluded = ["className", "cssModule", "fluid", "tag"];
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var propTypes = {
  tag: tagPropType,
  fluid: propTypes$1.exports.oneOfType([propTypes$1.exports.bool, propTypes$1.exports.string]),
  className: propTypes$1.exports.string,
  cssModule: propTypes$1.exports.object
};
function Container(props) {
  var className = props.className, cssModule = props.cssModule, fluid = props.fluid, _props$tag = props.tag, Tag = _props$tag === void 0 ? "div" : _props$tag, attributes = _objectWithoutProperties(props, _excluded);
  var containerClass = "container";
  if (fluid === true) {
    containerClass = "container-fluid";
  } else if (fluid) {
    containerClass = "container-".concat(fluid);
  }
  var classes = mapToCssModules(classnames(className, containerClass), cssModule);
  return /* @__PURE__ */ jsx(Tag, {
    ...attributes,
    className: classes
  });
}
Container.propTypes = propTypes;
export {
  Container as C
};
