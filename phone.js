$(document).ready(function() { // do this when the document is loaded
	$("#content_dialer").show(); // show the element with ID "element"
	$("#content_list").hide(); // hide the element with ID "otherElement"
  $("#content_contact").hide();
});


function opentab(tabName) {
    var i;
    var x = document.getElementsByClassName("tab_content");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}
