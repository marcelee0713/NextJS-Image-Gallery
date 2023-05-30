export default async function StaticPage() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <>
      <div>Hello I am from the static page</div>
    </>
  );
}
