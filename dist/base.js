"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UniqueIndex = void 0;
var braftUniqueIndex = 0;
var UniqueIndex = function UniqueIndex() {
  return braftUniqueIndex += 1;
};
exports.UniqueIndex = UniqueIndex;