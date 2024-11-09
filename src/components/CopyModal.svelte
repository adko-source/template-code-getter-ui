<!-- CopyModal.svelte -->
<script>
    export let message = '';
    export let isOpen = false;
    export let onClose = () => {};
  </script>
  
  {#if isOpen}
  <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div class="bg-white rounded-lg p-6 shadow-lg flex flex-col items-center space-y-4">
      <p class="text-gray-700 text-center">{message}</p>

      <!-- Checkmark Icon Centered Below Message -->
      <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
      </svg>

      <!-- Close Button Centered Below Icon -->
      <button
        on:click={onClose}
        class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
      >
        Close
      </button>
    </div>
  </div>
  {/if}
  