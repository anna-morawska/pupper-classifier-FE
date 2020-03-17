function api<T>(url: string, type = "JSON"): Promise<T> {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    if (type === "JSON") {
      return response.json() as Promise<T>;
    }
    return response.text() as Promise<any>;
  });
}

async function parallel<T>(
  promise: Promise<any>,
  delayTime: number
): Promise<T> {
  const promises = [promise, delay(delayTime)];
  const [output1] = await Promise.all(promises);
  return output1;
}

const delay = (delay: number) =>
  new Promise(resolve => setTimeout(() => resolve(), delay));

export { api, parallel };
