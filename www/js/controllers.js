var packageTrackingControllers = angular.module('packageTrackingControllers', []);

packageTrackingControllers.controller('homeCtrl', ['$scope',
	function($scope) {
		$scope.testAlert = function() {
			alert("test");
		};
		$scope.camera = function() {
			var pictureSource = navigator.camera.PictureSourceType;
			var destinationType = navigator.camera.DestinationType;

			function onPhotoDataSuccess(imageData) {
				var smallImage = document.getElementById('smallImage');
				smallImage.style.display = 'block';
				smallImage.src = "data:image/jpeg;base64," + imageData;
			}

			function capturePhoto() {
				navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
					quality: 50,
					destinationType: Camera.DestinationType.DATA_URL
				});
			}

			function onFail(message) {
				console.log('Failed because: ' + message);
			}

			capturePhoto();
		};
		$scope.clearImg = function(){
			var smallImage = document.getElementById('smallImage');
			smallImage.style.display = 'none';
			smallImage.src = "";
		};
		$scope.scan = function() {
			cordova.plugins.barcodeScanner.scan(
				function(result) {
					alert("We got a barcode\n" +
						"Result: " + result.text + "\n" +
						"Format: " + result.format + "\n" +
						"Cancelled: " + result.cancelled);
				},
				function(error) {
					alert("Scanning failed: " + error);
				}
			);
		};
	}
]);