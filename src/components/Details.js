const Details = () => {
  async function getPetDetails() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
    );
    console.log(res);
  }

  return (
    <h2>
      {getPetDetails()}
      Details
    </h2>
  );
};

export default Details;
