const ACCESS_TOKEN = "accesToken"
const REFRESH_TOKEN = "refreshToken"

export function signOut() {
  removeAuthToken();
  window.location.href = "/";
}

export function getAccessToken() {
  return localStorage.getItem(ACCESS_TOKEN) || sessionStorage.getItem(ACCESS_TOKEN) || "";
}

export function getRefreshToken() {
  return localStorage.getItem(REFRESH_TOKEN) || sessionStorage.getItem(REFRESH_TOKEN) || "";
}

export function setAuthToken(accessToken, refreshToken, remember) {
  if (remember) {
    localStorage.setItem(ACCESS_TOKEN, accessToken);
    localStorage.setItem(REFRESH_TOKEN, refreshToken);
    return;
  }

  sessionStorage.setItem(ACCESS_TOKEN, accessToken);
  sessionStorage.setItem(REFRESH_TOKEN, refreshToken);
}

export function removeAuthToken() {
  localStorage.removeItem(ACCESS_TOKEN);
  localStorage.removeItem(REFRESH_TOKEN);
  sessionStorage.removeItem(ACCESS_TOKEN);
  sessionStorage.removeItem(REFRESH_TOKEN);
}
