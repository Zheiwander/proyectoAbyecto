/** @episodeObj()
 * @author: Andreu Ferré & Ismael Gómez
 * @date: 22/02/2016
 * @description: Object episode
 * @attributes:
		episodeId:     ID of the episode.
		seriesId:      ID of the series that containing this episode.
		episodeNumber: Season and number of the episode.
		rating:        Rating of the episode.
		episodeName:   Name of the episode.
		releaseDate:   Release date of the episode.
 * @methods:
		construct: Constructor of the episode object.
		accessors: Getters and setters of the class attributes.
		validate:  Validate de required fields for any error.
		toString:  Transforms an object to well formated string with the attributes.
 */

function episodeObj () {

	// Attributes declaration
	this.episodeId;     // Primary key, unique, no null
	this.seriesId;      // Foreign key, unique, no null
	this.episodeNumber; // Unique, no null
	this.rating;        // Not used yet
	this.episodeName;
	this.releaseDate;
	
	// Constructor method
	this.construct = function (episodeId, seriesId, episodeNumber, rating, episodeName, releaseDate) {
		this.setEpisodeId(episodeId);
		this.setSeriesId(seriesId);
		this.setEpisodeNumber(episodeNumber);
		this.setRating(rating);
		this.setEpisodeName(episodeName);
		this.setReleaseDate(releaseDate);
	}
	
	// Access methods
	this.setEpisodeId = function(episodeId) { this.episodeId = episodeId; }
	this.setSeriesId = function(seriesId) { this.seriesId = seriesId; }
	this.setEpisodeNumber = function(episodeNumber) { this.episodeNumber = episodeNumber; }
	this.setRating = function(rating) { this.rating = rating; }
	this.setEpisodeName = function(episodeName) { this.episodeName = episodeName; }
	this.setReleaseDate = function(releaseDate) { this.releaseDate = releaseDate; }
	
	this.getEpisodeId = function() { return this.episodeId; }
	this.getSeriesId = function() { return this.seriesId; }
	this.getEpisodeNumber = function() { return this.episodeNumber; }
	this.getRating = function() { return this.rating; }
	this.getEpisodeName = function() { return this.episodeName; }
	this.getReleaseDate = function() { return this.releaseDate; }
	
	// Other methods
	this.validate = function () {
		var errors = new Array();
		
		// episodeId
		try {
			if (this.getEpisodeId().length == 0) {
				errors.push("Episode ID must be informed.");
			}
		} catch (e) {
			errors.push("Episode ID must be informed.");
		}

		// seriesId
		try {
			if (this.getSeriesId().length == 0) {
				errors.push("Series ID must be informed.");
			}
		} catch (e) {
			errors.push("Series ID must be informed.");
		}

		// episodeNumber
		try {
			if (this.getEpisodeNumber().length == 0 || this.getEpisodeNumber().match(/^[0-9]{1,2}[x]{1}[0-9]{1,3}$/) == null) {
				errors.push("Episode number must be correctly informed.");
			}
		} catch (e) {
			errors.push("Episode number must be correctly informed.");
		}
		
		return errors;
	}
	
	this.toString = function (){
		var episodeString ="EPISODE_ID=" + this.getEpisodeId();
		episodeString += " SERIES_ID=" + this.getSeriesId();
		episodeString += " EPISODE_NUMBER=" + this.getEpisodeNumber();
		episodeString += " RATING=" + this.getRating();
		episodeString += " EPISODE_NAME=" + this.getEpisodeName();
		episodeString += " RELEASE_DATE=" + this.getReleaseDate();
		return episodeString;
	}
}