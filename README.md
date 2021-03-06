# input-number

[![Build Status](https://badgen.net/travis/yiluxiangbei87110/input-number/master)](https://travis-ci.com/yiluxiangbei87110/input-number)
[![NPM Download](https://badgen.net/npm/dm/@yiluxiangbei87110/input-number)](https://www.npmjs.com/package/@yiluxiangbei87110/input-number)
[![NPM Version](https://badgen.net/npm/v/@yiluxiangbei87110/input-number)](https://www.npmjs.com/package/@yiluxiangbei87110/input-number)
[![NPM License](https://badgen.net/npm/license/@yiluxiangbei87110/input-number)](https://github.com/yiluxiangbei87110/input-number/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/yiluxiangbei87110/input-number/pulls)
[![Automated Release Notes by gren](https://img.shields.io/badge/%F0%9F%A4%96-release%20notes-00B2EE.svg)](https://github-tools.github.io/github-release-notes/)

short description + sample image(png/gif/mp4)

## Table of Contents

* [input-number](#input-number)
  * [Table of Contents](#table-of-contents)
  * [Introduction](#introduction)
  * [Features](#features)
  * [Install](#install)
  * [Usage](#usage)
  * [Test](#test)
  * [Links](#links)
  * [License](#license)

## Introduction

一个简单的 input-number vue 组件，可以设置 min、max 属性，满足增减、输入等操作。

## Features

* 可以设置 max、min 属性
* 可以点击增减按钮进行操作，不在范围内后，按钮置灰不可点击。
* 可以输入指定范围内的数字

## Install

yarn

## Usage

```vue
<template>
    <div>
        <input-number v-model='value' :max="10" :min="0"/>
    </div>
</template>
<script>
import InputNumber from 'inputNumber'
export default {
  name: 'test-input-number',
  components: {
    'input-number': InputNumber
  },
  data() {
    return {
      value: 2
    }
  }
}
</script>
```

![](https://user-gold-cdn.xitu.io/2019/10/24/16dfcc85e8951b98?w=1162&h=909&f=png&s=71905)


## Test

![](https://user-gold-cdn.xitu.io/2019/10/24/16dfcc8bb2878b69?w=734&h=518&f=png&s=58002)

## Links

* [docs](https://yiluxiangbei87110.github.io/input-number/)

## License

[MIT](./LICENSE)

[⬆ Back to Top](#table-of-contents)
