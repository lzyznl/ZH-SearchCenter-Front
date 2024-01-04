<template>
  <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="searchList">
    <template #renderItem="{ item }">
      <a-list-item key="item.title">
        <template #actions>
          <span v-for="{ type, text } in actions" :key="type">
            <component :is="type" style="margin-right: 8px" />
            {{ text }}
          </span>
        </template>
        <template #extra>
          <img v-if="item.imgUrl"
              width="100"
              alt="logo"
              :src="item.imgUrl"
              referrerpolicy="no-referrer"
          />
        </template>
        <a-list-item-meta :description="item.wurl">
          <template #title>
            <a :href="item.titleUrl" target="_blank">{{ item.title }}</a>
          </template>
          <template #avatar><a-avatar :src="item.avatar" /></template>
        </a-list-item-meta>
        {{ item.description }}
      </a-list-item>
    </template>
  </a-list>
</template>
<script  setup lang="ts">
import {withDefaults,defineProps,toRefs} from "vue";

interface Props{
  searchList:any[];
}
const props = withDefaults(defineProps<Props>(),{
  searchList:()=>[],
});
</script>

<style scoped>
:deep(.ant-avatar.ant-avatar-circle){
  display: none;
}
.ant-list-item-meta-title > a{
  color: #1fa6ff;
}
.ant-list-vertical .ant-list-item-meta, .ant-list-vertical .ant-list-item-meta-title{
  margin-bottom: 0;
}
</style>

