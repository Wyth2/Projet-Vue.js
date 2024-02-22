<template>
  <button
    :disabled="disabled"
    :class="{ 'disabled': disabled, [`btn-${color}`]: true }"
    @click="$emit('click')"
  >
    <slot/>
  </button>
</template>

<script>
const COLOR_VALUES = ['primary', 'warn', 'danger']

export default {
  name: 'BaseButton',
  props: {
    color: {
      type: String,
      default: 'primary',
      validator: value => COLOR_VALUES.includes(value)
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
button {
  background-color: #42b983;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #3aa374;
}

button:focus {
  outline: none;
  box-shadow: 0 0 4px 0 #3aa374;
}

.disabled {
  background-color: #ccc;
  color: #fff;
  cursor: not-allowed;
  transition: none;
}

.btn-primary {
  background-color: #42b983;
}

.btn-primary:hover {
  background-color: #3aa374;
}

.btn-warn {
  background-color: #f0ad4e;
}

.btn-warn:hover {
  background-color: #yellow;
}

.btn-danger {
  background-color: #orange;
}

.btn-danger:hover {
  background-color: #red;
}
</style>