import Cookies from "js-cookie";

interface LoginResponse {
  token: string;
  [key: string]: any;
}

export async function loginUser(
  username: string,
  password: string
): Promise<LoginResponse> {
  const response = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
      expiresInMins: 30,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }

  // Store the token in cookies
  Cookies.set("token", data.token, { expires: 1 });

  return data;
}
