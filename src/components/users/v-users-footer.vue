<template>
  <div class="v-users-footer">
    <ul class="pages">
      <li class="active">1</li>
      <li>2</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'v-users-footer',
  props: {},
  data() {
    return {}
  },
  computed: {}
}
</script>

<style scoped lang="scss">
.pages {
  display: flex;
  justify-content: center;
  gap: 5px;

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    height: 20px;
    width: 20px;
    font-size: 12px;
    line-height: 14px;
    color: #FFFFFF;
    background: #94918F;
  }

  li.active {
    background: #565656;
  }

}
</style>