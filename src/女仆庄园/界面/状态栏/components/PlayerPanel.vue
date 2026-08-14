<template>
  <div class="panel player">
    <div class="panel-title">主角与剧情</div>
    <div class="player-row">
      <span class="stat">状态 {{ data.主角.状态 }}</span>
      <span class="stat">物品 {{ itemCount }}</span>
      <span class="stat">线索 {{ clueCount }}</span>
    </div>
    <div v-if="data.剧情.当前任务" class="task">
      <span class="task-label">当前任务</span>
      <span class="task-text">{{ data.剧情.当前任务 }}</span>
    </div>
    <div v-if="clueEntries.length" class="sub-list">
      <div v-for="[name, state] in clueEntries" :key="name" class="sub-item">
        <span class="sub-name">◆ {{ name }}</span>
        <span class="sub-desc">{{ state }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useDataStore } from '../store';

const store = useDataStore();
const data = store.data;

const itemCount = computed(() => Object.keys(data.主角.物品).length);
const clueEntries = computed(() => Object.entries(data.主角.线索));
const clueCount = computed(() => clueEntries.value.length);
</script>

<style lang="scss" scoped>
.panel {
  background: var(--c-surface);
  border: 1px solid var(--c-border);
  border-radius: 6px;
  padding: 8px 12px;
}

.panel-title {
  font-weight: bold;
  color: var(--c-primary);
  margin-bottom: 6px;
  border-bottom: 1px solid var(--c-border);
  padding-bottom: 4px;
}

.player-row {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 14px;
  font-size: 12px;
  color: var(--c-text-muted);
}

.task {
  margin-top: 6px;
  display: flex;
  gap: 8px;
  font-size: 12px;
}

.task-label {
  color: var(--c-warn);
  font-weight: bold;
  white-space: nowrap;
}

.task-text {
  color: var(--c-text);
}

.sub-list {
  margin-top: 6px;
  border-top: 1px dashed var(--c-border);
  padding-top: 4px;
}

.sub-item {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  font-size: 12px;
}

.sub-name {
  color: var(--c-primary);
  font-weight: bold;
}

.sub-desc {
  color: var(--c-text-muted);
  text-align: right;
}
</style>
