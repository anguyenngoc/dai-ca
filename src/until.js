export const getNumberOfDays = (start) => {

    const nowDate = new Date();
    const d2 = `${nowDate.getMonth() + 1}/${nowDate.getDate()}/${nowDate.getFullYear()}`;
    const date1 = new Date(start);
    const date2 = new Date(d2);
    // One day in milliseconds
    const oneDay = 1000 * 60 * 60 * 24;
  
    // Calculating the time difference between two dates
    const diffInTime = date2.getTime() - date1.getTime();
  
    // Calculating the no. of days between two dates
    const diffInDays = Math.round(diffInTime / oneDay);
  
    return diffInDays;
  }
  
  
  export const IntlCurrency = (num) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(num) || 0;
  }
  
  export const InterestRateInDay = (total) => {
    const L = total * 0.2;
    const D = L / 365;
    return D;
  }
  
  export  const totalInterestRate = (interestRateOneDay, initDate) => {
    const numDays = getNumberOfDays(initDate);
    console.log('initDate ', initDate);
    console.log('numDays ', numDays);
    console.log('interestRateOneDay ', interestRateOneDay);


    return numDays * interestRateOneDay;
  }
  
  export const TotalPlusInterestRate = (num, insrest) => {
    return num + insrest;
  }
  