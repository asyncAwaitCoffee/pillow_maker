<template>
    <nav>
      <ul>
        <li><router-link :to="{name: 'home'}">Home</router-link></li>
        <li><router-link :to="{name: 'create'}">Create</router-link></li>
        <li><router-link :to="{name: 'about'}">About</router-link></li>
        <li>Sign In</li>
      </ul>
    </nav>
</template>
<script>
export default {
    
}
</script>
<style>

    a {
      color: inherit;
      text-decoration: none;
      transition: color 0.2s;
      cursor: pointer;
    }

    .router-link-active {
      color: var(--color-two)
    }

    nav {
      width: 100%;
      height: 5vh;
      background-color: var(--color-one)
    }

    ul {
      height: 100%;
      display: flex;
      flex-flow: row;
      list-style: none;
    }

    li:last-child {
      margin-left: auto;
    }

    li {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      font-size: var(--large-font-size);
      font-family: 'Josefin Slab', 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      width: 10%;
      min-width: fit-content;
      position: relative;
    }

    a:hover:after {
      width: 100%;
    }

    a:after {
      content: '';
      display: block;
      position: absolute;
      bottom: 0;
      width: 0%;
      height: 1px;
      background-color: black;
      transition: width 0.5s, transform 0.5s;
      transform: translateX(-50%);
      left: 50%
    }
    
</style>