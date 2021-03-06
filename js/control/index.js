(function () {
	var seriesApp = angular.module("seriesApp",["ngCookies"]);
	
	seriesApp.controller("loginCtrl", function ($scope, $cookies) {

		// Controller variables
		this.username = "";
		this.password = "";
		this.error = "";
		this.boolError = false;
		this.usersArray = [];

		// Scope variables
		$scope.generalName = "maecenas";
		$scope.path = "/";
		$scope.showAction=1;

		this.loadMainData = function () {

			$("#messageBox").hide();

			var user = new userObj();
			user.construct(0, "admin", "andreu", "andreu", "andreu@proven.cat", "Andreu", "Ferré Moreno");
			this.usersArray.push(user);

			var user = new userObj();
			user.construct(1, "admin", "isma", "isma", "isma@proven.cat", "Ismael", "Gómez Díaz");
			this.usersArray.push(user);

			var user = new userObj();
			user.construct(2, "basic", "alumne", "alumne", "alumne@proven.cat", "alumne", "alumne");
			this.usersArray.push(user);

        }

        this.doLogin = function() {

        	var position = -1;

        	for (var i = 0; i < this.usersArray.length; i++) {
        		if (this.username == this.usersArray[i].getUsername()) {
        			position = i;
        		}
        	}

        	if (position != -1) {
        		if (this.password == this.usersArray[position].getPassword()) {
        			this.createCookieSession(this.usersArray[position]);
        			window.location.href = "html/main.html";
        		} else {
        			this.error = "Password incorrect";
        			this.boolError = true;
        		}
        	} else {
        		this.error = "Username incorrect";
        		this.boolError = true;
        	}

        }
        this.validateRegistration = function() {
			var allOk = true;
			
			if (this.register.email().match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/) == null) {
				this.register.emailErrorText = "Please enter a valid email";
				allOk = false;
			}
			if (allOk) {
				this.registrationList.push(this.registration);
				this.user = new userObj();
				$scope.registerManagement.$setPristine();
			}
		}
		
		this.createCookieSession = function (user) {
			
			$cookies.put($scope.generalName + "User", user.toCookie(), {path:$scope.path});
			
		}

	});

		seriesApp.directive("registerForm", function (){
		return {
		  restrict: 'E',
		  templateUrl:"view/templates/register-form.html",
		  controller:function(){
		  },
		  controllerAs: 'registerForm'
		};
	});
	
})();

