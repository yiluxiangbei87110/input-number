import {shallowMount} from '@vue/test-utils'
import InputNumber from '../src/input-number.vue'

describe('InputNumber', () => {
  const wrapper = shallowMount(InputNumber)

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('has div', () => {
    expect(wrapper.contains('div')).toBe(true)
  })

  it('has button', () => {
    expect(wrapper.contains('div')).toBe(true)
  })

  it('the added button clicked should increment number', () => {
    expect(wrapper.vm.selfValue).toBe(0)
    const btn = wrapper.find('button')
    btn.trigger('click')
    expect(wrapper.vm.selfValue).toBe(1)
  })

  it('the subtract button clicked should decrement number', () => {
    expect(wrapper.vm.selfValue).toBe(1)
    const btn = wrapper.findAll('button').at(1)
    btn.trigger('click')
    expect(wrapper.vm.selfValue).toBe(0)
  })

  it('test update range props', () => {
    const modifyedWrapper = shallowMount(InputNumber, {
      propsData: {
        min: 0,
        max: 200,
        value: 100
      }
    })
    expect(modifyedWrapper.vm.selfValue).toBe(100)

    const btns = modifyedWrapper.findAll('button')
    for (let i = 0; i < 2000; i++) {
      btns.at(0).trigger('click')
    }
    expect(modifyedWrapper.vm.selfValue).toBe(200)

    for (let i = 0; i < 2000; i++) {
      btns.at(1).trigger('click')
    }
    expect(modifyedWrapper.vm.selfValue).toBe(0)
  })
})
