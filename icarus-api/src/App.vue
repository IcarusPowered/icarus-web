<template>
  <div id="app">
    <main>
      <transition appear>
        <router-view :key="$route.path"></router-view>
      </transition>
    </main>
  </div>
</template>

<style lang="less">
html{
  margin-right: calc(100% - 100vw);
  overflow-x: hidden;
  margin: 0;
}
html::-webkit-scrollbar{
  display: none;
}
</style>
