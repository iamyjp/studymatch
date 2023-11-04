import React from 'react';
import './common.css';
import './member_reg.css';

function Managerpage() {
  return (
    <div className="mainBox">


      <section className="roomInfo">
        <div className="roomBox">
          <p className="textLine">스터디 이름</p>
          <div className="textLine">
            <p>장소</p>
            <div className="textRightLine"></div>
            <p>분류</p>
            <div className="textRightLine"></div>
            <p>스터디 주제</p>
          </div>

          <div className="textLine">
            <p>방장 : 박예진</p>
            <div className="textRightLine"></div>
            <p>개설일 : 23.10.04</p>
            <div className="textRightLine"></div>
            <p>회원수 : 20</p>  
          </div>
        </div>
      </section>

      <div className="addRoom">
        <a href="managerModify" target="_blank">
          스터디 정보수정
        </a>
      </div>

      <section className="memberReg">
        <div className="divBox">
          <div className="container">
            <h2>멤버관리</h2>

            <table className="boardTable" border="1">
              <colgroup>
                <col width="20%" />
                <col width="20%" />
                <col width="20%" />
                <col width="20%" />
                <col width="20%" />
              </colgroup>
              <thead>
                <tr>
                  <th>이름</th>
                  <th>성별</th>
                  <th>스터디출석율</th>
                  <th>직급</th>
                  <th>회원정보(가입정보/퇴장)</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>박예진</td>
                  <td>여</td>
                  <td>100%</td>
                  <td>
                    <select
                      name=""
                      id=""
                      style={{
                        width: '100%',
                        textAlign: 'center',
                      }}
                    >
                      <option value="master" selected>
                        방장
                      </option>
                      <option value="">총무</option>
                      <option value="">그룹원</option>
                    </select>
                  </td>
                  <td className="">
                    <button type="button" value="">
                      정보
                    </button>
                    <button type="button" value="">
                      퇴장
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>박예진</td>
                  <td>여</td>
                  <td>100%</td>
                  <td>
                    <select
                      name=""
                      id=""
                      style={{
                        width: '100%',
                        textAlign: 'center',
                      }}
                    >
                      <option value="master">방장</option>
                      <option value="">총무</option>
                      <option value="" selected>
                        그룹원
                      </option>
                    </select>
                  </td>
                  <td className="">
                    <button type="button" value="">
                      정보
                    </button>
                    <button type="button" value="">
                      퇴장
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>박예진</td>
                  <td>여</td>
                  <td>100%</td>
                  <td>
                    <select
                      name=""
                      id=""
                      style={{
                        width: '100%',
                        textAlign: 'center',
                      }}
                    >
                      <option value="master">방장</option>
                      <option value="">총무</option>
                      <option value="" selected>
                        그룹원
                      </option>
                    </select>
                  </td>
                  <td className="">
                    <button type="button" value="">
                      정보
                    </button>
                    <button type="button" value="">
                      퇴장
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="page">
              <span>
                <a href="#!">←</a>
              </span>
              <span>
                <a href="#!">1</a>
              </span>
              <span>
                <a href="#!">2</a>
              </span>
              <span>
                <a href="#!">→</a>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="roomBody">
        <div className="bodyLeft">
          <div className="divBox">
            <h4 className="textCenter p-10">
              스터디 가입신청
            </h4>

            <div>
              <table className="joinTable">
                <thead>
                  <tr>
                    <th>신청자</th>
                    <th>성별</th>
                    <th>지원서</th>
                    <th>가입승인</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>신짱구</td>
                    <td>남</td>
                    <td>
                      <a href="#">[보기]</a>
                    </td>
                    <td>
                      <a href="#">[승인]</a>&nbsp;
                      <a href="#">[거절]</a>
                    </td>
                  </tr>
                  <tr>
                    <td>봉미선</td>
                    <td>여</td>
                    <td>
                      <a href="#">[보기]</a>
                    </td>
                    <td>
                      <a href="#">[승인]</a>&nbsp;
                      <a href="#">[거절]</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-10 textRight">
            <a href="#" target="_blank">
              <button type="button" value="">
                가입양식
              </button>
            </a>
          </div>
        </div>

        <div className="bodyRight">
          <div className="divBox">
            <h4 className="textCenter p-10">
              스터디 퇴부신청
            </h4>
            <div>
              <table className="goneTable">
                <thead>
                  <tr>
                    <th>신청자</th>
                    <th>성별</th>
                    <th>출석율</th>
                    <th>직급</th>
                    <th>퇴부승인</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>최유리</td>
                    <td>여</td>
                    <td>30%</td>
                    <td>그룹원</td>
                    <td>
                      <a href="#">[승인]</a>&nbsp;
                      <a href="#">[거절]</a>
                    </td>
                  </tr>
                  <tr>
                    <td>김철수</td>
                    <td>남</td>
                    <td>20%</td>
                    <td>그룹원</td>
                    <td>
                      <a href="#">[승인]</a>&nbsp;
                      <a href="#">[거절]</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-10 textRight">
            <a href="#" target="_blank">
              <button type="button" value="">
                방장 변경
              </button>
            </a>
            <a href="#" target="_blank">
              <button type="button" value="">
                그룹 삭제
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Managerpage;
