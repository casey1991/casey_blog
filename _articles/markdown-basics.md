---
title: Markdown 样式
excerpt: Markdown 语法博客样式
coverImage: /images/articles/markdown-basics-cover.png
ogImage:
  url: /images/articles/git-cover.png
tags:
  - Git
categories: []
slug: markdown-basics
date: 2022-11-27T07:40:16.275Z
lastmod: 2022-11-28T13:24:04.989Z
---

### 文本

# 标题 1

## 标题 2

### 标题 3

#### 标题 4

##### 标题 5

###### 标题 6

普通文字

### 代码块

```
export async function getStaticPaths() {
  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: false, // can also be true or 'blocking'
  }
}
```

Regular text. `This is code.` Regular text.

### 有序&无序列表

1. Order 1
   1. Order 1-1
   2. Order 1-2
1. Order 2

- Order 1
  - Order 1-1
- Order2

### 超链接

[百度](http://www.baidu.com)

### 图片

![Url](https://images.pexels.com/photos/13950924/pexels-photo-13950924.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load)

### 引用

> CSS 的 code 選擇器設定可以透過蓋過瀏覽器預設，而用戶個人設定可以蓋過 CSS 設定。CSS 的 code 選擇器設定可以透過蓋過瀏覽器預設，而用戶個人設定可以蓋過 CSS 設定。

~~世界是平坦的。~~ 我们现在知道世界是圆的。

### 表格

| 姓名   | 性别 | 年龄 |
| :----- | :--: | ---: |
| 王老五 |  男  |   25 |
| 赵老四 |  男  |   21 |

### 计划表

- [ ] to do
- [x] done
