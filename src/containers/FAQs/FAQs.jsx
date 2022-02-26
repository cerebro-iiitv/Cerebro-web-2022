import React, { useState } from 'react'

import './FAQs.scss';
import faqJson from "./util/faqData.json";

import FaqCardArrow from '../../components/FaqCardArrow/FaqCardArrow';
import FaqScrollBar from '../../components/FaqScrollBar/FaqScrollBar';

const FAQs = () => {
    const [visible, setVisible] = useState(2);

    const loadMore = () => {
        setVisible(visible + 1);
    }
    const loadLess = () => {
        setVisible(visible - 1);
    }

    const changeIndex = (idx) => {
        setVisible(idx);
    }
    return (
        <div className='faq-bg'>
            <div className="main-cont">
                <div className="title-social">

                    <div className="faq-title">
                        <p className="title">FAQ's</p>
                    </div>

                    <div className="faq-social">
                        <p className="social">Can't find the answer you are looking for? <a href="https://discord.gg/QaYWmeBc">Reach out to our team</a> or <a href="https://discord.gg/QaYWmeBc">Join our discord server</a></p>
                    </div>

                </div>
                <div className="card-arrow-cont">
                    <FaqCardArrow dataList={faqJson.faqs} loadMore={loadMore} loadLess={loadLess} visible={visible} />
                </div>

                <div className="faq-scroll-cont">
                    <FaqScrollBar visible={visible} dataList={faqJson.faqs} changeIndex={changeIndex} />
                </div>
            </div>

        </div>
    )
}

export default FAQs;
