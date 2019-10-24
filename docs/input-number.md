input-number 基本用法 

- 可以设置 max、min属性
- 可以点击增减按钮进行操作，不在范围内后，按钮置灰不可点击。
- 可以输入指定范围内的数字

>以下面为例，设置一个0 到10之间的一个数字。

```vue
<template>
    <div>
        <Button @click='handleGetVa'>打印父组件中的值</Button>
        
        <input-number v-model='value' :max="10" :min="0"/>
    </div>
</template>
<script>
export default {
    name:'test-input-number',
    methods:{
        handleGetVa(){
            alert(this.value);
        }
    },
    data(){
        return {
            value:2
        }
    }
}
</script>
```