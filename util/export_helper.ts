// vue-loader 编译 .vue 文件时会自动 `import exportComponent from '<...>/vue-loader/dist/exportHelper.js'`,
// 而 exportHelper.js 是 CommonJS 模块。在本项目的单文件 ESM 输出 (experiments.outputModule) 中,
// webpack 会用 `__webpack_require__.cjs(...)` 包装它, 但此构建模式下 webpack 不会生成
// `__webpack_require__` 的定义 (webpack 5.109 的 CommonJsWrapRuntimeModule 未声明对
// RuntimeGlobals.require 的依赖), 导致运行时 `ReferenceError: __webpack_require__ is not defined`。
// 因此用本文件 (与 exportHelper.js 行为完全一致的 ESM 版本) 替换它, 使模块图中不再出现 CJS 模块。
export default function exportComponent(sfc: any, props: [string, any][]) {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
}
