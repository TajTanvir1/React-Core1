export default function Friend({friend}){
   const {name, email} = friend;

  
   return(
   <div style={{border: '2px solid skyblue'}}>
      <h3>Name: {friend.name} </h3>
      <p>Email: {friend.email} </p>
   </div>
   )
}