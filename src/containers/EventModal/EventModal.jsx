import ReactDOM from "react-dom";
import divider from "../../assets/images/EventModal/event-modal-divider.png";
import "./EventModal.scss";

// temp
// const modalData1 =
// {
//     participantName: "Krishna Gaur", //
//     participantEmail: "mad@123.com",//
//     eventName: "Valorant",//
//     startDate: "10-03-2022",//
//     startTime: "2:00PM",//
//     endDate: "10-03-2022",//
//     endTime: "2:00PM",//
//     isTeamEvent: true,//
//     noMembersInTeam: "2",//
//     teamMaxCapacity: "3",//
//     teamName: "ValoXD",//
//     teamCode: "CSGO#50333",
//     isTeamFull: false,//
//     team_captain: "gaurkrishna498@gmail.com",
//     teamMember: [ //
//         {
//             first_name: "Krishna",
//             last_name: "Gaur",
//             email: "gaurkrishna498@gmail.com",
//             registration_data: {
//                 steam_id: 1,
//                 ign: "Paradox@123"
//             }
//         },
//         {
//             first_name: "Raghu Raj",
//             last_name: "Sodani",
//             email: "201951118@iiitvadodara.ac.in",
//             registration_data: {
//                 steam_id: 2,
//                 ign: "Smoke@123"
//             }
//         },
//         {
//             first_name: "Akshat",
//             last_name: "Dobriyal",
//             email: "201951118@iiitvadodara.ac.in",
//             registration_data: {
//                 steam_id: 2,
//                 ign: "Smoke@123"
//             }
//         }
//     ]
// }

// const modalData2 = {
//     participantName: "Krishna Gaur",
//     participantEmail: "mad@123.com",
//     eventName: "VALORANT",
//     startDate: "10-03-2022",
//     startTime: "2:00PM",
//     endDate: "10-03-2022",
//     endTime: "2:00PM",
//     isTeamEvent: false,
//     registrationData: {
//         steam_id: 1,
//         ign: "Paradox@123"
//     }
// }

const ModalOverlay = ({ setShowModal, modalData }) => {
    // Transforming given user data to appropriately formatted data object
    const currentPartiName = modalData.participantName;
    const currentPartiEmail = modalData.participantEmail;
    let otherTeamMembers = [];
    let participantDetailsObj = { "Name": currentPartiName, "Email": currentPartiEmail };
    if (!modalData.isTeamEvent) {
        for (let i in modalData.registrationData) {
            participantDetailsObj[i.toUpperCase()] = modalData.registrationData[i];
        }
    }
    if (modalData.isTeamEvent) {
        participantDetailsObj = {
            "Team Name": modalData.teamName,
            "Team Code": modalData.teamCode,
            ...participantDetailsObj
        }
        for (let i of modalData.teamMember) {
            if ((i.first_name + " " + i.last_name) === currentPartiName) {
                for (let j in i["registration_data"]) {
                    participantDetailsObj[j.toUpperCase()] = i["registration_data"][j];
                }
                participantDetailsObj["Team Size"] = modalData.noMembersInTeam;
            }
            else {
                otherTeamMembers.push(i.first_name + " " + i.last_name);
                otherTeamMembers.push(i.email);
            }
        }
        participantDetailsObj["Other Team Members"] = otherTeamMembers;
    }

    const getPartiValueJSX = (detailKey, detailVal) => {
        if (detailKey === "Other Team Members") {
            return <div className="event-modal__content__part-details__detail-value">{detailVal.map((i) => (
                <div key={i}>
                    {i}
                </div>
            ))}</div>
        }
        return <div className="event-modal__content__part-details__detail-value">{detailVal}</div>
    }

    // participant details JSX
    let participantDetailsComponents = [];
    for (let i in participantDetailsObj) {
        participantDetailsComponents.push(
            <div className="event-modal__content__part-details__detail" key={i}>
                <div className="event-modal__content__part-details__detail-key">
                    {i + ":"}
                </div>
                {
                    getPartiValueJSX(i, participantDetailsObj[i])
                }
            </div>
        )
    }

    // registration JSX
    const registrationVal = modalData.isTeamFull ?
        <div className="event-modal__content__registration__value-complete">Completed</div> :
        <div className="event-modal__content__registration__value-incomplete">
            <span className="event-modal__content__registration__value-incomplete__text">Incomplete</span>
            <span className="event-modal__content__registration__value-incomplete__remaining">
                {`(${modalData.teamMaxCapacity - modalData.noMembersInTeam} remaining)`}
            </span>
        </div>;

    const hideModal = () => {
        setShowModal(false);
    }
    return (
        <div className="event-modal__backdrop" onClick={hideModal}>
            <div className="event-modal"
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <h1 className="event-modal__title">{modalData.eventName.toUpperCase()}</h1>
                <div className="event-modal__content">
                    <div className="event-modal__content__schedule">
                        <h3 className="event-modal__content__schedule__key">Schedule:</h3>
                        <div className="event-modal__content__schedule__value">
                            <div className="event-modal__content__schedule__value__start">
                                <span className="event-modal__content__schedule__value__date">{modalData.startDate}
                                </span>
                                <span className="event-modal__content__schedule__value__time">
                                    {` (${modalData.startTime}) `}
                                </span>
                                <span>
                                    to
                                </span>
                            </div>
                            <div className="event-modal__content__schedule__value__end">
                                <span className="event-modal__content__schedule__value__date">{modalData.endDate}
                                </span>
                                <span className="event-modal__content__schedule__value__time">
                                    {` (${modalData.startTime})`}
                                </span>
                            </div>
                        </div>
                    </div>

                    {
                        modalData.isTeamEvent &&
                        <div className="event-modal__content__registration">
                            <h3 className="event-modal__content__registration__key">Registration Status:</h3>
                            <div className="event-modal__content__registration__value">
                                {registrationVal}
                            </div>
                        </div>
                    }
                    <div className="event-modal__content__divider">
                        <img src={divider} alt="divider" />
                    </div>
                    <div className="event-modal__content__part-details">
                        {participantDetailsComponents}
                    </div>
                </div>
                <button
                    className="event-modal__button"
                    onClick={hideModal}
                >
                    Back to Dashboard
                </button>
            </div>
        </div>
    );
}

const EventModal = ({ setShowModal, modalData }) => {
    return (
        <>
            {ReactDOM.createPortal(
                <ModalOverlay setShowModal={setShowModal} modalData={modalData} />,
                document.getElementById("event-modal__root")
            )}
        </>
    );
};

export default EventModal;
