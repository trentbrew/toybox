import TSearch from "./components/TSearch.vue";

export default {
    install: (app, options) => {
        app.component("TSearch", TSearch);
    },
};