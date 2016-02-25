(function () {
	var seriesApp = angular.module("seriesApp",["ngCookies"]);
	
	seriesApp.controller("loginCtrl", function ($scope, $cookies) {

		// Controller variables
		this.username = "";
		this.password = "";
		this.usersArray = [];

		// Scope variables
		$scope.generalName = "maecenas";
		$scope.path = "/";

		this.loadMainData = function () {

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
        		if (this.username == usersArray[i].getUsername()) {
        			position = i;
        		}
        	}

        	if (position != -1) {
        		if (this.password == usersArray[position].getPassword()) {
        			this.createCookieSession(usersArray[position]);
        			window.location.href = "html/main.html";
        		} else {
        			// password incorrecto
        		}
        	} else {
        		// usuario no encontrado
        	}

        }
		
		this.createCookieSession = function (user) {
			
			$cookies.put($scope.generalName + "User", user.toCookie(), {path:$scope.path});
			
		}
		
		/*this.showCookies = function () {
			var cookieNumber = 0;
			
			if($cookies.get($scope.generalName)!=undefined) {
				window.open("popUpwindows/popUpwindow.html","");
			} else {
				alert("Shopping cart empty");
			}			
		}
		
		this.removeCookies = function (initPage)
		{
			var cookiesDelete = false;
			
			if (initPage) {
				cookiesDelete = true;
			} else {
				if (confirm("Are you sure you want to remove all your productes in your shopping cart")) {
					cookiesDelete = true;
				}				
			}
			
			if (cookiesDelete) {
				var cookieNumber = 0;
			
				if($cookies.get($scope.generalName)!=undefined) {
					cookieNumber=$.cookie($scope.generalName);
					
					for (var i = 0; i < cookieNumber; i++) {
						$cookies.remove($scope.generalName+i,{path:$scope.path});
					}
					
					$cookies.remove($scope.generalName,{path:$scope.path});
					
					if(!initPage) {
						alert("Products removed from your shopping cart");
					}
				} else {
					if(!initPage) {
						alert("Shopping cart empty");
					} 
				}
			}
		}*/
		
	});
	
})();