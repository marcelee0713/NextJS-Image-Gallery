"use client";

type Error = {
  error: Error;
  callback: () => void;
};

export default async function Error({ error, callback }: Error) {
  return (
    <div>
      <h1>Error!</h1>
      <p>Please try again later!</p>
      <button onClick={callback}>Try again</button>
    </div>
  );
}
