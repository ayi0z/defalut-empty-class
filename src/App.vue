<template>
  <div id="app">
    <h3>设置表单元素空值时的默认样式</h3>
    <p>input(with model):</p>
    <input type="text" v-empty-class="'default-empty-class'" v-model="input">
    <p>input(without model):</p>
    <input type="text" v-empty-class="'default-empty-class'" >
    <p>select:</p>
    <select v-empty-class="'default-empty-class'">
        <option value="">no one be selected</option>
        <option v-for="op in ops" :key="op" :value="op">{{`option ${op}`}}</option>
    </select>
  </div>
</template>

<script>

export default {
  name: 'app',
  data(){
    return {
      input:'',
      ops: [0, 1, 2, 3, 4, 5, 6, 7, 8]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
.default-empty-class{
  border: solid 1px #ff0000;
}
</style>
