<template>
  <view class="page">
    <view class="bg-decoration bg-top"></view>
    <view class="bg-decoration bg-bottom"></view>

    <view class="card">
      <view class="icon-wrap">
        <view class="icon-circle">
          <text class="icon-text">✓</text>
        </view>
      </view>

      <view class="badge">提交成功</view>
      <view class="title">感谢您的填写</view>
      <view class="desc">
        感谢您抽出宝贵时间填写问卷。您的每条反馈对我们都非常重要，我们会认真整理、及时改进，持续为您提供更优质、更高效的服务。
      </view>

      <view class="tips-box">
        <view class="tips-title">温馨提示</view>
        <view class="tips-text"
          >若您还想补充更多建议，或需要重新填写问卷，可点击下方按钮再次进入问卷页面。</view
        >
      </view>

      <button class="primary-btn" @click="handleRefill">再次填写</button>
    </view>
  </view>
</template>

<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'

let fromUrl = ''

onLoad((options) => {
  if (options.from) {
    fromUrl = decodeURIComponent(options.from)
  }
})
const handleRefill = () => {
  // uni.navigateBack()
  if (fromUrl) {
    window.location.href = fromUrl
  }
}
</script>

<style scoped lang="scss">
.page {
  min-height: 100vh;
  background: linear-gradient(180deg, #f8f4ea 0%, #f5f7fa 38%, #eef3f8 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32rpx;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
}

.bg-decoration {
  position: absolute;
  border-radius: 9999rpx;
  filter: blur(10rpx);
  opacity: 0.5;
}

.bg-top {
  top: -120rpx;
  right: -80rpx;
  width: 360rpx;
  height: 360rpx;
  background: radial-gradient(circle, rgba(216, 171, 72, 0.28) 0%, rgba(216, 171, 72, 0) 72%);
}

.bg-bottom {
  left: -100rpx;
  bottom: -120rpx;
  width: 420rpx;
  height: 420rpx;
  background: radial-gradient(circle, rgba(201, 150, 44, 0.2) 0%, rgba(201, 150, 44, 0) 72%);
}

.card {
  position: relative;
  z-index: 1;
  width: 100%;
  padding: 64rpx 40rpx 48rpx;
  background: rgba(255, 255, 255, 0.96);
  border-radius: 32rpx;
  box-shadow: 0 18rpx 50rpx rgba(33, 37, 41, 0.08);
  text-align: center;
  box-sizing: border-box;
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
  background: linear-gradient(135deg, #ddba65 0%, #c9962c 100%);
  box-shadow: 0 14rpx 28rpx rgba(201, 150, 44, 0.28);
}

.icon-text {
  color: #ffffff;
  font-size: 68rpx;
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
  background: #f7f1e2;
  color: #b88016;
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
  background: #faf7f1;
  text-align: left;
}

.tips-title {
  color: #8a6410;
  font-size: 28rpx;
  font-weight: 700;
}

.tips-text {
  margin-top: 12rpx;
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
  background: linear-gradient(90deg, #ddba65 0%, #c9962c 100%);
  color: #ffffff;
  font-size: 30rpx;
  font-weight: 700;
  box-shadow: 0 14rpx 28rpx rgba(201, 150, 44, 0.28);
}
</style>
