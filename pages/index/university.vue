<template>
	<view class="dynamic-container">
		<image class="dynamic-item" v-for="(item, index) in imageList" @click="btn_img(item)" :key="index" :src="item"
			mode="aspectFit" />
	</view>
	<uni-popup ref="popup">
		<view class="popup-content">
			<movable-area class="movable-area">
				<movable-view class="movable-view" direction="all" :scale="true" :scale-min="1" :scale-max="4"
					:animation="true" :damping="5" :friction="1" @scale="onScale">
					<image class="img" :src='path' mode="aspectFit" @click="break_img" />
				</movable-view>
			</movable-area>
		</view>
	</uni-popup>
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
		"http://81.71.157.154:8081/static/blog/img/university_img/WechatIMG165.jpg",
		"http://81.71.157.154:8081/static/blog/img/university_img/WechatIMG166.jpg",
		"http://81.71.157.154:8081/static/blog/img/university_img/WechatIMG168.jpg",
		"http://81.71.157.154:8081/static/blog/img/university_img/WechatIMG169.jpg",
		"http://81.71.157.154:8081/static/blog/img/university_img/WechatIMG170.jpg",
		"http://81.71.157.154:8081/static/blog/img/university_img/WechatIMG171.jpg",
		"http://81.71.157.154:8081/static/blog/img/university_img/WechatIMG175.jpg",
		"http://81.71.157.154:8081/static/blog/img/university_img/WechatIMG246.jpg",
		"http://81.71.157.154:8081/static/blog/img/university_img/WechatIMG247.jpg",
		"http://81.71.157.154:8081/static/blog/img/university_img/WechatIMG249.jpg",
		"http://81.71.157.154:8081/static/blog/img/university_img/WechatIMG250.jpg",


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
		transition: all 0.3s ease;
		/* 添加过渡效果 */
	}

	.popup-content {
		width: 100vw;
		height: 100vh;
		background-color: rgba(0, 0, 0, 0.8);
	}

	.img {
		width: 100%;
		height: 100%;
		transition: transform 0.3s ease;
		/* 添加图片变换过渡效果 */
	}
</style>