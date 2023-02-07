
    (function(modules) {
      function require(moduleId) {
        const [fn, mapping] = modules[moduleId]
        function localRequire(name) {
          return require(mapping[name])
        }
        const module = {exports: {}}
        fn(localRequire, module, module.exports)
        return module.exports
      }
      require('src/entry.js')
    })({'src/entry.js': [
      function(require, module, exports) {
        "use strict";

var _message = _interopRequireDefault(require("./message.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Demo = /*#__PURE__*/function () {
  function Demo(name, age) {
    _classCallCheck(this, Demo);
    this.name = name;
    this.age = age;
  }
  _createClass(Demo, [{
    key: "apply",
    value: function apply() {
      console.log('this.apply', this.apply);
    }
  }]);
  return Demo;
}();
new Demo('小高', 23);
console.log('message', _message["default"]);
      },
      {"./message.js":"src/message.js"},
    ],'src/message.js': [
      function(require, module, exports) {
        "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _name = require("./name.js");
var _default = "hello ".concat(_name.name, "!");
exports["default"] = _default;
      },
      {"./name.js":"src/name.js"},
    ],'src/name.js': [
      function(require, module, exports) {
        "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.name = void 0;
var name = 'hello';
exports.name = name;
      },
      undefined,
    ],})
  