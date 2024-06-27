import { UserInfoObject, UserList } from "@/types/user";
import { cookies } from "next/headers";
const { SERVER_URL } = process.env;

export const getUserInfo: () => Promise<UserInfoObject> = async () => {
  const web_session = cookies().get("web_session")?.value;
  const response = await fetch(`${SERVER_URL}/auth/loggedin`, {
    method: "POST",
    credentials: "include",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Cookie: "web_session=" + web_session,
    },
  });

  if (response.ok) {
    const jsonObject = await response.json();
    return jsonObject;
  }
};

export const getUserList: () => Promise<UserList> = async () => {
  const web_session = cookies().get("web_session")?.value;
  const response = await fetch(`${SERVER_URL}/users`, {
    method: "GET",
    credentials: "include",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Cookie: "web_session=" + web_session,
    },
  });

  if (response.ok) {
    const jsonObject = await response.json();
    return jsonObject;
  }
};
