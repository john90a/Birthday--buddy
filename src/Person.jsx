const Person = ({ image, name, age }) => {
  return (
    <article>
      <img src={image} alt={name} className="img" />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>{" "}
      // Add a class 'person' to the article for styling purposes. // Add a
      paragraph element with the age in years. // Add an image element with the
      provided image source and alt attribute. // Add a div element to contain
      the name and age. // Add the name and age as child elements of the div.
    </article>
  );
};
export default Person;
