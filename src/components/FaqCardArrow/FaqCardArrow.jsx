import React from "react";

import "./FaqCardArrow.scss";

import { default as ArrowLeft } from "../../assets/images/FAQ/arrow-left.png";
import { default as ArrowRight } from "../../assets/images/FAQ/arrow-right.png";

const FaqCardArrow = ({ dataList, visible, loadMore, loadLess }) => {
    return (
        <div className="faq-card-arrow-cont">
            <div className="arrow-left">
                <img id={visible === 0 ? "disable-on" : ""} onClick={loadLess} src={ArrowLeft} alt="left-arrow" className="left-arrow-img" />
            </div>

            <div className="details-container">
                {
                    dataList.slice(visible, visible + 1).map(data => (

                        <div key={data.id} className={visible === 0 ? "particular-faq first-idx" : "particular-faq"}>
                            <div className="faq-question">
                                <p className="question">
                                    {
                                        data.question
                                    }
                                </p>

                            </div>
                            <div className="faq-answer">
                                {
                                    visible === 0 ?
                                        <div className="start_video">
                                            <iframe src={data.answer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        </div> : <p className="answer">
                                            {
                                                data.answer
                                            }
                                        </p>
                                }
                            </div>
                        </div>


                    ))
                }
            </div>

            <div className="arrow-right">
                <img id={visible === dataList.length - 1 ? "disable-on" : ""} onClick={loadMore} src={ArrowRight} alt="right-arrow" className="right-arrow-img" />
            </div>
        </div>
    )
}

export default FaqCardArrow;