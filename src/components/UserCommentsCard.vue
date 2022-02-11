<template>
    <div class="card">
        <div class="card-header">
            <strong>{{comments.length}}</strong> 已評論餐廳
        </div>
        <div class="card-body">
            <router-link :to="{name: 'restaurant', params: {id: comment.id }}" v-for="comment in comments" :key="comment.id">
                    <img :src="comment.Restaurant.image | emptyImage" width="60" height="60" class="avatar mr-1 mb-1">
                </router-link>
        </div>
        </div>
</template>
<script>
    import { emptyImageFilter } from '../untils/mixins.js'  
    export default {
        props: {
            comments:{
                type: Array,
                required: true
            }
        },
        mixins:[emptyImageFilter]
    }
</script>