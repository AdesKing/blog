package com.AdesKing.Impl;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import com.AdesKing.model.Article;
import com.dbconntion.DB;

public class DivPageImpl {
	private int totalPages;
	private final int PAGE_SIZE=2;
	
	
	
	public int getPerPage(Article article){
		return article.getPage();
	}
	//计算总页数
	public int getTotalPages(Article article) {
		Connection conn=DB.getConn();
 		Statement stmtCount=DB.createStmt(conn);
 		ResultSet rsCount=DB.executQuery(stmtCount, "select count(*) from article");
 		
 		try {
			rsCount.next();
			int totalRecords=rsCount.getInt(1);
	 		totalPages=(totalRecords+PAGE_SIZE-1)/PAGE_SIZE;
	 		
 		}catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		DB.close(stmtCount);
 		DB.close(rsCount);
 		DB.close(conn);
		return totalPages;
	}
	public List<Article> DivPage(Article article){
		
 		int pageNo=article.getPage();//获取页码
 	
 		int totalPages=getTotalPages(article);
 		
 		//检验page是否合法
 		if(pageNo<=0){
 		pageNo=1;
 		}
 		List<Article> articles=new  ArrayList<Article>();
 	
 		//计算开始的id
 		if(pageNo>totalPages)pageNo=totalPages;
 		Connection conn=DB.getConn();
 		Statement stmt=DB.createStmt(conn);
 		int startPos=(pageNo-1)*PAGE_SIZE;
 		String sql="select * from article order by id limit "+startPos +","+PAGE_SIZE;
 		ResultSet rs=DB.executQuery(stmt,sql);
 	
 		//依次把rs的数据中的信息放在a中。
 		try {
			while(rs.next()){
			Article a=new Article();
			
			a.initFromRs(rs);
	
			//把所有的a放在容器article中，
			articles.add(a);
			
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		DB.close(stmt);
 		DB.close(rs);
 		DB.close(conn);
 		return articles;
	}
	
	public Article detail(Article article){
		int id=article.getId();
		Connection conn=DB.getConn();
 		Statement stmt=DB.createStmt(conn);
 		ResultSet rs=DB.executQuery(stmt, "select * from article where id="+id);
 		try {
			rs.next();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		Article a=new Article();
		a.initFromRs(rs);
		
		return a;
	}
	
}
