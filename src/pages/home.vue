<script setup lang="ts">
const { toggleDark } = useDark()
</script>

<template>
  <var-button type="primary" @click="toggleDark">
    <span class="mr-4px">Toggle Theme</span>
    <var-icon namespace="i" name="border-radius" />
  </var-button>
</template>
