import React, {useContext} from 'react'
import { Line } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';

import { AuthContext } from "../../context/authContext.js";
import {makeRequest} from  "../../axios.js"
import {useQuery } from '@tanstack/react-query'
import moment from 'moment';



import "../DashBoard/dashboard.css"
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement);



function DashBoard() {
  
  const {currentUser}= useContext(AuthContext);
  const userId=currentUser.userId;



  const { isLoading, error, data } = useQuery({
    queryKey: ['bookingday', userId],
    queryFn: async () => {
      try {
        const response = await makeRequest.get(`house/getHouseBookingToday/${userId}`);
        
        return response.data.bookingCount;
      } catch (error) {
        throw error;
      }
    },
  });
  
  const data1 = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
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
        data: [65, 59, 80, 81, 56, 55, 40],
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
        isLoading? "0" : data.bookingCount }</h1>
      <p> reservation today</p>
      </div>
      <div className='numberbox'>
        <h1>10</h1>
      <p> reservation this month</p>
      </div>
      <div className='numberbox'>
      <h1>25</h1> <p>reseration this Year</p>
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
        <Booking></Booking>
      </div>
    </div>
      
      </div>



    </div>
  )
} 





export default DashBoard







function Booking() {

  const {currentUser}= useContext(AuthContext);
  const userId=currentUser.userId;

  


  const { isLoading, error, data } = useQuery({
    queryKey: ['info'],
    queryFn: async () => {
      try {
        const response = await makeRequest.get("house/getHouseBooking/"+userId);
        return response.data;
      } catch (error) {
        throw error;
      }
    },
  });



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
