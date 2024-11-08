import DocumentUploader from './components/DocumentUploader.svelte';

const app = new DocumentUploader({
    // @ts-ignore
    target: document.getElementById('app'),
    props: {},
});

export default app;