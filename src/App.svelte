<script lang="ts">
  import ContentPage from "./pages/ContentPage.svelte";
  import AuthPage from "./pages/AuthPage.svelte";
  import { isAuth } from "./stores";
</script>

{#if $isAuth}
  <ContentPage />
{:else}
  <AuthPage />
{/if}
