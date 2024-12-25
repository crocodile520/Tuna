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
		"http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG181.jpg",
		"http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG182.jpg",
		"http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG183.jpg",
		"http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG184.jpg",
		"http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG185.jpg",
		"http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG186.jpg",
		"http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG187.jpg",
		"http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG188.jpg",
		"http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG189.jpg",
		"http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG190.jpg",
		"http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG191.jpg",
		"http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG192.jpg",
		"http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG193.jpg",
		"http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG194.jpg",
		"http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG195.jpg",
		"http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG196.jpg",
		"http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG197.jpg",
		"http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG231.jpg",
		"http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG232.jpg",
		"http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG235.jpg",
		"http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG254.jpg",
		"http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG255.jpg",
		"http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG257.jpg",
		"http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG258.jpg",
		"http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG260.jpg",
		"http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG261.jpg",
		"http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG263.jpg",
		"http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG265.jpg",
		"http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG266.jpg",
		"http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG268.jpg",
		"http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG269.jpg",
		"http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG271.jpg",
		"http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG272.jpg",
		"http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG288.jpg",
		"http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG289.jpg",
		"http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG290.jpg",
		"http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG291.jpg",
		"http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG292.jpg",
		"http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG293.jpg",
		"http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG294.jpg",
		"http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG295.jpg",
		"http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG296.jpg",
		"http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG297.jpg",

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