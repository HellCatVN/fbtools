$('#side-menu li a').click(function(){
	var page_id = $(this).attr('id');
	if(page_id != undefined){
		page_id = page_id.toLowerCase()+'.html';
		document.title = $(this).text();
		$.get('html/'+page_id, function(html){
			$.get('scripts/'+page_id.replace('html','js'),function(e){eval(e)});
			$('#thanhdeptrai').fadeIn(5000).html(html);
		});
	}
})
$(document).ready(function(){
	$.get('html/main.html', function(html){
		$('#thanhdeptrai').fadeIn(5000).html(html);
	});
});