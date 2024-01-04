<template>
  <a-list item-layout="horizontal" :grid="{gutter:16,column:3}" :data-source="props.userList" >
    <template #renderItem="{ item }">
      <a-card hoverable style="width: 240px">
        <template #cover>
          <img alt="example" src="https://project-findfriend-1310836527.cos.ap-shanghai.myqcloud.com/userAvatar/rrrxxx-DF0FAFC663EB7547BA34F4F712354736.png" />
        </template>
        <a-card-meta :title="item.userName">
          <template #description>{{item.userProfile}}</template>
        </a-card-meta>
      </a-card>
    </template>
  </a-list>
</template>

<script setup lang="ts">
import {withDefaults,defineProps,toRefs} from "vue";

interface Props{
  userList:any[];
}
const props = withDefaults(defineProps<Props>(),{
  userList:()=>[],
});
</script>

<style scoped>

</style>