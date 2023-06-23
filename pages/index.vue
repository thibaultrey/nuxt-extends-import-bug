<template>
  <div>
    <button type="button" @click="test">
      GET QUERY
    </button>
  </div>
</template>
<script lang="ts" setup>
const nuxtApp = useNuxtApp()
const test = () => {
  console.log(nuxtApp.$query())
}
</script>
