---
title: 阿里云ECS Ubuntu 搭建Nodejs服务器
excerpt: 使用Ubuntu阿里云ECS搭建Nodejs项目
coverImage: /images/articles/ubuntu-aliyun-nodejs-cover.png
author:
  name: ""
  picture: ""
ogImage:
  url: ""
tags: ""
categories: {}
date: 2022-12-07T02:49:52.395Z
lastmod: 2022-12-07T04:08:30.166Z
---

### 通过 ssh 登录服务器

```
#: ssh <username>@<ip-address>
```

### 安装 Git

> 默认已经安装 git 可跳过

```
#: apt upate
#: apt-get install git
```

### 安装 NVM

> 被墙问题可通过 gitee 访问 nvm 镜像库安装[Gitee & NVM](https://search.gitee.com/?skin=rec&type=repository&q=nvm)安装

具体可查看[Node.js 版本管理工具](/articles/node-version-manager)

### 通过 NVM 安装 Node.js

```
#: nvm install <version>
#: nvm use <version>
```

### 通过 NPM 安装 pm2

```
#: npm install -g pm2
```

### 通过 git 拉取项目并运行

> 这里以 nestjs 项目为准

```
#: cd ~/
#: git clone <.../project_name.git>
#: cd <project_name>
#: npm install
#: npm run build
#: pm2 run <pm2.config.json>
```

### 安装 Nginx

```
#: apt-get install nginx
<!-- 启动nginx -->
#: service nginx start
```

### 配置 Nginx

- 查看 nginx 安装目录 `#: nginx -V` 这里是 config 路径是 --conf-path=/etc/nginx/nginx.conf
- 跳转到 conf 目录 `# cd /etc/nginx`
- 更改默认 conf `# vim nginx.conf` 输入一下内容

```
http{
  ...
  include servers/*;
}
```

- 创建 servers 并进入

```
#: mkdir servers
#: cd servers
```

- 配置项目 server

```
server{
	listen *:80;
	server_name <domain>;
	location /{
		proxy_pass <项目本地路径 eg: http://127.0.0.1:3000>;
}
```
