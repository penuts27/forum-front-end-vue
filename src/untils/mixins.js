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

// 處理沒有圖片的情形
export const emptyImageFilter = {
    filters:{
        emptyImage(src){
            return src || 'https://via.placeholder.com/350x220/DFDFDF?text=No+Image'
        }
    }
}
