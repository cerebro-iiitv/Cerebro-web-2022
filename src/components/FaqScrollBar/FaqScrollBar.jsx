import React from "react";

import "./FaqScrollBar.scss";
import { default as rightScrollButton } from "../../assets/images/FAQ/right-scroll-button.svg";
import { default as SelectedScrollButton } from "../../assets/images/FAQ/selected-scroll-button.svg";

const FaqScrollBar = ({visible, dataList, changeIndex}) => {
    return (
        <div className="faq-scroll-bar">
            <div className="buttons">
                {
                    dataList.map((data,idx) => (
                        idx === visible ? 
                       <img onClick={() => changeIndex(idx)} src={SelectedScrollButton} alt="selected-scroll-1"/>
                       :
                       <img onClick={() => changeIndex(idx)} src={rightScrollButton} alt="right-scroll-1"/>
                    ))
                }
            </div>
        </div>
    )

}

export default FaqScrollBar;