# typescript 学习记录

> 项目名：react-ts 

```
create-react-app react-ts --scripts-version=react-scripts-ts

cnpm i -D enzyme @types/enzyme enzyme-adapter-react-16 @types/enzyme-adapter-react-16 react-test-renderer

cnpm i -S redux react-redux @types/react-redux

```
### 注意事项：
- Dispatch 受redux版本影响，如果报错找不到，有两种解决方案处理：

  1. 修改package.json文件中 "@types/react-redux": "^4.0.30"
  2. 做如下修改
```
import { connect,Dispatch } from 'react-redux';
改为
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
```

- 报 "Expected 4 type arguments, but got 1"错误,需要修改src/index.tsx文件

```
const store = createStore<IStoreState>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
});
修改为
import {EnthusiasmAction} from './actions/index';

const store = createStore<IStoreState,EnthusiasmAction,null,null>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
});
```



> 项目名：vue-ts

```javascript
mkdir vue-ts
cd vue-ts
mkdir src
cd src
mkdir components

# 大概目录结构
vue-ts/
--src
----components

# 安装依赖
cnpm i -D typescript webpack webpack-cli ts-loader css-loader vue vue-loader vue-template-compiler

[vue-loader](https://vue-loader.vuejs.org/migrating.html#css-modules)

```



