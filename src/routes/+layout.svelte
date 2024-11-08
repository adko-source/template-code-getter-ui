<script>
    import '../app.css';
</script>

<div class="flex flex-col min-h-screen">
    <main class="flex-grow">
        <slot />
    </main>

    <!-- Optional footer -->
    <!-- 
    <footer class="bg-gray-200 text-center py-4 mt-auto">
        &copy; 2024 My App. All rights reserved.
    </footer> 
    -->
</div>
