const APP_ID = "DVZZ0duSaOnAlzRFxY8QfKefIpouP4iaNg51oKno";
const JS_KEY = "I1UjxSkRoE1Fe7pacb3rYU6AiOs9DGyiLk81kMrg";
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
