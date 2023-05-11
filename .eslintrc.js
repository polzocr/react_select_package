module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 14,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [2, "tab"],
        "no-tabs": 0,
        // "react/jsx-indent": ["error", 2],
        // "react/jsx-indent-props": ["error", 2],
    }
};
