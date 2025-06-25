export function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
}

export function parseJwt(token) {
  if (!token) return null;
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(c => `%${('00' + c.charCodeAt(0).toString(16)).slice(-2)}`)
        .join('')
    );
    return JSON.parse(jsonPayload);
  } catch {
    return null;
  }
}

export function isAuthenticated() {
  const token = getCookie('jwtCookie');
  if (!token) return false;
  const payload = parseJwt(token);
  if (!payload) return false;
 
  if (payload.exp && Date.now() >= payload.exp * 1000) return false;
  return true;
}

export function getUserRoles() {
  const token = getCookie('jwtCookie');
  const payload = parseJwt(token);
  if (payload && payload.roles) return payload.roles;
  return [];
}

export function hasRole(role) {
  return getUserRoles().includes(role);
}
