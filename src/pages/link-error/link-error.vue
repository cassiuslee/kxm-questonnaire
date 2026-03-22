<template>
  <view class="page">
    <view class="bg-circle bg-circle-1"></view>
    <view class="bg-circle bg-circle-2"></view>

    <view class="card">
      <view class="icon-wrap">
        <view class="icon-circle">
          <text class="icon-text">!</text>
        </view>
      </view>

      <view class="badge">链接异常</view>
      <view class="title">分享链接错误</view>
      <view class="desc">
        当前访问的问卷链接可能已失效、缺少必要参数，或分享地址不完整，暂时无法正常填写问卷。
      </view>

      <view class="tips-box">
        <view class="tips-title">您可以这样处理</view>
        <view class="tips-item">1. 请确认是否通过完整分享链接进入</view>
        <view class="tips-item">2. 如仍无法打开，请点击下方按钮联系客服</view>
      </view>

      <button class="primary-btn" @click="handleContactService">联系客服</button>
    </view>
  </view>
</template>

<script setup lang="ts">
const SERVICE_URL = 'https://work.weixin.qq.com/kfid/kfc558b907ad5b697f5'

const handleContactService = () => {
  // #ifdef H5
  window.location.href = SERVICE_URL
  // #endif

  // #ifndef H5
  uni.navigateTo({
    url: `/pages/webview/index?url=${encodeURIComponent(SERVICE_URL)}`,
  })
  // #endif
}
</script>

<style scoped lang="scss">
.page {
  min-height: 100vh;
  background: linear-gradient(180deg, #fdf3f2 0%, #f8fafc 40%, #eef3f8 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32rpx;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
}

.bg-circle {
  position: absolute;
  border-radius: 9999rpx;
  opacity: 0.55;
  filter: blur(12rpx);
}

.bg-circle-1 {
  top: -120rpx;
  right: -80rpx;
  width: 360rpx;
  height: 360rpx;
  background: radial-gradient(circle, rgba(239, 68, 68, 0.18) 0%, rgba(239, 68, 68, 0) 72%);
}

.bg-circle-2 {
  left: -100rpx;
  bottom: -120rpx;
  width: 420rpx;
  height: 420rpx;
  background: radial-gradient(circle, rgba(251, 146, 60, 0.16) 0%, rgba(251, 146, 60, 0) 72%);
}

.card {
  position: relative;
  z-index: 1;
  width: 100%;
  background: rgba(255, 255, 255, 0.96);
  border-radius: 32rpx;
  padding: 64rpx 40rpx 48rpx;
  box-sizing: border-box;
  text-align: center;
  box-shadow: 0 18rpx 50rpx rgba(33, 37, 41, 0.08);
}

.icon-wrap {
  display: flex;
  justify-content: center;
  margin-bottom: 28rpx;
}

.icon-circle {
  width: 132rpx;
  height: 132rpx;
  border-radius: 9999rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #fb7185 0%, #ef4444 100%);
  box-shadow: 0 14rpx 28rpx rgba(239, 68, 68, 0.2);
}

.icon-text {
  color: #ffffff;
  font-size: 72rpx;
  font-weight: 700;
  line-height: 1;
}

.badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 52rpx;
  padding: 0 22rpx;
  border-radius: 9999rpx;
  background: #fef2f2;
  color: #dc2626;
  font-size: 24rpx;
  font-weight: 700;
}

.title {
  margin-top: 22rpx;
  color: #111827;
  font-size: 44rpx;
  font-weight: 700;
  line-height: 1.4;
}

.desc {
  margin-top: 22rpx;
  color: #4b5563;
  font-size: 29rpx;
  line-height: 1.9;
}

.tips-box {
  margin-top: 32rpx;
  padding: 28rpx 24rpx;
  border-radius: 24rpx;
  background: #fff7ed;
  text-align: left;
}

.tips-title {
  color: #c2410c;
  font-size: 28rpx;
  font-weight: 700;
}

.tips-item {
  margin-top: 14rpx;
  color: #6b7280;
  font-size: 26rpx;
  line-height: 1.8;
}

.primary-btn {
  margin-top: 40rpx;
  height: 92rpx;
  line-height: 92rpx;
  border: none;
  border-radius: 9999rpx;
  background: linear-gradient(90deg, #fb7185 0%, #ef4444 100%);
  color: #ffffff;
  font-size: 30rpx;
  font-weight: 700;
  box-shadow: 0 14rpx 28rpx rgba(239, 68, 68, 0.22);
}
</style>
