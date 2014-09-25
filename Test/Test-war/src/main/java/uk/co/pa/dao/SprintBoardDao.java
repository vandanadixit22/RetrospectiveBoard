package uk.co.pa.dao;

import java.util.List;

import uk.co.pa.models.Comment;
import uk.co.pa.models.SprintBoard;

import com.googlecode.objectify.LoadResult;

public class SprintBoardDao {
	
	public List<Comment> load(){
		List<Comment> comments =  OfyService.ofy().load().type(Comment.class).list();
		return comments;
	}
	
	public LoadResult<Comment> loadAllComments(Long sprintBoardId){
		return OfyService.ofy().load().type(Comment.class).parent(SprintBoard.class).id(sprintBoardId);
	}
	
	public void saveSprintBoard(SprintBoard sprintBoard){
		OfyService.ofy().save().entities(sprintBoard).now();
	}
	
	public void saveComments(Comment comment){
		OfyService.ofy().save().entities(comment).now();
	}
}
