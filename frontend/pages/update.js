/* eslint-disable react/prop-types */
import UpdateProduct from '../components/UpdateProduct';

export default function UpdatePage({ query }) {
  // 1. We need to get the existing product
  // 2. We need to get the mutation to update the product
  // 3. We need the form to handle the updates
  return (
    <div>
      <UpdateProduct id={query.id} />
    </div>
  );
}
