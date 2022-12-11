<script setup>
  const state = reactive({
    testData: [
      {
        name: 'Lauren',
        birthday: '01/04/1999',
        age: 23,
      },
      {
        name: 'Trenton',
        birthday: '10/23/1997',
        age: 25,
      },
      {
        name: 'Derrck',
        birthday: '11/22/1995',
        age: 27,
      },
      {
        name: 'Candice',
        birthday: '05/05/1994',
        age: 28,
      },
    ],
  })
</script>

<template>
  <main class="w-full grid grid-cols-3 gap-4">
    <div id="left">
      <section>
        <h3>Table.vue</h3>
        <BlockTable :data="state.testData" class="w-full" />
      </section>
    </div>
    <div id="right">
      <section>
        <h3>Loader.vue</h3>
        <div class="grid grid-cols-4 gap-x-12">
          <Loader type="1" size="24" class="text-primary" />
          <Loader type="2" size="24" class="text-primary" />
          <Loader type="3" size="24" class="text-primary" />
          <Loader type="4" size="24" class="text-primary" />
          <Loader type="5" size="24" class="text-primary" />
          <Loader type="6" size="24" class="text-primary" />
          <Loader type="7" size="24" class="text-primary" />
          <Loader type="8" size="24" class="text-primary" />
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>
  h3 {
    @apply w-full text-center mb-12 font-normal;
  }
  section {
    @apply flex flex-col justify-center mb-12 items-center bg-base-100 p-12 rounded-box;
  }
</style>
