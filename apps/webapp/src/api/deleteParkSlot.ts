const apiHost = "http://localhost:3020";

async function deleteParkSlot(slotId: string) {
  const requestPath = `/parks/${slotId}`;
  const url = new URL(`${apiHost}${requestPath}`);

  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  const requestInit: RequestInit = {
    method: "DELETE",
    headers,
  };

  return fetch(url, requestInit);
}

export default deleteParkSlot;
