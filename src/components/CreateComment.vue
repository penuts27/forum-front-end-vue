<template>
  <form @submit.stop.prevent="handleSubmit">
    <div class="form-group mb-4">
      <label for="text">留下評論：</label>
      <textarea
        class="form-control"
        rows="3"
        name="text"
        v-model="text"
      />
    </div>
    <div class="d-flex align-items-center justify-content-between">
      <button
        type="button"
        class="btn btn-link"
        @click="$router.back()"
      >回上一頁</button>
      <button
        type="submit"
        class="btn btn-primary mr-0"
      >
        Submit
      </button>
    </div>
  </form>
</template>
<script>
import uuid from 'uuid'


export default {
    props:{
        restaurantId:{
            type: Number,
            required: true
        }
    },
    data(){
        return {
            text: ""
        }
    },
    methods:{
        handleSubmit(){
            // console.log('text',this.text,'restId',this.restaurantId)
            this.$emit('after-create-comment',{
                id: uuid(),
                text: this.text,
                RestaurantId: this.restaurantId
            })
            this.text=""
        }
    }
}
</script>