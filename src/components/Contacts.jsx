const Contacts = () => {
  const userContacts = [{
    username: 'user1'
  },
  {
    username: 'user2'
  },

]
  const renderContacts = () =>{
   const users = userContacts.map((user, index) =>{
      return <div key={index}>{user.username}</div>
    })
    return users;
  }
  return(
  <div>
    <h1>Contacts</h1>
    {renderContacts()}
    </div>
  )
}

export default Contacts