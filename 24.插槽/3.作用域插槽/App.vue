<template>
  <div>
    <Header>
      <template slot-scope="value">
        <ul>
          <li v-for="t in value.title">{{ t }}</li>
        </ul>
      </template>
    </Header>
    <Header>
      <template slot-scope="value">
        <ol>
          <li v-for="t in value.title">{{ t }}</li>
        </ol>
      </template>
    </Header>
    <Header>
      <template slot-scope="value">
        <h2>{{ value.msg }}</h2>
      </template>
    </Header>
  </div>
</template>

<script>
import Header from "@/components/Count.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>
