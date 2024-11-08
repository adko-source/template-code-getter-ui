import { API_BASE_URL } from '$lib/apiConfig';

export async function attachDocument(formData: FormData) {
  
  try {
    console.log("Sending file to attachDocument endpoint");
    const response = await fetch(`${API_BASE_URL}/attach_document`, {
      method: "POST",
      body: formData
    });

    if (response.ok) {
      const data = await response.json();
      console.log("File uploaded successfully:", data);

      return data;

    } else {
      console.error("Failed to upload file:", response.statusText);
    }
  } catch (error) {
    console.error("Error uploading file:", error);
  }
};

  