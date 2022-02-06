<template>
  <ul class="nav nav-tabs mb-4">
    <li class="nav-item" v-for="tab in tabs" :key="tab.id">
      <router-link
        :to="tab.path"
        class="nav-link"
      >
        {{ tab.name }}
      </router-link>
    </li>
  </ul>
</template>

<script>
    export default {
        data(){
            return {
                tabs: [
                    {
                        id: '1',
                        name: '首頁',
                        path: '/restaurants',
                    },
                    {
                        id: '2',
                        name: '最新動態',
                        path: '/restaurants/feeds',
                    },
                    {
                        id: '3',
                        name: 'TOP 10 人氣餐廳',
                        path: '/restaurants/top',
                    },
                    {
                        id: '4',
                        name: '美食達人',
                        path: '/users/top',
                    }
                ]
            }
        }
    }
</script>
