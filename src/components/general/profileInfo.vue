<template>
  
        <section class="profile p-20">
          <div class="profile-picture p-10">
            <img src="@/assets/images/img.jpg" alt="Profile Picture" />
          </div>
          <div class="profile-info">
            <h1 class="f-30">John Doe</h1>
            <div class="profile-detail">
              <ul class="p-10">
                <li><i class="fas fa-code"></i> Coder</li>
                <li><i class="fas fa-map-marker-alt"></i> Medellin</li>
                <li><i class="fas fa-calendar-alt"></i> Joined April 2021</li>
              </ul>
              <div>
                  <button 
    :style="{ backgroundColor: isConnected ? '#673ab7' : '#bbb' }"
    @click="toggleConnection"
    class="button-with-icon"
  >
    <i class="fa-solid fa-user-check"></i> 
    {{ isConnected ? 'Connected' : 'Disconnected' }}
  </button>
                </div>
            </div>
          </div>
        </section>
</template>
<script setup lang="ts">
  import { ref } from 'vue';

  const isConnected = ref(true);

const toggleConnection = () => {
  isConnected.value = !isConnected.value;
};
  </script>
  <style scoped> 

  
  .profile {
    width: 80%;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    background: linear-gradient(to bottom, #a54fa1 30%, #fff 70%);
 
  }

  .fas{
    font-size: 1em;
    margin-right: 10px;
    color: #bbb;
  }


  .profile-picture img {
    width: 100px;
    height: 100px;
    margin-right: 20px;
    object-fit: cover;
    margin-top: 40px;
    border: 3px solid white;
  }
  
  .profile-info {
    display: flex;
    flex-direction: column;
    margin-top: auto;
  }
  
  .profile-info h1 {
    margin-left: 10px;
    margin-bottom: 10px;
    color: #515050;
  }
  .profile-detail{
    display: flex;
    gap: 250px;
  }
  
  .profile-detail ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 20px;
  }
  
  .profile-info li {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
  }
  

.button-with-icon {
  display: flex;
  align-items: center;
  gap: 8px; 
  border: none;
  color: #fff;
  font-size: 14px;
  padding: 8px 15px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.button-with-icon i {
  font-size: 20px; 
}
</style>