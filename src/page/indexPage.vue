<template>
  <div class="total-com">
    <div class="index-left">
    <LeftBoard></LeftBoard>
  </div>
  <div class="index-page">
    <div class="search-box">
      <a-input-search
        v-model:value="searchParams.searchText"
        placeholder="input search text"
        enter-button="Search"
        size="large"
        @search="onSearch"
        id="topInput"
        @click="handleClickSearch"
        
     />
      <div class="hot-search-box" v-if="isShowHotBox" @mouseleave="handleMouseLeaveSearch">
        <p class="title">
          热门搜索搜的多就能上榜
        </p>
        <ul>
          <li class="hot-item" v-for="(item) in hotList" :key="item.key"
           @mouseover="searchParams.searchText=item.title"
           @click="handleHotSearch(item.title)">
            <div>{{ item.key }}</div>
            <p>{{ item.title }}</p>
          </li>
        </ul>
        <div class="ops">
          <p>搜索历史</p>
          <div class="delete"><delete-outlined />清空</div>
        </div>
      </div>
    </div>
    <my-divider/>
    <a-tabs v-model:activeKey="activeKey" @change="onChange">
      <a-tab-pane key="search" tab="全部">
        <search-result :search-list="searchList"/>
      </a-tab-pane>
      <a-tab-pane key="post" tab="帖子">
        <post-list :post-list="postList"/>
      </a-tab-pane>
      <a-tab-pane key="picture" tab="图片" force-render>
        <picture-list :picture-list="pictureList"/>
      </a-tab-pane>
      <a-tab-pane key="user" tab="用户">
        <user-list :user-list="userList"/>
      </a-tab-pane>
      <a-tab-pane key="vedio" tab="视频">
        <VedioList :vedio-list="vedioList" v-if="vedioList.length !== 0"></VedioList>
      </a-tab-pane>
    </a-tabs>
    <div class="page">
      <a-pagination v-model:current="current"  default-page-size="2" :total="20"  />
    </div>
  </div>
  <div class="index-right">
    <RightBoard></RightBoard>
  </div>
  </div>
</template>

<script setup lang="ts">
import {ref, watch, watchEffect, nextTick, onMounted} from "vue";
import PostList from "@/components/postList.vue";
import UserList from "@/components/userList.vue";
import PictureList from "@/components/pictureList.vue";
import MyDivider from "@/components/myDivider.vue";
import LeftBoard from "@/components/AdvertusingBoard/LeftBoards.vue"
import RightBoard from "@/components/AdvertusingBoard/RightBoards.vue"
import {useRoute, useRouter} from "vue-router";
import myAxios from "@/plugin/myAxios";
import { message } from 'ant-design-vue';
import SearchResult from "@/components/searchResult.vue";
import VedioList from "@/components/vedioList.vue";
import { DeleteOutlined } from '@ant-design/icons-vue';
onMounted(() => {
  // console.log("se", searchParams.value.searchText)
  if(searchParams.value.searchText) {
    console.log(13)
    LoadData(searchParams.value)
  }
})

const activeKey = ref("");
const router = useRouter();
const route = useRoute();

const postList = ref([]);
const userList = ref([]);
const pictureList = ref([]);
const searchList = ref([]);
const vedioList = ref([]);
let current =ref(1);
const hotList = ref([])

const LoadData=(params:any)=>{
  const hide = message.loading('正在加载中...请稍后', 4);
  myAxios.post("/search/all", params).then((res:any) => {
    // console.log(res)
    searchList.value = res.searchResultsVo.searchResultPage.records;
    postList.value = res.postVo.postPage.records;
    pictureList.value = res.pictureVo.picturePage.records;
    userList.value = res.userVo.userPage.records;
    vedioList.value = res.videoVo.videoPage.records;
    console.log(vedioList,"123")
    hide()
  })

}
const searchParams = ref({
  searchText: route.query.searchText || '',
  pageSize : 10,
  current : current.value
})
let isShowHotBox = ref(false)
const handleClickSearch = () => {
  isShowHotBox.value = true
  //发请求 赋值给hotList
  let index = 1;
  myAxios.get("/search/getHotData").then(res => {
  console.log(res)
  hotList.value = []
    res.forEach((item: string) => {
      hotList.value.push({
        key: index++,
        title: item
      })
    })
  })
}
const handleHotSearch = (searchText: string) => {
  isShowHotBox.value = false
  onSearch(searchText)
}
const handleMouseLeaveSearch = () => {
  isShowHotBox.value = false
  searchParams.value.searchText = ''
}
// LoadData(searchParams.value)
watchEffect(()=>{
  searchParams.value.searchText=route.query.searchText as string
  activeKey.value=activeKey.value || route.path.substring(1);
  // searchParams.value.pageSize=route.query.pageSize as any
  // searchParams.value.pageNum = route.query.pageNum as any
})
const pageNumChange=()=>{
  router.push({
    query:searchParams.value
  })
  LoadData(searchParams.value)
}
watch(() => current.value, ()=>{
  searchParams.value.current = current.value;
  console.log("22",searchParams.value.current)
  pageNumChange()
  //返回顶部
  // document.getElementById("topInput").scrollIntoView();
  document.documentElement.scrollTop = 0;
})

const onSearch=(searchText:string)=>{
  //const hide = message.loading('Action in progress..', 0);
  isShowHotBox.value = false
  router.push({
    query:searchParams.value
  })
  if(current.value===1){
    LoadData(searchParams.value)
  }
  current.value=1;
  if(!activeKey.value) {
    activeKey.value = "search"
    console.log("search", activeKey.value)
  }
  //LoadData(searchParams.value)
}

const onChange =(key:string)=>{
  router.push({
    path :`/${key}`,
    query:searchParams.value
  })
}



</script>

<style>
.page{
  display: flex;
  justify-content: center;
}
.index-page{
  width: 60%;
}
.total-com{
  display: flex;
  justify-content: space-around;
  align-content: center;
  /* overflow: hidden; */
}
.hot-search-box {
  width: 100%;
  /* height: 230px; */
  min-height: fit-content;
  border: 1px solid rgb(234, 234, 234);
  box-shadow: 0 10px 20px 10px rgb(240, 240, 240);
  padding: 10px 0px 5px 0px;
  border-radius: 0 0 5px 5px;
  position: absolute;
  z-index: 100;
  background-color: #fff;
}
.search-box {
  position: relative;
}
.hot-search-box .title {
  color: rgb(164, 164, 164);
  margin-bottom: 5px;
  padding-left: 10px;
}
.hot-search-box ul {
  padding: 0;
  margin-bottom: 0;
}
.hot-search-box li {
  list-style: none;
  padding-left: 3%;
  /* line-height: 30px; */
  font-size: 1.3rem;
}
.hot-search-box li p {
  overflow: hidden;
  white-space: nowrap;
  margin-right: 10px;
  text-overflow: ellipsis;
}
.hot-search-box ul li:nth-child(1) {
  color: orange;
}
.hot-search-box ul li:nth-child(2) {
  color: orange;
}
.hot-search-box ul li:nth-child(3) {
  color: orange;
}
.hot-search-box ul li:nth-child(4) {
  color: rgb(163, 163, 163);
}
.hot-search-box ul li:nth-child(5) {
  color: rgb(163, 163, 163);
}
.hot-search-box ul li:nth-child(6) {
  color: rgb(163, 163, 163);
}
.hot-search-box .ops {
  padding: 10px 10px 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.ops .delete {
  cursor: pointer;
  color: rgb(72, 157, 255);
}
.hot-search-box .ops p {
  margin: 0;
  color: rgb(151, 151, 151);
  cursor: pointer;
}
.hot-search-box .hot-item {
  display: flex;
  align-items: center;
}
.hot-search-box .hot-item:hover {
  background-color: rgb(231, 248, 255);
}
.hot-search-box .hot-item:hover p {
  font-weight: 500;
  color: black;
}
.hot-search-box .hot-item p {
  margin-bottom: 0;
  padding-left: 10px;
  color: rgb(66, 66, 66);
}
</style>
