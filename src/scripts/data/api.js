import { getAccessToken, getRefreshToken, putAccessToken, removeAccessToken, removeRefreshToken } from "../utils/auth";
import { BASE_URL } from "../config";

const ENDPOINTS = {
  LOGIN: `${BASE_URL}/authentications`,
  REGISTER: `${BASE_URL}/users`,
  CREATE_SUMMARY: `${BASE_URL}/summaries`,
  SUMMARY_LIST: `${BASE_URL}/summaries`,
  SUMMARY_DETAIL: (id) => `${BASE_URL}/summaries/${id}`,
  SEND_MESSAGE: `${BASE_URL}/messages`,
};

export async function getRegistered({ name, email, password }) {
  const data = JSON.stringify({ name, email, password });

  const fetchResponse = await fetch(ENDPOINTS.REGISTER, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: data,
  });
  const json = await fetchResponse.json();

  return {
    ...json,
    ok: fetchResponse.ok,
  };
}

export async function getLogin({ email, password }) {
  const data = JSON.stringify({ email, password });

  const fetchResponse = await fetch(ENDPOINTS.LOGIN, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: data,
  });
  const json = await fetchResponse.json();

  return {
    ...json,
    ok: fetchResponse.ok,
  };
}

export async function updateAccessToken({ refreshToken }) {
  const data = JSON.stringify({ refreshToken });

  const fetchResponse = await fetch(ENDPOINTS.LOGIN, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: data,
  });
  const json = await fetchResponse.json();

  return {
    ...json,
    ok: fetchResponse.ok,
  };
}

export async function getLogout({ refreshToken }) {
  const data = JSON.stringify({ refreshToken });

  const fetchResponse = await fetch(ENDPOINTS.LOGIN, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: data,
  });
  const json = await fetchResponse.json();

  return {
    ...json,
    ok: fetchResponse.ok,
  };
}

async function fetchWithAuth(url, options = {}) {
  let accessToken = getAccessToken();

  options.headers = {
    ...options.headers,
    Authorization: `Bearer ${accessToken}`,
  };

  let response = await fetch(url, options);

  if (response.status === 401) {
    const refreshToken = getRefreshToken();

    if (!refreshToken) {
      removeAccessToken();
      removeRefreshToken();
      alert('Sesi Anda telah berakhir. Silakan login kembali.');
      location.hash = '/login';
      return null;
    }

    const res = await updateAccessToken({ refreshToken });
    if (res.ok && res.data?.accessToken) {
  
      putAccessToken(res.data.accessToken);
  
      options.headers.Authorization = `Bearer ${res.data.accessToken}`;
      response = await fetch(url, options);
    } else {
      removeAccessToken();
      removeRefreshToken();
      alert('Sesi Anda telah berakhir. Silakan login kembali.');
      location.hash = '/login';
      return null;
    }
  }

  const json = await response.json();
  return { ...json, ok: response.ok };
}

export async function createSummary({ language, originalContent }) {
  const formData = new FormData();
  formData.set("language", language);
  formData.set("originalContent", originalContent);

  return fetchWithAuth(ENDPOINTS.CREATE_SUMMARY, {
    method: "POST",
    body: formData,
  });
}

export async function getAllSummaries() {
  return fetchWithAuth(ENDPOINTS.SUMMARY_LIST);
}

export async function getSummaryById(id) {
  return fetchWithAuth(ENDPOINTS.SUMMARY_DETAIL(id));
}

export async function editSummaryById(id, { title, summary }) {
  const data = JSON.stringify({ title, summary });

  return fetchWithAuth(ENDPOINTS.SUMMARY_DETAIL(id), {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  });
}

export async function deleteSummaryById(id) {
  return fetchWithAuth(ENDPOINTS.SUMMARY_DETAIL(id), {
    method: "DELETE",
  });
}


export async function sendMessage({ name, email, message }) {
  const data = JSON.stringify({ name, email, message });

  const fetchResponse = await fetch(ENDPOINTS.SEND_MESSAGE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: data,
  });
  const json = await fetchResponse.json();

  return {
    ...json,
    ok: fetchResponse.ok,
  };
}