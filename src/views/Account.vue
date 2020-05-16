<template>
  <div>
    <p>Your code:</p>
    <p>{{ userId }}</p>

    <p>Your pals:</p>
    <ul>
      <li v-for="(value, key) in pomPals" :key="key">
        {{ key }} -- {{ value }}
      </li>
    </ul>

    <p>Add pals:</p>
    <input v-model="newPalId" placeholder="add new pal..." />
    <button v-on:click="addPomPal(newPalId)">ADD</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { types } from '../store';

export default {
  name: 'Account',
  data() {
    return {
      newPalId: ''
    };
  },
  methods: {
    ...mapActions({
      addPomPal: types.ADD_POM_PAL
    })
    // addPomPal() {
    // this.addPomPalAction();
    // this.newPalId = '';
    // e.preventDefault();
    // }
  },
  computed: {
    ...mapGetters({
      userId: types.GET_USER_ID,
      pomPals: types.GET_POM_PALS
    })
  }
};
</script>
