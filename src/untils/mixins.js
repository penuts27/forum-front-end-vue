import moment from "moment"

// fromNow時間方法
export const fromNowFilter = {
    filters:{
        fromNow(datetime){
            if(!datetime) return '-'
            return moment(datetime).fromNow()
        }
    }
}
// 加入刪除最愛按鈕methods
export const FavoriteMethods = {
    methods: {
        addFavorite(){
        this.restaurant = {
            ...this.restaurant,
            isFavorited: true
        }
        },
        deleteFavorite(){
            this.restaurant = {
            ...this.restaurant,
            isFavorited: false
            }
        }
    }
}
// 加入刪除喜歡methods
export const LikeMethods = {
    methods: {
        addLike(){
            this.restaurant = {
            ...this.restaurant,
            isLiked: true
            }
        },
        deleteLike(){
            this.restaurant = {
            ...this.restaurant,
            isLiked: false
            }
        }
    }
}
