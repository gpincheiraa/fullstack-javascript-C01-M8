<template>
  <h1>La Birra</h1>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods:{
    getBeer(){
      console.log('One beer please');
    }
  }
}

</script>

<style>

</style>