import { p as propTypes$1, t as tagPropType, m as mapToCssModules, c as classnames, j as jsx, r as react, x as jsxs, z as useSkin, F as Fragment, L as useDispatch, N as useSelector, B as Button, au as emptyGetVideo, av as getCreateVideo, aw as postCreateAvatar, ax as postCreateVideo, ay as createAvatarLanguage, P as subscriptionActions, az as getCreateAvatar, aA as emptyGetAvatar } from "./index.18b6d573.js";
import { C as Container } from "./Container.6d90129c.js";
import { d as CardBody, I as Input, i as Label, j as FormFeedback, _ as __awaiter, z as __generator, D as __spreadArray, E as __read, R as Row, p as Col, G as StateManagedSelect$1, H as selectThemeColors, J as components, K as Cleave, b as create, M as create$1, N as create$2, u as useFormik, c as create$3, B as BreadCrumbs, F as Form, O as Nav, P as NavLink, h as CardText, T as TabContent, Q as TabPane, v as CardHeader, l as Spinner$1, U as InputGroup } from "./App.dfab3394.js";
import { S as Spinner } from "./Spinner.4711ef72.js";
import { P as PictureToVideoSvg } from "./PictureToVideoSvg.34811482.js";
var _excluded$1 = ["className", "cssModule", "tag", "active", "disabled", "action", "color"];
function _objectWithoutProperties$2(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$2(source, excluded);
  var key, i2;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i2 = 0; i2 < sourceSymbolKeys.length; i2++) {
      key = sourceSymbolKeys[i2];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$2(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var propTypes = {
  action: propTypes$1.exports.bool,
  active: propTypes$1.exports.bool,
  className: propTypes$1.exports.string,
  cssModule: propTypes$1.exports.object,
  color: propTypes$1.exports.string,
  disabled: propTypes$1.exports.bool,
  tag: tagPropType
};
var handleDisabledOnClick = function handleDisabledOnClick2(e2) {
  e2.preventDefault();
};
function ListGroupItem(props) {
  var className = props.className, cssModule = props.cssModule, _props$tag = props.tag, Tag = _props$tag === void 0 ? "li" : _props$tag, active = props.active, disabled = props.disabled, action = props.action, color = props.color, attributes = _objectWithoutProperties$2(props, _excluded$1);
  var classes = mapToCssModules(classnames(className, active ? "active" : false, disabled ? "disabled" : false, action ? "list-group-item-action" : false, color ? "list-group-item-".concat(color) : false, "list-group-item"), cssModule);
  if (disabled) {
    attributes.onClick = handleDisabledOnClick;
  }
  return /* @__PURE__ */ jsx(Tag, {
    ...attributes,
    className: classes
  });
}
ListGroupItem.propTypes = propTypes;
function _objectWithoutProperties$1(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$1(source, excluded);
  var key, i2;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i2 = 0; i2 < sourceSymbolKeys.length; i2++) {
      key = sourceSymbolKeys[i2];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Plus = react.exports.forwardRef(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties$1(_ref, ["color", "size"]);
  return /* @__PURE__ */ jsxs("svg", {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...rest,
    children: [/* @__PURE__ */ jsx("line", {
      x1: "12",
      y1: "5",
      x2: "12",
      y2: "19"
    }), /* @__PURE__ */ jsx("line", {
      x1: "5",
      y1: "12",
      x2: "19",
      y2: "12"
    })]
  });
});
Plus.propTypes = {
  color: propTypes$1.exports.string,
  size: propTypes$1.exports.oneOfType([propTypes$1.exports.string, propTypes$1.exports.number])
};
Plus.displayName = "Plus";
const Plus$1 = Plus;
const TextArea = ({ formik }) => {
  var _a, _b, _c, _d, _e, _f;
  return /* @__PURE__ */ jsx(CardBody, { children: /* @__PURE__ */ jsxs("div", { className: "form-floating mb-0", children: [
    /* @__PURE__ */ jsx(
      Input,
      {
        ...formik.getFieldProps("text"),
        value: formik.values.textarea,
        name: "textarea",
        type: "textarea",
        id: "textarea",
        placeholder: "Enter your script",
        style: { minHeight: "300px" },
        onChange: formik.handleChange("textarea"),
        onBlur: formik.handleBlur,
        invalid: formik.touched.textarea && formik.errors.textarea ? true : false,
        className: classnames({ "text-danger": ((_b = (_a = formik == null ? void 0 : formik.values) == null ? void 0 : _a.textarea) == null ? void 0 : _b.length) > 4e3 })
      }
    ),
    /* @__PURE__ */ jsx(Label, { htmlFor: "textarea", className: "form-label hidden", for: "text-counter", children: "Counter" }),
    /* @__PURE__ */ jsx(
      "span",
      {
        className: classnames("textarea-counter-value float-end", {
          "bg-danger": ((_d = (_c = formik == null ? void 0 : formik.values) == null ? void 0 : _c.textarea) == null ? void 0 : _d.length) > 4e3
        }),
        children: `${(_f = (_e = formik == null ? void 0 : formik.values) == null ? void 0 : _e.textarea) == null ? void 0 : _f.length}/4000`
      }
    ),
    formik.touched.textarea && formik.errors.textarea ? /* @__PURE__ */ jsx(FormFeedback, { type: "invalid", children: formik.errors.textarea }) : null
  ] }) });
};
var COMMON_MIME_TYPES = /* @__PURE__ */ new Map([
  ["aac", "audio/aac"],
  ["abw", "application/x-abiword"],
  ["arc", "application/x-freearc"],
  ["avif", "image/avif"],
  ["avi", "video/x-msvideo"],
  ["azw", "application/vnd.amazon.ebook"],
  ["bin", "application/octet-stream"],
  ["bmp", "image/bmp"],
  ["bz", "application/x-bzip"],
  ["bz2", "application/x-bzip2"],
  ["cda", "application/x-cdf"],
  ["csh", "application/x-csh"],
  ["css", "text/css"],
  ["csv", "text/csv"],
  ["doc", "application/msword"],
  ["docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
  ["eot", "application/vnd.ms-fontobject"],
  ["epub", "application/epub+zip"],
  ["gz", "application/gzip"],
  ["gif", "image/gif"],
  ["heic", "image/heic"],
  ["heif", "image/heif"],
  ["htm", "text/html"],
  ["html", "text/html"],
  ["ico", "image/vnd.microsoft.icon"],
  ["ics", "text/calendar"],
  ["jar", "application/java-archive"],
  ["jpeg", "image/jpeg"],
  ["jpg", "image/jpeg"],
  ["js", "text/javascript"],
  ["json", "application/json"],
  ["jsonld", "application/ld+json"],
  ["mid", "audio/midi"],
  ["midi", "audio/midi"],
  ["mjs", "text/javascript"],
  ["mp3", "audio/mpeg"],
  ["mp4", "video/mp4"],
  ["mpeg", "video/mpeg"],
  ["mpkg", "application/vnd.apple.installer+xml"],
  ["odp", "application/vnd.oasis.opendocument.presentation"],
  ["ods", "application/vnd.oasis.opendocument.spreadsheet"],
  ["odt", "application/vnd.oasis.opendocument.text"],
  ["oga", "audio/ogg"],
  ["ogv", "video/ogg"],
  ["ogx", "application/ogg"],
  ["opus", "audio/opus"],
  ["otf", "font/otf"],
  ["png", "image/png"],
  ["pdf", "application/pdf"],
  ["php", "application/x-httpd-php"],
  ["ppt", "application/vnd.ms-powerpoint"],
  ["pptx", "application/vnd.openxmlformats-officedocument.presentationml.presentation"],
  ["rar", "application/vnd.rar"],
  ["rtf", "application/rtf"],
  ["sh", "application/x-sh"],
  ["svg", "image/svg+xml"],
  ["swf", "application/x-shockwave-flash"],
  ["tar", "application/x-tar"],
  ["tif", "image/tiff"],
  ["tiff", "image/tiff"],
  ["ts", "video/mp2t"],
  ["ttf", "font/ttf"],
  ["txt", "text/plain"],
  ["vsd", "application/vnd.visio"],
  ["wav", "audio/wav"],
  ["weba", "audio/webm"],
  ["webm", "video/webm"],
  ["webp", "image/webp"],
  ["woff", "font/woff"],
  ["woff2", "font/woff2"],
  ["xhtml", "application/xhtml+xml"],
  ["xls", "application/vnd.ms-excel"],
  ["xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],
  ["xml", "application/xml"],
  ["xul", "application/vnd.mozilla.xul+xml"],
  ["zip", "application/zip"],
  ["7z", "application/x-7z-compressed"],
  ["mkv", "video/x-matroska"],
  ["mov", "video/quicktime"],
  ["msg", "application/vnd.ms-outlook"]
]);
function toFileWithPath(file, path) {
  var f = withMimeType(file);
  if (typeof f.path !== "string") {
    var webkitRelativePath = file.webkitRelativePath;
    Object.defineProperty(f, "path", {
      value: typeof path === "string" ? path : typeof webkitRelativePath === "string" && webkitRelativePath.length > 0 ? webkitRelativePath : file.name,
      writable: false,
      configurable: false,
      enumerable: true
    });
  }
  return f;
}
function withMimeType(file) {
  var name = file.name;
  var hasExtension = name && name.lastIndexOf(".") !== -1;
  if (hasExtension && !file.type) {
    var ext = name.split(".").pop().toLowerCase();
    var type = COMMON_MIME_TYPES.get(ext);
    if (type) {
      Object.defineProperty(file, "type", {
        value: type,
        writable: false,
        configurable: false,
        enumerable: true
      });
    }
  }
  return file;
}
var FILES_TO_IGNORE = [
  ".DS_Store",
  "Thumbs.db"
];
function fromEvent(evt) {
  return __awaiter(this, void 0, void 0, function() {
    return __generator(this, function(_a) {
      if (isObject(evt) && isDataTransfer(evt.dataTransfer)) {
        return [2, getDataTransferFiles(evt.dataTransfer, evt.type)];
      } else if (isChangeEvt(evt)) {
        return [2, getInputFiles(evt)];
      } else if (Array.isArray(evt) && evt.every(function(item) {
        return "getFile" in item && typeof item.getFile === "function";
      })) {
        return [2, getFsHandleFiles(evt)];
      }
      return [2, []];
    });
  });
}
function isDataTransfer(value) {
  return isObject(value);
}
function isChangeEvt(value) {
  return isObject(value) && isObject(value.target);
}
function isObject(v) {
  return typeof v === "object" && v !== null;
}
function getInputFiles(evt) {
  return fromList(evt.target.files).map(function(file) {
    return toFileWithPath(file);
  });
}
function getFsHandleFiles(handles) {
  return __awaiter(this, void 0, void 0, function() {
    var files;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          return [4, Promise.all(handles.map(function(h2) {
            return h2.getFile();
          }))];
        case 1:
          files = _a.sent();
          return [2, files.map(function(file) {
            return toFileWithPath(file);
          })];
      }
    });
  });
}
function getDataTransferFiles(dt, type) {
  return __awaiter(this, void 0, void 0, function() {
    var items, files;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          if (!dt.items)
            return [3, 2];
          items = fromList(dt.items).filter(function(item) {
            return item.kind === "file";
          });
          if (type !== "drop") {
            return [2, items];
          }
          return [4, Promise.all(items.map(toFilePromises))];
        case 1:
          files = _a.sent();
          return [2, noIgnoredFiles(flatten(files))];
        case 2:
          return [2, noIgnoredFiles(fromList(dt.files).map(function(file) {
            return toFileWithPath(file);
          }))];
      }
    });
  });
}
function noIgnoredFiles(files) {
  return files.filter(function(file) {
    return FILES_TO_IGNORE.indexOf(file.name) === -1;
  });
}
function fromList(items) {
  if (items === null) {
    return [];
  }
  var files = [];
  for (var i2 = 0; i2 < items.length; i2++) {
    var file = items[i2];
    files.push(file);
  }
  return files;
}
function toFilePromises(item) {
  if (typeof item.webkitGetAsEntry !== "function") {
    return fromDataTransferItem(item);
  }
  var entry = item.webkitGetAsEntry();
  if (entry && entry.isDirectory) {
    return fromDirEntry(entry);
  }
  return fromDataTransferItem(item);
}
function flatten(items) {
  return items.reduce(function(acc, files) {
    return __spreadArray(__spreadArray([], __read(acc), false), __read(Array.isArray(files) ? flatten(files) : [files]), false);
  }, []);
}
function fromDataTransferItem(item) {
  var file = item.getAsFile();
  if (!file) {
    return Promise.reject("".concat(item, " is not a File"));
  }
  var fwp = toFileWithPath(file);
  return Promise.resolve(fwp);
}
function fromEntry(entry) {
  return __awaiter(this, void 0, void 0, function() {
    return __generator(this, function(_a) {
      return [2, entry.isDirectory ? fromDirEntry(entry) : fromFileEntry(entry)];
    });
  });
}
function fromDirEntry(entry) {
  var reader = entry.createReader();
  return new Promise(function(resolve, reject) {
    var entries = [];
    function readEntries() {
      var _this = this;
      reader.readEntries(function(batch) {
        return __awaiter(_this, void 0, void 0, function() {
          var files, err_1, items;
          return __generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                if (!!batch.length)
                  return [3, 5];
                _a.label = 1;
              case 1:
                _a.trys.push([1, 3, , 4]);
                return [4, Promise.all(entries)];
              case 2:
                files = _a.sent();
                resolve(files);
                return [3, 4];
              case 3:
                err_1 = _a.sent();
                reject(err_1);
                return [3, 4];
              case 4:
                return [3, 6];
              case 5:
                items = Promise.all(batch.map(fromEntry));
                entries.push(items);
                readEntries();
                _a.label = 6;
              case 6:
                return [2];
            }
          });
        });
      }, function(err) {
        reject(err);
      });
    }
    readEntries();
  });
}
function fromFileEntry(entry) {
  return __awaiter(this, void 0, void 0, function() {
    return __generator(this, function(_a) {
      return [2, new Promise(function(resolve, reject) {
        entry.file(function(file) {
          var fwp = toFileWithPath(file, entry.fullPath);
          resolve(fwp);
        }, function(err) {
          reject(err);
        });
      })];
    });
  });
}
var _default = function(file, acceptedFiles) {
  if (file && acceptedFiles) {
    var acceptedFilesArray = Array.isArray(acceptedFiles) ? acceptedFiles : acceptedFiles.split(",");
    var fileName = file.name || "";
    var mimeType = (file.type || "").toLowerCase();
    var baseMimeType = mimeType.replace(/\/.*$/, "");
    return acceptedFilesArray.some(function(type) {
      var validType = type.trim().toLowerCase();
      if (validType.charAt(0) === ".") {
        return fileName.toLowerCase().endsWith(validType);
      } else if (validType.endsWith("/*")) {
        return baseMimeType === validType.replace(/\/.*$/, "");
      }
      return mimeType === validType;
    });
  }
  return true;
};
function _toConsumableArray$1(arr) {
  return _arrayWithoutHoles$1(arr) || _iterableToArray$1(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread$1();
}
function _nonIterableSpread$1() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray$1(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles$1(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray$1(arr);
}
function ownKeys$1(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$1(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = null != arguments[i2] ? arguments[i2] : {};
    i2 % 2 ? ownKeys$1(Object(source), true).forEach(function(key) {
      _defineProperty$1(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _slicedToArray$1(arr, i2) {
  return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i2) || _unsupportedIterableToArray$1(arr, i2) || _nonIterableRest$1();
}
function _nonIterableRest$1() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$1(o2, minLen) {
  if (!o2)
    return;
  if (typeof o2 === "string")
    return _arrayLikeToArray$1(o2, minLen);
  var n2 = Object.prototype.toString.call(o2).slice(8, -1);
  if (n2 === "Object" && o2.constructor)
    n2 = o2.constructor.name;
  if (n2 === "Map" || n2 === "Set")
    return Array.from(o2);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
    return _arrayLikeToArray$1(o2, minLen);
}
function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) {
    arr2[i2] = arr[i2];
  }
  return arr2;
}
function _iterableToArrayLimit$1(arr, i2) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i2 && _arr.length === i2)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles$1(arr) {
  if (Array.isArray(arr))
    return arr;
}
var FILE_INVALID_TYPE = "file-invalid-type";
var FILE_TOO_LARGE = "file-too-large";
var FILE_TOO_SMALL = "file-too-small";
var TOO_MANY_FILES = "too-many-files";
var getInvalidTypeRejectionErr = function getInvalidTypeRejectionErr2(accept) {
  accept = Array.isArray(accept) && accept.length === 1 ? accept[0] : accept;
  var messageSuffix = Array.isArray(accept) ? "one of ".concat(accept.join(", ")) : accept;
  return {
    code: FILE_INVALID_TYPE,
    message: "File type must be ".concat(messageSuffix)
  };
};
var getTooLargeRejectionErr = function getTooLargeRejectionErr2(maxSize) {
  return {
    code: FILE_TOO_LARGE,
    message: "File is larger than ".concat(maxSize, " ").concat(maxSize === 1 ? "byte" : "bytes")
  };
};
var getTooSmallRejectionErr = function getTooSmallRejectionErr2(minSize) {
  return {
    code: FILE_TOO_SMALL,
    message: "File is smaller than ".concat(minSize, " ").concat(minSize === 1 ? "byte" : "bytes")
  };
};
var TOO_MANY_FILES_REJECTION = {
  code: TOO_MANY_FILES,
  message: "Too many files"
};
function fileAccepted(file, accept) {
  var isAcceptable = file.type === "application/x-moz-file" || _default(file, accept);
  return [isAcceptable, isAcceptable ? null : getInvalidTypeRejectionErr(accept)];
}
function fileMatchSize(file, minSize, maxSize) {
  if (isDefined(file.size)) {
    if (isDefined(minSize) && isDefined(maxSize)) {
      if (file.size > maxSize)
        return [false, getTooLargeRejectionErr(maxSize)];
      if (file.size < minSize)
        return [false, getTooSmallRejectionErr(minSize)];
    } else if (isDefined(minSize) && file.size < minSize)
      return [false, getTooSmallRejectionErr(minSize)];
    else if (isDefined(maxSize) && file.size > maxSize)
      return [false, getTooLargeRejectionErr(maxSize)];
  }
  return [true, null];
}
function isDefined(value) {
  return value !== void 0 && value !== null;
}
function allFilesAccepted(_ref) {
  var files = _ref.files, accept = _ref.accept, minSize = _ref.minSize, maxSize = _ref.maxSize, multiple = _ref.multiple, maxFiles = _ref.maxFiles, validator = _ref.validator;
  if (!multiple && files.length > 1 || multiple && maxFiles >= 1 && files.length > maxFiles) {
    return false;
  }
  return files.every(function(file) {
    var _fileAccepted = fileAccepted(file, accept), _fileAccepted2 = _slicedToArray$1(_fileAccepted, 1), accepted = _fileAccepted2[0];
    var _fileMatchSize = fileMatchSize(file, minSize, maxSize), _fileMatchSize2 = _slicedToArray$1(_fileMatchSize, 1), sizeMatch = _fileMatchSize2[0];
    var customErrors = validator ? validator(file) : null;
    return accepted && sizeMatch && !customErrors;
  });
}
function isPropagationStopped(event) {
  if (typeof event.isPropagationStopped === "function") {
    return event.isPropagationStopped();
  } else if (typeof event.cancelBubble !== "undefined") {
    return event.cancelBubble;
  }
  return false;
}
function isEvtWithFiles(event) {
  if (!event.dataTransfer) {
    return !!event.target && !!event.target.files;
  }
  return Array.prototype.some.call(event.dataTransfer.types, function(type) {
    return type === "Files" || type === "application/x-moz-file";
  });
}
function onDocumentDragOver(event) {
  event.preventDefault();
}
function isIe(userAgent) {
  return userAgent.indexOf("MSIE") !== -1 || userAgent.indexOf("Trident/") !== -1;
}
function isEdge(userAgent) {
  return userAgent.indexOf("Edge/") !== -1;
}
function isIeOrEdge() {
  var userAgent = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
  return isIe(userAgent) || isEdge(userAgent);
}
function composeEventHandlers() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }
  return function(event) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
    return fns.some(function(fn) {
      if (!isPropagationStopped(event) && fn) {
        fn.apply(void 0, [event].concat(args));
      }
      return isPropagationStopped(event);
    });
  };
}
function canUseFileSystemAccessAPI() {
  return "showOpenFilePicker" in window;
}
function pickerOptionsFromAccept(accept) {
  if (isDefined(accept)) {
    var acceptForPicker = Object.entries(accept).filter(function(_ref2) {
      var _ref3 = _slicedToArray$1(_ref2, 2), mimeType = _ref3[0], ext = _ref3[1];
      var ok = true;
      if (!isMIMEType(mimeType)) {
        console.warn('Skipped "'.concat(mimeType, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.'));
        ok = false;
      }
      if (!Array.isArray(ext) || !ext.every(isExt)) {
        console.warn('Skipped "'.concat(mimeType, '" because an invalid file extension was provided.'));
        ok = false;
      }
      return ok;
    }).reduce(function(agg, _ref4) {
      var _ref5 = _slicedToArray$1(_ref4, 2), mimeType = _ref5[0], ext = _ref5[1];
      return _objectSpread$1(_objectSpread$1({}, agg), {}, _defineProperty$1({}, mimeType, ext));
    }, {});
    return [{
      description: "Files",
      accept: acceptForPicker
    }];
  }
  return accept;
}
function acceptPropAsAcceptAttr(accept) {
  if (isDefined(accept)) {
    return Object.entries(accept).reduce(function(a2, _ref6) {
      var _ref7 = _slicedToArray$1(_ref6, 2), mimeType = _ref7[0], ext = _ref7[1];
      return [].concat(_toConsumableArray$1(a2), [mimeType], _toConsumableArray$1(ext));
    }, []).filter(function(v) {
      return isMIMEType(v) || isExt(v);
    }).join(",");
  }
  return void 0;
}
function isAbort(v) {
  return v instanceof DOMException && (v.name === "AbortError" || v.code === v.ABORT_ERR);
}
function isSecurityError(v) {
  return v instanceof DOMException && (v.name === "SecurityError" || v.code === v.SECURITY_ERR);
}
function isMIMEType(v) {
  return v === "audio/*" || v === "video/*" || v === "image/*" || v === "text/*" || /\w+\/[-+.\w]+/g.test(v);
}
function isExt(v) {
  return /^.*\.[\w]+$/.test(v);
}
var _excluded = ["children"], _excluded2 = ["open"], _excluded3 = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"], _excluded4 = ["refKey", "onChange", "onClick"];
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray(arr);
}
function _slicedToArray(arr, i2) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i2) || _unsupportedIterableToArray(arr, i2) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o2, minLen) {
  if (!o2)
    return;
  if (typeof o2 === "string")
    return _arrayLikeToArray(o2, minLen);
  var n2 = Object.prototype.toString.call(o2).slice(8, -1);
  if (n2 === "Object" && o2.constructor)
    n2 = o2.constructor.name;
  if (n2 === "Map" || n2 === "Set")
    return Array.from(o2);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
    return _arrayLikeToArray(o2, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) {
    arr2[i2] = arr[i2];
  }
  return arr2;
}
function _iterableToArrayLimit(arr, i2) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i2 && _arr.length === i2)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = null != arguments[i2] ? arguments[i2] : {};
    i2 % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i2;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i2 = 0; i2 < sourceSymbolKeys.length; i2++) {
      key = sourceSymbolKeys[i2];
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
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Dropzone = /* @__PURE__ */ react.exports.forwardRef(function(_ref, ref) {
  var children = _ref.children, params = _objectWithoutProperties(_ref, _excluded);
  var _useDropzone = useDropzone(params), open = _useDropzone.open, props = _objectWithoutProperties(_useDropzone, _excluded2);
  react.exports.useImperativeHandle(ref, function() {
    return {
      open
    };
  }, [open]);
  return /* @__PURE__ */ jsx(react.exports.Fragment, {
    children: children(_objectSpread(_objectSpread({}, props), {}, {
      open
    }))
  });
});
Dropzone.displayName = "Dropzone";
var defaultProps = {
  disabled: false,
  getFilesFromEvent: fromEvent,
  maxSize: Infinity,
  minSize: 0,
  multiple: true,
  maxFiles: 0,
  preventDropOnDocument: true,
  noClick: false,
  noKeyboard: false,
  noDrag: false,
  noDragEventsBubbling: false,
  validator: null,
  useFsAccessApi: true,
  autoFocus: false
};
Dropzone.defaultProps = defaultProps;
Dropzone.propTypes = {
  children: propTypes$1.exports.func,
  accept: propTypes$1.exports.objectOf(propTypes$1.exports.arrayOf(propTypes$1.exports.string)),
  multiple: propTypes$1.exports.bool,
  preventDropOnDocument: propTypes$1.exports.bool,
  noClick: propTypes$1.exports.bool,
  noKeyboard: propTypes$1.exports.bool,
  noDrag: propTypes$1.exports.bool,
  noDragEventsBubbling: propTypes$1.exports.bool,
  minSize: propTypes$1.exports.number,
  maxSize: propTypes$1.exports.number,
  maxFiles: propTypes$1.exports.number,
  disabled: propTypes$1.exports.bool,
  getFilesFromEvent: propTypes$1.exports.func,
  onFileDialogCancel: propTypes$1.exports.func,
  onFileDialogOpen: propTypes$1.exports.func,
  useFsAccessApi: propTypes$1.exports.bool,
  autoFocus: propTypes$1.exports.bool,
  onDragEnter: propTypes$1.exports.func,
  onDragLeave: propTypes$1.exports.func,
  onDragOver: propTypes$1.exports.func,
  onDrop: propTypes$1.exports.func,
  onDropAccepted: propTypes$1.exports.func,
  onDropRejected: propTypes$1.exports.func,
  onError: propTypes$1.exports.func,
  validator: propTypes$1.exports.func
};
var initialState = {
  isFocused: false,
  isFileDialogActive: false,
  isDragActive: false,
  isDragAccept: false,
  isDragReject: false,
  acceptedFiles: [],
  fileRejections: []
};
function useDropzone() {
  var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), accept = _defaultProps$props.accept, disabled = _defaultProps$props.disabled, getFilesFromEvent = _defaultProps$props.getFilesFromEvent, maxSize = _defaultProps$props.maxSize, minSize = _defaultProps$props.minSize, multiple = _defaultProps$props.multiple, maxFiles = _defaultProps$props.maxFiles, onDragEnter = _defaultProps$props.onDragEnter, onDragLeave = _defaultProps$props.onDragLeave, onDragOver = _defaultProps$props.onDragOver, onDrop = _defaultProps$props.onDrop, onDropAccepted = _defaultProps$props.onDropAccepted, onDropRejected = _defaultProps$props.onDropRejected, onFileDialogCancel = _defaultProps$props.onFileDialogCancel, onFileDialogOpen = _defaultProps$props.onFileDialogOpen, useFsAccessApi = _defaultProps$props.useFsAccessApi, autoFocus = _defaultProps$props.autoFocus, preventDropOnDocument = _defaultProps$props.preventDropOnDocument, noClick = _defaultProps$props.noClick, noKeyboard = _defaultProps$props.noKeyboard, noDrag = _defaultProps$props.noDrag, noDragEventsBubbling = _defaultProps$props.noDragEventsBubbling, onError = _defaultProps$props.onError, validator = _defaultProps$props.validator;
  var acceptAttr = react.exports.useMemo(function() {
    return acceptPropAsAcceptAttr(accept);
  }, [accept]);
  var pickerTypes = react.exports.useMemo(function() {
    return pickerOptionsFromAccept(accept);
  }, [accept]);
  var onFileDialogOpenCb = react.exports.useMemo(function() {
    return typeof onFileDialogOpen === "function" ? onFileDialogOpen : noop;
  }, [onFileDialogOpen]);
  var onFileDialogCancelCb = react.exports.useMemo(function() {
    return typeof onFileDialogCancel === "function" ? onFileDialogCancel : noop;
  }, [onFileDialogCancel]);
  var rootRef = react.exports.useRef(null);
  var inputRef = react.exports.useRef(null);
  var _useReducer = react.exports.useReducer(reducer, initialState), _useReducer2 = _slicedToArray(_useReducer, 2), state = _useReducer2[0], dispatch = _useReducer2[1];
  var isFocused = state.isFocused, isFileDialogActive = state.isFileDialogActive;
  var fsAccessApiWorksRef = react.exports.useRef(typeof window !== "undefined" && window.isSecureContext && useFsAccessApi && canUseFileSystemAccessAPI());
  var onWindowFocus = function onWindowFocus2() {
    if (!fsAccessApiWorksRef.current && isFileDialogActive) {
      setTimeout(function() {
        if (inputRef.current) {
          var files = inputRef.current.files;
          if (!files.length) {
            dispatch({
              type: "closeDialog"
            });
            onFileDialogCancelCb();
          }
        }
      }, 300);
    }
  };
  react.exports.useEffect(function() {
    window.addEventListener("focus", onWindowFocus, false);
    return function() {
      window.removeEventListener("focus", onWindowFocus, false);
    };
  }, [inputRef, isFileDialogActive, onFileDialogCancelCb, fsAccessApiWorksRef]);
  var dragTargetsRef = react.exports.useRef([]);
  var onDocumentDrop = function onDocumentDrop2(event) {
    if (rootRef.current && rootRef.current.contains(event.target)) {
      return;
    }
    event.preventDefault();
    dragTargetsRef.current = [];
  };
  react.exports.useEffect(function() {
    if (preventDropOnDocument) {
      document.addEventListener("dragover", onDocumentDragOver, false);
      document.addEventListener("drop", onDocumentDrop, false);
    }
    return function() {
      if (preventDropOnDocument) {
        document.removeEventListener("dragover", onDocumentDragOver);
        document.removeEventListener("drop", onDocumentDrop);
      }
    };
  }, [rootRef, preventDropOnDocument]);
  react.exports.useEffect(function() {
    if (!disabled && autoFocus && rootRef.current) {
      rootRef.current.focus();
    }
    return function() {
    };
  }, [rootRef, autoFocus, disabled]);
  var onErrCb = react.exports.useCallback(function(e2) {
    if (onError) {
      onError(e2);
    } else {
      console.error(e2);
    }
  }, [onError]);
  var onDragEnterCb = react.exports.useCallback(function(event) {
    event.preventDefault();
    event.persist();
    stopPropagation(event);
    dragTargetsRef.current = [].concat(_toConsumableArray(dragTargetsRef.current), [event.target]);
    if (isEvtWithFiles(event)) {
      Promise.resolve(getFilesFromEvent(event)).then(function(files) {
        if (isPropagationStopped(event) && !noDragEventsBubbling) {
          return;
        }
        var fileCount = files.length;
        var isDragAccept = fileCount > 0 && allFilesAccepted({
          files,
          accept: acceptAttr,
          minSize,
          maxSize,
          multiple,
          maxFiles,
          validator
        });
        var isDragReject = fileCount > 0 && !isDragAccept;
        dispatch({
          isDragAccept,
          isDragReject,
          isDragActive: true,
          type: "setDraggedFiles"
        });
        if (onDragEnter) {
          onDragEnter(event);
        }
      }).catch(function(e2) {
        return onErrCb(e2);
      });
    }
  }, [getFilesFromEvent, onDragEnter, onErrCb, noDragEventsBubbling, acceptAttr, minSize, maxSize, multiple, maxFiles, validator]);
  var onDragOverCb = react.exports.useCallback(function(event) {
    event.preventDefault();
    event.persist();
    stopPropagation(event);
    var hasFiles = isEvtWithFiles(event);
    if (hasFiles && event.dataTransfer) {
      try {
        event.dataTransfer.dropEffect = "copy";
      } catch (_unused) {
      }
    }
    if (hasFiles && onDragOver) {
      onDragOver(event);
    }
    return false;
  }, [onDragOver, noDragEventsBubbling]);
  var onDragLeaveCb = react.exports.useCallback(function(event) {
    event.preventDefault();
    event.persist();
    stopPropagation(event);
    var targets = dragTargetsRef.current.filter(function(target) {
      return rootRef.current && rootRef.current.contains(target);
    });
    var targetIdx = targets.indexOf(event.target);
    if (targetIdx !== -1) {
      targets.splice(targetIdx, 1);
    }
    dragTargetsRef.current = targets;
    if (targets.length > 0) {
      return;
    }
    dispatch({
      type: "setDraggedFiles",
      isDragActive: false,
      isDragAccept: false,
      isDragReject: false
    });
    if (isEvtWithFiles(event) && onDragLeave) {
      onDragLeave(event);
    }
  }, [rootRef, onDragLeave, noDragEventsBubbling]);
  var setFiles = react.exports.useCallback(function(files, event) {
    var acceptedFiles = [];
    var fileRejections = [];
    files.forEach(function(file) {
      var _fileAccepted = fileAccepted(file, acceptAttr), _fileAccepted2 = _slicedToArray(_fileAccepted, 2), accepted = _fileAccepted2[0], acceptError = _fileAccepted2[1];
      var _fileMatchSize = fileMatchSize(file, minSize, maxSize), _fileMatchSize2 = _slicedToArray(_fileMatchSize, 2), sizeMatch = _fileMatchSize2[0], sizeError = _fileMatchSize2[1];
      var customErrors = validator ? validator(file) : null;
      if (accepted && sizeMatch && !customErrors) {
        acceptedFiles.push(file);
      } else {
        var errors = [acceptError, sizeError];
        if (customErrors) {
          errors = errors.concat(customErrors);
        }
        fileRejections.push({
          file,
          errors: errors.filter(function(e2) {
            return e2;
          })
        });
      }
    });
    if (!multiple && acceptedFiles.length > 1 || multiple && maxFiles >= 1 && acceptedFiles.length > maxFiles) {
      acceptedFiles.forEach(function(file) {
        fileRejections.push({
          file,
          errors: [TOO_MANY_FILES_REJECTION]
        });
      });
      acceptedFiles.splice(0);
    }
    dispatch({
      acceptedFiles,
      fileRejections,
      type: "setFiles"
    });
    if (onDrop) {
      onDrop(acceptedFiles, fileRejections, event);
    }
    if (fileRejections.length > 0 && onDropRejected) {
      onDropRejected(fileRejections, event);
    }
    if (acceptedFiles.length > 0 && onDropAccepted) {
      onDropAccepted(acceptedFiles, event);
    }
  }, [dispatch, multiple, acceptAttr, minSize, maxSize, maxFiles, onDrop, onDropAccepted, onDropRejected, validator]);
  var onDropCb = react.exports.useCallback(function(event) {
    event.preventDefault();
    event.persist();
    stopPropagation(event);
    dragTargetsRef.current = [];
    if (isEvtWithFiles(event)) {
      Promise.resolve(getFilesFromEvent(event)).then(function(files) {
        if (isPropagationStopped(event) && !noDragEventsBubbling) {
          return;
        }
        setFiles(files, event);
      }).catch(function(e2) {
        return onErrCb(e2);
      });
    }
    dispatch({
      type: "reset"
    });
  }, [getFilesFromEvent, setFiles, onErrCb, noDragEventsBubbling]);
  var openFileDialog = react.exports.useCallback(function() {
    if (fsAccessApiWorksRef.current) {
      dispatch({
        type: "openDialog"
      });
      onFileDialogOpenCb();
      var opts = {
        multiple,
        types: pickerTypes
      };
      window.showOpenFilePicker(opts).then(function(handles) {
        return getFilesFromEvent(handles);
      }).then(function(files) {
        setFiles(files, null);
        dispatch({
          type: "closeDialog"
        });
      }).catch(function(e2) {
        if (isAbort(e2)) {
          onFileDialogCancelCb(e2);
          dispatch({
            type: "closeDialog"
          });
        } else if (isSecurityError(e2)) {
          fsAccessApiWorksRef.current = false;
          if (inputRef.current) {
            inputRef.current.value = null;
            inputRef.current.click();
          } else {
            onErrCb(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."));
          }
        } else {
          onErrCb(e2);
        }
      });
      return;
    }
    if (inputRef.current) {
      dispatch({
        type: "openDialog"
      });
      onFileDialogOpenCb();
      inputRef.current.value = null;
      inputRef.current.click();
    }
  }, [dispatch, onFileDialogOpenCb, onFileDialogCancelCb, useFsAccessApi, setFiles, onErrCb, pickerTypes, multiple]);
  var onKeyDownCb = react.exports.useCallback(function(event) {
    if (!rootRef.current || !rootRef.current.isEqualNode(event.target)) {
      return;
    }
    if (event.key === " " || event.key === "Enter" || event.keyCode === 32 || event.keyCode === 13) {
      event.preventDefault();
      openFileDialog();
    }
  }, [rootRef, openFileDialog]);
  var onFocusCb = react.exports.useCallback(function() {
    dispatch({
      type: "focus"
    });
  }, []);
  var onBlurCb = react.exports.useCallback(function() {
    dispatch({
      type: "blur"
    });
  }, []);
  var onClickCb = react.exports.useCallback(function() {
    if (noClick) {
      return;
    }
    if (isIeOrEdge()) {
      setTimeout(openFileDialog, 0);
    } else {
      openFileDialog();
    }
  }, [noClick, openFileDialog]);
  var composeHandler = function composeHandler2(fn) {
    return disabled ? null : fn;
  };
  var composeKeyboardHandler = function composeKeyboardHandler2(fn) {
    return noKeyboard ? null : composeHandler(fn);
  };
  var composeDragHandler = function composeDragHandler2(fn) {
    return noDrag ? null : composeHandler(fn);
  };
  var stopPropagation = function stopPropagation2(event) {
    if (noDragEventsBubbling) {
      event.stopPropagation();
    }
  };
  var getRootProps = react.exports.useMemo(function() {
    return function() {
      var _ref2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref2$refKey = _ref2.refKey, refKey = _ref2$refKey === void 0 ? "ref" : _ref2$refKey, role = _ref2.role, onKeyDown = _ref2.onKeyDown, onFocus = _ref2.onFocus, onBlur = _ref2.onBlur, onClick = _ref2.onClick, onDragEnter2 = _ref2.onDragEnter, onDragOver2 = _ref2.onDragOver, onDragLeave2 = _ref2.onDragLeave, onDrop2 = _ref2.onDrop, rest = _objectWithoutProperties(_ref2, _excluded3);
      return _objectSpread(_objectSpread(_defineProperty({
        onKeyDown: composeKeyboardHandler(composeEventHandlers(onKeyDown, onKeyDownCb)),
        onFocus: composeKeyboardHandler(composeEventHandlers(onFocus, onFocusCb)),
        onBlur: composeKeyboardHandler(composeEventHandlers(onBlur, onBlurCb)),
        onClick: composeHandler(composeEventHandlers(onClick, onClickCb)),
        onDragEnter: composeDragHandler(composeEventHandlers(onDragEnter2, onDragEnterCb)),
        onDragOver: composeDragHandler(composeEventHandlers(onDragOver2, onDragOverCb)),
        onDragLeave: composeDragHandler(composeEventHandlers(onDragLeave2, onDragLeaveCb)),
        onDrop: composeDragHandler(composeEventHandlers(onDrop2, onDropCb)),
        role: typeof role === "string" && role !== "" ? role : "presentation"
      }, refKey, rootRef), !disabled && !noKeyboard ? {
        tabIndex: 0
      } : {}), rest);
    };
  }, [rootRef, onKeyDownCb, onFocusCb, onBlurCb, onClickCb, onDragEnterCb, onDragOverCb, onDragLeaveCb, onDropCb, noKeyboard, noDrag, disabled]);
  var onInputElementClick = react.exports.useCallback(function(event) {
    event.stopPropagation();
  }, []);
  var getInputProps = react.exports.useMemo(function() {
    return function() {
      var _ref3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref3$refKey = _ref3.refKey, refKey = _ref3$refKey === void 0 ? "ref" : _ref3$refKey, onChange = _ref3.onChange, onClick = _ref3.onClick, rest = _objectWithoutProperties(_ref3, _excluded4);
      var inputProps = _defineProperty({
        accept: acceptAttr,
        multiple,
        type: "file",
        style: {
          display: "none"
        },
        onChange: composeHandler(composeEventHandlers(onChange, onDropCb)),
        onClick: composeHandler(composeEventHandlers(onClick, onInputElementClick)),
        tabIndex: -1
      }, refKey, inputRef);
      return _objectSpread(_objectSpread({}, inputProps), rest);
    };
  }, [inputRef, accept, multiple, onDropCb, disabled]);
  return _objectSpread(_objectSpread({}, state), {}, {
    isFocused: isFocused && !disabled,
    getRootProps,
    getInputProps,
    rootRef,
    inputRef,
    open: composeHandler(openFileDialog)
  });
}
function reducer(state, action) {
  switch (action.type) {
    case "focus":
      return _objectSpread(_objectSpread({}, state), {}, {
        isFocused: true
      });
    case "blur":
      return _objectSpread(_objectSpread({}, state), {}, {
        isFocused: false
      });
    case "openDialog":
      return _objectSpread(_objectSpread({}, initialState), {}, {
        isFileDialogActive: true
      });
    case "closeDialog":
      return _objectSpread(_objectSpread({}, state), {}, {
        isFileDialogActive: false
      });
    case "setDraggedFiles":
      return _objectSpread(_objectSpread({}, state), {}, {
        isDragActive: action.isDragActive,
        isDragAccept: action.isDragAccept,
        isDragReject: action.isDragReject
      });
    case "setFiles":
      return _objectSpread(_objectSpread({}, state), {}, {
        acceptedFiles: action.acceptedFiles,
        fileRejections: action.fileRejections
      });
    case "reset":
      return _objectSpread({}, initialState);
    default:
      return state;
  }
}
function noop() {
}
const AudioInputSvg = () => {
  return /* @__PURE__ */ jsxs("svg", { width: "65", height: "62", viewBox: "0 0 65 62", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx("path", { d: "M1 61H63.6087H1Z", fill: "#177FFA" }),
    /* @__PURE__ */ jsx("path", { d: "M1 61H63.6087", stroke: "#177FFA", strokeWidth: "2", strokeLinecap: "round", "stroke-linejoin": "round" }),
    /* @__PURE__ */ jsx("path", { d: "M32.3025 40.1304H42.7373V24.4783H55.7807L32.3025 1M32.3025 40.1304H21.8677V24.4783H8.82422L32.3025 1", fill: "#177FFA" }),
    /* @__PURE__ */ jsx("path", { d: "M32.3025 40.1304H42.7373V24.4783H55.7807L32.3025 1L8.82422 24.4783H21.8677V40.1304H32.3025Z", stroke: "#177FFA", strokeWidth: "2", strokeLinecap: "round", "stroke-linejoin": "round" })
  ] });
};
const DeleteSvg = () => {
  return /* @__PURE__ */ jsx("svg", { width: "27", height: "27", viewBox: "0 0 27 27", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { d: "M12.4031 0.749978L12.4119 0.750001L14.8794 0.756251L14.8941 0.756288L14.9087 0.758055C15.9456 0.883332 16.8516 1.37234 17.5911 2.18542L12.4031 0.749978ZM12.4031 0.749978L12.3943 0.750577M12.4031 0.749978L12.3943 0.750577M12.3943 0.750577C10.9747 0.847217 9.88192 1.40268 9.18054 2.4385C8.77729 3.03356 8.52705 3.64728 8.46134 4.26625H1.8575C1.24385 4.26625 0.750098 4.76623 0.750001 5.38107C0.74962 5.67517 0.865839 5.95743 1.0732 6.16599C1.2806 6.3746 1.56225 6.49247 1.85641 6.49375H1.8575H3.74125M12.3943 0.750577L3.74125 6.49375M23.0975 6.49389L25.1424 6.495L25.1436 6.495C25.2895 6.49436 25.4339 6.46499 25.5685 6.40856C25.7031 6.35213 25.8252 6.26974 25.9279 6.1661C26.0307 6.06246 26.112 5.9396 26.1673 5.80454L25.9359 5.70987L26.1673 5.80453C26.2224 5.66981 26.2505 5.52556 26.25 5.38M23.0975 6.49389L26.25 5.38109C26.25 5.38073 26.25 5.38037 26.25 5.38M23.0975 6.49389V20.7775C23.0975 22.3915 22.7974 23.7552 22.1336 24.7223C21.4598 25.704 20.4292 26.25 19.0462 26.25H7.77375C6.39105 26.25 5.36473 25.707 4.69536 24.7259C4.03633 23.76 3.74125 22.3963 3.74125 20.7775V6.49375M23.0975 6.49389L3.74125 6.49375M26.25 5.38C26.251 5.08562 26.1353 4.80282 25.9281 4.59358L25.7505 4.76946L25.9281 4.59358C25.7208 4.38409 25.4387 4.26546 25.1439 4.26375H25.1425M26.25 5.38L25.1425 4.26375M25.1425 4.26375H18.5349M25.1425 4.26375H18.5349M9.39484 20.9675L9.3923 20.9675C9.09786 20.9658 8.81613 20.8473 8.60898 20.638C8.40198 20.4289 8.28637 20.1462 8.2875 19.852M9.39484 20.9675L8.5375 9.79C8.5375 9.3125 8.9225 8.925 9.395 8.925C9.8675 8.925 10.2512 9.3125 10.2512 9.79V19.8525M9.39484 20.9675C9.54077 20.9669 9.68515 20.9375 9.81972 20.8811C9.95431 20.8246 10.0765 20.7422 10.1792 20.6386C10.2819 20.535 10.3633 20.4121 10.4185 20.277C10.4737 20.1422 10.5018 19.9978 10.5012 19.8521M9.39484 20.9675L10.2512 19.8525M8.2875 19.852C8.2875 19.8518 8.2875 19.8516 8.2875 19.8514L8.5375 19.8525H8.2875V19.852ZM8.2875 19.852V9.79C8.2875 9.17632 8.78254 8.675 9.395 8.675C10.0079 8.675 10.5012 9.1768 10.5012 9.79V19.8521M10.5012 19.8521C10.5012 19.8519 10.5012 19.8516 10.5012 19.8514L10.2512 19.8525M10.5012 19.8521V19.8525H10.2512M12.8036 20.9675L12.8011 20.9675C12.5066 20.9658 12.2249 20.8473 12.0177 20.638C11.8108 20.4289 11.6951 20.1463 11.6962 19.8521M12.8036 20.9675L11.9462 9.79C11.9462 9.3125 12.33 8.925 12.8025 8.925C13.2775 8.925 13.66 9.3125 13.66 9.79V19.8525M12.8036 20.9675C12.9495 20.9669 13.0939 20.9375 13.2285 20.8811C13.3631 20.8246 13.4852 20.7422 13.5879 20.6386C13.6907 20.535 13.772 20.4121 13.8273 20.277C13.8825 20.1421 13.9106 19.9976 13.91 19.8519M12.8036 20.9675L13.66 19.8525M11.6962 19.8521C11.6962 19.8519 11.6963 19.8516 11.6963 19.8514L11.9462 19.8525H11.6962V19.8521ZM11.6962 19.8521V9.79C11.6962 9.1768 12.1896 8.675 12.8025 8.675C13.4179 8.675 13.91 9.1768 13.91 9.79V19.8519M13.91 19.8519C13.91 19.8517 13.91 19.8516 13.91 19.8514L13.66 19.8525M13.91 19.8519V19.8525H13.66M16.211 8.675L16.2125 8.675C16.8254 8.675 17.3187 9.1768 17.3187 9.79L17.3187 19.8514C17.3187 19.8516 17.3187 19.8517 17.3187 19.8519V19.8525H17.0687C17.0697 20.0807 16.9801 20.3 16.8196 20.4622L16.211 8.675ZM16.211 8.675C15.9166 8.67671 15.6348 8.79511 15.4274 9.00426C15.2202 9.21333 15.1042 9.49601 15.105 9.79038L16.211 8.675ZM18.5349 4.26375C18.4648 3.49708 18.1445 2.79315 17.5912 2.18555L18.5349 4.26375ZM11.0092 3.69564L11.0096 3.69499C11.2903 3.27965 11.7353 3.03131 12.4788 2.97751L14.7599 2.97998C15.1398 3.0357 15.5628 3.2571 15.9589 3.69203C16.1305 3.8806 16.2383 4.06734 16.2926 4.26381L10.715 4.26494C10.7683 4.09982 10.8622 3.91165 11.0092 3.69564ZM20.8825 6.49375L20.8837 20.7775C20.8837 21.938 20.7182 22.7563 20.4089 23.2774C20.1132 23.7756 19.6762 24.02 19.0462 24.02H7.77375C7.4527 24.02 7.18914 23.9561 6.97232 23.837C6.75628 23.7184 6.573 23.5375 6.42286 23.2821C6.11731 22.7623 5.955 21.9438 5.955 20.7775V6.49375H20.8825Z", fill: "#FF2F2F", stroke: "#FF2F2F", "stroke-width": "0.5" }) });
};
const PlaySvg = () => {
  return /* @__PURE__ */ jsxs("svg", { width: "65", height: "70", viewBox: "0 0 79 70", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx("rect", { width: "79", height: "70", rx: "13", fill: "#177FFA" }),
    /* @__PURE__ */ jsx("path", { d: "M54 33.268C55.3333 34.0378 55.3333 35.9623 54 36.7321L34.5 47.9904C33.1667 48.7602 31.5 47.7979 31.5 46.2583L31.5 23.7417C31.5 22.2021 33.1667 21.2398 34.5 22.0096L54 33.268Z", fill: "white" })
  ] });
};
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
const getAudioData = (e2) => {
  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  const a2 = new AudioContext();
  return fetch(e2).then((e22) => e22.arrayBuffer()).then((e22) => a2.decodeAudioData(e22)).catch((e22) => {
    console.error(e22);
  });
}, linearPath = (e2, a2) => {
  var _a, _b, _c;
  const { channel: t2 = 0, samples: v = e2.length, height: h2 = 100, width: r2 = 800, top: s2 = 0, left: l2 = 0, type: i2 = "steps", paths: $ = [{ d: "Q", sx: 0, sy: 0, x: 50, y: 100, ex: 100, ey: 0 }], animation: o2 = false, animationframes: n2 = 10, normalize: b = true } = a2;
  var a2 = getFramesData(e2, t2, o2, n2), e2 = getFilterData(a2, v), w = b ? getNormalizeData(e2) : e2;
  let c2 = "";
  var p, f, g = i2 != "bars" ? (h2 + 2 * s2) / 2 : h2 + s2, m = r2 / v, y = $.length, u2 = i2 == "mirror" ? 2 * y : y, A = w.length;
  for (let n22 = 0; n22 < A; n22++) {
    0 < n22 && (p = c2.length, f = c2.charAt(p - 1), c2 += f == ";" || p === 0 ? " M 0 0 ;" : ";");
    let s22 = -9999, o22 = -9999;
    for (let r22 = 0; r22 < v; r22++) {
      var M = i2 == "bars" || r22 % 2 ? 1 : -1;
      let t22 = 1;
      for (let e22 = 0; e22 < u2; e22++) {
        let a22 = e22;
        e22 >= y && (a22 = e22 - y, t22 = -1), $[a22].minshow = (_a = $[a22].minshow) != null ? _a : 0, $[a22].maxshow = (_b = $[a22].maxshow) != null ? _b : 1, $[a22].normalize = (_c = $[a22].normalize) != null ? _c : false;
        var d2 = $[a22].normalize ? 1 : w[n22][r22];
        if ($[a22].minshow <= w[n22][r22] && $[a22].maxshow >= w[n22][r22])
          switch ($[a22].d) {
            case "L":
              var D = r22 * m + m * $[a22].sx / 100 + l2, x = g + d2 * $[a22].sy / 100 * (i2 != "bars" ? h2 / 2 : h2) * -M * t22, k = r22 * m + m * $[a22].ex / 100 + l2, z = g + d2 * $[a22].ey / 100 * (i2 != "bars" ? h2 / 2 : h2) * -M * t22;
              D === s22 && x === o22 || (c2 += `M ${D} ${x} `), c2 += `L ${k} ${z} `, s22 = k, o22 = z;
              break;
            case "H":
              D = r22 * m + m * $[a22].sx / 100 + l2, x = g + d2 * $[a22].y / 100 * (i2 != "bars" ? h2 / 2 : h2) * -M * t22, k = r22 * m + m * $[a22].ex / 100 + l2;
              D === s22 && x === o22 || (c2 += `M ${D} ${x} `), c2 += `H ${k} `, s22 = k, o22 = x;
              break;
            case "V":
              var z = r22 * m + m * $[a22].x / 100 + l2, C = g + d2 * $[a22].sy / 100 * (i2 != "bars" ? h2 / 2 : h2) * -M * t22, F = g + d2 * $[a22].ey / 100 * (i2 != "bars" ? h2 / 2 : h2) * -M * t22;
              z === s22 && C === o22 || (c2 += `M ${z} ${C} `), c2 += `V ${F} `, s22 = z, o22 = F;
              break;
            case "C":
              var C = r22 * m + m * $[a22].sx / 100 + l2, F = g - g * $[a22].sy / 100 * M, Q = r22 * m + m * $[a22].x / 100 + l2, P = g + d2 * $[a22].y / 100 * (i2 != "bars" ? h2 : 2 * h2) * -M * t22, L = r22 * m + m * $[a22].ex / 100 + l2, Z = g - g * $[a22].ey / 100 * M;
              C === s22 && F === o22 || (c2 += `M ${C} ${F} `), c2 += `C ${C} ${F} ${Q} ${P} ${L} ${Z} `, s22 = L, o22 = Z;
              break;
            case "Q":
              var Q = r22 * m + m * $[a22].sx / 100 + l2, P = g + d2 * $[a22].sy / 100 * (i2 != "bars" ? h2 / 2 : h2) * -M * t22, L = r22 * m + m * $[a22].x / 100 + l2, Z = g + d2 * $[a22].y / 100 * (i2 != "bars" ? h2 : 2 * h2) * -M * t22, N = r22 * m + m * $[a22].ex / 100 + l2, H = g + d2 * $[a22].ey / 100 * (i2 != "bars" ? h2 / 2 : h2) * -M * t22;
              Q === s22 && P === o22 || (c2 += `M ${Q} ${P} `), c2 += `Q ${L} ${Z} ${N} ${H} `, s22 = N, o22 = H;
              break;
            case "A": {
              var N = r22 * m + m * $[a22].sx / 100 + l2, H = g + d2 * $[a22].sy / 100 * (i2 != "bars" ? h2 / 2 : h2) * -M * t22, V = r22 * m + m * $[a22].ex / 100 + l2, B = g + d2 * $[a22].ey / 100 * (i2 != "bars" ? h2 / 2 : h2) * -M * t22, I = (N === s22 && H === o22 || (c2 += `M ${N} ${H} `), $[a22].rx * m / 100), R = $[a22].ry * m / 100;
              let e3 = $[a22].sweep;
              M == -1 && (e3 = e3 == 1 ? 0 : 1), t22 == -1 && (e3 = e3 == 1 ? 0 : 1), c2 += `A ${I} ${R} ${$[a22].angle} ${$[a22].arc} ${e3} ${V} ${B} `, s22 = V, o22 = B;
              break;
            }
            case "Z":
              c2 += "Z ";
          }
      }
    }
  }
  return c2;
}, getFramesData = (e2, a2, t2, r2) => {
  const s2 = e2.getChannelData(a2), o2 = [];
  if (t2) {
    var n2 = e2.sampleRate / r2;
    for (let e22 = 0; e22 < s2.length; e22 += n2) {
      var h2 = s2.slice(e22, e22 + n2);
      o2.push(h2);
    }
  } else
    o2.push(s2);
  return o2;
}, getFilterData = (r2, a2) => {
  const e2 = [];
  var s2 = r2.length;
  for (let t2 = 0; t2 < s2; t2++) {
    var o2 = Math.floor(r2[t2].length / a2);
    const h2 = [];
    for (let e22 = 0; e22 < a2; e22++) {
      var n2 = o2 * e22;
      let a22 = 0;
      for (let e3 = 0; e3 < o2; e3++)
        a22 += Math.abs(r2[t2][n2 + e3]);
      h2.push(a22 / o2);
    }
    e2.push(h2);
  }
  return e2;
}, getNormalizeData = (a2) => {
  const t2 = [];
  var r2 = a2.length;
  for (let e2 = 0; e2 < r2; e2++) {
    var s2 = Math.max(...a2[e2]);
    t2.push(s2);
  }
  const o2 = Math.pow(Math.max(...t2), -1), n2 = [];
  for (let e2 = 0; e2 < r2; e2++) {
    var h2 = a2[e2].map((e22) => e22 * o2);
    n2.push(h2);
  }
  return n2;
};
class AudioPathPlayer extends HTMLElement {
  constructor() {
    super();
    __publicField(this, "loadSong", () => {
      this.durationContainer.textContent = this.calculateTime(this.audio.duration);
      this.seekSlider.max = this.audio.duration;
      this.svg.unpauseAnimations();
      this.animationsvg.setAttribute("dur", "" + this.audio.duration + "s");
      if (!this.animation) {
        this.animationsvgx.setAttribute("dur", "" + this.audio.duration + "s");
      }
      this.svg.pauseAnimations();
      this.svg.setCurrentTime(0);
    });
    __publicField(this, "playPause", () => {
      if (this.audio.paused) {
        this.audio.play();
        this.svg.unpauseAnimations();
        this.path2.style.display = "block";
        this.playPathButton.setAttribute("d", this.pausePath);
        this.raf = requestAnimationFrame(this.whilePlaying);
      } else {
        this.audio.pause();
        this.svg.pauseAnimations();
        this.playPathButton.setAttribute("d", this.playPath);
        cancelAnimationFrame(this.raf);
      }
    });
    __publicField(this, "sliderInput", () => {
      this.path2.style.display = "block";
      this.currentTimeContainer.textContent = this.calculateTime(this.seekSlider.value);
      this.svg.setCurrentTime(this.seekSlider.value);
      if (!this.audio.paused) {
        cancelAnimationFrame(this.raf);
      }
    });
    __publicField(this, "sliderChange", () => {
      this.audio.currentTime = this.seekSlider.value;
      this.path2.style.display = "block";
      this.svg.setCurrentTime(this.seekSlider.value);
      if (!this.audio.paused) {
        this.raf = requestAnimationFrame(this.whilePlaying);
      }
    });
    __publicField(this, "onFinish", () => {
      this.seekSlider.value = this.seekSlider.max;
      this.svg.setCurrentTime(this.audio.duration);
      this.svg.pauseAnimations();
      this.playPathButton.setAttribute("d", this.playPath);
      cancelAnimationFrame(this.raf);
    });
    __publicField(this, "whilePlaying", () => {
      this.seekSlider.value = this.audio.currentTime;
      this.currentTimeContainer.textContent = this.calculateTime(this.seekSlider.value);
      this.svg.setCurrentTime(this.seekSlider.value);
      this.raf = requestAnimationFrame(this.whilePlaying);
    });
    __publicField(this, "svgDraw", () => {
      const path = linearPath(this.audioData, this.options);
      if (!this.animation) {
        this.path1.setAttribute("d", path);
        this.path2.setAttribute("d", path);
      } else {
        this.animationsvg.setAttribute("values", path);
      }
      this.svg.setCurrentTime(this.seekSlider.value);
    });
    __publicField(this, "calculateTime", (secs) => {
      const minutes = Math.floor(secs / 60);
      const seconds = Math.floor(secs % 60);
      const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${minutes}:${returnedSeconds}`;
    });
    this.shadowDOM = this.attachShadow({ mode: "open" });
    this.audioData = null;
    if (this.hasAttribute("wave-options")) {
      this.options = JSON.parse(this.attributes["wave-options"].value);
      this.options.width = parseInt(this.attributes["wave-width"].value);
      this.options.height = parseInt(this.attributes["wave-height"].value);
    } else {
      this.options = {
        samples: 40,
        type: "mirror",
        width: parseInt(this.attributes["wave-width"].value),
        height: parseInt(this.attributes["wave-height"].value),
        paths: [
          { d: "V", sy: 0, x: 50, ey: 100 }
        ]
      };
    }
    if (this.options.hasOwnProperty("animation")) {
      this.animation = this.options.animation;
    } else {
      this.animation = false;
    }
    this.playPath = "M8.5 8.7c0-1.7 1.2-2.4 2.6-1.5l14.4 8.3c1.4.8 1.4 2.2 0 3l-14.4 8.3c-1.4.8-2.6.2-2.6-1.5V8.7z";
    this.pausePath = "M9.2 25c0 .5.4 1 .9 1h3.6c.5 0 .9-.4.9-1V9c0-.5-.4-.9-.9-.9h-3.6c-.4-.1-.9.3-.9.9v16zm11-17c-.5 0-1 .4-1 .9V25c0 .5.4 1 1 1h3.6c.5 0 1-.4 1-1V9c0-.5-.4-.9-1-.9 0-.1-3.6-.1-3.6-.1z";
    this.playPathButton = null;
    this.svg = null;
    this.path1 = null;
    this.path2 = null;
    this.animationsvg = null;
    this.animationsvgx = null;
    this.audio = null;
    this.durationContainer = null;
    this.seekSlider = null;
    this.currentTimeContainer = null;
    this.playIconContainer = null;
    this.raf = null;
  }
  initComponent() {
    this.playPathButton = this.shadowDOM.getElementById("playPathButton");
    this.svg = this.shadowDOM.getElementById("svg");
    this.path1 = this.shadowDOM.getElementById("path1");
    this.path2 = this.shadowDOM.getElementById("path2");
    this.animationsvg = this.shadowDOM.getElementById("animationsvg");
    this.animationsvgx = this.shadowDOM.getElementById("animationsvgx");
    this.audio = this.shadowDOM.querySelector("audio");
    this.durationContainer = this.shadowDOM.getElementById("duration");
    this.seekSlider = this.shadowDOM.getElementById("seek-slider");
    this.currentTimeContainer = this.shadowDOM.getElementById("current-time");
    this.playIconContainer = this.shadowDOM.getElementById("play");
    this.svg.pauseAnimations();
    if (this.audio.readyState > 0) {
      this.loadSong();
    } else {
      this.audio.addEventListener("loadedmetadata", this.loadSong);
    }
    this.audio.addEventListener("ended", this.onFinish);
    this.seekSlider.addEventListener("input", this.sliderInput);
    this.seekSlider.addEventListener("change", this.sliderChange);
    this.playIconContainer.addEventListener("click", this.playPause);
  }
  async audioPath() {
    this.audioData = await getAudioData(this.attributes.src.value);
    this.svgDraw();
  }
  mapComponentAttributes() {
    const attributesMapping = [
      "src",
      "wave-height",
      "wave-width",
      "color",
      "wave-options",
      "wave-color",
      "wave-progress-color",
      "wave-slider"
    ];
    attributesMapping.forEach((key) => {
      if (!this.attributes[key]) {
        this.attributes[key] = { value: null };
      }
    });
  }
  connectedCallback() {
    this.mapComponentAttributes();
    this.render();
    this.initComponent();
    this.audioPath();
  }
  render() {
    this.shadowDOM.innerHTML = `
            ${this.templateCss()}
            ${this.template()}
        `;
  }
  template() {
    let html = `
        <div part="player" class="player">
            <button id="play" part="play">
                <svg viewBox="0 0 34 34" width="34" height="34" part="button">
                    <path id="playPathButton" d="M8.5 8.7c0-1.7 1.2-2.4 2.6-1.5l14.4 8.3c1.4.8 1.4 2.2 0 3l-14.4 8.3c-1.4.8-2.6.2-2.6-1.5V8.7z"></path>
                    <!--<path fill="currentColor" d="M9.2 25c0 .5.4 1 .9 1h3.6c.5 0 .9-.4.9-1V9c0-.5-.4-.9-.9-.9h-3.6c-.4-.1-.9.3-.9.9v16zm11-17c-.5 0-1 .4-1 .9V25c0 .5.4 1 1 1h3.6c.5 0 1-.4 1-1V9c0-.5-.4-.9-1-.9 0-.1-3.6-.1-3.6-.1z"></path>-->
                </svg>
            </button>
        <div id="current-time" part="currenttime">0:00</div>
        <div id="slider" part="slider">
            <svg id="svg" part="svg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 ${this.attributes["wave-width"].value} ${this.attributes["wave-height"].value}" width="${this.attributes["wave-width"].value}" height="${this.attributes["wave-height"].value}">
        `;
    if (!this.animation) {
      html += `
            <defs>
                <clipPath id="left-to-right-x">
                <rect x="-1" y="-100" width="${parseInt(this.attributes["wave-width"].value) + 2}" height="${parseInt(this.attributes["wave-height"].value) + 200}" >
                    <animate id="animationsvgx" attributeName="x" values="-1;${parseInt(this.attributes["wave-width"].value) + 2}" dur="99999s" fill="freeze" />   
                </rect>
                </clipPath>
                <clipPath id="left-to-right">
                <rect x="-${parseInt(this.attributes["wave-width"].value) + 2}" y="-100" width="${parseInt(this.attributes["wave-width"].value) + 2}" height="${parseInt(this.attributes["wave-height"].value) + 200}" >
                    <animate id="animationsvg" attributeName="x" values="-${parseInt(this.attributes["wave-width"].value) + 2};-1" dur="99999s" fill="freeze" />   
                </rect>
                </clipPath>    
            </defs> 
            <path id="path1" part="path1"  stroke-width="2" d="" clip-path="url(#left-to-right-x)"></path>
            <path id="path2" part="path2"  stroke-width="2" d="" clip-path="url(#left-to-right)" style="display:none;"></path>`;
    } else {
      html += `
            <path id="path1" part="path1"  stroke-width="2" style="display:none;"></path>
            <path id="path2" part="path2"  stroke-width="2" style="display:block;">
                <animate id="animationsvg" attributeName="d" dur="99999s" calcMode="linear" values="" fill="freeze"></animate>
            </path>
            `;
    }
    html += `
        </svg>
                <input type="range" part="input" id="seek-slider" max="100" value="0" step="any">
            </div>
            <div id="duration" part="duration">0:00</div>
        </div>
        <audio src="${this.attributes.src.value}"></audio>
        `;
    return html;
  }
  templateCss() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
    return `
            <style>
            *, :after, :before { 
                box-sizing: border-box;
                margin: 0;
            }
            :host {
                display: flex;
               
            }
            .player {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            #play {
                background: transparent;
                border: none;
                cursor:pointer;
                padding: 0 0 0 10px;
                margin: 0px;
                
            }
            #play svg {
                fill: ${(_b = (_a = this.attributes["color"]) == null ? void 0 : _a.value) != null ? _b : "#858a8d"};
                position:relative;
                transition: transform 0.3s;
                top: -0.5px;
            }
            #play svg:hover {
                transform: scale(1.2);
            }
            #play svg path {
                stroke-linecap: round;
                stroke-linejoin: round;
                transition: 0.2s;
            }
            #svg {
                margin: 0 10px;
                overflow: visible;
                stroke-width: 1px;
                fill: none;
            }
            #path1 {
                stroke: ${(_d = (_c = this.attributes["wave-color"]) == null ? void 0 : _c.value) != null ? _d : "#dadcdd"}; 
                overflow: visible;
                stroke-linecap: round;
            }
            #path2 {
                stroke: ${(_f = (_e = this.attributes["wave-progress-color"]) == null ? void 0 : _e.value) != null ? _f : "#858a8d"};
                overflow: visible;
                stroke-linecap: round;
            }
            #slider  {
                position:relative;
            }
            #duration, #current-time {
                position: relative;
                top:-1.1px;
                color: ${(_h = (_g = this.attributes["color"]) == null ? void 0 : _g.value) != null ? _h : "#858a8d"};
                margin: 0px 10px;
                font-size: 16px;
                font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
                min-width:32px;
            }
            #seek-slider {
                position: absolute;
                width: 100%;
                left: 0;
            }
            input[type=range] {
                -webkit-appearance: none; 
                width: 100%; 
                background: transparent; 
                padding: 0px;
                margin: 0px;
                border: 0px;
                height: ${parseInt(this.attributes["wave-height"].value)}px;
            }  
            input[type=range]::-webkit-slider-thumb {
                -webkit-appearance: none;
            }
            input[type=range]:focus {
                outline: none; 
            }
            
            input[type=range]::-ms-track {
                width: 100%;
                cursor: pointer;
                /* Hides the slider so custom styles can be added */
                background: transparent; 
                border-color: transparent;
                color: transparent;
            }
            input[type=range]::-webkit-slider-thumb {
                -webkit-appearance: none;
                position:relative; 
                /*top: -1.5px;*/
                height: 12.5px;
                width: 12.5px;
                border-radius: 50%;
                background:  ${(_j = (_i = this.attributes["wave-slider"]) == null ? void 0 : _i.value) != null ? _j : "#4fc3f7"};
                cursor: pointer;
                box-shadow: none;
            }
            input[type="range"]::-webkit-slider-thumb {
                transition: transform 0.3s;
            }
            input[type="range"]:active::-webkit-slider-thumb {
                transform: scale(1.5);
            }
            input[type="range"]::-moz-range-thumb {
                height: 12.5px;
                width: 12.5px;
                border-radius: 50%;
                background:  ${(_l = (_k = this.attributes["wave-slider"]) == null ? void 0 : _k.value) != null ? _l : "#4fc3f7"};
                cursor: pointer;
                box-shadow: none;
                border: 0px;
            }

            input[type="range"]:active::-moz-range-thumb {
                transform: scale(1.5);
            }  
            </style>
        `;
  }
}
window.customElements.define("wave-audio-path-player", AudioPathPlayer);
function t(t2, e2, i2, s2) {
  return new (i2 || (i2 = Promise))(function(n2, r2) {
    function o2(t3) {
      try {
        h2(s2.next(t3));
      } catch (t4) {
        r2(t4);
      }
    }
    function a2(t3) {
      try {
        h2(s2.throw(t3));
      } catch (t4) {
        r2(t4);
      }
    }
    function h2(t3) {
      var e3;
      t3.done ? n2(t3.value) : (e3 = t3.value, e3 instanceof i2 ? e3 : new i2(function(t4) {
        t4(e3);
      })).then(o2, a2);
    }
    h2((s2 = s2.apply(t2, e2 || [])).next());
  });
}
"function" == typeof SuppressedError && SuppressedError;
class e {
  constructor() {
    this.listeners = {};
  }
  on(t2, e2, i2) {
    if (this.listeners[t2] || (this.listeners[t2] = /* @__PURE__ */ new Set()), this.listeners[t2].add(e2), null == i2 ? void 0 : i2.once) {
      const i3 = () => {
        this.un(t2, i3), this.un(t2, e2);
      };
      return this.on(t2, i3), i3;
    }
    return () => this.un(t2, e2);
  }
  un(t2, e2) {
    var i2;
    null === (i2 = this.listeners[t2]) || void 0 === i2 || i2.delete(e2);
  }
  once(t2, e2) {
    return this.on(t2, e2, { once: true });
  }
  unAll() {
    this.listeners = {};
  }
  emit(t2, ...e2) {
    this.listeners[t2] && this.listeners[t2].forEach((t3) => t3(...e2));
  }
}
const i = { decode: function(e2, i2) {
  return t(this, void 0, void 0, function* () {
    const t2 = new AudioContext({ sampleRate: i2 });
    return t2.decodeAudioData(e2).finally(() => t2.close());
  });
}, createBuffer: function(t2, e2) {
  return "number" == typeof t2[0] && (t2 = [t2]), function(t3) {
    const e3 = t3[0];
    if (e3.some((t4) => t4 > 1 || t4 < -1)) {
      const i2 = e3.length;
      let s2 = 0;
      for (let t4 = 0; t4 < i2; t4++) {
        const i3 = Math.abs(e3[t4]);
        i3 > s2 && (s2 = i3);
      }
      for (const e4 of t3)
        for (let t4 = 0; t4 < i2; t4++)
          e4[t4] /= s2;
    }
  }(t2), { duration: e2, length: t2[0].length, sampleRate: t2[0].length / e2, numberOfChannels: t2.length, getChannelData: (e3) => null == t2 ? void 0 : t2[e3], copyFromChannel: AudioBuffer.prototype.copyFromChannel, copyToChannel: AudioBuffer.prototype.copyToChannel };
} };
function s(t2, e2) {
  const i2 = e2.xmlns ? document.createElementNS(e2.xmlns, t2) : document.createElement(t2);
  for (const [t3, n2] of Object.entries(e2))
    if ("children" === t3)
      for (const [t4, n3] of Object.entries(e2))
        "string" == typeof n3 ? i2.appendChild(document.createTextNode(n3)) : i2.appendChild(s(t4, n3));
    else
      "style" === t3 ? Object.assign(i2.style, n2) : "textContent" === t3 ? i2.textContent = n2 : i2.setAttribute(t3, n2.toString());
  return i2;
}
function n(t2, e2, i2) {
  const n2 = s(t2, e2 || {});
  return null == i2 || i2.appendChild(n2), n2;
}
var r = Object.freeze({ __proto__: null, createElement: n, default: n });
const o = { fetchBlob: function(e2, i2, s2) {
  return t(this, void 0, void 0, function* () {
    const n2 = yield fetch(e2, s2);
    if (n2.status >= 400)
      throw new Error(`Failed to fetch ${e2}: ${n2.status} (${n2.statusText})`);
    return function(e3, i3) {
      t(this, void 0, void 0, function* () {
        if (!e3.body || !e3.headers)
          return;
        const s3 = e3.body.getReader(), n3 = Number(e3.headers.get("Content-Length")) || 0;
        let r2 = 0;
        const o2 = (e4) => t(this, void 0, void 0, function* () {
          r2 += (null == e4 ? void 0 : e4.length) || 0;
          const t2 = Math.round(r2 / n3 * 100);
          i3(t2);
        }), a2 = () => t(this, void 0, void 0, function* () {
          let t2;
          try {
            t2 = yield s3.read();
          } catch (t3) {
            return;
          }
          t2.done || (o2(t2.value), yield a2());
        });
        a2();
      });
    }(n2.clone(), i2), n2.blob();
  });
} };
class a extends e {
  constructor(t2) {
    super(), this.isExternalMedia = false, t2.media ? (this.media = t2.media, this.isExternalMedia = true) : this.media = document.createElement("audio"), t2.mediaControls && (this.media.controls = true), t2.autoplay && (this.media.autoplay = true), null != t2.playbackRate && this.onMediaEvent("canplay", () => {
      null != t2.playbackRate && (this.media.playbackRate = t2.playbackRate);
    }, { once: true });
  }
  onMediaEvent(t2, e2, i2) {
    return this.media.addEventListener(t2, e2, i2), () => this.media.removeEventListener(t2, e2, i2);
  }
  getSrc() {
    return this.media.currentSrc || this.media.src || "";
  }
  revokeSrc() {
    const t2 = this.getSrc();
    t2.startsWith("blob:") && URL.revokeObjectURL(t2);
  }
  canPlayType(t2) {
    return "" !== this.media.canPlayType(t2);
  }
  setSrc(t2, e2) {
    const i2 = this.getSrc();
    if (t2 && i2 === t2)
      return;
    this.revokeSrc();
    const s2 = e2 instanceof Blob && (this.canPlayType(e2.type) || !t2) ? URL.createObjectURL(e2) : t2;
    try {
      this.media.src = s2;
    } catch (e3) {
      this.media.src = t2;
    }
  }
  destroy() {
    this.media.pause(), this.isExternalMedia || (this.media.remove(), this.revokeSrc(), this.media.src = "", this.media.load());
  }
  setMediaElement(t2) {
    this.media = t2;
  }
  play() {
    return t(this, void 0, void 0, function* () {
      return this.media.play();
    });
  }
  pause() {
    this.media.pause();
  }
  isPlaying() {
    return !this.media.paused && !this.media.ended;
  }
  setTime(t2) {
    this.media.currentTime = t2;
  }
  getDuration() {
    return this.media.duration;
  }
  getCurrentTime() {
    return this.media.currentTime;
  }
  getVolume() {
    return this.media.volume;
  }
  setVolume(t2) {
    this.media.volume = t2;
  }
  getMuted() {
    return this.media.muted;
  }
  setMuted(t2) {
    this.media.muted = t2;
  }
  getPlaybackRate() {
    return this.media.playbackRate;
  }
  isSeeking() {
    return this.media.seeking;
  }
  setPlaybackRate(t2, e2) {
    null != e2 && (this.media.preservesPitch = e2), this.media.playbackRate = t2;
  }
  getMediaElement() {
    return this.media;
  }
  setSinkId(t2) {
    return this.media.setSinkId(t2);
  }
}
class h extends e {
  constructor(t2, e2) {
    super(), this.timeouts = [], this.isScrollable = false, this.audioData = null, this.resizeObserver = null, this.lastContainerWidth = 0, this.isDragging = false, this.subscriptions = [], this.subscriptions = [], this.options = t2;
    const i2 = this.parentFromOptionsContainer(t2.container);
    this.parent = i2;
    const [s2, n2] = this.initHtml();
    i2.appendChild(s2), this.container = s2, this.scrollContainer = n2.querySelector(".scroll"), this.wrapper = n2.querySelector(".wrapper"), this.canvasWrapper = n2.querySelector(".canvases"), this.progressWrapper = n2.querySelector(".progress"), this.cursor = n2.querySelector(".cursor"), e2 && n2.appendChild(e2), this.initEvents();
  }
  parentFromOptionsContainer(t2) {
    let e2;
    if ("string" == typeof t2 ? e2 = document.querySelector(t2) : t2 instanceof HTMLElement && (e2 = t2), !e2)
      throw new Error("Container not found");
    return e2;
  }
  initEvents() {
    const t2 = (t3) => {
      const e2 = this.wrapper.getBoundingClientRect(), i2 = t3.clientX - e2.left, s2 = t3.clientY - e2.top;
      return [i2 / e2.width, s2 / e2.height];
    };
    if (this.wrapper.addEventListener("click", (e2) => {
      const [i2, s2] = t2(e2);
      this.emit("click", i2, s2);
    }), this.wrapper.addEventListener("dblclick", (e2) => {
      const [i2, s2] = t2(e2);
      this.emit("dblclick", i2, s2);
    }), true !== this.options.dragToSeek && "object" != typeof this.options.dragToSeek || this.initDrag(), this.scrollContainer.addEventListener("scroll", () => {
      const { scrollLeft: t3, scrollWidth: e2, clientWidth: i2 } = this.scrollContainer, s2 = t3 / e2, n2 = (t3 + i2) / e2;
      this.emit("scroll", s2, n2, t3, t3 + i2);
    }), "function" == typeof ResizeObserver) {
      const t3 = this.createDelay(100);
      this.resizeObserver = new ResizeObserver(() => {
        t3().then(() => this.onContainerResize()).catch(() => {
        });
      }), this.resizeObserver.observe(this.scrollContainer);
    }
  }
  onContainerResize() {
    const t2 = this.parent.clientWidth;
    t2 === this.lastContainerWidth && "auto" !== this.options.height || (this.lastContainerWidth = t2, this.reRender());
  }
  initDrag() {
    this.subscriptions.push(function(t2, e2, i2, s2, n2 = 3, r2 = 0, o2 = 100) {
      if (!t2)
        return () => {
        };
      const a2 = matchMedia("(pointer: coarse)").matches;
      let h2 = () => {
      };
      const l2 = (l3) => {
        if (l3.button !== r2)
          return;
        l3.preventDefault(), l3.stopPropagation();
        let d2 = l3.clientX, c2 = l3.clientY, u2 = false;
        const p = Date.now(), m = (s3) => {
          if (s3.preventDefault(), s3.stopPropagation(), a2 && Date.now() - p < o2)
            return;
          const r3 = s3.clientX, h3 = s3.clientY, l4 = r3 - d2, m2 = h3 - c2;
          if (u2 || Math.abs(l4) > n2 || Math.abs(m2) > n2) {
            const s4 = t2.getBoundingClientRect(), { left: n3, top: o3 } = s4;
            u2 || (null == i2 || i2(d2 - n3, c2 - o3), u2 = true), e2(l4, m2, r3 - n3, h3 - o3), d2 = r3, c2 = h3;
          }
        }, g = (e3) => {
          if (u2) {
            const i3 = e3.clientX, n3 = e3.clientY, r3 = t2.getBoundingClientRect(), { left: o3, top: a3 } = r3;
            null == s2 || s2(i3 - o3, n3 - a3);
          }
          h2();
        }, f = (t3) => {
          t3.relatedTarget && t3.relatedTarget !== document.documentElement || g(t3);
        }, v = (t3) => {
          u2 && (t3.stopPropagation(), t3.preventDefault());
        }, b = (t3) => {
          u2 && t3.preventDefault();
        };
        document.addEventListener("pointermove", m), document.addEventListener("pointerup", g), document.addEventListener("pointerout", f), document.addEventListener("pointercancel", f), document.addEventListener("touchmove", b, { passive: false }), document.addEventListener("click", v, { capture: true }), h2 = () => {
          document.removeEventListener("pointermove", m), document.removeEventListener("pointerup", g), document.removeEventListener("pointerout", f), document.removeEventListener("pointercancel", f), document.removeEventListener("touchmove", b), setTimeout(() => {
            document.removeEventListener("click", v, { capture: true });
          }, 10);
        };
      };
      return t2.addEventListener("pointerdown", l2), () => {
        h2(), t2.removeEventListener("pointerdown", l2);
      };
    }(this.wrapper, (t2, e2, i2) => {
      this.emit("drag", Math.max(0, Math.min(1, i2 / this.wrapper.getBoundingClientRect().width)));
    }, (t2) => {
      this.isDragging = true, this.emit("dragstart", Math.max(0, Math.min(1, t2 / this.wrapper.getBoundingClientRect().width)));
    }, (t2) => {
      this.isDragging = false, this.emit("dragend", Math.max(0, Math.min(1, t2 / this.wrapper.getBoundingClientRect().width)));
    }));
  }
  getHeight(t2, e2) {
    var i2;
    const s2 = (null === (i2 = this.audioData) || void 0 === i2 ? void 0 : i2.numberOfChannels) || 1;
    if (null == t2)
      return 128;
    if (!isNaN(Number(t2)))
      return Number(t2);
    if ("auto" === t2) {
      const t3 = this.parent.clientHeight || 128;
      return (null == e2 ? void 0 : e2.every((t4) => !t4.overlay)) ? t3 / s2 : t3;
    }
    return 128;
  }
  initHtml() {
    const t2 = document.createElement("div"), e2 = t2.attachShadow({ mode: "open" });
    return e2.innerHTML = `
      <style>
        :host {
          user-select: none;
          min-width: 1px;
        }
        :host audio {
          display: block;
          width: 100%;
        }
        :host .scroll {
          overflow-x: auto;
          overflow-y: hidden;
          width: 100%;
          position: relative;
        }
        :host .noScrollbar {
          scrollbar-color: transparent;
          scrollbar-width: none;
        }
        :host .noScrollbar::-webkit-scrollbar {
          display: none;
          -webkit-appearance: none;
        }
        :host .wrapper {
          position: relative;
          overflow: visible;
          z-index: 2;
        }
        :host .canvases {
          min-height: ${this.getHeight(this.options.height, this.options.splitChannels)}px;
        }
        :host .canvases > div {
          position: relative;
        }
        :host canvas {
          display: block;
          position: absolute;
          top: 0;
          image-rendering: pixelated;
        }
        :host .progress {
          pointer-events: none;
          position: absolute;
          z-index: 2;
          top: 0;
          left: 0;
          width: 0;
          height: 100%;
          overflow: hidden;
        }
        :host .progress > div {
          position: relative;
        }
        :host .cursor {
          pointer-events: none;
          position: absolute;
          z-index: 5;
          top: 0;
          left: 0;
          height: 100%;
          border-radius: 2px;
        }
      </style>

      <div class="scroll" part="scroll">
        <div class="wrapper" part="wrapper">
          <div class="canvases" part="canvases"></div>
          <div class="progress" part="progress"></div>
          <div class="cursor" part="cursor"></div>
        </div>
      </div>
    `, [t2, e2];
  }
  setOptions(t2) {
    if (this.options.container !== t2.container) {
      const e2 = this.parentFromOptionsContainer(t2.container);
      e2.appendChild(this.container), this.parent = e2;
    }
    true !== t2.dragToSeek && "object" != typeof this.options.dragToSeek || this.initDrag(), this.options = t2, this.reRender();
  }
  getWrapper() {
    return this.wrapper;
  }
  getWidth() {
    return this.scrollContainer.clientWidth;
  }
  getScroll() {
    return this.scrollContainer.scrollLeft;
  }
  setScroll(t2) {
    this.scrollContainer.scrollLeft = t2;
  }
  setScrollPercentage(t2) {
    const { scrollWidth: e2 } = this.scrollContainer, i2 = e2 * t2;
    this.setScroll(i2);
  }
  destroy() {
    var t2, e2;
    this.subscriptions.forEach((t3) => t3()), this.container.remove(), null === (t2 = this.resizeObserver) || void 0 === t2 || t2.disconnect(), null === (e2 = this.unsubscribeOnScroll) || void 0 === e2 || e2.call(this);
  }
  createDelay(t2 = 10) {
    let e2, i2;
    const s2 = () => {
      e2 && clearTimeout(e2), i2 && i2();
    };
    return this.timeouts.push(s2), () => new Promise((n2, r2) => {
      s2(), i2 = r2, e2 = setTimeout(() => {
        e2 = void 0, i2 = void 0, n2();
      }, t2);
    });
  }
  convertColorValues(t2) {
    if (!Array.isArray(t2))
      return t2 || "";
    if (t2.length < 2)
      return t2[0] || "";
    const e2 = document.createElement("canvas"), i2 = e2.getContext("2d"), s2 = e2.height * (window.devicePixelRatio || 1), n2 = i2.createLinearGradient(0, 0, 0, s2), r2 = 1 / (t2.length - 1);
    return t2.forEach((t3, e3) => {
      const i3 = e3 * r2;
      n2.addColorStop(i3, t3);
    }), n2;
  }
  getPixelRatio() {
    return Math.max(1, window.devicePixelRatio || 1);
  }
  renderBarWaveform(t2, e2, i2, s2) {
    const n2 = t2[0], r2 = t2[1] || t2[0], o2 = n2.length, { width: a2, height: h2 } = i2.canvas, l2 = h2 / 2, d2 = this.getPixelRatio(), c2 = e2.barWidth ? e2.barWidth * d2 : 1, u2 = e2.barGap ? e2.barGap * d2 : e2.barWidth ? c2 / 2 : 0, p = e2.barRadius || 0, m = a2 / (c2 + u2) / o2, g = p && "roundRect" in i2 ? "roundRect" : "rect";
    i2.beginPath();
    let f = 0, v = 0, b = 0;
    for (let t3 = 0; t3 <= o2; t3++) {
      const o3 = Math.round(t3 * m);
      if (o3 > f) {
        const t4 = Math.round(v * l2 * s2), n3 = t4 + Math.round(b * l2 * s2) || 1;
        let r3 = l2 - t4;
        "top" === e2.barAlign ? r3 = 0 : "bottom" === e2.barAlign && (r3 = h2 - n3), i2[g](f * (c2 + u2), r3, c2, n3, p), f = o3, v = 0, b = 0;
      }
      const a3 = Math.abs(n2[t3] || 0), d3 = Math.abs(r2[t3] || 0);
      a3 > v && (v = a3), d3 > b && (b = d3);
    }
    i2.fill(), i2.closePath();
  }
  renderLineWaveform(t2, e2, i2, s2) {
    const n2 = (e3) => {
      const n3 = t2[e3] || t2[0], r2 = n3.length, { height: o2 } = i2.canvas, a2 = o2 / 2, h2 = i2.canvas.width / r2;
      i2.moveTo(0, a2);
      let l2 = 0, d2 = 0;
      for (let t3 = 0; t3 <= r2; t3++) {
        const r3 = Math.round(t3 * h2);
        if (r3 > l2) {
          const t4 = a2 + (Math.round(d2 * a2 * s2) || 1) * (0 === e3 ? -1 : 1);
          i2.lineTo(l2, t4), l2 = r3, d2 = 0;
        }
        const o3 = Math.abs(n3[t3] || 0);
        o3 > d2 && (d2 = o3);
      }
      i2.lineTo(l2, a2);
    };
    i2.beginPath(), n2(0), n2(1), i2.fill(), i2.closePath();
  }
  renderWaveform(t2, e2, i2) {
    if (i2.fillStyle = this.convertColorValues(e2.waveColor), e2.renderFunction)
      return void e2.renderFunction(t2, i2);
    let s2 = e2.barHeight || 1;
    if (e2.normalize) {
      const e3 = Array.from(t2[0]).reduce((t3, e4) => Math.max(t3, Math.abs(e4)), 0);
      s2 = e3 ? 1 / e3 : 1;
    }
    e2.barWidth || e2.barGap || e2.barAlign ? this.renderBarWaveform(t2, e2, i2, s2) : this.renderLineWaveform(t2, e2, i2, s2);
  }
  renderSingleCanvas(t2, e2, i2, s2, n2, r2, o2) {
    const a2 = this.getPixelRatio(), h2 = document.createElement("canvas");
    h2.width = Math.round(i2 * a2), h2.height = Math.round(s2 * a2), h2.style.width = `${i2}px`, h2.style.height = `${s2}px`, h2.style.left = `${Math.round(n2)}px`, r2.appendChild(h2);
    const l2 = h2.getContext("2d");
    if (this.renderWaveform(t2, e2, l2), h2.width > 0 && h2.height > 0) {
      const t3 = h2.cloneNode(), i3 = t3.getContext("2d");
      i3.drawImage(h2, 0, 0), i3.globalCompositeOperation = "source-in", i3.fillStyle = this.convertColorValues(e2.progressColor), i3.fillRect(0, 0, h2.width, h2.height), o2.appendChild(t3);
    }
  }
  renderMultiCanvas(t2, e2, i2, s2, n2, r2) {
    const o2 = this.getPixelRatio(), { clientWidth: a2 } = this.scrollContainer;
    if (a2 * o2 >= i2)
      return void this.renderSingleCanvas(t2, e2, a2, s2, 0, n2, r2);
    const l2 = i2 / o2;
    let d2 = Math.min(h.MAX_CANVAS_WIDTH, a2, l2), c2 = {};
    if (e2.barWidth || e2.barGap) {
      const t3 = e2.barWidth || 0.5, i3 = t3 + (e2.barGap || t3 / 2);
      d2 % i3 != 0 && (d2 = Math.floor(d2 / i3) * i3);
    }
    const u2 = (i3) => {
      if (i3 < 0 || i3 >= p)
        return;
      if (c2[i3])
        return;
      c2[i3] = true;
      const o3 = i3 * d2, a3 = Math.min(l2 - o3, d2);
      if (a3 <= 0)
        return;
      const h2 = t2.map((t3) => {
        const e3 = Math.floor(o3 / l2 * t3.length), i4 = Math.floor((o3 + a3) / l2 * t3.length);
        return t3.slice(e3, i4);
      });
      this.renderSingleCanvas(h2, e2, a3, s2, o3, n2, r2);
    }, p = Math.ceil(l2 / d2), m = this.scrollContainer.scrollLeft / l2, g = Math.floor(m * p);
    u2(g - 1), u2(g), u2(g + 1), p > 1 && (this.unsubscribeOnScroll = this.on("scroll", () => {
      const { scrollLeft: t3 } = this.scrollContainer, e3 = Math.floor(t3 / l2 * p);
      Object.keys(c2).length > h.MAX_NODES && (n2.innerHTML = "", r2.innerHTML = "", c2 = {}), u2(e3 - 1), u2(e3), u2(e3 + 1);
    }));
  }
  renderChannel(t2, e2, i2, s2) {
    var { overlay: n2 } = e2, r2 = function(t3, e3) {
      var i3 = {};
      for (var s3 in t3)
        Object.prototype.hasOwnProperty.call(t3, s3) && e3.indexOf(s3) < 0 && (i3[s3] = t3[s3]);
      if (null != t3 && "function" == typeof Object.getOwnPropertySymbols) {
        var n3 = 0;
        for (s3 = Object.getOwnPropertySymbols(t3); n3 < s3.length; n3++)
          e3.indexOf(s3[n3]) < 0 && Object.prototype.propertyIsEnumerable.call(t3, s3[n3]) && (i3[s3[n3]] = t3[s3[n3]]);
      }
      return i3;
    }(e2, ["overlay"]);
    const o2 = document.createElement("div"), a2 = this.getHeight(r2.height, r2.splitChannels);
    o2.style.height = `${a2}px`, n2 && s2 > 0 && (o2.style.marginTop = `-${a2}px`), this.canvasWrapper.style.minHeight = `${a2}px`, this.canvasWrapper.appendChild(o2);
    const h2 = o2.cloneNode();
    this.progressWrapper.appendChild(h2), this.renderMultiCanvas(t2, r2, i2, a2, o2, h2);
  }
  render(e2) {
    return t(this, void 0, void 0, function* () {
      var t2;
      this.timeouts.forEach((t3) => t3()), this.timeouts = [], this.canvasWrapper.innerHTML = "", this.progressWrapper.innerHTML = "", null != this.options.width && (this.scrollContainer.style.width = "number" == typeof this.options.width ? `${this.options.width}px` : this.options.width);
      const i2 = this.getPixelRatio(), s2 = this.scrollContainer.clientWidth, n2 = Math.ceil(e2.duration * (this.options.minPxPerSec || 0));
      this.isScrollable = n2 > s2;
      const r2 = this.options.fillParent && !this.isScrollable, o2 = (r2 ? s2 : n2) * i2;
      if (this.wrapper.style.width = r2 ? "100%" : `${n2}px`, this.scrollContainer.style.overflowX = this.isScrollable ? "auto" : "hidden", this.scrollContainer.classList.toggle("noScrollbar", !!this.options.hideScrollbar), this.cursor.style.backgroundColor = `${this.options.cursorColor || this.options.progressColor}`, this.cursor.style.width = `${this.options.cursorWidth}px`, this.audioData = e2, this.emit("render"), this.options.splitChannels)
        for (let i3 = 0; i3 < e2.numberOfChannels; i3++) {
          const s3 = Object.assign(Object.assign({}, this.options), null === (t2 = this.options.splitChannels) || void 0 === t2 ? void 0 : t2[i3]);
          this.renderChannel([e2.getChannelData(i3)], s3, o2, i3);
        }
      else {
        const t3 = [e2.getChannelData(0)];
        e2.numberOfChannels > 1 && t3.push(e2.getChannelData(1)), this.renderChannel(t3, this.options, o2, 0);
      }
      Promise.resolve().then(() => this.emit("rendered"));
    });
  }
  reRender() {
    var t2;
    if (null === (t2 = this.unsubscribeOnScroll) || void 0 === t2 || t2.call(this), delete this.unsubscribeOnScroll, !this.audioData)
      return;
    const { scrollWidth: e2 } = this.scrollContainer, { right: i2 } = this.progressWrapper.getBoundingClientRect();
    if (this.render(this.audioData), this.isScrollable && e2 !== this.scrollContainer.scrollWidth) {
      const { right: t3 } = this.progressWrapper.getBoundingClientRect();
      let e3 = t3 - i2;
      e3 *= 2, e3 = e3 < 0 ? Math.floor(e3) : Math.ceil(e3), e3 /= 2, this.scrollContainer.scrollLeft += e3;
    }
  }
  zoom(t2) {
    this.options.minPxPerSec = t2, this.reRender();
  }
  scrollIntoView(t2, e2 = false) {
    const { scrollLeft: i2, scrollWidth: s2, clientWidth: n2 } = this.scrollContainer, r2 = t2 * s2, o2 = i2, a2 = i2 + n2, h2 = n2 / 2;
    if (this.isDragging) {
      const t3 = 30;
      r2 + t3 > a2 ? this.scrollContainer.scrollLeft += t3 : r2 - t3 < o2 && (this.scrollContainer.scrollLeft -= t3);
    } else {
      (r2 < o2 || r2 > a2) && (this.scrollContainer.scrollLeft = r2 - (this.options.autoCenter ? h2 : 0));
      const t3 = r2 - i2 - h2;
      e2 && this.options.autoCenter && t3 > 0 && (this.scrollContainer.scrollLeft += Math.min(t3, 10));
    }
    {
      const t3 = this.scrollContainer.scrollLeft, e3 = t3 / s2, i3 = (t3 + n2) / s2;
      this.emit("scroll", e3, i3, t3, t3 + n2);
    }
  }
  renderProgress(t2, e2) {
    if (isNaN(t2))
      return;
    const i2 = 100 * t2;
    this.canvasWrapper.style.clipPath = `polygon(${i2}% 0, 100% 0, 100% 100%, ${i2}% 100%)`, this.progressWrapper.style.width = `${i2}%`, this.cursor.style.left = `${i2}%`, this.cursor.style.transform = `translateX(-${100 === Math.round(i2) ? this.options.cursorWidth : 0}px)`, this.isScrollable && this.options.autoScroll && this.scrollIntoView(t2, e2);
  }
  exportImage(e2, i2, s2) {
    return t(this, void 0, void 0, function* () {
      const t2 = this.canvasWrapper.querySelectorAll("canvas");
      if (!t2.length)
        throw new Error("No waveform data");
      if ("dataURL" === s2) {
        const s3 = Array.from(t2).map((t3) => t3.toDataURL(e2, i2));
        return Promise.resolve(s3);
      }
      return Promise.all(Array.from(t2).map((t3) => new Promise((s3, n2) => {
        t3.toBlob((t4) => {
          t4 ? s3(t4) : n2(new Error("Could not export image"));
        }, e2, i2);
      })));
    });
  }
}
h.MAX_CANVAS_WIDTH = 8e3, h.MAX_NODES = 10;
class l extends e {
  constructor() {
    super(...arguments), this.unsubscribe = () => {
    };
  }
  start() {
    this.unsubscribe = this.on("tick", () => {
      requestAnimationFrame(() => {
        this.emit("tick");
      });
    }), this.emit("tick");
  }
  stop() {
    this.unsubscribe();
  }
  destroy() {
    this.unsubscribe();
  }
}
class d extends e {
  constructor(t2 = new AudioContext()) {
    super(), this.bufferNode = null, this.playStartTime = 0, this.playedDuration = 0, this._muted = false, this._playbackRate = 1, this._duration = void 0, this.buffer = null, this.currentSrc = "", this.paused = true, this.crossOrigin = null, this.seeking = false, this.autoplay = false, this.addEventListener = this.on, this.removeEventListener = this.un, this.audioContext = t2, this.gainNode = this.audioContext.createGain(), this.gainNode.connect(this.audioContext.destination);
  }
  load() {
    return t(this, void 0, void 0, function* () {
    });
  }
  get src() {
    return this.currentSrc;
  }
  set src(t2) {
    if (this.currentSrc = t2, this._duration = void 0, !t2)
      return this.buffer = null, void this.emit("emptied");
    fetch(t2).then((e2) => {
      if (e2.status >= 400)
        throw new Error(`Failed to fetch ${t2}: ${e2.status} (${e2.statusText})`);
      return e2.arrayBuffer();
    }).then((e2) => this.currentSrc !== t2 ? null : this.audioContext.decodeAudioData(e2)).then((e2) => {
      this.currentSrc === t2 && (this.buffer = e2, this.emit("loadedmetadata"), this.emit("canplay"), this.autoplay && this.play());
    });
  }
  _play() {
    var t2;
    if (!this.paused)
      return;
    this.paused = false, null === (t2 = this.bufferNode) || void 0 === t2 || t2.disconnect(), this.bufferNode = this.audioContext.createBufferSource(), this.buffer && (this.bufferNode.buffer = this.buffer), this.bufferNode.playbackRate.value = this._playbackRate, this.bufferNode.connect(this.gainNode);
    let e2 = this.playedDuration * this._playbackRate;
    e2 >= this.duration && (e2 = 0, this.playedDuration = 0), this.bufferNode.start(this.audioContext.currentTime, e2), this.playStartTime = this.audioContext.currentTime, this.bufferNode.onended = () => {
      this.currentTime >= this.duration && (this.pause(), this.emit("ended"));
    };
  }
  _pause() {
    var t2;
    this.paused = true, null === (t2 = this.bufferNode) || void 0 === t2 || t2.stop(), this.playedDuration += this.audioContext.currentTime - this.playStartTime;
  }
  play() {
    return t(this, void 0, void 0, function* () {
      this.paused && (this._play(), this.emit("play"));
    });
  }
  pause() {
    this.paused || (this._pause(), this.emit("pause"));
  }
  stopAt(t2) {
    var e2, i2;
    const s2 = t2 - this.currentTime;
    null === (e2 = this.bufferNode) || void 0 === e2 || e2.stop(this.audioContext.currentTime + s2), null === (i2 = this.bufferNode) || void 0 === i2 || i2.addEventListener("ended", () => {
      this.bufferNode = null, this.pause();
    }, { once: true });
  }
  setSinkId(e2) {
    return t(this, void 0, void 0, function* () {
      return this.audioContext.setSinkId(e2);
    });
  }
  get playbackRate() {
    return this._playbackRate;
  }
  set playbackRate(t2) {
    this._playbackRate = t2, this.bufferNode && (this.bufferNode.playbackRate.value = t2);
  }
  get currentTime() {
    return (this.paused ? this.playedDuration : this.playedDuration + (this.audioContext.currentTime - this.playStartTime)) * this._playbackRate;
  }
  set currentTime(t2) {
    const e2 = !this.paused;
    e2 && this._pause(), this.playedDuration = t2 / this._playbackRate, e2 && this._play(), this.emit("seeking"), this.emit("timeupdate");
  }
  get duration() {
    var t2, e2;
    return null !== (t2 = this._duration) && void 0 !== t2 ? t2 : (null === (e2 = this.buffer) || void 0 === e2 ? void 0 : e2.duration) || 0;
  }
  set duration(t2) {
    this._duration = t2;
  }
  get volume() {
    return this.gainNode.gain.value;
  }
  set volume(t2) {
    this.gainNode.gain.value = t2, this.emit("volumechange");
  }
  get muted() {
    return this._muted;
  }
  set muted(t2) {
    this._muted !== t2 && (this._muted = t2, this._muted ? this.gainNode.disconnect() : this.gainNode.connect(this.audioContext.destination));
  }
  canPlayType(t2) {
    return /^(audio|video)\//.test(t2);
  }
  getGainNode() {
    return this.gainNode;
  }
  getChannelData() {
    const t2 = [];
    if (!this.buffer)
      return t2;
    const e2 = this.buffer.numberOfChannels;
    for (let i2 = 0; i2 < e2; i2++)
      t2.push(this.buffer.getChannelData(i2));
    return t2;
  }
}
const c = { waveColor: "#999", progressColor: "#555", cursorWidth: 1, minPxPerSec: 0, fillParent: true, interact: true, dragToSeek: false, autoScroll: true, autoCenter: true, sampleRate: 8e3 };
class u extends a {
  static create(t2) {
    return new u(t2);
  }
  constructor(t2) {
    const e2 = t2.media || ("WebAudio" === t2.backend ? new d() : void 0);
    super({ media: e2, mediaControls: t2.mediaControls, autoplay: t2.autoplay, playbackRate: t2.audioRate }), this.plugins = [], this.decodedData = null, this.subscriptions = [], this.mediaSubscriptions = [], this.abortController = null, this.options = Object.assign({}, c, t2), this.timer = new l();
    const i2 = e2 ? void 0 : this.getMediaElement();
    this.renderer = new h(this.options, i2), this.initPlayerEvents(), this.initRendererEvents(), this.initTimerEvents(), this.initPlugins();
    const s2 = this.options.url || this.getSrc() || "";
    Promise.resolve().then(() => {
      this.emit("init");
      const { peaks: t3, duration: e3 } = this.options;
      (s2 || t3 && e3) && this.load(s2, t3, e3).catch(() => null);
    });
  }
  updateProgress(t2 = this.getCurrentTime()) {
    return this.renderer.renderProgress(t2 / this.getDuration(), this.isPlaying()), t2;
  }
  initTimerEvents() {
    this.subscriptions.push(this.timer.on("tick", () => {
      if (!this.isSeeking()) {
        const t2 = this.updateProgress();
        this.emit("timeupdate", t2), this.emit("audioprocess", t2);
      }
    }));
  }
  initPlayerEvents() {
    this.isPlaying() && (this.emit("play"), this.timer.start()), this.mediaSubscriptions.push(this.onMediaEvent("timeupdate", () => {
      const t2 = this.updateProgress();
      this.emit("timeupdate", t2);
    }), this.onMediaEvent("play", () => {
      this.emit("play"), this.timer.start();
    }), this.onMediaEvent("pause", () => {
      this.emit("pause"), this.timer.stop();
    }), this.onMediaEvent("emptied", () => {
      this.timer.stop();
    }), this.onMediaEvent("ended", () => {
      this.emit("finish");
    }), this.onMediaEvent("seeking", () => {
      this.emit("seeking", this.getCurrentTime());
    }), this.onMediaEvent("error", (t2) => {
      this.emit("error", t2.error);
    }));
  }
  initRendererEvents() {
    this.subscriptions.push(this.renderer.on("click", (t2, e2) => {
      this.options.interact && (this.seekTo(t2), this.emit("interaction", t2 * this.getDuration()), this.emit("click", t2, e2));
    }), this.renderer.on("dblclick", (t2, e2) => {
      this.emit("dblclick", t2, e2);
    }), this.renderer.on("scroll", (t2, e2, i2, s2) => {
      const n2 = this.getDuration();
      this.emit("scroll", t2 * n2, e2 * n2, i2, s2);
    }), this.renderer.on("render", () => {
      this.emit("redraw");
    }), this.renderer.on("rendered", () => {
      this.emit("redrawcomplete");
    }), this.renderer.on("dragstart", (t2) => {
      this.emit("dragstart", t2);
    }), this.renderer.on("dragend", (t2) => {
      this.emit("dragend", t2);
    }));
    {
      let t2;
      this.subscriptions.push(this.renderer.on("drag", (e2) => {
        if (!this.options.interact)
          return;
        let i2;
        this.renderer.renderProgress(e2), clearTimeout(t2), this.isPlaying() ? i2 = 0 : true === this.options.dragToSeek ? i2 = 200 : "object" == typeof this.options.dragToSeek && void 0 !== this.options.dragToSeek && (i2 = this.options.dragToSeek.debounceTime), t2 = setTimeout(() => {
          this.seekTo(e2);
        }, i2), this.emit("interaction", e2 * this.getDuration()), this.emit("drag", e2);
      }));
    }
  }
  initPlugins() {
    var t2;
    (null === (t2 = this.options.plugins) || void 0 === t2 ? void 0 : t2.length) && this.options.plugins.forEach((t3) => {
      this.registerPlugin(t3);
    });
  }
  unsubscribePlayerEvents() {
    this.mediaSubscriptions.forEach((t2) => t2()), this.mediaSubscriptions = [];
  }
  setOptions(t2) {
    this.options = Object.assign({}, this.options, t2), this.renderer.setOptions(this.options), t2.audioRate && this.setPlaybackRate(t2.audioRate), null != t2.mediaControls && (this.getMediaElement().controls = t2.mediaControls);
  }
  registerPlugin(t2) {
    return t2._init(this), this.plugins.push(t2), this.subscriptions.push(t2.once("destroy", () => {
      this.plugins = this.plugins.filter((e2) => e2 !== t2);
    })), t2;
  }
  getWrapper() {
    return this.renderer.getWrapper();
  }
  getWidth() {
    return this.renderer.getWidth();
  }
  getScroll() {
    return this.renderer.getScroll();
  }
  setScroll(t2) {
    return this.renderer.setScroll(t2);
  }
  setScrollTime(t2) {
    const e2 = t2 / this.getDuration();
    this.renderer.setScrollPercentage(e2);
  }
  getActivePlugins() {
    return this.plugins;
  }
  loadAudio(e2, s2, n2, r2) {
    return t(this, void 0, void 0, function* () {
      var t2;
      if (this.emit("load", e2), !this.options.media && this.isPlaying() && this.pause(), this.decodedData = null, !s2 && !n2) {
        const i2 = this.options.fetchParams || {};
        window.AbortController && !i2.signal && (this.abortController = new AbortController(), i2.signal = null === (t2 = this.abortController) || void 0 === t2 ? void 0 : t2.signal);
        const n3 = (t3) => this.emit("loading", t3);
        s2 = yield o.fetchBlob(e2, n3, i2);
      }
      this.setSrc(e2, s2);
      const a2 = yield new Promise((t3) => {
        const e3 = r2 || this.getDuration();
        e3 ? t3(e3) : this.mediaSubscriptions.push(this.onMediaEvent("loadedmetadata", () => t3(this.getDuration()), { once: true }));
      });
      if (!e2 && !s2) {
        const t3 = this.getMediaElement();
        t3 instanceof d && (t3.duration = a2);
      }
      if (n2)
        this.decodedData = i.createBuffer(n2, a2 || 0);
      else if (s2) {
        const t3 = yield s2.arrayBuffer();
        this.decodedData = yield i.decode(t3, this.options.sampleRate);
      }
      this.decodedData && (this.emit("decode", this.getDuration()), this.renderer.render(this.decodedData)), this.emit("ready", this.getDuration());
    });
  }
  load(e2, i2, s2) {
    return t(this, void 0, void 0, function* () {
      try {
        return yield this.loadAudio(e2, void 0, i2, s2);
      } catch (t2) {
        throw this.emit("error", t2), t2;
      }
    });
  }
  loadBlob(e2, i2, s2) {
    return t(this, void 0, void 0, function* () {
      try {
        return yield this.loadAudio("", e2, i2, s2);
      } catch (t2) {
        throw this.emit("error", t2), t2;
      }
    });
  }
  zoom(t2) {
    if (!this.decodedData)
      throw new Error("No audio loaded");
    this.renderer.zoom(t2), this.emit("zoom", t2);
  }
  getDecodedData() {
    return this.decodedData;
  }
  exportPeaks({ channels: t2 = 2, maxLength: e2 = 8e3, precision: i2 = 1e4 } = {}) {
    if (!this.decodedData)
      throw new Error("The audio has not been decoded yet");
    const s2 = Math.min(t2, this.decodedData.numberOfChannels), n2 = [];
    for (let t3 = 0; t3 < s2; t3++) {
      const s3 = this.decodedData.getChannelData(t3), r2 = [], o2 = s3.length / e2;
      for (let t4 = 0; t4 < e2; t4++) {
        const e3 = s3.slice(Math.floor(t4 * o2), Math.ceil((t4 + 1) * o2));
        let n3 = 0;
        for (let t5 = 0; t5 < e3.length; t5++) {
          const i3 = e3[t5];
          Math.abs(i3) > Math.abs(n3) && (n3 = i3);
        }
        r2.push(Math.round(n3 * i2) / i2);
      }
      n2.push(r2);
    }
    return n2;
  }
  getDuration() {
    let t2 = super.getDuration() || 0;
    return 0 !== t2 && t2 !== 1 / 0 || !this.decodedData || (t2 = this.decodedData.duration), t2;
  }
  toggleInteraction(t2) {
    this.options.interact = t2;
  }
  setTime(t2) {
    super.setTime(t2), this.updateProgress(t2), this.emit("timeupdate", t2);
  }
  seekTo(t2) {
    const e2 = this.getDuration() * t2;
    this.setTime(e2);
  }
  playPause() {
    return t(this, void 0, void 0, function* () {
      return this.isPlaying() ? this.pause() : this.play();
    });
  }
  stop() {
    this.pause(), this.setTime(0);
  }
  skip(t2) {
    this.setTime(this.getCurrentTime() + t2);
  }
  empty() {
    this.load("", [[0]], 1e-3);
  }
  setMediaElement(t2) {
    this.unsubscribePlayerEvents(), super.setMediaElement(t2), this.initPlayerEvents();
  }
  exportImage() {
    return t(this, arguments, void 0, function* (t2 = "image/png", e2 = 1, i2 = "dataURL") {
      return this.renderer.exportImage(t2, e2, i2);
    });
  }
  destroy() {
    var t2;
    this.emit("destroy"), null === (t2 = this.abortController) || void 0 === t2 || t2.abort(), this.plugins.forEach((t3) => t3.destroy()), this.subscriptions.forEach((t3) => t3()), this.unsubscribePlayerEvents(), this.timer.destroy(), this.renderer.destroy(), super.destroy();
  }
}
u.BasePlugin = class extends e {
  constructor(t2) {
    super(), this.subscriptions = [], this.options = t2;
  }
  onInit() {
  }
  _init(t2) {
    this.wavesurfer = t2, this.onInit();
  }
  destroy() {
    this.emit("destroy"), this.subscriptions.forEach((t2) => t2());
  }
}, u.dom = r;
const PauseSvg = () => {
  return /* @__PURE__ */ jsxs("svg", { width: "65", height: "70", viewBox: "0 0 79 70", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx("rect", { width: "79", height: "70", rx: "13", fill: "#177FFA" }),
    /* @__PURE__ */ jsx("path", { d: "M28.1 19C28.9222 19 29.7107 19.1814 30.292 19.5044C30.8734 19.8274 31.2 20.2655 31.2 20.7222V48.2778C31.2 48.7345 30.8734 49.1726 30.292 49.4956C29.7107 49.8186 28.9222 50 28.1 50C27.2778 50 26.4893 49.8186 25.908 49.4956C25.3266 49.1726 25 48.7345 25 48.2778V20.7222C25 20.2655 25.3266 19.8274 25.908 19.5044C26.4893 19.1814 27.2778 19 28.1 19ZM52.9 19C53.7222 19 54.5107 19.1814 55.092 19.5044C55.6734 19.8274 56 20.2655 56 20.7222V48.2778C56 48.7345 55.6734 49.1726 55.092 49.4956C54.5107 49.8186 53.7222 50 52.9 50C52.0778 50 51.2893 49.8186 50.708 49.4956C50.1266 49.1726 49.8 48.7345 49.8 48.2778V20.7222C49.8 20.2655 50.1266 19.8274 50.708 19.5044C51.2893 19.1814 52.0778 19 52.9 19Z", fill: "white" })
  ] });
};
const formWaveSurferOptions = (ref) => ({
  container: ref,
  waveColor: "#177ffa",
  progressColor: "#177ffa",
  cursorColor: "#177ffa",
  barWidth: 3,
  barRadius: 3,
  responsive: true,
  height: 40,
  normalize: true,
  partialRender: true
});
function WaveAudioInput({ file, setFile }) {
  const waveformRef = react.exports.useRef(null);
  const wavesurfer = react.exports.useRef(null);
  const [playing, setPlay] = react.exports.useState(false);
  const [volume, setVolume] = react.exports.useState(0.5);
  react.exports.useEffect(() => {
    const url = URL.createObjectURL(file.acceptedFiles[0]);
    setPlay(false);
    const options = formWaveSurferOptions(waveformRef.current);
    wavesurfer.current = u.create(options);
    wavesurfer.current.load(url);
    wavesurfer.current.on("ready", function() {
      if (wavesurfer.current) {
        wavesurfer.current.setVolume(volume);
        setVolume(volume);
      }
    });
    return () => wavesurfer.current.destroy();
  }, [file]);
  const handlePlayPause = () => {
    setPlay(!playing);
    wavesurfer.current.playPause();
  };
  const handleRemove = () => {
    setFile(null);
  };
  return /* @__PURE__ */ jsxs("div", { className: "d-flex w-100 justify-content-center align-items-center px-4", style: { gap: "10px" }, children: [
    /* @__PURE__ */ jsx("div", { className: "controls", children: /* @__PURE__ */ jsxs("div", { className: "audio-container", onClick: handlePlayPause, children: [
      !playing && /* @__PURE__ */ jsx(PlaySvg, {}),
      playing && /* @__PURE__ */ jsx(PauseSvg, {})
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "w-100", id: "waveform", ref: waveformRef }),
    /* @__PURE__ */ jsx("div", { onClick: () => handleRemove(), className: "cursor-pointer", children: /* @__PURE__ */ jsx(DeleteSvg, {}) })
  ] });
}
const AudioInput = ({ formik }) => {
  const [file, setFile] = react.exports.useState(null);
  const { skin } = useSkin();
  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    onDrop: (acceptedFiles) => {
      formik.values.type = "audio";
      formik.values.audio = acceptedFiles[0];
      setFile({ acceptedFiles });
    }
  });
  return /* @__PURE__ */ jsx("div", { style: { cursor: "pointer", padding: "30px 10px", borderRadius: "23px", backgroundColor: skin === "light" ? "white" : "black" }, children: file !== null ? /* @__PURE__ */ jsx(ListGroupItem, { className: "d-flex align-items-center justify-content-between h-25", children: /* @__PURE__ */ jsx(CardBody, { children: /* @__PURE__ */ jsxs("div", { className: "file-details d-flex align-items-center", children: [
    /* @__PURE__ */ jsx("label", { htmlFor: "audio", className: "hidden", children: "Audio" }),
    /* @__PURE__ */ jsx("input", { value: formik.values.file, type: "file", name: "audio", accept: "audio/*, video/*", ...getInputProps() }),
    /* @__PURE__ */ jsx(WaveAudioInput, { file, setFile })
  ] }) }) }) : /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { ...getRootProps({ className: "dropzone" }), children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "audio", className: "hidden", children: "Audio" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          value: formik.values.file,
          onChange: formik.handleChange("audio"),
          type: "file",
          name: "audio",
          accept: "audio/*, video/*",
          ...getInputProps(),
          invalid: formik.touched.audio && formik.errors.audio ? true : false
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "d-flex align-items-center justify-content-center flex-column gap-2", children: [
        /* @__PURE__ */ jsx(AudioInputSvg, {}),
        /* @__PURE__ */ jsx("h4", { className: "text-blue", children: "Drop your own voice" }),
        /* @__PURE__ */ jsx("p", { className: "text-secondary", children: "Create more realistic videos by uploading own voice" })
      ] })
    ] }),
    formik.touched.audio && formik.errors.audio ? /* @__PURE__ */ jsx(FormFeedback, { type: "invalid", children: formik.errors.audio }) : null
  ] }) });
};
const MediaPlayer = ({ videoUrl }) => {
  const [progress, setProgress] = react.exports.useState(0);
  const videoRef = react.exports.useRef(null);
  const handleProgress = () => {
    const duration = videoRef.current.duration;
    const currentTime = videoRef.current.currentTime;
    const progress2 = currentTime / duration * 100;
    setProgress(progress2);
  };
  return /* @__PURE__ */ jsx("div", { className: "px-4", children: /* @__PURE__ */ jsx(
    "video",
    {
      className: "rounded-4",
      onTimeUpdate: handleProgress,
      ref: videoRef,
      width: "100%",
      height: "100%",
      controls: true,
      children: /* @__PURE__ */ jsx("source", { src: videoUrl, type: "video/mp4" })
    }
  ) });
};
const ShowVideoModal = ({ show, setShow, videoId, setCreatingLoader }) => {
  const dispatch = useDispatch();
  const [videoUrl, setVideoUrl] = react.exports.useState(null);
  const { getVideo } = useSelector((state) => state.createVideo);
  react.exports.useEffect(() => {
    var _a;
    if (getVideo !== null && videoUrl === null) {
      setCreatingLoader(false);
      setShow(true);
      setVideoUrl((_a = getVideo == null ? void 0 : getVideo.video) == null ? void 0 : _a.result_url);
    }
  }, [getVideo]);
  react.exports.useEffect(() => {
    const timeOutFunc = () => {
      if (videoId !== null) {
        dispatch(getCreateVideo(videoId));
      }
    };
    const interval = setTimeout(timeOutFunc, 1e4);
    return () => {
      clearTimeout(interval);
    };
  }, [videoId]);
  const handleDownload = () => {
    const url = videoUrl;
    const link = document.createElement("a");
    link.href = url;
    link.download = "Presenter Voice Over";
    link.click();
  };
  return /* @__PURE__ */ jsxs(react.exports.Fragment, { children: [
    !videoId && /* @__PURE__ */ jsx(Row, { children: /* @__PURE__ */ jsx(Col, { children: /* @__PURE__ */ jsx("div", { style: { minHeight: "590px", padding: "20px" }, children: /* @__PURE__ */ jsx("h2", { children: "Output" }) }) }) }),
    videoUrl && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("h1", { className: "text-center mb-1", children: videoUrl === null ? "Generating Video" : `Video Generated Successfully` }),
      /* @__PURE__ */ jsxs(Row, { tag: "form", className: "gy-1 gx-2 mt-75", children: [
        videoUrl === null ? /* @__PURE__ */ jsx(Col, { xs: 12, className: "d-flex justify-content-center align-items-center", children: /* @__PURE__ */ jsx(
          Spinner,
          {
            style: {
              height: "10rem",
              width: "10rem"
            },
            animation: "border",
            role: "status",
            children: /* @__PURE__ */ jsx("span", { className: "visually-hidden", children: "Loading..." })
          }
        ) }) : null,
        videoUrl !== null ? /* @__PURE__ */ jsx(MediaPlayer, { videoUrl }) : null,
        videoUrl !== null ? /* @__PURE__ */ jsxs(Col, { className: "text-center mt-1", xs: 12, children: [
          /* @__PURE__ */ jsx(Button, { type: "button", id: "downloadBtn", onClick: () => handleDownload(), value: "download", className: "me-1", color: "primary", children: "Download" }),
          /* @__PURE__ */ jsx(
            Button,
            {
              type: "button",
              color: "secondary",
              outline: true,
              onClick: () => {
                setShow(!show);
                dispatch(emptyGetVideo);
                setVideoUrl(null);
              },
              children: "Close"
            }
          )
        ] }) : null
      ] })
    ] })
  ] });
};
const Language = ({ formik, language, languageName, setLanguageName }) => {
  const handleChange = (value) => {
    if (!value) {
      return;
    }
    setLanguageName(value.value);
    formik.handleChange("providerType");
    formik.getFieldProps("providerType");
  };
  const { Option } = components;
  const IconOption = (props) => /* @__PURE__ */ jsxs(Option, { ...props, children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        className: "px-1",
        src: props.data.icon,
        style: { width: 55 },
        alt: props.data.label
      }
    ),
    props.data.label
  ] });
  return /* @__PURE__ */ jsxs("div", { className: "w-full mb-1 mt-1", children: [
    /* @__PURE__ */ jsx(Label, { className: "form-label", children: "Language" }),
    /* @__PURE__ */ jsx(
      StateManagedSelect$1,
      {
        menuPlacement: "top",
        theme: selectThemeColors,
        className: "react-select dark-react-select",
        classNamePrefix: "select",
        name: "providerType",
        id: "providerType",
        onBlur: formik.handleBlur,
        onChange: (e2) => handleChange(e2),
        options: language,
        components: { Option: IconOption },
        placeholder: "Select Language",
        isClearable: true,
        invalid: formik.touched.providerType && formik.errors.providerType ? true : false
      }
    ),
    formik.touched.providerType && formik.errors.providerType ? /* @__PURE__ */ jsx(FormFeedback, { type: "invalid", children: formik.errors.providerType }) : null
  ] });
};
const Menu = (props) => {
  return /* @__PURE__ */ jsx(react.exports.Fragment, { children: /* @__PURE__ */ jsx(components.Menu, { ...props, children: props.children }) });
};
const Voices = ({ formik, getLanguage, voices }) => {
  var _a, _b;
  const groupedOptions = [
    {
      label: "Male",
      options: (_a = voices == null ? void 0 : voices.male) == null ? void 0 : _a.map((item) => {
        return { label: item.name, value: item.name, type: item.type, voice_id: item.voice_id };
      })
    },
    {
      label: "Female",
      options: (_b = voices == null ? void 0 : voices.female) == null ? void 0 : _b.map((item) => {
        return { label: item.name, value: item.name, type: item.type, voice_id: item.voice_id };
      })
    }
  ];
  const handleChange = (value) => {
    if (!value) {
      return;
    }
    formik.values.providerType = value.type;
    formik.values.providerVoiceId = value.voice_id;
    formik.getFieldProps("providerVoiceId");
  };
  return /* @__PURE__ */ jsxs("div", { className: "mt-1", children: [
    /* @__PURE__ */ jsx(Label, { className: "form-label", children: "Voices" }),
    /* @__PURE__ */ jsx(
      StateManagedSelect$1,
      {
        isDisabled: !voices ? true : false,
        onChange: (value) => handleChange(value),
        menuPlacement: "top",
        className: "react-select dark-react-select",
        classNamePrefix: "select",
        onBlur: formik.handleBlur,
        options: groupedOptions,
        components: { Menu },
        isSearchable: false,
        placeholder: !voices ? "Select Language First..." : "Select Voice...",
        isClearable: true,
        invalid: formik.touched.providerVoiceId && formik.errors.providerVoiceId ? true : false
      }
    ),
    formik.touched.providerVoiceId && formik.errors.providerVoiceId ? /* @__PURE__ */ jsx(FormFeedback, { type: "invalid", children: formik.errors.providerVoiceId }) : null
  ] });
};
const VideoDimensions = ({ formik }) => {
  const handleChange = (value) => {
    if (!value) {
      return;
    }
    formik.values.imageRatioType = value.value;
    formik.getFieldProps("imageRatioType");
  };
  const options = [
    {
      label: "Horizantal (16:9)",
      value: "horizantal"
    },
    {
      label: "Vertical (9:16)",
      value: "vertical"
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "w-full mb-1 mt-1", children: [
    /* @__PURE__ */ jsx(Label, { className: "form-label", children: "Aspect ratio" }),
    /* @__PURE__ */ jsx(
      StateManagedSelect$1,
      {
        theme: selectThemeColors,
        className: "react-select dark-react-select",
        classNamePrefix: "select",
        name: "imageRatioType",
        id: "imageRatioType",
        onBlur: formik.handleBlur,
        onChange: (value) => handleChange(value),
        options,
        isClearable: true,
        invalid: formik.touched.imageRatioType && formik.errors.imageRatioType ? true : false
      }
    ),
    formik.touched.imageRatioType && formik.errors.imageRatioType ? /* @__PURE__ */ jsx(FormFeedback, { type: "invalid", children: formik.errors.imageRatioType }) : null
  ] });
};
const FormikFormData = (values, actions, dispatch) => {
  if (values.tab === "tab") {
    actions.setFieldValue({
      type: values.type,
      textarea: values.textarea,
      image: values.image,
      providerType: values.providerType,
      providerVoiceId: values.providerVoiceId,
      textareaError: values.textareaError,
      sourceError: values.sourceError,
      imageError: values.imageError,
      providerTypeError: values.providerTypeError,
      providerVoiceIdError: values.providerVoiceIdError,
      imageRatioType: values.imageRatioType,
      uploadAIAvatar: values.uploadAIAvatar ? values.uploadAIAvatar : "",
      extension: values.extension ? values.extension : "",
      numOfImages: values.numOfImages,
      negativePrompt: values.negativePrompt,
      numInferenceSteps: values.numInferenceSteps,
      tiling: values.tiling,
      guidanceScale: values.guidanceScale,
      promptMagic: values.promptMagic
    });
  } else {
    actions.setFieldValue({
      type: values.type,
      audio: values.audio,
      source: values.source,
      providerType: values.providerType,
      providerVoiceId: values.providerVoiceId,
      textareaError: values.textareaError,
      sourceError: values.sourceError,
      imageError: values.imageError,
      providerTypeError: values.providerTypeError,
      providerVoiceIdError: values.providerVoiceIdError,
      imageRatioType: values.imageRatioType,
      uploadAIAvatar: values.uploadAIAvatar ? values.uploadAIAvatar : "",
      extension: values.extension ? values.extension : "",
      numOfImages: values.numOfImages,
      negativePrompt: values.negativePrompt,
      numInferenceSteps: values.numInferenceSteps,
      tiling: values.tiling,
      guidanceScale: values.guidanceScale,
      promptMagic: values.promptMagic
    });
  }
  const formData = new FormData();
  if (values.aiTextAvatar) {
    formData.append("text", values.aiTextAvatar);
    formData.append("imageRatioType", values.imageRatioType);
    formData.append("numOfImages", values.numOfImages);
    formData.append("negativePrompt", values.negativePrompt);
    formData.append("numInferenceSteps", values.numInferenceSteps);
    formData.append("tiling", values.tiling);
    formData.append("guidanceScale", values.guidanceScale);
    if (values.promptMagic === true) {
      formData.append("promptMagic", values.promptMagic);
    }
    if (values.uploadAIAvatar) {
      formData.append("image", values.uploadAIAvatar);
      formData.append("extension", values.extension);
    }
    dispatch(postCreateAvatar(formData));
    actions.setSubmitting(false);
    actions.resetForm();
  } else {
    if (values.audio) {
      formData.append("type", "audio");
      formData.append("audio", values.audio);
      formData.append(values.source ? "source" : "image", values.source ? values.source : values.image);
      dispatch(postCreateVideo(formData));
      actions.setSubmitting(false);
      actions.resetForm();
    } else {
      formData.append("type", "text");
      formData.append("text", values.textarea);
      formData.append(values.image ? "image" : "source", values.image ? values.image : values.source);
      formData.append("providerType", values.providerType);
      formData.append("providerVoiceId", values.providerVoiceId);
      dispatch(postCreateVideo(formData));
      actions.setSubmitting(false);
      actions.resetForm();
    }
  }
};
const NumberOfImages = ({ formik }) => {
  const options = { numeral: true, numeralThousandsGroupStyle: "thousand" };
  return /* @__PURE__ */ jsxs(react.exports.Fragment, { children: [
    /* @__PURE__ */ jsx(Label, { for: "number-of-images", children: "Number of images" }),
    /* @__PURE__ */ jsx(
      Cleave,
      {
        className: "form-control",
        placeholder: "Enter between 1 to 4",
        options,
        ...formik.getFieldProps("numOfImages"),
        onChange: formik.handleChange("numOfImages"),
        id: "number-of-images",
        invalid: formik.touched.numOfImages && formik.errors.numOfImages ? true : false
      }
    ),
    formik.touched.numOfImages && formik.errors.numOfImages ? /* @__PURE__ */ jsx(FormFeedback, { type: "invalid", children: formik.errors.numOfImages }) : null
  ] });
};
const NumeralInterferenceSteps = ({ formik }) => {
  const options = { numeral: true, numeralThousandsGroupStyle: "thousand" };
  return /* @__PURE__ */ jsxs(react.exports.Fragment, { children: [
    /* @__PURE__ */ jsx(Label, { for: "numInferenceSteps", children: "Numeral Inference Steps" }),
    /* @__PURE__ */ jsx(
      Cleave,
      {
        className: "form-control",
        placeholder: "Enter between 30 to 60",
        options,
        ...formik.getFieldProps("numInferenceSteps"),
        onChange: formik.handleChange("numInferenceSteps"),
        id: "numInferenceSteps",
        invalid: formik.touched.numInferenceSteps && formik.errors.numInferenceSteps ? true : false
      }
    ),
    formik.touched.numInferenceSteps && formik.errors.numInferenceSteps ? /* @__PURE__ */ jsx(FormFeedback, { type: "invalid", children: formik.errors.numInferenceSteps }) : null
  ] });
};
const GuidanceScale = ({ formik }) => {
  const options = { numeral: true, numeralThousandsGroupStyle: "thousand" };
  return /* @__PURE__ */ jsxs(react.exports.Fragment, { children: [
    /* @__PURE__ */ jsx(Label, { for: "guidanceScale", children: "Guidance Scale" }),
    /* @__PURE__ */ jsx(
      Cleave,
      {
        className: "form-control",
        placeholder: "Enter between 1 and 20",
        ...formik.getFieldProps("guidanceScale"),
        onChange: formik.handleChange("guidanceScale"),
        options,
        id: "guidanceScale",
        invalid: formik.touched.guidanceScale && formik.errors.guidanceScale ? true : false
      }
    ),
    formik.touched.guidanceScale && formik.errors.guidanceScale ? /* @__PURE__ */ jsx(FormFeedback, { type: "invalid", children: formik.errors.guidanceScale }) : null
  ] });
};
const TextSvg = ({ color }) => {
  useSkin();
  return /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { d: "M6.24 10H7.52L8.16 8.16H11.08L11.72 10H12.96L10.24 2.8H8.96L6.24 10ZM8.52 7.12L9.56 4.12H9.64L10.68 7.12H8.52ZM4.8 12.8C4.36 12.8 3.9832 12.6432 3.6696 12.3296C3.356 12.016 3.19947 11.6395 3.2 11.2V1.6C3.2 1.16 3.3568 0.783201 3.6704 0.469601C3.984 0.156001 4.36053 -0.000531975 4.8 1.35823e-06H14.4C14.84 1.35823e-06 15.2168 0.156801 15.5304 0.470401C15.844 0.784001 16.0005 1.16053 16 1.6V11.2C16 11.64 15.8432 12.0168 15.5296 12.3304C15.216 12.644 14.8395 12.8005 14.4 12.8H4.8ZM4.8 11.2H14.4V1.6H4.8V11.2ZM1.6 16C1.16 16 0.783201 15.8432 0.469601 15.5296C0.156001 15.216 -0.000531975 14.8395 1.35823e-06 14.4V3.2H1.6V14.4H12.8V16H1.6Z", fill: color }) });
};
const VoiceSvg = ({ color }) => {
  useSkin();
  return /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: color, xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { d: "M2 16C1.45 16 0.979002 15.804 0.587002 15.412C0.195002 15.02 -0.000664969 14.5493 1.69779e-06 14V11H2V14H14V11H16V14C16 14.55 15.804 15.021 15.412 15.413C15.02 15.805 14.5493 16.0007 14 16H2ZM7 12V3.85L4.4 6.45L3 5L8 0L13 5L11.6 6.45L9 3.85V12H7Z", fill: color }) });
};
const PresenterSvg = ({ color }) => {
  useSkin();
  return /* @__PURE__ */ jsxs("svg", { width: "16", height: "19", viewBox: "0 0 16 19", fill: color, xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx("path", { d: "M8 18.1353C10.8157 18.1353 13.3314 16.8552 15 14.8462C14.3804 11.5414 11.4849 9.03876 8 9.03876C4.51505 9.03876 1.61965 11.5414 1 14.8462C2.66861 16.8552 5.18425 18.1353 8 18.1353Z", stroke: "white", strokeWidth: "1.5", strokeLinecap: "round", "stroke-linejoin": "round", fill: color }),
    /* @__PURE__ */ jsx("path", { d: "M7.99942 7.67072C9.84149 7.67072 11.3348 6.17743 11.3348 4.33536C11.3348 2.49329 9.84149 1 7.99942 1C6.15735 1 4.66406 2.49329 4.66406 4.33536C4.66406 6.17743 6.15735 7.67072 7.99942 7.67072Z", stroke: "white", strokeWidth: "1.5", strokeLinecap: "round", "stroke-linejoin": "round", fill: color })
  ] });
};
const AIPresenterSvg = ({ color }) => {
  useSkin();
  return /* @__PURE__ */ jsx("svg", { width: "18", height: "20", viewBox: "0 0 18 20", fill: color, xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { d: "M8.99936 5C9.68052 5 10.3338 4.73661 10.8154 4.26777C11.2971 3.79893 11.5677 3.16304 11.5677 2.5C11.5677 1.83696 11.2971 1.20107 10.8154 0.732233C10.3338 0.263392 9.68052 0 8.99936 0C8.3182 0 7.66494 0.263392 7.18329 0.732233C6.70164 1.20107 6.43105 1.83696 6.43105 2.5C6.43105 3.16304 6.70164 3.79893 7.18329 4.26777C7.66494 4.73661 8.3182 5 8.99936 5ZM8.99936 3.75C8.65878 3.75 8.33215 3.6183 8.09133 3.38388C7.8505 3.14946 7.71521 2.83152 7.71521 2.5C7.71521 2.16848 7.8505 1.85054 8.09133 1.61612C8.33215 1.3817 8.65878 1.25 8.99936 1.25C9.33994 1.25 9.66657 1.3817 9.90739 1.61612C10.1482 1.85054 10.2835 2.16848 10.2835 2.5C10.2835 2.83152 10.1482 3.14946 9.90739 3.38388C9.66657 3.6183 9.33994 3.75 8.99936 3.75ZM7.07313 7.5C6.90284 7.5 6.73953 7.56585 6.61911 7.68306C6.4987 7.80027 6.43105 7.95924 6.43105 8.125V8.75H5.1469V8.125C5.1469 7.62772 5.34984 7.15081 5.71108 6.79917C6.07232 6.44754 6.56226 6.25 7.07313 6.25H10.9256C11.4365 6.25 11.9264 6.44754 12.2876 6.79917C12.6489 7.15081 12.8518 7.62772 12.8518 8.125V8.75H11.5677V8.125C11.5677 7.95924 11.5 7.80027 11.3796 7.68306C11.2592 7.56585 11.0959 7.5 10.9256 7.5H7.07313ZM5.1469 15.98V18.125C5.1469 18.6223 5.34984 19.0992 5.71108 19.4508C6.07232 19.8025 6.56226 20 7.07313 20H10.9256C11.4365 20 11.9264 19.8025 12.2876 19.4508C12.6489 19.0992 12.8518 18.6223 12.8518 18.125V15.98C12.8518 15.896 12.8692 15.8128 12.903 15.7355C12.9367 15.6582 12.9862 15.5883 13.0483 15.53L17.8035 11.075C17.8957 10.9885 17.9592 10.8772 17.9859 10.7554C18.0126 10.6335 18.0013 10.5067 17.9534 10.3911C17.9055 10.2756 17.8232 10.1766 17.7171 10.1069C17.611 10.0372 17.4859 10 17.3579 10H0.64081C0.512921 10.0002 0.388021 10.0377 0.282118 10.1075C0.176216 10.1772 0.0941372 10.2762 0.0464025 10.3917C-0.00133227 10.5072 -0.0125479 10.6339 0.0141929 10.7557C0.0409338 10.8774 0.104413 10.9886 0.196494 11.075L4.95043 15.53C5.0128 15.5882 5.06246 15.658 5.09644 15.7354C5.13042 15.8127 5.14674 15.8959 5.1469 15.98ZM6.43105 18.125V15.98C6.43089 15.7279 6.3785 15.4784 6.277 15.2464C6.17551 15.0145 6.02699 14.8048 5.84034 14.63L2.23188 11.25H15.7643L12.1584 14.6287C11.9716 14.8037 11.823 15.0136 11.7215 15.2457C11.62 15.4779 11.5677 15.7277 11.5677 15.98V18.125C11.5677 18.2908 11.5 18.4497 11.3796 18.5669C11.2592 18.6842 11.0959 18.75 10.9256 18.75H7.07313C6.90284 18.75 6.73953 18.6842 6.61911 18.5669C6.4987 18.4497 6.43105 18.2908 6.43105 18.125Z", fill: color }) });
};
const PictureToVideoArrowSvg = () => {
  useSkin();
  return /* @__PURE__ */ jsxs("svg", { width: "23", height: "21", viewBox: "0 0 23 21", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx("rect", { x: "0.5", y: "0.5", width: "21.2353", height: "20", rx: "10", fill: "white", fillOpacity: "0.74", stroke: "white" }),
    /* @__PURE__ */ jsx("path", { d: "M9.88396 6.17645L13.5898 10.5L9.88396 14.8235", stroke: "#177FFA", strokeWidth: "2", strokeLinecap: "round" })
  ] });
};
const english = "/assets/english.3051b9d5.png";
const spanish = "/assets/spain.a63b68be.png";
const italy = "data:image/png;base64,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";
const france = "data:image/png;base64,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";
const UploadSvg = () => {
  const { skin, setSkin } = useSkin();
  return /* @__PURE__ */ jsx(Fragment, { children: skin === "light" ? /* @__PURE__ */ jsx("svg", { width: "20", height: "22", viewBox: "0 0 20 22", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { d: "M13.3146 2.38918e-05C12.436 -0.00233512 11.5656 0.17002 10.7538 0.50713C9.94201 0.84424 9.20482 1.33942 8.58486 1.96406L0.393009 10.1851C0.141704 10.4368 0.00033493 10.7783 5.94364e-07 11.1346C-0.000333741 11.4908 0.140394 11.8326 0.391226 12.0848C0.642058 12.3369 0.982447 12.4788 1.33751 12.4791C1.69258 12.4794 2.03323 12.3382 2.28453 12.0866L10.48 3.86192C11.2423 3.15868 12.2461 2.77823 13.2815 2.80005C14.3168 2.82187 15.3038 3.24428 16.036 3.97901C16.7683 4.71375 17.1893 5.70398 17.2111 6.74282C17.2328 7.78166 16.8536 8.78876 16.1527 9.55369L6.69869 19.0394C6.44522 19.2764 6.10998 19.4054 5.76358 19.3992C5.41719 19.3931 5.08669 19.2523 4.84171 19.0065C4.59673 18.7607 4.45641 18.4291 4.45029 18.0816C4.44418 17.734 4.57276 17.3976 4.80894 17.1433L14.263 7.65763C14.5143 7.40572 14.6556 7.06396 14.6558 6.70754C14.6559 6.35112 14.515 6.00924 14.2639 5.75709C14.0128 5.50494 13.6722 5.3632 13.317 5.36303C12.9618 5.36286 12.621 5.50429 12.3697 5.7562L2.91385 15.2455C2.21296 16.0104 1.83378 17.0175 1.85553 18.0563C1.87728 19.0952 2.29827 20.0854 3.03056 20.8202C3.76284 21.5549 4.74977 21.9773 5.78515 21.9991C6.82053 22.0209 7.82426 21.6405 8.58665 20.9372L18.0407 11.4515C18.6637 10.8301 19.1576 10.0909 19.4939 9.2766C19.8303 8.46233 20.0023 7.58922 20 6.70781C19.9981 4.92937 19.2931 3.22432 18.0398 1.96678C16.7864 0.709237 15.0871 0.00191786 13.3146 2.38918e-05Z", fill: "black" }) }) : /* @__PURE__ */ jsx("svg", { width: "20", height: "22", viewBox: "0 0 20 22", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { d: "M13.3146 2.38918e-05C12.436 -0.00233512 11.5656 0.17002 10.7538 0.50713C9.94201 0.84424 9.20482 1.33942 8.58486 1.96406L0.393009 10.1851C0.141704 10.4368 0.00033493 10.7783 5.94364e-07 11.1346C-0.000333741 11.4908 0.140394 11.8326 0.391226 12.0848C0.642058 12.3369 0.982447 12.4788 1.33751 12.4791C1.69258 12.4794 2.03323 12.3382 2.28453 12.0866L10.48 3.86192C11.2423 3.15868 12.2461 2.77823 13.2815 2.80005C14.3168 2.82187 15.3038 3.24428 16.036 3.97901C16.7683 4.71375 17.1893 5.70398 17.2111 6.74282C17.2328 7.78166 16.8536 8.78876 16.1527 9.55369L6.69869 19.0394C6.44522 19.2764 6.10998 19.4054 5.76358 19.3992C5.41719 19.3931 5.08669 19.2523 4.84171 19.0065C4.59673 18.7607 4.45641 18.4291 4.45029 18.0816C4.44418 17.734 4.57276 17.3976 4.80894 17.1433L14.263 7.65763C14.5143 7.40572 14.6556 7.06396 14.6558 6.70754C14.6559 6.35112 14.515 6.00924 14.2639 5.75709C14.0128 5.50494 13.6722 5.3632 13.317 5.36303C12.9618 5.36286 12.621 5.50429 12.3697 5.7562L2.91385 15.2455C2.21296 16.0104 1.83378 17.0175 1.85553 18.0563C1.87728 19.0952 2.29827 20.0854 3.03056 20.8202C3.76284 21.5549 4.74977 21.9773 5.78515 21.9991C6.82053 22.0209 7.82426 21.6405 8.58665 20.9372L18.0407 11.4515C18.6637 10.8301 19.1576 10.0909 19.4939 9.2766C19.8303 8.46233 20.0023 7.58922 20 6.70781C19.9981 4.92937 19.2931 3.22432 18.0398 1.96678C16.7864 0.709237 15.0871 0.00191786 13.3146 2.38918e-05Z", fill: "white" }) }) });
};
const CancelSvg = () => {
  const { skin, setSkin } = useSkin();
  return /* @__PURE__ */ jsx(Fragment, { children: skin === "light" ? /* @__PURE__ */ jsx("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { d: "M2 2L18 18M2 18L18 2", stroke: "black", strokeWidth: "3.5", strokeLinecap: "round", "stroke-linejoin": "round" }) }) : /* @__PURE__ */ jsx("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { d: "M2 2L18 18M2 18L18 2", stroke: "white", strokeWidth: "3.5", strokeLinecap: "round", "stroke-linejoin": "round" }) }) });
};
const PictureToVideo = () => {
  const dispatch = useDispatch();
  const [show, setShow] = react.exports.useState(false);
  const [active, setActive] = react.exports.useState(null);
  const [loader, setLoader] = react.exports.useState(false);
  const [videoId, setVideoId] = react.exports.useState(null);
  const presenterInputRef = react.exports.useRef(null);
  const aiPresenterInputRef = react.exports.useRef(null);
  const [activeTab, setActiveTab] = react.exports.useState("tab1");
  const [activeTab2, setActiveTab2] = react.exports.useState("tab3");
  const [presenter, setPresenter] = react.exports.useState([{ id: 1, avatar: "https://i.ibb.co/3SwGxPj/layout-1.jpg" }, { id: 2, avatar: "https://i.ibb.co/16LYHY4/layout-2.jpg" }, { id: 3, avatar: "https://i.ibb.co/h9MZnKs/layout-3.jpg" }, { id: 4, avatar: "https://i.ibb.co/17d26LT/layout-4.jpg" }, { id: 5, avatar: "https://i.ibb.co/8NwkDwx/layout-5.jpg" }, { id: 6, avatar: "https://i.ibb.co/FW7VFqX/layout-6.jpg" }]);
  const [aiPresenter, setAIPresenter] = react.exports.useState([{ id: 1, aiAvatar: "https://i.ibb.co/ryPqphx/download-8.jpg" }, { id: 2, aiAvatar: "https://i.ibb.co/C2B5MCL/download-7.jpg" }, { id: 3, aiAvatar: "https://i.ibb.co/9nVWxwK/download-6.jpg" }, { id: 4, aiAvatar: "https://i.ibb.co/NVJvWmG/download-5.jpg" }, { id: 5, aiAvatar: "https://i.ibb.co/q0hdDhn/download-2.jpg" }, { id: 6, aiAvatar: "https://i.ibb.co/FmyHnqp/download-1.jpg" }]);
  const [uploadAIPresenter, setUploadAIPresenter] = react.exports.useState(null);
  const [language, setLanguage] = react.exports.useState(null);
  const [languageName, setLanguageName] = react.exports.useState("");
  const [filterObject, setFilterObject] = react.exports.useState("");
  const [avatarCreationLoader, setAvatarCreationLoader] = react.exports.useState(false);
  const [openAIPresenterBox, setOpenAIPresenterBox] = react.exports.useState(false);
  const [imageName, setImageName] = react.exports.useState(null);
  const { postVideo, postVideoLoading, postVideoError } = useSelector((state) => state.createVideo);
  const { getVideo, getVideoLoading, getVideoError } = useSelector((state) => state.createVideo);
  const { getLanguage, languageLoading } = useSelector((state) => state.createVideo);
  const { postAvatar, postAvatarLoading, postAvatarError } = useSelector((state) => state.createVideo);
  const { getAvatar, getAvatarLoading, getAvatarError } = useSelector((state) => state.createVideo);
  const { subscription_plans_modal } = useSelector((state) => state.subscription);
  react.exports.useEffect(() => {
    if (languageLoading === "idle" && getLanguage) {
      let newArray = [];
      for (let i2 = 0; i2 < getLanguage.languages.length; i2++) {
        if (getLanguage.languages[i2].name === "English") {
          newArray.push({ value: getLanguage.languages[i2].name, label: getLanguage.languages[i2].name, icon: english });
        }
        if (getLanguage.languages[i2].name === "Spanish") {
          newArray.push({ value: getLanguage.languages[i2].name, label: getLanguage.languages[i2].name, icon: spanish });
        }
        if (getLanguage.languages[i2].name === "Italian") {
          newArray.push({ value: getLanguage.languages[i2].name, label: getLanguage.languages[i2].name, icon: italy });
        }
        if (getLanguage.languages[i2].name === "French") {
          newArray.push({ value: getLanguage.languages[i2].name, label: getLanguage.languages[i2].name, icon: france });
        }
      }
      setLanguage(newArray);
    } else {
      dispatch(createAvatarLanguage());
    }
  }, [getLanguage]);
  react.exports.useEffect(() => {
    if (getVideoLoading === "pending" && getVideoError === null && getVideo === null) {
      setShow(true);
    } else if (getVideoLoading === "idle" && getVideoError !== null && getVideo !== null) {
      setShow(false);
    }
  }, [getVideoError, getVideoLoading, getVideo]);
  react.exports.useEffect(() => {
    var _a;
    if (postVideoError === null && postVideoLoading === "pending") {
      setLoader(true);
    } else if (postVideoError !== null && postVideoLoading === "idle") {
      setLoader(false);
      setShow(false);
    }
    if (postVideo !== null) {
      setVideoId((_a = postVideo == null ? void 0 : postVideo.data) == null ? void 0 : _a.id);
    }
    if (postVideoError) {
      if (postVideoError.includes("Insufficient Credit")) {
        dispatch(
          subscriptionActions.updateModalState({
            subscription: !subscription_plans_modal
          })
        );
        let upgrade = {
          upgradeModal: !subscription_plans_modal
        };
        localStorage.setItem("upgradeModal", JSON.stringify(upgrade));
      } else if (postVideoError.includes("Subscription Not Found")) {
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
  }, [postVideo, postVideoError, postVideoLoading]);
  react.exports.useEffect(() => {
    if (getLanguage) {
      let languageData = getLanguage.languages.find((item) => item.name === languageName);
      if (languageData) {
        setFilterObject(languageData);
      }
    }
  }, [languageName]);
  react.exports.useEffect(() => {
    const timeOutFunc = () => {
      if (postAvatar !== null) {
        dispatch(getCreateAvatar(postAvatar.data.sdGenerationJob.generationId));
      }
    };
    const interval = setTimeout(timeOutFunc, 8e3);
    return () => {
      clearTimeout(interval);
    };
  }, [postAvatar]);
  react.exports.useEffect(() => {
    if (postAvatarLoading === "pending") {
      setAvatarCreationLoader(true);
      setOpenAIPresenterBox(true);
    }
    if (postAvatarError !== null) {
      setAvatarCreationLoader(false);
      setOpenAIPresenterBox(true);
    }
  }, [postAvatarLoading, postAvatarError]);
  react.exports.useEffect(() => {
    if (getAvatarError !== null) {
      setOpenAIPresenterBox(true);
      setAvatarCreationLoader(true);
    }
    if (getAvatar !== null) {
      setAvatarCreationLoader(true);
      if (getAvatar.avatars) {
        if (getAvatar.avatars.generations_by_pk !== null) {
          if (getAvatar.avatars.generations_by_pk.generated_images.length > 0) {
            setOpenAIPresenterBox(false);
            setAvatarCreationLoader(false);
            let aiUrl = getAvatar.avatars.generations_by_pk.generated_images;
            for (let i2 = 0; i2 < aiUrl.length; i2++) {
              aiPresenter.push({ id: aiPresenter.length + 1, aiAvatar: aiUrl[i2].url });
            }
          }
        }
      }
    }
  }, [getAvatar, getAvatarError]);
  const tab2ValidationSchema = {
    aiTextAvatar: create().required("Text is required to generate"),
    audio: create$1().notRequired().nullable(),
    source: create().notRequired(),
    image: create$1().notRequired(),
    providerType: create().notRequired(),
    providerVoiceId: create().notRequired(),
    imageRatioType: create().required("Aspect ratio is required"),
    uploadAIAvatar: create$1().notRequired().nullable(),
    extension: create().notRequired(),
    numOfImages: create$2().min(1, "Number must be between 1 and 4").max(4, "Number must be between 1 and 4").required("Number of image is required"),
    negativePrompt: create().required("Negative Prompt is required"),
    numInferenceSteps: create$2().min(30, "Number must be between 30 and 60").max(60, "Number must be between 30 and 60").required("Numeral inference steps is required"),
    tiling: create().notRequired(),
    guidanceScale: create$2().min(1, "Number must be between 1 and 20").max(20, "Number must be between 1 and 20").required("Guidance scale is required. 7 is recommended"),
    promptMagic: create().notRequired()
  };
  const tab3ValidationSchema = {
    textarea: create().required("Text is required").max(4e3, "Textarea cannot exceed 4000 characters"),
    audio: create$1().notRequired().nullable(),
    source: create().when("image", {
      is: void 0,
      then: create().required("Image is required"),
      otherwise: create().notRequired()
    }),
    image: create$1().test("image-or-source", "Image is required", function(value) {
      const { image, source } = this.parent;
      if (!value && !image && !source) {
        return this.createError({
          path: "image",
          message: "Image is required"
        });
      }
      return true;
    }).nullable(),
    providerType: create().required("Language is required"),
    providerVoiceId: create().required("Voice is required"),
    imageRatioType: create().notRequired(),
    uploadAIAvatar: create$1().notRequired().nullable(),
    extension: create().notRequired(),
    numOfImages: create().notRequired(),
    negativePrompt: create().notRequired(),
    numInferenceSteps: create().notRequired(),
    tiling: create().notRequired(),
    guidanceScale: create().notRequired(),
    promptMagic: create().notRequired()
  };
  const tab4ValidationSchema = {
    textarea: create().notRequired(),
    audio: create$1().test("audio-or-text", "Audio is required", function(value) {
      const { audio } = this.parent;
      if (!value && !audio) {
        return this.createError({
          path: "audio",
          message: "Audio is required"
        });
      }
      return true;
    }).nullable(),
    source: create().when("image", {
      is: void 0,
      then: create().required("Image is required"),
      otherwise: create().notRequired()
    }),
    image: create$1().test("image-or-source", "Image is required", function(value) {
      const { source } = this.parent;
      if (!value && !source) {
        return this.createError({
          path: "image",
          message: "Image is required"
        });
      }
      return true;
    }).nullable(),
    providerType: create().notRequired(),
    providerVoiceId: create().notRequired(),
    imageRatioType: create().notRequired(),
    uploadAIAvatar: create$1().notRequired().nullable(),
    extension: create().notRequired(),
    numOfImages: create().notRequired(),
    negativePrompt: create().notRequired(),
    numInferenceSteps: create().notRequired(),
    tiling: create().notRequired(),
    guidanceScale: create().notRequired(),
    promptMagic: create().notRequired()
  };
  const validationSchema = openAIPresenterBox === true ? tab2ValidationSchema : activeTab2 === "tab3" ? tab3ValidationSchema : tab4ValidationSchema;
  const formik = useFormik({
    initialValues: {
      audio: null,
      textarea: "",
      aiText: "",
      image: null,
      source: "",
      providerType: "",
      providerVoiceId: "",
      aiTextAvatar: "",
      ai: false,
      tab: "",
      imageRatioType: "",
      uploadAIAvatar: null,
      extension: "",
      numOfImages: "",
      negativePrompt: "",
      numInferenceSteps: "",
      tiling: true,
      guidanceScale: "",
      promptMagic: false
    },
    validationSchema: create$3(validationSchema),
    validateOnChange: false,
    onSubmit: (values, actions) => FormikFormData(values, actions, dispatch)
  });
  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setOpenAIPresenterBox(false);
      setActiveTab(tab);
    }
  };
  const toggleTab2 = (tab2) => {
    if (activeTab2 !== tab2) {
      formik.values.tab = tab2;
      setActiveTab2(tab2);
    }
  };
  const handleAvatarClick = (image) => {
    setActive(image);
    if (image.avatarObject) {
      formik.values.ai = false;
      formik.values.image = image.avatarObject;
      formik.values.source = "";
      formik.getFieldProps("image");
    } else if (typeof image.aiAvatar === "string") {
      formik.values.ai = true;
      formik.values.source = image.aiAvatar;
      formik.values.image = null;
      formik.getFieldProps("source");
    } else if (typeof image.avatar === "string") {
      formik.values.ai = false;
      formik.values.image = null;
      formik.values.source = image.avatar;
      formik.getFieldProps("source");
    }
  };
  const handlePresenterClick = () => {
    presenterInputRef.current.click();
  };
  const handlePresenterChange = (event) => {
    let selectedFile = event.target.files[0];
    setActive(URL.createObjectURL(selectedFile));
    if (presenter.length) {
      setPresenter([...presenter, { id: presenter.length + 1, avatar: URL.createObjectURL(selectedFile), avatarObject: selectedFile }]);
    } else {
      setPresenter([{ id: presenter.length + 1, avatar: URL.createObjectURL(selectedFile), avatarObject: selectedFile }]);
    }
  };
  const handleUploadAIPresenterChange = (event) => {
    if (event !== "delete") {
      let selectedFile = event.target.files[0];
      const imgName = selectedFile.name;
      setImageName(imgName);
      const imageExtension = imgName.substring(imgName.lastIndexOf(".") + 1);
      formik.values.extension = imageExtension;
      formik.values.uploadAIAvatar = selectedFile;
      setUploadAIPresenter({ id: 1, aiUploadAvatar: URL.createObjectURL(selectedFile), aiUploadAvatarObject: selectedFile });
    } else {
      setUploadAIPresenter(null);
      setImageName(null);
      formik.values.extension = "";
      formik.values.uploadAIAvatar = null;
    }
  };
  const handleAIPresenterOpen = () => {
    var _a, _b;
    if (((_b = (_a = getAvatar == null ? void 0 : getAvatar.avatars) == null ? void 0 : _a.generations_by_pk) == null ? void 0 : _b.generated_images.length) > 0) {
      dispatch(emptyGetAvatar);
    }
    setOpenAIPresenterBox(!openAIPresenterBox);
  };
  return /* @__PURE__ */ jsxs(Container, { className: "parent-card-2 dark-theme-parent-card-2", children: [
    /* @__PURE__ */ jsxs("div", { className: "breadCrumb-custom dark-breadCrumb-custom", children: [
      /* @__PURE__ */ jsx(PictureToVideoSvg, {}),
      /* @__PURE__ */ jsx(BreadCrumbs, { title: "Picture To Video", data: [{ title: "Create Video", link: "/create-video" }, { title: "Picture to Video" }] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "inner-parent-child", children: /* @__PURE__ */ jsxs(Form, { id: "form1", onSubmit: formik.handleSubmit, children: [
      /* @__PURE__ */ jsxs("div", { className: "custom-card-1 dark-custom-card-1", children: [
        /* @__PURE__ */ jsx(Nav, { tabs: true, className: "navlink-1 dark-navlink-1", children: /* @__PURE__ */ jsxs("div", { className: "navlink-buttons d-flex text-right gap-1", children: [
          /* @__PURE__ */ jsxs(
            NavLink,
            {
              onClick: () => toggleTab("tab1"),
              to: "/upload-text",
              className: activeTab === "tab1" ? "custom-button-active" : "custom-button-not-active",
              children: [
                /* @__PURE__ */ jsx(PresenterSvg, { color: activeTab === "tab1" ? "#ffffff" : "#177ffa" }),
                /* @__PURE__ */ jsx(CardText, { children: "Choose a presenter" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            NavLink,
            {
              to: "/upload-audio",
              className: activeTab === "tab2" ? "custom-button-active" : "custom-button-not-active",
              onClick: () => toggleTab("tab2"),
              children: [
                /* @__PURE__ */ jsx(AIPresenterSvg, { color: activeTab === "tab2" ? "#ffffff" : "#177ffa" }),
                /* @__PURE__ */ jsx(CardText, { children: "Choose an AI presenter" })
              ]
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxs(TabContent, { activeTab, children: [
          /* @__PURE__ */ jsx(TabPane, { tabId: "tab1", children: /* @__PURE__ */ jsxs("div", { className: "position-relative w-100", children: [
            /* @__PURE__ */ jsxs("div", { className: "d-flex flex-nowrap overflow-hidden gap-2 justify-content-start", children: [
              /* @__PURE__ */ jsx("div", { className: "image-item-container dark-image-item-container", children: /* @__PURE__ */ jsxs(
                "div",
                {
                  onClick: handlePresenterClick,
                  className: "image-item d-flex justify-content-center flex-column shadow-sm cursor-pointer hover:shadow-lg align-content-center align-items-center shadow-4",
                  style: { minWidth: "105px", minHeight: "105px", gap: "1px", backgroundColor: "#177ffa" },
                  children: [
                    /* @__PURE__ */ jsx(Plus$1, { className: "text-white mt-1", style: { width: "15px" } }),
                    /* @__PURE__ */ jsx(CardText, { className: "text-white font-small-4", children: "ADD" }),
                    /* @__PURE__ */ jsx(
                      Input,
                      {
                        type: "file",
                        name: "avatar",
                        className: `d-none ${active !== null ? `selected` : ``}`,
                        innerRef: presenterInputRef,
                        onChange: handlePresenterChange,
                        invalid: formik.touched.image && formik.errors.image ? true : false
                      }
                    )
                  ]
                }
              ) }),
              presenter.length > 0 && presenter.map((image, index) => {
                return /* @__PURE__ */ jsx("div", { className: "image-item-container dark-image-item-container", children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    onClick: () => handleAvatarClick(image),
                    className: `image-item object-fit-contain shadow-4 cursor-pointer ${active == image ? "selected" : ""}`,
                    style: { width: "105px", height: "105px" },
                    src: image.avatar,
                    alt: "avatar"
                  }
                ) }, index);
              })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "arrow-button", children: /* @__PURE__ */ jsx(Button, { type: "button", color: "none", className: "p-0", children: /* @__PURE__ */ jsx(PictureToVideoArrowSvg, {}) }) }),
            formik.touched.image && formik.errors.image ? /* @__PURE__ */ jsx(FormFeedback, { type: "invalid", children: formik.errors.image }) : null
          ] }) }),
          /* @__PURE__ */ jsxs(TabPane, { tabId: "tab2", children: [
            /* @__PURE__ */ jsxs(CardBody, { className: "overflow-hidden d-flex flex-nowrap gap-2 justify-content-left align-items-center position-relative", children: [
              /* @__PURE__ */ jsx("div", { className: "image-item-container dark-image-item-container", children: /* @__PURE__ */ jsxs(
                Button,
                {
                  type: "button",
                  onClick: () => handleAIPresenterOpen(),
                  className: "image-item d-flex justify-content-center flex-column shadow-sm cursor-pointer hover:shadow-lg align-content-center align-items-center shadow-4",
                  style: { minWidth: "105px", minHeight: "105px", gap: "1px", backgroundColor: "#177ffa !important" },
                  invalid: formik.touched.source && formik.errors.source ? true : false,
                  children: [
                    /* @__PURE__ */ jsx(Plus$1, { className: "text-white w-25" }),
                    /* @__PURE__ */ jsx(CardText, { className: "text-white", children: "Create" })
                  ]
                }
              ) }),
              aiPresenter.length > 0 && aiPresenter.map((image, index) => {
                return /* @__PURE__ */ jsx("div", { onClick: formik.handleChange("avatar"), className: "image-item-container dark-image-item-container position-relative", children: /* @__PURE__ */ jsx("img", { onClick: () => handleAvatarClick(image), className: `image-item shadow-4 cursor-pointer object-fit-contain ${active == image ? "selected" : ""}`, style: { width: "105px", height: "105px" }, src: image.aiAvatar, alt: "avatar" }) }, index);
              }),
              /* @__PURE__ */ jsx("div", { className: "arrow-button", children: /* @__PURE__ */ jsx(Button, { type: "button", color: "none", className: "p-0", children: /* @__PURE__ */ jsx(PictureToVideoArrowSvg, {}) }) }),
              formik.touched.source && formik.errors.source ? /* @__PURE__ */ jsx(FormFeedback, { type: "invalid", children: formik.errors.source }) : null
            ] }),
            openAIPresenterBox === true && activeTab === "tab2" ? /* @__PURE__ */ jsxs("div", { className: "custom-card-5 dark-theme-custom-card-5", children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx("span", { className: "font-medium-2", children: "Generate your own AI presenter" }) }),
              postAvatarLoading === "pending" || avatarCreationLoader === true || getAvatarLoading === "pending" ? /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx("div", { style: { width: "100%", display: "flex", flexDirection: "flex-row", justifyContent: "center", alignItems: "center", gap: "20px" }, children: /* @__PURE__ */ jsx(Spinner$1, { style: { width: "5rem", height: "5rem" } }) }) }) : /* @__PURE__ */ jsxs("div", { className: "", children: [
                /* @__PURE__ */ jsxs(Col, { children: [
                  /* @__PURE__ */ jsx(Row, { md: "12", sm: "12", children: /* @__PURE__ */ jsxs(Col, { md: "12", sm: "12", children: [
                    /* @__PURE__ */ jsx(Label, { className: "form-label", for: "inputFile", children: "What describe best for you to create" }),
                    /* @__PURE__ */ jsx(InputGroup, { children: /* @__PURE__ */ jsx(
                      Input,
                      {
                        id: "aiTextAvatar",
                        name: "aiTextAvatar",
                        ...formik.getFieldProps("aiTextAvatar"),
                        onChange: formik.handleChange("aiTextAvatar"),
                        type: "text",
                        placeholder: "Describe here",
                        invalid: formik.touched.aiTextAvatar && formik.errors.aiTextAvatar ? true : false
                      }
                    ) }),
                    formik.touched.aiTextAvatar && formik.errors.aiTextAvatar ? /* @__PURE__ */ jsx(FormFeedback, { type: "invalid", children: formik.errors.aiTextAvatar }) : null
                  ] }) }),
                  /* @__PURE__ */ jsxs(Row, { md: "8", sm: "12", children: [
                    /* @__PURE__ */ jsx(Col, { md: "6", sm: "12", children: /* @__PURE__ */ jsxs("div", { className: "w-full mb-1 mt-1", children: [
                      /* @__PURE__ */ jsx(Label, { className: "form-label", for: "inputFile", children: "Negative Prompt" }),
                      /* @__PURE__ */ jsx(
                        Input,
                        {
                          id: "negativePrompt",
                          name: "negativePrompt",
                          ...formik.getFieldProps("negativePrompt"),
                          onChange: formik.handleChange("negativePrompt"),
                          type: "text",
                          placeholder: "Used for and helps in image generation",
                          invalid: formik.touched.negativePrompt && formik.errors.negativePrompt ? true : false
                        }
                      ),
                      formik.touched.negativePrompt && formik.errors.negativePrompt ? /* @__PURE__ */ jsx(FormFeedback, { type: "invalid", children: formik.errors.negativePrompt }) : null
                    ] }) }),
                    /* @__PURE__ */ jsx(Col, { md: "6", sm: "12", children: /* @__PURE__ */ jsx(VideoDimensions, { formik }) })
                  ] }),
                  /* @__PURE__ */ jsxs(Row, { md: "8", sm: "12", children: [
                    /* @__PURE__ */ jsx(Col, { md: "6", sm: "12", children: /* @__PURE__ */ jsxs(InputGroup, { children: [
                      /* @__PURE__ */ jsx(Label, { className: "form-label", children: "Upload your own photo (optional)" }),
                      /* @__PURE__ */ jsx(
                        Input,
                        {
                          type: "file",
                          id: "inputFile",
                          name: "fileInput",
                          hidden: true,
                          inputMode: "none",
                          innerRef: aiPresenterInputRef,
                          onChange: handleUploadAIPresenterChange
                        }
                      ),
                      /* @__PURE__ */ jsx("div", { className: "custom-upload-input dark-custom-upload-input", children: /* @__PURE__ */ jsxs("p", { className: "text dark-text", children: [
                        imageName !== null ? /* @__PURE__ */ jsx("span", { onClick: () => handleUploadAIPresenterChange("delete"), style: { cursor: "pointer" }, children: /* @__PURE__ */ jsx(CancelSvg, {}) }) : null,
                        /* @__PURE__ */ jsx(Label, { className: "form-label position-absolute", for: "inputFile", style: { top: "20px", right: "30px", cursor: "pointer" }, children: /* @__PURE__ */ jsx(UploadSvg, {}) }),
                        /* @__PURE__ */ jsx("span", { children: imageName !== null ? imageName : "Choose Upload" })
                      ] }) })
                    ] }) }),
                    /* @__PURE__ */ jsx(Col, { md: "6", sm: "12", children: /* @__PURE__ */ jsx(NumberOfImages, { formik }) })
                  ] }),
                  /* @__PURE__ */ jsxs(Row, { md: "8", sm: "12", children: [
                    /* @__PURE__ */ jsx(Col, { md: "6", sm: "12", children: /* @__PURE__ */ jsx(NumeralInterferenceSteps, { formik }) }),
                    /* @__PURE__ */ jsx(Col, { md: "6", sm: "12", children: /* @__PURE__ */ jsx(GuidanceScale, { formik }) })
                  ] }),
                  /* @__PURE__ */ jsxs(Row, { md: "8", sm: "12", children: [
                    /* @__PURE__ */ jsxs(Col, { md: "6", sm: "12", children: [
                      /* @__PURE__ */ jsx(Label, { for: "switch-primary", className: "form-check-label mb-50", children: "Tiling" }),
                      /* @__PURE__ */ jsxs("div", { className: "form-switch form-check-primary", children: [
                        /* @__PURE__ */ jsx(
                          Input,
                          {
                            type: "switch",
                            id: "switch-primary",
                            name: "primary",
                            ...formik.getFieldProps("tiling"),
                            onChange: formik.handleChange("tiling"),
                            defaultChecked: formik.values.tiling,
                            invalid: formik.touched.tiling && formik.errors.tiling ? true : false
                          }
                        ),
                        formik.touched.tiling && formik.errors.tiling ? /* @__PURE__ */ jsx(FormFeedback, { type: "invalid", children: formik.errors.tiling }) : null
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs(Col, { md: "6", sm: "12", children: [
                      /* @__PURE__ */ jsx(Label, { for: "switch-primary", className: "form-check-label mb-50", children: "Prompt Magic" }),
                      /* @__PURE__ */ jsxs("div", { className: "form-switch form-check-primary", children: [
                        /* @__PURE__ */ jsx(
                          Input,
                          {
                            type: "switch",
                            id: "switch-primary",
                            name: "primary",
                            ...formik.getFieldProps("promptMagic"),
                            onChange: formik.handleChange("promptMagic"),
                            defaultChecked: formik.values.promptMagic,
                            invalid: formik.touched.tiling && formik.errors.tiling ? true : false
                          }
                        ),
                        formik.touched.promptMagic && formik.errors.promptMagic ? /* @__PURE__ */ jsx(FormFeedback, { type: "invalid", children: formik.errors.promptMagic }) : null
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "d-flex gap-1", children: [
                  /* @__PURE__ */ jsx(Button, { onClick: () => handleAIPresenterOpen(), type: "button", color: "danger", className: "d-flex gap-1 flex-nowrap mt-1", style: { padding: "15px 30px", borderRadius: "20px" }, children: "Cancel" }),
                  /* @__PURE__ */ jsxs(Button, { disabled: loader === true ? true : false, form: "form1", type: "submit", color: "primary", className: "d-flex gap-1 flex-nowrap mt-1", style: { padding: "15px 30px", borderRadius: "20px" }, children: [
                    /* @__PURE__ */ jsx("span", { children: "Generate" }),
                    loader === true ? /* @__PURE__ */ jsx(
                      Spinner$1,
                      {
                        style: {
                          height: "1rem",
                          width: "1rem"
                        }
                      }
                    ) : null
                  ] })
                ] })
              ] })
            ] }) : null
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "custom-card-2 dark-custom-card-2", children: /* @__PURE__ */ jsxs(Row, { children: [
        /* @__PURE__ */ jsx(Col, { lg: 6, children: /* @__PURE__ */ jsxs("div", { className: "custom-card-6 dark-custom-card-6", children: [
          /* @__PURE__ */ jsx(Nav, { tabs: true, className: "navlink-2 dark-navlink-2", children: /* @__PURE__ */ jsxs("div", { className: "navlink-buttons d-flex text-right gap-1", children: [
            /* @__PURE__ */ jsxs(
              NavLink,
              {
                onClick: () => toggleTab2("tab3"),
                to: "/upload-text",
                className: activeTab2 === "tab3" ? "custom-button-active" : "custom-button-not-active",
                children: [
                  /* @__PURE__ */ jsx(TextSvg, { color: activeTab2 === "tab3" ? "#ffffff" : "#177ffa" }),
                  /* @__PURE__ */ jsx(CardText, { children: "Type Your Script" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              NavLink,
              {
                to: "/upload-audio",
                className: activeTab2 === "tab4" ? "custom-button-active" : "custom-button-not-active",
                onClick: () => toggleTab2("tab4"),
                children: [
                  /* @__PURE__ */ jsx(VoiceSvg, { color: activeTab2 === "tab4" ? "#ffffff" : "#177ffa" }),
                  /* @__PURE__ */ jsx(CardText, { children: "Upload Voice Audio" })
                ]
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxs(TabContent, { activeTab: activeTab2, children: [
            /* @__PURE__ */ jsxs(TabPane, { tabId: "tab3", children: [
              /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
                /* @__PURE__ */ jsx(TextArea, { formik }),
                /* @__PURE__ */ jsx(Language, { formik, language, languageName, setLanguageName }),
                /* @__PURE__ */ jsx(Voices, { formik, voices: filterObject })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "py-1", children: /* @__PURE__ */ jsx(CardBody, { children: /* @__PURE__ */ jsxs(Button, { disabled: loader === true ? true : false, form: "form1", type: "submit", color: "primary", className: "d-flex gap-1 flex-nowrap mt-1", style: { padding: "15px 30px", borderRadius: "20px" }, children: [
                /* @__PURE__ */ jsx("span", { children: "Generate Video" }),
                loader === true ? /* @__PURE__ */ jsx(
                  Spinner$1,
                  {
                    style: {
                      height: "1rem",
                      width: "1rem"
                    }
                  }
                ) : null
              ] }) }) })
            ] }),
            /* @__PURE__ */ jsxs(TabPane, { tabId: "tab4", children: [
              /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(AudioInput, { formik }) }),
              /* @__PURE__ */ jsx("div", { className: "py-1", children: /* @__PURE__ */ jsx(CardBody, { children: /* @__PURE__ */ jsxs(Button, { disabled: loader === true ? true : false, form: "form1", type: "submit", color: "primary", className: "d-flex gap-1 flex-nowrap mt-1", style: { padding: "15px 30px", borderRadius: "20px" }, children: [
                /* @__PURE__ */ jsx("span", { children: "Generate Video" }),
                loader === true ? /* @__PURE__ */ jsx(
                  Spinner$1,
                  {
                    style: {
                      height: "1rem",
                      width: "1rem"
                    }
                  }
                ) : null
              ] }) }) })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(Col, { lg: 6, children: /* @__PURE__ */ jsx("div", { className: "custom-card-6 dark-custom-card-6", children: /* @__PURE__ */ jsx(ShowVideoModal, { show, setShow, setCreatingLoader: setLoader, videoId }) }) })
      ] }) })
    ] }) })
  ] });
};
export {
  PictureToVideo as default
};
