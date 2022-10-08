<template>
  <div style="margin: 20px">
    <button data-test="increament-button" @click="increament">
      increament
    </button>
    <br />
    <button data-test="reset-button" @click="reset">reset</button>
    <p data-test="count">{{ count }}</p>
  </div>
</template>

<script>
export default {
  name: "Counter",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increament() {
      this.count += 1;
    },
    reset() {
      this.count = 0;
    },
  },
};
</script>