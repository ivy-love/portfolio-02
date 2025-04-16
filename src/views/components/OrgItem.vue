
<template>
  <div class="org-item">
    <div class="org-grp">
      <em class="org-title">{{ title }}</em>
      <p v-if="detail" class="org-detail">{{ detail }}</p>
    </div>
    <p class="period">{{ period }}</p>
  </div>
</template>

<script>
export default {
  name: 'OrgItem',
  props: {
    title: {
      type: String,
      required: true,
    },
    detail: {
      type: String,
      required: false,
    },
    period: {
      type: String,
      required: true,
    },
  },
}
</script>

<style>
</style>