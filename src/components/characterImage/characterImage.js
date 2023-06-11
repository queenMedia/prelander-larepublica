import "./characterImage.css";

export const CharacterImage = (props) => {
  return (
    <>
      <div class="img-with-text">
        <img src={props.src} alt="sometext" />
        <p>
          <strong>{props.txt}</strong>
        </p>
      </div>
    </>
  );
};
