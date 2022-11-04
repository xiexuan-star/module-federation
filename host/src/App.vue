<template>
  <section>Home</section>
  <remote-app />
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';

const RemoteApp = defineAsyncComponent(() => import('remote_app/App'));
</script>
