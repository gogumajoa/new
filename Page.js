import Star from "./Star"
import "./Page.css";
import {useState} from 'react';

export default function Page(){
    const [comment, setcomment]=useState("");
    const [ inputStatus, setInputStatus ] = useState('')

    const handleClickRadioButton = (radioBtnName) => {setInputStatus(radioBtnName)}
    //https://taehoblog.netlify.app/react/radiobutton/   라디오 버튼 소스코드 참고하시면 될것같아요

    return(
        <main>
        //검색창 윗부분은 세진이 코드 긁어오기..?
        <div className="top"> 
            <div className="img">
                <img src='/img/img1.PNG'></img>
            </div>
            <div className="section2">
                <span className="style">제목</span>
                <br/>
                <span className="style">작가</span>
                <br/>
                <span className="style">장르</span>
                <br/>
                <span className="style">연재</span>
                <br/>
                <span className="style">작품소개</span>
                <br/>
                <div className="Star">
                    <label>별점</label>
                    <Star/>
                    <label className="s1">별점주기</label>
                    <Star/>
                    <button className="OK">확인</button>
                 </div>
            </div>
            </div>
           

        <div className="bottom">
        <label className="comment">댓글</label>
        <br></br>
                <input
                            type='text' 
                            placeholder='댓글을 입력하세요'
                            className='input_comment' 
                            value={comment}
                            onChange={(e) => {
                                setcomment(e.target.value); //Id
                              }}
                            />
                <button className="click_comment">등록</button>
            

       <div className="radio">
        <input
        type='radio' 
        id='radio' 
        checked={inputStatus === 'radio'} 
        onClick={() => handleClickRadioButton('radio')} />
        <label htmlFor='radio'>BEST 댓글</label>

        <input
        type='radio' 
        id='radio1' 
        checked={inputStatus === 'radio1'} 
        onClick={() => handleClickRadioButton('radio1')} />
        <label htmlFor='radio1'>최신순</label>
        </div> 

        </div>

        </main>
    )

}