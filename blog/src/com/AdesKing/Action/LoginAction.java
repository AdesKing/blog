package com.AdesKing.Action;

import java.util.Map;

import org.apache.struts2.interceptor.RequestAware;
import org.apache.struts2.interceptor.SessionAware;

import com.AdesKing.model.Article;
import com.opensymphony.xwork2.ActionSupport;
import com.AdesKing.model.Article;
public class LoginAction extends ActionSupport implements SessionAware,RequestAware {
	private Map<String,Object> session;
	private Map<String,Object> request;
	private Article article;

	
	@Override
	public String execute() throws Exception {
		
		if(!article.getUser().trim().equals("admin")){
			if(!article.getPasswd().trim().equals("admin")){
				request.put("error1", "√‹¬Î¥ÌŒÛ");
			}
			request.put("error", "”√ªß√˚¥ÌŒÛ");
			return "error1";
		}
		if(!article.getPasswd().trim().equals("admin")){
			request.put("error1", "√‹¬Î¥ÌŒÛ");
			return "error";
		}else{
		session.put("login", "login");
		return super.execute();
		}
	}



	public Article getArticle() {
		return article;
	}



	public void setArticle(Article article) {
		this.article = article;
	}



	@Override
	public void setSession(Map<String, Object> session) {
		// TODO Auto-generated method stub
		this.session=session;
	}



	@Override
	public void setRequest(Map<String, Object> request) {
		// TODO Auto-generated method stub
		this.request=request;
	}

}
