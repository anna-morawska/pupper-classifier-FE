function api<T>(url: string, data: any): Promise<T> {
  const formData = new FormData();
  formData.append("file", data);

  const options = {
    method: "POST",
    body: formData
  };

  return fetch(url, options).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json() as Promise<T>;
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
