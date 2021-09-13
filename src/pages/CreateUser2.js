import React from 'react';

function CreateUser2({username, onChange, onCreate}){
    return(
        <div>
           <input name='username'
           placeholder='소환사 이름을 입력해주세요'
           onChange={onChange}
           value={username}
           className='modalB'></input>

           <button className='selectB' onClick={onCreate}>등록</button>
        </div>
    );
}

export default CreateUser2;