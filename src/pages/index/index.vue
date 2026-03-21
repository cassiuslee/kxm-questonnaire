<template>
  <view class="page">
    <scroll-view scroll-y class="page-scroll">
      <view class="header-fixed">
        <view class="hero">
          <view class="hero-badge">
            <text>经销商调研</text>
            <image src="/static/logo.png" class="badge-logo" mode="heightFix" />
          </view>
          <view class="hero-title">合作服务回访问卷</view>
          <view class="hero-desc">
            {{
              companyName
            }}总您好！为进一步提升我们的合作质量与服务水平，更好地支持您的经营发展，我们特意开展本次经销商调研。您是我们非常重视的合作伙伴，每一条意见和建议对我们都至关重要。麻烦您抽空填写这份问卷，我们将认真倾听、持续优化，全力为您提供更优质、更高效的服务。
          </view>
        </view>

        <view class="progress-card">
          <view class="progress-header">
            <text class="progress-title">填写进度</text>
            <text class="progress-value">{{ completedCount }}/{{ totalCount }}</text>
          </view>
          <view class="progress-track">
            <view class="progress-bar" :style="{ width: `${progressPercent}%` }"></view>
          </view>
        </view>
      </view>

      <view class="question-card">
        <view class="question-index">Q1</view>
        <view class="question-title">您知道负责您的市场区域经理是谁吗？</view>
        <radio-group @change="onRadioChange('managerKnown', $event)">
          <label v-for="item in managerOptions" :key="item.value" class="option-item">
            <view class="option-main">
              <radio
                :value="item.value"
                :checked="form.managerKnown === item.value"
                color="#c9962c"
              />
              <text class="option-text">{{ item.label }}</text>
            </view>
          </label>
        </radio-group>
      </view>

      <view class="question-card">
        <view class="question-index">Q2</view>
        <view class="question-title">如果产品、订单遇到问题，您能找到解决问题的渠道吗？</view>
        <radio-group @change="onRadioChange('problemChannel', $event)">
          <label v-for="item in channelOptions" :key="item.value" class="option-item">
            <view class="option-main">
              <radio
                :value="item.value"
                :checked="form.problemChannel === item.value"
                color="#c9962c"
              />
              <text class="option-text">{{ item.label }}</text>
            </view>
          </label>
        </radio-group>
      </view>

      <view class="question-card">
        <view class="question-index">Q3</view>
        <view class="question-title">您觉得现在市场哪一个板块更有优势？</view>
        <radio-group @change="onRadioChange('advantageMarket', $event)">
          <label v-for="item in marketOptions" :key="item.value" class="option-item">
            <view class="option-main">
              <radio
                :value="item.value"
                :checked="form.advantageMarket === item.value"
                color="#c9962c"
              />
              <text class="option-text">{{ item.label }}</text>
            </view>
          </label>
        </radio-group>
      </view>

      <view class="question-card">
        <view class="question-index">Q4</view>
        <view class="question-title">目前您最想得到的帮忙是什么？</view>
        <textarea
          v-model="form.needHelp"
          class="textarea"
          maxlength="300"
          placeholder="请填写您的想法，例如市场支持、客户资源、培训辅导、活动支持等"
          placeholder-class="textarea-placeholder"
        />
        <view class="textarea-count">{{ form.needHelp.length }}/300</view>
      </view>

      <view class="question-card">
        <view class="question-index">Q5</view>
        <view class="question-title">您对我们的服务最不满意的是什么？</view>
        <textarea
          v-model="form.unsatisfied"
          class="textarea"
          maxlength="300"
          placeholder="欢迎直接指出问题，我们会认真改进"
          placeholder-class="textarea-placeholder"
        />
        <view class="textarea-count">{{ form.unsatisfied.length }}/300</view>
      </view>

      <view class="question-card last-card">
        <view class="question-index">Q6</view>
        <view class="question-title">您的建议</view>
        <textarea
          v-model="form.suggestion"
          class="textarea"
          maxlength="300"
          placeholder="请填写您的建议或期待"
          placeholder-class="textarea-placeholder"
        />
        <view class="textarea-count">{{ form.suggestion.length }}/300</view>
      </view>

      <view class="safe-bottom"></view>
    </scroll-view>

    <view class="footer">
      <button class="submit-btn" :loading="submitting" @click="handleSubmit">提交问卷</button>
    </view>
  </view>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'

interface SurveyForm {
  managerKnown: string
  problemChannel: string
  advantageMarket: string
  needHelp: string
  unsatisfied: string
  suggestion: string
}

const companyName = ref('')
const mobile = ref('')

function decodeName(str: string) {
  return decodeURIComponent(escape(atob(str)))
}
const submitting = ref(false)

const managerOptions = [
  { label: '赵茂华', value: '1' },
  { label: '贾向勇', value: '2' },
  { label: '王永江', value: '3' },
  { label: '华渊', value: '4' },
  { label: '黄才润', value: '5' },
  { label: '不知道', value: '6' },
]

const channelOptions = [
  { label: '能', value: 'yes' },
  { label: '不知道找谁', value: 'no_channel' },
]

const marketOptions = [
  { label: '旧改市场', value: 'old_renovation' },
  { label: '乡村市场', value: 'rural' },
  { label: '工头模式', value: 'contractor' },
  { label: '经销商独家经营模式', value: 'exclusive_distributor' },
]

const form = reactive<SurveyForm>({
  managerKnown: '',
  problemChannel: '',
  advantageMarket: '',
  needHelp: '',
  unsatisfied: '',
  suggestion: '',
})

const totalCount = 6

const completedCount = computed(() => {
  const values = Object.values(form)
  return values.filter((item) => String(item).trim().length > 0).length
})

const progressPercent = computed(() => Math.round((completedCount.value / totalCount) * 100))

const onRadioChange = (field: keyof SurveyForm, event: unknown) => {
  form[field] = event?.detail?.value || ''
}

const getTextLength = (value: string) => value.trim().length

const validateForm = () => {
  if (!form.managerKnown) {
    uni.showToast({ title: '请完成第1项', icon: 'none' })
    return false
  }
  if (!form.problemChannel) {
    uni.showToast({ title: '请完成第2项', icon: 'none' })
    return false
  }
  if (!form.advantageMarket) {
    uni.showToast({ title: '请完成第3项', icon: 'none' })
    return false
  }
  if (!form.needHelp.trim()) {
    uni.showToast({ title: '请完成第4项', icon: 'none' })
    return false
  }
  if (getTextLength(form.needHelp) < 20) {
    uni.showToast({ title: '第4项不少于20个字', icon: 'none' })
    return false
  }
  if (!form.unsatisfied.trim()) {
    uni.showToast({ title: '请完成第5项', icon: 'none' })
    return false
  }
  if (getTextLength(form.unsatisfied) < 20) {
    uni.showToast({ title: '第5项不少于20个字', icon: 'none' })
    return false
  }
  if (!form.suggestion.trim()) {
    uni.showToast({ title: '请完成第6项', icon: 'none' })
    return false
  }
  if (getTextLength(form.suggestion) < 20) {
    uni.showToast({ title: '第6项不少于20个字', icon: 'none' })
    return false
  }
  return true
}

const buildPayload = () => ({
  ...form,
  submittedAt: Date.now(),
})

const resetForm = () => {
  form.managerKnown = ''
  form.problemChannel = ''
  form.advantageMarket = ''
  form.needHelp = ''
  form.unsatisfied = ''
  form.suggestion = ''
}

const handleSubmit = async () => {
  if (!validateForm()) return

  try {
    submitting.value = true
    const payload = buildPayload()

    // TODO: 替换为你的真实接口地址
    // await uni.request({
    //   url: 'https://your-api.com/survey/submit',
    //   method: 'POST',
    //   data: payload,
    // })

    console.log('survey submit payload:', payload)

    uni.showToast({ title: '提交成功', icon: 'success' })
    setTimeout(() => {
      resetForm()
    }, 300)
  } catch (error) {
    console.error(error)
    uni.showToast({ title: '提交失败，请稍后重试', icon: 'none' })
  } finally {
    submitting.value = false
  }
}

onLoad((options) => {
  companyName.value = decodeName(options.p1 || '')[0]
  mobile.value = options.p2 || ''
})
</script>

<style scoped lang="scss">
.page {
  min-height: 100vh;
  background: linear-gradient(180deg, #f7f3eb 0%, #f5f7fa 28%, #f5f7fa 100%);
  display: flex;
  flex-direction: column;
}

// .header-fixed {
//   position: sticky;
//   top: 0;
//   z-index: 10;
//   background: linear-gradient(180deg, #f7f3eb 0%, #f5f7fa 100%);
// }

.page-scroll {
  flex: 1;
  box-sizing: border-box;
}

.hero {
  margin: 24rpx;
  padding: 40rpx 32rpx;
  border-radius: 28rpx;
  background: linear-gradient(135deg, #2f2a21 0%, #51442d 100%);
  box-shadow: 0 16rpx 40rpx rgba(34, 26, 13, 0.14);
}

.hero-badge {
  display: flex;
  align-items: center;
  justify-content: space-between; /* 关键：左右分开 */

  height: 48rpx;
  padding: 0 20rpx;
  border-radius: 999rpx;

  background: rgba(255, 255, 255, 0.14);
  color: #f2d08a;
  font-size: 24rpx;

  margin-bottom: 20rpx;
  .badge-logo {
    height: 50rpx;
    width: auto;
  }
}

.hero-title {
  color: #ffffff;
  font-size: 42rpx;
  font-weight: 700;
  line-height: 1.4;
}

.hero-desc {
  margin-top: 20rpx;
  color: rgba(255, 255, 255, 0.82);
  font-size: 26rpx;
  line-height: 1.8;
}

.progress-card,
.question-card {
  margin: 0 24rpx 24rpx;
  background: #ffffff;
  border-radius: 24rpx;
  padding: 28rpx;
  box-shadow: 0 8rpx 24rpx rgba(15, 23, 42, 0.05);
}

.progress-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20rpx;
}

.progress-title {
  color: #1f2937;
  font-size: 28rpx;
  font-weight: 600;
}

.progress-value {
  color: #c9962c;
  font-size: 28rpx;
  font-weight: 700;
}

.progress-track {
  height: 14rpx;
  border-radius: 999rpx;
  background: #eceff4;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  border-radius: 999rpx;
  background: linear-gradient(90deg, #d8ab48 0%, #c9962c 100%);
}

.question-index {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 68rpx;
  height: 40rpx;
  padding: 0 16rpx;
  margin-bottom: 18rpx;
  background: #f7f1e2;
  color: #b88016;
  border-radius: 999rpx;
  font-size: 22rpx;
  font-weight: 700;
}

.question-title {
  color: #111827;
  font-size: 32rpx;
  font-weight: 700;
  line-height: 1.6;
  margin-bottom: 12rpx;
}

.option-item {
  display: block;
  margin-top: 18rpx;
}

.option-main {
  display: flex;
  align-items: center;
  min-height: 88rpx;
  padding: 0 20rpx;
  border: 2rpx solid #eef1f5;
  border-radius: 18rpx;
  background: #fafbfc;
  box-sizing: border-box;
}

.option-text {
  margin-left: 16rpx;
  color: #374151;
  font-size: 28rpx;
  line-height: 1.5;
}

.textarea {
  width: 100%;
  min-height: 200rpx;
  margin-top: 20rpx;
  padding: 24rpx;
  border-radius: 20rpx;
  background: #fafbfc;
  border: 2rpx solid #eef1f5;
  box-sizing: border-box;
  font-size: 28rpx;
  color: #111827;
  line-height: 1.7;
}

.textarea-placeholder {
  color: #9ca3af;
}

.textarea-count {
  margin-top: 16rpx;
  text-align: right;
  color: #9ca3af;
  font-size: 24rpx;
}

.last-card {
  margin-bottom: 160rpx;
}

.footer {
  position: sticky;
  bottom: 0;
  padding: 20rpx 24rpx calc(20rpx + env(safe-area-inset-bottom));
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12rpx);
  border-top: 1rpx solid rgba(229, 231, 235, 0.9);
}

.submit-btn {
  height: 88rpx;
  line-height: 88rpx;
  border-radius: 999rpx;
  border: none;
  background: linear-gradient(90deg, #d8ab48 0%, #c9962c 100%);
  color: #ffffff;
  font-size: 30rpx;
  font-weight: 700;
  box-shadow: 0 12rpx 28rpx rgba(201, 150, 44, 0.3);
}

.safe-bottom {
  height: 24rpx;
}
</style>
