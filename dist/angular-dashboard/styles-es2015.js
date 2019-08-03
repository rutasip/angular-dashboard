(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--13-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* Global Styles */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nhtml, input, textarea, button {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.43;\n  letter-spacing: 0.01071em;\n}\nbody {\n  color: rgba(0, 0, 0, 0.87);\n  background-color: #eceff4;\n}\na {\n  text-decoration: none;\n}\nb,\nstrong,\ntable th {\n  font-weight: 500;\n}\nh3 {\n  font-weight: 400;\n}\n.box,\n.messenger {\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px 0px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 2px 1px -1px;\n  border-radius: 5px;\n  overflow: hidden;\n  max-width: 400px;\n  margin-bottom: 20px;\n  background-color: #fff;\n}\n.box-red {\n  background-color: #fb434f;\n}\n.box-gray {\n  background-color: #697a84;\n}\n.box-blue {\n  background-color: #02a8fe;\n}\n.box-black {\n  background-color: #2e2c3a;\n}\n/* Box flash on hover */\n.box:hover,\n.messenger:hover {\n  opacity: 1;\n  -webkit-animation: flash 1.5s;\n  animation: flash 1.5s;\n}\n@-webkit-keyframes flash {\n  0% {\n    opacity: 0.9;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes flash {\n  0% {\n    opacity: 0.9;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.hidden {\n  display: none;\n}\n.overlay {\n  display: none;\n  position: fixed;\n  z-index: 10;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n.wrapper {\n  height: 100%;\n}\n/* Avatar */\n.round-image {\n  height: 50px;\n  max-height: 40px;\n  max-width: 40px;\n  border-radius: 50%;\n}\n/* CSS Sprites */\n.gear-icon,\n.bug-icon,\n.graph-icon,\n.project-icon,\n.send-icon,\n.docu-icon,\n.home-icon,\n.profile-icon,\n.chat-icon,\n.exchange-icon,\n.calendar-icon,\n.gallery-icon,\n.delete-icon {\n  background-image: url('icons-sprite.png');\n  background-repeat: no-repeat;\n  height: 40px;\n  width: 40px;\n}\n.gear-icon {\n  background-position: -335px -133px;\n}\n.bug-icon {\n  background-position: -166px -65px;\n}\n.graph-icon {\n  background-position: -98px -98px;\n}\n.project-icon {\n  background-position: -199px -167px;\n}\n.send-icon {\n  background-position: -197px -33px;\n}\n.docu-icon {\n  background-position: -132px 2px;\n}\n.home-icon {\n  background-position: -234px -202px;\n}\n.profile-icon {\n  background-position: 3px -66px;\n}\n.chat-icon {\n  background-position: -302px -269px;\n}\n.exchange-icon {\n  background-position: -372px -203px;\n}\n.calendar-icon {\n  background-position: -202px -66px;\n}\n.gallery-icon {\n  background-position: -304px -33px;\n}\n.delete-icon {\n  background-position: -98px -167px;\n}\n/* Buttons */\n.add-button-dark,\n.add-button-light {\n  border: none;\n  outline: none;\n  cursor: pointer;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.add-button-dark {\n  display: inline;\n  margin-right: 10px;\n}\n.add-button-dark:hover {\n  filter: brightness(90%);\n  -webkit-filter: brightness(90%);\n  -webkit-transition: 0.2s ease-out;\n  transition: 0.2s ease-out;\n}\n.add-button-dark p {\n  font-size: 13px;\n  color: #fff;\n  padding: 9px;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1dGEvRG9jdW1lbnRzL3Zpc21hL2RlbGV0ZS9zcmMvc3R5bGVzLnNjc3MiLCJzcmMvc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0JBQUE7QUFFQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUNBSjtBREdBO0VBQ0ksaUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FDQUo7QURHQTtFQUNJLDBCQUFBO0VBQ0EseUJBQUE7QUNBSjtBREdBO0VBQ0kscUJBQUE7QUNBSjtBREdBOzs7RUFHSSxnQkFBQTtBQ0FKO0FER0E7RUFDSSxnQkFBQTtBQ0FKO0FER0E7O0VBRUkseUhBQUE7RUFFQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FDREo7QURJQTtFQUNJLHlCQUFBO0FDREo7QURJQTtFQUNJLHlCQUFBO0FDREo7QURJQTtFQUNJLHlCQUFBO0FDREo7QURJQTtFQUNJLHlCQUFBO0FDREo7QURJQSx1QkFBQTtBQUNBOztFQUVJLFVBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0FDREo7QURJQTtFQUNJO0lBQ0ksWUFBQTtFQ0ROO0VER0U7SUFDSSxVQUFBO0VDRE47QUFDRjtBREdBO0VBQ0k7SUFDSSxZQUFBO0VDRE47RURHRTtJQUNJLFVBQUE7RUNETjtBQUNGO0FESUE7RUFDSSxhQUFBO0FDRko7QURLQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esb0NBQUE7QUNGSjtBREtBO0VBQ0ksWUFBQTtBQ0ZKO0FES0EsV0FBQTtBQUNBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDRko7QURLQSxnQkFBQTtBQUNBOzs7Ozs7Ozs7Ozs7O0VBYUkseUNBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDRko7QURLQTtFQUNJLGtDQUFBO0FDRko7QURLQTtFQUNJLGlDQUFBO0FDRko7QURLQTtFQUNJLGdDQUFBO0FDRko7QURLQTtFQUNJLGtDQUFBO0FDRko7QURLQTtFQUNJLGlDQUFBO0FDRko7QURLQTtFQUNJLCtCQUFBO0FDRko7QURLQTtFQUNJLGtDQUFBO0FDRko7QURLQTtFQUNJLDhCQUFBO0FDRko7QURLQTtFQUNJLGtDQUFBO0FDRko7QURLQTtFQUNJLGtDQUFBO0FDRko7QURLQTtFQUNJLGlDQUFBO0FDRko7QURLQTtFQUNJLGlDQUFBO0FDRko7QURLQTtFQUNJLGlDQUFBO0FDRko7QURLQSxZQUFBO0FBQ0E7O0VBRUUsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNGRjtBREtBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FDRko7QURHSTtFQUNFLHVCQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0FDRE47QURLQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUNGRiIsImZpbGUiOiJzcmMvc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBHbG9iYWwgU3R5bGVzICovXG5cbioge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwsIGlucHV0LCB0ZXh0YXJlYSwgYnV0dG9uIHtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMS40MztcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMTA3MWVtO1xufVxuXG5ib2R5IHtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlZmY0O1xufVxuXG5hIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmIsXG5zdHJvbmcsXG50YWJsZSB0aCB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuaDMge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5ib3gsXG4ubWVzc2VuZ2VyIHtcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IDFweCAzcHggMHB4LFxuICAgIHJnYmEoMCwgMCwgMCwgMC4xNCkgMHB4IDFweCAxcHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMTIpIDBweCAycHggMXB4IC0xcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5ib3gtcmVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmI0MzRmO1xufVxuXG4uYm94LWdyYXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2OTdhODQ7XG59XG5cbi5ib3gtYmx1ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAyYThmZTtcbn1cblxuLmJveC1ibGFjayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJlMmMzYTtcbn1cblxuLyogQm94IGZsYXNoIG9uIGhvdmVyICovXG4uYm94OmhvdmVyLFxuLm1lc3Nlbmdlcjpob3ZlciB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmxhc2ggMS41cztcbiAgICBhbmltYXRpb246IGZsYXNoIDEuNXM7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBmbGFzaCB7XG4gICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwLjk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn1cbkBrZXlmcmFtZXMgZmxhc2gge1xuICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMC45O1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59XG5cbi5oaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5vdmVybGF5e1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbi53cmFwcGVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi8qIEF2YXRhciAqL1xuLnJvdW5kLWltYWdlIHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbWF4LWhlaWdodDogNDBweDtcbiAgICBtYXgtd2lkdGg6IDQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4vKiBDU1MgU3ByaXRlcyAqL1xuLmdlYXItaWNvbixcbi5idWctaWNvbixcbi5ncmFwaC1pY29uLFxuLnByb2plY3QtaWNvbixcbi5zZW5kLWljb24sXG4uZG9jdS1pY29uLFxuLmhvbWUtaWNvbixcbi5wcm9maWxlLWljb24sXG4uY2hhdC1pY29uLFxuLmV4Y2hhbmdlLWljb24sXG4uY2FsZW5kYXItaWNvbixcbi5nYWxsZXJ5LWljb24sXG4uZGVsZXRlLWljb24ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnYXNzZXRzL2ljb25zLXNwcml0ZS5wbmcnKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogNDBweDtcbn1cblxuLmdlYXItaWNvbiB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMzNXB4IC0xMzNweDtcbn1cblxuLmJ1Zy1pY29uIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTY2cHggLTY1cHg7XG59XG5cbi5ncmFwaC1pY29uIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOThweCAtOThweDtcbn1cblxuLnByb2plY3QtaWNvbiB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE5OXB4IC0xNjdweDtcbn1cblxuLnNlbmQtaWNvbiB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE5N3B4IC0zM3B4O1xufVxuXG4uZG9jdS1pY29uIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTMycHggMnB4O1xufVxuXG4uaG9tZS1pY29uIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjM0cHggLTIwMnB4O1xufVxuXG4ucHJvZmlsZS1pY29uIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAzcHggLTY2cHg7XG59XG5cbi5jaGF0LWljb24ge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0zMDJweCAtMjY5cHg7XG59XG5cbi5leGNoYW5nZS1pY29uIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzcycHggLTIwM3B4O1xufVxuXG4uY2FsZW5kYXItaWNvbiB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIwMnB4IC02NnB4O1xufVxuXG4uZ2FsbGVyeS1pY29uIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzA0cHggLTMzcHg7XG59XG5cbi5kZWxldGUtaWNvbiB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTk4cHggLTE2N3B4O1xufVxuXG4vKiBCdXR0b25zICovXG4uYWRkLWJ1dHRvbi1kYXJrLFxuLmFkZC1idXR0b24tbGlnaHQge1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5hZGQtYnV0dG9uLWRhcmsge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgJjpob3ZlciB7XG4gICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoOTAlKTtcbiAgICAgIC13ZWJraXQtZmlsdGVyOiBicmlnaHRuZXNzKDkwJSk7XG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnMgZWFzZS1vdXQ7XG4gICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2Utb3V0O1xuICAgIH1cbiAgfVxuXG4uYWRkLWJ1dHRvbi1kYXJrIHAge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA5cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59IiwiLyogR2xvYmFsIFN0eWxlcyAqL1xuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaHRtbCwgaW5wdXQsIHRleHRhcmVhLCBidXR0b24ge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS40MztcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDEwNzFlbTtcbn1cblxuYm9keSB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlZmY0O1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5iLFxuc3Ryb25nLFxudGFibGUgdGgge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5oMyB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5ib3gsXG4ubWVzc2VuZ2VyIHtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAxcHggM3B4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjE0KSAwcHggMXB4IDFweCAwcHgsIHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IDJweCAxcHggLTFweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4uYm94LXJlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYjQzNGY7XG59XG5cbi5ib3gtZ3JheSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2OTdhODQ7XG59XG5cbi5ib3gtYmx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMmE4ZmU7XG59XG5cbi5ib3gtYmxhY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmUyYzNhO1xufVxuXG4vKiBCb3ggZmxhc2ggb24gaG92ZXIgKi9cbi5ib3g6aG92ZXIsXG4ubWVzc2VuZ2VyOmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbiAgLXdlYmtpdC1hbmltYXRpb246IGZsYXNoIDEuNXM7XG4gIGFuaW1hdGlvbjogZmxhc2ggMS41cztcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGZsYXNoIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDAuOTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZsYXNoIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDAuOTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4uaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLm92ZXJsYXkge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbi53cmFwcGVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4vKiBBdmF0YXIgKi9cbi5yb3VuZC1pbWFnZSB7XG4gIGhlaWdodDogNTBweDtcbiAgbWF4LWhlaWdodDogNDBweDtcbiAgbWF4LXdpZHRoOiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi8qIENTUyBTcHJpdGVzICovXG4uZ2Vhci1pY29uLFxuLmJ1Zy1pY29uLFxuLmdyYXBoLWljb24sXG4ucHJvamVjdC1pY29uLFxuLnNlbmQtaWNvbixcbi5kb2N1LWljb24sXG4uaG9tZS1pY29uLFxuLnByb2ZpbGUtaWNvbixcbi5jaGF0LWljb24sXG4uZXhjaGFuZ2UtaWNvbixcbi5jYWxlbmRhci1pY29uLFxuLmdhbGxlcnktaWNvbixcbi5kZWxldGUtaWNvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImFzc2V0cy9pY29ucy1zcHJpdGUucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xufVxuXG4uZ2Vhci1pY29uIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMzNXB4IC0xMzNweDtcbn1cblxuLmJ1Zy1pY29uIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2NnB4IC02NXB4O1xufVxuXG4uZ3JhcGgtaWNvbiB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IC05OHB4IC05OHB4O1xufVxuXG4ucHJvamVjdC1pY29uIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE5OXB4IC0xNjdweDtcbn1cblxuLnNlbmQtaWNvbiB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xOTdweCAtMzNweDtcbn1cblxuLmRvY3UtaWNvbiB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xMzJweCAycHg7XG59XG5cbi5ob21lLWljb24ge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjM0cHggLTIwMnB4O1xufVxuXG4ucHJvZmlsZS1pY29uIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogM3B4IC02NnB4O1xufVxuXG4uY2hhdC1pY29uIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMwMnB4IC0yNjlweDtcbn1cblxuLmV4Y2hhbmdlLWljb24ge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzcycHggLTIwM3B4O1xufVxuXG4uY2FsZW5kYXItaWNvbiB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0yMDJweCAtNjZweDtcbn1cblxuLmdhbGxlcnktaWNvbiB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0zMDRweCAtMzNweDtcbn1cblxuLmRlbGV0ZS1pY29uIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTk4cHggLTE2N3B4O1xufVxuXG4vKiBCdXR0b25zICovXG4uYWRkLWJ1dHRvbi1kYXJrLFxuLmFkZC1idXR0b24tbGlnaHQge1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5hZGQtYnV0dG9uLWRhcmsge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5hZGQtYnV0dG9uLWRhcms6aG92ZXIge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoOTAlKTtcbiAgLXdlYmtpdC1maWx0ZXI6IGJyaWdodG5lc3MoOTAlKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzIGVhc2Utb3V0O1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2Utb3V0O1xufVxuXG4uYWRkLWJ1dHRvbi1kYXJrIHAge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA5cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59Il19 */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--13-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ruta/Documents/visma/delete/src/styles.scss */"./src/styles.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map