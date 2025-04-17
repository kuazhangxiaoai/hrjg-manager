
<template>
  <div class="card">{{props.itemInfo}}</div>
</template>

<script setup lang="ts">


const props = defineProps<{
  itemInfo: {
    title: string;
  };
  selectElement: (
      e: MouseEvent | TouchEvent,
  ) => void;
}>();

</script>

<style scoped>
.card{
  position: relative;
  width: 240px;
  height: 160px;
  background-color: antiquewhite;
  border: 1px solid #242f42;
  border-radius: 15px;
  text-align: center;
}
.card:hover{
  cursor: pointer;
}
</style>