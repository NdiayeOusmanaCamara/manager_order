<template>
  <div class="modal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">  
          <h5 class="modal-title">Create new customer</h5>
          <button type="button" class="btn-close" @click="$emit('close')"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="submit">
            <div class="form-group  pt-2">
              <label for="name">Customer Name</label>
              <input v-model="newCustomer.name" type="text" class="form-control" required />
            </div>
            <div class="form-group  pt-2">
              <label for="address ">Address</label>
              <textarea  v-model="newCustomer.address" type="text" class="form-control" required ></textarea>
            </div>
            <div class="form-group  pt-2">
              <label for="email">Email</label>
              <input v-model="newCustomer.email" type="email" class="form-control" required />
            </div>
            <div class="form-group pt-2">
              <label for="phone">Phone</label>
              <input v-model="newCustomer.phone" type="tel" class="form-control" required />
            </div>
            <div class="modal-footer mt-5">
              <button type="button" class="btn btn-secondary" @click="$emit('close')">Close</button>
              <button type="submit" class="btn btn-primary">Confirm</button>
              
              
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const emit = defineEmits();
const newCustomer = ref({ name: '', address: '', email: '', phone: '' });

const submit = () => {
  emit('add', { ...newCustomer.value });
  newCustomer.value = { name: '', address: '', email: '', phone: '' }; // Reset
};
</script>
<style setup>
.modal {
  display: block;
  background-color: rgba(0, 0, 0, 0.5);
  
}
.form-group label{
padding-bottom: 5px
}
.modal-content {
  margin-top: 150px;
  width: 550px;
  display: flex;
  justify-content: center;
}

</style>