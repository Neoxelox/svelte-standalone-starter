module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-standard-scss",
    "stylelint-config-prettier",
    "stylelint-config-html/svelte",
  ],
  plugins: ["stylelint-scss", "stylelint-order"],
  rules: {
    "scss/at-rule-no-unknown": [true, { ignoreAtRules: ["tailwind", "apply", "variants", "responsive", "screen"] }],
    "function-no-unknown": [true, { ignoreFunctions: ["theme"] }],
    "color-hex-length": "long",
    "declaration-block-trailing-semicolon": null,
    "no-descending-specificity": null,
    "no-empty-source": null,
  },
};
