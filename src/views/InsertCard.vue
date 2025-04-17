<template>
  <div class="insert-card">
    <img src="../assets/img/add.png" class='inserter' v-tooltip="'添加工单'" @click="OpenInserter"></img>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
const OpenInserter = () =>{
  router.push('/cards-inserter');
}

</script>

<style scoped>
.insert-card{
  position: relative;
  width: 240px;
  height: 160px;
  display: grid;
  place-items: center;
  background-color: antiquewhite;
  border: 1px solid #242f42;
  border-radius: 15px;
  text-align: center;
  align-items: center;
}

.inserter{
  width: 32px;
  height: 32px;
}

.inserter:hover{
  content: url('../assets/img/add_hover.png');
  cursor: pointer;
}


</style>