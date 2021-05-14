<%@page import="com.Order"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.6.0.min.js"></script>
<script src="Components/Order.js"></script>

<meta charset="ISO-8859-1">
<title>Order Management</title>
</head>
<body>
<div class="container"><div class="row"><div class="col-6">
<h1>Order Management</h1>

	<form id="formItem" name="formItem">
		
		 Buyer Name:
		<input id="buyerName" name="buyerName" type="text" class="form-control form-control-sm"><br> 
		 Address:
		<input id="address" name="address" type="text" class="form-control form-control-sm"><br>
		 NIC:
		<input id="NIC" name="NIC" type="text" class="form-control form-control-sm"><br>
		 Software Name:
		<input id="softwareName" name="softwareName" type="text" class="form-control form-control-sm"><br>
		 Cost:
		<input id="cost" name="cost" type="text" class="form-control form-control-sm"><br>
		 Date:
		<input id="date" name="date" type="text" class="form-control form-control-sm"><br>
		 Status:
		<select id="status" name="status" class="form-control form-control-sm">
							<option value="Processing">Processing</option>
							<option value="Processed">Processed</option>
							<option value="Deleiverd">Delivered</option>
							</select>

		
		
		<input id="btnSave" name="btnSave" type="button" value="Save" class="btn btn-primary">
		<input type="hidden" id="hidItemIDSave" name="hidItemIDSave" value="">
	</form>
	
	<div id="alertSuccess" class="alert alert-success"></div>
<div id="alertError" class="alert alert-danger"></div>
	<br>
	<div id="divItemGrid">
	<%
	Order orderObj = new Order(); 
		 out.print(orderObj.readOrder());
	%>
	</div>
</div> </div> </div> 
	
</body>
</html>