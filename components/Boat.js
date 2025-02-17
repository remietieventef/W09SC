const Boat = ({ boat, totalPoints }) => {
  return (
    <div className="relative w-full h-8 bg-gray-300 rounded">
      <div
        className="absolute left-0 h-8 bg-blue-500 text-white text-xs flex items-center justify-center rounded"
        style={{ width: `${(boat.points / totalPoints) * 100}%` }}
      >
        {boat.name}
      </div>
    </div>
  );
};

export default Boat;
