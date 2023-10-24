<script setup lang="ts">
import { useDark } from '@/use'

const { toggleDark } = useDark()
</script>

<template>
  <main class="flex min-h-screen justify-center items-center">
    <var-button type="primary" @click="toggleDark">Toggle Theme</var-button>
  </main>
</template>
