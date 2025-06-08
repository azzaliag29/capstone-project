import { BASE_URL } from "../config";

const ENDPOINTS = {
  CREATE_SUMMARY: `${BASE_URL}/summaries`,
  SUMMARY_LIST: `${BASE_URL}/summaries`,
  SUMMARY_DETAIL: (id) => `${BASE_URL}/summaries/${id}`,
  SEND_MESSAGE: `${BASE_URL}/messages`,
};

export async function createSummary({ language, originalContent }) {
  const formData = new FormData();
  formData.set("language", language);
  formData.set("originalContent", originalContent);

  const fetchResponse = await fetch(ENDPOINTS.CREATE_SUMMARY, {
    method: "POST",
    body: formData,
  });
  const json = await fetchResponse.json();

  return {
    ...json,
    ok: fetchResponse.ok,
  };
}

export async function getAllSummaries() {
  const fetchResponse = await fetch(ENDPOINTS.SUMMARY_LIST);
  const json = await fetchResponse.json();

  return {
    ...json,
    ok: fetchResponse.ok,
  };
}

export async function getSummaryById(id) {
  const fetchResponse = await fetch(ENDPOINTS.SUMMARY_DETAIL(id));
  const json = await fetchResponse.json();

  return {
    ...json,
    ok: fetchResponse.ok,
  };
}

export async function editSummaryById(id, { title, summary }) {
  const data = JSON.stringify({ title, summary });

  const fetchResponse = await fetch(ENDPOINTS.SUMMARY_DETAIL(id), {
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

export async function deleteSummaryById(id) {
  const fetchResponse = await fetch(ENDPOINTS.SUMMARY_DETAIL(id), {
    method: "DELETE",
  });
  const json = await fetchResponse.json();

  return {
    ...json,
    ok: fetchResponse.ok,
  };
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