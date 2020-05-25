<template>
  <nav id="menu">
    <li v-for="item in navList" v-bind:key="`${item.id}`">
            <template>
                <router-link
                    :to= "`${item.url}`"
                    >
                    {{item.name}}
                </router-link>
            </template>
    </li>
  </nav>
</template>

<script>

export default {
  name: 'MenuBar',
  data() {
      return {
      isOpen: false,
      active: false,
      navList: [
        {id: 0, url: "/about", name: "About the Project" },
        {id: 1,  url: "/dunbuild", name: "Dungeon Builder" },
        {id: 2, url: "/changelog", name: "Changelog" }
      ]
      }
  }
}
</script>

<style>
nav {
  list-style-type: none;
}
nav li {
  position: relative;
  margin: 0.25em;
  text-align: center;
}
nav li a {
  display: block;
  padding: 0.55em 1em;
  text-decoration: none;
  color: #ffffff;
  border-radius: 0.35em;
  background-color: rgba(5, 6, 41, 0.25);
  transition: all 200ms ease;
}
nav li a:hover {
  color: #ffffff;
  background-color: rgba(33, 37, 41, 0.65);
}
nav li a.active {
  background-color: rgba(33, 37, 41, 0.45);
}
nav li ul li a {
  background-color: transparent;
}
nav#menu {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
}
</style>
