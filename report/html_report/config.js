report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/Entire_document.png",
        "test": "../bitmaps_test/20210705-103203/Entire_document.png",
        "selector": "",
        "fileName": "Entire_document.png",
        "label": "Entire document",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/hello-world/",
        "expect": 0,
        "viewportLabel": "custom-size",
        "engineErrorMsg": "net::ERR_CONNECTION_REFUSED at http://localhost:8080/index.html",
        "error": "Test file not found /home/arsen/Public/homeworks/layout_hello-world/backstop_data/bitmaps_test/20210705-103203/Entire_document.png"
      },
      "status": "fail"
    }
  ]
});