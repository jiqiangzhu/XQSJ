import {
	chooseNxFn,
	chooseExFn,
	recommandFn,
	registerFn,
	registerRecoveryFn,
	loginFn,
	messageFn,
	messageTabPageFn,
	recommandTabPage,
	changeRecommandFn,
	newMessNavFn,
	likesMessNavFn,
	likedMessNavFn,
	chatFn,
	myTabPageFn
} from './func.js';
import {getAjax} from './getAjax.js';

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
let passwordDom = document.querySelector('.register .reg-box .r-input-code input');
let codeDom = document.querySelector('.register .reg-box .r-input-code');
let phoneTipDom = document.querySelector('.register .tuoyuan .phone-tip');
let recommandTabDom = document.querySelector('.tab-bar .tab:nth-child(1)');
let messageTabDom = document.querySelector('.tab-bar .tab:nth-child(2)');
let myTabDom = document.querySelector('.tab-bar .tab:nth-child(3)');
let preBtn = document.querySelector('.recommend1 .r1-pre-btn');
let nextBtn = document.querySelector('.recommend1 .r1-next-btn');
// 消息nav
let newMessNavDom = document.querySelector('.message .m-nav span:nth-child(1)');
let likesMessNavDom = document.querySelector('.message .m-nav span:nth-child(2)');
let likedMessNavDom = document.querySelector('.message .m-nav span:nth-child(3)');
let newItemDoms = document.querySelectorAll('.message .new-item');
let likesItemDoms = document.querySelectorAll('.message .likes-item');
let likedItemDoms = document.querySelectorAll('.message .liked-item');
let myPageDom = document.querySelector('.myPage');

// 电话号码正则表达式
let reg = /^1[3|4|5|7|8][0-9]{9}$/;


/**
 * 事件
 */
flashBtn.addEventListener('click', (event) => {
	flashDom.style.display = 'none';
	headerDom.style.display = 'flex';
	logoBriefDom.style.display = 'inline';
	chooseDom.style.display = 'flex';
});
/*选女婿*/
chMaleBtn.addEventListener('click', (event) => {
	chooseNxFn(event)
});
/*选儿媳*/
chFemaleBtn.addEventListener('click', (event) => {
	chooseExFn(event)
});

// 推荐页点击事件
// recommandDom.addEventListener('click', (event) => {
// 	changeRecommandFn(event);
// })
preBtn.addEventListener('click', (event) => {
	changeRecommandFn(event);
})
nextBtn.addEventListener('click', (event) => {
	changeRecommandFn(event);
})
// 注册按钮
registerBtnDom.addEventListener('click', (event) => {
	if (reg.test(pInputDom.value)) {

	} else {
		registerFn(event)
	}
});
//登录按钮
loginBtnDom.addEventListener('click', (event) => {
	if (passwordDom.value && reg.test(pInputDom.value)) {
		messageFn(event);
	} else {
		loginFn(event);
	}

	// registerRecoveryFn(event);
});


// 输入框输入完毕
pInputDom.addEventListener('change', (event) => {
	let phoneNum = pInputDom.value;
	if (reg.test(phoneNum)) {
		phoneTipDom.style.display = 'none'
		registerBtnDom.style.cssText =
			`
			top: 2.79rem;
			background-image: linear-gradient(0deg, 
					rgba(0, 0, 0, 0.2) 0%, 
					rgba(255, 255, 255, 0.2) 100%), 
				linear-gradient(
					#ef387b, 
					#ef387b);
		`;
	} else {
		phoneTipDom.style.display = 'block';
	}
})
// 推荐tab
recommandTabDom.addEventListener('click', (event) => {
	hTopDom.style.backgroundImage = "url(img/images/3_01.png)";
	logoDom.style.display = 'none';
	tabBarDom.style.display = "flex";
	chooseDom.style.display = 'none';
	recommandDom.style.display = 'block';
	recommandTabPage(event)
})

// 消息tab
messageTabDom.addEventListener('click', (event) => {
	messageTabPageFn(event);
})
// 我的tab
myTabDom.addEventListener('click', (event) => {
	myTabPageFn(event);
})
newMessNavDom.addEventListener('click', (event) => {
	newMessNavFn(event);
})
likesMessNavDom.addEventListener('click', (event) => {
	likesMessNavFn(event);
})
likedMessNavDom.addEventListener('click', (event) => {
	likedMessNavFn(event);
})
newItemDoms.forEach((item, index) => {
	item.addEventListener('click', (event)=>{
		chatFn(event, 'new');
	})
});
likesItemDoms.forEach((item, index) => {
	item.addEventListener('click', (event)=>{
		chatFn(event, 'likes');
	})
});
likedItemDoms.forEach((item, index) => {
	item.addEventListener('click', (event)=>{
		chatFn(event, 'liked');
	})
});
