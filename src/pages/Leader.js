import {React, useState} from 'react';
import './leader.css';

function Leader(){
    const [isShowing, setisShowing] = useState(false);

    const openModal = () => {
        setisShowing(true);
    };

    const closeModal = () => {
        setisShowing(false);
    };

    return(
        <>
        <div className='leaderBtn'>
            <button type='submit' className='searchBtn' onClick={openModal}>내 아이디 등록하기</button>
        </div>

      


        {isShowing &&
        <div className='modal-wrapper' >
            <div className='modal'>
                <div className='modal-title'>내 아이디 등록하기</div>
                <p className='modalT'>학교 이메일을 입력해주세요.</p>
                <input className='modalB' placeholder='학교이메일'></input>
                <button className='selectB'>인증</button>
                <p className='modalT'>인증번호를 입력해주세요.</p>
                <input className='modalB' placeholder='인증번호'></input>
                <button className='selectB'>확인</button>
                <div className='close-wraper'>
                    <button id='close' onClick={closeModal}>닫기</button>
                </div>
            </div>
        </div>}

        <div className= 'grey'>
        <div className='idList'>
            <table className='leaderTable'>
                <tr>
                    <th>순위</th>
                    <th>아이디</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>조은챈</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>조은챈</td>
                </tr>
            </table>
        </div>
        </div>

        <div className='ldBox'>
            <input className='inputBox' placeholder='소환사 이름을 입력해주세요.'/>
            <button type='submit' className='searchBtn'>검색하기</button>
        </div>
        </>
    );
}

export default Leader;