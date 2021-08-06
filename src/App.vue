<template>
  <header><h1>Business Card</h1></header>
  <section>
    <div class="displaycard">
      <!-- use this component to render each unique card. Hint:you should use v-for and v-bind here-->
      <business-card
        v-for="item in items"
        :key="item.first_name_input"
        :first_name="item.first_name_input"
        :last_name="item.last_name_input"
        :job_title="item.job_title_input"
        :experience="item.experience_input"
        :email="item.email_input"
        :phone="item.phone_input"
        @delete="deleteItem"
      >
      </business-card>
    </div>
    <div class="form">
      <!-- add the code to create a new business card here.-->
      <button @click="toggleButton">
        {{ showForm ? "Done" : "Create New Card" }}
      </button>
      <new-business-card
        @new_card-submit="newCard"
        v-if="showForm"
      ></new-business-card>
    </div>
  </section>
</template>

<script>
import BusinessCard from "@/components/BusinessCard.vue";
import NewBusinessCard from "@/components/NewBusinessCard.vue";
export default {
  components: {
    BusinessCard,
    NewBusinessCard,
  },
  data() {
    return {
      showForm: false,
      // maintain this data structure for your solution
      items: [
        {
          first_name_input: "Joshua",
          last_name_input: "Bryan",
          job_title_input: "Software Engineer",
          experience_input: 3,
          email_input: "Joshua@yahoo.com.au",
          phone_input: "0401816591",
        },
      ],
    };
  },
  methods: {
    newCard(fname, lname, jtitle, exp, emai_l, phon_e) {
      const newCard = {};
      newCard.first_name_input = fname;
      newCard.last_name_input = lname;
      newCard.job_title_input = jtitle;
      newCard.experience_input = exp;
      newCard.email_input = emai_l;
      newCard.phone_input = phon_e;
      this.items.push(newCard);
      this.showForm = false;
    },
    toggleButton() {
      this.showForm = !this.showForm;
    },
    deleteItem(name) {
      this.items = this.items.filter((item) => item.first_name_input !== name);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
html {
  background-color: #fafafa;
}
* {
  box-sizing: border-box;
}
body {
  margin: 0;
}
header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #A52A2A;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
section {
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-around;
}
.displaycard {
  text-align: center;
  min-width: 50%;
}
.form {
  text-align: center;
  min-width: 50%;
}
#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li,
#app #form {
  list-style: none;
  box-shadow: 0 2px 8px rgb(0 0 0 / 26%);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}
#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #2F4F4F;
  background-color: #2F4F4F;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}
#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #A52A2A;
  margin: 0 0 1rem 0;
}
.job-title{
  font-size: 1.4rem;
}
</style>
