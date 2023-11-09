require("eslint-config-lostfictions/patch");
module.exports = {
  extends: ["lostfictions/react"],
  parserOptions: { tsconfigRootDir: __dirname },
  ignorePatterns: ["out/"],
};
