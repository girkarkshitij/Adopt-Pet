import { useEffect, useState } from 'react/cjs/react.development';

const Details = () => {
  const [details, setDetails] = useState({
    name: '',
    animal: '',
    breed: '',
    description: '',
    city: '',
    state: '',
    images: [],
  });

  useEffect(() => {
    const id = location.pathname.split('/')[2];
    getPetDetails(id);
  }, []); //eslint-disable-line

  async function getPetDetails(id) {
    const res = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);
    const json = await res.json();
    setDetails({ ...json.pets[0] });
    console.log(details);
  }

  return <h2>Details</h2>;
};

export default Details;
