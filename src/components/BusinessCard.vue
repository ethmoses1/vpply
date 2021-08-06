<template>
  <div>
    <!-- This is the BusinessCard component -->
    <!-- This component should display:
            - First and last name
            - Years experience and job title
            - mobile number
            - email address -->
    <li>
      <h2>{{ first_name }} {{ last_name }}</h2>
      <ul @click="$emit('delete', first_name)">
        <li>
          <strong>
            <span class="job-title">{{ job_title }}</span> <br>With {{ experience }} year of experience
          </strong>
        </li>
        <li>
          Email: <strong>{{ email }}</strong>
        </li>
        <li>
          Phone: <strong>{{ phone }}</strong>
        </li>
      </ul>
    </li>
  </div>
</template>

<script>
export default {
  emits: ['delete'],
  props: {
    id: {},
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    job_title: {
      type: String,
      required: true,
    },
    experience: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style></style>
