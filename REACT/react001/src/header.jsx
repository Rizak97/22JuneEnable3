const playerInfo = () => {
  const player = {
    forename: "Marcus",
    surname: "Rashford",
    age: 24,
    club: "Manchester United",
    position: "Forward",
  };
  return (
    <div>
      
       <h1>{player.forename}</h1>
       <h1>{player.surname}</h1>
      <h1>{player.age}</h1>
      <h1>{player.club}</h1>
      <h1>{player.position}</h1>   
    </div>
  );
};
export default playerInfo;
