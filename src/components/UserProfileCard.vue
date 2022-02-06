<template>
    <div class="row no-gutters">
        <div class="col-md-4">
            <img src="https://i.imgur.com/40wLHVD.png" width="300px" height="300px">
        </div>
        <div class="col-md-8">
        <div class="card-body">
            <h5 class="card-title">1234</h5>
            <p class="card-text">
            123@123.123
            </p>
            <ul class="list-unstyled list-inline">
            <li><strong>1</strong> 已評論餐廳</li>
            <li><strong>1</strong> 收藏的餐廳</li>
            <li><strong>0</strong> followings (追蹤者)</li>
            <li><strong>0</strong> followers (追隨者)</li>
            </ul>
            <p></p>
            <form style="display: contents;">
                <button type="submit" class="btn btn-primary" v-if="isMe">編輯</button>
                <button type="submit" class="btn btn-primary" v-else>追蹤</button>
            </form>
            <p></p>
        </div>
        </div>
    </div>
</template>

<script>
const dummyUser = {
        id: 2,
        name: "root",
        email: "root@example.com",
        image: null,
        isAdmin: true
    }
export default {
    props: {
        profile:{
            type: Object,
            required: true
        }
    },
    data(){
        return {
            loginUser: dummyUser,
            user: this.profile,
            isMe: dummyUser.id === this.profile.id ? true : false
        }
    },
    methods:{
        addFollowing(){
        this.user = {
            ...this.user,
            isFavorited: true
        }
        },
        deleteFollowing(){
            this.user = {
            ...this.user,
            isFavorited: false
            }
        }
    }
}
</script>