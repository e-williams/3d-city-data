import {
  createHotContext
} from "/build/_shared/chunk-KSGEUDUM.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.tsx"
  );
  import.meta.hot.lastModified = "1710893436764.3887";
}
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { id: "index-page", children: [
    "This is a demo for Remix.",
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    "Check out",
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://remix.run", children: "the docs at remix.run" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    "."
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 22,
    columnNumber: 10
  }, this);
}
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default
};
//# sourceMappingURL=/build/routes/_index-KHXAM5FG.js.map
