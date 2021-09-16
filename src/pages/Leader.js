import { React, useState, useRef } from "react";
import CreateUser from "./CreateUser";
import CreateUser2 from "./CreateUser2";
import "./leader.css";
import UserList from "./UserList";
import styled from "styled-components";
const Modal = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
`;

const CloseModal = styled.button`
  margin: 30px;
  width: 50px;
  height: 40px;
  background-color: skyblue;
  font-size: 18px;
  font-weight: bold;
  border-radius: 10px;
  border: none;
  background-color: #008cba;
  color: white;
`;

function Leader() {
  const [isShowing, setisShowing] = useState(false);
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "알콩이",
    },
  ]);
  const openModal = () => {
    setisShowing(true);
  };

  const closeModal = () => {
    console.log("11");
    setisShowing(false);
  };

  const [inputs, setInputs] = useState({
    username: "",
  });
  const { username } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const nextId = useRef(2);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
    };
    setUsers([...users, user]);
    setInputs({
      username: "",
    });
    console.log(nextId.current);
    nextId.current += 1;
  };

  return (
    <>
      <div className="leaderBtn">
        <button type="submit" className="searchBtn" onClick={openModal}>
          내 아이디 등록하기
        </button>
      </div>

      {isShowing && (
        <div className="modal-wrapper">
          <Modal>
            <div className="modal-title">내 아이디 등록하기</div>
            <div>
              <p className="modalT">학교 이메일을 입력해주세요.</p>
              <input className="modalB" placeholder="학교이메일" />
              <button className="selectB">인증</button>
            </div>
            <div>
              <p className="modalT">인증번호를 입력해주세요.</p>
              <input className="modalB" placeholder="인증번호"></input>
              <button className="selectB">확인</button>
            </div>

            <p className="modalT">소환사이름을 입력해주세요.</p>
            <CreateUser2
              username={username}
              onChange={onChange}
              onCreate={onCreate}
            />
            <div>
              <CloseModal onClick={closeModal}>닫기</CloseModal>
            </div>
          </Modal>
        </div>
      )}

      <div className="grey">
        <div className="idList">
          <table className="leaderTable">
            <tr>
              <th>순위</th>
              <th>아이디</th>
            </tr>
          </table>
          <div>
            <UserList users={users}></UserList>
          </div>
        </div>
      </div>
    </>
  );
}

export default Leader;
