const APP_ID = "DVZZ0duSaOnAlzRFxY8QfKefIpouP4iaNg51oKno";
const JS_KEY = "Vfn7YufxGzsYfCx7t8W9t1GUqzwWg5Chz3dFeuqr";
const API_URL = "https://parseapi.back4app.com/classes";

export async function getCultivos() {
  const res = await fetch(`${API_URL}/Cultivo`, {
    headers: {
      "X-Parse-Application-Id": APP_ID,
      "X-Parse-Javascript-Key": JS_KEY
    }
  });
  const data = await res.json();
  return data.results;
}

export async function getCalendario() {
  const res = await fetch(`${API_URL}/CalendarioHuerto`, {
    headers: {
      "X-Parse-Application-Id": APP_ID,
      "X-Parse-Javascript-Key": JS_KEY
    }
  });
  const data = await res.json();
  return data.results;
}

export async function getAromaticas() {
  const res = await fetch(`${API_URL}/Aromatica`, {
    headers: {
      "X-Parse-Application-Id": APP_ID,
      "X-Parse-Javascript-Key": JS_KEY
    }
  });
  const data = await res.json();
  return data.results;
}
