<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </span>
    </div>

    <hr>

    <ul>
      <li>評論數： {{ restaurant.commentsLength }}</li>
      <li>瀏覽次數： {{ restaurant.viewCounts }}</li>
    </ul>

    <button
      type="button"
      class="btn btn-link"
      @click="$router.back()"
    >
      回上一頁
    </button>
  </div>
</template>
<script>
    const dummyDate = {
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
            "updatedAt": "2022-02-06T10:18:50.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2022-02-04T14:51:58.000Z",
                "updatedAt": "2022-02-04T14:51:58.000Z"
            },
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
        }
    }
    export default {
        data(){
            return {
                restaurant: {
                    // 定義所需資料
                    id: -1,
                    name: '',
                    categoryName: '',
                    commentsLength: 0,
                    viewCounts: 0
                }

            }
        },
        methods: {
            fetchRestaurant(){
                // 取出所需特定api資料，掛入data
                const {id, name, Category, Comments, viewCounts} = dummyDate.restaurant
                this.restaurant = {
                    ...this.restaurant,
                    id,
                    name,
                    categoryName: Category ? Category.name : '未分類',
                    commentsLength: Comments.length,
                    viewCounts
                }
            }
        },
        created(){
            this.fetchRestaurant()
        }
    }
</script>