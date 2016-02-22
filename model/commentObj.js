/* @commentObj()
 * @author: Andreu Ferré & Ismael Gómez	
 * @date: 22/02/2016 
 * @description: Comment object
 * @Attributes:
 * 		commentId: id for the comment
		userId:the id of the user that wrote the comment(foreignKey)
		referenceId: the reference id of the table depending which relationship invokes the object(series or episode)
		content:the content of the comment(text);
		positiveVotes:the positive votes that the comment provoked;
		negativeVotes:the negative votes that the comment provoked;
		
 * @methods:
 * 		construct
 * 		set's and get's for each attribute
 * 		toString(): transforms an object to well formated string with the attributes
 * 
*/

function commentObj ()
{
	//Attributes declaration
	this.commentId;
	this.userId;
	this.referenceId;
	this.content;
	this.positiveVotes;
	this.negativeVotes;
	

		
	
	//Methods declaration
	this.construct = function (commentId,userId,referenceId,content,positiveVotes, negativeVotes)
	{
		this.setCommentId(commentId);
		this.setUserId(userId);
		this.setReferenceId(referenceId);
		this.setContent(content);
		this.setPositiveVotes(positiveVotes);
		this.setNegativeVotes(negativeVotes);
	}
	
	this.setCommentId = function (commentId){this.commentId=commentId;}
	this.setUserId = function (userId){this.userId=userId;}
	this.setReferenceId = function (referenceId){this.referenceId=referenceId;}
	this.setContent = function (content){this.content=content;}
	this.setPositiveVotes = function (positiveVotes){this.positiveVotes=positiveVotes;}
	this.setNegativeVotes = function (negativeVotes){this.negativeVotes=negativeVotes;}
	
	this.getCommentId = function () {return this.commentId;}
	this.getUserId = function () {return this.userId;}
	this.getReferenceId = function () {return this.referenceId;}
	this.getContent = function () {return this.content;}
	this.getPositiveVotes = function () {return this.positiveVotes;}
	this.getNegativeVotes = function () {return this.negativeVotes;}
	
	
	this.toString = function (){
		var commentString ="Comment-ID="+this.getCommentId()+" USER-ID="+this.getUserId()+" REFERENCE-ID="+this.getReferenceId();
		commentString +=" CONTENT="+this.getContent()+"POSITIVE VOTES="+this.getPositiveVotes()+" NEGATIVE VOTES="+this.getNegativeVotes();
		return commentString;		
	}
}
