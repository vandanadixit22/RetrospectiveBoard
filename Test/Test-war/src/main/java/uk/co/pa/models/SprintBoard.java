package uk.co.pa.models;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;

@Entity
public class SprintBoard {
	@Id
	private Long id;
	
	private String name;
	
	private String desc;
	
	private Key<Comment>[] comments;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDesc() {
		return desc;
	}
	public void setDesc(String desc) {
		this.desc = desc;
	}
	public Key<Comment>[] getComments() {
		return comments;
	}
	public void setComments(Key<Comment>[] comments) {
		this.comments = comments;
	}
}
