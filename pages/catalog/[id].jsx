import Nav from '@/components/Layouts/Nav/Nav';

// export const getStaticPaths = async () => {
//   const res = await fetch('https://localhost:5000/products');
//   const data = await res.json();

//   const paths = data.map((item) => {
//     return {
//       params: { id: item.id },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = async (context) => {
//   const id = context.params.id;
//   const res = await fetch(`https://localhost:5000/products/${id}`);
//   const data = await res.json();

//   return {
//     props: { item: data },
//   };
// };

export default function Details() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <div>
          <h1>Details</h1>
        </div>
      </main>
    </>
  );
}
