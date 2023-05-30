export default async function TopicsPage() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <>
      <div>Hello I am from the topics page</div>
    </>
  );
}
