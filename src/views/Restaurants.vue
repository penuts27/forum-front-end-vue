<template>
  <div class="container py-5">
    <NavTabs />
    <!-- 餐廳類別標籤 RestaurantsNavPills -->
    <RestaurantsNavPill :categories="categories"/>
    <div class="row">
      <!-- 餐廳卡片 RestaurantCard-->
      <RestaurantCard v-for="restaurant in restaurants" :key="restaurant.id" :initialResetaurant="restaurant" />
    </div>

    <!-- 分頁標籤 RestaurantPagination -->
    <RestaurantsPagination 
    :currentPage="currentPage"
    :totalPage="totalPage"
    :nextPage="nextPage"
    :previousPage="previousPage"
    :categoryId="categoryId"/>
  </div>
</template>
<script>
  import NavTabs from '../components/NavTabs.vue'
  import RestaurantCard from '../components/RestaurantCard.vue'
  import RestaurantsNavPill from '../components/RestaurantsNavPills.vue'
  import RestaurantsPagination from '../components/RestaurantsPagination.vue'

  const dummyData = {
    "restaurants": [
        {
            "id": 1,
            "name": "Noelia Sawayn",
            "tel": "513-780-6849 x037",
            "address": "18669 Jarret Glen",
            "opening_hours": "08:00",
            "description": "Inventore dignissimos amet quis accusamus illo.\nAl",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=57.70362088789393",
            "viewCounts": 0,
            "createdAt": "2022-02-04T14:51:58.000Z",
            "updatedAt": "2022-02-04T14:51:58.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2022-02-04T14:51:58.000Z",
                "updatedAt": "2022-02-04T14:51:58.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 2,
            "name": "Camden Blanda",
            "tel": "613-623-1937 x375",
            "address": "349 Legros Ports",
            "opening_hours": "08:00",
            "description": "labore",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=67.00255242207713",
            "viewCounts": 0,
            "createdAt": "2022-02-04T14:51:58.000Z",
            "updatedAt": "2022-02-04T14:51:58.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2022-02-04T14:51:58.000Z",
                "updatedAt": "2022-02-04T14:51:58.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 3,
            "name": "Mrs. Trevor Johnston",
            "tel": "581.560.7128",
            "address": "3600 Fahey Glens",
            "opening_hours": "08:00",
            "description": "aut et repellat",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=63.23377981216769",
            "viewCounts": 0,
            "createdAt": "2022-02-04T14:51:58.000Z",
            "updatedAt": "2022-02-04T14:51:58.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2022-02-04T14:51:58.000Z",
                "updatedAt": "2022-02-04T14:51:58.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 4,
            "name": "Dorris Schmeler",
            "tel": "(011) 386-1907 x97992",
            "address": "81169 Fatima Meadow",
            "opening_hours": "08:00",
            "description": "Non dolor et distinctio omnis voluptas quia reicie",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=42.318804498685566",
            "viewCounts": 0,
            "createdAt": "2022-02-04T14:51:58.000Z",
            "updatedAt": "2022-02-04T14:51:58.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-02-04T14:51:58.000Z",
                "updatedAt": "2022-02-04T14:51:58.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 5,
            "name": "Miracle Nolan",
            "tel": "1-025-693-6712 x0736",
            "address": "7033 Makayla Courts",
            "opening_hours": "08:00",
            "description": "nihil maxime soluta",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=74.093668659493",
            "viewCounts": 0,
            "createdAt": "2022-02-04T14:51:58.000Z",
            "updatedAt": "2022-02-04T14:51:58.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2022-02-04T14:51:58.000Z",
                "updatedAt": "2022-02-04T14:51:58.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 6,
            "name": "Penelope Schneider",
            "tel": "1-172-898-6266",
            "address": "986 Grant Junction",
            "opening_hours": "08:00",
            "description": "sunt",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=31.08068916540958",
            "viewCounts": 0,
            "createdAt": "2022-02-04T14:51:58.000Z",
            "updatedAt": "2022-02-04T14:51:58.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-02-04T14:51:58.000Z",
                "updatedAt": "2022-02-04T14:51:58.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 7,
            "name": "Gussie Nikolaus",
            "tel": "087.184.8084",
            "address": "2944 Genevieve Via",
            "opening_hours": "08:00",
            "description": "Unde in vero fuga maiores.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=78.5021337561239",
            "viewCounts": 0,
            "createdAt": "2022-02-04T14:51:58.000Z",
            "updatedAt": "2022-02-04T14:51:58.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-02-04T14:51:58.000Z",
                "updatedAt": "2022-02-04T14:51:58.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 8,
            "name": "Lillian Von",
            "tel": "165-441-0203 x814",
            "address": "028 Quitzon Coves",
            "opening_hours": "08:00",
            "description": "Quidem fugiat officia aut aut. Eveniet asperiores ",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=66.83409025965842",
            "viewCounts": 0,
            "createdAt": "2022-02-04T14:51:58.000Z",
            "updatedAt": "2022-02-04T14:51:58.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-02-04T14:51:58.000Z",
                "updatedAt": "2022-02-04T14:51:58.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 9,
            "name": "Kaia Yundt",
            "tel": "(236) 411-7452 x10443",
            "address": "0295 Crona Station",
            "opening_hours": "08:00",
            "description": "asperiores",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=59.3974480174255",
            "viewCounts": 0,
            "createdAt": "2022-02-04T14:51:58.000Z",
            "updatedAt": "2022-02-04T14:51:58.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-02-04T14:51:58.000Z",
                "updatedAt": "2022-02-04T14:51:58.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 10,
            "name": "Sienna Brekke",
            "tel": "011.573.7015 x188",
            "address": "41018 Trent Common",
            "opening_hours": "08:00",
            "description": "Et magni adipisci pariatur ex reiciendis laudantiu",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=27.161047473531585",
            "viewCounts": 0,
            "createdAt": "2022-02-04T14:51:58.000Z",
            "updatedAt": "2022-02-04T14:51:58.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-02-04T14:51:58.000Z",
                "updatedAt": "2022-02-04T14:51:58.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        }
    ],
    "categories": [
        {
            "id": 1,
            "name": "中式料理",
            "createdAt": "2022-02-04T14:51:58.000Z",
            "updatedAt": "2022-02-04T14:51:58.000Z"
        },
        {
            "id": 2,
            "name": "日本料理",
            "createdAt": "2022-02-04T14:51:58.000Z",
            "updatedAt": "2022-02-04T14:51:58.000Z"
        },
        {
            "id": 3,
            "name": "義大利料理",
            "createdAt": "2022-02-04T14:51:58.000Z",
            "updatedAt": "2022-02-04T14:51:58.000Z"
        },
        {
            "id": 4,
            "name": "墨西哥料理",
            "createdAt": "2022-02-04T14:51:58.000Z",
            "updatedAt": "2022-02-04T14:51:58.000Z"
        },
        {
            "id": 5,
            "name": "素食料理",
            "createdAt": "2022-02-04T14:51:58.000Z",
            "updatedAt": "2022-02-04T14:51:58.000Z"
        },
        {
            "id": 6,
            "name": "美式料理",
            "createdAt": "2022-02-04T14:51:58.000Z",
            "updatedAt": "2022-02-04T14:51:58.000Z"
        },
        {
            "id": 7,
            "name": "複合式料理",
            "createdAt": "2022-02-04T14:51:58.000Z",
            "updatedAt": "2022-02-04T14:51:58.000Z"
        }
    ],
    "categoryId": "",
    "page": 1,
    "totalPage": [
        1,
        2,
        3,
        4,
        5
    ],
    "prev": 1,
    "next": 2
  }
  export default {
    name: "Restaurants",
    components: {
      NavTabs,
      RestaurantCard,
      RestaurantsNavPill,
      RestaurantsPagination
    },
    data(){
      return {
        restaurants:[],
        categories: [],
        categoryId: -1,
        currentPage: 1,
        totalPage: [],
        previousPage: -1,
        nextPage: -1
      }
    },
    methods: {
      fetchRestaurants(){
        const {
          restaurants,
          categories,
          categoryId,
          page,
          totalPage,
          prev,
          next
          } = dummyData
        this.restaurants = restaurants
        this.categories = categories
        this.categoryId = categoryId
        this.currentPage = page
        this.totalPage = totalPage
        this.previousPage = prev
        this.nextPage = next
      }
    },
    created(){
      this.fetchRestaurants()
    }
  }
</script>
