<template>
  <header>
    <nav>
      <h1>CacaLand</h1>
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/caca">Caca</NuxtLink></li>
      </ul>
    </nav>  
  </header>

  <div>
    <slot />
  </div>
</template>

<script>
export default {};  
</script>

<style></style>
