import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];


export default function App(){
  const [showAddFriend,setshowAddFriend]=useState(false);
  const [friends,setFriends]=useState(initialFriends);
  const [selectedFriend,setSelectedFriend]=useState(null);

 function handleAddFriend(friend){
  setFriends((friends)=>[...friends , friend]);
  setshowAddFriend(false);
 } 

 function handleSelection(friend){
  setSelectedFriend((cur)=>cur?.id===friend.id? null: friend);
  setshowAddFriend(false);
 }
 
 return(<div className="app">
    <div className="sidebar">
    <FriendList friends={friends} onSelection={handleSelection} selectedFriend={selectedFriend}/>

    {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend}></FormAddFriend>}

    <Button onClick={()=>setshowAddFriend(!showAddFriend)}>{showAddFriend?'Close':'Add Friend'}</Button>
    </div>
    {selectedFriend &&  <FormSplitBill selectedFriend={selectedFriend} />}
  </div>)
}

function FriendList({friends , onSelection , selectedFriend}){
  
  return <ul>
    {friends.map((friend)=>
    <Friend friend={friend} key={friend.id} onSelection={onSelection} selectedFriend={selectedFriend}></Friend>
    )}
  </ul>
}

function Friend({friend , onSelection , selectedFriend}){
  var  isSelected = selectedFriend?.id === friend.id ;

  return(<li className={isSelected? "selected":""}>
      <img src={friend.image} alt={friend.name}></img>
      <h3>{friend.name}</h3>
      {friend.balance<0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)} euro
        </p>
      )}

{friend.balance>0 && (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)} euro
        </p>
      )}

{friend.balance===0 && (
        <p >
          You and Your {friend.name} are even
        </p>
      )}
      <Button onClick={() => onSelection(friend)}>{isSelected? "Close":"Select"}</Button>
  </li>)
}
function Button({children,onClick}){
  return(<button className="button" onClick={onClick}>{children}</button>)
}

function FormAddFriend({onAddFriend}){
  const [name,setName]=useState("");
  const [image,setImage]=useState("https://i.pravatar.cc/48");
  
  function handleSubmit(e){
    e.preventDefault();
    if(!name || !image) return;
    const id = crypto.randomUUID();
    const newFriend={
      id,
      name,
      image:`${image}?=${id}`,
      balance:0,
    }
    onAddFriend(newFriend);
    setName("");
    setImage("https://i.pravatar.cc/48")
  }
  return(
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>Friend name</label>
      <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}></input>
      <label>Image URL</label>
      <input type="text" value={image} onChange={(e)=>{setImage(e.target.value)}}></input>
      <Button>Add</Button>

    </form>

  )
}

function FormSplitBill({selectedFriend}){

  const [bill,setBill]=useState('');
  const [paidByUser,setPaidByUser]=useState('');
  const [whoIsPaying,setWhoIsPaying]=useState('user');

  return(
<form className="form-split-bill">
<h2>Split a bill with {selectedFriend.name}</h2>

<label>Bill value</label>
<input type="text" value={bill} onChange={(e)=>setBill(e.target.value)}></input>

<label>Your expense</label>
<input type="text" value={paidByUser} onChange={(e)=>setPaidByUser(e.target.value)} ></input>

<label>{selectedFriend.name}'s expense</label>
<input type="text" disabled></input>

<label>Who is paying the bill</label>
<select value={whoIsPaying} onChange={(e)=>setWhoIsPaying(e.target.value)}>
    <option value="user">You</option>
    <option value="friend">{selectedFriend.name}</option>

</select>

<Button>split the bill </Button>
</form>
  
  )
}