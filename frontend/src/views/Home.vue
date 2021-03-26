<template>
  <section class="home">
    <h1>Products</h1>
    <ul id="example-1">
      <li v-for="product in products" :key="product.id">
      <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
      </li>
    </ul>
  </section>
</template>

<script>
// @ is an alias to /src
import { mapState, mapActions } from "vuex";

export default {
  name: "Home",
  methods: {
    ...mapActions(["getProducts"]),
  },
  computed: {
    ...mapState(["products"]),
  },
  created() {
    this.getProducts();
  },
};
</script>
