import { useState } from 'react';
import { FaCommentDots, FaTimes } from 'react-icons/fa';
import { IoIosSend } from "react-icons/io";
import '../index.css'

const ChatBot = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false); // New loading state

  const toggleExpanded = () => {
    setIsExpanded((prev) => !prev);
    if (!isExpanded) {
      setMessages((prev) => [...prev, { text: "Hi there! I am your Gloomy bot, How can I assist you?", sender: 'bot' }]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages((prev) => [...prev, { text: input, sender: 'user' }]);
      setInput('');
      setIsLoading(true); // Set loading state to true

      try {
        const response = await fetch('http://127.0.0.1:8000/gloombot', { 
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ question: input }),
        });

        const data = await response.json();
        setMessages((prev) => [...prev, { text: data.answer, sender: 'bot' }]);
      } catch (error) {
        console.error('Error fetching response:', error);
        setMessages((prev) => [...prev, { text: "Sorry, there was an error.", sender: 'bot' }]);
      } finally {
        setIsLoading(false); // Reset loading state
      }
    }
  };

  return (
    <div className=" fixed bottom-20 right-4 z-50 chat-box">
      {!isExpanded ? (
        <button
          onClick={toggleExpanded}
          className="w-12 h-12 rounded-full shadow-lg bg-blue-500 text-white flex items-center justify-center"
        >
          <FaCommentDots className="w-6 h-6" />
          <div className='absolute w-2 h-2 rounded-full bg-red-500 top-0 right-0 animate-ping'></div>
        </button>
      ) : (
        <div className="bg-white border rounded-lg shadow-lg w-80 transition-all duration-300 ease-in-out">
          <div className="flex justify-between items-center p-4 border-b">
            <h3 className="font-semibold">Chat Bot</h3>
            <button onClick={toggleExpanded} className="text-gray-500">
              <FaTimes className="w-4 h-4" />
            </button>
          </div>
          <div className="h-64 p-4 overflow-y-auto border border-gray-300 rounded-lg">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-2 p-2 rounded-lg ${
                  message.sender === 'user' ? 'bg-blue-500 text-white ml-auto' : 'bg-gray-200'
                } max-w-[80%] ${
                  message.sender === 'user' ? 'float-right clear-both' : 'float-left clear-both'
                }`}
              >
                {message.text}
              </div>
            ))}
            {isLoading && (
              <div className="mb-2 p-2 rounded-lg bg-gray-200 max-w-[80%] float-left clear-both">
                ...
              </div>
            )}
          </div>
          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-grow p-2 border border-gray-300 rounded"
              />
              <button type="submit" className={`bg-blue-500 m-auto text-center text-white rounded-full p-2 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={isLoading}>
                {
                isLoading ? 
                  <svg className="animate-spin  mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg> 
                  :
                   <IoIosSend className="w-4 h-4" />
                }
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
