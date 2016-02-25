/** @userObj()
 * @author: Andreu Ferré & Ismael Gómez	
 * @date: 22/02/2016 
 * @description: Comment object
 * @attributes:
		userId:   ID of the user.
		userType: Type of user.
		username: Name of the user that appears on the web.
		password: Password of the user.
		email:    Email of the user.
		name:     Real name of the user.
		surname:  Real surname of the user.
 * @methods:
		construct: Constructor of the series object.
		accessors: Getters and setters of the class attributes.
		validate:  Validate de required fields for any error.
		toString:  Transforms an object to well formated string with the attributes.
 */

function userObj() {

	// Attributes declaration
	this.userId;   // Primary key, unique, not null
	this.userType; // Not null
	this.username; // Unique, not null
	this.password; // Not null
	this.email;    // Not null
	this.name;
	this.surname;
	
	// Constructor method
	this.construct = function(userId, userType, username, password, email, name, surname) {
		this.setUserId(userId);
		this.setUserType(userType);
		this.setUsername(username);
		this.setPassword(password);
		this.setEmail(email);
		this.setName(name);
		this.setSurname(surname);
	}
	
	// Access methods
	this.setUserId = function(userId) { this.userId = userId; }
	this.setUserType = function(userType) { this.userType = userType; }
	this.setUsername = function(username) { this.username = username; }
	this.setPassword = function(password) { this.password = password; }
	this.setEmail = function(email) { this.email = email; }
	this.setName = function(name) { this.name = name; }
	this.setSurname = function(surname) { this.surname = surname; }

	this.getUserId = function() { return this.userId; }
	this.getUserType = function() { return this.userType; }
	this.getUsername = function() { return this.username; }
	this.getPassword = function() { return this.password; }
	this.getEmail = function() { return this.email; }
	this.getName = function() { return this.name; }
	this.getSurname = function() { return this.surname; }
	
	// Other methods
	this.validate = function() {
		var errors = new Array();

		// userId
		try {
			if (this.getUserId().length == 0) {
				errors.push("User ID must be informed.");
			}
		} catch (e) {
			errors.push("User ID must be informed.");
		}

		// userType
		try {
			if (this.getUserType() != "basic" && this.getUserType != "admin") {
				errors.push("User type only can be 'basic' or 'advanced'.");
			}
		} catch (e) {
			errors.push("User type only can be 'basic' or 'advanced'.");
		}

		// username
		try {
			if (this.getUsername().length == 0) {
				errors.push("Username must be informed.");
			}
		} catch (e) {
			errors.push("Username must be informed.");
		}

		// password
		try {
			if (this.getPassword().length == 0) {
				errors.push("Password must be informed.");
			}
		} catch (e) {
			errors.push("Password must be informed.");
		}

		// email
		try {
			if (this.getEmail().length == 0 || this.getEmail().match(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/) == null) {
				errors.push("Email must be correctly informed.");
			}
		} catch (e) {
			errors.push("Email must be correctly informed.");
		}
		
		return errors;
	}

	this.toCookie = function () {
		var cookieString = "user_id=" + this.getUserId();
		cookieString += ":user_type=" + this.getUserType();
		cookieString += ":username=" + this.getUsername();
		cookieString += ":password=" + this.getPassword();
		cookieString += ":email=" + this.getEmail();
		cookieString += ":name=" + this.getName();
		cookieString += ":surname=" + this.getSurname();
		
		return cookieString;		
	}
	
	this.toString = function (){
		var userString = "USER_ID=" + this.getUserId();
		userString += " USER_TYPE=" + this.getUserType();
		userString += " USERNAME=" + this.getUsername();
		userString += " PASSWORD=" + this.getPassword();
		userString += " EMAIL=" + this.getEmail();
		userString += " NAME=" + this.getName();
		userString += " SURNAME=" + this.getSurname();
		return userString;		
	}
}