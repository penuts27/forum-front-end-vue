<template>
    <div class="row no-gutters">
        <div class="col-md-4">
            <img :src="user.image">
        </div>
        <div class="col-md-8">
        <div class="card-body">
            <h5 class="card-title">{{user.name}}</h5>
            <p class="card-text">
                {{user.email}}
            </p>
            <ul class="list-unstyled list-inline">
            <li><strong>{{comments.length}}</strong> 已評論餐廳</li>
            <li><strong>{{favoritedRestaurants.length}}</strong> 收藏的餐廳</li>
            <li><strong>{{followings.length}}</strong> followings (追蹤者)</li>
            <li><strong>{{followers.length}}</strong> followers (追隨者)</li>
            </ul>
            <p></p>
            <form style="display: contents;">
                <button type="submit" class="btn btn-primary" v-if="isMe">編輯</button>
                <template v-else>
                    <button type="submit" class="btn btn-primary mr-2" v-if="!isFollowers" @click.stop.prevent="handleAddFollowing">追蹤</button>
                    <button type="submit" class="btn btn-danger" v-else @click.stop.prevent="handleDeleteFollowing">取消追蹤</button>
                </template>
            </form>
            <p></p>
        </div>
        </div>
    </div>
</template>

<script>
// const dummyUser = {
//         id: 2,
//         name: "root",
//         email: "root@example.com",
//         image: null,
//         isAdmin: true
//     }
export default {
    props: {
        user:{
            type: Object,
            required: true
        },
        isMe:{
            type: Boolean,
            require: true
        },
        isFollowers:{
            type: Boolean,
            require: true
        },
        followers:{
            type: Array,
            required: true
        },
        followings:{
            type: Array,
            required: true
        },
        comments:{
            type: Array,
            required: true
        },
        favoritedRestaurants:{
            type: Array,
            required: true
        }
    },
    data(){
        return {
            // user: this.user,
        }
    },
    methods:{
        handleAddFollowing(){
            this.$emit('after-add-following')
        },
        handleDeleteFollowing(){
            this.$emit('after-delete-following')
        }
    }
}
</script>