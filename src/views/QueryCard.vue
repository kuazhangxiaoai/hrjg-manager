
<template>
  <div class="card" @click="QueryCard">{{props.itemInfo}}</div>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
const props = defineProps<{
  itemInfo: {
    title: string;
  };
  selectElement: (
      e: MouseEvent | TouchEvent,
  ) => void;
}>();

const QueryCard = () => {
  router.push('/cards-query');
}

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