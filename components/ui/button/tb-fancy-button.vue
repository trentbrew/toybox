<script setup>
  const props = defineProps({
    innerClass: {
      type: String,
      default: '',
    },
    to: {
      type: String,
      default: '',
    },
    newtab: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: null,
    },
  })
</script>

<template>
  <nuxt-link :to="props.to">
    <button v-if="props.type === 'animated'" class="animated-btn">
      <span class="circle" :class="props.innerClass" aria-hidden="true">
        <span class="icon arrow"></span>
      </span>
      <span class="button-text">{{ props.text }}</span>
    </button>
  </nuxt-link>
</template>

<style scoped lang="scss">
  @mixin transition(
    $property: all,
    $duration: 0.45s,
    $ease: cubic-bezier(0.65, 0, 0.076, 1)
  ) {
    transition: $property $duration $ease;
  }

  * {
    box-sizing: border-box;
    &::before,
    &::after {
      box-sizing: border-box;
    }
  }

  .animated-btn {
    position: relative;
    display: inline-block;
    cursor: pointer;
    outline: none;
    border: 0;
    vertical-align: middle;
    text-decoration: none;
    background: transparent;
    padding: 0;
    font-size: inherit;
    font-family: inherit;
    width: 12rem;
    height: auto;
    .circle {
      @include transition(all, 0.45s, cubic-bezier(0.65, 0, 0.076, 1));
      position: relative;
      display: block;
      margin: 0;
      width: 3rem;
      height: 3rem;
      border-radius: 1.625rem;
      .icon {
        @include transition(all, 0.45s, cubic-bezier(0.65, 0, 0.076, 1));
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        background: hsl(var(--pc));
        &.arrow {
          @include transition(all, 0.45s, cubic-bezier(0.65, 0, 0.076, 1));
          left: 0.625rem;
          width: 1.125rem;
          height: 0.125rem;
          background: none;
          &::before {
            position: absolute;
            content: '';
            top: -0.25rem;
            right: 0.0625rem;
            width: 0.625rem;
            height: 0.625rem;
            border-top: 0.125rem solid hsl(var(--pc));
            border-right: 0.125rem solid hsl(var(--pc));
            transform: rotate(45deg);
          }
        }
      }
    }
    .button-text {
      @include transition(all, 0.45s, cubic-bezier(0.65, 0, 0.076, 1));
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 0.75rem 0;
      margin: 0 0 0 1.85rem;
      color: hsl(var(--bc));
      line-height: 1.6;
      text-align: center;
    }
    &:hover {
      .circle {
        width: 100%;
        .icon {
          &.arrow {
            background: hsl(var(--pc));
            transform: translate(1rem, 0);
          }
        }
      }
      .button-text {
        color: hsl(var(--pc));
      }
    }
  }
</style>
