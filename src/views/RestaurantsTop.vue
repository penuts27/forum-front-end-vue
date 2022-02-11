<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      人氣餐廳
    </h1>

    <hr>
    <RestaurantTopCard 
    v-for="restaurant in restaurants"
    :key="restaurant.id" 
    :restaurant="restaurant"
    @after-toggle-favorite = "afterToggleFavorite"
    />
  </div>
</template>

<script>
  import NavTabs from '../components/NavTabs.vue'
  import RestaurantTopCard from '../components/RestaurantsTopCard.vue'
  
  const dummyData = {
    "restaurants": [
        {
            "id": 50,
            "name": "Ivory Witting",
            "tel": "1-373-296-8393 x9740",
            "address": "177 Roob Plain",
            "opening_hours": "08:00",
            "description": "sapiente facere similique",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=11.025708862329363",
            "viewCounts": 0,
            "createdAt": "2022-02-04T14:51:58.000Z",
            "updatedAt": "2022-02-04T14:51:58.000Z",
            "CategoryId": 2,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 49,
            "name": "Cooper O'Connell",
            "tel": "(008) 716-7960 x07104",
            "address": "4335 Roma Run",
            "opening_hours": "08:00",
            "description": "placeat omnis laborum",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=52.23434477929341",
            "viewCounts": 0,
            "createdAt": "2022-02-04T14:51:58.000Z",
            "updatedAt": "2022-02-04T14:51:58.000Z",
            "CategoryId": 5,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 48,
            "name": "Brionna Tremblay",
            "tel": "(730) 677-1366 x14210",
            "address": "442 Hagenes Knolls",
            "opening_hours": "08:00",
            "description": "Eos temporibus aliquid. Quisquam quod quasi sit la",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=64.86550000115004",
            "viewCounts": 0,
            "createdAt": "2022-02-04T14:51:58.000Z",
            "updatedAt": "2022-02-04T14:51:58.000Z",
            "CategoryId": 2,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 47,
            "name": "Hardy Emard",
            "tel": "251.283.3042 x2738",
            "address": "0040 Liliane Corner",
            "opening_hours": "08:00",
            "description": "molestiae dolorum vel",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=56.21361217311054",
            "viewCounts": 0,
            "createdAt": "2022-02-04T14:51:58.000Z",
            "updatedAt": "2022-02-04T14:51:58.000Z",
            "CategoryId": 4,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 46,
            "name": "Reed Dicki",
            "tel": "072-712-4380 x8165",
            "address": "283 Wilkinson Rapids",
            "opening_hours": "08:00",
            "description": "eaque",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=22.715663120676677",
            "viewCounts": 0,
            "createdAt": "2022-02-04T14:51:58.000Z",
            "updatedAt": "2022-02-04T14:51:58.000Z",
            "CategoryId": 1,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 45,
            "name": "Otis Quigley Sr.",
            "tel": "(893) 463-9426",
            "address": "827 Dooley Highway",
            "opening_hours": "08:00",
            "description": "Nostrum qui aut et odit. Quas ducimus vero sit sed",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=27.991108348709524",
            "viewCounts": 0,
            "createdAt": "2022-02-04T14:51:58.000Z",
            "updatedAt": "2022-02-04T14:51:58.000Z",
            "CategoryId": 3,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 44,
            "name": "Brenden Senger",
            "tel": "(272) 473-6887",
            "address": "844 Schroeder Pike",
            "opening_hours": "08:00",
            "description": "Quaerat exercitationem quae.\nQuisquam doloremque i",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=83.30039816315946",
            "viewCounts": 0,
            "createdAt": "2022-02-04T14:51:58.000Z",
            "updatedAt": "2022-02-04T14:51:58.000Z",
            "CategoryId": 4,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 43,
            "name": "Alford Connelly DVM",
            "tel": "464-921-1829 x314",
            "address": "9162 Hessel Club",
            "opening_hours": "08:00",
            "description": "Aut aliquid quod qui maxime commodi in mollitia.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=87.699093375068",
            "viewCounts": 0,
            "createdAt": "2022-02-04T14:51:58.000Z",
            "updatedAt": "2022-02-04T14:51:58.000Z",
            "CategoryId": 5,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 42,
            "name": "Rashad Bradtke",
            "tel": "(610) 942-7205",
            "address": "63500 Deonte Hill",
            "opening_hours": "08:00",
            "description": "Ipsum quia voluptas.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=0.0046159121708244655",
            "viewCounts": 0,
            "createdAt": "2022-02-04T14:51:58.000Z",
            "updatedAt": "2022-02-04T14:51:58.000Z",
            "CategoryId": 4,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 41,
            "name": "Winfield Baumbach",
            "tel": "1-848-345-7242 x8424",
            "address": "0167 Boyer Isle",
            "opening_hours": "08:00",
            "description": "Suscipit repellendus excepturi molestiae excepturi",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=97.90939365063184",
            "viewCounts": 0,
            "createdAt": "2022-02-04T14:51:58.000Z",
            "updatedAt": "2022-02-04T14:51:58.000Z",
            "CategoryId": 5,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        }
    ]
  }
  export default {
    name:"RestaurantsTop",
    components: {
      NavTabs,
      RestaurantTopCard
    },
    data(){
      return {
        restaurants: []
      }
    },
    methods: {
      getchRestaurants(){
        this.restaurants = dummyData.restaurants
      },
      afterToggleFavorite(id){
        this.restaurants = this.restaurants.map(restaurant => {
          if(restaurant.id === id){
            return {
              ...restaurant,
              isFavorited: !restaurant.isFavorited,
              FavoriteCount: restaurant.isFavorited ? restaurant.FavoriteCount - 1 : restaurant.FavoriteCount +1
            }
          }
          return restaurant
        })
      }
    },
    created(){
      this.getchRestaurants()
    }
  }
</script>
