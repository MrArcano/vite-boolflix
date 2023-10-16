<script>
export default {
  name: "Header"
}
</script>

<template>
  <header>
    <div class="container">
      <div class="logo">
        <img src="/logo-boolflix.png" alt="logo-boolflix">
      </div>
      <div class="search">
        <input type="text" class="form-control" id="inputCity">
        <select id="inputState" class="form-select">
          <option selected>All</option>
          <option>Film</option>
          <option>Serie</option>
        </select>
      </div>
    </div>

  </header>
</template>

<style lang="scss" scoped>
  header{
    background-color: #000000;
    height: 60px;

    display: flex;
    align-items: center;
    .container{
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      
      .logo{
        width: 150px;
        justify-self: auto;
      }
      .search{
        width: 400px;
        display: flex;
        gap: 8px;
        input{
          width: 70%;
        }
        select{
          width: 30%;
        }
      }
    }
  }
</style>