import React from "react";
import "./close_account.css";

function CloseAccount(props) {
  // console.log(props.setAccountclose)
  return (
    <div className="formbold-main-wrapper">
      <div className="formbold-form-wrapper">
        <form>

        <div className="formbold-form-header">
            <div className="formbold-steps">
                <ul>
                    <li className="formbold-step-menu1 active">
                        Close Account
                    </li>
                </ul>
            </div>
            <button className="formbold-button" onClick={()=>props.closeAccount()}><img width="32" height="32" src="https://img.icons8.com/windows/32/multiply.png" alt="multiply"/></button>
        </div>


          <div className="formbold-input-flex">
            <div>
              <label htmlFor="email" className="formbold-form-label">
                {" "}
                Email{" "}
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="jhon@mail.com"
                className="formbold-form-input"
              />
            </div>
          </div>

          <div className="formbold-input-radio-wrapper">
            <label htmlFor="jobtitle" className="formbold-form-label">
              {" "}
              Want to file UAR{" "}
            </label>

            <div className="formbold-radio-flex">
              <div className="formbold-radio-group">
                <label className="formbold-radio-label">
                  <input
                    className="formbold-input-radio"
                    type="radio"
                    name="jobtitle"
                    id="jobtitle"
                  />
                  Yes
                  <span className="formbold-radio-checkmark"></span>
                </label>
              </div>

              <div className="formbold-radio-group">
                <label className="formbold-radio-label">
                  <input
                    className="formbold-input-radio"
                    type="radio"
                    name="jobtitle"
                    id="jobtitle"
                  />
                  No
                  <span className="formbold-radio-checkmark"></span>
                </label>
              </div>
            </div>
          </div>

          <div className="formbold-input-flex">
            
            <div>
              <label htmlFor="reason" className="formbold-form-label">
                {" "}
                Reason{" "}
              </label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Reason"
                className="formbold-form-input"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="formbold-form-label">
              {" "}
              Note{" "}
            </label>
            <textarea
              rows="3"
              name="message"
              id="message"
              placeholder="Type your message"
              className="formbold-form-input"
            ></textarea>
          </div>

        <div className="formbold-checkbox-flex">
        <div className="formbold-checkbox-wrapper">
        <label htmlFor="supportCheckbox" className="formbold-checkbox-label">
          <div className="formbold-relative">
            <input
              type="checkbox"
              id="supportCheckbox"
              className="formbold-input-checkbox"
            />
            <div className="formbold-checkbox-inner">
              <span className="formbold-opacity-0">
                <svg
                  width="11"
                  height="8"
                  viewBox="0 0 11 8"
                  className="formbold-stroke-current"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.81868 0.688604L4.16688 5.4878L2.05598 3.29507C1.70417 2.92271 1.1569 2.96409 0.805082 3.29507C0.453266 3.66742 0.492357 4.24663 0.805082 4.61898L3.30689 7.18407C3.54143 7.43231 3.85416 7.55642 4.16688 7.55642C4.47961 7.55642 4.79233 7.43231 5.02688 7.18407L10.0696 2.05389C10.4214 1.68154 10.4214 1.10233 10.0696 0.729976C9.71776 0.357624 9.17049 0.357625 8.81868 0.688604Z"
                    fill="white"
                  />
                </svg>
              </span>
            </div>
          </div>
          Charge clsoure fee
        </label>
      </div>

      <button className="formbold-btn">Close Account</button>
        </div>

        </form>
      </div>
    </div>
  );
}

export default CloseAccount;
