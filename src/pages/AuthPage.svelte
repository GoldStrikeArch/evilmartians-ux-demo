<script lang="ts">
  import LoginForm from "../components/LoginForm.svelte";
  import SignUpForm from "../components/SignUpForm.svelte";

  import { showLoginForm } from "../stores";
</script>

{#if $showLoginForm}
  <LoginForm />
{:else}
  <SignUpForm />
{/if}
