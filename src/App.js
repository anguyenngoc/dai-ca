import { useEffect, useState } from 'react';
import Fotter from './footer.svg';
import { ListMargin } from './comp/listMargin';
import { Header } from './comp/header';
import { Modal } from './comp/modal';
import './App.css';
import { IntlCurrency, totalInterestRate , InterestRateInDay} from './until';


function App() {
  const [total, setTotal] = useState();
  const [totalInserestRate, setTotalInserestRate] = useState();
  const [listInserst, setList] = useState((JSON.parse(localStorage.getItem('loans'))));
  const handlerList = (val) => {
    setTimeout(() => {
      const a =JSON.parse(localStorage.getItem('loans'));
      setList(a)
    }, 0)
  }

  useEffect(() => {
    if(!localStorage.getItem('index')) {
      localStorage.setItem("index", JSON.stringify(1));
    }
  })


  useEffect(() => {

    const totalR = () => {
     const t = listInserst?.reduce((init, val) => {
           return init += +val.loan;
      }, 0);

      const inserestRate = listInserst?.reduce((init, val) => {
        const l = totalInterestRate(InterestRateInDay(val?.loan), val?.date);
         return init += +l;
    }, 0);

      setTotal(t);
      setTotalInserestRate(inserestRate);
    }
    totalR();
  }, [listInserst]);



  return (
    <>
      <Header />
      <Modal list={handlerList}/>
      <ListMargin listInserst={listInserst}/>
       <div className="container" style={{ marginTop: '10px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src={Fotter} alt="" style={{ width: '50px', height: '40px', marginBottom: '-20px' }} />
          <hr style={{ height: '4px', borderRadius: '10px', width: '100px' }} />
        </div>
        <div className="row align-items-start">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title" style={{fontSize: '12px'}}>Tổng khoản vay</h5>
                {IntlCurrency(total)}
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title" style={{fontSize: '12px'}}>Tổng lãi các khoản vay</h5>
                {IntlCurrency(totalInserestRate)}
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="row align-items-start">
          <div className="col">
            <div className="card">
              <div className="card-body" style={{ textAlign: 'center' }}>
                <h5 className="card-title">Total + Lãi</h5>
                <h1 style={{ color: 'sienna' }}>  {IntlCurrency(total + totalInserestRate)} </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {/* <img src={Fotter} alt="" style={{width: '100%'}}/> */}
      </div>
    </>
  );
}

export default App;
