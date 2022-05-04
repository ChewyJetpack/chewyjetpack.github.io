<template>
  <button
    :class="[classes, 'icon-btn']"
    :style="`color: var(${cText})`"
    @click="copyUrl()"
  >
    <font-awesome icon="link" />
  </button>
</template>

<script>
export default {
  props: {
    classes: {
      type: String
    },
    icon: {
      type: String
    },
    cText: {
      type: String
    }
  },
  data() {
    return {
      windowUrl: ''
    }
  },
  created(){
    if (process.browser){
      this.windowUrl = window.location.href;
    }
  },
  methods: {
    copyUrl: function () {
      this.$copyText(this.windowUrl).then(function (e) {
        alert('Copied')
        console.log(e)
      }, function (e) {
        alert('Can not copy')
        console.log(e)
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.icon-btn {
  outline: none;
  border: none;
  padding: 0;
  background: transparent;
  cursor: pointer;
  line-height: 1;
  display: flex;
  align-items: center;
  position: relative;
  font-size: $txt_s;
  color: var(--c-main);

  &--invert {
    color: var(--c-bg);
  }

  &:hover {
    svg {
      transform: scale(1.1);
    }
  }

  svg {
    position: relative;
    z-index: 1;
    transition: transform 0.2s;
    pointer-events: none;
  }
}
</style>
