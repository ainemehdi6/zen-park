const apiHost = "http://localhost:3020";

async function getParkSlots() {
  try {
    const requestPath = "/parks";
    const url = new URL(`${apiHost}${requestPath}`);

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Rethrow the error to propagate it further
  }
}

export default getParkSlots;
