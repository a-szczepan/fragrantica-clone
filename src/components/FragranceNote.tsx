type Props = {
  image: string;
  text: string;
};

export const FragranceNote = ({ image, text }: Props) => {
  return (
    <div className="note">
      <img src={image} alt={text}></img>
      <span>{text}</span>
    </div>
  );
};
