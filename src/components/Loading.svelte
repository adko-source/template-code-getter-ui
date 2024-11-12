<script lang="ts">
    export let message: string = "One moment."; 
  </script>
  
  <div class="flex justify-center items-center sm:mb-2">
    <div class="flex flex-col items-center space-y-2 p-4"> 
        <!-- Spinner -->
        <div class="animate-spin-flash rounded-full h-12 w-12 border-t-4 border-custom-cyan border-solid"></div>
        
        {#if message}
        <p class="text-white text-sm md:text-md font-semibold text-center p-2 animate-fade-in">
          <span>{message}</span>
        </p>
        {/if}
    </div>
</div>

  
  <style>
    
  </style>
  