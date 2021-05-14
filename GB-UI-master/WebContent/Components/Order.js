$(document).on("click", "#btnSave", function(event){ 
	
	// Clear alerts---------------------
	 $("#alertSuccess").text(""); 
	 $("#alertSuccess").hide(); 
	 $("#alertError").text(""); 
	 $("#alertError").hide(); 
 
	 
	// Form validation-------------------
	var status = validateItemForm(); 
	if (status != true) 
	 { 
	 $("#alertError").text(status); 
	 $("#alertError").show(); 
	 
 return; 
} 


// If valid------------------------
var type = ($("#hidItemIDSave").val() == "") ? "POST" : "PUT"; 
	$.ajax( 
	{ 
	 url : "OrderAPI", 
	 type : type, 
	 data : $("#formItem").serialize(), 
	 dataType : "text", 
	 complete : function(response, status) { 
		 
		 onItemSaveComplete(response.responseText, status); 
	 } 
	}); 
});

function onItemSaveComplete(response, status){ 
	if (status == "success") {
		
		 var resultSet = JSON.parse(response); 
		 if (resultSet.status.trim() == "success") { 
			 
			 $("#alertSuccess").text("Successfully saved."); 
			 $("#alertSuccess").show(); 
			 $("#divItemsGrid").html(resultSet.data); 
		 } 
		 else if (resultSet.status.trim() == "error") {
			 
			 $("#alertError").text(resultSet.data); 
			 $("#alertError").show(); 
		 } 
	} 
	else if (status == "error") { 
		
		 $("#alertError").text("Error while saving."); 
		 $("#alertError").show(); 
	} else{ 
		
		 $("#alertError").text("Unknown error while saving.."); 
		 $("#alertError").show(); 
		}
	$("#hidItemIDSave").val(""); 
	$("#formItem")[0].reset(); 
}


// UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event){ 
		
		 $("#hidItemIDSave").val($(this).data("userid")); 
		 $("#buyerName").val($(this).closest("tr").find('td:eq(0)').text()); 
		 $("#address").val($(this).closest("tr").find('td:eq(1)').text()); 
		 $("#NIC").val($(this).closest("tr").find('td:eq(2)').text()); 
		 $("#softwareName").val($(this).closest("tr").find('td:eq(3)').text()); 
		 $("#cost").val($(this).closest("tr").find('td:eq(4)').text()); 
		 $("#date").val($(this).closest("tr").find('td:eq(5)').text()); 
		 $("#status").val($(this).closest("tr").find('td:eq(6)').text()); 
	 
});




$(document).on("click", ".btnRemove", function(event) { 
	 $.ajax( 
	 { 
	 	url : "OrderAPI", 
	 	type : "DELETE", 
	 	data : "orderId=" + $(this).data("userid"),
	 	dataType : "text", 
	 	complete : function(response, status) { 
	 		onItemDeleteComplete(response.responseText, status); 
	 	} 
	}); 
})
	


function onItemDeleteComplete(response, status){
	
	if (status == "success") {
		
		var resultSet = JSON.parse(response); 
			if (resultSet.status.trim() == "success"){
			
				$("#alertSuccess").text("Successfully deleted."); 
				$("#alertSuccess").show(); 
				$("#divItemsGrid").html(resultSet.data); 
				
			} else if (resultSet.status.trim() == "error") { 
				
				$("#alertError").text(resultSet.data); 
				$("#alertError").show(); 
		} 
	} 
	else if (status == "error") { 
		$("#alertError").text("Error while deleting."); 
		$("#alertError").show(); 
	} 
	else { 
		$("#alertError").text("Unknown error while deleting.."); 
		$("#alertError").show(); 
	} 
}

// CLIENT-MODEL================================================================
function validateItemForm(){
	// CODE

//buyerName
if ($("#buyerName").val().trim() == "")
{
return "Insert the BuyerName .";
}

//address
if ($("#address").val().trim() == "")
{
return "Insert the address .";
}

//NIC
if ($("#NIC").val().trim() == "")
{
return "Insert the NIC .";
}

//softwareName
if ($("#softwareName").val().trim() == "")
{
return "Insert the softwareName .";
}

//date
if ($("#date").val().trim() == "")
{
return "Insert the date .";
}
	
	
// Cost-------------------------------
if ($("#cost").val().trim() == ""){
	
	return "Insert Order Cost.";
}
// is numerical value
var tmpPrice = $("#cost").val().trim();
if (!$.isNumeric(tmpPrice)){
			
	return "Insert a numerical value for cost.";
}
		
// convert to decimal price
$("#cost").val(parseFloat(tmpPrice).toFixed(2));


	return true;
}