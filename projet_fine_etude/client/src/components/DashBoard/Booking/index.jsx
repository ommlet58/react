import React, { useContext, useState } from 'react'
import "../Booking/booking.css"
import { AuthContext } from "../../../context/authContext.js";
import axios from 'axios';
import {makeRequest} from  "../../../axios.js"
import {useQuery } from '@tanstack/react-query'
import moment from 'moment';





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


  console.log(data);
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

export default Booking