const players = () => {
  const player = {
    name: "Marcus Rashford",
    age: 24,
    position: "forward",
    club: "MUFC",
  };
  return (
    <div className="players">
      <h4>Manchester's wonder kid </h4>
      <h4>
        {player.name} is a very talented {player.position} at {player.club}
      </h4>
    </div>
  );
};
export default players;
