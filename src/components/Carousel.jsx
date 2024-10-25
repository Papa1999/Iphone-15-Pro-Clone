export default function Carousel() {
  return (
    <div className="relative flex">
      <div className="bg-black w-[780px] h-[360px] max-md:h-[276px] rounded-xl"></div>
      <div className="absolute top-[25px] left-[12px] flex flex-col gap-[8px]">
        <p className="text-[18px] font-semibold">Enter A17 Pro.</p>
        <p className="text-[18px] font-semibold">Game-Changing Chip.</p>
        <p className="text-[18px] font-semibold">Groundbreaking Performance.</p>
      </div>
    </div>
  );
}
