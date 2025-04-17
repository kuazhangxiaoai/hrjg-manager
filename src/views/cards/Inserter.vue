<template>
  <div class="insertDialog">
  </div>
</template>

<script setup lang="ts" name="Inserter">

</script>

<style scoped>
.insertDialog{
  position: relative;
  left: 10%;
  top: 5%;
  width: 80%;
  height: 90%;
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
  content: url('../../assets/img/add_hover.png');
  cursor: pointer;
}

</style>