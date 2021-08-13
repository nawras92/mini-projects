import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddVoteAction } from "../redux/actions/CounterActions";

const VotingCard = (props) => {
  const [votes, setVotes] = useState(0);
  const { name } = props;
  const dispatch = useDispatch();
  const onClickHandler = (e) => {
    e.preventDefault();
    dispatch(AddVoteAction());
    setVotes(votes + 1);
  };
  return (
    <div className="voting-card">
      <div className="voting-card-voter">{name}</div>
      <button className="voting-card-button" onClick={onClickHandler}>
        Vote Now
      </button>
      <div className="voting-card-count">{votes}</div>
    </div>
  );
};

export default VotingCard;
