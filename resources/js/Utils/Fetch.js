export const myHeaders = () => {
  const token = document.querySelector("meta[name='csrf-token']").getAttribute("content");
  const header = new Headers();
  header.append("Accept", "application/json");
  header.append("X-CSRF-TOKEN", token);
  header.append("Content-Type", "application/json");
  return header;
}
export const GetFetch = ({ url, data = null, onSuccess, onError, onFinaly = false }) => {
  fetch(url + (data ? "?" + new URLSearchParams(data).toString("?") : ""), {
    method: 'GET',
    headers: myHeaders(),
    redirect: 'follow'
  }).then(res => {
    if (res.ok)
      return res.json()
    throw res;
  }).then(respon => {
    onSuccess && onSuccess(respon)
  }).catch(error => {
    onError && onError(error)
  }).finally(res => {
    onFinaly && onFinaly(res)
  });
}
export const DeleteFetch = ({ url, data = {}, onSuccess, onError, onFinaly = false }) => {
  let raw = JSON.stringify(data);
  fetch(url, {
    method: 'DELETE',
    headers: myHeaders(),
    body: raw,
    redirect: 'follow'
  }).then(res => {
    if (res.ok)
      return res.json()
    throw res;
  }).then(respon => {
    onSuccess && onSuccess(respon)
  }).catch(error => {
    onError && onError(error)
  }).finally(res => {
    onFinaly && onFinaly(res)
  });
}
export const PutFetch = ({ url, data = {}, onSuccess, onError, onFinaly = false }) => {
  let raw = JSON.stringify({ data });
  fetch(url, {
    method: 'PUT',
    headers: myHeaders(),
    body: raw,
    redirect: 'follow'
  }).then(res => {
    if (res.ok)
      return res.json()
    throw res;
  }).then(respon => {
    onSuccess && onSuccess(respon)
  }).catch(error => {
    onError && onError(error)
  }).finally(res => {
    onFinaly && onFinaly(res)
  });
}
export const PostFetch = ({ url, data = {}, onSuccess, onError, onFinaly = false }) => {
  let raw = JSON.stringify(data);
  fetch(url, {
    method: 'POST',
    headers: myHeaders(),
    body: raw,
    redirect: 'follow'
  }).then(res => {
    if (res.ok)
      return res.json()
    throw res;
  }).then(respon => {
    onSuccess && onSuccess(respon)
  }).catch(error => {
    onError && onError(error)
  }).finally(res => {
    onFinaly && onFinaly(res)
  });
}