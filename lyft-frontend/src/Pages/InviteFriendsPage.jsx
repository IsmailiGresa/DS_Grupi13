import React, { useState } from 'react';
import axios from 'axios';
import './inviteFriends.css';

function InviteFriendsPage() {
    const [selectedTimeRange, setSelectedTimeRange] = useState('lastWeek1');
    const [showLastWeekContent, setShowLastWeekContent] = useState(false);
    const [showLast30DaysContent, setShowLast30DaysContent] = useState(false);
    const [inviteCodeValue, setInviteCodeValue] = useState(generateInviteCode()); // Generate random invite code

    const handleCopyInviteCode = () => {
        const copyText = document.getElementById('invite-code1');
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand('copy');

        // Send data to the backend
        axios
            .post('/api/invite-history', {
                code: copyText.value,
                date: new Date(),
                applications: 0,
                activations: 0,
                earnings: 0,
            })
            .then((response) => {
                // Success
                console.log(response.data);
            })
            .catch((error) => {
                // Error while sending data
                console.error(error);
            });

        alert('Copied the text: ' + copyText.value);
    };

    const generateInviteCode = () => {
        // Generate and return the invite code
        // Replace this with your own implementation
        return 'ABC123';
    };

    const handleTimeRangeChange = (timeRange) => {
        setSelectedTimeRange(timeRange);
    };

    return (
        <div className="invite-friends-page1">
            <h1 className="HE11">Refer a friend to Lyft and get ride credit</h1>
            <h3 className="HE33">Earn Lyft ride credit when you refer a friend in your area.</h3>
            <form className="invite-code1">
                <label htmlFor="invite-code1">Your invite code</label>
                <input type="text" id="invite-code1" value={inviteCodeValue} readOnly />

                <button className="button1" onClick={handleCopyInviteCode}>
                    Copy invite
                </button>
            </form>

            <h1 className="invite-historyy">Your invite history</h1>

            <div className="time-range-switch1">
                <button
                    onClick={() => {
                        handleTimeRangeChange('lastWeek1');
                        setShowLastWeekContent(true);
                        setShowLast30DaysContent(false);
                    }}
                    className={selectedTimeRange === 'lastWeek1' ? 'active' : ''}
                >
                    Last week
                </button>
                <button
                    onClick={() => {
                        handleTimeRangeChange('last30Days1');
                        setShowLastWeekContent(false);
                        setShowLast30DaysContent(true);
                    }}
                    className={selectedTimeRange === 'last30Days1' ? 'active' : ''}
                >
                    Last 30 days
                </button>
            </div>

            {showLastWeekContent && (
                <div>
                    <div className="LastWeekContent1">
                        <h2>Last week content</h2>
                    </div>
                    <div className="data-row1">
                        <div className="data-cell1">Date</div>
                        <div className="data-cell1">Code</div>
                        <div className="data-cell1">
                            Applications<span className="registered-symbol1">&reg;</span>
                        </div>
                        <div className="data-cell1">
                            Activations<span className="registered-symbol11">&reg;</span>
                        </div>
                        <div className="data-cell1">Earnings</div>
                    </div>
                </div>
            )}

            {showLast30DaysContent && (
                <div>
                    <div className="Last30Days1">
                        <h2>Last 30 days content</h2>
                    </div>
                    <div className="data-row1">
                        <div className="data-cell1">Date</div>
                        <div className="data-cell1">Code</div>
                        <div className="data-cell1">
                            Applications<span className="registered-symbol1">&reg;</span>
                        </div>
                        <div className="data-cell1">
                            Activations<span className="registered-symbol11">&reg;</span>
                        </div>
                        <div className="data-cell1">Earnings</div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default InviteFriendsPage;
