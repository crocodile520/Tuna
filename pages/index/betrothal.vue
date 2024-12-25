<template>
	<view class="dynamic-container">
		<image class="dynamic-item" v-for="(item, index) in imageList" @click="btn_img(item)" :key="index" :src="item"
			mode="aspectFit" />
	</view>
	<uni-popup ref="popup">
		<view class="popup-content">
			<movable-area class="movable-area">
				<movable-view class="movable-view" direction="all" :scale="true" :scale-min="1" :scale-max="4" :animation="true" :damping="5"
					:friction="1"
					@scale="onScale">
					<image class="img" :src='path' mode="aspectFit" @click="break_img" />
				</movable-view>
			</movable-area>
		</view>
	</uni-popup>
	<view class="container">
		<view class="header">
			<text class="title">我们的订婚仪式</text>
		</view>

		<view class="info">
			<view class="text_title">
				<text class="subtitle">新郎 & 新娘</text>
			</view>
			<view class="text_info">
				<text class="content">王先生 ❤️ 曹小姐</text>
			</view>

		</view>

		<view class="info">
			<view class="text_title">
				<text class="subtitle">订婚时间</text>
			</view>
			<view class="text_info">
				<text class="content">2024年2月3日 12:00</text>
			</view>
		</view>


		<view class="info">
			<view class="text_title">
				<text class="subtitle">订婚地点</text>
			</view>
			<view class="text_info">
				<text class="content">江西省九江市都昌县蔡岭镇</text>
			</view>

		</view>

		<view class="declaration">
			<text class="quote">“我愿与你携手走过四季，<br /> 愿余生只有你，岁月静好。”</text>
		</view>

		<view class="footer">
			<text>亲爱的朋友们，期待您与我们共同见证这一幸福时刻！</text>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		computed
	} from 'vue';
	const popup = ref(false)

	const btn_img = (item) => {
		popup.value.open("center")
		scale.value = 1
		path.value = item
	}

	const path = ref()
	const break_img = () => {
		popup.value.close()
		scale.value = 1 // 关闭弹窗时重置缩放值
	}
	
	const scale = ref(1)
	
	const onScale = (e) => {
	  scale.value = e.detail.scale
	}

	// 图片列表数据
	const imageList = ref([
		"http://81.71.157.154:8081/static/blog/img/betrothal_img/WechatIMG275.jpg",
		"http://81.71.157.154:8081/static/blog/img/betrothal_img/WechatIMG274.jpg",
		"http://81.71.157.154:8081/static/blog/img/betrothal_img/WechatIMG277.jpg",

	]);

	// 每行最多显示的图片数量
	const maxImagesPerRow = ref(2);

	// 动态计算图片宽度
	const dynamicWidth = computed(() => {
		return `${100 / maxImagesPerRow.value - 2}%`;
	});
</script>

<style scoped>
	.dynamic-container {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		width: 100%;
		background-color: #f5f5f5;
	}

	.dynamic-item {
		width: 46%;
		height: 500rpx;
		border-radius: 8px;
		/* 圆角 */
		background-color: #FFFFFF;
		margin: 2% 2%;
	}

	.container {
		padding: 20rpx;
		background-color: red;
		min-height: 70vh;
		box-sizing: border-box;
	}

	.header {
		text-align: center;
		margin-bottom: 40rpx;
	}

	.title {
		font-size: 60rpx;
		font-weight: bold;
		color: #ccea00;
		letter-spacing: 2rpx;
	}

	.info {
		margin-bottom: 30rpx;
	}

	.text_title {
		text-align: center;
	}

	.text_info {
		text-align: center;
	}

	.subtitle {
		font-size: 50rpx;
		font-weight: bold;
		color: #ccea00;
	}

	.content {
		font-size: 30rpx;
		color: #ccea00;
		margin-top: 10rpx;
		text-align: center;
	}

	.declaration {
		margin: 50rpx 0;
		text-align: center;
		padding: 20rpx;
		background-color: #fff7f0;
		border-radius: 20rpx;
	}

	.quote {
		font-size: 28rpx;
		color: #8b0000;
		line-height: 40rpx;
		font-style: italic;
	}

	.footer {
		margin-top: 40rpx;
		text-align: center;
		font-size: 26rpx;
		color: #ccea00;
	}

	.movable-area {
	  width: 100vw;
	  height: 100vh;
	  position: relative;
	}
	
	.movable-view {
	  width: 100%;
	  height: 100%;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  transition: all 0.3s ease; /* 添加过渡效果 */
	}
	
	.popup-content {
	  width: 100vw;
	  height: 100vh;
	  background-color: rgba(0, 0, 0, 0.8);
	}
	
	.img {
	  width: 100%;
	  height: 100%;
	  transition: transform 0.3s ease; /* 添加图片变换过渡效果 */
	}
</style>