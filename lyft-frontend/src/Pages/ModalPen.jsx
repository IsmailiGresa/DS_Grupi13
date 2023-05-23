import React from "react";
import "./ModalPen.css";
import axios from "axios";

function ModalPen({ setOpenModal4 }) {
  const [name, setName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Prepare the data object to be sent to the server
    const data = {
      name, lastname, email, phone
    };
    // Make a PUT request to update user information
    axios.put('/api/users', data)
      .then(response => {
        console.log('User information updated successfully');
      })
      .catch(error => {
        console.error(error);
      });
      
  return (
    <div className="backgro">
      <div className="modalContain">
        <div className="CloseBtn">
          <button className="close"
            onClick={() => {
              setOpenModal4(false);
            }}
          >
            x
          </button>
        </div>
        <div className="title">
          Edit account information
        </div>
        <div className="accinfo" onSubmit={handleSubmit}>
        <div className="information">
          <div className="info">
            <div className="inf">
            <input type="text" id="name" placeholder="Enter your name..." 
            value={name} onChange={e => setName(e.target.value)} ></input>
            </div>
            <input type="text" id="surname" placeholder="Enter your lastname..." 
            value={lastname} onChange={e => setLastName(e.target.value)} ></input>
          </div>
          <div className="info1">
            <input type="email" id="email" placeholder="Enter your email address..." 
            value={email} onChange={e => setEmail(e.target.value)} ></input>
            </div>
        </div>
        <div className="pronoun">
          <h6>Pronouns</h6>
          <a>Select your pronouns - we'll do our best using them when adressing you!</a>
          <div className="pronouns">
            <div className="hepro">
            <input type="radio" name="pronoun" value="he" id="he" /> 
            <label htmlFor="he">They/Them</label><br />
            </div>
            <div className="shepro">
            <input type="radio" name="pronoun" value="she" id="she" /> 
            <label htmlFor="she">She/Her</label><br />
            </div>
            <div className="theypro">
            <input type="radio" name="pronoun" value="they" id="they" /> 
            <label htmlFor="they">He/Him</label><br />
            </div>
            <div className="otherpro">
            <input type="radio" name="pronoun" value="other" id="other" /> 
            <label htmlFor="other">My pronouns aren't listed</label>
            </div>
            <div className="introv">
            <input type="radio" name="pronoun" value="other" id="other" /> 
            <label htmlFor="other">Prefer not to say</label>
            </div>
          </div>
        </div>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal4(false);
            }}
            id="cancBtn"
          >
            Cancel
          </button>
          <button>Update</button>
        </div>
      </div>
    </div>
  );
}
export default ModalPen;