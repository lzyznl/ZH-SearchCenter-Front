<template>
    <div class="vedios">
        <div class="vedio-item" v-for="(item) in props.vedioList" :key="item.arcUrl">
            <a :href="item.arcUrl" target="_blank">
                <img :src="item.pic" alt="" referrerpolicy="no-referrer">
                <div class="vedio-details">
                    <div class="det-left">
                        <svg t="1687416301583" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2431" width="32" height="32"><path d="M814.545455 186.181818h-230.4l121.018181-86.109091c11.636364-6.981818 13.963636-20.945455 4.654546-32.581818-6.981818-11.636364-20.945455-13.963636-32.581818-4.654545l-165.236364 116.363636-165.236364-116.363636c-11.636364-6.981818-25.6-4.654545-32.581818 4.654545-6.981818 11.636364-4.654545 25.6 4.654546 32.581818L439.854545 186.181818H209.454545c-76.8 0-139.636364 62.836364-139.636363 139.636364v477.090909c0 76.8 62.836364 139.636364 139.636363 139.636364h605.09091c76.8 0 139.636364-62.836364 139.636363-139.636364V325.818182c0-76.8-62.836364-139.636364-139.636363-139.636364z m93.090909 616.727273c0 51.2-41.890909 93.090909-93.090909 93.090909H209.454545c-51.2 0-93.090909-41.890909-93.090909-93.090909V325.818182c0-51.2 41.890909-93.090909 93.090909-93.090909h605.09091c51.2 0 93.090909 41.890909 93.090909 93.090909v477.090909z" fill="#ffffff" p-id="2432"></path><path d="M686.545455 523.636364l-251.345455-144.290909c-6.981818-4.654545-16.290909-6.981818-23.272727-6.981819-23.272727 0-46.545455 18.618182-46.545455 46.545455v290.909091c0 27.927273 23.272727 46.545455 46.545455 46.545454 6.981818 0 16.290909-2.327273 23.272727-6.981818L686.545455 605.090909c30.254545-18.618182 30.254545-62.836364 0-81.454545z m-274.618182 186.181818V418.909091l251.345454 144.290909-251.345454 146.618182z" fill="#cdcdcd" p-id="2433" ></path></svg>
                        <p>{{ item.play }}</p>
                    </div>
                    <div class="det-right">
                        <p>{{ item.duration }}</p>
                    </div>
                </div>
            </a>
            <div class="more">
                <p v-html="item.title" class="title"></p>
            </div>
            <div class="author">
                <div class="author-left">
                    <svg t="1687422562817" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="847" width="200" height="200"><path d="M800 128H224C134.4 128 64 198.4 64 288v448c0 89.6 70.4 160 160 160h576c89.6 0 160-70.4 160-160V288c0-89.6-70.4-160-160-160z m96 608c0 54.4-41.6 96-96 96H224c-54.4 0-96-41.6-96-96V288c0-54.4 41.6-96 96-96h576c54.4 0 96 41.6 96 96v448z" p-id="848" fill="#cdcdcd"></path><path d="M419.2 544c0 51.2-3.2 108.8-83.2 108.8S252.8 595.2 252.8 544v-217.6H192v243.2c0 96 51.2 140.8 140.8 140.8 89.6 0 147.2-48 147.2-144v-240h-60.8V544zM710.4 326.4h-156.8V704h60.8v-147.2h96c102.4 0 121.6-67.2 121.6-115.2 0-44.8-19.2-115.2-121.6-115.2z m-3.2 179.2h-92.8V384h92.8c32 0 60.8 12.8 60.8 60.8 0 44.8-32 60.8-60.8 60.8z" p-id="849" fill="#cdcdcd"></path></svg>
                    <p>{{ item.author }}</p>
                </div>

            </div>
        </div>
    </div>
</template>



<script setup lang="ts">
import {withDefaults,defineProps,toRefs, ref, onMounted} from "vue";

interface Props{
  vedioList:any[];
}
const props = withDefaults(defineProps<Props>(),{
    vedioList:()=>[],
});


</script>



<style scoped>
.icon{
    height: 25px;
    width: 25px;
}
#up-icon{
    /* color: grey; */
    height: 25px;
    width: 25px;
}
    .vedio-item{
        width: 250px;
        height: 150px;
        border-radius: 5px;
        position: relative;
        padding: 10px 20px;
        margin-bottom: 68px;
    }
    .vedio-item a{
        display: block;
        height: 100%;
        width: 100%;
        position: relative;
    }
    a img{
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 20;
        border-radius: 5px;
    }
    a video{
        position: absolute;
        width: 100%;
        height: 100%;
        /* z-index: 300; */
        background-color: #fff;
    }

    .vedio-details{
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 100;
        width: 100%;
        padding: 10px 3%;
        margin: 0 auto;
        position: absolute;
        bottom: 0%;
        box-shadow: inset 0 -2em 1em rgba(0,0,0,0.5);
        border-radius: 5px;
    }
    .det-left,.det-right{
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 100;
        color: white;
        font-size: 16px;
    }
    .det-left p,.det-right p{
        margin: 0;
        margin-left: 3px;
    }
    .details{
        color: black;
    }
    .more{
        /* background-color: black; */
        color: black;
        display: block;
        
        word-wrap:break-word; 
        word-break:break-all;
    }
    .more p {
        
        width: 100%;
    }
    .author-left{
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .author-left p{
        margin: 0;
        margin-left: 5px;
        transform: translateY(1px);
        color: #9b9b9b;
    }
    .vedios{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 20px;
        max-height: fit-content;
        flex-wrap: wrap;
    }
    .more .title{
        margin-top: 5px;
        font-weight: 600;
        font-size: 1.2em;
        margin-bottom: 0;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
    }
</style>