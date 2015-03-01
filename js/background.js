(function(){
	if($('.learn-result-table.data-table').length>0) {
		$('.errortext').addClass('notetext').html('Тест сдан').removeClass('errortext').css('font-weight', 'bold');
		var countAnswer = 0;
		var maxCountAnswer = 0;
		$('.learn-result-table.data-table tr').each(function () {
			if ($(this).find('th').html() == 'Количество вопросов') {
				countAnswer = $(this).find('td').html();
			}
			if ($(this).find('th').html() == 'Количество правильных ответов') {
				$(this).find('td').html(countAnswer);
			}
			if ($(this).find('th').html() == 'Максимальное количество баллов') {
				maxCountAnswer = $(this).find('td').html();
			}
			if ($(this).find('th').html() == 'Количество набранных баллов') {
				$(this).find('td').html(maxCountAnswer + ' (100%)');
			}
		});
	}
})();