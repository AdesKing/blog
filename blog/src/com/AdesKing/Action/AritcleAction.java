package com.AdesKing.Action;

import java.util.List;

import javax.mail.Session;

import com.AdesKing.Impl.ArticleImpl;
import com.AdesKing.Impl.DivPageImpl;
import com.AdesKing.model.Article;
import com.opensymphony.xwork2.ActionSupport;

public class AritcleAction extends ActionSupport {
	private Article article;
	private int totalPages;
	private int perPage;

	private List<Article> articles;
	ArticleImpl articleImpl = new ArticleImpl();
	DivPageImpl divPageImpl = new DivPageImpl();

	public List<Article> getArticles() {
		return articles;
	}

	public void setArticles(List<Article> articles) {
		this.articles = articles;
	}

	@Override
	public String execute() throws Exception {
		articleImpl.saveArticle(article);

		return SUCCESS;
	}

	public String list() {
		articles = divPageImpl.DivPage(article);
		totalPages = divPageImpl.getTotalPages(article);
		return SUCCESS;
	}

	public String delete() {

		articleImpl.delete(article);
		return SUCCESS;

	}

	public String div() {
		articles = divPageImpl.DivPage(article);
		totalPages = divPageImpl.getTotalPages(article);
		perPage = divPageImpl.getPerPage(article);
		return SUCCESS;
	}

	public String massage_Detail() {
		article = divPageImpl.detail(article);
		return SUCCESS;
	}

	public String update() {
		if (article.getId() == 0) {
			return "noUpdate";
		}
		article = articleImpl.update(article);
		return SUCCESS;
	}

	public Article getArticle() {
		return article;
	}

	public void setArticle(Article article) {
		this.article = article;
	}

	public int getTotalPages() {
		return totalPages;
	}

	public void setTotalPages(int totalPages) {
		this.totalPages = totalPages;
	}

	public int getPerPage() {
		return perPage;
	}

	public void setPerPage(int perPage) {
		this.perPage = perPage;
	}

}
