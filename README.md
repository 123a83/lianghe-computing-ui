# 量合-算力即未来 Next.js UI

这是一个将原始HTML单文件应用重构为Next.js项目的现代化移动端UI界面。

## 🚀 特性

- ✨ 现代化的Next.js框架
- 📱 移动端优先的响应式设计
- 🎨 炫酷的科技感动画效果
- 🔥 模块化组件架构
- 💎 CSS Modules样式隔离
- ⚡ 高性能优化

## 📁 项目结构

```
lianghe-computing-ui/
├── components/          # React组件
│   ├── StatusBar.js    # 状态栏组件
│   ├── UserInfo.js     # 用户信息组件
│   ├── Header.js       # 头部组件
│   ├── Notification.js # 通知组件
│   ├── StatsContainer.js # 统计容器组件
│   ├── RecordsSection.js # 记录列表组件
│   ├── BottomButtons.js # 底部按钮组件
│   └── HomeIndicator.js # 首页指示器组件
├── pages/              # Next.js页面
│   ├── _app.js        # App根组件
│   ├── _document.js   # HTML文档结构
│   └── index.js       # 首页
├── styles/             # 样式文件
│   ├── globals.css    # 全局样式
│   ├── Home.module.css # 首页模块样式
│   └── components/    # 组件样式
├── public/             # 静态资源
├── package.json       # 项目配置
└── next.config.js     # Next.js配置
```

## 🛠️ 安装和运行

### 1. 克隆项目

```bash
git clone https://github.com/123a83/lianghe-computing-ui.git
cd lianghe-computing-ui
```

### 2. 安装依赖

```bash
npm install
# 或
yarn install
```

### 3. 开发运行

```bash
npm run dev
# 或
yarn dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看应用。

### 4. 构建生产版本

```bash
npm run build
npm start
# 或
yarn build
yarn start
```

## 📋 待完成的文件

由于GitHub API限制，以下文件需要手动创建：

### 组件文件 (components/)
- `RecordsSection.js` - 记录列表组件
- `BottomButtons.js` - 底部按钮组件  
- `HomeIndicator.js` - 首页指示器组件

### 样式文件 (styles/components/)
- `UserInfo.module.css` - 用户信息样式
- `Header.module.css` - 头部样式
- `Notification.module.css` - 通知样式
- `StatsContainer.module.css` - 统计容器样式
- `RecordsSection.module.css` - 记录列表样式
- `BottomButtons.module.css` - 底部按钮样式
- `HomeIndicator.module.css` - 首页指示器样式

## 🎨 组件示例

### RecordsSection.js
```jsx
import { useState } from 'react'
import styles from '../styles/components/RecordsSection.module.css'

export default function RecordsSection() {
  const [records] = useState([
    {
      id: 1,
      type: '量值获取',
      amount: '+2.5',
      date: '2025年3月1日 14:30',
      status: 'completed'
    }
    // 更多记录...
  ])

  return (
    <div className={styles.recordsSection}>
      {/* 记录列表内容 */}
    </div>
  )
}
```

## 🎯 主要技术栈

- **Next.js 14** - React全栈框架
- **React 18** - 用户界面库
- **CSS Modules** - 模块化CSS
- **Font Awesome 6** - 图标库

## 🌟 设计亮点

1. **科技感动画**: 丰富的CSS动画和渐变效果
2. **响应式设计**: 移动端优先，PC端适配
3. **模块化架构**: 组件和样式完全分离
4. **性能优化**: Next.js内置优化
5. **现代化**: 使用最新的React特性

## 📱 移动端适配

- iPhone/Android 完美适配
- 375px 标准移动端宽度
- 支持各种屏幕尺寸
- 触控友好的交互设计

## 🔧 开发说明

### 添加新组件
1. 在 `components/` 创建组件文件
2. 在 `styles/components/` 创建对应样式文件
3. 在需要的页面中导入使用

### 样式规范
- 使用CSS Modules避免样式冲突
- 遵循BEM命名规范
- 保持响应式设计原则

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交Pull Request和Issue！

---

**开发者**: 量合团队  
**技术支持**: Next.js + React  
**UI设计**: 移动端科技风格