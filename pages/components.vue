<script setup>
  const state = reactive({
    toggleItems: [
      {
        label: 'Option 1',
        value: true,
      },
      {
        label: 'Option 2',
        value: false,
      },
      {
        label: 'Option 3',
        value: false,
      },
    ],
    tableData: [
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

  function handleButtonAction() {
    alert('button clicked 👋🏾')
  }

  function handleToggle(item) {
    console.log(`${item.name} has been set to ${item.value}`)
  }
</script>

<template>
  <main class="w-full flex gap-3">
    <div class="w-full">
      <Showcase title="table">
        <tb-table :data="state.tableData" />
      </Showcase>
      <Showcase title="button">
        <div class="flex justify-center items-center gap-4">
          <tb-button inner-class="btn-primary" label="Button" />
          <tb-button
            inner-class="btn-secondary"
            label="visit a link"
            to="#"
            newtab
          />
          <tb-button
            inner-class="btn-accent"
            label="Run some code"
            icon="code"
            @click="handleButtonAction"
          />
        </div>
      </Showcase>
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
    <div class="w-full">
      <Showcase title="toggle list">
        <tb-toggle-list :items="state.toggleItems" @change="handleToggle" />
      </Showcase>
      <Showcase title="accordion">
        <tb-accordion>
          <tb-accordion-item title="Item 1">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </tb-accordion-item>
          <tb-accordion-item title="Item 2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur.
            </p>
          </tb-accordion-item>
          <tb-accordion-item title="Item 3">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </tb-accordion-item>
        </tb-accordion>
      </Showcase>
    </div>
  </main>
</template>
