<template>
  <div>
    <form action="api/v1/login" method="post">
      <div class="form-group">
        <input type="text" name="user" id="user-login" placeholder="Login">
      </div>
      <div class="form-group">
        <input type="password" name="pwd" id="user-pwd" placeholder="Password">
      </div>
      <div class="form-group">
        <input class="btn btn-primary" type="button" value="Login">
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: 'LoginForm'
}
</script>
