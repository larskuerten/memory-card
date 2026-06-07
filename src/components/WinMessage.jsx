const WinMessage = ({ moves }) => {
  return (
    <div className="win-message">
      <h2>Congratulations!</h2>
      <p>You complete the game in {moves} moves.</p>
    </div>
  );
};

export default WinMessage;
