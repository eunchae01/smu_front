import React from 'react';

function User({user}){
    return(
        <div className='leaderList'>
            <p className='leaderRank'>{user.id}</p> 
            <p className='leaderId'>{user.username}</p>
           
        </div>
    )
}

function UserList({users}){
   

    return(
        <div>
            {
                users.map(
                    user => (<User user={user} key={user.id}/>)
                )
            }
        </div>
    );
}

export default UserList;