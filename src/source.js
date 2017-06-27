/*$(document).ready(function() {
	for (let i = 0; i < 5; i++) {
		fetch('https://secure-castle-8699.herokuapp.com/')
			.then((res) => {return res.json()})
			.then((data) => {
				let x = { "height": data.num };
				$('body').append('<div class="test"></div>');
				$('.test').css(x);
			});
	};
});


$(document).ready(function() {
	for (let i = 0; i < 5; i++) {
		fetch('https://secure-castle-8699.herokuapp.com/')
			.then((res) => {return res.json()})
			.then((data) => {
				const style = { height: Math.floor(data.num) * 2 }
				const div = $('<div class="test"></div>').css(style)
				$(document.body).append(div)
			});
	};
});

$(document).ready(function() {
	var count = 0;
	var maxCount = 10;

	function start() {
		setTimeout(function() {
			if (count < maxCount) {
				count++
				fetch('https://secure-castle-8699.herokuapp.com/')
					.then((res) =>  res.json())
					.then((data) => {
						const style = { height: Math.floor(data.num) * 3 };
						const div = $('<div class="test"></div>').css(style);
						$(document.body).append(div);
					});
				};
				start();
		}, 1000);
	};
	start();
});*/



$(document).ready(function() {
	let count = 0;
	let maxCount = 10;

	function start() {
		if(count < maxCount) {
			count++
			fetch('https://secure-castle-8699.herokuapp.com/')
				.then((res) =>  res.json())
				.then((data) => {
					const style = { height: Math.floor(data.num) * 3 };
					const div = $('<div class="test"></div>').css(style);
					$(document.body).append(div);
			});
			setTimeout(start, 1000);
		};
	};
	start();
});

