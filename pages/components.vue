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
</script>

<template>
  <main class="w-full flex gap-3">
    <div class="w-full">
      <Showcase title="table">
        <tb-table :data="state.tableData" />
      </Showcase>
      <Showcase title="button">
        <div class="flex justify-center items-center gap-4">
          <tb-button label="Button" />
          <tb-button
            inner-class="btn-primary"
            label="Button with icon"
            icon="star"
          />
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
    </div>
    <div class="w-full">
      <Showcase title="loader">
        <div class="w-full max-w-[50%] grid grid-cols-4 gap-y-12">
          <tb-loader type="1" size="32" class="text-accent" />
          <tb-loader type="2" size="32" class="text-accent" />
          <tb-loader type="3" size="32" class="text-accent" />
          <tb-loader type="4" size="32" class="text-accent" />
          <tb-loader type="5" size="32" class="text-accent" />
          <tb-loader type="6" size="32" class="text-accent" />
          <tb-loader type="7" size="32" class="text-accent" />
          <tb-loader type="8" size="32" class="text-accent" />
        </div>
      </Showcase>
      <Showcase title="toggle list">
        <ul class="w-full">
          <li
            v-for="(item, index) in state.toggleItems"
            :key="index"
            class="rounded-full hover:bg-base-300 pl-3 pr-1"
          >
            <tb-toggle
              v-model="state.toggleItems[index].value"
              :label="item.label"
              :checked="item.value"
              inner-class="toggle-accent"
            />
          </li>
        </ul>
      </Showcase>
    </div>
  </main>
</template>
