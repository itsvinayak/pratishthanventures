import React from "react";
import Counter from "./counter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import getRandomNumber from "@/utils/randomNumder";


const counterStyling = {
    backgroundColor: "#f5f5f5",
    padding: "20px 0",
    borderRadius: "5px",
    height: "100%",
    width: "100%"
};

const counterTextStyling = {
    fontSize: "0.8rem",
    fontWeight: "bold",
    marginTop: "10px",
    marginBottom: 0,
    marginLeft: "10px",
    marginRight: "10px",
    textAlign: "center"
};

const counterIconStyling = {
    margin: "0 auto",
    float: "none",
    fontSize: "40px",
    display: "table",
    color: "#FF5E00"
};

const counterNumberStyling = {
    fontSize: "2rem",
    fontWeight: "bold",
    marginTop: "10px",
    marginBottom: 0,
    marginLeft: "10px",
    marginRight: "10px",
    textAlign: "center"
};



const DisplayCounter = (props: { items: any[] }) => {
    return (
        <div className="container">
            <br /><br />
            <div className="row text-center">
                {props.items.map((item, index) => {
                    return (
                        <div className="col p-3" key={index}>
                            <div style={counterStyling} >
                                <FontAwesomeIcon
                                    icon={item.icon}
                                    className={` fa ${item.iconClass}`}
                                    style={counterIconStyling}>
                                </FontAwesomeIcon>
                                <Counter data={{ startNum: 0, endNum: item.itemNumber, delay: getRandomNumber(1, 6), duration: getRandomNumber(1, 5) }} styles={counterNumberStyling}  />
                                <p style={counterTextStyling}>{item.text}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};


export default DisplayCounter;