# 部署说明

## 项目概述
这是量合-算力即未来项目的 Next.js 版本，已成功部署到 [https://qginngejkpko.sealoshzh.site](https://qginngejkpko.sealoshzh.site)

## 🚀 快速部署

### 1. 本地开发
```bash
# 克隆项目
git clone https://github.com/123a83/lianghe-computing-ui.git
cd lianghe-computing-ui

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

### 2. 生产环境构建
```bash
# 构建项目
npm run build

# 启动生产服务器
npm start
```

### 3. 部署到 Vercel
1. 连接 GitHub 仓库到 Vercel
2. 自动部署，无需额外配置
3. 域名绑定（如需要）

### 4. 部署到自定义服务器
```bash
# 构建项目
npm run build

# 使用 PM2 管理进程
npm install -g pm2
pm2 start npm --name "lianghe-ui" -- start
```

## 🌐 当前部署状态

- **生产环境**: [https://qginngejkpko.sealoshzh.site](https://qginngejkpko.sealoshzh.site)
- **部署平台**: Sealos / Kubernetes
- **构建状态**: ✅ 正常运行
- **最后更新**: 2025年1月

## 📊 功能特性

✅ **已实现功能**:
- 移动端响应式设计
- 用户信息展示
- 量值数据统计
- 量值记录列表
- 科技感动画效果
- PWA 支持

🔄 **待优化功能**:
- 实时数据更新
- 用户登录系统
- 数据API集成
- 更多量值操作

## 🔧 配置说明

### 环境变量
```env
# .env.local
NEXT_PUBLIC_API_URL=https://api.lianghe.com
NEXT_PUBLIC_WS_URL=wss://ws.lianghe.com
```

### 自定义配置
- 修改 `next.config.js` 进行构建配置
- 更新 `styles/globals.css` 调整全局样式
- 编辑组件文件自定义功能

## 📱 移动端适配

- **目标分辨率**: 375px (iPhone标准)
- **支持设备**: iOS/Android
- **交互优化**: 触控友好
- **性能优化**: 懒加载、代码分割

## 🛠️ 技术栈

- **框架**: Next.js 14
- **样式**: CSS Modules + 自定义CSS
- **图标**: Font Awesome 6
- **部署**: Vercel / Sealos
- **监控**: 内置性能监控

## 📞 技术支持

如有部署问题，请联系:
- **GitHub Issues**: [提交问题](https://github.com/123a83/lianghe-computing-ui/issues)
- **项目维护者**: 量合团队
- **技术文档**: 详见 README.md