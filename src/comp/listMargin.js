import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { getNumberOfDays, IntlCurrency, totalInterestRate, InterestRateInDay } from '../until';
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

// import Swiper core and required modules
import SwiperCore, {
  Pagination, Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export const ListMargin = ({ listInserst }) => {

  if (!listInserst) {
    return null;
  }

  const handelerClearData = (key) => {
    let data = JSON.parse(localStorage.getItem("loans")) || null;
    let newData  = data?.filter(val => val.index !== key);
    if(newData.length === 0 ) {
      newData = null;
    }
    localStorage.setItem("loans", JSON.stringify(newData));
    window.location.reload();
  }

  return (
    <>
      <Swiper pagination={{
        "type": "fraction"
      }} navigation={true} className="mySwiper">

        {listInserst?.map((val, index) => <SwiperSlide key={index}>
          <div style={{ position: 'absolute', top: '0px', left: '50px', fontWeight: 'bold', fontSize: '12px' }}>
            ngày {val?.date}
          </div>
          <div style={{ color: 'chocolate', width: '80%' }}>
            <div style={{ display: 'flex', width: '100%', justifyContent: 'end' }}>
              <span style={{ color: 'crimson', fontWeight: '500', fontSize: '16px', borderRadius: '4px', padding: '1px', border: '1px solid' }}
              onClick={() => handelerClearData(val?.index)}
              >HỦY BỎ
              </span>
            </div>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              <div style={{ paddingRight: '10px', color: 'gray' }}>
                Lãi:
              </div>
              <div>
                20%/năm
              </div>
            </div>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              <div style={{ paddingRight: '10px', color: 'gray' }}>
                Số ngày:
              </div>
              <div>
                {getNumberOfDays(val?.date)}
              </div>
            </div>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              <div style={{ paddingRight: '10px', color: 'gray' }}>
                Tổng:
              </div>
              <div>
                {IntlCurrency(val?.loan)}
              </div>
            </div>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              <div style={{ paddingRight: '10px', color: 'gray' }}>
                Lãi
              </div>
              <div>
                {IntlCurrency(totalInterestRate(InterestRateInDay(val?.loan), val?.date))}
              </div>
            </div>
          </div>
        </SwiperSlide>
        )}
      </Swiper>
    </>
  )
}
