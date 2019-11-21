module.exports = {
  "testEnvironment": "node",
  "roots": [
    "src"
  ],
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "reporters": [
    "default",
    [
      "./node_modules/jest-html-reporter",
      {
        "pageTitle": "Tests report",
        "includeFailureMsg": true,
        "includeConsoleLog": true,
        "outputPath": "test-report/index.html"
      }
    ]
  ]
}
