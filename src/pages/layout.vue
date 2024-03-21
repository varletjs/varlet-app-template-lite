<script setup lang="ts">
import { useDark } from '@/use'

const { toggleDark } = useDark()
</script>

<template>
  <div class="container flex min-h-screen justify-center items-center mx-auto">
    <var-button type="primary" @click="toggleDark">Toggle Theme</var-button>
  </div>
</template>
