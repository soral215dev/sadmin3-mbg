module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  extends: [
    "@vue/prettier",
    "@vue/typescript",
    "plugin:vue/essential",
    "eslint:recommended"
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",

    // Best Practices
    eqeqeq: "error",
    "no-invalid-this": "error",
    "no-return-assign": "error",
    "no-unused-expressions": ["error", { allowTernary: true }],
    "no-useless-concat": "error",
    "no-useless-return": "error",

    // Variable
    "init-declarations": "error",
    "no-use-before-define": "error",

    // Stylistic Issues
    "array-bracket-newline": ["error", { multiline: true, minItems: null }],
    "array-bracket-spacing": "error",
    "brace-style": ["error", "1tbs", { allowSingleLine: true }],
    "block-spacing": "error",
    "comma-dangle": "error",
    "comma-spacing": "error",
    "comma-style": "error",
    "computed-property-spacing": "error",
    "func-call-spacing": "error",
    "implicit-arrow-linebreak": ["error", "beside"],
    indent: [0, "tab"],
    "no-tabs": 0,
    "keyword-spacing": "error",
    "multiline-ternary": ["error", "never"],
    "no-lonely-if": "error",
    "no-mixed-operators": "error",
    "no-multiple-empty-lines": ["error", { max: 12, maxEOF: 10 }],
    "no-unneeded-ternary": "error",
    "no-whitespace-before-property": "error",
    "nonblock-statement-body-position": "error",
    "object-property-newline": [
      "error",
      { allowAllPropertiesOnSameLine: true }
    ],
    "operator-linebreak": [2, "none"],
    "quote-props": ["error", "consistent"],
    // 'semi': ['error', 'never'],
    "semi-spacing": "error",
    "space-before-blocks": "error",
    "space-before-function-paren": [
      "off",
      {
        anonymous: "always",
        named: "never",
        asyncArrow: "always"
      }
    ],
    "space-in-parens": "error",
    "space-infix-ops": "error",
    "space-unary-ops": "error",

    // ES6
    "arrow-spacing": "error",
    "no-confusing-arrow": "error",
    "no-duplicate-imports": "error",
    "no-var": "error",
    "object-shorthand": "error",
    "prefer-const": "error",
    "prefer-template": "error",

    // Vue
    "vue/html-quotes": ["error", "double"],
    /**********************/
    /* General Code Rules */
    /**********************/

    // Enforce import order
    "import/order": "error",

    // Imports should come first
    "import/first": "error",

    // Other import rules
    "import/no-mutable-exports": "error",

    // Allow unresolved imports
    "import/no-unresolved": "off",

    // Allow async-await
    "generator-star-spacing": "off",

    // Prefer const over let
    "prefer-const": [
      "error",
      {
        destructuring: "any",
        ignoreReadBeforeAssign: false
      }
    ],

    // No single if in an "else" block
    "no-lonely-if": "error",

    // Force curly braces for control flow,
    // including if blocks with a single statement
    curly: ["error", "all"],

    // No async function without await
    "require-await": "error",

    // Force dot notation when possible
    "dot-notation": "error",

    "no-var": "error",

    // Force object shorthand where possible
    "object-shorthand": "error",

    // No useless destructuring/importing/exporting renames
    "no-useless-rename": "error",

    /**********************/
    /*     Vue Rules      */
    /**********************/

    // Disable template errors regarding invalid end tags
    "vue/no-parsing-error": [
      "error",
      {
        "x-invalid-end-tag": false
      }
    ],

    // Maximum 5 attributes per line instead of one
    "vue/max-attributes-per-line": [
      "error",
      {
        singleline: 5
      }
    ],

    /***************************/
    /* ESLint Vue Plugin Rules */
    /***************************/
    "vue/html-indent": [
      "error",
      "tab",
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: []
      }
    ],

    "vue/order-in-components": [
      "error",
      {
        order: [
          "el",
          "name",
          "parent",
          "functional",
          ["delimiters", "comments"],
          ["components", "directives", "filters"],
          "extends",
          "mixins",
          "inheritAttrs",
          "model",
          ["props", "propsData"],
          "fetch",
          "asyncData",
          "data",
          "computed",
          "watch",
          "LIFECYCLE_HOOKS",
          "methods",
          "head",
          ["template", "render"],
          "renderError"
        ]
      }
    ],

    "vue/html-self-closing": ["off"],

    // https://eslint.vuejs.org/rules/attributes-order.html
    // TODO: 팀 내 기준으로 재조정 필요
    "vue/attributes-order": [
      "error",
      {
        order: [
          "DEFINITION",
          "LIST_RENDERING",
          "CONDITIONALS",
          "RENDER_MODIFIERS",
          "GLOBAL",
          "UNIQUE",
          "TWO_WAY_BINDING",
          "OTHER_DIRECTIVES",
          "OTHER_ATTR",
          "EVENTS",
          "CONTENT"
        ]
      }
    ]
  },
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module"
  }
};
