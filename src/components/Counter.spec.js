/**
 * @jest-environment jsdom
 */
import { mount, createLocalVue } from "@vue/test-utils";
import Counter from "./Counter.vue";

const localVue = createLocalVue();

describe("Counter.vue", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = null;
  });

  it("Should mount Counter component", () => {
    wrapper = mount(Counter, localVue);
  });

  it("Should increament the count when click increament button", () => {});
});
