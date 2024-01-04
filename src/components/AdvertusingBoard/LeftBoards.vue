<template>
    <div class="left_box"></div>
    <div class="left-box">
        <div class="letf-item" v-for="(item) in imgs" :key="item.src">
            <a :href="item.src" target="_blank">
                <img :src="item.image" alt="Logo">
            </a>
        </div>
    </div>
</template>


<script lang="ts" setup>
import BoardSpring from '../../assets/AvertusingBoards/board-spring.png';
import BoardVite from '../../assets/AvertusingBoards/board-vite.jpeg';
import BoardVue from '../../assets/AvertusingBoards/board-vue.jpeg';
import { ref } from 'vue';

const imgs = ref([
    { src: 'https://vuejs.org/', image: BoardVue },
    { src: 'https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/', image: BoardSpring },
    { src: 'https://cn.vitejs.dev/', image: BoardVite }
])
</script>


<style scoped>
.left_box{
    width: 200px;
}
.left-box{
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    width: 200px;
    position: fixed;
}
.left-box .letf-item{
    /* border: 1px solid rgb(235, 235, 235); */
    box-shadow: 0 0 20px 3px rgb(230, 230, 230);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
}
.letf-item img{
    width: 100%;
}

</style>