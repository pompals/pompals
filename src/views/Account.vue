<template>
  <div>
    <p>Your code:</p>
    <p>{{ palCode }}</p>

    <p>Your pals:</p>
    <ul>
      <li v-for="pal in pals" :key="pal.id">
        {{ pal.name }} -- {{ pal.status }}
      </li>
    </ul>

    <p>Add pals:</p>
    <input v-model="addPalCode" placeholder="add new pal...">
    <button v-on:click="addNewPal">ADD</button>
  </div>
</template>

<script>
export default {
  name: 'Account',
  data() {
    return {
      palCode: 'dendog-8712',
      addPalCode: '',
      pals: [
        {
          id: 'majorrincs--8712',
          name: 'majorrinc',
          status: 'online'
        }
      ]
    };
  },
  methods: {
    addNewPal: function() {
      const name = this.addPalCode.split('-')[0];
      this.pals.push({
        name,
        id: this.addPalCode,
        status: 'offline'
      });
    }
  }
};
</script>
