<template>
    <div>
      <!-- Icono de tres puntos -->
      <i class="fa fa-ellipsis-v" @click="toggleActions"></i>
  
      <!-- Menú de acciones -->
      <div v-if="actionsVisible" class="actions-menu">
        <button @click="editProject">Edit</button>
        <button @click="deleteProject">Delete</button>
      </div>
  
      <!-- Modal para editar el proyecto -->
      <div v-if="showModal" class="modal-overlay">
        <div class="modal-content">
          <span class="close" @click="closeModal">&times;</span>
          <h2>Edit Project</h2>
          <form @submit.prevent="updateProject">
            <div class="form-group">
              <label for="cost">Cost:</label>
              <input type="number" id="cost" v-model="modalData.cost" />
            </div>
            <div class="form-group">
              <label for="deadline">Deadline:</label>
              <input type="date" id="deadline" v-model="modalData.deadline" />
            </div>
            <div class="form-group">
              <label for="description">Description:</label>
              <textarea id="description" v-model="modalData.description" rows="4"></textarea>
            </div>
            <div class="form-group">
              <label for="allHours">All Hours:</label>
              <input type="number" id="allHours" v-model="modalData.allHours" />
            </div>
            <div class="form-group">
              <label for="tasksCompleted">Tasks Completed:</label>
              <input type="number" id="tasksCompleted" v-model="modalData.tasksCompleted" />
            </div>
            <div class="form-group">
              <label for="tasksTotal">Total Tasks:</label>
              <input type="number" id="tasksTotal" v-model="modalData.tasksTotal" />
            </div>
            <div class="form-group">
              <label for="percentage">Completion Percentage:</label>
              <input type="number" id="percentage" v-model="modalData.percentage" />
            </div>
            <button type="submit">Update Project</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const actionsVisible = ref(false);
  const showModal = ref(false);
  const modalData = ref<any>({});
  const currentIndex = ref<number | null>(null);
  
  function toggleActions() {
    actionsVisible.value = !actionsVisible.value;
  }
  
  function editProject() {
    if (currentIndex.value !== null) {
      // Suponiendo que tienes una forma de obtener los datos del proyecto por índice
      modalData.value = { /* datos del proyecto por currentIndex */ };
      showModal.value = true;
    }
  }
  
  function deleteProject() {
    if (confirm('Are you sure you want to delete this project?')) {
      // Lógica para eliminar el proyecto
      console.log('Project deleted:', currentIndex.value);
    }
    actionsVisible.value = false; // Cerrar el menú después de eliminar
  }
  
  function updateProject() {
    if (currentIndex.value !== null) {
      // Lógica para actualizar el proyecto
      console.log('Project updated:', modalData.value);
      showModal.value = false;
    }
  }
  
  function closeModal() {
    showModal.value = false;
  }
  </script>
  
  <style scoped>
  .actions-menu {
    position: absolute;
    top: 40px;
    right: 10px;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0.1, 0.1, 0.1, 0.1);
    display: flex;
    flex-direction: column;
  }
  
  .actions-menu button {
    background: none;
    border: none;
    padding: 10px;
    cursor: pointer;
  }
  
  .actions-menu button:hover {
    background-color: #f0f0f0;
  }
  
  .actions-menu button:focus {
    outline: none;
  }
  
  /* Estilos del modal */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: auto;
  }
  
  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 4px;
    width: 90%;
    max-width: 600px;
    max-height: 80vh;
    position: relative;
    overflow-y: auto; /* Permite el desplazamiento vertical */
  }
  
  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 24px;
    cursor: pointer;
  }
  
  h2 {
    margin-top: 0;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input, textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  textarea {
    resize: vertical;
  }
  
  button[type="submit"] {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button[type="submit"]:hover {
    background-color: #0056b3;
  }
  </style>
  