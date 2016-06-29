var Observable = require("data/observable").Observable;
var dialogs = require("ui/dialogs");
var firebase = require("nativescript-plugin-firebase");

function createViewModel() {
  var viewModel = new Observable();
  viewModel.onInit = function () {
    firebase.init({
      // Optionally pass in properties for database, authentication and cloud messaging,
      // see their respective docs.
    }).then(
      function (instance) {
        console.log("firebase.init done");
      },
      function (error) {
        console.log("firebase.init error: " + error);
      }
      );
  }

  viewModel.onFBLogin = function () {
    firebase.login({
      type: firebase.LoginType.FACEBOOK
    }).then(
      function (result) {
       console.log(JSON.stringify(result));
      },
      function (errorMessage) {
        console.log(errorMessage);
      }
      )
  }
  return viewModel;
}

exports.createViewModel = createViewModel;