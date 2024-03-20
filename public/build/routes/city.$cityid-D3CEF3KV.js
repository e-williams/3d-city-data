import {
  createHotContext
} from "/build/_shared/chunk-KSGEUDUM.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/city.$cityid.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/city.$cityid.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/city.$cityid.tsx"
  );
  import.meta.hot.lastModified = "1710901120555.502";
}
var Map = (0, import_react.lazy)(_c = () => import("/build/_shared/esm-5H77DDLW.js"));
_c2 = Map;
function City() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "Loading..." }, void 0, false, {
    fileName: "app/routes/city.$cityid.tsx",
    lineNumber: 27,
    columnNumber: 30
  }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Map, { mapboxAccessToken: "pk.eyJ1IjoiZS13aWxsaWFtcyIsImEiOiJjbHR6MmhqdTAwbm5rMmt1a3B4NW5sbTl5In0.USzDUJuw69haMQgOoGESbQ", initialViewState: {
    longitude: -122.4,
    latitude: 37.8,
    zoom: 14
  }, style: {
    width: "100%",
    height: "100%"
  }, mapStyle: "mapbox://styles/mapbox/dark-v9" }, void 0, false, {
    fileName: "app/routes/city.$cityid.tsx",
    lineNumber: 28,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/city.$cityid.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
}
_c3 = City;
var _c;
var _c2;
var _c3;
$RefreshReg$(_c, "Map$lazy");
$RefreshReg$(_c2, "Map");
$RefreshReg$(_c3, "City");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  City as default
};
//# sourceMappingURL=/build/routes/city.$cityid-D3CEF3KV.js.map
