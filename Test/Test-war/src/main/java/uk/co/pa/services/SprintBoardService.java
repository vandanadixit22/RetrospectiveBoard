package uk.co.pa.services;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import uk.co.pa.dao.SprintBoardDao;
import uk.co.pa.models.Comment;
 
@Path("/sprintBoard")
public class SprintBoardService {
 
	@GET
	@Path("/show")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Comment> show() {
		SprintBoardDao boardDao = new SprintBoardDao();
 		return boardDao.load();
 	}
	
	@POST
	@Path("/create")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Comment[] create(Comment[] comment) {
 		SprintBoardDao boardDao = new SprintBoardDao();
 		for (int i = 0; i < comment.length; i++) {
 			boardDao.saveComments(comment[i]);
		}
 		return comment;
 	}
	
	@GET
	@Path("/delete/{param}")
	public Response delete(@PathParam("param") String msg) {
 		String output = "Jersey say : " + msg;
 		return Response.status(200).entity(output).build();
 	}
 
}