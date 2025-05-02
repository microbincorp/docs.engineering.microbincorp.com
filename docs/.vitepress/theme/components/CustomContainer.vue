
<template>
  <div class="custom-container" :class="type">
    <p class="custom-container-title">{{ title }}</p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'tip'
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
.custom-container {
  margin: 1rem 0;
  padding: 1rem;
  border-left-width: 4px;
  border-left-style: solid;
  border-radius: 4px;
}

.custom-container.tip {
  border-color: var(--vp-c-brand);
  background-color: var(--vp-c-bg-soft);
}

.custom-container.warning {
  border-color: #f97316;
  background-color: #fff7ed;
}

.custom-container.danger {
  border-color: #ea384c;
  background-color: #fef2f2;
}

.custom-container-title {
  font-weight: 600;
  margin-bottom: 0.5rem;
}
</style>
