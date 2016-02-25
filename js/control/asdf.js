(function () {
	var cookiesApp = angular.module("seriesApp",["ng-currency","ngCookies"]);
	
	cookiesApp.controller("seriesCtrl", function ($scope, $cookies) {

		// Controller variables
		this.series = new seriesObj();
		this.seriesArray = [];
		
		//Scope varibles for cookies management
		/*$scope.generalName = "product";
		$scope.path = "/";
		$scope.mode = 0;*/

		this.loadMainData = function () {

			var product = new productObj();
			product.construct(0, "Tablet", 200, "No");
			this.productsArray.push(product);

			var product = new productObj();
			product.construct(1, "Phone", 900, "Yes");
			this.productsArray.push(product);

			var product = new productObj();
			product.construct(2, "Pc", 1000, "No");
			this.productsArray.push(product);

			var product = new productObj();
			product.construct(3, "Mac", 2000, "No");
			this.productsArray.push(product);

        }
		
		/*this.createCookie = function () {
			var cookieNumber = 0;
			
			if ($cookies.get($scope.generalName) != undefined) {
				cookieNumber = $cookies.get($scope.generalName);
			}
			
			for (var i = 0; i < this.productsArray.length; i++){
				if ($("#cbxbuy" + i).is(":checked")) {
					$.cookie($scope.generalName+cookieNumber, this.productsArray[i].toCookie(), {path:$scope.path});
					cookieNumber++;
				}
			}

			$cookies.put($scope.generalName, cookieNumber, {path:$scope.path});
			
			this.product = new productObj();
			$scope.formExample.$setPristine();
			
			alert("Product correctly isnerted");
			
		}
		
		this.showCookies = function () {
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