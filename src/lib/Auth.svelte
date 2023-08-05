<script lang="ts">
  import SignUpForm from "./SignUpForm.svelte";
  import { showLoginForm } from "../stores";
</script>

{#if $showLoginForm}
  <h1>Login form</h1>
  <button on:click={() => showLoginForm.set(false)}>SignUp</button>
{:else}
  <SignUpForm />
{/if}
