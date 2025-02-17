import Boat from "./Boat";

const BoatBoard = () => {
  const totalPoints = 60;
  const boats = Array.from({ length: 22 }, (_, i) => ({ name: `Boat ${i + 1}`, points: 0 }));

  return (
    <div className="flex flex-col space-y-2 mt-10">
      {boats.map((boat, index) => (
        <Boat key={index} boat={boat} totalPoints={totalPoints} />
      ))}
    </div>
  );
};

export default BoatBoard;
