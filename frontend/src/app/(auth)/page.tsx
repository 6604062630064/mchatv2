"use client";

import { logo } from "@/utils/fonts";

export default function LoginPage() {
  return (
    <section className="grid h-[100vh] place-content-center bg-[#FFFBEA] p-14">
      <div className={`${logo.className} text-5xl font-bold`}>
        <h1>Welcome to</h1>
        <h1 className="mt-8 text-[#D64545]">mChat</h1>
      </div>
      <form id="login" className="mt-8" action="" onSubmit={() => 0}>
        <label htmlFor="username" className="text-sm font-bold">
          Username
        </label>

        <input
          className="mb-6 h-12 w-full rounded-lg border-2 border-solid border-[#A39E93]"
          type="text"
          name="username"
          id="username"
        />

        <label className="text-sm font-bold" htmlFor="password">
          Password
        </label>
        <input
          className="h-12 w-full rounded-lg border-2 border-solid border-[#A39E93]"
          type="password"
          name="password"
          id="password"
        />
      </form>
      <div id="btn-groups" className="mt-12 flex w-full flex-col items-center">
        <button
          form="login"
          className="h-14 w-full rounded-lg bg-[#FCE588] text-2xl font-bold text-[#27241D]"
        >
          Login
        </button>
        <button className="mt-6 h-14 w-full rounded-lg bg-[#D64545] text-2xl font-bold text-white">
          Create an account
        </button>
        <div className="my-7 h-[1px] w-full bg-[#BDBDBD]"></div>
        <div
          id="g_id_onload"
          data-client_id="20206441792-j2m1g08lp5oi1r7kntc4h89ja5d0nhql.apps.googleusercontent.com"
          data-context="signin"
          data-ux_mode="popup"
          data-login_uri="http://localhost:3000/auth/google"
          data-auto_prompt="false"
        ></div>

        <div
          className="g_id_signin"
          data-type="standard"
          data-shape="pill"
          data-theme="filled_black"
          data-text="continue_with"
          data-size="large"
          data-logo_alignment="left"
          data-width="100%"
        ></div>
      </div>
    </section>
  );
}
