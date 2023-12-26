<template>
    <nav>
      <ul>
        <li>Home</li>
        <li>Create</li>
        <li>About</li>
        <li>Sign In</li>
      </ul>
    </nav>
</template>
<script>
export default {
    
}
</script>
<style>

    nav, ul {
      width: 100%;
      height: 5vh;
    }

    ul {
      display: flex;
      flex-flow: row;
      list-style: none;
    }

    li:last-child {
      margin-left: auto;
    }

    li {
      text-align: center;
      line-height: 5vh;
      font-size: var(--large-font-size);
      font-family: 'Josefin Slab', 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      width: 10%;
      min-width: fit-content;
      cursor: pointer;
      position: relative;
    }

    li:hover:after {
      width: 100%;
    }

    li:after {
      content: '';
      display: block;
      position: absolute;
      width: 0%;
      height: 1px;
      background-color: black;
      transition: width 0.5s, transform 0.5s;
      transform: translateX(-50%);
      left: 50%
    }
    
</style>