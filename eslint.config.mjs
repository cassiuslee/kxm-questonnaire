import pluginVue from 'eslint-plugin-vue'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import prettierConfig from '@vue/eslint-config-prettier'

export default defineConfigWithVueTs(
  // Vue 3 基础规则（等价于你原来的 plugin:vue/vue3-essential）
  ...pluginVue.configs['flat/essential'],

  // TypeScript 推荐规则
  vueTsConfigs.recommended,

  // 你的自定义配置
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx,vue}'],

    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        uni: 'readonly',
        wx: 'readonly',
        WechatMiniprogram: 'readonly',
        getCurrentPages: 'readonly',
        getApp: 'readonly',
        UniApp: 'readonly',
        UniHelper: 'readonly',
        App: 'readonly',
        Page: 'readonly',
        Component: 'readonly',
        AnyObject: 'readonly',
      },
    },

    rules: {
      'prettier/prettier': [
        'warn',
        {
          singleQuote: true,
          semi: false,
          printWidth: 100,
          trailingComma: 'all',
          endOfLine: 'auto',
        },
      ],
      'vue/multi-word-component-names': 'off',
      'vue/no-setup-props-destructure': 'off',
      'vue/no-deprecated-html-element-is': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },

  // 放最后，避免和 Prettier 冲突
  prettierConfig,
)
