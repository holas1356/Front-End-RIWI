<template>
    <div class="container">
        <header>
            <section class="container-search">
                <div class="search-bar" @click="expandSearchBar">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <span v-if="!expanded">Search</span>
                    <input v-if="expanded" type="text" placeholder="Search" @blur="collapseSearchBar" />
                </div>
                <div class="user-info">
                    <i class="fa-solid fa-globe"></i>
                    <i class="fa-solid fa-adjust"></i>
                    <i class="fa-solid fa-bell"></i>
                    <img src="@/assets/images/perfil.jpg" alt="Profile Picture" />
                </div>
            </section>
            
        </header>
        <main>
            <section class="profile">
                <div class="profile-picture">
                    <img src="@/assets/images/perfil.jpg" alt="Profile Picture" />
                </div>
                <div class="profile-info">
                    <div>
                         <h1>John Doe</h1>
                    </div class="profile-detail">
                       <div>
                        <ul>
                        <li>
                            <i class="fas fa-code"></i> Coder
                        </li>
                        <li>
                            <i class="fas fa-map-marker-alt"></i> Medellin
                        </li>
                        <li>
                            <i class="fas fa-calendar-alt"></i> Joined April 2021
                        </li>
                        <li>
                            <button class="connected">Connected</button> 
                        </li>
                    </ul>
                    
                       </div>
                        
                </div>
            </section>
        </main>
        <section class="navigation">
                <ul>
                    <li>
                        <router-link to="/profile">
                            <i class="fas fa-user"></i> Profile
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/team">
                            <i class="fas fa-users"></i> Team
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/projects">
                            <i class="fas fa-tasks"></i> Projects
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/connections">
                            <i class="fas fa-link"></i> Connections
                        </router-link>
                    </li>
                </ul>
            </section>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const expanded = ref(false);

const expandSearchBar = () => {
  expanded.value = true;
};

const collapseSearchBar = () => {
  expanded.value = false;
};
</script>

<style>
.container {
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background-color: #f2f2f2;
    color:#bbb;
}
i{
    color:#bbb;
}
header{
    display: flex;
    justify-content: center;
    align-items: center;
}
.container-search {
    display: flex;
    width: 77%;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 8px;
    border-radius: 10px;
}
.search-bar {
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 12px;
  color:#bbb;
  transition: all 0.3s ease;
}

.search-bar i {
  margin-right: 8px;
}

.search-bar input {
  padding: 0px;
  border: none;
  border-bottom: 1px solid #ccc;
  font-size: 16px;
  outline: none;
  color:#807e7e;
}


.search-bar.expanded {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
}
.user-info {
  display: flex;
  align-items: center;
}
.user-info img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
.user-info i {
  margin-right: 15px;
  color: #bbb; 
  cursor: pointer;
}


main {
    padding: 20px;
    display: flex;
    justify-content: center;
    

    .profile {
        width: 80%;
        padding: 20px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        display: flex;
        align-items: center;
    }
    .profile-picture img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        margin-right: 20px;
    }
    .profile-info {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .profile-detail{
        display: flex;
        flex-direction: row;
    }
    .profile-info h1 {
        margin-bottom: 10px;
        color: #515050;
    }
    .profile-info ul {
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
    .profile-info li i {
        margin-right: 5px;
        
    }
}
.connected {
    padding: 10px 20px;
    background-color: #673ab7;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
}

.navigation {
    width: 30%;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.navigation ul {
    list-style: none;
    padding: 0;
    margin: 0;
}
.navigation li {
    margin-bottom: 10px;
}
.navigation li a {
    display: flex;
    align-items: center;
    padding: 10px 15px;
    background-color: #f2f2f2;
    border-radius: 5px;
    text-decoration: none;
    color: #333;
}

    



</style>
