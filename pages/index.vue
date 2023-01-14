<script setup>
  const global = useGlobalStore()

  const route = useRoute()

  const state = reactive({
    search: '',
    code: {
      table: `
        // table.vue

        \<script setup>
          const props = defineProps({
            data: {
              type: [Object, Array],
              default: [],
            },
          })

          const keys = computed(() => {
            return props.data.reduce((acc, item) => {
              return Object.keys(item).reduce((acc, key) => {
                if (!acc.includes(key)) acc.push(key)
                return acc
              }, acc)
            }, [])
          })

          const data = computed(() =>
            props.data.map(item => keys.value.map(key => item[key]))
          )
        <\/script>

        <template>
          <div class="w-full overflow-x-auto z-[0]">
            <table class="table w-full">
              <thead>
                <tr>
                  <th class="text-base-content/30">#</th>
                  <th v-for="(key, keyIndex) in keys" :key="keyIndex">{{ key }}</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(item, itemIndex) in data"
                  :key="itemIndex"
                  class="hover cursor-pointer !duration-150"
                >
                  <th class="font-normal text-base-content/30">{{ itemIndex }}</th>
                  <td
                    v-for="(datum, datumIndex) in Object.entries(item)"
                    :key="datumIndex"
                  >
                    {{ datum[1] }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </template>
      `,
      toggle: `
        // toggle.vue

        \<script setup>
          const emit = defineEmits(['update:modelValue'])

          const props = defineProps({
            modelValue: {
              type: Boolean,
              default: true,
            },
            innerClass: {
              type: String,
              default: '',
            },
            label: {
              type: String,
              default: null,
            },
            type: {
              type: String,
              default: 'success',
            },
            checked: {
              type: Boolean,
              default: false,
            },
          })

          function handleToggle(e) {
            emit('update:modelValue', e.target.checked)
          }
        <\/script>

        <template>
          <div class="form-control w-full group">
            <label class="cursor-pointer label p-0 w-full">
              <span
                v-if="props.label"
                class="label-text text-base group-hover:text-primary"
                >{{ props.label }}</span
              >
              <input
                type="checkbox"
                class="toggle"
                :class="props.innerClass"
                @change="handleToggle"
                :checked="props.modelValue"
              />
            </label>
          </div>
        </template>
      `,
      toggleList: `
        // toggle-list.vue

        \<script setup>
          const emit = defineEmits(['change'])

          const props = defineProps({
            items: {
              type: Array,
              default: [],
            },
          })
        <\/script>

        <template>
          <ul class="w-full">
            <li
              v-for="(item, index) in props.items"
              :key="index"
              class="rounded p-4"
              :class="index != 0 && 'border-t border-base-200'"
            >
              <Toggle
                @change="$emit('change', { name: item.name, value: $event })"
                :label="item.label"
                :checked="item.value"
                inner-class="toggle-primary"
              />
            </li>
          </ul>
        </template>
      `,
      accordion: `
        // accordion.vue

        <template>
          <ul
            class="list-none"
            role="menu"
            aria-label="Accordion Control Group Buttons"
          >
            <slot />
          </ul>
        </template>
      `,
      accordionItem: `
        // accordion-item.vue

        \<script setup>
          defineEmits(['click'])

          const props = defineProps({
            expanded: {
              type: Boolean,
              default: false,
            },
            title: {
              type: String,
              default: '',
            },
            index: {
              type: Number,
              default: null,
            },
          })

          const slot = ref(null)

          const state = reactive({
            contentHeight: 0,
            expanded: false,
          })

          const itemId = computed(
            () => \`hidden-content-\${props.title.toLowerCase().replace(' ', '-')}\`
          )

          onMounted(() => {
            state.contentHeight = slot.value.clientHeight
            state.expanded = props.expanded
          })

          function toggle() {
            state.expanded = !state.expanded
          }
        <\/script>

        <template>
          <li
            :id="itemId"
            role="menuitem"
            :aria-expanded="props.expanded"
            class="group flex flex-col"
          >
            <button
              @click="toggle"
              :aria-controls="itemId"
              class="text-left rounded p-4"
            >
              <div
                class="flex w-full items-center justify-between"
                :class="state.expanded ? 'text-primary' : 'group-hover:text-primary'"
              >
                <span>{{ props.title }}</span>
                <Icon
                  class="duration-300"
                  :class="state.expanded && 'rotate-180'"
                  name="dropdown"
                />
              </div>
            </button>

            <div
              class="duration-300 overflow-hidden"
              :style="
                state.expanded
                  ? \`height: \${state.contentHeight}px;\`
                  : 'height: 0px; opacity: 0; pointer-events: none;'
              "
            >
              <div ref="slot" class="px-4 pb-6 pt-0">
                <slot />
              </div>
            </div>
          </li>
        </template>

        <style scoped>
          li:nth-child(1) {
            @apply !border-none;
          }
          li {
            @apply border-t border-base-200;
          }
        </style>
      `,
      button: `
        // button.vue

        \<script setup>
          const props = defineProps({
            innerClass: {
              type: String,
              default: '',
            },
            type: {
              type: String,
              default: 'neutral',
            },
            size: {
              type: String,
              default: 'md',
            },
            to: {
              type: String,
              default: '',
            },
            newtab: {
              type: Boolean,
              default: false,
            },
            label: {
              type: String,
              default: '',
            },
            icon: {
              type: String,
              default: null,
            },
          })

          const btnColor = computed(() => (props.type ? \` btn-\${props.type}\` : ''))
        <\/script>

        <template>
          <NuxtLink
            :to="props.to || props.href"
            :target="props.newtab ? '_blank' : '_self'"
          >
            <button
              :class="props.innerClass + btnColor"
              class="btn flex gap-3 min-w-max"
            >
              <span>{{ props.label }}</span>
              <Icon
                class="text-inherit"
                v-if="props.icon || props.newtab"
                :name="props.icon ? props.icon : props.newtab ? 'open' : 'star_active'"
                size="18"
              />
            </button>
          </NuxtLink>
        </template>
      `,
      loader: `
        // loader.vue

        \<script setup>
          const props = defineProps({
            type: {
              type: [String, Number],
              default: 2,
            },
            size: {
              type: [String, Number],
              default: 24,
            },
          })

          const size = computed(() => {
            const s = props.size
            if (props.type == 4) return \`\${s >= 24 ? s - 10 : s}px\`
            return \`\${s}px\`
          })
        <\/script>

        <template>
          <div class="flex justify-center items-center">
            <div v-if="type == 1" class="loader loader--style1" title="0">
              <svg
                version="1.1"
                id="loader-1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="40px"
                height="40px"
                viewBox="0 0 40 40"
                enable-background="new 0 0 40 40"
                xml:space="preserve"
              >
                <path
                  opacity="0.2"
                  fill="currentColor"
                  d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
              s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
              c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"
                />
                <path
                  fill="currentColor"
                  d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
              C22.32,8.481,24.301,9.057,26.013,10.047z"
                >
                  <animateTransform
                    attributeType="xml"
                    attributeName="transform"
                    type="rotate"
                    from="0 20 20"
                    to="360 20 20"
                    dur="0.5s"
                    repeatCount="indefinite"
                  />
                </path>
              </svg>
            </div>
            <div v-if="type == 2" class="loader loader--style2" title="1">
              <svg
                version="1.1"
                id="loader-1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="40px"
                height="40px"
                viewBox="0 0 50 50"
                style="enable-background: new 0 0 50 50"
                xml:space="preserve"
              >
                <path
                  fill="currentColor"
                  d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z"
                >
                  <animateTransform
                    attributeType="xml"
                    attributeName="transform"
                    type="rotate"
                    from="0 25 25"
                    to="360 25 25"
                    dur="0.6s"
                    repeatCount="indefinite"
                  />
                </path>
              </svg>
            </div>
            <div v-if="type == 3" class="loader loader--style3" title="2">
              <svg
                version="1.1"
                id="loader-1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="40px"
                height="40px"
                viewBox="0 0 50 50"
                style="enable-background: new 0 0 50 50"
                xml:space="preserve"
              >
                <path
                  fill="currentColor"
                  d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"
                >
                  <animateTransform
                    attributeType="xml"
                    attributeName="transform"
                    type="rotate"
                    from="0 25 25"
                    to="360 25 25"
                    dur="0.6s"
                    repeatCount="indefinite"
                  />
                </path>
              </svg>
            </div>
            <div v-if="type == 4" class="loader loader--style4" title="3">
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                style="enable-background: new 0 0 50 50"
                xml:space="preserve"
              >
                <rect x="0" y="0" width="4" height="7" fill="currentColor">
                  <animateTransform
                    attributeType="xml"
                    attributeName="transform"
                    type="scale"
                    values="1,1; 1,3; 1,1"
                    begin="0s"
                    dur="0.6s"
                    repeatCount="indefinite"
                  />
                </rect>
                <rect x="10" y="0" width="4" height="7" fill="currentColor">
                  <animateTransform
                    attributeType="xml"
                    attributeName="transform"
                    type="scale"
                    values="1,1; 1,3; 1,1"
                    begin="0.2s"
                    dur="0.6s"
                    repeatCount="indefinite"
                  />
                </rect>
                <rect x="20" y="0" width="4" height="7" fill="currentColor">
                  <animateTransform
                    attributeType="xml"
                    attributeName="transform"
                    type="scale"
                    values="1,1; 1,3; 1,1"
                    begin="0.4s"
                    dur="0.6s"
                    repeatCount="indefinite"
                  />
                </rect>
              </svg>
            </div>
            <div v-if="type == 5" class="loader loader--style5" title="4">
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="24px"
                height="30px"
                viewBox="0 0 24 30"
                style="enable-background: new 0 0 50 50"
                xml:space="preserve"
              >
                <rect x="0" y="0" width="4" height="10" fill="currentColor">
                  <animateTransform
                    attributeType="xml"
                    attributeName="transform"
                    type="translate"
                    values="0 0; 0 20; 0 0"
                    begin="0"
                    dur="0.6s"
                    repeatCount="indefinite"
                  />
                </rect>
                <rect x="10" y="0" width="4" height="10" fill="currentColor">
                  <animateTransform
                    attributeType="xml"
                    attributeName="transform"
                    type="translate"
                    values="0 0; 0 20; 0 0"
                    begin="0.2s"
                    dur="0.6s"
                    repeatCount="indefinite"
                  />
                </rect>
                <rect x="20" y="0" width="4" height="10" fill="currentColor">
                  <animateTransform
                    attributeType="xml"
                    attributeName="transform"
                    type="translate"
                    values="0 0; 0 20; 0 0"
                    begin="0.4s"
                    dur="0.6s"
                    repeatCount="indefinite"
                  />
                </rect>
              </svg>
            </div>
            <div v-if="type == 6" class="loader loader--style6" title="5">
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="24px"
                height="30px"
                viewBox="0 0 24 30"
                style="enable-background: new 0 0 50 50"
                xml:space="preserve"
              >
                <rect x="0" y="13" width="4" height="5" fill="currentColor">
                  <animate
                    attributeName="height"
                    attributeType="XML"
                    values="5;21;5"
                    begin="0s"
                    dur="0.6s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="y"
                    attributeType="XML"
                    values="13; 5; 13"
                    begin="0s"
                    dur="0.6s"
                    repeatCount="indefinite"
                  />
                </rect>
                <rect x="10" y="13" width="4" height="5" fill="currentColor">
                  <animate
                    attributeName="height"
                    attributeType="XML"
                    values="5;21;5"
                    begin="0.15s"
                    dur="0.6s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="y"
                    attributeType="XML"
                    values="13; 5; 13"
                    begin="0.15s"
                    dur="0.6s"
                    repeatCount="indefinite"
                  />
                </rect>
                <rect x="20" y="13" width="4" height="5" fill="currentColor">
                  <animate
                    attributeName="height"
                    attributeType="XML"
                    values="5;21;5"
                    begin="0.3s"
                    dur="0.6s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="y"
                    attributeType="XML"
                    values="13; 5; 13"
                    begin="0.3s"
                    dur="0.6s"
                    repeatCount="indefinite"
                  />
                </rect>
              </svg>
            </div>
            <div v-if="type == 7" class="loader loader--style7" title="6">
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="24px"
                height="30px"
                viewBox="0 0 24 30"
                style="enable-background: new 0 0 50 50"
                xml:space="preserve"
              >
                <rect x="0" y="0" width="4" height="20" fill="currentColor">
                  <animate
                    attributeName="opacity"
                    attributeType="XML"
                    values="1; .2; 1"
                    begin="0s"
                    dur="0.6s"
                    repeatCount="indefinite"
                  />
                </rect>
                <rect x="7" y="0" width="4" height="20" fill="currentColor">
                  <animate
                    attributeName="opacity"
                    attributeType="XML"
                    values="1; .2; 1"
                    begin="0.2s"
                    dur="0.6s"
                    repeatCount="indefinite"
                  />
                </rect>
                <rect x="14" y="0" width="4" height="20" fill="currentColor">
                  <animate
                    attributeName="opacity"
                    attributeType="XML"
                    values="1; .2; 1"
                    begin="0.4s"
                    dur="0.6s"
                    repeatCount="indefinite"
                  />
                </rect>
              </svg>
            </div>
            <div v-if="type == 8" class="loader loader--style8" title="7">
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="24px"
                height="30px"
                viewBox="0 0 24 30"
                style="enable-background: new 0 0 50 50"
                xml:space="preserve"
              >
                <rect
                  x="0"
                  y="10"
                  width="4"
                  height="10"
                  fill="currentColor"
                  opacity="0.2"
                >
                  <animate
                    attributeName="opacity"
                    attributeType="XML"
                    values="0.2; 1; .2"
                    begin="0s"
                    dur="0.6s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="height"
                    attributeType="XML"
                    values="10; 20; 10"
                    begin="0s"
                    dur="0.6s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="y"
                    attributeType="XML"
                    values="10; 5; 10"
                    begin="0s"
                    dur="0.6s"
                    repeatCount="indefinite"
                  />
                </rect>
                <rect
                  x="8"
                  y="10"
                  width="4"
                  height="10"
                  fill="currentColor"
                  opacity="0.2"
                >
                  <animate
                    attributeName="opacity"
                    attributeType="XML"
                    values="0.2; 1; .2"
                    begin="0.15s"
                    dur="0.6s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="height"
                    attributeType="XML"
                    values="10; 20; 10"
                    begin="0.15s"
                    dur="0.6s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="y"
                    attributeType="XML"
                    values="10; 5; 10"
                    begin="0.15s"
                    dur="0.6s"
                    repeatCount="indefinite"
                  />
                </rect>
                <rect
                  x="16"
                  y="10"
                  width="4"
                  height="10"
                  fill="currentColor"
                  opacity="0.2"
                >
                  <animate
                    attributeName="opacity"
                    attributeType="XML"
                    values="0.2; 1; .2"
                    begin="0.3s"
                    dur="0.6s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="height"
                    attributeType="XML"
                    values="10; 20; 10"
                    begin="0.3s"
                    dur="0.6s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="y"
                    attributeType="XML"
                    values="10; 5; 10"
                    begin="0.3s"
                    dur="0.6s"
                    repeatCount="indefinite"
                  />
                </rect>
              </svg>
            </div>
          </div>
        </template>

        <style scoped>
          svg {
            width: 100%;
            height: 100%;
          }
          .loader {
            margin: 0;
            width: v-bind(size);
            height: v-bind(size);
          }
        </style>
      `,
      icon: `
        // icon.vue

        \<script setup>
          const props = defineProps({
            name: {
              type: String,
              default: '',
              requred: true,
            },
            size: {
              type: [Number, String],
              default: 24,
            },
          })

          const svg = ref(null)

          const res = await fetch(
            \`https://toybox.design/api/v1/icons/\${props.name}?size=\${props.size}\`
          )

          res.json().then(data => {
            svg.value = data.svg
          })
        <\/script>

        <template>
          <div v-html="svg"></div>
        </template>
      `,
    },
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

  onMounted(() => {
    global.clearSearch()
    console.log('route hash: ', route.hash)
  })

  function handleButtonAction() {
    global.toast('info', 'Button clicked')
  }

  function handleToggle(item) {
    console.log(`${item.name} has been set to ${item.value}`)
  }

  watch(
    () => global.query,
    val => {
      state.search = val
    }
  )
</script>

<template>
  <main class="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
    <div class="w-full">
      <Showcase title="table">
        <template v-slot:default>
          <tb-table :data="state.tableData" />
        </template>
        <template v-slot:code>
          <tb-code :data="state.code.table" />
        </template>
      </Showcase>
      <Showcase title="button">
        <template v-slot:default>
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
        </template>
        <template v-slot:code>
          <tb-code :data="state.code.button" />
        </template>
      </Showcase>
      <Showcase title="icon">
        <template v-slot:default>
          <div class="w-full max-w-[50%] grid grid-cols-4 gap-y-12">
            <tb-icon name="code" />
            <tb-icon name="github" />
            <tb-icon name="twitter" />
            <tb-icon name="globe" />
            <tb-icon name="link" />
            <tb-icon name="pie" />
            <tb-icon name="caution" />
            <tb-icon name="refresh" />
          </div>
        </template>
        <template v-slot:code>
          <tb-code :data="state.code.icon" />
        </template>
      </Showcase>
    </div>
    <div class="w-full">
      <Showcase title="toggle list">
        <template v-slot:default>
          <tb-toggle-list :items="state.toggleItems" @change="handleToggle" />
        </template>
        <template v-slot:code>
          <tb-code :data="state.code.toggle" />
          <tb-code :data="state.code.toggleList" />
        </template>
      </Showcase>
      <Showcase title="accordion">
        <template v-slot:default>
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
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </tb-accordion-item>
            <tb-accordion-item title="Item 3">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </tb-accordion-item>
          </tb-accordion>
        </template>
        <template v-slot:code>
          <tb-code :data="state.code.accordionItem" />
          <tb-code :data="state.code.accordion" />
        </template>
      </Showcase>
      <Showcase title="loader">
        <template v-slot:default>
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
        </template>
        <template v-slot:code>
          <tb-code :data="state.code.loader" />
        </template>
      </Showcase>
    </div>
  </main>
</template>
