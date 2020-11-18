function getAjax(httpUrl, fn) {
	// 创建Ajax对象
	let xhr = new XMLHttpRequest();
	// 设置请求方法和路径
	xhr.open('GET', httpUrl);
	// 发送数据
	xhr.send();
	// 监听后台是否返回数据
	xhr.onreadystatechange = () => {
		if (xhr.status == 200 && xhr.readyState == 4) {
			fn(xhr);
		}
	}
}

export {
	getAjax
}