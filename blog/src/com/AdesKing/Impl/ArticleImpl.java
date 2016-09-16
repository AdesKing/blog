package com.AdesKing.Impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;










import javax.security.auth.message.callback.PrivateKeyCallback.Request;

import com.AdesKing.model.Article;
import com.dbconntion.DB;


public class ArticleImpl {
	
//把获取的数据存入数据库
	public void saveArticle(Article article) {
		Connection conn = DB.getConn();
		String sql = "insert into article values(null,?,?,now())";
		PreparedStatement pstmt = DB.prepareStmt(conn, sql,
				Statement.RETURN_GENERATED_KEYS);
		try {
			
			pstmt.setString(1, article.getTitle());
			pstmt.setString(2, article.getCount());
			pstmt.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			DB.close(conn);
			DB.close(pstmt);
		}
	}

	/*
	 * 取出所有记录放在集合里面.
	 * 
	 * 
	 * public List<Article> list () {
		List<Article> articles=new  ArrayList<Article>();
 		Connection conn=DB.getConn();
		String sql = "select * from article ";
		Statement stmt = DB.createStmt(conn);
	ResultSet rs = DB.executQuery(stmt, sql);
			
		try {
			while (rs.next()) {
				Article a = new Article();
				a.initFromRs(rs);
				articles.add(a);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return articles;
	}
	*/	
	public  void delete(Article article){
		
		int id=article.getId();
		String sql="delete from article where id="+id;
		Connection conn=DB.getConn();
		DB.executeUpdate(conn, sql);
		
		
	}
	//更新内容
	public Article update(Article article){
		  Article a = new Article();
		Connection conn=DB.getConn();
	
		if(article.getCount()!=null){
			SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		    String date=df.format(new Date());
			
		    DB.executeUpdate(conn, "update article set title = "+"'"+article.getTitle()+"'"+","+"cont="+"'"+article.getCount() +"'"+","+"date="+"'"+ date+"'"+" where article.id ="+"'"+article.getId()+"'");
		   return select(article,conn);
			
		}
		
		if(article.getId()==0)return a;
		
		return select(article,conn);
		
		
		
	}
public Article select(Article article,Connection conn){
	    
			String sql = "select * from article where id="+article.getId();
			Statement stmt = DB.createStmt(conn);
		ResultSet rs = DB.executQuery(stmt, sql);

				try {
					rs.next();
					article.initFromRs(rs);
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}finally{
					DB.close(stmt);
					DB.close(conn);
				}
				
			   return article;
			
			}
}

	