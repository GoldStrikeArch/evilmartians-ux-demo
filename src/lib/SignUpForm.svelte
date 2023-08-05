<script lang="ts">
  import { showLoginForm } from "../stores";

  let email = "";
  let password = "";
  let validations = [];
  let strength = 0;

  $: {
    validations = [
      password.length > 7,
      password.search(/[0-9]/) > -1,
      password.search(/[A-Z]/) > -1,
      password.search(/[$&+,:;=?@#]/) > -1,
    ];
    strength = validations.reduce((acc, cur) => acc + cur);
  }
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
  <button aria-label="Login">Sign Up</button>
  <button on:click={() => showLoginForm.set(true)}>Login</button>
  <div class="strength">
    <span class="bar bar-1" class:bar-show={strength > 0} />
    <span class="bar bar-2" class:bar-show={strength > 1} />
    <span class="bar bar-3" class:bar-show={strength > 2} />
    <span class="bar bar-4" class:bar-show={strength > 3} />
  </div>

  <ul>
    <li>{validations[0] ? "✅" : "❌"} must be at least 8 characters</li>
    <li>{validations[2] ? "✅" : "❌"} must contain a number</li>
    <li>{validations[1] ? "✅" : "❌"} must contain a capital letter</li>
    <li>
      {validations[3] ? "✅" : "❌"} must contain a special symbol $&+,:;=?@#
    </li>
  </ul>
</form>
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

  .strength {
    display: flex;
    height: 20px;
    width: 100%;
  }

  .bar {
    margin-right: 5px;
    height: 100%;
    width: 25%;
    transition: box-shadow 500ms;
    box-shadow: inset 0px 20px #1f1f1f;
  }

  .bar-show {
    box-shadow: none;
  }

  .bar-1 {
    background: linear-gradient(to right, red, orangered);
  }

  .bar-2 {
    background: linear-gradient(to right, orangered, yellow);
  }

  .bar-3 {
    background: linear-gradient(to right, yellow, yellowgreen);
  }

  .bar-4 {
    background: linear-gradient(to right, yellow, green);
  }

  button:focus-visible,
  input:focus-visible {
    outline: 5px solid oklch(60% 0.15 252);
  }
</style>
