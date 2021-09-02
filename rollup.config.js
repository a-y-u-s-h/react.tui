import path from "path"
import pkg from "./package.json"
import node from "@rollup/plugin-node-resolve"
import json from "@rollup/plugin-json"
import yaml from "@rollup/plugin-yaml"
import wasm from "@rollup/plugin-wasm"
import image from "@rollup/plugin-image"
import babel from "@rollup/plugin-babel"
import dsv from "@rollup/plugin-dsv"
import run from "@rollup/plugin-run"
import alias from "@rollup/plugin-alias"
import replace from "@rollup/plugin-replace"
import commonjs from "@rollup/plugin-commonjs"
import { terser } from "rollup-plugin-terser"
import peerdeps from "rollup-plugin-peer-deps-external"

export default {
  input: "src/index.js",
  output: [
    {
      name: `${pkg.name}.min.js`,
      file: pkg.main,
      format: "cjs",
      exports: "named",
      plugins: [terser()]
    }
  ],
  external: [
    "@xstate/react",
    "blessed",
    "neo-blessed",
    "react",
    "react-blessed",
    "react-blessed-contrib"
  ],
  plugins: [
    run(),
    node(),
    json(),
    yaml(),
    wasm(),
    image(),
    dsv(),
    alias({
      entries: [
        {
          find: "@",
          replacement: path.resolve(__dirname, "src/")
        }
      ]
    }),
    babel({
      babelHelpers: "bundled",
      extensions: [".jsx", ".js", ".tsx"],
      exclude: /node_modules/
    }),
    commonjs({ include: /node_modules/ })
  ]
}
