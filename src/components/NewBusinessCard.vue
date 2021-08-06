<template>
  <section>
    <form @submit.prevent class="form-css">
      <div>
        <label>First Name</label>
        <input type="text" v-model="first_name" />
      </div>
      <div>
        <label>Last Name</label>
        <input type="text" v-model="last_name" />
      </div>
      <div>
        <label>Job Title</label>
        <input type="text" v-model="job_title" />
      </div>
      <div>
        <label>Experience</label>
        <input type="number" v-model="experience" />
      </div>
      <div>
        <label>Email</label>
        <input type="text" v-model="email" />
      </div>
      <div>
        <label>Phone</label>
        <input type="text" v-model="phone" />
      </div>
      <div>
        <button @click="submitData">Add New</button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  emits: ["new_card-submit"],
  data() {
    return {
      first_name: "",
      last_name: "",
      job_title: "",
      experience: null,
      email: "",
      phone: "",
    };
  },
  methods: {
    submitData() {
      this.$emit(
        "new_card-submit",
        this.first_name,
        this.last_name,
        this.job_title,
        this.experience,
        this.email,
        this.phone
      );
    },
  },
};
</script>
