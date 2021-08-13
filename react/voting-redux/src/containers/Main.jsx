import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { FetchUsersAction } from "../redux/actions/ApiActions";
import VotingCard from "../components/VotingCard";
import getUsers from "../api/userApi";

const Main = () => {
  const votes = useSelector((state) => state.AddVote.votes);
  const [users, setUsers] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    const returnUsers = async () => {
      const data = await getUsers();
      dispatch(FetchUsersAction());
      setUsers(data);
    };
    returnUsers();
  }, []);

  return (
    <div className="main">
      <div className="voting-results">
        <div className="voting-results-title">Total Voting Count</div>
        <div className="voting-results-count">{votes}</div>
      </div>

      <div className="voting-cards">
        {users &&
          users.map((user) => {
            return <VotingCard key={user.id} name={user.name} />;
          })}
      </div>
    </div>
  );
};

export default Main;
