import React from 'react';
export default function Home() {
  return (
    <div
      className="w-full bg-blue-900/10 h-screen
      flex justify-center items-center">
      <div
        className="w-fit bg-blue-900/50 text-white
        m-auto p-3 text-center leading-9
        ">
        <img className="w-[300px] rounded" src="img/logo.png" alt="" />
        <h1>Welcome to React JS!</h1>
        <a data-testid="github-href" href="https://github.com/alifprihantoro/">
          <button data-testid="github-btn" className="bg-blue-900 m-auto p-3 text-white rounded w-fit">
            Github
          </button>
        </a>
      </div>
    </div>
  );
}
