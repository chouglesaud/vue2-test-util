import { mount, createLocalVue, Wrapper } from '@vue/test-utils';
import Counter from './Counter.vue';

const localVue = createLocalVue();

describe('Counter.vue', () => {
  /**
   * @type {Wrapper}
   */
  let wrapper;
  
  beforeAll(() => {
    wrapper = null;
  });

  it('Should mount Counter component', () => {
    wrapper = mount(Counter, { localVue });
  });

  it('Should increament the count when click increament button', async () => {
    expect(wrapper.findComponent("[data-test='count']").text()).toEqual('0');

    await wrapper.findComponent("[data-test='increament-button']").trigger('click');

    expect(wrapper.findComponent("[data-test='count']").text()).toEqual('1');
  });

  it('Should set the count 0 when click reset button', async () => {
    await wrapper.findComponent("[data-test='reset-button']").trigger('click');

    expect(wrapper.findComponent("[data-test='count']").text()).toEqual('0');
  });
});
