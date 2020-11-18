import {
	getAjax
} from './getAjax.js';

let flashDom = document.querySelector('#main .flash');
let flashBtn = document.querySelector('#main .flash .f-content');
let headerDom = document.querySelector('#header');
let hTopDom = document.querySelector('#header .h-content');
let logoDom = document.querySelector('#main .logo');
let logoBriefDom = document.querySelector('#main .logo .l-brief')
let chooseDom = document.querySelector('#main .choose');
let chMaleBtn = document.querySelector('#main .choose .btn .cb-male')
let chFemaleBtn = document.querySelector('#main .choose .btn .cb-female')
let tabBarDom = document.querySelector('.tab-bar');
let recommandDom = document.querySelector('.recommend1');
let recommandPhotoDom = document.querySelector('.recommend1 .r1-photo');
let recommandNameDom = document.querySelector('.r1-brief .r1-xmg');
let recommandContentDom = document.querySelector('.r1-brief .r1-content');
let recommandSuitableDom = document.querySelector('.r1-brief .r1-suitable span:nth-child(1)');
let recommandTag1Dom = document.querySelector('.recommend1 .r1-tag span:nth-child(1)')
let recommandTag2Dom = document.querySelector('.recommend1 .r1-tag span:nth-child(2)')
let recommandTag3Dom = document.querySelector('.recommend1 .r1-tag span:nth-child(3)')
let recommandTag4Dom = document.querySelector('.recommend1 .r1-tag span:nth-child(4)')
let registerDom = document.querySelector('.register');
let registerBtnDom = document.querySelector('.register .register-btn');
let tuoyuanDom = document.querySelector('.register .tuoyuan');
let loginBtnDom = document.querySelector('.register .login-btn');
let regFootDom = document.querySelector('.register .reg-foot');
let phoneDom = document.querySelector('.register .reg-box .r-input-phone');
let pInputDom = document.querySelector('.register .reg-box .r-input-phone input');
let inputVerifyDom = document.querySelector('.register .reg-box .r-input-phone a');
let passwordDom = document.querySelector('.register .reg-box .r-input-code input');
let codeDom = document.querySelector('.register .reg-box .r-input-code');
let phoneTipDom = document.querySelector('.register .tuoyuan .phone-tip');
let messageDom = document.querySelector('.message');
let recommandIconDom = document.querySelector('.tab-bar .tab:nth-child(1) .t-icon');
let recommandTxtDom = document.querySelector('.tab-bar .tab:nth-child(1) .t-txt');
let messageIconDom = document.querySelector('.tab-bar .tab:nth-child(2) .t-icon');
let messageTxtDom = document.querySelector('.tab-bar .tab:nth-child(2) .t-txt');
let myIconDom = document.querySelector('.tab-bar .tab:nth-child(3) .t-icon');
let myTxtDom = document.querySelector('.tab-bar .tab:nth-child(3) .t-txt');
let recommandTabDom = document.querySelector('.tab-bar .tab:nth-child(1)');
let messageTabDom = document.querySelector('.tab-bar .tab:nth-child(2)');
let myTabDom = document.querySelector('.tab-bar .tab:nth-child(3)');
let preBtn = document.querySelector('.recommend1 .r1-pre-btn');
let nextBtn = document.querySelector('.recommend1 .r1-next-btn');
// 消息nav
let newMessNavDom = document.querySelector('.message .m-nav span:nth-child(1)');
let newMessDom = document.querySelector('.message .m-new');

let likesMessNavDom = document.querySelector('.message .m-nav span:nth-child(2)');
let likesMessDom = document.querySelector('.message .m-likes');

let likedMessNavDom = document.querySelector('.message .m-nav span:nth-child(3)');
let likedMessDom = document.querySelector('.message .m-liked');

let newTtemDom = document.querySelector('.message .new-item');
let messLineDom = document.querySelector('.message .m-nav span.line');
let chatDom = document.querySelector('.message .m-chat');
let myPageDom = document.querySelector('.myPage');
// 手机验证码
let regBottomDom = document.querySelector('.register .reg-box .r-bottom');
let type = '';
let httpUrl = './ajax/message.json';
// Ajax返回对象
let resultObj = {};
let resultArr = [];
// 推荐页点击事件func
function recommandFn(event) {
	recommandDom.style.display = 'none';
	headerDom.style.display = 'flex';
	hTopDom.style.backgroundImage = "url(img/images/3_01_01.png)";
	registerDom.style.display = 'block';
	tabBarDom.style.display = "none";
	logoBriefDom.innerHTML = '欢迎进入找亲家';
	logoDom.style.cssText = `
		display: block;
		top: 3.8rem;
	`;
}

//点击注册按钮事件func 唤出输入框
function registerFn(event) {
	tuoyuanDom.style.height = '7.64rem';
	tuoyuanDom.style.borderRadius = '50% 50%';
	regFootDom.style.display = 'none';
	registerBtnDom.style.cssText =
		`
		top: 2.79rem;
		background-image: linear-gradient(0deg, 
				rgba(0, 0, 0, 0.2) 0%, 
				rgba(255, 255, 255, 0.2) 100%), 
			linear-gradient(
				#ffc2d8, 
				#ffc2d8);
	`;
	phoneDom.style.display = 'block';
	codeDom.style.display = 'block';
	loginBtnDom.style.cssText =
		`
		background-image: none;
		background-blend-mode: none;
		box-shadow: none;
		border-radius: 0;
		transition: all .5s;
		width: 1.9rem;
		height: 0.28rem;
		font-size: 0.3rem;
		left: 2.31rem;
		top: 4.12rem;
		font-family: PingFang-SC-Medium;
		font-size: 0.3rem;
		font-weight: normal;
		font-stretch: normal;
		line-height: 0.28rem;
		letter-spacing: 0rem;
		color: #191919;
		opacity: 0.4;
	`;
}

// 恢复 registerFn
function registerRecoveryFn() {
	tuoyuanDom.style.height = '13.34rem';
	tuoyuanDom.style.borderRadius = '0 0';
	regFootDom.style.display = 'block';
	registerBtnDom.style.cssText =
		`
		top: 0;
		background-image: linear-gradient(0deg, 
				rgba(0, 0, 0, 0.2) 0%, 
				rgba(255, 255, 255, 0.2) 100%), 
			linear-gradient(
				#ef387b, 
				#ef387b);
	`;
	phoneDom.style.display = 'none';
	codeDom.style.display = 'none';
	loginBtnDom.style.cssText =
		`
		width: 6.4rem;
		height: 1rem;
		background-color: none;
		border: none;
		font-family: PingFang-SC-Medium;
		font-size: 0.36rem;
		font-weight: normal;
		font-stretch: normal;
		line-height: 1rem;
		text-align: center;
		letter-spacing: 0rem;
		color: #ff76a8;
		position: absolute;
		left: 0rem;
		top: 1.73rem;
		outline: none;
		background-image: linear-gradient(0deg,
			rgba(0, 0, 0, 0.2) 0%,
			rgba(255, 255, 255, 0.2) 100%),
			linear-gradient(#ffffff,
			#ffffff);
		background-blend-mode: soft-light,
			normal;
		box-shadow: 0rem 0.12rem 0.24rem 0rem rgba(0, 0, 0, 0.24);
		border-radius: 0.5rem;
	`;
}

// 登录事件
function loginFn(event) {
	tuoyuanDom.style.height = '7.64rem';
	tuoyuanDom.style.borderRadius = '50% 50%';
	regFootDom.style.display = 'none';
	// pInputDom.placeholder = '请输入您的手机号码';
	passwordDom.placeholder = '密码';
	passwordDom.type = 'password';
	inputVerifyDom.style.display = 'none';
	registerBtnDom.style.display = 'none';
	phoneDom.style.display = 'block';
	codeDom.style.display = 'block';
	loginBtnDom.innerHTML = '登录';
	regBottomDom.style.display = 'flex';
	loginBtnDom.style.cssText =
		`
		background-image: linear-gradient(0deg, 
				rgba(0, 0, 0, 0.2) 0%, 
				rgba(255, 255, 255, 0.2) 100%), 
		linear-gradient(
			#ef387b, 
			#ef387b);
		background-blend-mode: soft-light, 
			normal;
		box-shadow: 0rem 0.2rem 0.3rem 0rem 
			rgba(227, 46, 97, 0.3);
		border-radius: 0.5rem;
		width: 6.4rem;
		height: 1rem;
		font-family: PingFang-SC-Medium;
		font-size: 0.36rem;
		font-weight: normal;
		font-stretch: normal;
		line-height: 1rem;
		letter-spacing: 0rem;
		color: #ffffff;
		text-align: center;
		position: absolute;
		left: 0rem;
		top: 2.79rem;
		outline: none;
	`;
}

// 消息
function messageFn(event) {
	registerDom.style.display = 'none';
	logoDom.style.display = 'none';
	hTopDom.style.backgroundImage = 'url(./img/images/4_01.png)';
	messageDom.style.display = 'flex';
	tabBarDom.style.display = 'flex';
	recommandIconDom.style.backgroundImage = 'url(./img/images/4_17.png)';
	recommandTxtDom.style.color = '#c5c9cb';
	messageIconDom.style.backgroundImage = 'url(./img/images/4_19.png)';
	messageTxtDom.style.color = '#ed4574';
	myIconDom.style.backgroundImage = 'url(./img/images/3-底部_07.png)';
	myTxtDom.style.color = '#c5c9cb';
}
// 我的
function myFn(event) {

	hTopDom.style.backgroundImage = 'url(./img/images/4_01.png)';
	messageDom.style.display = 'none';
	tabBarDom.style.display = 'flex';
	recommandDom.style.display = 'none'
	recommandIconDom.style.backgroundImage = 'url(./img/images/4_17.png)';
	recommandTxtDom.style.color = '#c5c9cb';
	messageIconDom.style.backgroundImage = 'url(./img/images/3-底部_05.png)';
	messageTxtDom.style.color = '#c5c9cb';
	myIconDom.style.backgroundImage = 'url(./img/images/5-我的_19.png)';
	myTxtDom.style.color = '#ed4574';
}
function messageTabPageFn(event) {
	recommandFn(event);
	messageFn(event);
	myPageDom.style.display = 'none';
}

// 我的
function myTabPageFn(event) {
	myFn(event);
	myPageDom.style.display = 'flex';
	hTopDom.style.backgroundImage = "url(img/images/5-我的_01.png)";
	// background-image: "url(./img/images/3-底部_03.png)";
	// background-image: "url(./img/images/3-底部_05.png)";
	// background-image: "url(./img/images/5-我的_19.png)";
}
function recommandTabPage(event) {
	recommandIconDom.style.backgroundImage = 'url(./img/images/3-底部_03.png)';
	recommandTxtDom.style.color = '#ed4574';
	messageIconDom.style.backgroundImage = 'url(./img/images/3-底部_05.png)';
	messageTxtDom.style.color = '#c5c9cb';
	myPageDom.style.display = 'none';
	myIconDom.style.backgroundImage = 'url(./img/images/3-底部_07.png)';
	myTxtDom.style.color = '#c5c9cb';
}

function chooseNxFn(event) {
	/*这个路径是index.html的相对图片路径*/
	hTopDom.style.backgroundImage = "url(img/images/3_01.png)";
	recommandPhotoDom.style.backgroundImage = 'url(img/images/3_05.png)'
	logoDom.style.display = 'none';
	tabBarDom.style.display = "flex";
	chooseDom.style.display = 'none';
	recommandDom.style.display = 'block';
	recommandDom.classList.remove('ex');
	recommandDom.classList.add('nx');
	recommandNameDom.innerHTML = '阿超哥';
	recommandContentDom.innerHTML = '33岁/178CM/上海';
	recommandSuitableDom.innerHTML = '76%';
	recommandTag1Dom.innerHTML = '上海户口';
	recommandTag2Dom.innerHTML = 'CEO';
	recommandTag3Dom.innerHTML = '自主创业';
	recommandTag4Dom.innerHTML = '一房一车';
}

function chooseExFn(event) {
	hTopDom.style.backgroundImage = "url(img/images/3_01.png)";
	recommandPhotoDom.style.backgroundImage = 'url(img/images/3_04.png)'
	tabBarDom.style.display = "flex";
	logoDom.style.display = 'none';
	chooseDom.style.display = 'none';
	recommandDom.style.display = 'block';
	recommandDom.classList.add('ex');
	recommandDom.classList.remove('nx');
	recommandNameDom.innerHTML = '小玫瑰';
	recommandContentDom.innerHTML = '28岁/163CM/北京';
	recommandSuitableDom.innerHTML = '80%';
	recommandTag1Dom.innerHTML = '北京户口';
	recommandTag2Dom.innerHTML = '研究生';
	recommandTag3Dom.innerHTML = '性格温柔';
	recommandTag4Dom.innerHTML = '三套房子';
}
// 改变推荐
function changeRecommandFn(event) {
	let test = recommandDom.classList;
	type = '';
	test.forEach((item, index) => {
		if (item == 'ex') {
			type = 'ex';
		} else if (item == 'nx') {
			type = 'nx';
		}
	})
	if (type == 'ex') {
		chooseNxFn(event);
	} else if (type == 'nx') {
		chooseExFn(event)
	} else {

	}

}

function newMessNavFn(event) {
	newMessNavDom.classList.remove('active');
	likesMessNavDom.classList.remove('active');
	likedMessNavDom.classList.remove('active');
	newMessNavDom.classList.add('active');
	messLineDom.style.left = '0';
	newMessDom.style.display = 'block';
	newMessDom.style.marginLeft = '0rem';
	likesMessDom.style.marginLeft = '-7.5rem';
	likedMessDom.style.marginLeft = '-15rem';
	chatDom.style.display = 'none';
}

function likesMessNavFn(event) {
	newMessNavDom.classList.remove('active');
	likesMessNavDom.classList.remove('active');
	likedMessNavDom.classList.remove('active');
	likesMessNavDom.classList.add('active');
	messLineDom.style.left = '33.33%';
	likesMessDom.style.display = 'block';
	newMessDom.style.marginLeft = '7.5rem';
	likesMessDom.style.marginLeft = '0rem';
	likedMessDom.style.marginLeft = '-7.5rem';
	chatDom.style.display = 'none';
}

function likedMessNavFn(event) {
	newMessNavDom.classList.remove('active');
	likesMessNavDom.classList.remove('active');
	likedMessNavDom.classList.remove('active');
	likedMessNavDom.classList.add('active');
	messLineDom.style.left = '66.67%';
	likedMessDom.style.display = 'block';
	likesMessDom.style.marginLeft = '7.5rem';
	likedMessDom.style.marginLeft = '0rem';
	newMessDom.style.marginLeft = '15rem';
	chatDom.style.display = 'none';
}


function chatFn(event, type) {
	getAjax(httpUrl, function(xhr) {
		resultObj = JSON.parse(xhr.response)
		resultArr = resultObj.data.message;
		chatDom.style.display = 'flex';
		chatDom.innerHTML = '';
		console.log(resultArr);
		resultArr.forEach((item, index) => {
			let itemDiv = document.createElement('div');
			if (item.type == '01') {
				itemDiv.className = 'mc-left';
			} else {
				itemDiv.className = 'mc-right';
			}
			itemDiv.innerHTML = `
			<span class="avator"></span>
			<span class="m-txt">${item.content}</span>
			`;
			chatDom.appendChild(itemDiv);
		});
	});
	if (type == 'new') {
		newMessDom.style.display = 'none';
	} else if (type == 'likes') {
		likesMessDom.style.display = 'none';
	} else if (type == 'liked') {
		likedMessDom.style.display = 'none';
	} else {

	}
	// hTopDom.style.position = 'fixed';


}




export {
	recommandFn,
	registerFn,
	registerRecoveryFn,
	loginFn,
	messageFn,
	messageTabPageFn,
	recommandTabPage,
	chooseNxFn,
	chooseExFn,
	changeRecommandFn,
	newMessNavFn,
	likesMessNavFn,
	likedMessNavFn,
	chatFn,
	myTabPageFn
}
