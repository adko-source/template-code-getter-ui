<script lang="ts">
  
  import { attachDocument } from '$lib/api.ts';
  
  

    let uploadedFiles: File[] = [];
    let templateCodesList: string[] = [];
    let errorMessage: string;

     // Function to copy all items to the clipboard
    function copyAllToClipboard() {
      const textToCopy = templateCodesList.join('\n');
      navigator.clipboard.writeText(textToCopy)
        .then(() => {
          alert('All template codes copied to clipboard!');
        })
        .catch(err => {
          console.error('Failed to copy text: ', err);
        });
    };

    // Function to copy a single item to the clipboard
    function copyToClipboard(item:string) {
      navigator.clipboard.writeText(item)
        .then(() => {
          alert(`Copied: ${item}`);
        })
        .catch(err => {
          console.error('Failed to copy text: ', err);
        });
    };
  
    async function handleFileChange(event: Event) {
      
      const target = event.target as HTMLInputElement;

      if (target.files) {
        uploadedFiles = Array.from(target.files);
        console.log("Files selected:", uploadedFiles);

        uploadedFiles.forEach(async (file) => {
          const formData = new FormData();

          console.log(file.type);

          if(file.type !== 'text/xml')
          {
            console.log('Wrong file type uploaded');
            errorMessage = "The file type should be .xml";
            return;
          }
          else
          {
            errorMessage = "";
          }

          formData.append("file", file, file.name);
          const result = await attachDocument(formData);
          templateCodesList = result.list;
          console.log(templateCodesList);
          
        });
      };
};

  
    
  </script>
  
 <!-- Full-screen centered container with gradient background -->
<div class="flex items-center justify-center {templateCodesList.length == 0 ? 'min-h-screen bg-dashboard-bg bg-middle bg-cover' : 'h-1/4 bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200'} ">
  
  <!-- File Upload UI -->
  <div class="flex flex-col items-center justify-center bg-white p-6 rounded-md shadow-lg w-full max-w-sm">
    <label
      for="file-upload"
      class="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-400 transition-colors"
    >
      <div class="flex flex-col items-center justify-center">
        <svg
          class="w-8 h-8 text-gray-400 mb-2"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M16.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7a1 1 0 111.414-1.414L8 14.586V2a1 1 0 112 0v12.586l6.293-6.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          />
        </svg>
        <span class="text-sm text-gray-500">Upload file</span>
        
      </div>
      
      <input
        id="file-upload"
        type="file"
        class="hidden"
        on:change={handleFileChange}
      />
    </label>
    <span class="{errorMessage ? 'block' : 'hidden'} text-sm text-red-500 mt-2">The file type should be .xml</span>
  </div>

</div>



  {#if templateCodesList.length > 0}
  <div class="p-4 bg-gray-100 border border-gray-300 rounded-md">
    <h2 class="text-lg font-semibold mb-4">Template Codes</h2>
    <!-- Button to copy all items to clipboard -->
    <button 
      on:click={copyAllToClipboard} 
      class="w-full px-4 py-2 text-sm font-semibold text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none"
    >
      Copy All
    </button>
    <!-- Display each item with its own copy button -->
    <ul class="mb-4 space-y-2">
      {#each templateCodesList as item}
        <li class="flex items-center justify-between p-2 bg-white border border-gray-200 rounded-md">
          <span class="text-sm font-mono">{item}</span>
          <button 
            on:click={() => copyToClipboard(item)} 
            class="px-2 py-1 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Copy
          </button>
        </li>
      {/each}
    </ul>

    
  </div>
{/if}
 