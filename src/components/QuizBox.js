import React, {useState} from 'react';
import { connect } from 'react-redux';
import { decreaseChecked, increaseChecked, changeElement, decreaseRiskCnt, increaseRiskCnt } from '../actions';
import questions from '../data/Data';
import questionImg from '../assets/img/question-mark/question-mark.png';
import checkImg from '../assets/img/checkbutton/btn_check_on-b.png'
import '../css/QuizBox.css';
import './CautionDlg'
import CautionDlg from './CautionDlg';
import axios from "../config/axios"; 
import FixedComponent from './FixedCom';

const total_quiz_count = 72;

const QuizBox = ({ quizState, countState, riskState, dispatch }) => {

    const [isCheckedOne, onCheckedOne] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    
    // const handleShowAlert = () => {
    //   setShowAlert(true);
    // };
  
    const handleCloseAlert = () => {
      setShowAlert(false);
    };
    const optionClickOne = (question) => {
        if(question.option[1].isChecked){
            question.option[1].isChecked = (!question.option[1].isChecked);
            dispatch(decreaseChecked());

        }
        if(question.option[2].isChecked){
            question.option[2].isChecked = (!question.option[2].isChecked);
            dispatch(decreaseChecked());

        }
        if(question.option[3].isChecked){
            question.option[3].isChecked = (!question.option[3].isChecked);
            dispatch(decreaseChecked());

        }
        question.option[0].isChecked = (!question.option[0].isChecked);
        if (question.option[0].isChecked) {
            dispatch(changeElement(question.no, question.option[0].catagory_id));
            dispatch(increaseChecked());
        }else{
            dispatch(decreaseChecked());
        }
        onCheckedOne(!isCheckedOne);

    }
    const optionClickTwo = (question) => {
        if(question.option[0].isChecked){
            question.option[0].isChecked = (!question.option[0].isChecked);
            dispatch(decreaseChecked(1));

        }
        if(question.option[2].isChecked){
            question.option[2].isChecked = (!question.option[2].isChecked);
            dispatch(decreaseChecked());

        }
        if(question.option[3].isChecked){
            question.option[3].isChecked = (!question.option[3].isChecked);
            dispatch(decreaseChecked());

        }
        question.option[1].isChecked = (!question.option[1].isChecked);
        if (question.option[1].isChecked) {
            dispatch(changeElement(question.no, question.option[1].catagory_id));
            dispatch(increaseChecked());
        }else{
            dispatch(decreaseChecked());
        }
        onCheckedOne(!isCheckedOne);


    }
    const optionClickThree = (question) => {
        if(question.option[1].isChecked){
            question.option[1].isChecked = (!question.option[1].isChecked);
            dispatch(decreaseChecked());
        }
        if(question.option[0].isChecked){
            question.option[0].isChecked = (!question.option[0].isChecked);
            dispatch(decreaseChecked());
        }
        if(question.option[3].isChecked){
            question.option[3].isChecked = (!question.option[3].isChecked);
            dispatch(decreaseChecked());
            dispatch(decreaseRiskCnt());
        }
        question.option[2].isChecked = (!question.option[2].isChecked);
        if (question.option[2].isChecked) {
            dispatch(changeElement(question.no, question.option[2].catagory_id));
            dispatch(increaseChecked());
            dispatch(increaseRiskCnt());
        }else{
            dispatch(decreaseChecked());
            dispatch(decreaseRiskCnt());
        }
        onCheckedOne(!isCheckedOne);

    }
    const optionClickFour = (question) => {
        if(question.option[1].isChecked){
            question.option[1].isChecked = (!question.option[1].isChecked);
            dispatch(decreaseChecked());
        }
        if(question.option[2].isChecked){
            question.option[2].isChecked = (!question.option[2].isChecked);
            dispatch(decreaseChecked());
        }
        if(question.option[0].isChecked){
            question.option[0].isChecked = (!question.option[3].isChecked);
            dispatch(decreaseChecked());
        }
        question.option[3].isChecked = (!question.option[3].isChecked);
        if (question.option[3].isChecked) {
            dispatch(changeElement(question.no, question.option[3].catagory_id));
            dispatch(increaseChecked());
            dispatch(increaseRiskCnt());
        }else{
            dispatch(decreaseChecked());
            dispatch(decreaseRiskCnt());
        }
        onCheckedOne(!isCheckedOne);
    }
    const onSubmit = () => {
        if(riskState > 2 ){
            alert("You will get hazy result if you check many higher/lower options");
            return;
        }
        if(countState < total_quiz_count ){
            alert("You should check 72 options");
            return;
        }
        axios.post('v1/auth/submit', { accessToken: axios.defaults.headers.common.Authorization, data: quizState })
			.then(res => {
				//alert(res.data.tokens.access.token)
				//console.log(res);
				//window.location.reload();
                alert(res.data);
			}).catch(err => {
				console.log(err);
			});

    }
    return (
        <div className='quiz-box'>
            <ul className='quiz-sub-box'>
                {
                    questions.map((question) => {
                        return (
                            <div className='quiz-item'>
                                <h6>quizCount: {countState}</h6>
                                <div className='quiz-item-main'>
                                    <h3>
                                        <img src={questionImg} width="50px" height="50px" alt="Q."></img>
                                        {question.no + 1}: {question.quiz}
                                    </h3>
                                </div>
                                {
                                    <>
                                        {/* Option 1: */}
                                        <div onClick={() => optionClickOne(question)} key={question.option.id}>
                                            <div className='quiz-item-option-a'>
                                                {question.option[0].text}
                                                {
                                                    question.option[0].isChecked &&
                                                    <img src={checkImg} width="40px" height="40px" alt="img2" />
                                                }
                                            </div>
                                        </div>

                                        {/* Option 2: */}
                                        <div onClick={() => optionClickTwo(question)} key={question.option.id}>
                                            <div className='quiz-item-option-a'>
                                                {question.option[1].text}
                                                {
                                                    question.option[1].isChecked &&
                                                    <img src={checkImg} width="40px" height="40px" alt="img2" />
                                                }
                                            </div>
                                        </div>
                                        {/* Option 3:*/}
                                        <div onClick={() => optionClickThree(question)} key={question.option.id}>
                                            <div className='quiz-item-option-b'>
                                                {question.option[2].text}
                                                {
                                                    question.option[2].isChecked &&
                                                    <img src= {checkImg} width="20px" height="20px" alt="img2" />
                                                }
                                            </div>
                                        </div>
                                        {/* Option 3:*/}
                                        <div onClick={() => optionClickFour(question)} key={question.option.id}>
                                            <div className='quiz-item-option-b'>
                                                {question.option[3].text}
                                                {
                                                    question.option[3].isChecked &&
                                                    <img src={checkImg} width="20px" height="20px" alt="img2" />
                                                }
                                            </div>
                                        </div>
                                        {
                                           (countState === total_quiz_count) &&
                                            <FixedComponent callbackResultView={onSubmit} />
                                        }
                                    </>

                                }
                            </div>
                        );
                    })
                }
            </ul>
            {
                (riskState > 2) &&
                <CautionDlg 
                    isOpen={true}
                    message="You exceeds lower/higher check limit"
                    onClose={handleCloseAlert}
                />
            }
        </div>
    );
};

const mapStateToProps = (state) => ({
    riskState: state.riskState,
    countState: state.countState,
    quizState: state.quizState

});

export default connect(mapStateToProps)(QuizBox);