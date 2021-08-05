$(window).ready(() => {
	let s = makeCardsStack(78).shuffle(10);

	let d = s.deal(15, 5, 3);
	
	for (let i in d) {
		d[i].sort().displayTo($("body"));
	}

	s.displayTo($("body"));
});