var gameBaseURL =
  "https://github.com/giancosta86/TwoBinGame/releases/latest"

var managerBaseURL =
  "https://github.com/giancosta86/TwoBinManager/releases/latest"


function onMobileDevice() {
  return window.screen.availWidth < 840
}


window.onload = function() {
  if (!onMobileDevice()) {
    setupBundleDownloads()
    setupRunWithMoonDeployButtons()
    setupDownloadBinaryZipButtons()
  }
}


function setupBundleDownloads() {
  var bundleChoiceBox = document.getElementById("bundleChoiceBox")

  bundleChoiceBox.addEventListener("change", function() {
    var bundleFile = bundleChoiceBox.options[bundleChoiceBox.selectedIndex].value

    var downloadBundleButton = document.getElementById("downloadBundleButton")

    downloadBundleButton.href = bundleFile
  })

  var bundleBox = document.getElementById("bundleBox")
  bundleBox.style.display = "block"
}



function setupRunWithMoonDeployButtons() {
  getLatestMoonDescriptor(
    gameBaseURL,

    "App.moondeploy",

    function(descriptorURL) {
      var runButton = document.getElementById("runGame")
      runButton.href = descriptorURL
      runButton.style.display = "inline-block"
    },

    function(statusCode) {
      console.log("Error while retrieving the MoonDeploy descriptor for TwoBinGame")
      console.log(statusCode)
    }
  )


  getLatestMoonDescriptor(
    managerBaseURL,

    "App.moondeploy",

    function(descriptorURL) {
      var runButton = document.getElementById("runManager")
      runButton.href = descriptorURL
      runButton.style.display = "inline-block"
    },

    function(statusCode) {
      console.log("Error while retrieving the MoonDeploy descriptor for TwoBinManager")
      console.log(statusCode)
    }
  )
}



function setupDownloadBinaryZipButtons() {
  getLatestReleaseArtifact(
    gameBaseURL,

    "TwoBinGame",

    ".zip",

    function(zipURL) {
      var downloadBinaryZipButton = document.getElementById("downloadGame")
      downloadBinaryZipButton.href = zipURL
      downloadBinaryZipButton.style.display = "inline-block"
    },

    function(statusCode) {
      console.log("Error while retrieving the binary zip artifact for TwoBinGame")
      console.log(statusCode)
    }
  )


  getLatestReleaseArtifact(
    managerBaseURL,

    "TwoBinManager",

    ".zip",

    function(zipURL) {
      var downloadBinaryZipButton = document.getElementById("downloadManager")
      downloadBinaryZipButton.href = zipURL
      downloadBinaryZipButton.style.display = "inline-block"
    },

    function(statusCode) {
      console.log("Error while retrieving the binary zip artifact for TwoBinManager")
      console.log(statusCode)
    }
  )
}
