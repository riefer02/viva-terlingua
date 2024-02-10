import React, { useState, useRef, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../utils/fontawesome';

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const [contentHeight, setContentHeight] = useState('auto');

  const expand = useSpring({
    to: {
      height: isOpen ? (contentHeight !== 'auto' ? contentHeight : 'auto') : 0,
    },
    from: { height: 0 },
    immediate: contentHeight === 'auto',
  });

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight + 5);
    }
  }, [answer]);

  useEffect(() => {
    const updateContentHeight = () => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight);
      }
    };

    window.addEventListener('resize', updateContentHeight);

    return () => window.removeEventListener('resize', updateContentHeight);
  }, [isOpen]);

  return (
    <div className="my-6 mx-8 flex flex-col items-center">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="shadow-md w-full bg-gray-light-1 border-2 border-secondary max-w-[470px] lg:max-w-[660px] py-4  px-4 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-tertiary group"
      >
        <div className="flex justify-between items-center">
          <h4 className="text-lg lg:text-xl font-medium text-dark-grey">
            {question}
          </h4>
          <FontAwesomeIcon
            icon={['fas', 'chevron-down']}
            className={`text-xl text-gray-dark transition-transform ${
              isOpen ? 'transform rotate-180' : ''
            }`}
          />
        </div>
      </button>
      <animated.div
        style={expand}
        className="overflow-hidden transition-all duration-200 ease-in-out w-full max-w-[470px] lg:max-w-[660px] mb-2" // Added mb-2 for bottom margin
      >
        <div
          ref={contentRef}
          className="bg-gray-100 shadow-md w-full border-secondary border-2 border-t-0 rounded-b-lg py-4 px-4 text-gray-dark group-focus:ring-2 focus:ring-tertiary lg:text-lg"
        >
          {answer}
        </div>
      </animated.div>
    </div>
  );
};

export default Accordion;
