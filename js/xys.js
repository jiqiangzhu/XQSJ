(function() {
	function xys() {
		let html = document.querySelector('html')
		let userAgent = navigator.userAgent
		html.className = "";
		if (userAgent.indexOf("iPhone") != -1) {
			html.classList.add("iphone")
		} else if (userAgent.indexOf("Android") != -1) {
			html.classList.add("android")
		} else if (userAgent.indexOf("iPad") != -1) {
			html.classList.add("ipad")
		} else {
			html.classList.add("pc")
		}
		//lt: less than  gt: great than
		if (window.innerWidth < 640) {
			html.classList.add('lt640');
			html.classList.add("lt960")
			html.classList.add("lt1200")
		} else if (window.innerWidth < 960) {
			html.classList.add("lt960")
			html.classList.add("lt1200")
			html.classList.add("gt640")
		} else if (window.innerWidth < 1200) {
			html.classList.add("gt960")
			html.classList.add("lt1200")
			html.classList.add("gt640")
		} else {
			html.classList.add("gt960")
			html.classList.add("gt1200")
			html.classList.add("gt640")
		}

		//rem布局
		let screenWidth = window.innerWidth;
		//屏幕的宽度/设计稿占满全屏的宽度为多少rem
		let danwei = screenWidth / 7.5;
		html.style.fontSize = danwei + 'px';
	}
	xys()
	window.onresize = function() {
		xys()
	}
})()
