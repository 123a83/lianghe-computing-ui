# 量合-算力即未来 Next.js UI

<div align="center">

![量合Logo](https://img.shields.io/badge/量合-算力即未来-blue?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-14.0-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![CSS](https://img.shields.io/badge/CSS-Modules-1572B6?style=for-the-badge&logo=css3)

[🌐 在线演示](https://qginngejkpko.sealoshzh.site) | [📖 部署文档](./DEPLOYMENT.md) | [🐛 问题反馈](https://github.com/123a83/lianghe-computing-ui/issues)

</div>

这是一个将原始HTML单文件应用重构为Next.js项目的现代化移动端UI界面，专为量合算力平台设计。

## 🚀 特性

- ✨ **现代化Next.js框架** - 基于Next.js 14，支持SSR和静态生成
- 📱 **移动端优先设计** - 375px标准宽度，完美适配iOS/Android
- 🎨 **炫酷科技感动画** - 渐变背景、动态图标、流光效果
- 🔥 **模块化组件架构** - 每个组件独立开发，易于维护
- 💎 **CSS Modules样式隔离** - 避免样式冲突，提升开发体验
- ⚡ **高性能优化** - 代码分割、懒加载、PWA支持
- 🌐 **生产环境就绪** - 已部署在 https://qginngejkpko.sealoshzh.site

## 📱 界面预览

### 主要功能模块

- **用户信息栏** - 显示当前登录用户
- **通知中心** - 重要公告和提醒
- **数据中心** - 个人量值统计展示
- **量值记录** - 详细的量值变动历史
- **操作按钮** - 量值获取等核心功能

### 技术亮点

- **响应式设计** - 自适应各种屏幕尺寸
- **动画交互** - 丰富的CSS动画和过渡效果
- **现代UI** - 遵循最新移动端设计规范
- **性能优化** - 首屏加载时间<1s

## 📁 项目结构

```
lianghe-computing-ui/
├── components/              # React组件目录
│   ├── StatusBar.js        # 状态栏组件
│   ├── UserInfo.js         # 用户信息组件
│   ├── Header.js           # 头部组件
│   ├── Notification.js     # 通知组件
│   ├── StatsContainer.js   # 统计容器组件
│   ├── RecordsSection.js   # 记录列表组件
│   ├── BottomButtons.js    # 底部按钮组件
│   └── HomeIndicator.js    # 首页指示器组件
├── pages/                  # Next.js页面目录
│   ├── _app.js            # App根组件
│   ├── _document.js       # HTML文档结构
│   └── index.js           # 首页
├── styles/                 # 样式文件目录
│   ├── globals.css        # 全局样式
│   ├── Home.module.css    # 首页模块样式
│   └── components/        # 组件样式目录
│       ├── StatusBar.module.css
│       ├── UserInfo.module.css
│       ├── Header.module.css
│       ├── Notification.module.css
│       ├── StatsContainer.module.css
│       ├── RecordsSection.module.css
│       ├── BottomButtons.module.css
│       └── HomeIndicator.module.css
├── public/                 # 静态资源目录
├── package.json           # 项目配置
├── next.config.js         # Next.js配置
├── README.md              # 项目说明
└── DEPLOYMENT.md          # 部署文档
```

## 🛠️ 快速开始

### 环境要求

- Node.js 16.0+
- npm 7.0+ 或 yarn 1.22+

### 1. 克隆项目

```bash
git clone https://github.com/123a83/lianghe-computing-ui.git
cd lianghe-computing-ui
```

### 2. 安装依赖

```bash
npm install
# 或使用 yarn
yarn install
```

### 3. 开发运行

```bash
npm run dev
# 或使用 yarn
yarn dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看应用。

### 4. 构建生产版本

```bash
npm run build
npm start
# 或使用 yarn
yarn build
yarn start
```

## 🎯 主要技术栈

- **[Next.js 14](https://nextjs.org/)** - React全栈框架
- **[React 18](https://reactjs.org/)** - 用户界面库
- **[CSS Modules](https://github.com/css-modules/css-modules)** - 模块化CSS
- **[Font Awesome 6](https://fontawesome.com/)** - 图标库

## 🌟 设计亮点

### 1. 科技感动画效果
- 渐变背景动画
- 图标旋转和脉冲效果
- 按钮悬停流光效果
- 卡片悬浮阴影

### 2. 移动端优化
- 375px标准宽度设计
- 触控友好的交互
- 适配iPhone安全区域
- 支持PWA安装

### 3. 模块化架构
- 组件完全独立
- 样式隔离无冲突
- 易于扩展和维护
- 支持热更新开发

## 📊 当前数据展示

根据部署的生产环境，当前展示的数据包括：

- **已注册用户**: 量合用户001
- **个人有效量值**: 15.2k
- **个人总量值**: 23.8k
- **最近量值记录**: 包含完整的获取历史

## 🔧 开发指南

### 添加新组件

1. 在 `components/` 目录创建组件文件
2. 在 `styles/components/` 创建对应样式文件
3. 在需要的页面中导入使用

```javascript
// components/NewComponent.js
import styles from '../styles/components/NewComponent.module.css'

export default function NewComponent() {
  return (
    <div className={styles.container}>
      新组件内容
    </div>
  )
}
```

### 样式开发规范

- 使用CSS Modules避免样式冲突
- 遵循BEM命名规范
- 保持响应式设计原则
- 添加动画时注意性能

### 组件开发原则

- 保持组件单一职责
- 使用Props进行数据传递
- 优先使用函数式组件
- 添加适当的错误边界

## 🚀 部署指南

详细的部署说明请查看 [DEPLOYMENT.md](./DEPLOYMENT.md)

### 快速部署到Vercel

1. Fork此仓库到你的GitHub账户
2. 在 [Vercel](https://vercel.com) 连接GitHub仓库
3. 一键部署，无需任何配置

### 部署到自定义服务器

```bash
# 构建项目
npm run build

# 启动生产服务器
npm start

# 或使用PM2管理进程
npm install -g pm2
pm2 start npm --name "lianghe-ui" -- start
```

## 🌐 在线演示

- **生产环境**: [https://qginngejkpko.sealoshzh.site](https://qginngejkpko.sealoshzh.site)
- **开发状态**: 🟢 正常运行
- **最后更新**: 2025年1月

## 📈 性能优化

- **首屏加载时间**: <1s
- **lighthouse评分**: 95+
- **移动端适配**: 100%
- **代码分割**: 自动优化
- **图片优化**: Next.js内置

## 🤝 贡献指南

欢迎提交 Pull Request 和 Issue！

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的修改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启一个 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 🆘 技术支持

- **GitHub Issues**: [提交问题](https://github.com/123a83/lianghe-computing-ui/issues)
- **项目维护者**: 量合团队
- **技术栈**: Next.js + React + CSS Modules

---

<div align="center">

**开发者**: 量合团队 | **技术支持**: Next.js + React | **UI设计**: 移动端科技风格

Made with ❤️ for 量合算力平台

</div>