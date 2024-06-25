type characterType = {
  character: string;
};

const Capital = ({ character }:characterType) => {
  return (
    <>
      <div className="bg-primary  pt-[15px] pl-[15px]  leading-10x text-background inline-block ">
        {character}
      </div>
    </>
  );
};

export default Capital;
