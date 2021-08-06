/* eslint-disable no-useless-escape */
import { createApp } from "vue";
import App from "./App.vue";
import BusinessCard from "./components/BusinessCard.vue";
import NewBusinessCard from "./components/NewBusinessCard.vue";

const app = createApp(App);
app.mount("#app");
app.component("business-card", BusinessCard);
app.component("new-business-card", NewBusinessCard);


console.log(
    `
('--..--\`)
.-- )( --.

.-/    \-.
( (  \/  ) )
' '----' '
   '__'  M.BUTA   `
   
   )