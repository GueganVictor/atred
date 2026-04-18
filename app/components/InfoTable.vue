<template>
  <div class="overflow-x-auto border border-neutral-300 bg-white">
    <table class="min-w-full border-collapse">
      <thead class="bg-neutral-100">
        <tr>
          <th
            v-for="column in columns"
            :key="column.key"
            class="border-b border-neutral-300 px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.12em] text-neutral-700"
          >
            {{ column.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row, index) in rows"
          :key="index"
          class="align-top odd:bg-white even:bg-neutral-50"
        >
          <td
            v-for="column in columns"
            :key="column.key"
            class="border-b border-neutral-200 p-4 text-sm/7 text-neutral-800 last:border-r-0"
          >
            {{ row[column.key] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  columns: Array<{ key: string; label: string }>
  rows: Array<Record<string, string>>
}>()
</script>
