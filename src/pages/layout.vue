<script setup lang="ts">
import { useDark } from '@/use'

const { toggleDark } = useDark()
</script>

<template>
  <div class="container flex min-h-screen justify-center items-center mx-auto">
    <var-button type="primary" @click="toggleDark">
      <span class="mr-4px">Toggle Theme</span>
      <var-icon namespace="i" name="border-radius" />
    </var-button>
  </div>
</template>
