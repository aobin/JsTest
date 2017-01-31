function test(a)
{
	console.log(a);
}

function inputClick(value)
{
	alert(value);
	$("div").prepend("<input type='button' />");
	$("input[type='button']").css("background-color","red");
}


