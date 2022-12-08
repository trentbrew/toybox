<script setup>
  const state = reactive({
    testData: [
      {
        name: 'Lauren',
        age: 23,
        birthday: '01/04/1999',
      },
      {
        name: 'Trent',
        age: 25,
        birthday: '10/23/1997',
      },
      {
        name: 'Derrck',
        age: 27,
        birthday: '11/22/1995',
      },
      {
        name: 'Candice',
        age: 28,
        birthday: '05/05/1994',
      },
    ],
  })
</script>

<template>
  <main>
    <section>
      <h1>Table.vue</h1>
      <Table :data="state.testData" class="max-w-[50%]" />
    </section>
    <section>
      <h1>Loader.vue</h1>
      <div class="grid grid-cols-4 gap-x-12">
        <Loader type="1" color="white" size="32" />
        <Loader type="2" color="white" size="32" />
        <Loader type="3" color="white" size="32" />
        <Loader type="4" color="white" size="32" />
        <Loader type="5" color="white" size="32" />
        <Loader type="6" color="white" size="32" />
        <Loader type="7" color="white" size="32" />
        <Loader type="8" color="white" size="32" />
      </div>
    </section>
  </main>
</template>

<style scoped>
  h1 {
    @apply w-full text-center mb-24 font-normal;
  }
  section {
    @apply flex flex-col justify-center items-center mb-40;
  }
</style>
