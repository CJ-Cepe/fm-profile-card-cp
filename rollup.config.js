import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";

export default {
  input: "src/App.jsx",
  output: {
    file: "dist/bundle.js",
    format: "iife",
    name: "App",
    globals: {
      react: "React",
      "react-dom": "ReactDOM",
    },
  },
  external: ["react", "react-dom"],
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
      preventAssignment: true,
    }),
    resolve({
      extensions: [".js", ".jsx"],
    }),
    commonjs(),
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
      extensions: [".js", ".jsx"],
      presets: ["@babel/preset-react"],
    }),
  ],
};
