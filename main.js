 
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


