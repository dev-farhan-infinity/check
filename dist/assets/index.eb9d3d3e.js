import { r as react } from "./index.b27a7f54.js";
var react_1 = react.exports;
var isFunction = function(setStateAction) {
  return typeof setStateAction === "function";
};
var useStateRef = function(initialState) {
  var _a = react_1.useState(initialState), state = _a[0], setState = _a[1];
  var ref = react_1.useRef(state);
  var dispatch = react_1.useCallback(function(setStateAction) {
    ref.current = isFunction(setStateAction) ? setStateAction(ref.current) : setStateAction;
    setState(ref.current);
  }, []);
  return [state, dispatch, ref];
};
var dist = useStateRef;
export {
  dist as d
};
