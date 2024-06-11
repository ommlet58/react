import React, {useContext , useRef } from 'react'
import { Line } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';

import { AuthContext } from "../../context/authContext.js";
import {makeRequest} from  "../../axios.js"
import {useQuery } from '@tanstack/react-query'
import moment from 'moment';

import QRCode from "react-qr-code";
import ReactToPrint from 'react-to-print';

import "../DashBoard/dashboard.css"
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement);



function DashBoard() {
  
  const {currentUser}= useContext(AuthContext);
  const userId=currentUser.userId;
  const componentRef = useRef();

  
  const fetchBookingMonth = async (userId) => {
    const response = await makeRequest.get(`house/getHouseBookingmonth/${userId}`);
    return response.data.monthCount;
  };
  const fetchBookingDay = async (userId) => {
    const response = await makeRequest.get(`house/getHouseBookingToday/${userId}`);
    return response.data.bookingCount;
  };
  const fetchBookingYear = async (userId) => {
    const response = await makeRequest.get(`house/getHouseBookingYear/${userId}`);
    return response.data.bookingCount;
  };
  const fetchHouseBooking = async (userId) => {
    const response = await makeRequest.get(`house/getHouseBooking/${userId}`);
    return response.data;
  };

  

const { isLoading: monthLoading, error: monthError, data: monthCount } = useQuery({
  queryKey: ['bookingMonth', userId],
  queryFn: () => fetchBookingMonth(userId),
});


const { isLoading: dayLoading, error: dayError, data: dayCount } = useQuery({
  queryKey: ['bookingDay', userId],
  queryFn: () => fetchBookingDay(userId),
});

const { isLoading: yearLoading, error: yearError, data: yearCount } = useQuery({
  queryKey: ['bookingYear', userId],
  queryFn: () => fetchBookingYear(userId),
});

const { isLoading: bookingLoading, error: bookingError, data: bookingInfo } = useQuery({
  queryKey: ['bookinginfo', userId],
  queryFn: () => fetchHouseBooking(userId),
});


const countCheckInsByMonth = (bookings) => {
  const monthlyCounts = Array(12).fill(0); // Initialize an array with 12 zeros for each month

  bookings.forEach((booking) => {
    const checkInDate = new Date(booking.checkIn);
    const month = checkInDate.getMonth(); // getMonth() returns 0-11
    monthlyCounts[month]++;
  });

  return monthlyCounts;
};

let checkInCounts;
if(!bookingLoading){
   checkInCounts = countCheckInsByMonth(bookingInfo);
  
}



  const data1 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: '# of Votes',
        data: checkInCounts ? checkInCounts :[12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options1 = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Reservation per month',
      },
    },
  };

  const data2 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Reservation per month',
        data: checkInCounts ? checkInCounts :[12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: '',
      },
    },
  };
 

  return (
    <div>
      <div className='dashb'>

      
      <div className='numbers'>
      <div className='numberbox'>
        
      <h1>{
       dayLoading ?  "0" : dayCount ? dayCount: "0"  }</h1>
      <p> reservation today</p>
      </div>
      <div className='numberbox'>
        <h1>{monthLoading ? "0" : monthCount ? monthCount : "0"}</h1>
      <p> reservation this month</p>
      </div>
      <div className='numberbox'>
      <h1>{yearLoading ? "0" : yearCount ? yearCount : "0"}</h1> <p>reseration this Year</p>
      </div>
      <div className="numberbox" ref={componentRef}>
      <ReactToPrint
        trigger={() => 
          <QRCode
    size={256}
    style={{ height: "auto", maxWidth: "100%", width: "100%" , cursor:"pointer" }}
    value="youtube"
    viewBox={`0 0 256 256`}
  />
        }
        content={() => componentRef.current}
      />
      
      </div>
      </div>
    <div>
      
      <div className='charts'>
        <div className='lineShart'>
        <Line data={data2} options={options} />
        </div>
        <div className='lineShart'>
        <Bar data={data1} options={options1} />
        </div>
      </div>
     
      <div>
        <Booking isLoading={bookingLoading} error={bookingError} data={bookingInfo}></Booking>
      </div>
    </div>
      
      </div>
      


    </div>
  )
} 





export default DashBoard







function Booking({isLoading, data , error}) {


  






  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!Array.isArray(data)) {
    return <div>No booking data available.</div>; // Handle case where data is not an array
  }
      return (
        <div className="booking">
          <h2>Guest List</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Check-In</th>
                <th>Check-Out</th>
              </tr>
            </thead>
            <tbody>
            
              {data.map((guest) => (
                <tr key={guest.bookingId}>
                  <td>{guest.Bname}</td>
                  <td>{guest.BEmail}</td>
                  <td>{guest.BPhoneNumber}</td>
                  
                  <td>{moment(guest.CheckIn).format('YYYY-MM-DD')}</td>
              <td>{moment(guest.CheckOut).format('YYYY-MM-DD')}</td>


                </tr>
              ))}
            
            </tbody>
          </table>
        </div>
      );
}
