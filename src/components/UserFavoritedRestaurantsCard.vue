<template>
    <div class="card">
            <div class="card-header">
                <strong>{{favoritedRestaurants.length}}</strong> 收藏的餐廳
            </div>
            <div class="card-body">
                <router-link 
                v-for="favoritedRestaurant in favoritedRestaurants" 
                :key="favoritedRestaurant.id"
                :to="{name: 'restaurant', params:{id: favoritedRestaurant.id}}" 
                >
                    <img :src="favoritedRestaurant.image | emptyImage" width="60" height="60" class="avatar mr-1 mb-1">
                </router-link>
            </div>
        </div>
</template>
<script>
    import { emptyImageFilter } from '../untils/mixins.js'
    export default {
        props:{
            favoritedRestaurants: {
                type: Array,
                required: true
            }
        },
        mixins:[emptyImageFilter]
    }
</script>


