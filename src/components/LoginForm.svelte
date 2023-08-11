<script lang="ts">
  import { showLoginForm } from "../stores";

  let email = "";
  let password = "";
</script>

<form>
  <label>
    Email: <input bind:value={email} type="email" autocomplete="username" />
  </label>
  <label>
    Password: <input
      bind:value={password}
      type="password"
      autocomplete="current-password"
    />
  </label>
  <button type="submit" on:click={() => showLoginForm.set(true)}>Login</button>
</form>
<button on:click={() => showLoginForm.set(false)}>Go to Sign Up</button>
<h1>
  password is {password}
</h1>

<style>
  input[type="email"]:valid {
    color: green;
  }

  input[type="email"]:invalid {
    color: red;
  }
</style>
