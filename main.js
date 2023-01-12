 
// $(function(){
//   $("#includedContent").load("file_A.html"); 
// });

$(function () {
    var includes = $('[data-include]')
    $.each(includes, function () {
      var file = 'assets/' + $(this).data('include') + '.html'
      $(this).load(file)
    })  
  })

//search
function search_products() {
	let input = document.getElementById('form1').value
	input=input.toLowerCase();
	let x = document.getElementById('pro_name');
	
	for (i = 0; i < x.length; i++) {
		if (!x[i].innerHTML.toLowerCase().includes(input)) {
			x[i].style.display="none";
		}
		else {
			x[i].style.display="list-item";				
		}
	}
}
