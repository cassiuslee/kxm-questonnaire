import pluginVue from 'eslint-plugin-vue'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import prettierConfig from '@vue/eslint-config-prettier'

export default defineConfigWithVueTs(
  ...pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx,vue}'],
    ignores: ['dist/**', 'node_modules/**', 'unpackage/**', '.hbuilderx/**'],
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
      'vue/multi-word-component-names': 'off',
      'vue/no-setup-props-destructure': 'off',
      'vue/no-deprecated-html-element-is': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
  prettierConfig,
)
