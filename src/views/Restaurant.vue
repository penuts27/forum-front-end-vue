<template>
  <div class="container py-5">
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail :initRestaurant="restaurant"/>
    <hr>
    <!-- 餐廳評論 RestaurantComments -->
    <RestaurantComments :restaurantComments="restaurantComments" @after-delete-comment="afterDeleteComment"/>
    <!-- 新增評論 CreateComment -->
    <CreateComment :restaurantId="restaurant.id" @after-create-comment ="afterCreateComment"/>
  </div>
</template>
<script>
    import RestaurantDetail from '../components/RestaurantDetail.vue'
    import RestaurantComments from '../components/RestaurantComments.vue'
    import CreateComment from '../components/CreateComment.vue'

    const dummyData = {
        "restaurant": {
            "id": 1,
            "name": "Noelia Sawayn",
            "tel": "513-780-6849 x037",
            "address": "18669 Jarret Glen",
            "opening_hours": "08:00",
            "description": "Inventore dignissimos amet quis accusamus illo.\nAliquam ut eos est et magnam numquam id deserunt beatae.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=57.70362088789393",
            "viewCounts": 1,
            "createdAt": "2022-02-04T14:51:58.000Z",
            "updatedAt": "2022-02-06T10:18:50.438Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2022-02-04T14:51:58.000Z",
                "updatedAt": "2022-02-04T14:51:58.000Z"
            },
            "FavoritedUsers": [],
            "LikedUsers": [],
            "Comments": [
                {
                    "id": 51,
                    "text": "Maiores assumenda libero.",
                    "UserId": 1,
                    "RestaurantId": 1,
                    "createdAt": "2022-02-04T14:51:58.000Z",
                    "updatedAt": "2022-02-04T14:51:58.000Z",
                    "User": {
                        "id": 1,
                        "name": "root",
                        "email": "root@example.com",
                        "password": "$2a$10$0jIO37lR8QHlvA0CVJ/mtuUyBsdNj9Hjg03SKvBsaejWgOCe030gW",
                        "isAdmin": true,
                        "image": null,
                        "createdAt": "2022-02-04T14:51:58.000Z",
                        "updatedAt": "2022-02-04T14:51:58.000Z"
                    }
                },
                {
                    "id": 101,
                    "text": "Asperiores pariatur rerum aliquid voluptas dolores facilis sunt tempore eius.",
                    "UserId": 1,
                    "RestaurantId": 1,
                    "createdAt": "2022-02-04T14:51:58.000Z",
                    "updatedAt": "2022-02-04T14:51:58.000Z",
                    "User": {
                        "id": 1,
                        "name": "root",
                        "email": "root@example.com",
                        "password": "$2a$10$0jIO37lR8QHlvA0CVJ/mtuUyBsdNj9Hjg03SKvBsaejWgOCe030gW",
                        "isAdmin": true,
                        "image": null,
                        "createdAt": "2022-02-04T14:51:58.000Z",
                        "updatedAt": "2022-02-04T14:51:58.000Z"
                    }
                },
                {
                    "id": 1,
                    "text": "Error vel modi sint natus non itaque sed.",
                    "UserId": 2,
                    "RestaurantId": 1,
                    "createdAt": "2022-02-04T14:51:58.000Z",
                    "updatedAt": "2022-02-04T14:51:58.000Z",
                    "User": {
                        "id": 2,
                        "name": "user1",
                        "email": "user1@example.com",
                        "password": "$2a$10$O0sB1pRJIaV8vVl8Lf0CVuIkQZSET4xaO9PYnp1sci0UBpQ5HoRBy",
                        "isAdmin": false,
                        "image": null,
                        "createdAt": "2022-02-04T14:51:58.000Z",
                        "updatedAt": "2022-02-04T14:51:58.000Z"
                    }
                }
            ]
        },
        "isFavorited": false,
        "isLiked": false
    }
    const dummyUser = {
        id: 1,
        name: "root",
        email: "root@example.com",
        image: null,
        isAdmin: true
    }

    export default{
        name: 'restaurant',
        components: {
            RestaurantDetail,
            RestaurantComments,
            CreateComment
        },
        data(){
            return{
                restaurant:{
                    id: -1,
                    name: "",
                    categoryName: "",
                    image: "",
                    openingHours: "",
                    tel: "",
                    address: "",
                    description: "",
                    isFavorited: false,
                    isLiked: false
                },
                restaurantComments: []
            }
        },
        methods:{
            fetchRestaurant(restaurantId){
                console.log('id', restaurantId)
                const {restaurant, isFavorited, isLiked} = dummyData
                const {id,
                    name,
                    Category,
                    image,
                    opening_hours: openingHours,
                    tel,
                    address,
                    description,
                    Comments} = restaurant
                this.restaurant = {
                    id,
                    name,
                    categoryName: Category ? Category.name : '未分類',
                    image,
                    openingHours,
                    tel,
                    address,
                    description,
                    isFavorited,
                    isLiked
                }
                this.restaurantComments= Comments
            },
            afterDeleteComment(commentId){
                this.restaurantComments = this.restaurantComments.filter(comment => comment.id !== commentId)
            },
            afterCreateComment(payLoad){
                const {id ,text, RestaurantId} = payLoad
                this.restaurantComments.push({
                    id,
                    text,
                    RestaurantId,
                    User:{
                        id: dummyUser.id,
                        name: dummyUser.name
                    },
                    createdAt: new Date()
                })
            }
        },
        created(){
            const {id: restaurantId} = this.$route.params
            this.fetchRestaurant(restaurantId)
        }
    }
</script>
