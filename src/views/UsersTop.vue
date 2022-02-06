<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      美食達人
    </h1>
    <hr>
    <div class="row text-center">
      <UserCard v-for="user in users" :key="user.id" :initUser="user"/>
    </div>
  </div>
</template>

<script>
  import NavTabs from '../components/NavTabs.vue'
  import UserCard from '../components/UsersCard.vue'

    const dummyData = {
      "users": [
          {
              "id": 1,
              "name": "root",
              "email": "root@example.com",
              "password": "$2a$10$0jIO37lR8QHlvA0CVJ/mtuUyBsdNj9Hjg03SKvBsaejWgOCe030gW",
              "isAdmin": true,
              "image": null,
              "createdAt": "2022-02-04T14:51:58.000Z",
              "updatedAt": "2022-02-04T14:51:58.000Z",
              "Followers": [],
              "FollowerCount": 0,
              "isFollowed": false
          },
          {
              "id": 2,
              "name": "user1",
              "email": "user1@example.com",
              "password": "$2a$10$O0sB1pRJIaV8vVl8Lf0CVuIkQZSET4xaO9PYnp1sci0UBpQ5HoRBy",
              "isAdmin": false,
              "image": null,
              "createdAt": "2022-02-04T14:51:58.000Z",
              "updatedAt": "2022-02-04T14:51:58.000Z",
              "Followers": [],
              "FollowerCount": 0,
              "isFollowed": false
          },
          {
              "id": 3,
              "name": "user2",
              "email": "user2@example.com",
              "password": "$2a$10$9xkRUlJbYrttGFJ/vblF6u4Mb2tkMP0ZTlagiLAe84sKVdfX7dzVS",
              "isAdmin": false,
              "image": null,
              "createdAt": "2022-02-04T14:51:58.000Z",
              "updatedAt": "2022-02-04T14:51:58.000Z",
              "Followers": [],
              "FollowerCount": 0,
              "isFollowed": false
          }
      ]
  }

  
  export default {
    name: 'UsersTop',
    components: {
      NavTabs,
      UserCard
    },
    data(){
      return {
        users: []
      }
    },
    methods:{
      fetchUsers(){
        const {users} = dummyData
        this.users = users
      }
    },
    created(){
      this.fetchUsers()
    }
  }
</script>
