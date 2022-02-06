<template>
    <div class="col-3">
        <router-link :to="{name:'users', params: {id:user.id}}">
        <img
            :src="user.image  ? image : 'http://via.placeholder.com/300x300?text=No+Image' "
            width="140px"
            height="140px"
        >
        </router-link>
        <h2>{{user.name}}</h2>
        <span class="badge badge-secondary">追蹤人數：{{user.FollowerCount}}</span>
        <p class="mt-3">
        <button
            type="button"
            class="btn btn-danger"
            v-if="user.isFollowed"
            @click.stop.prevent="deleteFollowed"
        >
            取消追蹤
        </button>
        <button
            type="button"
            class="btn btn-primary"
            v-else
            @click.stop.prevent="followed"
        >
            追蹤
        </button>
        </p>
    </div>
</template>
<script>

export default {
    props:{
        initUser:{
            type: Object,
            required: true
        }
    },
    data(){
        return{
            user: this.initUser
        }
    },
    methods:{
        deleteFollowed(){
            this.user = {
                ...this.user,
                isFollowed: false
            }
        },
        followed(){
            this.user = {
                ...this.user,
                isFollowed: true
            }
        }
    }
}
</script>
