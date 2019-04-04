var userName= $("input#name").val();
$(".username").text(userName);

$(function() {
  $("form#survey").submit(function(event){
	  var city = parseInt($("input:radio[name=city]:checked").val());
    var companySize = parseInt($("input:radio[name=companysize]:checked").val());
	  var team = parseInt($("input:radio[name=team]:checked").val());
    var project = parseInt($("input:radio[name=project]:checked").val());
    var topReason = parseInt($("input:radio[name=topreason]:checked").val());
    if (city === 1 && companySize === 1 && team === 1 && project === 1 && topReason === 1) {
      $("#survey").hide();
      $("#result1").show();
    } else if (city === 2 && companySize === 2 && team === 2 && project === 2 && topReason === 2) {
      $("#survey").hide();
      $("#result2").show();
    } else if (city === 3 && companySize === 3 && team === 3 && project === 3 && topReason === 3) {
      $("#survey").hide();
      $("#result3").show();
    } else {
      $("#survey").hide();
      $("#noresult").show();
    }
    event.preventDefault();
  });
});
