<template>
  <div class="panel maids">
    <div class="panel-title">在编女仆（{{ maidCount }}）</div>
    <div v-if="!maidCount" class="empty">庄园还没有女仆</div>
    <div v-for="[name, maid] in maidEntries" :key="name" class="maid-row" :class="{ away: !maid.在场 }">
      <div class="maid-main">
        <span class="maid-name">{{ name }}</span>
        <span class="maid-away" v-if="!maid.在场">（不在场）</span>
      </div>
      <div class="maid-tags">
        <span class="tag">{{ maid.职级 }}</span>
        <span class="tag">{{ maid.岗位 }}</span>
        <span class="tag state">{{ maid.状态 }}</span>
      </div>
      <div class="maid-stats">
        <span class="stat">好感 {{ maid.好感 }}({{ stageOf(maid.好感) }})</span>
        <span class="stat">魅力 {{ maid.魅力 }}</span>
        <span class="stat">实力 {{ maid.实力 }}</span>
      </div>
      <div v-if="maid.近期事件" class="maid-event">{{ maid.近期事件 }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useDataStore } from '../store';

const store = useDataStore();
const data = store.data;

const maidEntries = computed(() => Object.entries(data.女仆));
const maidCount = computed(() => maidEntries.value.length);

function stageOf(value: number): string {
  if (value <= 30) return '冷漠';
  if (value <= 50) return '友好';
  if (value <= 80) return '亲密';
  if (value <= 99) return '爱';
  return '永恒的爱';
}
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

.empty {
  color: var(--c-text-muted);
  font-size: 12px;
}

.maid-row {
  padding: 6px 0;
  border-bottom: 1px dashed var(--c-border);
}

.maid-row:last-child {
  border-bottom: none;
}

.maid-row.away {
  opacity: 0.6;
}

.maid-main {
  display: flex;
  align-items: baseline;
  gap: 6px;
}

.maid-name {
  font-weight: bold;
  color: var(--c-text);
}

.maid-away {
  font-size: 11px;
  color: var(--c-text-muted);
}

.maid-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin: 3px 0;
}

.tag {
  background: var(--c-primary-soft);
  color: var(--c-primary);
  border-radius: 8px;
  padding: 0 8px;
  font-size: 11px;
}

.tag.state {
  background: var(--c-surface-alt);
  color: var(--c-text-muted);
}

.maid-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 14px;
  font-size: 12px;
  color: var(--c-text-muted);
}

.maid-event {
  margin-top: 3px;
  font-size: 11px;
  color: var(--c-warn);
}
</style>
