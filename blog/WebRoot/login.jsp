<%@page pageEncoding="utf-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="/struts-tags" prefix="s" %>

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>登录页面</title>
 <link  rel="stylesheet"  type="text/css"  href="files/stype.css">
 
</head>

<body>
<div class="wrap1">
			<div class="main">登录</diV>
			
			<form action="massage_login"method="post">
										
				<div class="btn">用户：<input type="text" name="article.user" value='<s:property value="article.user"/>'/></div>
				<div class="btn">密码：<input type="password" name="article.passwd"/></div>
				<div class=" btn"><input type="submit" value="提交"></div>
				
			</div>
			</form>
			<div class=""><h3><s:property value="#request.error"/></h3></diV>
			<br/><s:property value="#request.error1"/>
</body>
</html>