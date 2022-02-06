<template>
  <div class="container py-5">
    <NavTabs />

    <h1 class="mt-5">
      最新動態
    </h1>
    <hr>
    <div class="row">
      <div class="col-md-6">
        <!-- 最新餐廳 NewRestaurants-->
        <h3>最新餐廳</h3>
        <NewRestaurants :restaurants="restaurants"/>
      </div>
      <div class="col-md-6">
        <!-- 最新評論 NewestComments-->
        <h3>最新評論</h3>
        <NewestComments :comments="comments"/>
      </div>
    </div>
  </div>
</template>
<script>
import NewRestaurants from '../components/NewRestaurants.vue'
import NewestComments from '../components/NewestComments.vue'
import NavTabs from '../components/NavTabs.vue'

const dummyData = {
    "restaurants": [
        {
            "id": 1,
            "name": "Noelia Sawayn",
            "tel": "513-780-6849 x037",
            "address": "18669 Jarret Glen",
            "opening_hours": "08:00",
            "description": "Inventore dignissimos amet quis accusamus illo.\nAliquam ut eos est et magnam numquam id deserunt beatae.",
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
            }
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
            }
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
            }
        },
        {
            "id": 4,
            "name": "Dorris Schmeler",
            "tel": "(011) 386-1907 x97992",
            "address": "81169 Fatima Meadow",
            "opening_hours": "08:00",
            "description": "Non dolor et distinctio omnis voluptas quia reiciendis quam blanditiis. Et eaque quo ut. Laudantium quibusdam officia.\n \rQui ipsum laboriosam at. Aut rem molestiae eaque possimus laboriosam possimus autem ex. Explicabo ipsum nulla eos voluptatem dolores ut libero.\n \rA doloribus provident omnis ipsum magni molestiae nostrum. Ea voluptatum et enim dolorem voluptatum quaerat. Eaque odit aut error.",
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
            }
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
            }
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
            }
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
            }
        },
        {
            "id": 8,
            "name": "Lillian Von",
            "tel": "165-441-0203 x814",
            "address": "028 Quitzon Coves",
            "opening_hours": "08:00",
            "description": "Quidem fugiat officia aut aut. Eveniet asperiores et repellendus. Aut corrupti quidem omnis non corporis est qui id at. Error qui rerum exercitationem culpa culpa eum ut. Et quia voluptatem.\n \rAb enim fugiat sapiente ut sunt rerum rem praesentium. Provident recusandae quisquam. Voluptatem debitis eligendi quod. Animi nostrum sapiente quia vitae eligendi ipsum dicta nihil nam. Recusandae perferendis aut natus. Deserunt veritatis sit possimus minus.\n \rQuas earum assumenda. Deserunt quas vero qui fugit velit dolores et voluptas expedita. Praesentium repellendus sint fugit. Fuga quisquam possimus nesciunt sapiente aut dolorem dolores adipisci. Omnis qui sint eveniet beatae.",
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
            }
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
            }
        },
        {
            "id": 10,
            "name": "Sienna Brekke",
            "tel": "011.573.7015 x188",
            "address": "41018 Trent Common",
            "opening_hours": "08:00",
            "description": "Et magni adipisci pariatur ex reiciendis laudantium non omnis.",
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
            }
        }
    ],
    "comments": [
        {
            "id": 4,
            "text": "Inventore dignissimos dignissimos doloremque atque ipsa.",
            "UserId": 1,
            "RestaurantId": 4,
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
            },
            "Restaurant": {
                "id": 4,
                "name": "Dorris Schmeler",
                "tel": "(011) 386-1907 x97992",
                "address": "81169 Fatima Meadow",
                "opening_hours": "08:00",
                "description": "Non dolor et distinctio omnis voluptas quia reiciendis quam blanditiis. Et eaque quo ut. Laudantium quibusdam officia.\n \rQui ipsum laboriosam at. Aut rem molestiae eaque possimus laboriosam possimus autem ex. Explicabo ipsum nulla eos voluptatem dolores ut libero.\n \rA doloribus provident omnis ipsum magni molestiae nostrum. Ea voluptatum et enim dolorem voluptatum quaerat. Eaque odit aut error.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=42.318804498685566",
                "viewCounts": 0,
                "createdAt": "2022-02-04T14:51:58.000Z",
                "updatedAt": "2022-02-04T14:51:58.000Z",
                "CategoryId": 4
            }
        },
        {
            "id": 30,
            "text": "Ut eum temporibus provident odit dolorem at.",
            "UserId": 1,
            "RestaurantId": 30,
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
            },
            "Restaurant": {
                "id": 30,
                "name": "Ned Gulgowski",
                "tel": "460.680.6937",
                "address": "00496 Eichmann Meadow",
                "opening_hours": "08:00",
                "description": "Quisquam aspernatur reprehenderit qui nemo sunt fugiat et. Eveniet nulla impedit atque. Expedita ut ut dignissimos. Voluptates sint dignissimos nesciunt.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=18.919158848046138",
                "viewCounts": 0,
                "createdAt": "2022-02-04T14:51:58.000Z",
                "updatedAt": "2022-02-04T14:51:58.000Z",
                "CategoryId": 5
            }
        },
        {
            "id": 65,
            "text": "Incidunt non sed in quis placeat eligendi.",
            "UserId": 1,
            "RestaurantId": 15,
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
            },
            "Restaurant": {
                "id": 15,
                "name": "Edward Nolan",
                "tel": "234-217-5883 x74510",
                "address": "95105 Harris Lock",
                "opening_hours": "08:00",
                "description": "Dicta necessitatibus exercitationem dolores ut quos consequatur error. Impedit quod cumque. At nemo et.\n \rSoluta molestias id voluptatem omnis sed. Vero reiciendis aliquid. Dolorem molestiae ut omnis distinctio reprehenderit. Alias ea incidunt.\n \rExpedita et et. Fugit et similique impedit numquam. Nam molestias corrupti ducimus ipsum quia et aspernatur. Autem soluta eveniet. Et accusantium quisquam nemo nesciunt.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=6.989458677844995",
                "viewCounts": 0,
                "createdAt": "2022-02-04T14:51:58.000Z",
                "updatedAt": "2022-02-04T14:51:58.000Z",
                "CategoryId": 1
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
            },
            "Restaurant": {
                "id": 1,
                "name": "Noelia Sawayn",
                "tel": "513-780-6849 x037",
                "address": "18669 Jarret Glen",
                "opening_hours": "08:00",
                "description": "Inventore dignissimos amet quis accusamus illo.\nAliquam ut eos est et magnam numquam id deserunt beatae.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=57.70362088789393",
                "viewCounts": 0,
                "createdAt": "2022-02-04T14:51:58.000Z",
                "updatedAt": "2022-02-04T14:51:58.000Z",
                "CategoryId": 2
            }
        },
        {
            "id": 134,
            "text": "Aperiam maiores eaque alias nesciunt cum ipsam ea.",
            "UserId": 1,
            "RestaurantId": 34,
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
            },
            "Restaurant": {
                "id": 34,
                "name": "Randal Bahringer III",
                "tel": "1-572-422-9370 x2886",
                "address": "383 Adan Land",
                "opening_hours": "08:00",
                "description": "Consectetur culpa molestias dolore odio voluptatem aut. Aut voluptatem est odio illo iste. Fugit cumque velit cupiditate et voluptates nostrum nihil odit. Aut sed sapiente eum iure eius doloribus quasi. Enim alias at eius laudantium dolore impedit in nobis quibusdam. Porro deleniti nihil consectetur id reiciendis maxime consectetur corrupti sed.\n \rAutem explicabo consectetur molestiae. In fuga qui rerum ut velit eligendi iusto quo quia. Est cumque amet ducimus ut et maiores accusamus velit id. Minus placeat sint ut sed ad. Quos commodi aut eaque fugit. Et fugiat ut quia nihil voluptatum a odio id magnam.\n \rQui ea facere est maxime sunt cum. Earum quis nihil est earum quam. Velit maiores sed ea qui blanditiis. Dolorem eaque quasi voluptatem dolores qui facilis. Reprehenderit corrupti ducimus nemo impedit fuga cum. Commodi quibusdam nulla numquam dicta voluptas excepturi necessitatibus qui.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=36.554568984158564",
                "viewCounts": 0,
                "createdAt": "2022-02-04T14:51:58.000Z",
                "updatedAt": "2022-02-04T14:51:58.000Z",
                "CategoryId": 4
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
            },
            "Restaurant": {
                "id": 1,
                "name": "Noelia Sawayn",
                "tel": "513-780-6849 x037",
                "address": "18669 Jarret Glen",
                "opening_hours": "08:00",
                "description": "Inventore dignissimos amet quis accusamus illo.\nAliquam ut eos est et magnam numquam id deserunt beatae.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=57.70362088789393",
                "viewCounts": 0,
                "createdAt": "2022-02-04T14:51:58.000Z",
                "updatedAt": "2022-02-04T14:51:58.000Z",
                "CategoryId": 2
            }
        },
        {
            "id": 32,
            "text": "Aut voluptatum rerum a quam nobis soluta nihil.",
            "UserId": 2,
            "RestaurantId": 32,
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
            },
            "Restaurant": {
                "id": 32,
                "name": "Jedidiah Romaguera",
                "tel": "047-354-5406",
                "address": "7519 Rowe Freeway",
                "opening_hours": "08:00",
                "description": "Modi dicta velit omnis ipsum laborum pariatur dolores. Autem sequi sunt quidem illum illo laudantium qui unde atque. Iusto et in deserunt magni.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=60.81986225577738",
                "viewCounts": 0,
                "createdAt": "2022-02-04T14:51:58.000Z",
                "updatedAt": "2022-02-04T14:51:58.000Z",
                "CategoryId": 1
            }
        },
        {
            "id": 45,
            "text": "Saepe qui et eligendi nihil voluptas eum est.",
            "UserId": 2,
            "RestaurantId": 45,
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
            },
            "Restaurant": {
                "id": 45,
                "name": "Otis Quigley Sr.",
                "tel": "(893) 463-9426",
                "address": "827 Dooley Highway",
                "opening_hours": "08:00",
                "description": "Nostrum qui aut et odit. Quas ducimus vero sit sed velit enim. Aut similique asperiores est culpa.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=27.991108348709524",
                "viewCounts": 0,
                "createdAt": "2022-02-04T14:51:58.000Z",
                "updatedAt": "2022-02-04T14:51:58.000Z",
                "CategoryId": 3
            }
        },
        {
            "id": 72,
            "text": "Labore magnam quos qui magnam optio earum cumque voluptate porro.",
            "UserId": 2,
            "RestaurantId": 22,
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
            },
            "Restaurant": {
                "id": 22,
                "name": "Ryan Erdman",
                "tel": "(658) 068-0055",
                "address": "843 Roslyn Pine",
                "opening_hours": "08:00",
                "description": "cum quia similique",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=9.61984782300056",
                "viewCounts": 0,
                "createdAt": "2022-02-04T14:51:58.000Z",
                "updatedAt": "2022-02-04T14:51:58.000Z",
                "CategoryId": 1
            }
        },
        {
            "id": 87,
            "text": "Dolorem expedita dolorem iure ut quidem.",
            "UserId": 2,
            "RestaurantId": 37,
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
            },
            "Restaurant": {
                "id": 37,
                "name": "Cary Krajcik",
                "tel": "1-159-786-5529",
                "address": "7341 Marvin Ridges",
                "opening_hours": "08:00",
                "description": "reprehenderit",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=80.80735029849617",
                "viewCounts": 0,
                "createdAt": "2022-02-04T14:51:58.000Z",
                "updatedAt": "2022-02-04T14:51:58.000Z",
                "CategoryId": 1
            }
        }
    ]
}

export default {
    name: 'RestaurantsFeeds',
    components: {
        NavTabs,
        NewRestaurants,
        NewestComments
    },
    data(){
      return {
        restaurants: [],
        comments: []
      }
    },
    methods: {
      fetchFeeds(){
        this.restaurants = dummyData.restaurants
        this.comments = dummyData.comments.filter(comment => comment.Restaurant && comment.text)
      }
    },
    created() {
      this.fetchFeeds()
    }
}
</script>
