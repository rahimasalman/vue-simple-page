app.component('review-form', {
    template:
        /*html*/
        `<form class="review-form" @submit.prevent="onSubmit">
    <h3>Leave a review</h3>
    <label for="name">Name:</label>
    <input id="name" v-model="name">
    <span style="color:red;font-size:12px">{{naming}}</span> <br>
    <label for="review">Review:</label>      
    <textarea id="review" v-model="review"></textarea>
    <span style="color:red;font-size:12px">{{datatest}}</span> <br>
    <label for="rating">Rating:</label>
    <select id="rating" v-model.number="rating">
      <option>5</option>
      <option>4</option>
      <option>3</option>
      <option>2</option>
      <option>1</option>
    </select> <br>
     <span style="color:red;font-size:12px">{{rdata}}</span> <br>
    <label for="recommend">Would you recommend this product?</label>
    <select id="recommend" v-model="recommend">
      <option>Yes</option>
      <option>No</option>
    </select>  
    <input class="button" type="submit" value="Submit">  
    
  </form>`,
    data() {
        return {
            name: '',
            review: '',
            rating: null,
            recommend: null,
            datatest: null,
            naming: null,
            rdata: null
        }
    },
    methods: {
        onSubmit() {
            if (this.review === '') {
                this.datatest = ('Review is incomplete. Please fill out every field.')
                return this.datatest;
            }
            else if (this.name === '') {
                this.naming = ('Name cannot be empty. Please fill out every field.')
                return this.naming;
            }
            else if (this.rating === null || this.recommend === null) {
                this.rdata = ('Please fill out every field.')
                return this.rdata;
            }
            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating,
                recommend: this.recommend // solution
            }
            this.$emit('review-submitted', productReview)
            this.name = ''
            this.review = ''
            this.rating = null
            this.recommend = null // solution

        }
    }
})