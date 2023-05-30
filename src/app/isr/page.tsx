export default async function IsrPage() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <>
      <div>Hello I am from the isr page</div>
    </>
  );
}
