import React, { useState } from 'react';
import './inviteFriends.css';

function InviteFriendsPage() {
    const [selectedTimeRange, setSelectedTimeRange] = useState("lastWeek1");
    const inviteCode = "ABC123";
    const [showLastWeekContent, setShowLastWeekContent] = useState(false);
    const [showLast30DaysContent, setShowLast30DaysContent] = useState(false);

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

    return (
        <div className="invite-friends-page1">
            <h1>Refer a friend to Lyft and get ride credit</h1>
            <h3>Earn Lyft ride credit when you refer a friend in your area.</h3>
            <div className="invite-code1">
                <label htmlFor="invite-code1">Your invite code</label>
                <input type="text" id="invite-code1" value={inviteCode} readOnly />
                <button className="button1" onClick={() => navigator.clipboard.writeText(inviteCode)}>
                    Copy invite
                </button>
            </div>
            <div className="invite-history1">
                <h1>Your invite history</h1>
            </div>
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
                    <div className="LastWeekContent1"> <h2>Last week content</h2></div>
                    <div className="data-row1">
                        <div className="data-cell1">Date</div>
                        <div className="data-cell1">Code</div>
                        <div className="data-cell1">Applications<span className="registered-symbol1">&reg;</span></div>
                        <div className="data-cell1">Activations<span className="registered-symbol11">&reg;</span></div>
                        <div className="data-cell1">Earnings</div>
                    </div>

                </div>

            )}
            {showLast30DaysContent && (
                <div>
                    <div className="Last30Days1"><h2>Last 30 days content</h2></div>
                    <div className="data-row1">
                        <div className="data-cell1">Date</div>
                        <div className="data-cell1">Code</div>
                        <div className="data-cell1">Applications<span className="registered-symbol1">&reg;</span></div>
                        <div className="data-cell1">Activations<span className="registered-symbol11">&reg;</span></div>
                        <div className="data-cell1">Earnings</div>
                    </div>
                </div>
            )}
        </div>
    );
}


export default InviteFriendsPage;
