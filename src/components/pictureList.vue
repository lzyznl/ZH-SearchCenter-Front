<template>
  <a-list item-layout="horizontal" :grid="{gutter:16,column:3}" :data-source="props.pictureList" >
    <template #renderItem="{ item }">
      <a-card hoverable style="width: 240px">
        <template #cover>
          <img alt="example" :src="item.pictureUrl" />
        </template>
        <a-card-meta :title="item.pictureTitle">
          <template #description>{{item.pictureTitle}}</template>
        </a-card-meta>
      </a-card>
    </template>
  </a-list>
</template>

<script setup lang="ts">
import {withDefaults,defineProps,toRefs} from "vue";

interface Props{
  pictureList:any[];
}
const props = withDefaults(defineProps<Props>(),{
  pictureList:()=>[],
});
</script>

<style scoped>

</style>