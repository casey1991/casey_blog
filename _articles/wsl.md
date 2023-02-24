---
title: Windows开发环境安装配置
excerpt: Windows开发环境安装配置
coverImage: /images/articles/ubuntu-aliyun-nodejs-cover.png
author:
  name: ""
  picture: ""
ogImage:
  url: ""
tags:
  - WSL
  - Windows
categories: {}
date: 2022-12-07T02:49:52.395Z
lastmod: 2023-01-01T15:11:39.106Z
---

### 安装 WSL

> [官方教程](https://learn.microsoft.com/zh-cn/windows/wsl/install)

- 安装 wsl `wsl --install`
- 在 store 中下载安装发行版本如 Ubuntu
- 进入 Liunx 替换镜像地址`sudo vim /etc/apt/sources.list`为http://mirrors.tuna.tsinghua.edu.cn/ubuntu/
- 更新包`sudo apt update && sudo apt upgrade`

### Windows Terminal

- [下载并安装](https://apps.microsoft.com/store/detail/windows-terminal/9N0DX20HK701?hl=zh-cn&gl=cn)
- 更改默认启动命令模式：设置>启动>默认 Ubuntu
- 更改透明度(可选)：设置>打开 JSON 文件

```
"profiles": {
    "defaults": { "useAcrylic": true, "acrylicOpacity": 0.5 }
    ...
}
```

- 配置默认启动目录：设置>配置文件>Ubuntu>启动目录

### ZSH

- 安装 ZSH

```
 ~/$: sudo apt install zsh
```

- 安装 Oh my zsh

### 移动项目到 Linux 目录下

> 需要项目在 linux 环境下进行，可以避免 webpack hmr 等问题

- 可以使用文件资源管理器剪切
  > 文件资源管理器侧边下方有 Ubuntu 文件目录，可以选择复制项目到 Linux ~/目录下
- 可以通过 Terminal 移动

```
~$: sudo rmdir /.../projects/* ~/projects
```

- 可以直接通过 Linux 下 git 拉取

```
~/projects$: git clone ...
```

### Vscode 安装以及 WSL 配置

- [下载并安装](https://code.visualstudio.com/)
- 安装必要扩展包 WSL
- 进入 Terminal 找到开发项目目录`code .`打开项目

### Docker

- [下载安装](https://www.docker.com/) 只需要安装 windows 版即可
- 配置 Docker 支持 WSL: Settings>Resources>WSL integration>Enable integration with additional distros:
