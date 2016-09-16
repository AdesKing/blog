package com.AdesKing.model;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Date;

public class Article {
	private String title;
	private String count;
	private int id;
	private Date pdate;
	private int page;
	private String user;
	private String passwd;
	public String getUser() {
		return user;
	}
	public void setUser(String user) {
		this.user = user;
	}
	public String getPasswd() {
		return passwd;
	}
	public void setPasswd(String passwd) {
		this.passwd = passwd;
	}
	public int getPage() {
		return page;
	}
	public void setPage(int page) {
		this.page = page;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public Date getPdate() {
		return pdate;
	}
	public void setPdate(Date pdate) {
		this.pdate = pdate;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getCount() {
		return count;
	}
	public void setCount(String count) {
		this.count = count;
		
	}
	
	public void initFromRs(ResultSet rs){
		try {
			setId(rs.getInt("id"));
			setTitle(rs.getString("title"));
			setPdate(rs.getTimestamp("date"));
			setCount(rs.getString("cont"));
		} catch (SQLException e) {
		
			e.printStackTrace();
		}
		
	}
}
