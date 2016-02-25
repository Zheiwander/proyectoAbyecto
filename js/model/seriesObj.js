/** @seriesObj()
 * @author: Andreu Ferré & Ismael Gómez
 * @date: 22/02/2016
 * @description: Object series
 * @attributes:
		seriesId:       ID of the series.
		seriesName:     Name of the series.
		rating:         Rating of the series.
		actors:         Array of actors (actorId) who appear in the series.
		episodes:       Array of episodes (episodeId) of this series.
		usersFollowing: Array of users (userId) that are following the series.
		releaseYear:    Year in which the series premiered.
		synopsis:       Description of the series.
 * @methods:
		construct: Constructor of the series object.
		accessors: Getters and setters of the class attributes.
		validate:  Validate de required fields for any error.
		toString:  Transforms an object to well formated string with the attributes.
 */

function seriesObj() {

	// Attributes declaration
	this.seriesId;            // Primary key, unique, not null
	this.seriesName;          // Not null
	this.rating;              // Not used yet
	this.actors = [];         // Not used yet
	this.episodes = [];
	this.usersFollowing = []; // Not used yet
	this.releaseYear;
	this.synopsis;
	
	// Constructor method
	this.construct = function(seriesId, seriesName, rating, actors, episodes, usersFollowing, releaseYear, synopsis) {
		this.setSeriesId(seriesid);
		this.setSeriesName(seriesName);
		this.setRating(rating);
		this.setActors(actors);
		this.setEpisodes(episodes);
		this.setUsersFollowing(usersFollowing);
		this.setReleaseYear(releaseYear);
		this.setSynopsis(synopsis);
	}

	// Access methods
	this.setSeriesId = function(seriesId) { this.seriesId = seriesId; }
	this.setSeriesName = function(seriesName) { this.seriesName = seriesName; }
	this.setRating = function(rating) { this.rating = rating; }
	this.setActors = function(actors) { this.actors = actors; }
	this.setEpisodes = function(episodes) { this.episodes = episodes; }
	this.setUsersFollowing = function(usersFollowing) { this.usersFollowing = usersFollowing; }
	this.setReleaseYear = function(releaseYear) { this.releaseYear = releaseYear; }
	this.setSynopsis = function(synopsis) { this.synopsis = synopsis; }

	this.addUsersFollowing = function(userId) {
		this.specialRequests.push(userId);
	}

	this.getSeriesId = function() { return this.seriesId; }
	this.getSeriesName = function() { return this.seriesName; }
	this.getRating = function() { return this.rating; }
	this.getActors = function() { return this.actors; }
	this.getEpisodes = function() { return this.episodes; }
	this.getUsersFollowing = function() { return this.usersFollowing; }
	this.getReleaseYear = function() { return this.releaseYear; }
	this.getSynopsis = function() { return this.synopsis; }

	this.removeUsersFollowing = function(userId) {
		for (var i = 0; i < this.getUsersFollowing().length; i++) {
			if (this.getUsersFollowing()[i] == userId) {
				this.usersFollowing.splice(i, 1);
				break;
			}		
		}
	}
	
	// Other methods
	this.validate = function() {
		var errors = new Array();
		
		// seriesId
		try {
			if (this.getSeriesId().length == 0) {
				errors.push("Series ID must be informed.");
			}
		} catch (e) {
			errors.push("Series ID must be informed.");
		}
		
		// seriesName
		try {
			if (this.getSeriesName().length == 0) {
				errors.push("Series name must be informed.");
			}
		} catch (e) {
			errors.push("Series name must be informed.");
		}
		
		return errors;
	}
	
	this.toString = function() {
		var seriesString = "SERIES_ID=" + this.getSeriesId();
		seriesString += " SERIES_NAME=" + this.getSeriesName();
		seriesString += " RATING=" + this.getRating();
		seriesString += " ACTORS=" + this.getActors();
		seriesString += " EPISODES=" + this.getEpisodes();
		seriesString += " USERS_FOLLOWING=" + this.getUsersFollowing();
		seriesString += " RELEASE_YEAR=" + this.getReleaseYear();
		seriesString += " SYNOPSIS=" + this.getSynopsis();
		return seriesString;		
	}
}