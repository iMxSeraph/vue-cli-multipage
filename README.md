# Vue.js Webpack 演示工程

> 基于Vue.js+Webpack的演示工程

## 使用方法

``` bash
# 安装基本依赖
npm install

# 在本地8080端口启动带热加载功能的服务
# 端口可在配置文件config/index.js中修改
npm run dev

# 进行现网打包操作
npm run build

# 进行代码检查(一般不需单独运行，以上两个过程都包括代码检查)
npm run lint
```

## 目录说明

1. `build`

   基本构建命令目录，明白原理后可自行修改

2. `config`

   基础配置信息，可设置导出时资源目录、本地调试端口等

3. `src`

   代码目录

   - `assets`

     静态资源，所有页面用到的资源文件都应该在此目录中

   - `components`

     vue组件，所有vue子组件

   - `pages`

     vue父组件，单独放一个文件夹是方便寻找页面入口组件

   - `views`

     视图入口，子文件夹名代表最终html名

     > 如需最终生成index.html，则需建立`views/index/index.html`，如需生成about.html，则需建立`views/about/about.html`

4. `static`

   静态资源目录，此目录下的文件会直接被拷贝到输出的`/static`文件夹下

   **注意！千万不要将图片、字体等页面需要的文件放到此处，一切页面需要的资源应该在`src/assets`目录下，否则打包后路径会不正常**

## 其他说明

- `dev`模式下会自动打开浏览器，如果觉得烦，自行删除`build/dev-server.js`中的69~71行

  ​