<template>
  <div class="m-input-number">
    <button @click="handleAdd" :disabled="addCls">+</button>
    <input type="number" :value="selfValue" @change="handleChange" />
    <button @click="handleSubtrct" :disabled="subCls">-</button>
  </div>
</template>

<script>
export default {
  name: 'inputNumber',
  data() {
    return {
      selfValue: 0
    }
  },
  props: {
    /*
     * 默认值
     */
    value: {
      type: Number,
      default: 0
    },

    /*
     * 最小取
     */
    min: {
      type: Number,
      default: -Infinity
    },

    /*
     * 最大值
     */
    max: {
      type: Number,
      default: Infinity
    }
  },
  computed: {
    addCls() {
      return this.selfValue >= this.max
    },
    subCls() {
      return this.selfValue <= this.min
    }
  },
  methods: {
    isNumber(val) {
      return (
        Object.prototype.toString
          .call(val)
          .slice(8, -1)
          .toLowerCase() === 'number'
      )
    },

    handleChange($event) {
      let val = $event.target.value
      if (val && !isNaN(val)) {
        val = Number(val)
        if (val > this.max) {
          val = this.max
        }
        if (val < this.min) {
          val = this.min
        }
        this.selfValue = val
        this.updateParentValue(val)
      } else {
        // 形如 1.1.1.1的，需要处理下
        $event.target.value = this.selfValue
      }
    },

    handleAdd() {
      if (this.selfValue >= this.max) {
        return
      }
      this.selfValue++
      this.updateParentValue(this.selfValue)
    },

    handleSubtrct() {
      if (this.selfValue <= this.min) {
        return
      }
      this.selfValue--
      this.updateParentValue(this.selfValue)
    },

    updateParentValue(val) {
      this.$emit('input', Number(val))
    }
  },
  /**
   * 及时更新父组件的值
   */
  watch: {
    value: {
      handler: function(val) {
        if (val > this.max) {
          val = this.max
        }
        if (val < this.min) {
          val = this.min
        }
        this.selfValue = val
      },
      // 初始化获取父组件传过来的value
      immediate: true
    }
  }
}
</script>

