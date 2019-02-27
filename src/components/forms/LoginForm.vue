<template>
    <div>
        <form action="api/v1/login" method="post">
            <input type="text" name="user" id="user-login" placeholder="Login">
            <input type="password" name="pwd" id="user-pwd" placeholder="Password">
            <input type="button" value="Login">
        </form>
    </div>
</template>
<script>
export default {
  name: 'LoginForm'
}
</script>
