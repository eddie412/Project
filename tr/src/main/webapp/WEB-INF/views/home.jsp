<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<html>
<head>
	<title>전통 이酒 </title>
</head>
<body>
	<div id="root">
		<header id = "header">
			<div id="header_box">
				<%@ include file = "include/header.jsp" %>
			</div>
		</header>
		
		<nav id= "nav">
			<div id="nav_box">
				<%@ include file = "include/nav.jsp" %>
			</div>
		</nav>
		
		<section id="container">
			<div id="container_box">
				본문
			</div>
		
		</section>
		
		<footer>
			<div id="footer_box">
				<%@ include file = "include/footer.jsp" %>
			</div>
		</footer>
	</div>

</body>
</html>
