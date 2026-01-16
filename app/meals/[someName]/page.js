export default function MealDetailsPage({ params }) {
  return (
    <main>
      <h1>Meal Details</h1>
      <p>Meal slug: {params.someName}</p>
    </main>
  );
}