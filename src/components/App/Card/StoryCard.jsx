const StoryCard = ({ image, uaername }) => {
  return (
    <div className="flex flex-col items-center">
      <img
        src={image}
        alt="imgage"
        className="h-14 w-14 p-[1.5px] border border-red-500 object-contain cursor-pointer rounded-full"
      />
      <p className="text-xs w-14 text-center mt-1 truncate">{uaername}</p>
    </div>
  );
};

export default StoryCard;
