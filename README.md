# 有娱 YouYu <。)#)))≦>

## 一、环境需求 Requirements

### 1. 系统软件：

* Git
* Node.js

### 2. NPM（Yarn） 全局依赖：

* npm / yarn
* gulp-cli

```
$ npm install -g yarn
$ npm install -g gulp-cli
```

### 3. 编辑器配置：

参照所使用的编辑器的配置文档，重点需要配置 eslint、stylelint 相关语法检查、代码格式检查。

## 二、项目配置 Config

### Nginx 配置：

```
server {
        listen       80;
        server_name  local.youyu.top;

        location  / {
                proxy_pass              http://127.0.0.1:8801;
                proxy_redirect          off;
                proxy_set_header        Host            $host;
                proxy_set_header        X-Real-IP       $remote_addr;
                proxy_set_header        X-Forwarded-For $proxy_add_x_forwarded_for;
        }

        location  /sockjs-node/ {
                proxy_pass              http://127.0.0.1:8801;
                proxy_http_version      1.1;
                proxy_set_header        Upgrade $http_upgrade;
                proxy_set_header        Connection "Upgrade";
        }
}
```

### Host 配置：

```
$ vim /etc/hosts
```

添加一行：

127.0.0.1 local.youyu.top

## 三、项目开发 Development

### 1. 项目启动：

```
$ yarn run start:client:<环境变量> （环境变量可选: test01 ~ test12）
```

### 2. 生成器:

* 生成 component (组件)
* 生成 container (容器)
* 生成 routes (路由)

```
$ yarn run generate
```

执行以上命令后，按照命令行提示即可生成对应组件、容器和路由。

## 四、项目部署 Deploy

```
$ yarn run build:client:<环境变量> （环境变量可选：test01 ~ test12）
```
