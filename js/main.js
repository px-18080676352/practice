window.onload = function() {
	// 时钟空间，单位毫秒
	var imgIndex = 1; /*表示当图片是第几张*/
	var imgCount = 2; //表示图片的张数
	setInterval(function() {
		imgIndex++;
		// console.log("雄霸天下");
		if (imgIndex > imgCount) imgIndex = 1; //图片来回切换轮回的判断
		var container = document.getElementById("container"); /*返回的是一个元素节点*/
		var comtent = container.getElementsByClassName("content");
		var pics = comtent[0].getElementsByClassName("pics"); /*返回的是一个数组，数组的第一个索引为0*/
		var a = pics[0].getElementsByTagName("a");
		// console.log(a[0].href)	
		if (imgIndex == 2)
			a[0].href = "https://www.tuxiaonian.com/374.html";
		else if (imgIndex = 1) {
			a[0].href = "https://www.w3school.com.cn/";
		}
		var img = a[0].getElementsByTagName("img");
		// console.log(img[0].src);
		img[0].src = "upload/pics/a" + imgIndex + ".png";
	}, 3000);

	var btnMore = document.querySelector("#wapper>#container>.content section .pager>button");
	// console.log(btnMore);
	btnMore.addEventListener("click", function() {
		// alert("666");
		var myArticle = document.querySelector("#wapper>#container>.content section .myArticle");
		// console.log(myArticle);
		var art = '<article class="pxarticle">\
								<header>\
									<div class="st">\
										<span>HTML</span>\
										<div></div>\
									</div>\
									<h3>HTML5 是最新的 HTML 标准。</h3>\
								</header>\
								<section>\
									<img src="upload/pics/a1.png">\
									高效高效高效高效高效\
									高效高效高效高效高效\
									高效高效高效高效高效\
									高效高效高效高效高效\
									高效高效高效高效高效\
									高效高效高效高效高效\
								</section>\
								<footer>\
									<img src="img/time.png" /> <span class="time">时间</span>\
									<img src="img/eye.png" /> <span class="eye">浏览量</span>\
									评论\
									点赞量\
								</footer>\
							</article>';

		//单引号是字符串
		myArticle.insertAdjacentHTML("afterend", art);
		myArticle.insertAdjacentHTML("afterend", art);
		myArticle.insertAdjacentHTML("afterend", art);
		myArticle.insertAdjacentHTML("afterend", art);

	}, false); //监听函数,监听事件
	//一键分享

	var imgs = document.querySelectorAll("#container .content>aside .share img"); //监听绑定,显示所有的图片
	
	for(var i=0;i<imgs.length;i++){
		imgs[i].addEventListener("click", function() {
			goshare(this.alt);
		}, false);
	}
	

	function goshare(s) {
		var title=document.querySelector("title").innerText;
		var pic=document.querySelector("#wapper .toper>header .mylogo");
		var picPath=pic.src;
		var desc=document.querySelector('meta[name="description"]').content;
		// console.log(desc.content);return;
		
			//qq空间接口的传参
			if( s =='qzone'){
		        window.open('https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url='+document.location.href+'?sharesource=qzone&title='+title+'&pics='+picPath+'&summary='+document.querySelector('meta[name="description"]').getAttribute('content'));
		    }
		    //新浪微博接口的传参
		    if(s =='sina'){
		        window.open('http://service.weibo.com/share/share.php?url='+document.location.href+'?sharesource=weibo&title='+title+'&pic='+picPath);
		    }
		    //qq好友接口的传参
		    if(s  == 'qq'){
		        window.open('http://connect.qq.com/widget/shareqq/index.html?url='+document.location.href+'?sharesource=qzone&title='+title+'&pics='+picPath+'&summary='+document.querySelector('meta[name="description"]').getAttribute('content')+'&desc=彭雄,彭雄刁民,围棋,考研');
		    }
		    //生成二维码给微信扫描分享
		    if(s  == 'wechat'){
				alert("耍朋友？");
		       
		    }

	}
	
	// 标签云背景，自动生成
		var pxcloudtds=document.querySelectorAll("#container .content>aside .pxNotecloud .content table tr td");
		// console.log(pxcloudtds);
		for(var i=0;i<pxcloudtds.length;i++){
			var r=Math.random()*255;
			var g=Math.random()*255;
			var b=Math.random()*255;
			pxcloudtds[i].setAttribute("style","background-color:rgba("+r+","+g+","+b+","+0.8+")");//++是拼接
		}
}
