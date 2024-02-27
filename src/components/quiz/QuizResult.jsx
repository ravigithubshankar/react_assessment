import React from "react"
import { useLocation,useNavigate} from "react-router-dom"

 const QuizResult = () => {
		const location = useLocation()
		const { quizQuestions, totalScores } = location.state
		const numQuestions = quizQuestions.length
		const percentage = Math.round((totalScores / numQuestions) * 100)

	// 	const history = useHistory();
	// const handleRetakeQuiz = () => {
	// 	history.push("/take-quiz");
	// }
	const navigate=useNavigate();
		const handleRetakeQuiz = () => {
			// alert("Oops! this functionality was not implemented!!!")
			navigate("/quiz-stepper")
			
		}

		return (
			<section className="container mt-5">
				<h3>Your Quiz Result Summary</h3>
				<hr />
				<h5 className="text-info">
					You answered {totalScores} out of {numQuestions} questions correctly.
				</h5>
				<p>Your total score is {percentage}%.</p>

				<button className="btn btn-primary btn-sm" onClick={handleRetakeQuiz}>
					Retake this quiz
				</button>
			</section>
		)
 }

 export default QuizResult
