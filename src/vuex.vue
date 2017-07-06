<template>
  <div>
	<ul>
	  <li v-for="item in shop">
		  <p>{{ item.title }}</p>
		  <p>购买 数量<button @click="addCart(item)">购买</button></p>
      <p><button @click="addCart(item)">+</button><button @click="minusCart(item)">-</button></p>
	  </li>
	</ul>
  <chat :cart="cart"></chat>
  </div>
</template>
<script>
  import {} from 'vuex'
  import chat from './chat.vue'
  export default {
    data () {
      return {
        shop: [
          {title: '冰箱', price: 1500},
          {title: '洗衣机', price: 2500},
          {title: '空调', price: 2000}
        ]
      }
    },
    computed: {
      cart () {
        let a = []
        this.shop.forEach((val) => {
          if (val.num > 0) {
            a.push(val)
          }
        })
        return a
      }
    },
    methods: {
      addCart (item) {
        if (typeof item.num === 'undefined') {
          this.$set(item, 'num', 0)
        }
        item.num++
        // this.cart = item
      },
      minusCart (item) {
        item.num--
      }
    },
    components: {
      chat
    }
  }
</script>
