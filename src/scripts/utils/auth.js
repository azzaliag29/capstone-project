import { getActiveRoute } from "../routes/url-parser";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "../config";
import * as SummaryAPI from "../data/api";

export function getAccessToken() {
  try {
    const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);

    if (accessToken === "null" || accessToken === "undefined") {
      return null;
    }

    return accessToken;
  } catch (error) {
    console.error("getAccessToken: error:", error);
    return null;
  }
}

export function putAccessToken(token) {
  try {
    localStorage.setItem(ACCESS_TOKEN_KEY, token);
    return true;
  } catch (error) {
    console.error("putAccessToken: error:", error);
    return false;
  }
}

export function removeAccessToken() {
  try {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    return true;
  } catch (error) {
    console.error("getLogout: error:", error);
    return false;
  }
}

export function getRefreshToken() {
  try {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);

    if (refreshToken === "null" || refreshToken === "undefined") {
      return null;
    }

    return refreshToken;
  } catch (error) {
    console.error("getRefreshToken: error:", error);
    return null;
  }
}

export function putRefreshToken(token) {
  try {
    localStorage.setItem(REFRESH_TOKEN_KEY, token);
    return true;
  } catch (error) {
    console.error("putRefreshToken: error:", error);
    return false;
  }
}

export function removeRefreshToken() {
  try {
    localStorage.removeItem(REFRESH_TOKEN_KEY);
    return true;
  } catch (error) {
    console.error("getLogout: error:", error);
    return false;
  }
}

export function isTokenExpired(token) {
  if (!token) return true;

  const payload = JSON.parse(atob(token.split('.')[1]));
  const exp = payload.exp;
  const now = Math.floor(Date.now() / 1000);

  console.log("Token exp:", exp, "Now:", now);

  return exp < now;
}

const unauthenticatedRoutesOnly = ["/login", "/register"];
const authenticatedRoutesOnly = ["/summarize", "/library", "/summaries/:id"];

export function checkUnauthenticatedRouteOnly(page) {
  const url = getActiveRoute();
  const isLogin = !!getAccessToken();

  if (unauthenticatedRoutesOnly.includes(url) && isLogin) {
    location.hash = "/";
    return null;
  }

  return page;
}

export function checkAuthenticatedRouteOnly(page) {
  const url = getActiveRoute();
  const isLogin = !!getAccessToken();
  const isTokenAvailable = !!getRefreshToken();

  if (authenticatedRoutesOnly.includes(url)) {
    if (!(isLogin && isTokenAvailable)) {
      alert("Please log in to continue.")
      location.hash = "/login";
      return null;
    }
  }

  return page;
}

export async function getLogout() {
  const refreshToken = getRefreshToken();

  // Menghapus di database
  await SummaryAPI.getLogout({ refreshToken });

  // Menghapus di lokal
  removeAccessToken();
  removeRefreshToken();
}
