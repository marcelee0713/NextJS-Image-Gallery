export default async function DynamicPage() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <>
      <div>Hello I am from the dynamic page</div>
    </>
  );
}
