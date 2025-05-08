import React, { useState } from 'react';

const quizData = [
  {
    question: 'What is the capital of France?',
    options: ['Madrid', 'Paris', 'Berlin', 'Rome'],
    answer: 'Paris',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Venus', 'Mars', 'Jupiter'],
    answer: 'Mars',
  },
  {
    question: 'Who wrote "Hamlet"?',
    options: ['Charles Dickens', 'William Shakespeare', 'Mark Twain', 'J.K. Rowling'],
    answer: 'William Shakespeare',
  },
];

export default function QuizApp() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const handleAnswer = (selected) => {
    const correct = quizData[current].answer;
    if (selected === correct) {
      setScore(score + 1);
    }

    setSelectedAnswers([
      ...selectedAnswers,
      { 
        question: quizData[current].question,
        selected,
        correct 
      }
    ]);

    const next = current + 1;
    if (next < quizData.length) {
      setCurrent(next);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrent(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswers([]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl w-full">
        {showResult ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
            <p className="text-lg mb-6">Your Score: {score} / {quizData.length}</p>

            <div className="overflow-x-auto mb-6">
              <table className="table-auto border-collapse border w-full text-left text-sm">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border px-4 py-2">Question</th>
                    <th className="border px-4 py-2">Your Answer</th>
                    <th className="border px-4 py-2">Correct Answer</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedAnswers.map((item, idx) => (
                    <tr key={idx}>
                      <td className="border px-4 py-2">{item.question}</td>
                      <td className={`border px-4 py-2 ${item.selected === item.correct ? 'text-green-600' : 'text-red-600'}`}>
                        {item.selected}
                      </td>
                      <td className="border px-4 py-2">{item.correct}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <button
              onClick={restartQuiz}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Restart Quiz
            </button>
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Q{current + 1}: {quizData[current].question}
            </h2>
            <div className="space-y-3">
              {quizData[current].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(option)}
                  className="w-full text-left bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                  {option}
                </button>
              ))}
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Question {current + 1} of {quizData.length}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
