<template>
  <div class="maid-status-bar">
    <HeaderBar />
    <EstatePanel />
    <MaidPanel />
    <PlayerPanel />
  </div>
</template>

<script setup lang="ts">
import EstatePanel from './components/EstatePanel.vue';
import HeaderBar from './components/HeaderBar.vue';
import MaidPanel from './components/MaidPanel.vue';
import PlayerPanel from './components/PlayerPanel.vue';
</script>

<style lang="scss" scoped>
.maid-status-bar {
  width: 100%;
  max-width: 760px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-family: var(--font-maid);
  font-size: 13px;
  line-height: 1.4;
  color: var(--c-text);
}
</style>
