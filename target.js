// цели Яндекс Метрики
// на объект ставим класс metrika  и  metrika_[имя цели в яндекс метрике]
	$('.metrika').click( function() {
        var goal_name = this.className.match(/metrika_([^\s]+)/)[1];
		//console.log(goal_name);
        yaCounter44720080.reachGoal(goal_name);
        return true;
    });