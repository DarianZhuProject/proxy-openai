const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// 配置拦截规则
const options = {
  target: 'https://openai.lingyu.org.cn', // 转发目标地址
  changeOrigin: true, // 是否改变请求头的内容
  pathRewrite: {
    '^/api': '', // 替换地址为空
  },
};

// 创建代理中间件
const proxy = createProxyMiddleware('/api', options);

// 应用代理中间件
app.use('/api', proxy);

// 启动服务器
app.listen(8080, () => {
  console.log('Server is listening on port 8080');
});
