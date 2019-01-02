# txp-swagger

后端上传 swagger 接口，前端通过 swagger 自动生成 service 接口文件

## 使用方法

src=>config.js，打开文件配置 swagger，和想要导出的文件名对应的 tags

## 需求点

### 用户需求点

输入：生成文件位置、模板字符串
输出：想要的文件

### 程序需求点

生成文件方法
输入：文件生成位置，文件生成字符串，失败回调
输出：文件
获取请求方法
输入：请求 url+接口
输出：响应数据
生成模板方法
输入：参数
输出：模板字符串