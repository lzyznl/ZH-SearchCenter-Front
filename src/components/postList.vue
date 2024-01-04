<template>
  <a-list item-layout="horizontal" :data-source="props.postList">
    <template #renderItem="{ item }">
      <a-list-item>
        <a-list-item-meta
            :description="item.content"
        >
          <template #title>
            <a>{{ item.title }}</a>
          </template>
          <template #avatar>
            <a-avatar src="https://project-findfriend-1310836527.cos.ap-shanghai.myqcloud.com/userAvatar/lzyyyy-xx.jpg" />
          </template>
        </a-list-item-meta>
      </a-list-item>
    </template>
  </a-list>
</template>

<script setup lang="ts">
import {withDefaults,defineProps,toRefs} from "vue";

interface Props{
  postList:any[];
}
const props = withDefaults(defineProps<Props>(),{
  postList:()=>[],
});
</script>

<style scoped>

</style>