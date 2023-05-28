import React, { useEffect, useState } from "react";
import "./inviteFriends.css";
import axios from "../api/axios";

function InviteFriendsPage() {
  const [selectedTimeRange, setSelectedTimeRange] = useState("lastWeek1");
  const [showLastWeekContent, setShowLastWeekContent] = useState(false);
  const [showLast30DaysContent, setShowLast30DaysContent] = useState(false);
  const [inviteCodeValue, setInviteCodeValue] = useState(generateInviteCode()); // Generate random invite code
  const [inviteHistoryLastWeek, setInviteHistoryLastWeek] = useState([]);
  const [inviteHistoryLastMonth, setInviteHistoryLastMonth] = useState([]);
  function generateInviteCode() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "";
    for (let i = 0; i < 6; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
  }

  const handleTimeRangeChange = (timeRange) => {
    setSelectedTimeRange(timeRange);
  };

  const handleLastWeekClick = () => {
    setShowLastWeekContent(true);
    setShowLast30DaysContent(false);
  };

  const handleLast30DaysClick = () => {
    setShowLastWeekContent(false);
    setShowLast30DaysContent(true);
  };

  const handleCopyInviteCode = async () => {
    const copyText = document.getElementById("invite-code1");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    let response = await axios.post("/api/invite-history", {
      code: copyText.value,
    });
  };

  useEffect(() => {
    getInvites();
  }, []);

  const getInvites = async () => {
    let response = await axios.get("/api/invite-history");
    var date = new Date();
    date.setDate(date.getDate() - 7);
    setInviteHistoryLastWeek(
      response.data.filter((invite) => new Date(invite.created_at) >= date)
    );

    var date = new Date();
    date.setDate(date.getDate() - 30);
    setInviteHistoryLastMonth(
      response.data.filter((invite) => new Date(invite.created_at) >= date)
    );
  };

  return (
    <div className="invite-friends-page1">
      <h1 className="HE11">Refer a friend to Lyft and get ride credit</h1>
      <h3 className="HE33">
        Earn Lyft ride credit when you refer a friend in your area.
      </h3>
      <div className="invite-code1">
        <label htmlFor="invite-code1">Your invite code</label>
        <input type="text" id="invite-code1" value={inviteCodeValue} readOnly />
        <button className="button1" onClick={handleCopyInviteCode}>
          Copy invite
        </button>
      </div>

      <h1 className="invite-historyy">Your invite history</h1>

      <div className="time-range-switch1">
        <button
          onClick={() => {
            handleTimeRangeChange("lastWeek1");
            setShowLastWeekContent(true);
            setShowLast30DaysContent(false);
          }}
          className={selectedTimeRange === "lastWeek1" ? "active" : ""}
        >
          Last week
        </button>
        <button
          onClick={() => {
            handleTimeRangeChange("last30Days1");
            setShowLastWeekContent(false);
            setShowLast30DaysContent(true);
          }}
          className={selectedTimeRange === "last30Days1" ? "active" : ""}
        >
          Last 30 days
        </button>
      </div>

      {showLastWeekContent && (
        <div>
          <div className="LastWeekContent1">
            <h2>Last week content</h2>
          </div>
          <table
            style={{
              borderSpacing: 30,
            }}
          >
            <tr>
              <th>ID</th>
              <th>Code</th>
              <th>Date</th>
            </tr>

            {inviteHistoryLastWeek.map((inviteHistory, key) => (
              <tr>
                <td>{key + 1}</td>
                <td>{inviteHistory.code}</td>
                <td>{new Date(inviteHistory.created_at).toDateString()}</td>
              </tr>
            ))}
          </table>
        </div>
      )}

      {showLast30DaysContent && (
        <div>
          <div className="Last30Days1">
            <h2>Last 30 days content</h2>
          </div>

          <table
            style={{
              borderSpacing: 30,
            }}
          >
            <tr>
              <th>ID</th>
              <th>Code</th>
              <th>Date</th>
            </tr>

            {inviteHistoryLastMonth.map((inviteHistory,key) => (
              <tr>
                <td>{key + 1}</td>
                <td>{inviteHistory.code}</td>
                <td>{new Date(inviteHistory.created_at).toDateString()}</td>
              </tr>
            ))}
          </table>
        </div>
      )}
    </div>
  );
}

export default InviteFriendsPage;
