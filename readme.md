# typescript 学习记录

## 学习 [typescript-react-starter](https://github.com/Microsoft/TypeScript-React-Starter#typescript-react-starter)

> 项目名：react-ts 

```
create-react-app react-ts --scripts-version=react-scripts-ts

cnpm i -D enzyme @types/enzyme enzyme-adapter-react-16 @types/enzyme-adapter-react-16 react-test-renderer

cnpm i -S redux react-redux @types/react-redux

```
### 注意事项：
* Dispatch 受redux版本影响，如果报错找不到，有两种解决方案处理：
1 修改package.json文件中 "@types/react-redux": "^4.0.30"
1 做如下修改
```
import { connect,Dispatch } from 'react-redux';
改为
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
```

* 报 "Expected 4 type arguments, but got 1"错误,需要修改src/index.tsx文件
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



