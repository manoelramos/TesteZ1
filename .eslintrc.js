// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ["expo", "plugin:prettier/recommended"],
  plugins: ["prettier", "promise", "import", "jsx-a11y", "react"],
  rules: {
    "prettier/prettier": "error",
    "import/prefer-default-export": 0,
    "import/no-named-as-default": 0,
    "import/no-unresolved": 0,
    "import/no-extraneous-dependencies": 0,
    "import/extensions": 0,
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal"],
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
  "sort-imports": ["error", { ignoreDeclarationSort: true }],
  "jsx-a11y/no-noninteractive-element-interactions": "off",
  "jsx-a11y/no-static-element-interactions": "off",
  "jsx-a11y/click-events-have-key-events": "off",
  "jsx-a11y/no-autofocus": "off",
  "no-nested-ternary": 0,
  "consistent-return": 0,
  "array-callback-return": 0,
  "react/jsx-props-no-spreading": 0,
  "no-duplicate-imports": "error",
  "promise/prefer-await-to-callbacks": "error",
  "promise/prefer-await-to-then": "error",
  "react/state-in-constructor": "off",
  "react/no-unescaped-entities": "off",
};
