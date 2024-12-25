<template>
	<view class="btn_title">我们结婚啦！
		<!-- <audio class="audio" style="text-align: left" :src="current.src" :poster="current.poster" :name="current.name"
			:author="current.author" :action="audioAction" autoplay loop controls></audio> -->
	</view>
	<view class="scroll-container">
		<!-- 滚动的图片列表 -->
		<view class="scroll-wrapper">
			<view class="scroll-content">
				<!-- 图片列表：重复两次实现无缝滚动 -->
				<view v-for="(item, index) in images" :key="index" class="box">
					<image :src="item" class="scroll-image" mode="aspectFit"></image>
				</view>
			</view>
		</view>
	</view>
	<view class="a-container">
		<!-- 使用flex布局排列两个a标签 -->
		<view class="link-container">
			<!-- 第一个a标签 -->
			<navigator url="/pages/index/wedding" open-type="navigate" class="link">
				<image src="http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01304.jpg" class="link-image"
					mode="aspectFill"></image>
			</navigator>
			<view class="">
			</view>
			<!-- 第二个a标签 -->
			<navigator url="/pages/index/university" open-type="navigate" class="link">
				<image src="http://81.71.157.154:8081/static/blog/img/university_img/WechatIMG165.jpg"
					class="link-image" mode="aspectFill"></image>
			</navigator>
		</view>
		<view class="text_noe">
			点击查看更多
		</view>
		<view class="text_tow">
			点击查看更多
		</view>
		<view class="link-container">
			<!-- 第一个a标签 -->
			<navigator url="/pages/index/betrothal" open-type="navigate" class="link">
				<image src="http://81.71.157.154:8081/static/blog/img/betrothal_img/WechatIMG277.jpg" class="link-image"
					mode="aspectFill"></image>
			</navigator>
			<!-- 第二个a标签 -->
			<navigator url="/pages/index/my_baby" open-type="navigate" class="link">
				<image src="http://81.71.157.154:8081/static/blog/img/my_baby/WechatIMG301.jpg" class="link-image"
					mode="aspectFill"></image>
			</navigator>
		</view>
		<view class="text_noe">
			点击查看更多
		</view>
		<view class="text_tow">
			点击查看更多
		</view>
		<view class="link-container">
			<!-- 第一个a标签 -->
			<navigator url="/pages/index/tourism" open-type="navigate" class="link">
				<image src="http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG233.jpg" class="link-image"
					mode="aspectFill"></image>
			</navigator>
			<!-- 第二个a标签 -->
			<navigator url="/pages/target/target2" open-type="navigate" class="link">
				<text class="text">
					相册不仅是回忆的容器，更是爱的纽带，把我们的点滴瞬间永远珍藏。
				</text>
			</navigator>
		</view>
		<view class="text_noe">
			点击查看更多
		</view>
	</view>

	<view class="story-container">
		<view class="story-block">
			<text class="story-title">相遇：</text>
			<text class="story-content">还记得那年夏天，我们穿着校服，青春还带着些许青涩。教室里的阳光透过窗户洒在你脸上，那是我第一次发现，原来心动是这样的感觉。</text>
		</view>

		<view class="story-block">
			<text class="story-title">青涩时光:&nbsp;</text>
			<text class="story-content">喜欢是悄悄写下你的名字，是路过你身边时不自觉加快的心跳，是放学路上假装偶遇，却小心翼翼想和你多走一段的时光。</text>
		</view>

		<view class="story-block">
			<text class="story-title">陪伴与成长:&nbsp;</text>
			<text class="story-content">我们在试卷和题海里并肩作战，在考场外互相鼓励。那时候的我们，没有什么甜言蜜语，只有一句：“我们一起加油，未来一定会更好。”</text>
		</view>

		<view class="story-block">
			<text class="story-title">距离与思念:&nbsp;</text>
			<text class="story-content">高考之后的分离，让我们第一次学会思念。是凌晨的电话，是信息里的“我想你”，是无论有多远，我都知道你会在那一头等我。</text>
		</view>

		<view class="story-block">
			<text class="story-title">坚持与坚定:&nbsp;</text>
			<text
				class="story-content">从校服到西装，从少年到成年，我们一起度过了迷茫与挣扎，泪水与欢笑。多少人问过我们：“异地恋能坚持多久？”而我们却用时间回答：“是一直走到彼此身边的那一天。”</text>
		</view>

		<view class="story-block">
			<text class="story-title">归属与承诺:&nbsp;</text>
			<text class="story-content">一路走来，我们见过彼此最真实的样子，也学会了如何包容、理解和珍惜。今天，我牵起你的手，不只是走过红毯，更是走过余生。</text>
		</view>

		<view class="story-block">
			<text class="story-title">永恒的爱:&nbsp;</text>
			<text class="story-content">从年少的懵懂喜欢，到如今的深情厚重，你是我青春的悸动，也是我余生的依靠。感谢时光，让我从人海中遇见你，走过春夏秋冬，依然爱你如初。</text>
		</view>

		<view class="story-block">
			<text class="story-title">结语:&nbsp;</text>
			<text class="story-content">我们从青涩的校服走到了今天的婚纱与西装，时间给了我们答案：这份爱，是一辈子的承诺。</text>
		</view>
		<navigator url="/pages/index/index" open-type="navigate">
			<image
			      class="fixed-logo"
			      src="/static/html/image/WechatIMG316.jpg"
			      mode="aspectFit"
			    />
		<view class="fixed_text">
			<h3>抽奖活动</h3>
		</view>
		</navigator>
		
	</view>

	<!-- 婚礼信息 -->
	<view id="info" class="info">
	    <!-- 主题：婚礼信息，居中显示 -->
	    <view class="info-title">婚礼信息</view>
	    
	    <!-- 内容部分，居中显示 -->
	    <view class="info-content-container">
	      <text class="info-content">新郎: 王先生</text>
	      <text class="info-content">新娘: 曹小姐</text>
	      <text class="info-content">日期：2025年3月2日</text>
	      <text class="info-content">江西省九江市都昌县中馆镇小河村委会坂上村</text>
	      <text class="info-content">时间：上午12:00</text>
	    </view>
	  </view>

	<!-- 祝福留言 -->
	<view id="message" class="message">
		<text class="message-title">祝福留言</text>
		<form @submit="submitMessage" class="message-form">
			<textarea v-model="input" class="message-textarea" placeholder="留下您的祝福吧！"></textarea>
			<button class="message-button" @click="submit" type="submit">发送祝福</button>
		</form>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	import {onShow} from '@dcloudio/uni-app'
	// 原始图片数组
	const images = [
		"http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01294.jpg",
		"http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01304.jpg",
		"http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01312.jpg",
		"http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01344.jpg",
		"http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01348.jpg",
		"http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01356.jpg",
		"http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01366.jpg",
		"http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01375.jpg",
		"http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01390.jpg",
		"http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01395.jpg",
		"http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01402.jpg",
		"http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01420.jpg",
		"http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01443.jpg",
		"http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01445.jpg",
		"http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01453.jpg",
		"http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01458.jpg",
		"http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01479.jpg",
		"http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01497.jpg",
		"http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01505.jpg",
		"http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01507.jpg",
		"http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01534.jpg",
		"http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01514.jpg",
		"http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01539.jpg",
		"http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01587.jpg",
		"http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01608.jpg",
		"http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01611.jpg",
		"http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01617.jpg",
		"http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01624.jpg",
		"http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01631.jpg",
		"http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01637.jpg",
		"http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01651.jpg",
		"http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01662.jpg",
		"http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01676.jpg",
		"http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01697.jpg",
		"http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01718.jpg",
		"http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01732.jpg",
		"http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01749.jpg",
		"http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01753.jpg",
		"http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01777.jpg",
		"http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01786.jpg",
		"http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01802.jpg",
		"http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01840.jpg",
		"http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01900.jpg",
		"http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01913.jpg",
		"http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01923.jpg",
		"http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01958.jpg",
		"http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01969.jpg",
		"http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01988.jpg",
	];

	// 将图片数组重复两次，形成无缝滚动
	// const doubleImages = [...images, ...images];

	const current = ref({
		poster: 'https://img2.baidu.com/it/u=2861004349,4239275065&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500',
		name: '告白气球',
		author: '暂无',
		src: "http://www.qeecc.com/plug/down.php?ac=music&id=d3l5ZHd4a3hz&k=320",
	})
	audioAction: {
		method: 'pause'
	}
	setTimeout(() => {
		uni.clearStorageSync()
		console.log('删除缓存')
	}, 30000)

	const input = ref('')
	function submit(e) {
		uni.showToast({
			"title":"祝福留言提交"
		})
		input.value = ''
		// 这里可以处理表单提交的逻辑
		console.log('祝福留言提交');
	}
	const innerAudioContext = uni.createInnerAudioContext();
	innerAudioContext.autoplay = true;
	innerAudioContext.loop = true;
	innerAudioContext.src = 'http://www.qeecc.com/plug/down.php?ac=music&id=d3l5ZHd4a3hz&k=320';
	innerAudioContext.onPlay(() => {
	  console.log('开始播放');
	});
	innerAudioContext.onError((res) => {
	  console.log(res.errMsg);
	  console.log(res.errCode);
	});
	const open=()=>{
		innerAudioContext.play()
	}
	onShow(()=>{
		open()
	})
</script>

<style scoped>
	/* 外部容器 */
	.scroll-container {
		position: relative;
		width: 100%;
		height: 500rpx;
		/* 设置滚动区域高度 */
		overflow: hidden;
		background-color: #f8f8f8;
	}

	/* 滚动的内容包裹器 */
	.scroll-wrapper {
		display: flex;
		width: 300%;
		/* 容器宽度是两倍，用于实现无缝滚动 */
		animation: scroll 40s linear infinite;
		/* 滚动动画 */
	}

	/* 滚动的图片内容 */
	.scroll-content {
		display: flex;
		width: 1000%;
	}

	/* 图片样式 */
	.scroll-image {
		width: 500rpx;
		height: 500rpx;
	}

	/* 滚动动画 */
	@keyframes scroll {
		from {
			transform: translateX(0);
		}

		to {
			transform: translateX(-818%);
		}
	}

	.box {
		width: 400rpx;
		height: auto;
		margin: 0% 1rpx;
		background-color: re;
		display: flex;
		flex-direction: row;
	}

	.btn_title {
		background-color: #ff6f61;
		text-align: center;
		padding: 10rpx 0;
		position: relative;
	}

	.audio {
		position: fixed;
		top: -20rpx;
		right: 100rpx;
		width: 10rpx;
		height: 1rpx;
		z-index: 1;

	}

	.a-container {
		/* display: flex; */
		margin-top: 100rpx;
		justify-content: center;
		align-items: center;
		height: 120vh;
		background-color: #f5f5f5;
	}

	/* 使用flexbox布局两个a标签 */
	.link-container {
		display: flex;
		justify-content: space-between;
		/* 使图片之间有间距 */
		width: 100%;
		max-width: 600rpx;
		/* 限制最大宽度 */
		padding: 70rpx;
	}

	/* 每个链接的样式 */
	.link {
		display: block;
		width: 45%;
		/* 每个图片占总宽度的45% */
		height: auto;
		/* 设置固定高度 */
		background-color: #f8f8f8;
		/* 可选背景色 */
		border-radius: 10px;
		/* 可选：圆角效果 */
		overflow: hidden;
		/* 防止图片溢出 */
	}

	/* 图片自适应容器 */
	.link-image {
		margin-right: 50rpx;
		/* 设置右边间距 */
		width: 300rpx;
		height: 500rpx;
	}

	.story-container {
		padding: 20rpx;
	}

	.story-block {
		margin-bottom: 20rpx;
		padding: 20rpx;
		background-color: #f9f9f9;
		border-radius: 10rpx;
	}

	.story-title {
		font-size: 24px;
		font-weight: bold;
		margin-bottom: 10rpx;
	}

	.story-content {
		font-size: 16px;
		line-height: 1.5;
		color: #333;
	}

	.text {
		font-size: 24rpx;
		color: #333;
		text-align: center;
		/* 文字居中 */
		letter-spacing: 2rpx;
		/* 设置字母间距 */
	}

	/* 婚礼信息容器 */
	.info {
	  padding: 20px;
	  background-color: rgb(255, 0, 0,0.6);
	  color: #b5ff00;
	}

	/* 主题部分，居中显示 */
	.info-title {
	  text-align: center;
	  font-size: 60rpx;
	  font-weight: bold;
	  margin-bottom: 40rpx;
	}

	/* 内容部分容器，确保内容居中 */
	.info-content-container {
	  display: flex;
	  flex-direction: column;
	  align-items: center; /* 内容居中 */
	  justify-content: center;
	}

	/* 内容项的样式 */
	.info-content {
	  font-size: 24px;
	  line-height: 36px;
	  text-align: center;
	  margin: 5px 0;
	}

	/* 祝福留言部分 */
	.message {
		padding: 20rpx;
		background-color: #f9f9f9;
		margin-top: 20rpx;
		border-radius: 10rpx;
	}

	.message-title {
		font-size: 24px;
		font-weight: bold;
		margin-bottom: 10rpx;
	}

	.message-form {
		display: flex;
		flex-direction: column;
	}

	.message-textarea {
		width: 100%;
		height: 150rpx;
		margin-bottom: 10rpx;
		padding: 10rpx;
		border: 1px solid #ccc;
		border-radius: 10rpx;
		font-size: 16px;
	}

	.message-button {
		background-color: #ff6f61;
		color: #fff;
		padding: 10rpx;
		border: none;
		border-radius: 5rpx;
		font-size: 16px;
		cursor: pointer;
	}
	/* 固定 LOGO 样式 */
	.fixed-logo {
	  position: fixed; /* 固定位置 */
	  bottom: 400rpx; /* 距离底部 20px */
	  right: 20rpx; /* 距离右侧 20px */
	  width: 200rpx; /* 宽度 */
	  height: 200rpx; /* 高度 */
	  border-radius: 50%; /* 可选：将 LOGO 设置为圆形 */
	  z-index: 999; /* 确保 LOGO 在最上层 */
	  animation: spin 5s linear infinite;
	  }
	  
	  @keyframes spin {
	    from {
	     transform: rotate(0deg);
	    }
	  
	    to {
	     transform: rotate(360deg);
	    }
	   }
	.fixed_text{
		position: fixed; /* 固定位置 */
		bottom: 450rpx; /* 距离底部 20px */
		font-size: 47rpx;
		right: 30rpx; /* 距离右侧 20px */
		z-index: 9999; /* 确保 LOGO 在最上层 */
		/* color: red; */
		font-weight: bold;
	    color: #333;
	    text-shadow: 2px 2px 0 red, /* 第一层阴影 */
		               4px 4px 0 #f00, /* 第二层阴影（红色） */
		               6px 6px 0 #00f; /* 第三层阴影（蓝色） */
	}
	.text_noe{
		margin-top: -120rpx;
		z-index: 9999;
		margin-left: 120rpx;
		color: #00f;
	}
	.text_tow{
		margin-top: -47rpx;
        z-index: 9999;
		margin-left: 440rpx;
		color: #00f;
	}
</style>