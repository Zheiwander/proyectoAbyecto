/** @commentObj()
 * @author: Andreu Ferré & Ismael Gómez	
 * @date: 22/02/2016 
 * @description: Comment object
 * @attributes:
		commentId:     ID of the comment.
		userId:        The id of the user that wrote the comment.
		referenceId:   The reference id of the table depending which relationship invokes the object (series or episode).
		content:       The content of the comment (text).
		positiveVotes: The positive votes that the comment provoked.
		negativeVotes: The negative votes that the comment provoked.	
 * @methods:
		construct: Constructor of the series object.
		accessors: Getters and setters of the class attributes.
		validate:  Validate de required fields for any error.
		toString:  Transforms an object to well formated string with the attributes.
 */

function commentObj() {

	// Attributes declaration
	this.commentId;     // Primary key, unique, not null
	this.userId;        // Foreign key, unique, not null
	this.referenceId;   // Not null
	this.content;       // Not null
	this.positiveVotes;
	this.negativeVotes;
	
	// Constructor method
	this.construct = function (commentId, userId, referenceId, content, positiveVotes, negativeVotes) {
		this.setCommentId(commentId);
		this.setUserId(userId);
		this.setReferenceId(referenceId);
		this.setContent(content);
		this.setPositiveVotes(positiveVotes);
		this.setNegativeVotes(negativeVotes);
	}
	
	// Access methods
	this.setCommentId = function (commentId) { this.commentId = commentId; }
	this.setUserId = function (userId) { this.userId = userId; }
	this.setReferenceId = function (referenceId) { this.referenceId = referenceId; }
	this.setContent = function (content) { this.content = content; }
	this.setPositiveVotes = function (positiveVotes) { this.positiveVotes = positiveVotes; }
	this.setNegativeVotes = function (negativeVotes) { this.negativeVotes = negativeVotes; }
	
	this.getCommentId = function () { return this.commentId; }
	this.getUserId = function () { return this.userId; }
	this.getReferenceId = function () { return this.referenceId; }
	this.getContent = function () { return this.content; }
	this.getPositiveVotes = function () { return this.positiveVotes; }
	this.getNegativeVotes = function () { return this.negativeVotes; }
	
	// Other methods
	this.validate = function () {
		var errors = new Array();
		
		// commentId
		try {
			if (this.getCommentId().length == 0) {
				errors.push("Comment ID must be informed.");
			}
		} catch (e) {
			errors.push("Comment ID must be informed.");
		}
		
		// userId
		try {
			if (this.getUserId().length == 0) {
				errors.push("User ID must be informed.");
			}
		} catch (e) {
			errors.push("User ID must be informed.");
		}

		// referenceId
		try {
			if (this.getReferenceId().length == 0) {
				errors.push("Reference ID must be informed.");
			}
		} catch (e) {
			errors.push("Reference ID must be informed.");
		}

		// content
		try {
			if (this.getContent().length == 0) {
				errors.push("Content must be informed.");
			}
		} catch (e) {
			errors.push("Content must be informed.");
		}
		
		return errors;
	}
	
	this.toString = function (){
		var commentString ="COMMENT_ID=" + this.getCommentId();
		commentString += " USER_ID=" + this.getUserId();
		commentString += " REFERENCE_ID=" + this.getReferenceId();
		commentString += " CONTENT=" + this.getContent();
		commentString += " POSITIVE VOTES=" + this.getPositiveVotes();
		commentString += " NEGATIVE VOTES=" + this.getNegativeVotes();
		return commentString;
	}
}
