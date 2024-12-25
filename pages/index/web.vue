<template>
	<view class="home">
		<web-view class="web" src="http://81.71.157.154:8081/"></web-view>
	</view>
</template>

<script setup>
	setTimeout(() => {
		uni.clearStorageSync()
		console.log('删除缓存')
	}, 30000)
</script>

<style lang="scss">
	.home {
		width: 100%;
		height: 100vh;

		.web {
			width: 100%;
			height: 100vh;
		}
	}
</style>