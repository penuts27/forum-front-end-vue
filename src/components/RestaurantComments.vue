<template>
  <div>
    <h2 class="my-4">
      所有評論：
    </h2>

    <div v-for="comment in restaurantComments" :key="comment.id">
      <blockquote class="blockquote mb-0">
        <button
          type="button"
          class="btn btn-danger float-right"
          v-if="currentUser.isAdmin"
          @click.stop.prevent="handleDeleteButtonClicked(comment.id)"
        >
          Delete
        </button>
        <h3>
          <router-link to="#">
            {{comment.User.name}}
          </router-link>
        </h3>
        <p>{{comment.text}}</p>
        <footer class="blockquote-footer">
          {{comment.createdAt | fromNow}}
        </footer>
      </blockquote>
      <hr>
    </div>
  </div>
</template>

<script>
import { fromNowFilter } from '.././untils/mixins'
const dummyUser = {
    currentUser: {
        id: 1,
        name: '管理者',
        email: 'root@example.com',
        image: 'https://i.pravatar.cc/300',
        isAdmin: true
    },
    isAuthenticated: true
}
export default {
    props:{
        restaurantComments:{
            type: Array,
            require: true
        }
    },
    data(){
        return {
            currentUser: dummyUser.currentUser
        }
    },
    methods:{
      handleDeleteButtonClicked(commentId){
        // todo: 請求api 伺服器刪除 id 為 commentId 的評論
        // 觸發父層事件 - .$emit('事件名稱',傳遞參數)
        this.$emit('after-delete-comment', commentId)
      }
    },
    mixins:[fromNowFilter]
}
</script>