<template>
  <div class="panel maids">
    <div class="panel-title">在编女仆<span class="panel-count">{{ maidCount }}</span></div>
    <div v-if="!maidCount" class="empty">庄园还没有女仆</div>
    <div v-for="[name, maid] in maidEntries" :key="name" class="maid-row" :class="{ away: !maid.在场 }">
      <div class="maid-main">
        <span class="maid-name">{{ name }}</span>
        <span class="maid-away" v-if="!maid.在场">不在场</span>
        <span class="maid-stage">{{ stageOf(maid.好感) }}</span>
      </div>
      <div class="maid-tags">
        <span class="tag">{{ maid.职级 }}</span>
        <span class="tag">{{ maid.岗位 }}</span>
        <span class="tag state">{{ maid.状态 }}</span>
      </div>
      <div class="maid-bars">
        <div class="bar-row">
          <span class="bar-label">好感</span>
          <div class="bar"><div class="bar-fill favor" :style="{ width: percent(maid.好感, 200) }"></div></div>
          <span class="bar-value">{{ maid.好感 }}</span>
        </div>
        <div class="bar-row">
          <span class="bar-label">魅力</span>
          <div class="bar"><div class="bar-fill charm" :style="{ width: percent(maid.魅力, 100) }"></div></div>
          <span class="bar-value">{{ maid.魅力 }}</span>
        </div>
        <span class="stat power">实力 {{ maid.实力 }}</span>
      </div>
      <div v-if="maid.近期事件" class="maid-event">✦ {{ maid.近期事件 }}</div>
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

function percent(value: number, max: number): string {
  return `${Math.min(100, Math.max(0, (value / max) * 100))}%`;
}

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
  border-radius: 10px;
  padding: 10px 14px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
}

.panel-title {
  font-weight: bold;
  color: var(--c-primary);
  letter-spacing: 2px;
  margin-bottom: 8px;
  border-bottom: 1px solid var(--c-border);
  padding-bottom: 6px;
  display: flex;
  align-items: baseline;
  gap: 8px;
}

.panel-count {
  font-size: 11px;
  font-weight: normal;
  color: var(--c-text-muted);
}

.empty {
  color: var(--c-text-muted);
  font-size: 12px;
}

.maid-row {
  padding: 8px 0;
  border-bottom: 1px dashed var(--c-border);
}

.maid-row:last-child {
  border-bottom: none;
  padding-bottom: 2px;
}

.maid-row.away {
  opacity: 0.55;
}

.maid-main {
  display: flex;
  align-items: baseline;
  gap: 8px;
}

.maid-name {
  font-weight: bold;
  font-size: 14px;
  color: var(--c-text);
}

.maid-away {
  font-size: 11px;
  color: var(--c-text-muted);
}

.maid-stage {
  margin-left: auto;
  font-size: 11px;
  color: var(--c-accent);
  letter-spacing: 1px;
}

.maid-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin: 4px 0 6px;
}

.tag {
  background: var(--c-primary-soft);
  border: 1px solid var(--c-border);
  color: var(--c-primary);
  border-radius: 999px;
  padding: 0 8px;
  font-size: 11px;
}

.tag.state {
  background: var(--c-surface-alt);
  color: var(--c-text-muted);
}

.maid-bars {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px 16px;
}

.bar-row {
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 180px;
  flex: 1;
  max-width: 260px;
}

.bar-label {
  font-size: 11px;
  color: var(--c-text-muted);
  white-space: nowrap;
}

.bar {
  flex: 1;
  height: 5px;
  border-radius: 999px;
  background: var(--c-surface-alt);
  overflow: hidden;
}

.bar-fill {
  height: 100%;
  border-radius: 999px;
  transition: width 0.4s ease;
}

.bar-fill.favor {
  background: linear-gradient(90deg, #8a6bbf, var(--c-primary));
}

.bar-fill.charm {
  background: linear-gradient(90deg, #a8873d, var(--c-accent));
}

.bar-value {
  font-size: 11px;
  font-weight: bold;
  color: var(--c-text);
  min-width: 24px;
  text-align: right;
}

.stat.power {
  font-size: 12px;
  color: var(--c-text-muted);
  white-space: nowrap;
}

.maid-event {
  margin-top: 4px;
  font-size: 11px;
  color: var(--c-warn);
}
</style>
