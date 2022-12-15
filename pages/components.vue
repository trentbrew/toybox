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
        name: 'Derrick',
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
  <main class="w-full flex gap-3">
    <div class="w-full">
      <Showcase title="table">
        <tb-table :data="state.testData" />
      </Showcase>
      <Showcase title="button">
        <div class="flex justify-center items-center gap-4">
          <tb-button text="OK" />
          <tb-button
            text="Vist a link"
            to="https://github.com/trentbrew/toybox"
            newtab
            inner-class="btn-secondary"
          />
          <tb-button
            text="Run some code"
            icon="code"
            @click="
              () => {
                alert('handling button click')
              }
            "
            inner-class="btn-accent"
          />
          <tb-button
            text="Handle warning"
            icon="warning"
            inner-class="btn-warning"
          />
          <tb-button
            text="Handle Error"
            icon="refresh"
            inner-class="btn-error"
          />
        </div>
      </Showcase>
    </div>
    <div class="w-full">
      <Showcase title="loader">
        <div class="w-full max-w-[50%] grid grid-cols-4 gap-y-12">
          <tb-loader type="1" size="32" class="text-primary" />
          <tb-loader type="2" size="32" class="text-primary" />
          <tb-loader type="3" size="32" class="text-primary" />
          <tb-loader type="4" size="32" class="text-primary" />
          <tb-loader type="5" size="32" class="text-primary" />
          <tb-loader type="6" size="32" class="text-primary" />
          <tb-loader type="7" size="32" class="text-primary" />
          <tb-loader type="8" size="32" class="text-primary" />
        </div>
      </Showcase>
    </div>
  </main>
</template>
