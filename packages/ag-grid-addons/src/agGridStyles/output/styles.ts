export const agStyles = String.raw`/**
 ****************************
 * Generic Styles
 ****************************
*/
ag-grid, ag-grid-angular, ag-grid-ng2, ag-grid-polymer, ag-grid-aurelia {
  display: block;
}

.ag-hidden {
  display: none !important;
}

.ag-invisible {
  visibility: hidden !important;
}

.ag-drag-handle {
  cursor: -webkit-grab;
  cursor: grab;
}

.ag-column-drop-wrapper {
  display: flex;
}

.ag-column-drop-horizontal-half-width {
  display: inline-block;
  width: 50% !important;
}

.ag-unselectable {
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.ag-selectable {
  -moz-user-select: text;
  -webkit-user-select: text;
  -ms-user-select: text;
  user-select: text;
}

.ag-tab {
  position: relative;
}

.ag-tab-guard {
  position: absolute;
  width: 0;
  height: 0;
  display: block;
}

.ag-select-agg-func-popup {
  position: absolute;
}

.ag-input-wrapper, .ag-picker-field-wrapper {
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  line-height: normal;
  position: relative;
}

.ag-shake-left-to-right {
  -webkit-animation-direction: alternate;
          animation-direction: alternate;
  -webkit-animation-duration: 0.2s;
          animation-duration: 0.2s;
  -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
  -webkit-animation-name: ag-shake-left-to-right;
          animation-name: ag-shake-left-to-right;
}

@-webkit-keyframes ag-shake-left-to-right {
  from {
    padding-left: 6px;
    padding-right: 2px;
  }
  to {
    padding-left: 2px;
    padding-right: 6px;
  }
}

@keyframes ag-shake-left-to-right {
  from {
    padding-left: 6px;
    padding-right: 2px;
  }
  to {
    padding-left: 2px;
    padding-right: 6px;
  }
}
.ag-root-wrapper {
  cursor: default;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.ag-root-wrapper.ag-layout-normal {
  height: 100%;
}

.ag-watermark {
  position: absolute;
  bottom: 20px;
  right: 25px;
  opacity: 0.5;
  transition: opacity 1s ease-out 3s;
}
.ag-watermark::before {
  content: "";
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+Cjxzdmcgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDIzNSA0MCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczpzZXJpZj0iaHR0cDovL3d3dy5zZXJpZi5jb20vIiBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjI7Ij4KICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KDAuNjM1NzIzLDAsMCwwLjYzNTcyMywtNDkyLjkyMSwtMzIzLjYwOCkiPgogICAgICAgIDxwYXRoIGQ9Ik0xMDk5LjQsNTQ5LjRMMTA5OS40LDUzNi45TDEwNzguMSw1MzYuOUwxMDY1LjYsNTQ5LjRMMTA5OS40LDU0OS40WiIgc3R5bGU9ImZpbGw6cmdiKDI0LDI5LDMxKTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgICAgICA8cGF0aCBkPSJNMTEyMy40LDUxOC40TDEwOTYuNyw1MTguNEwxMDg0LjEsNTMwLjlMMTEyMy40LDUzMC45TDExMjMuNCw1MTguNFoiIHN0eWxlPSJmaWxsOnJnYigyNCwyOSwzMSk7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICAgICAgPHBhdGggZD0iTTEwNTMuMiw1NjEuOUwxMDU5LjYsNTU1LjVMMTA4MS4yLDU1NS41TDEwODEuMiw1NjhMMTA1My4yLDU2OEwxMDUzLjIsNTYxLjlaIiBzdHlsZT0iZmlsbDpyZ2IoMjQsMjksMzEpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgICAgIDxwYXRoIGQ9Ik0xMDU3LjksNTQzLjNMMTA3MS43LDU0My4zTDEwODQuMyw1MzAuOEwxMDU3LjksNTMwLjhMMTA1Ny45LDU0My4zWiIgc3R5bGU9ImZpbGw6cmdiKDI0LDI5LDMxKTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgICAgICA8cGF0aCBkPSJNMTA0Mi44LDU2MS45TDEwNTMuMiw1NjEuOUwxMDY1LjYsNTQ5LjRMMTA0Mi44LDU0OS40TDEwNDIuOCw1NjEuOVoiIHN0eWxlPSJmaWxsOnJnYigyNCwyOSwzMSk7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICAgICAgPHBhdGggZD0iTTEwOTYuNyw1MTguNEwxMDkwLjMsNTI0LjhMMTA0OS41LDUyNC44TDEwNDkuNSw1MTIuM0wxMDk2LjcsNTEyLjNMMTA5Ni43LDUxOC40WiIgc3R5bGU9ImZpbGw6cmdiKDI0LDI5LDMxKTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgICAgICA8cGF0aCBkPSJNODI4LjYsNTU5LjdMODA5LDU1OS43TDgwNS42LDU2OC4xTDc5Nyw1NjguMUw4MTUuMSw1MjUuN0w4MjIuNiw1MjUuN0w4NDAuNyw1NjguMUw4MzIsNTY4LjFMODI4LjYsNTU5LjdaTTgyNS45LDU1M0w4MTguOCw1MzUuN0w4MTEuNyw1NTNMODI1LjksNTUzWiIgc3R5bGU9ImZpbGw6cmdiKDI0LDI5LDMxKTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgICAgICA8cGF0aCBkPSJNOTYwLjEsNTQxLjNDOTYyLjYsNTM3LjYgOTY4LjksNTM3LjIgOTcxLjUsNTM3LjJMOTcxLjUsNTQ0LjRDOTY4LjMsNTQ0LjQgOTY1LjEsNTQ0LjUgOTYzLjIsNTQ1LjlDOTYxLjMsNTQ3LjMgOTYwLjMsNTQ5LjIgOTYwLjMsNTUxLjVMOTYwLjMsNTY4LjFMOTUyLjUsNTY4LjFMOTUyLjUsNTM3LjJMOTYwLDUzNy4yTDk2MC4xLDU0MS4zWiIgc3R5bGU9ImZpbGw6cmdiKDI0LDI5LDMxKTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgICAgICA8cmVjdCB4PSI5NzUuOCIgeT0iNTM3LjIiIHdpZHRoPSI3LjgiIGhlaWdodD0iMzAuOSIgc3R5bGU9ImZpbGw6cmdiKDI0LDI5LDMxKTsiLz4KICAgICAgICA8cmVjdCB4PSI5NzUuOCIgeT0iNTIzLjQiIHdpZHRoPSI3LjgiIGhlaWdodD0iOS4yIiBzdHlsZT0iZmlsbDpyZ2IoMjQsMjksMzEpOyIvPgogICAgICAgIDxwYXRoIGQ9Ik0xMDIyLjMsNTIzLjRMMTAyMi4zLDU2OC4xTDEwMTQuOCw1NjguMUwxMDE0LjYsNTYzLjRDMTAxMy41LDU2NSAxMDEyLjEsNTY2LjMgMTAxMC40LDU2Ny4zQzEwMDguNyw1NjguMiAxMDA2LjYsNTY4LjcgMTAwNC4yLDU2OC43QzEwMDIuMSw1NjguNyAxMDAwLjEsNTY4LjMgOTk4LjQsNTY3LjZDOTk2LjYsNTY2LjggOTk1LDU2NS44IDk5My43LDU2NC40Qzk5Mi40LDU2MyA5OTEuMyw1NjEuMyA5OTAuNiw1NTkuNEM5ODkuOCw1NTcuNSA5ODkuNSw1NTUuMyA5ODkuNSw1NTIuOUM5ODkuNSw1NTAuNSA5ODkuOSw1NDguMyA5OTAuNiw1NDYuM0M5OTEuNCw1NDQuMyA5OTIuNCw1NDIuNiA5OTMuNyw1NDEuMkM5OTUsNTM5LjggOTk2LjYsNTM4LjcgOTk4LjQsNTM3LjlDMTAwMC4yLDUzNy4xIDEwMDIuMSw1MzYuNyAxMDA0LjIsNTM2LjdDMTAwNi42LDUzNi43IDEwMDguNiw1MzcuMSAxMDEwLjMsNTM4QzEwMTIsNTM4LjkgMTAxMy40LDU0MC4xIDEwMTQuNSw1NDEuOEwxMDE0LjUsNTIzLjVMMTAyMi4zLDUyMy41TDEwMjIuMyw1MjMuNFpNMTAwNS45LDU2MkMxMDA4LjUsNTYyIDEwMTAuNSw1NjEuMSAxMDEyLjEsNTU5LjRDMTAxMy43LDU1Ny43IDEwMTQuNSw1NTUuNCAxMDE0LjUsNTUyLjZDMTAxNC41LDU0OS44IDEwMTMuNyw1NDcuNiAxMDEyLjEsNTQ1LjhDMTAxMC41LDU0NC4xIDEwMDguNSw1NDMuMiAxMDA1LjksNTQzLjJDMTAwMy40LDU0My4yIDEwMDEuMyw1NDQuMSA5OTkuOCw1NDUuOEM5OTguMiw1NDcuNSA5OTcuNCw1NDkuOCA5OTcuNCw1NTIuNkM5OTcuNCw1NTUuNCA5OTguMiw1NTcuNiA5OTkuOCw1NTkuM0MxMDAxLjQsNTYxLjEgMTAwMy40LDU2MiAxMDA1LjksNTYyIiBzdHlsZT0iZmlsbDpyZ2IoMjQsMjksMzEpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgICAgIDxwYXRoIGQ9Ik04ODUuOCw1NDQuMkw4NjYuNSw1NDQuMkw4NjYuNSw1NTAuOUw4NzcuNSw1NTAuOUM4NzcuMiw1NTQuMyA4NzUuOSw1NTYuOSA4NzMuNyw1NTlDODcxLjUsNTYxIDg2OC43LDU2MiA4NjUuMSw1NjJDODYzLjEsNTYyIDg2MS4yLDU2MS42IDg1OS42LDU2MC45Qzg1Ny45LDU2MC4yIDg1Ni41LDU1OS4yIDg1NS4zLDU1Ny44Qzg1NC4xLDU1Ni41IDg1My4yLDU1NC45IDg1Mi41LDU1M0M4NTEuOCw1NTEuMSA4NTEuNSw1NDkuMSA4NTEuNSw1NDYuOEM4NTEuNSw1NDQuNSA4NTEuOCw1NDIuNSA4NTIuNSw1NDAuNkM4NTMuMSw1MzguNyA4NTQuMSw1MzcuMiA4NTUuMyw1MzUuOEM4NTYuNSw1MzQuNSA4NTcuOSw1MzMuNSA4NTkuNiw1MzIuN0M4NjEuMyw1MzIgODYzLjEsNTMxLjYgODY1LjIsNTMxLjZDODY5LjQsNTMxLjYgODcyLjYsNTMyLjYgODc0LjgsNTM0LjZMODgwLDUyOS40Qzg3Ni4xLDUyNi40IDg3MS4xLDUyNC44IDg2NS4yLDUyNC44Qzg2MS45LDUyNC44IDg1OC45LDUyNS4zIDg1Ni4yLDUyNi40Qzg1My41LDUyNy41IDg1MS4yLDUyOC45IDg0OS4zLDUzMC44Qzg0Ny40LDUzMi43IDg0NS45LDUzNSA4NDQuOSw1MzcuN0M4NDMuOSw1NDAuNCA4NDMuNCw1NDMuNCA4NDMuNCw1NDYuNkM4NDMuNCw1NDkuOCA4NDMuOSw1NTIuOCA4NDUsNTU1LjVDODQ2LjEsNTU4LjIgODQ3LjUsNTYwLjUgODQ5LjQsNTYyLjRDODUxLjMsNTY0LjMgODUzLjYsNTY1LjggODU2LjMsNTY2LjhDODU5LDU2Ny45IDg2Miw1NjguNCA4NjUuMiw1NjguNEM4NjguNCw1NjguNCA4NzEuMyw1NjcuOSA4NzMuOSw1NjYuOEM4NzYuNSw1NjUuNyA4NzguNyw1NjQuMyA4ODAuNSw1NjIuNEM4ODIuMyw1NjAuNSA4ODMuNyw1NTguMiA4ODQuNyw1NTUuNUM4ODUuNyw1NTIuOCA4ODYuMiw1NDkuOCA4ODYuMiw1NDYuNkw4ODYuMiw1NDUuM0M4ODUuOSw1NDUuMSA4ODUuOCw1NDQuNiA4ODUuOCw1NDQuMiIgc3R5bGU9ImZpbGw6cmdiKDI0LDI5LDMxKTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgICAgICA8cGF0aCBkPSJNOTQ2LjgsNTQ0LjJMOTI3LjUsNTQ0LjJMOTI3LjUsNTUwLjlMOTM4LjUsNTUwLjlDOTM4LjIsNTU0LjMgOTM2LjksNTU2LjkgOTM0LjcsNTU5QzkzMi41LDU2MSA5MjkuNyw1NjIgOTI2LjEsNTYyQzkyNC4xLDU2MiA5MjIuMiw1NjEuNiA5MjAuNiw1NjAuOUM5MTguOSw1NjAuMiA5MTcuNSw1NTkuMiA5MTYuMyw1NTcuOEM5MTUuMSw1NTYuNSA5MTQuMiw1NTQuOSA5MTMuNSw1NTNDOTEyLjgsNTUxLjEgOTEyLjUsNTQ5LjEgOTEyLjUsNTQ2LjhDOTEyLjUsNTQ0LjUgOTEyLjgsNTQyLjUgOTEzLjUsNTQwLjZDOTE0LjEsNTM4LjcgOTE1LjEsNTM3LjIgOTE2LjMsNTM1LjhDOTE3LjUsNTM0LjUgOTE4LjksNTMzLjUgOTIwLjYsNTMyLjdDOTIyLjMsNTMyIDkyNC4xLDUzMS42IDkyNi4yLDUzMS42QzkzMC40LDUzMS42IDkzMy42LDUzMi42IDkzNS44LDUzNC42TDk0MSw1MjkuNEM5MzcuMSw1MjYuNCA5MzIuMSw1MjQuOCA5MjYuMiw1MjQuOEM5MjIuOSw1MjQuOCA5MTkuOSw1MjUuMyA5MTcuMiw1MjYuNEM5MTQuNSw1MjcuNSA5MTIuMiw1MjguOSA5MTAuMyw1MzAuOEM5MDguNCw1MzIuNyA5MDYuOSw1MzUgOTA1LjksNTM3LjdDOTA0LjksNTQwLjQgOTA0LjQsNTQzLjQgOTA0LjQsNTQ2LjZDOTA0LjQsNTQ5LjggOTA0LjksNTUyLjggOTA2LDU1NS41QzkwNy4xLDU1OC4yIDkwOC41LDU2MC41IDkxMC40LDU2Mi40QzkxMi4zLDU2NC4zIDkxNC42LDU2NS44IDkxNy4zLDU2Ni44QzkyMCw1NjcuOSA5MjMsNTY4LjQgOTI2LjIsNTY4LjRDOTI5LjQsNTY4LjQgOTMyLjMsNTY3LjkgOTM0LjksNTY2LjhDOTM3LjUsNTY1LjcgOTM5LjcsNTY0LjMgOTQxLjUsNTYyLjRDOTQzLjMsNTYwLjUgOTQ0LjcsNTU4LjIgOTQ1LjcsNTU1LjVDOTQ2LjcsNTUyLjggOTQ3LjIsNTQ5LjggOTQ3LjIsNTQ2LjZMOTQ3LjIsNTQ1LjNDOTQ2LjksNTQ1LjEgOTQ2LjgsNTQ0LjYgOTQ2LjgsNTQ0LjIiIHN0eWxlPSJmaWxsOnJnYigyNCwyOSwzMSk7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=);
  background-repeat: no-repeat;
  background-size: 170px 40px;
  display: block;
  height: 40px;
  width: 170px;
  opacity: 0.5;
}

.ag-watermark-text {
  opacity: 0.5;
  font-weight: bold;
  font-family: Impact, sans-serif;
  font-size: 19px;
  padding-left: 0.7rem;
}

.ag-root-wrapper-body {
  display: flex;
  flex-direction: row;
}
.ag-root-wrapper-body.ag-layout-normal {
  flex: 1 1 auto;
  height: 0;
  min-height: 0;
}

.ag-root {
  position: relative;
  display: flex;
  flex-direction: column;
}
.ag-root.ag-layout-normal, .ag-root.ag-layout-auto-height {
  overflow: hidden;
  flex: 1 1 auto;
  width: 0;
}
.ag-root.ag-layout-normal {
  height: 100%;
}

/**
 ****************************
 * Viewports
 ****************************
*/
.ag-header-viewport,
.ag-floating-top-viewport,
.ag-body-viewport,
.ag-center-cols-viewport,
.ag-floating-bottom-viewport,
.ag-body-horizontal-scroll-viewport,
.ag-virtual-list-viewport {
  position: relative;
  height: 100%;
  min-width: 0px;
  overflow: hidden;
  flex: 1 1 auto;
}

.ag-body-viewport {
  display: flex;
}
.ag-body-viewport.ag-layout-normal {
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.ag-center-cols-viewport {
  width: 100%;
  overflow-x: auto;
}

.ag-body-horizontal-scroll-viewport {
  overflow-x: scroll;
}

.ag-virtual-list-viewport {
  overflow: auto;
  width: 100%;
}

/**
 ****************************
 * Containers
 ****************************
*/
.ag-header-container,
.ag-floating-top-container,
.ag-body-container,
.ag-pinned-right-cols-container,
.ag-center-cols-container,
.ag-pinned-left-cols-container,
.ag-floating-bottom-container,
.ag-body-horizontal-scroll-container,
.ag-full-width-container,
.ag-floating-bottom-full-width-container,
.ag-virtual-list-container {
  position: relative;
}

.ag-header-container, .ag-floating-top-container, .ag-floating-bottom-container {
  height: 100%;
  white-space: nowrap;
}

.ag-center-cols-container {
  display: block;
}

.ag-pinned-right-cols-container {
  display: block;
}

.ag-body-horizontal-scroll-container {
  height: 100%;
}

.ag-full-width-container,
.ag-floating-top-full-width-container,
.ag-floating-bottom-full-width-container {
  position: absolute;
  top: 0px;
  left: 0px;
  pointer-events: none;
}

.ag-full-width-container {
  width: 100%;
}

.ag-floating-bottom-full-width-container, .ag-floating-top-full-width-container {
  display: inline-block;
  overflow: hidden;
  height: 100%;
  width: 100%;
}

.ag-virtual-list-container {
  overflow: hidden;
}

/**
 ****************************
 * Scrollers
 ****************************
*/
.ag-center-cols-clipper {
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  min-height: 100%;
  transform: translate3d(0, 0, 0);
}

.ag-body-horizontal-scroll {
  min-height: 0;
  min-width: 0;
  width: 100%;
  display: flex;
  position: relative;
}
.ag-body-horizontal-scroll.ag-scrollbar-invisible {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: none;
}
.ag-body-horizontal-scroll.ag-scrollbar-invisible.ag-scrollbar-scrolling, .ag-body-horizontal-scroll.ag-scrollbar-invisible.ag-scrollbar-active {
  pointer-events: all;
}

.ag-force-vertical-scroll {
  overflow-y: scroll !important;
}

.ag-horizontal-left-spacer, .ag-horizontal-right-spacer {
  height: 100%;
  min-width: 0;
  overflow-x: scroll;
}
.ag-horizontal-left-spacer.ag-scroller-corner, .ag-horizontal-right-spacer.ag-scroller-corner {
  overflow-x: hidden;
}

/**
 ****************************
 * Headers
 ****************************
*/
.ag-header, .ag-pinned-left-header, .ag-pinned-right-header {
  display: inline-block;
  overflow: hidden;
  position: relative;
}

.ag-header-cell-sortable {
  cursor: pointer;
}

.ag-header {
  display: flex;
  width: 100%;
  white-space: nowrap;
}

.ag-pinned-left-header {
  height: 100%;
}

.ag-pinned-right-header {
  height: 100%;
}

.ag-header-row {
  position: absolute;
  overflow: hidden;
}

.ag-header-cell {
  display: inline-flex;
  align-items: center;
  position: absolute;
  height: 100%;
  overflow: hidden;
}

.ag-header-cell.ag-header-active .ag-header-cell-menu-button {
  opacity: 1;
}

.ag-header-cell-menu-button:not(.ag-header-menu-always-show) {
  transition: opacity 0.2s;
  opacity: 0;
}

.ag-header-group-cell-label, .ag-header-cell-label {
  display: flex;
  flex: 1 1 auto;
  overflow: hidden;
  align-items: center;
  text-overflow: ellipsis;
  align-self: stretch;
}

.ag-header-cell-text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.ag-right-aligned-header .ag-header-cell-label {
  flex-direction: row-reverse;
}

.ag-header-group-text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.ag-header-cell-resize {
  position: absolute;
  z-index: 2;
  height: 100%;
  width: 8px;
  top: 0;
  cursor: ew-resize;
}
.ag-ltr .ag-header-cell-resize {
  right: -4px;
}
.ag-rtl .ag-header-cell-resize {
  left: -4px;
}

.ag-pinned-left-header .ag-header-cell-resize {
  right: -4px;
}

.ag-pinned-right-header .ag-header-cell-resize {
  left: -4px;
}

.ag-header-select-all {
  display: flex;
}

/**
 ****************************
 * Columns
 ****************************
*/
.ag-column-moving .ag-cell {
  transition: left 0.2s;
}
.ag-column-moving .ag-header-cell {
  transition: left 0.2s;
}
.ag-column-moving .ag-header-group-cell {
  transition: left 0.2s, width 0.2s;
}

/**
 ****************************
 * Column Panel
 ****************************
*/
.ag-column-panel {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  flex: 1 1 auto;
}

.ag-column-select {
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  flex: 3 1 0px;
}

.ag-column-select-header {
  position: relative;
  display: flex;
  flex: none;
}

.ag-column-select-header-icon {
  position: relative;
}

.ag-column-select-header-filter-wrapper {
  flex: 1 1 auto;
}

.ag-column-select-header-filter {
  width: 100%;
}

.ag-column-select-list {
  flex: 1 1 0px;
  overflow: hidden;
}

.ag-column-drop {
  position: relative;
  display: inline-flex;
  align-items: center;
  overflow: auto;
  width: 100%;
}

.ag-column-drop-list {
  display: flex;
  align-items: center;
}

.ag-column-drop-cell {
  position: relative;
  display: flex;
  align-items: center;
}

.ag-column-drop-cell-text {
  overflow: hidden;
  flex: 1 1 auto;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.ag-column-drop-vertical {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  align-items: stretch;
  flex: 1 1 0px;
}

.ag-column-drop-vertical-title-bar {
  display: flex;
  align-items: center;
  flex: none;
}

.ag-column-drop-vertical-list {
  position: relative;
  align-items: stretch;
  flex-grow: 1;
  flex-direction: column;
  overflow-x: auto;
}
.ag-column-drop-vertical-list > * {
  flex: none;
}

.ag-column-drop-empty .ag-column-drop-vertical-list {
  overflow: hidden;
}

.ag-column-drop-vertical-empty-message {
  display: block;
}

.ag-column-drop.ag-column-drop-horizontal {
  white-space: nowrap;
  overflow: hidden;
}

.ag-column-drop-cell-button {
  cursor: pointer;
}

.ag-filter-toolpanel {
  flex: 1 1 0px;
  min-width: 0;
}

.ag-filter-toolpanel-header {
  position: relative;
}

.ag-filter-toolpanel-header, .ag-filter-toolpanel-search {
  display: flex;
  align-items: center;
}
.ag-filter-toolpanel-header > *, .ag-filter-toolpanel-search > * {
  display: flex;
  align-items: center;
}

.ag-filter-apply-panel {
  display: flex;
  justify-content: flex-end;
  overflow: hidden;
}

/**
 ****************************
 * Rows
 ****************************
*/
.ag-row-animation .ag-row {
  transition: transform 0.4s, top 0.4s, background-color 0.1s, opacity 0.2s;
}

.ag-row-animation .ag-row.ag-after-created {
  transition: transform 0.4s, top 0.4s, height 0.4s, background-color 0.1s, opacity 0.2s;
}

.ag-row-no-animation .ag-row {
  transition: background-color 0.1s;
}

.ag-row {
  white-space: nowrap;
  width: 100%;
}

.ag-row-loading {
  display: flex;
  align-items: center;
}

.ag-row-position-absolute {
  position: absolute;
}

.ag-row-position-relative {
  position: relative;
}

.ag-full-width-row {
  overflow: hidden;
  pointer-events: all;
}

.ag-row-inline-editing {
  z-index: 1;
}

.ag-row-dragging {
  z-index: 2;
}

.ag-stub-cell {
  display: flex;
  align-items: center;
}

/**
 ****************************
 * Cells
 ****************************
*/
.ag-cell {
  display: inline-block;
  position: absolute;
  white-space: nowrap;
  height: 100%;
}

.ag-cell-value, .ag-group-value {
  overflow: hidden;
  text-overflow: ellipsis;
}

.ag-cell-wrap-text {
  white-space: normal;
  word-break: break-all;
}

.ag-cell-wrapper {
  display: flex;
  align-items: center;
}
.ag-cell-wrapper.ag-row-group {
  align-items: flex-start;
}

.ag-sparkline-wrapper {
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
}

.ag-full-width-row .ag-cell-wrapper.ag-row-group {
  height: 100%;
  align-items: center;
}

.ag-cell-inline-editing {
  z-index: 1;
}
.ag-cell-inline-editing .ag-cell-wrapper,
.ag-cell-inline-editing .ag-cell-edit-wrapper,
.ag-cell-inline-editing .ag-cell-editor,
.ag-cell-inline-editing .ag-cell-editor .ag-wrapper,
.ag-cell-inline-editing .ag-cell-editor input {
  height: 100%;
  width: 100%;
  line-height: normal;
}

.ag-cell .ag-icon {
  display: inline-block;
  vertical-align: middle;
}

/**
 ****************************
 * Filters
 ****************************
*/
.ag-set-filter-item {
  display: flex;
  align-items: center;
  height: 100%;
}

.ag-set-filter-item-value {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.ag-set-filter-item-checkbox {
  display: flex;
}

.ag-filter-body-wrapper {
  display: flex;
  flex-direction: column;
}

.ag-filter-filter {
  flex: 1 1 0px;
}

.ag-filter-condition {
  display: flex;
  justify-content: center;
}

/**
 ****************************
 * Floating Filter
 ****************************
*/
.ag-floating-filter-body {
  position: relative;
  display: flex;
  flex: 1 1 auto;
  height: 100%;
}

.ag-floating-filter-full-body {
  display: flex;
  flex: 1 1 auto;
  height: 100%;
  width: 100%;
  align-items: center;
  overflow: hidden;
}

.ag-floating-filter-full-body > div {
  flex: 1 1 auto;
}

.ag-floating-filter-input {
  align-items: center;
  display: flex;
  width: 100%;
}
.ag-floating-filter-input > * {
  flex: 1 1 auto;
}

.ag-floating-filter-button {
  display: flex;
  flex: none;
}

/**
 ****************************
 * Drag & Drop
 ****************************
*/
.ag-dnd-ghost {
  position: absolute;
  display: inline-flex;
  align-items: center;
  cursor: move;
  white-space: nowrap;
  z-index: 9999;
}

/**
 ****************************
 * Overlay
 ****************************
*/
.ag-overlay {
  height: 100%;
  left: 0;
  pointer-events: none;
  position: absolute;
  top: 0;
  width: 100%;
}

.ag-overlay-panel {
  display: flex;
  height: 100%;
  width: 100%;
}

.ag-overlay-wrapper {
  display: flex;
  flex: none;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.ag-overlay-loading-wrapper {
  pointer-events: all;
}

/**
 ****************************
 * Popup
 ****************************
*/
.ag-popup-child {
  z-index: 5;
  top: 0;
}

.ag-popup-editor {
  position: absolute;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  z-index: 1;
}

.ag-large-text-input {
  display: block;
}

/**
 ****************************
 * Virtual Lists
 ****************************
*/
.ag-virtual-list-item {
  position: absolute;
  width: 100%;
}

/**
 ****************************
 * Floating Top and Bottom
 ****************************
*/
.ag-floating-top {
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  position: relative;
  display: flex;
}

.ag-pinned-left-floating-top {
  display: inline-block;
  overflow: hidden;
  position: relative;
  min-width: 0px;
}

.ag-pinned-right-floating-top {
  display: inline-block;
  overflow: hidden;
  position: relative;
  min-width: 0px;
}

.ag-floating-bottom {
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  position: relative;
  display: flex;
}

.ag-pinned-left-floating-bottom {
  display: inline-block;
  overflow: hidden;
  position: relative;
  min-width: 0px;
}

.ag-pinned-right-floating-bottom {
  display: inline-block;
  overflow: hidden;
  position: relative;
  min-width: 0px;
}

/**
 ****************************
 * Dialog
 ****************************
*/
.ag-dialog, .ag-panel {
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}

.ag-panel-title-bar {
  display: flex;
  flex: none;
  align-items: center;
  cursor: default;
}

.ag-panel-title-bar-title {
  flex: 1 1 auto;
}

.ag-panel-title-bar-buttons {
  display: flex;
}

.ag-panel-title-bar-button {
  cursor: pointer;
}

.ag-panel-content-wrapper {
  display: flex;
  flex: 1 1 auto;
  position: relative;
  overflow: hidden;
}

.ag-dialog {
  position: absolute;
}

.ag-resizer {
  position: absolute;
  pointer-events: none;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  z-index: 1;
}
.ag-resizer.ag-resizer-topLeft {
  top: 0;
  left: 0;
  height: 5px;
  width: 5px;
  cursor: nwse-resize;
}
.ag-resizer.ag-resizer-top {
  top: 0;
  left: 5px;
  right: 5px;
  height: 5px;
  cursor: ns-resize;
}
.ag-resizer.ag-resizer-topRight {
  top: 0;
  right: 0;
  height: 5px;
  width: 5px;
  cursor: nesw-resize;
}
.ag-resizer.ag-resizer-right {
  top: 5px;
  right: 0;
  bottom: 5px;
  width: 5px;
  cursor: ew-resize;
}
.ag-resizer.ag-resizer-bottomRight {
  bottom: 0;
  right: 0;
  height: 5px;
  width: 5px;
  cursor: nwse-resize;
}
.ag-resizer.ag-resizer-bottom {
  bottom: 0;
  left: 5px;
  right: 5px;
  height: 5px;
  cursor: ns-resize;
}
.ag-resizer.ag-resizer-bottomLeft {
  bottom: 0;
  left: 0;
  height: 5px;
  width: 5px;
  cursor: nesw-resize;
}
.ag-resizer.ag-resizer-left {
  left: 0;
  top: 5px;
  bottom: 5px;
  width: 5px;
  cursor: ew-resize;
}

/**
 ****************************
 * Tooltip
 ****************************
*/
.ag-tooltip {
  position: absolute;
  pointer-events: none;
  z-index: 99999;
}

.ag-tooltip-custom {
  position: absolute;
  pointer-events: none;
  z-index: 99999;
}

/**
 ****************************
 * Animations
 ****************************
*/
.ag-value-slide-out {
  margin-right: 5px;
  opacity: 1;
  transition: opacity 3s, margin-right 3s;
  transition-timing-function: linear;
}

.ag-value-slide-out-end {
  margin-right: 10px;
  opacity: 0;
}

.ag-opacity-zero {
  opacity: 0 !important;
}

/**
 ****************************
 * Menu
 ****************************
*/
.ag-menu {
  max-height: 100%;
  overflow-y: auto;
  position: absolute;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}

.ag-menu-column-select-wrapper {
  height: 265px;
  overflow: auto;
}
.ag-menu-column-select-wrapper .ag-column-select {
  height: 100%;
}

.ag-menu-list {
  display: table;
  width: 100%;
}

.ag-menu-option, .ag-menu-separator {
  display: table-row;
}

.ag-menu-option-part, .ag-menu-separator-part {
  display: table-cell;
  vertical-align: middle;
}

.ag-menu-option-text {
  white-space: nowrap;
}

.ag-compact-menu-option {
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
}

.ag-compact-menu-option-text {
  white-space: nowrap;
  flex: 1 1 auto;
}

/**
 ****************************
 * Rich Select
 ****************************
*/
.ag-rich-select {
  cursor: default;
  outline: none;
}

.ag-rich-select-value {
  display: flex;
  align-items: center;
}

.ag-rich-select-value-icon {
  flex: 1 1 auto;
  order: 1;
}
.ag-ltr .ag-rich-select-value-icon {
  text-align: right;
}
.ag-rtl .ag-rich-select-value-icon {
  text-align: left;
}

.ag-rich-select-list {
  position: relative;
}

.ag-rich-select-virtual-list-item {
  display: flex;
}

.ag-rich-select-row {
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  white-space: nowrap;
}

/**
 ****************************
 * Pagination
 ****************************
*/
.ag-paging-panel {
  align-items: center;
  display: flex;
  justify-content: flex-end;
}

.ag-paging-page-summary-panel {
  display: flex;
  align-items: center;
}

.ag-paging-button {
  position: relative;
}

.ag-disabled .ag-paging-page-summary-panel {
  pointer-events: none;
}

/**
 ****************************
 * Tool Panel
 ****************************
*/
.ag-tool-panel-wrapper {
  display: flex;
  overflow-y: auto;
  overflow-x: hidden;
  cursor: default;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}

.ag-column-select-column,
.ag-column-select-column-group,
.ag-select-agg-func-item {
  position: relative;
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 100%;
}
.ag-column-select-column > *,
.ag-column-select-column-group > *,
.ag-select-agg-func-item > * {
  flex: none;
}

.ag-column-select-checkbox {
  display: flex;
}

.ag-tool-panel-horizontal-resize {
  cursor: ew-resize;
  height: 100%;
  position: absolute;
  top: 0;
  width: 5px;
  z-index: 1;
}

.ag-ltr .ag-side-bar-left .ag-tool-panel-horizontal-resize {
  right: -3px;
}
.ag-rtl .ag-side-bar-left .ag-tool-panel-horizontal-resize {
  left: -3px;
}

.ag-ltr .ag-side-bar-right .ag-tool-panel-horizontal-resize {
  left: -3px;
}
.ag-rtl .ag-side-bar-right .ag-tool-panel-horizontal-resize {
  right: -3px;
}

.ag-details-row {
  width: 100%;
}

.ag-details-row-fixed-height {
  height: 100%;
}

.ag-details-grid {
  width: 100%;
}

.ag-details-grid-fixed-height {
  height: 100%;
}

.ag-header-group-cell {
  display: flex;
  align-items: center;
  height: 100%;
  position: absolute;
}

.ag-cell-label-container {
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.ag-right-aligned-header .ag-cell-label-container {
  flex-direction: row;
}

/**
 ****************************
 * Side Bar
 ****************************
*/
.ag-side-bar {
  display: flex;
  flex-direction: row-reverse;
}

.ag-side-bar-left {
  order: -1;
  flex-direction: row;
}

.ag-side-button-button {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  white-space: nowrap;
  outline: none;
  cursor: pointer;
}

.ag-side-button-label {
  -ms-writing-mode: tb-lr;
      writing-mode: vertical-lr;
}

/**
 ****************************
 * Status Bar
 ****************************
*/
.ag-status-bar {
  display: flex;
  justify-content: space-between;
  overflow: hidden;
}

.ag-status-panel {
  display: inline-flex;
}

.ag-status-name-value {
  white-space: nowrap;
}

.ag-status-bar-left {
  display: inline-flex;
}

.ag-status-bar-center {
  display: inline-flex;
}

.ag-status-bar-right {
  display: inline-flex;
}

/**
 ****************************
 * Widgets
 ****************************
*/
.ag-icon {
  display: block;
  speak: none;
}

.ag-group {
  position: relative;
  width: 100%;
}

.ag-group-title-bar {
  display: flex;
  align-items: center;
}

.ag-group-title {
  display: block;
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.ag-group-title-bar .ag-group-title {
  cursor: default;
}

.ag-group-toolbar {
  display: flex;
  align-items: center;
}

.ag-group-container {
  display: flex;
}

.ag-disabled .ag-group-container {
  pointer-events: none;
}

.ag-group-container-horizontal {
  flex-direction: row;
  flex-wrap: wrap;
}

.ag-group-container-vertical {
  flex-direction: column;
}

.ag-column-group-icons {
  display: block;
}
.ag-column-group-icons > * {
  cursor: pointer;
}

.ag-group-item-alignment-stretch .ag-group-item {
  align-items: stretch;
}

.ag-group-item-alignment-start .ag-group-item {
  align-items: flex-start;
}

.ag-group-item-alignment-end .ag-group-item {
  align-items: flex-end;
}

.ag-toggle-button-icon {
  transition: right 0.3s;
  position: absolute;
  top: -1px;
}

.ag-input-field, .ag-select {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.ag-input-field-input {
  flex: 1 1 auto;
  width: 100%;
  min-width: 0;
}

.ag-floating-filter-input .ag-input-field-input[type=date] {
  width: 1px;
}

.ag-range-field {
  display: flex;
  align-items: center;
}

.ag-angle-select {
  display: flex;
  align-items: center;
}

.ag-angle-select-wrapper {
  display: flex;
}

.ag-angle-select-parent-circle {
  display: block;
  position: relative;
}

.ag-angle-select-child-circle {
  position: absolute;
}

.ag-slider-wrapper {
  display: flex;
}
.ag-slider-wrapper .ag-input-field {
  flex: 1 1 auto;
}

.ag-picker-field-display {
  flex: 1 1 auto;
}

.ag-picker-field {
  display: flex;
  align-items: center;
}

.ag-picker-field-icon {
  display: flex;
  border: 0;
  padding: 0;
  margin: 0;
  cursor: pointer;
}

.ag-picker-field-wrapper {
  overflow: hidden;
}

.ag-label-align-right .ag-label {
  order: 1;
}
.ag-label-align-right > * {
  flex: none;
}

.ag-label-align-top {
  flex-direction: column;
  align-items: flex-start;
}
.ag-label-align-top > * {
  align-self: stretch;
}

.ag-color-panel {
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.ag-spectrum-color {
  flex: 1 1 auto;
  position: relative;
  overflow: hidden;
  cursor: default;
}

.ag-spectrum-fill {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.ag-spectrum-val {
  cursor: pointer;
}

.ag-spectrum-dragger {
  position: absolute;
  pointer-events: none;
  cursor: pointer;
}

.ag-spectrum-hue {
  cursor: default;
  background: linear-gradient(to left, #ff0000 3%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%);
}

.ag-spectrum-alpha {
  cursor: default;
}

.ag-spectrum-hue-background {
  width: 100%;
  height: 100%;
}

.ag-spectrum-alpha-background {
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), black);
  width: 100%;
  height: 100%;
}

.ag-spectrum-tool {
  cursor: pointer;
}

.ag-spectrum-slider {
  position: absolute;
  pointer-events: none;
}

.ag-recent-colors {
  display: flex;
}

.ag-recent-color {
  cursor: pointer;
}

.ag-ltr .ag-column-select-indent-1 {
  padding-left: 20px;
}
.ag-rtl .ag-column-select-indent-1 {
  padding-right: 20px;
}

.ag-ltr .ag-row-group-indent-1 {
  padding-left: 20px;
}
.ag-rtl .ag-row-group-indent-1 {
  padding-right: 20px;
}

.ag-ltr .ag-column-select-indent-2 {
  padding-left: 40px;
}
.ag-rtl .ag-column-select-indent-2 {
  padding-right: 40px;
}

.ag-ltr .ag-row-group-indent-2 {
  padding-left: 40px;
}
.ag-rtl .ag-row-group-indent-2 {
  padding-right: 40px;
}

.ag-ltr .ag-column-select-indent-3 {
  padding-left: 60px;
}
.ag-rtl .ag-column-select-indent-3 {
  padding-right: 60px;
}

.ag-ltr .ag-row-group-indent-3 {
  padding-left: 60px;
}
.ag-rtl .ag-row-group-indent-3 {
  padding-right: 60px;
}

.ag-ltr .ag-column-select-indent-4 {
  padding-left: 80px;
}
.ag-rtl .ag-column-select-indent-4 {
  padding-right: 80px;
}

.ag-ltr .ag-row-group-indent-4 {
  padding-left: 80px;
}
.ag-rtl .ag-row-group-indent-4 {
  padding-right: 80px;
}

.ag-ltr .ag-column-select-indent-5 {
  padding-left: 100px;
}
.ag-rtl .ag-column-select-indent-5 {
  padding-right: 100px;
}

.ag-ltr .ag-row-group-indent-5 {
  padding-left: 100px;
}
.ag-rtl .ag-row-group-indent-5 {
  padding-right: 100px;
}

.ag-ltr .ag-column-select-indent-6 {
  padding-left: 120px;
}
.ag-rtl .ag-column-select-indent-6 {
  padding-right: 120px;
}

.ag-ltr .ag-row-group-indent-6 {
  padding-left: 120px;
}
.ag-rtl .ag-row-group-indent-6 {
  padding-right: 120px;
}

.ag-ltr .ag-column-select-indent-7 {
  padding-left: 140px;
}
.ag-rtl .ag-column-select-indent-7 {
  padding-right: 140px;
}

.ag-ltr .ag-row-group-indent-7 {
  padding-left: 140px;
}
.ag-rtl .ag-row-group-indent-7 {
  padding-right: 140px;
}

.ag-ltr .ag-column-select-indent-8 {
  padding-left: 160px;
}
.ag-rtl .ag-column-select-indent-8 {
  padding-right: 160px;
}

.ag-ltr .ag-row-group-indent-8 {
  padding-left: 160px;
}
.ag-rtl .ag-row-group-indent-8 {
  padding-right: 160px;
}

.ag-ltr .ag-column-select-indent-9 {
  padding-left: 180px;
}
.ag-rtl .ag-column-select-indent-9 {
  padding-right: 180px;
}

.ag-ltr .ag-row-group-indent-9 {
  padding-left: 180px;
}
.ag-rtl .ag-row-group-indent-9 {
  padding-right: 180px;
}

.ag-ltr .ag-column-select-indent-10 {
  padding-left: 200px;
}
.ag-rtl .ag-column-select-indent-10 {
  padding-right: 200px;
}

.ag-ltr .ag-row-group-indent-10 {
  padding-left: 200px;
}
.ag-rtl .ag-row-group-indent-10 {
  padding-right: 200px;
}

.ag-ltr .ag-column-select-indent-11 {
  padding-left: 220px;
}
.ag-rtl .ag-column-select-indent-11 {
  padding-right: 220px;
}

.ag-ltr .ag-row-group-indent-11 {
  padding-left: 220px;
}
.ag-rtl .ag-row-group-indent-11 {
  padding-right: 220px;
}

.ag-ltr .ag-column-select-indent-12 {
  padding-left: 240px;
}
.ag-rtl .ag-column-select-indent-12 {
  padding-right: 240px;
}

.ag-ltr .ag-row-group-indent-12 {
  padding-left: 240px;
}
.ag-rtl .ag-row-group-indent-12 {
  padding-right: 240px;
}

.ag-ltr .ag-column-select-indent-13 {
  padding-left: 260px;
}
.ag-rtl .ag-column-select-indent-13 {
  padding-right: 260px;
}

.ag-ltr .ag-row-group-indent-13 {
  padding-left: 260px;
}
.ag-rtl .ag-row-group-indent-13 {
  padding-right: 260px;
}

.ag-ltr .ag-column-select-indent-14 {
  padding-left: 280px;
}
.ag-rtl .ag-column-select-indent-14 {
  padding-right: 280px;
}

.ag-ltr .ag-row-group-indent-14 {
  padding-left: 280px;
}
.ag-rtl .ag-row-group-indent-14 {
  padding-right: 280px;
}

.ag-ltr .ag-column-select-indent-15 {
  padding-left: 300px;
}
.ag-rtl .ag-column-select-indent-15 {
  padding-right: 300px;
}

.ag-ltr .ag-row-group-indent-15 {
  padding-left: 300px;
}
.ag-rtl .ag-row-group-indent-15 {
  padding-right: 300px;
}

.ag-ltr .ag-column-select-indent-16 {
  padding-left: 320px;
}
.ag-rtl .ag-column-select-indent-16 {
  padding-right: 320px;
}

.ag-ltr .ag-row-group-indent-16 {
  padding-left: 320px;
}
.ag-rtl .ag-row-group-indent-16 {
  padding-right: 320px;
}

.ag-ltr .ag-column-select-indent-17 {
  padding-left: 340px;
}
.ag-rtl .ag-column-select-indent-17 {
  padding-right: 340px;
}

.ag-ltr .ag-row-group-indent-17 {
  padding-left: 340px;
}
.ag-rtl .ag-row-group-indent-17 {
  padding-right: 340px;
}

.ag-ltr .ag-column-select-indent-18 {
  padding-left: 360px;
}
.ag-rtl .ag-column-select-indent-18 {
  padding-right: 360px;
}

.ag-ltr .ag-row-group-indent-18 {
  padding-left: 360px;
}
.ag-rtl .ag-row-group-indent-18 {
  padding-right: 360px;
}

.ag-ltr .ag-column-select-indent-19 {
  padding-left: 380px;
}
.ag-rtl .ag-column-select-indent-19 {
  padding-right: 380px;
}

.ag-ltr .ag-row-group-indent-19 {
  padding-left: 380px;
}
.ag-rtl .ag-row-group-indent-19 {
  padding-right: 380px;
}

.ag-ltr .ag-column-select-indent-20 {
  padding-left: 400px;
}
.ag-rtl .ag-column-select-indent-20 {
  padding-right: 400px;
}

.ag-ltr .ag-row-group-indent-20 {
  padding-left: 400px;
}
.ag-rtl .ag-row-group-indent-20 {
  padding-right: 400px;
}

.ag-ltr .ag-column-select-indent-21 {
  padding-left: 420px;
}
.ag-rtl .ag-column-select-indent-21 {
  padding-right: 420px;
}

.ag-ltr .ag-row-group-indent-21 {
  padding-left: 420px;
}
.ag-rtl .ag-row-group-indent-21 {
  padding-right: 420px;
}

.ag-ltr .ag-column-select-indent-22 {
  padding-left: 440px;
}
.ag-rtl .ag-column-select-indent-22 {
  padding-right: 440px;
}

.ag-ltr .ag-row-group-indent-22 {
  padding-left: 440px;
}
.ag-rtl .ag-row-group-indent-22 {
  padding-right: 440px;
}

.ag-ltr .ag-column-select-indent-23 {
  padding-left: 460px;
}
.ag-rtl .ag-column-select-indent-23 {
  padding-right: 460px;
}

.ag-ltr .ag-row-group-indent-23 {
  padding-left: 460px;
}
.ag-rtl .ag-row-group-indent-23 {
  padding-right: 460px;
}

.ag-ltr .ag-column-select-indent-24 {
  padding-left: 480px;
}
.ag-rtl .ag-column-select-indent-24 {
  padding-right: 480px;
}

.ag-ltr .ag-row-group-indent-24 {
  padding-left: 480px;
}
.ag-rtl .ag-row-group-indent-24 {
  padding-right: 480px;
}

.ag-ltr .ag-column-select-indent-25 {
  padding-left: 500px;
}
.ag-rtl .ag-column-select-indent-25 {
  padding-right: 500px;
}

.ag-ltr .ag-row-group-indent-25 {
  padding-left: 500px;
}
.ag-rtl .ag-row-group-indent-25 {
  padding-right: 500px;
}

.ag-ltr .ag-column-select-indent-26 {
  padding-left: 520px;
}
.ag-rtl .ag-column-select-indent-26 {
  padding-right: 520px;
}

.ag-ltr .ag-row-group-indent-26 {
  padding-left: 520px;
}
.ag-rtl .ag-row-group-indent-26 {
  padding-right: 520px;
}

.ag-ltr .ag-column-select-indent-27 {
  padding-left: 540px;
}
.ag-rtl .ag-column-select-indent-27 {
  padding-right: 540px;
}

.ag-ltr .ag-row-group-indent-27 {
  padding-left: 540px;
}
.ag-rtl .ag-row-group-indent-27 {
  padding-right: 540px;
}

.ag-ltr .ag-column-select-indent-28 {
  padding-left: 560px;
}
.ag-rtl .ag-column-select-indent-28 {
  padding-right: 560px;
}

.ag-ltr .ag-row-group-indent-28 {
  padding-left: 560px;
}
.ag-rtl .ag-row-group-indent-28 {
  padding-right: 560px;
}

.ag-ltr .ag-column-select-indent-29 {
  padding-left: 580px;
}
.ag-rtl .ag-column-select-indent-29 {
  padding-right: 580px;
}

.ag-ltr .ag-row-group-indent-29 {
  padding-left: 580px;
}
.ag-rtl .ag-row-group-indent-29 {
  padding-right: 580px;
}

.ag-ltr .ag-column-select-indent-30 {
  padding-left: 600px;
}
.ag-rtl .ag-column-select-indent-30 {
  padding-right: 600px;
}

.ag-ltr .ag-row-group-indent-30 {
  padding-left: 600px;
}
.ag-rtl .ag-row-group-indent-30 {
  padding-right: 600px;
}

.ag-ltr .ag-column-select-indent-31 {
  padding-left: 620px;
}
.ag-rtl .ag-column-select-indent-31 {
  padding-right: 620px;
}

.ag-ltr .ag-row-group-indent-31 {
  padding-left: 620px;
}
.ag-rtl .ag-row-group-indent-31 {
  padding-right: 620px;
}

.ag-ltr .ag-column-select-indent-32 {
  padding-left: 640px;
}
.ag-rtl .ag-column-select-indent-32 {
  padding-right: 640px;
}

.ag-ltr .ag-row-group-indent-32 {
  padding-left: 640px;
}
.ag-rtl .ag-row-group-indent-32 {
  padding-right: 640px;
}

.ag-ltr .ag-column-select-indent-33 {
  padding-left: 660px;
}
.ag-rtl .ag-column-select-indent-33 {
  padding-right: 660px;
}

.ag-ltr .ag-row-group-indent-33 {
  padding-left: 660px;
}
.ag-rtl .ag-row-group-indent-33 {
  padding-right: 660px;
}

.ag-ltr .ag-column-select-indent-34 {
  padding-left: 680px;
}
.ag-rtl .ag-column-select-indent-34 {
  padding-right: 680px;
}

.ag-ltr .ag-row-group-indent-34 {
  padding-left: 680px;
}
.ag-rtl .ag-row-group-indent-34 {
  padding-right: 680px;
}

.ag-ltr .ag-column-select-indent-35 {
  padding-left: 700px;
}
.ag-rtl .ag-column-select-indent-35 {
  padding-right: 700px;
}

.ag-ltr .ag-row-group-indent-35 {
  padding-left: 700px;
}
.ag-rtl .ag-row-group-indent-35 {
  padding-right: 700px;
}

.ag-ltr .ag-column-select-indent-36 {
  padding-left: 720px;
}
.ag-rtl .ag-column-select-indent-36 {
  padding-right: 720px;
}

.ag-ltr .ag-row-group-indent-36 {
  padding-left: 720px;
}
.ag-rtl .ag-row-group-indent-36 {
  padding-right: 720px;
}

.ag-ltr .ag-column-select-indent-37 {
  padding-left: 740px;
}
.ag-rtl .ag-column-select-indent-37 {
  padding-right: 740px;
}

.ag-ltr .ag-row-group-indent-37 {
  padding-left: 740px;
}
.ag-rtl .ag-row-group-indent-37 {
  padding-right: 740px;
}

.ag-ltr .ag-column-select-indent-38 {
  padding-left: 760px;
}
.ag-rtl .ag-column-select-indent-38 {
  padding-right: 760px;
}

.ag-ltr .ag-row-group-indent-38 {
  padding-left: 760px;
}
.ag-rtl .ag-row-group-indent-38 {
  padding-right: 760px;
}

.ag-ltr .ag-column-select-indent-39 {
  padding-left: 780px;
}
.ag-rtl .ag-column-select-indent-39 {
  padding-right: 780px;
}

.ag-ltr .ag-row-group-indent-39 {
  padding-left: 780px;
}
.ag-rtl .ag-row-group-indent-39 {
  padding-right: 780px;
}

.ag-ltr .ag-column-select-indent-40 {
  padding-left: 800px;
}
.ag-rtl .ag-column-select-indent-40 {
  padding-right: 800px;
}

.ag-ltr .ag-row-group-indent-40 {
  padding-left: 800px;
}
.ag-rtl .ag-row-group-indent-40 {
  padding-right: 800px;
}

.ag-ltr .ag-column-select-indent-41 {
  padding-left: 820px;
}
.ag-rtl .ag-column-select-indent-41 {
  padding-right: 820px;
}

.ag-ltr .ag-row-group-indent-41 {
  padding-left: 820px;
}
.ag-rtl .ag-row-group-indent-41 {
  padding-right: 820px;
}

.ag-ltr .ag-column-select-indent-42 {
  padding-left: 840px;
}
.ag-rtl .ag-column-select-indent-42 {
  padding-right: 840px;
}

.ag-ltr .ag-row-group-indent-42 {
  padding-left: 840px;
}
.ag-rtl .ag-row-group-indent-42 {
  padding-right: 840px;
}

.ag-ltr .ag-column-select-indent-43 {
  padding-left: 860px;
}
.ag-rtl .ag-column-select-indent-43 {
  padding-right: 860px;
}

.ag-ltr .ag-row-group-indent-43 {
  padding-left: 860px;
}
.ag-rtl .ag-row-group-indent-43 {
  padding-right: 860px;
}

.ag-ltr .ag-column-select-indent-44 {
  padding-left: 880px;
}
.ag-rtl .ag-column-select-indent-44 {
  padding-right: 880px;
}

.ag-ltr .ag-row-group-indent-44 {
  padding-left: 880px;
}
.ag-rtl .ag-row-group-indent-44 {
  padding-right: 880px;
}

.ag-ltr .ag-column-select-indent-45 {
  padding-left: 900px;
}
.ag-rtl .ag-column-select-indent-45 {
  padding-right: 900px;
}

.ag-ltr .ag-row-group-indent-45 {
  padding-left: 900px;
}
.ag-rtl .ag-row-group-indent-45 {
  padding-right: 900px;
}

.ag-ltr .ag-column-select-indent-46 {
  padding-left: 920px;
}
.ag-rtl .ag-column-select-indent-46 {
  padding-right: 920px;
}

.ag-ltr .ag-row-group-indent-46 {
  padding-left: 920px;
}
.ag-rtl .ag-row-group-indent-46 {
  padding-right: 920px;
}

.ag-ltr .ag-column-select-indent-47 {
  padding-left: 940px;
}
.ag-rtl .ag-column-select-indent-47 {
  padding-right: 940px;
}

.ag-ltr .ag-row-group-indent-47 {
  padding-left: 940px;
}
.ag-rtl .ag-row-group-indent-47 {
  padding-right: 940px;
}

.ag-ltr .ag-column-select-indent-48 {
  padding-left: 960px;
}
.ag-rtl .ag-column-select-indent-48 {
  padding-right: 960px;
}

.ag-ltr .ag-row-group-indent-48 {
  padding-left: 960px;
}
.ag-rtl .ag-row-group-indent-48 {
  padding-right: 960px;
}

.ag-ltr .ag-column-select-indent-49 {
  padding-left: 980px;
}
.ag-rtl .ag-column-select-indent-49 {
  padding-right: 980px;
}

.ag-ltr .ag-row-group-indent-49 {
  padding-left: 980px;
}
.ag-rtl .ag-row-group-indent-49 {
  padding-right: 980px;
}

.ag-ltr .ag-column-select-indent-50 {
  padding-left: 1000px;
}
.ag-rtl .ag-column-select-indent-50 {
  padding-right: 1000px;
}

.ag-ltr .ag-row-group-indent-50 {
  padding-left: 1000px;
}
.ag-rtl .ag-row-group-indent-50 {
  padding-right: 1000px;
}

.ag-ltr .ag-column-select-indent-51 {
  padding-left: 1020px;
}
.ag-rtl .ag-column-select-indent-51 {
  padding-right: 1020px;
}

.ag-ltr .ag-row-group-indent-51 {
  padding-left: 1020px;
}
.ag-rtl .ag-row-group-indent-51 {
  padding-right: 1020px;
}

.ag-ltr .ag-column-select-indent-52 {
  padding-left: 1040px;
}
.ag-rtl .ag-column-select-indent-52 {
  padding-right: 1040px;
}

.ag-ltr .ag-row-group-indent-52 {
  padding-left: 1040px;
}
.ag-rtl .ag-row-group-indent-52 {
  padding-right: 1040px;
}

.ag-ltr .ag-column-select-indent-53 {
  padding-left: 1060px;
}
.ag-rtl .ag-column-select-indent-53 {
  padding-right: 1060px;
}

.ag-ltr .ag-row-group-indent-53 {
  padding-left: 1060px;
}
.ag-rtl .ag-row-group-indent-53 {
  padding-right: 1060px;
}

.ag-ltr .ag-column-select-indent-54 {
  padding-left: 1080px;
}
.ag-rtl .ag-column-select-indent-54 {
  padding-right: 1080px;
}

.ag-ltr .ag-row-group-indent-54 {
  padding-left: 1080px;
}
.ag-rtl .ag-row-group-indent-54 {
  padding-right: 1080px;
}

.ag-ltr .ag-column-select-indent-55 {
  padding-left: 1100px;
}
.ag-rtl .ag-column-select-indent-55 {
  padding-right: 1100px;
}

.ag-ltr .ag-row-group-indent-55 {
  padding-left: 1100px;
}
.ag-rtl .ag-row-group-indent-55 {
  padding-right: 1100px;
}

.ag-ltr .ag-column-select-indent-56 {
  padding-left: 1120px;
}
.ag-rtl .ag-column-select-indent-56 {
  padding-right: 1120px;
}

.ag-ltr .ag-row-group-indent-56 {
  padding-left: 1120px;
}
.ag-rtl .ag-row-group-indent-56 {
  padding-right: 1120px;
}

.ag-ltr .ag-column-select-indent-57 {
  padding-left: 1140px;
}
.ag-rtl .ag-column-select-indent-57 {
  padding-right: 1140px;
}

.ag-ltr .ag-row-group-indent-57 {
  padding-left: 1140px;
}
.ag-rtl .ag-row-group-indent-57 {
  padding-right: 1140px;
}

.ag-ltr .ag-column-select-indent-58 {
  padding-left: 1160px;
}
.ag-rtl .ag-column-select-indent-58 {
  padding-right: 1160px;
}

.ag-ltr .ag-row-group-indent-58 {
  padding-left: 1160px;
}
.ag-rtl .ag-row-group-indent-58 {
  padding-right: 1160px;
}

.ag-ltr .ag-column-select-indent-59 {
  padding-left: 1180px;
}
.ag-rtl .ag-column-select-indent-59 {
  padding-right: 1180px;
}

.ag-ltr .ag-row-group-indent-59 {
  padding-left: 1180px;
}
.ag-rtl .ag-row-group-indent-59 {
  padding-right: 1180px;
}

.ag-ltr .ag-column-select-indent-60 {
  padding-left: 1200px;
}
.ag-rtl .ag-column-select-indent-60 {
  padding-right: 1200px;
}

.ag-ltr .ag-row-group-indent-60 {
  padding-left: 1200px;
}
.ag-rtl .ag-row-group-indent-60 {
  padding-right: 1200px;
}

.ag-ltr .ag-column-select-indent-61 {
  padding-left: 1220px;
}
.ag-rtl .ag-column-select-indent-61 {
  padding-right: 1220px;
}

.ag-ltr .ag-row-group-indent-61 {
  padding-left: 1220px;
}
.ag-rtl .ag-row-group-indent-61 {
  padding-right: 1220px;
}

.ag-ltr .ag-column-select-indent-62 {
  padding-left: 1240px;
}
.ag-rtl .ag-column-select-indent-62 {
  padding-right: 1240px;
}

.ag-ltr .ag-row-group-indent-62 {
  padding-left: 1240px;
}
.ag-rtl .ag-row-group-indent-62 {
  padding-right: 1240px;
}

.ag-ltr .ag-column-select-indent-63 {
  padding-left: 1260px;
}
.ag-rtl .ag-column-select-indent-63 {
  padding-right: 1260px;
}

.ag-ltr .ag-row-group-indent-63 {
  padding-left: 1260px;
}
.ag-rtl .ag-row-group-indent-63 {
  padding-right: 1260px;
}

.ag-ltr .ag-column-select-indent-64 {
  padding-left: 1280px;
}
.ag-rtl .ag-column-select-indent-64 {
  padding-right: 1280px;
}

.ag-ltr .ag-row-group-indent-64 {
  padding-left: 1280px;
}
.ag-rtl .ag-row-group-indent-64 {
  padding-right: 1280px;
}

.ag-ltr .ag-column-select-indent-65 {
  padding-left: 1300px;
}
.ag-rtl .ag-column-select-indent-65 {
  padding-right: 1300px;
}

.ag-ltr .ag-row-group-indent-65 {
  padding-left: 1300px;
}
.ag-rtl .ag-row-group-indent-65 {
  padding-right: 1300px;
}

.ag-ltr .ag-column-select-indent-66 {
  padding-left: 1320px;
}
.ag-rtl .ag-column-select-indent-66 {
  padding-right: 1320px;
}

.ag-ltr .ag-row-group-indent-66 {
  padding-left: 1320px;
}
.ag-rtl .ag-row-group-indent-66 {
  padding-right: 1320px;
}

.ag-ltr .ag-column-select-indent-67 {
  padding-left: 1340px;
}
.ag-rtl .ag-column-select-indent-67 {
  padding-right: 1340px;
}

.ag-ltr .ag-row-group-indent-67 {
  padding-left: 1340px;
}
.ag-rtl .ag-row-group-indent-67 {
  padding-right: 1340px;
}

.ag-ltr .ag-column-select-indent-68 {
  padding-left: 1360px;
}
.ag-rtl .ag-column-select-indent-68 {
  padding-right: 1360px;
}

.ag-ltr .ag-row-group-indent-68 {
  padding-left: 1360px;
}
.ag-rtl .ag-row-group-indent-68 {
  padding-right: 1360px;
}

.ag-ltr .ag-column-select-indent-69 {
  padding-left: 1380px;
}
.ag-rtl .ag-column-select-indent-69 {
  padding-right: 1380px;
}

.ag-ltr .ag-row-group-indent-69 {
  padding-left: 1380px;
}
.ag-rtl .ag-row-group-indent-69 {
  padding-right: 1380px;
}

.ag-ltr .ag-column-select-indent-70 {
  padding-left: 1400px;
}
.ag-rtl .ag-column-select-indent-70 {
  padding-right: 1400px;
}

.ag-ltr .ag-row-group-indent-70 {
  padding-left: 1400px;
}
.ag-rtl .ag-row-group-indent-70 {
  padding-right: 1400px;
}

.ag-ltr .ag-column-select-indent-71 {
  padding-left: 1420px;
}
.ag-rtl .ag-column-select-indent-71 {
  padding-right: 1420px;
}

.ag-ltr .ag-row-group-indent-71 {
  padding-left: 1420px;
}
.ag-rtl .ag-row-group-indent-71 {
  padding-right: 1420px;
}

.ag-ltr .ag-column-select-indent-72 {
  padding-left: 1440px;
}
.ag-rtl .ag-column-select-indent-72 {
  padding-right: 1440px;
}

.ag-ltr .ag-row-group-indent-72 {
  padding-left: 1440px;
}
.ag-rtl .ag-row-group-indent-72 {
  padding-right: 1440px;
}

.ag-ltr .ag-column-select-indent-73 {
  padding-left: 1460px;
}
.ag-rtl .ag-column-select-indent-73 {
  padding-right: 1460px;
}

.ag-ltr .ag-row-group-indent-73 {
  padding-left: 1460px;
}
.ag-rtl .ag-row-group-indent-73 {
  padding-right: 1460px;
}

.ag-ltr .ag-column-select-indent-74 {
  padding-left: 1480px;
}
.ag-rtl .ag-column-select-indent-74 {
  padding-right: 1480px;
}

.ag-ltr .ag-row-group-indent-74 {
  padding-left: 1480px;
}
.ag-rtl .ag-row-group-indent-74 {
  padding-right: 1480px;
}

.ag-ltr .ag-column-select-indent-75 {
  padding-left: 1500px;
}
.ag-rtl .ag-column-select-indent-75 {
  padding-right: 1500px;
}

.ag-ltr .ag-row-group-indent-75 {
  padding-left: 1500px;
}
.ag-rtl .ag-row-group-indent-75 {
  padding-right: 1500px;
}

.ag-ltr .ag-column-select-indent-76 {
  padding-left: 1520px;
}
.ag-rtl .ag-column-select-indent-76 {
  padding-right: 1520px;
}

.ag-ltr .ag-row-group-indent-76 {
  padding-left: 1520px;
}
.ag-rtl .ag-row-group-indent-76 {
  padding-right: 1520px;
}

.ag-ltr .ag-column-select-indent-77 {
  padding-left: 1540px;
}
.ag-rtl .ag-column-select-indent-77 {
  padding-right: 1540px;
}

.ag-ltr .ag-row-group-indent-77 {
  padding-left: 1540px;
}
.ag-rtl .ag-row-group-indent-77 {
  padding-right: 1540px;
}

.ag-ltr .ag-column-select-indent-78 {
  padding-left: 1560px;
}
.ag-rtl .ag-column-select-indent-78 {
  padding-right: 1560px;
}

.ag-ltr .ag-row-group-indent-78 {
  padding-left: 1560px;
}
.ag-rtl .ag-row-group-indent-78 {
  padding-right: 1560px;
}

.ag-ltr .ag-column-select-indent-79 {
  padding-left: 1580px;
}
.ag-rtl .ag-column-select-indent-79 {
  padding-right: 1580px;
}

.ag-ltr .ag-row-group-indent-79 {
  padding-left: 1580px;
}
.ag-rtl .ag-row-group-indent-79 {
  padding-right: 1580px;
}

.ag-ltr .ag-column-select-indent-80 {
  padding-left: 1600px;
}
.ag-rtl .ag-column-select-indent-80 {
  padding-right: 1600px;
}

.ag-ltr .ag-row-group-indent-80 {
  padding-left: 1600px;
}
.ag-rtl .ag-row-group-indent-80 {
  padding-right: 1600px;
}

.ag-ltr .ag-column-select-indent-81 {
  padding-left: 1620px;
}
.ag-rtl .ag-column-select-indent-81 {
  padding-right: 1620px;
}

.ag-ltr .ag-row-group-indent-81 {
  padding-left: 1620px;
}
.ag-rtl .ag-row-group-indent-81 {
  padding-right: 1620px;
}

.ag-ltr .ag-column-select-indent-82 {
  padding-left: 1640px;
}
.ag-rtl .ag-column-select-indent-82 {
  padding-right: 1640px;
}

.ag-ltr .ag-row-group-indent-82 {
  padding-left: 1640px;
}
.ag-rtl .ag-row-group-indent-82 {
  padding-right: 1640px;
}

.ag-ltr .ag-column-select-indent-83 {
  padding-left: 1660px;
}
.ag-rtl .ag-column-select-indent-83 {
  padding-right: 1660px;
}

.ag-ltr .ag-row-group-indent-83 {
  padding-left: 1660px;
}
.ag-rtl .ag-row-group-indent-83 {
  padding-right: 1660px;
}

.ag-ltr .ag-column-select-indent-84 {
  padding-left: 1680px;
}
.ag-rtl .ag-column-select-indent-84 {
  padding-right: 1680px;
}

.ag-ltr .ag-row-group-indent-84 {
  padding-left: 1680px;
}
.ag-rtl .ag-row-group-indent-84 {
  padding-right: 1680px;
}

.ag-ltr .ag-column-select-indent-85 {
  padding-left: 1700px;
}
.ag-rtl .ag-column-select-indent-85 {
  padding-right: 1700px;
}

.ag-ltr .ag-row-group-indent-85 {
  padding-left: 1700px;
}
.ag-rtl .ag-row-group-indent-85 {
  padding-right: 1700px;
}

.ag-ltr .ag-column-select-indent-86 {
  padding-left: 1720px;
}
.ag-rtl .ag-column-select-indent-86 {
  padding-right: 1720px;
}

.ag-ltr .ag-row-group-indent-86 {
  padding-left: 1720px;
}
.ag-rtl .ag-row-group-indent-86 {
  padding-right: 1720px;
}

.ag-ltr .ag-column-select-indent-87 {
  padding-left: 1740px;
}
.ag-rtl .ag-column-select-indent-87 {
  padding-right: 1740px;
}

.ag-ltr .ag-row-group-indent-87 {
  padding-left: 1740px;
}
.ag-rtl .ag-row-group-indent-87 {
  padding-right: 1740px;
}

.ag-ltr .ag-column-select-indent-88 {
  padding-left: 1760px;
}
.ag-rtl .ag-column-select-indent-88 {
  padding-right: 1760px;
}

.ag-ltr .ag-row-group-indent-88 {
  padding-left: 1760px;
}
.ag-rtl .ag-row-group-indent-88 {
  padding-right: 1760px;
}

.ag-ltr .ag-column-select-indent-89 {
  padding-left: 1780px;
}
.ag-rtl .ag-column-select-indent-89 {
  padding-right: 1780px;
}

.ag-ltr .ag-row-group-indent-89 {
  padding-left: 1780px;
}
.ag-rtl .ag-row-group-indent-89 {
  padding-right: 1780px;
}

.ag-ltr .ag-column-select-indent-90 {
  padding-left: 1800px;
}
.ag-rtl .ag-column-select-indent-90 {
  padding-right: 1800px;
}

.ag-ltr .ag-row-group-indent-90 {
  padding-left: 1800px;
}
.ag-rtl .ag-row-group-indent-90 {
  padding-right: 1800px;
}

.ag-ltr .ag-column-select-indent-91 {
  padding-left: 1820px;
}
.ag-rtl .ag-column-select-indent-91 {
  padding-right: 1820px;
}

.ag-ltr .ag-row-group-indent-91 {
  padding-left: 1820px;
}
.ag-rtl .ag-row-group-indent-91 {
  padding-right: 1820px;
}

.ag-ltr .ag-column-select-indent-92 {
  padding-left: 1840px;
}
.ag-rtl .ag-column-select-indent-92 {
  padding-right: 1840px;
}

.ag-ltr .ag-row-group-indent-92 {
  padding-left: 1840px;
}
.ag-rtl .ag-row-group-indent-92 {
  padding-right: 1840px;
}

.ag-ltr .ag-column-select-indent-93 {
  padding-left: 1860px;
}
.ag-rtl .ag-column-select-indent-93 {
  padding-right: 1860px;
}

.ag-ltr .ag-row-group-indent-93 {
  padding-left: 1860px;
}
.ag-rtl .ag-row-group-indent-93 {
  padding-right: 1860px;
}

.ag-ltr .ag-column-select-indent-94 {
  padding-left: 1880px;
}
.ag-rtl .ag-column-select-indent-94 {
  padding-right: 1880px;
}

.ag-ltr .ag-row-group-indent-94 {
  padding-left: 1880px;
}
.ag-rtl .ag-row-group-indent-94 {
  padding-right: 1880px;
}

.ag-ltr .ag-column-select-indent-95 {
  padding-left: 1900px;
}
.ag-rtl .ag-column-select-indent-95 {
  padding-right: 1900px;
}

.ag-ltr .ag-row-group-indent-95 {
  padding-left: 1900px;
}
.ag-rtl .ag-row-group-indent-95 {
  padding-right: 1900px;
}

.ag-ltr .ag-column-select-indent-96 {
  padding-left: 1920px;
}
.ag-rtl .ag-column-select-indent-96 {
  padding-right: 1920px;
}

.ag-ltr .ag-row-group-indent-96 {
  padding-left: 1920px;
}
.ag-rtl .ag-row-group-indent-96 {
  padding-right: 1920px;
}

.ag-ltr .ag-column-select-indent-97 {
  padding-left: 1940px;
}
.ag-rtl .ag-column-select-indent-97 {
  padding-right: 1940px;
}

.ag-ltr .ag-row-group-indent-97 {
  padding-left: 1940px;
}
.ag-rtl .ag-row-group-indent-97 {
  padding-right: 1940px;
}

.ag-ltr .ag-column-select-indent-98 {
  padding-left: 1960px;
}
.ag-rtl .ag-column-select-indent-98 {
  padding-right: 1960px;
}

.ag-ltr .ag-row-group-indent-98 {
  padding-left: 1960px;
}
.ag-rtl .ag-row-group-indent-98 {
  padding-right: 1960px;
}

.ag-ltr .ag-column-select-indent-99 {
  padding-left: 1980px;
}
.ag-rtl .ag-column-select-indent-99 {
  padding-right: 1980px;
}

.ag-ltr .ag-row-group-indent-99 {
  padding-left: 1980px;
}
.ag-rtl .ag-row-group-indent-99 {
  padding-right: 1980px;
}

.ag-ltr {
  direction: ltr;
}
.ag-ltr .ag-body, .ag-ltr .ag-floating-top, .ag-ltr .ag-floating-bottom, .ag-ltr .ag-header, .ag-ltr .ag-body-viewport, .ag-ltr .ag-body-horizontal-scroll {
  flex-direction: row;
}

.ag-rtl {
  direction: rtl;
}
.ag-rtl .ag-body, .ag-rtl .ag-floating-top, .ag-rtl .ag-floating-bottom, .ag-rtl .ag-header, .ag-rtl .ag-body-viewport, .ag-rtl .ag-body-horizontal-scroll {
  flex-direction: row-reverse;
}
.ag-rtl .ag-icon-contracted,
.ag-rtl .ag-icon-tree-closed {
  display: block;
  transform: rotate(180deg);
}

.ag-layout-print.ag-body-viewport {
  flex: none;
}
.ag-layout-print.ag-root-wrapper {
  display: inline-flex;
}
.ag-layout-print .ag-center-cols-clipper {
  min-width: 100%;
}
.ag-layout-print .ag-body-horizontal-scroll {
  display: none;
}
.ag-layout-print.ag-force-vertical-scroll {
  overflow-y: visible !important;
}

@media print {
  .ag-root-wrapper.ag-layout-print,
.ag-root-wrapper.ag-layout-print .ag-root-wrapper-body,
.ag-root-wrapper.ag-layout-print .ag-root,
.ag-root-wrapper.ag-layout-print .ag-body-viewport,
.ag-root-wrapper.ag-layout-print .ag-center-cols-container,
.ag-root-wrapper.ag-layout-print .ag-center-cols-viewport,
.ag-root-wrapper.ag-layout-print .ag-center-cols-clipper,
.ag-root-wrapper.ag-layout-print .ag-body-horizontal-scroll-viewport,
.ag-root-wrapper.ag-layout-print .ag-virtual-list-viewport {
    height: auto !important;
    overflow: hidden !important;
    display: block !important;
  }
  .ag-root-wrapper.ag-layout-print .ag-row {
    page-break-inside: avoid;
  }
}
.ag-body .ag-body-viewport {
  -webkit-overflow-scrolling: touch;
}

.ag-chart {
  position: relative;
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.ag-chart-components-wrapper {
  position: relative;
  display: flex;
  flex: 1 1 auto;
  overflow: hidden;
}

.ag-chart-title-edit {
  position: absolute;
  display: none;
  top: 0;
  left: 0;
  text-align: center;
}

.ag-chart-title-edit.currently-editing {
  display: inline-block;
}

.ag-chart-canvas-wrapper {
  position: relative;
  flex: 1 1 auto;
  overflow: hidden;
}

.ag-charts-canvas {
  display: block;
}

.ag-chart-menu {
  position: absolute;
  top: 10px;
  width: 24px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.ag-ltr .ag-chart-menu {
  right: 20px;
}
.ag-rtl .ag-chart-menu {
  left: 20px;
}

.ag-chart-docked-container {
  position: relative;
  width: 0;
  min-width: 0;
  transition: min-width 0.4s;
}

.ag-chart-menu-hidden ~ .ag-chart-docked-container {
  max-width: 0;
  overflow: hidden;
}

.ag-chart-tabbed-menu {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.ag-chart-tabbed-menu-header {
  flex: none;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  cursor: default;
}

.ag-chart-tabbed-menu-body {
  display: flex;
  flex: 1 1 auto;
  align-items: stretch;
  overflow: hidden;
}

.ag-chart-tab {
  width: 100%;
  overflow: hidden;
  overflow-y: auto;
}

.ag-chart-settings {
  overflow-x: hidden;
}

.ag-chart-settings-wrapper {
  position: relative;
  flex-direction: column;
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
}

.ag-chart-settings-nav-bar {
  display: flex;
  align-items: center;
  width: 100%;
  height: 30px;
  padding: 0 10px;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}

.ag-chart-settings-card-selector {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex: 1 1 auto;
  height: 100%;
  padding: 0 10px;
}

.ag-chart-settings-card-item {
  cursor: pointer;
  width: 10px;
  height: 10px;
  background-color: #000;
  position: relative;
}
.ag-chart-settings-card-item.ag-not-selected {
  opacity: 0.2;
}
.ag-chart-settings-card-item::before {
  content: " ";
  display: block;
  position: absolute;
  background-color: transparent;
  left: 50%;
  top: 50%;
  margin-left: -10px;
  margin-top: -10px;
  width: 20px;
  height: 20px;
}

.ag-chart-settings-prev,
.ag-chart-settings-next {
  position: relative;
  flex: none;
}

.ag-chart-settings-prev-button,
.ag-chart-settings-next-button {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  opacity: 0;
}

.ag-chart-settings-mini-charts-container {
  position: relative;
  flex: 1 1 auto;
  overflow-x: hidden;
  overflow-y: auto;
}

.ag-chart-settings-mini-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  overflow: hidden;
}
.ag-chart-settings-mini-wrapper.ag-animating {
  transition: left 0.3s;
  transition-timing-function: ease-in-out;
}

.ag-chart-mini-thumbnail {
  cursor: pointer;
}

.ag-chart-mini-thumbnail-canvas {
  display: block;
}

.ag-chart-data-wrapper,
.ag-chart-format-wrapper {
  display: flex;
  flex-direction: column;
  position: relative;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}

.ag-chart-data-wrapper {
  height: 100%;
  overflow-y: auto;
}

.ag-chart-data-section,
.ag-chart-format-section {
  display: flex;
  margin: 0;
}

.ag-chart-empty-text {
  display: flex;
  top: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
}

.ag-chart .ag-chart-menu {
  opacity: 0;
  pointer-events: none;
}

.ag-chart-menu-hidden:hover .ag-chart-menu {
  opacity: 1;
  pointer-events: all;
}

.ag-charts-font-size-color {
  display: flex;
  align-self: stretch;
  justify-content: space-between;
}

.ag-charts-data-group-item {
  position: relative;
}

.ag-date-time-list-page-title-bar {
  display: flex;
}

.ag-date-time-list-page-column-labels-row,
.ag-date-time-list-page-entries-row {
  display: flex;
}

.ag-date-time-list-page-column-label,
.ag-date-time-list-page-entry {
  flex-basis: 0;
  flex-grow: 1;
}

.ag-date-time-list-page-entry {
  cursor: pointer;
}

@font-face {
  font-family: "agGridAlpine";
  src: url(data:application/font-woff;charset=utf-8;base64,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) format("woff");
  font-weight: normal;
  font-style: normal;
}
.ag-icon {
  font-family: "agGridAlpine";
  font-size: 16px;
  line-height: 16px;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.ag-icon-aggregation::before {
  content: "\f101";
}

.ag-icon-arrows::before {
  content: "\f102";
}

.ag-icon-asc::before {
  content: "\f103";
}

.ag-icon-cancel::before {
  content: "\f104";
}

.ag-icon-chart::before {
  content: "\f105";
}

.ag-icon-color-picker::before {
  content: "\f109";
}

.ag-icon-columns::before {
  content: "\f10a";
}

.ag-icon-contracted::before {
  content: "\f10b";
}

.ag-icon-copy::before {
  content: "\f10c";
}

.ag-icon-cross::before {
  content: "\f10d";
}

.ag-icon-csv::before {
  content: "\f10e";
}

.ag-icon-desc::before {
  content: "\f10f";
}

.ag-icon-excel::before {
  content: "\f110";
}

.ag-icon-expanded::before {
  content: "\f111";
}

.ag-icon-eye-slash::before {
  content: "\f112";
}

.ag-icon-eye::before {
  content: "\f113";
}

.ag-icon-filter::before {
  content: "\f114";
}

.ag-icon-first::before {
  content: "\f115";
}

.ag-icon-grip::before {
  content: "\f116";
}

.ag-icon-group::before {
  content: "\f117";
}

.ag-icon-last::before {
  content: "\f118";
}

.ag-icon-left::before {
  content: "\f119";
}

.ag-icon-linked::before {
  content: "\f11a";
}

.ag-icon-loading::before {
  content: "\f11b";
}

.ag-icon-maximize::before {
  content: "\f11c";
}

.ag-icon-menu::before {
  content: "\f11d";
}

.ag-icon-minimize::before {
  content: "\f11e";
}

.ag-icon-next::before {
  content: "\f11f";
}

.ag-icon-none::before {
  content: "\f120";
}

.ag-icon-not-allowed::before {
  content: "\f121";
}

.ag-icon-paste::before {
  content: "\f122";
}

.ag-icon-pin::before {
  content: "\f123";
}

.ag-icon-pivot::before {
  content: "\f124";
}

.ag-icon-previous::before {
  content: "\f125";
}

.ag-icon-right::before {
  content: "\f128";
}

.ag-icon-save::before {
  content: "\f129";
}

.ag-icon-small-down::before {
  content: "\f12a";
}

.ag-icon-small-left::before {
  content: "\f12b";
}

.ag-icon-small-right::before {
  content: "\f12c";
}

.ag-icon-small-up::before {
  content: "\f12d";
}

.ag-icon-tick::before {
  content: "\f12e";
}

.ag-icon-tree-closed::before {
  content: "\f12f";
}

.ag-icon-tree-indeterminate::before {
  content: "\f130";
}

.ag-icon-tree-open::before {
  content: "\f131";
}

.ag-icon-unlinked::before {
  content: "\f132";
}

.ag-icon-row-drag::before {
  content: "\f116";
}

.ag-left-arrow::before {
  content: "\f119";
}

.ag-right-arrow::before {
  content: "\f128";
}
`;
