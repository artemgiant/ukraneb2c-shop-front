<template>
  <div class="col-md-4 col-xs-6">
    <div class="product">
      <div class="product-img">
        <img :src="this.$storageUrl+'/'+product.image_main.name" alt="">
      </div>
      <div class="product-body">
        <p class="product-category">Category</p>
        <h3 class="product-name"><a href="#">{{product.name}}</a></h3>
        <h4 class="product-price">{{product.price}} грн
          <!--          <del class="product-old-price">$990.00</del>-->
        </h4>
        <div class="product-rating">
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
        </div>
        <div class="product-btns">
          <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span class="tooltipp">add to wishlist</span></button>
<!--          <button class="add-to-compare"><i class="fa fa-exchange"></i><span class="tooltipp">add to compare</span></button>-->
<!--          <button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">quick view</span></button>-->
          <router-link class="quick-view" target='_blank' :to="{ name: 'Product',params:{id:product.id}}">
            <i class="fa fa-eye"></i>
          </router-link>
        </div>
      </div>
      <div class="add-to-cart">
        <button class="add-to-cart-btn" v-on:click="add(product)"><i class="fa fa-shopping-cart"></i> add to cart</button>
      </div>
    </div>
  </div>
</template>

<script >

export default {
  name: "Card",
  props:{
    product: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  emits:[
    'basket-add-product'
  ],
  methods: {
    add(){
      console.log(this.product)
      this.$emit('basket-add-product',this.product)
    }
  }
}
</script>

<style scoped>

</style>
