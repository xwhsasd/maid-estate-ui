<template>
  <div class="panel estate">
    <div class="panel-title">庄园经营</div>
    <div class="estate-grid">
      <div class="stat">
        <span class="stat-label">现金</span>
        <span class="stat-value coin">{{ data.庄园.现金 }} 金</span>
      </div>
      <div class="stat">
        <span class="stat-label">声望</span>
        <span class="stat-value">{{ data.庄园.声望 }}<span class="stat-max">/100</span></span>
      </div>
      <div class="stat">
        <span class="stat-label">上周收支</span>
        <span class="stat-value"><span class="income">+{{ data.庄园.周收支.收入 }}</span> / <span class="expense">-{{ data.庄园.周收支.支出 }}</span></span>
      </div>
      <div class="stat">
        <span class="stat-label">设施</span>
        <span class="stat-value">{{ facilityCount }} 处</span>
      </div>
      <div class="stat">
        <span class="stat-label">待办</span>
        <span class="stat-value">{{ todoCount }} 项</span>
      </div>
    </div>
    <div v-if="facilityEntries.length" class="sub-list">
      <div v-for="[name, state] in facilityEntries" :key="name" class="sub-item">
        <span class="sub-name">{{ name }}</span>
        <span class="sub-desc">{{ state }}</span>
      </div>
    </div>
    <div v-if="todoEntries.length" class="sub-list">
      <div v-for="[name, desc] in todoEntries" :key="name" class="sub-item">
        <span class="sub-name todo">◈ {{ name }}</span>
        <span class="sub-desc">{{ desc }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useDataStore } from '../store';

const store = useDataStore();
const data = store.data;

const facilityEntries = computed(() => Object.entries(data.庄园.设施));
const todoEntries = computed(() => Object.entries(data.庄园.待办));
const facilityCount = computed(() => facilityEntries.value.length);
const todoCount = computed(() => todoEntries.value.length);
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
}

.estate-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
  gap: 8px 12px;
}

.stat {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.stat-label {
  font-size: 11px;
  color: var(--c-text-muted);
}

.stat-value {
  font-weight: bold;
}

.stat-max {
  font-size: 11px;
  font-weight: normal;
  color: var(--c-text-muted);
}

.coin {
  color: var(--c-accent);
}

.income {
  color: var(--c-good);
}

.expense {
  color: var(--c-danger);
}

.sub-list {
  margin-top: 8px;
  border-top: 1px dashed var(--c-border);
  padding-top: 6px;
}

.sub-item {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  font-size: 12px;
  padding: 1px 0;
}

.sub-name {
  color: var(--c-primary);
  font-weight: bold;
}

.sub-name.todo {
  color: var(--c-warn);
}

.sub-desc {
  color: var(--c-text-muted);
  text-align: right;
}
</style>
