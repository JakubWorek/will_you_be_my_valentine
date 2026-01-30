import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const noButtonTexts = [
  'Nie',
  'Jesteś pewna?',
  'Naprawdę?',
  'Zastanów się jeszcze raz',
  'Może jednak tak?',
  'Ostatnia szansa!',
  'Na pewno nie?',
  'Pomyśl jeszcze!',
];

function Home() {
  const navigate = useNavigate();
  const [noButtonText, setNoButtonText] = useState('Nie');
  const [noButtonPosition, setNoButtonPosition] = useState({ top: 0, left: 0 });
  const [isPositioned, setIsPositioned] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  const handleYesClick = () => {
    navigate('/yes');
  };

  const handleNoClick = () => {
    const action = Math.random() > 0.5 ? 'text' : 'position';

    if (action === 'text') {
      const nextIndex = (textIndex + 1) % noButtonTexts.length;
      setNoButtonText(noButtonTexts[nextIndex]);
      setTextIndex(nextIndex);
    } else {
      const maxX = window.innerWidth - 200;
      const maxY = window.innerHeight - 100;
      const randomX = Math.random() * maxX;
      const randomY = Math.random() * maxY;

      setNoButtonPosition({ top: randomY, left: randomX });
      setIsPositioned(true);
    }
  };

  return (
    <div className="min-h-screen w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(bg.png)' }}>
      <div className="min-h-screen w-full backdrop-blur-sm bg-black/30 flex items-center justify-center">
        <div className="bg-pink-400 rounded-3xl shadow-2xl p-12 max-w-lg w-full mx-4 relative">
          <h1 className="text-5xl font-bold text-white text-center mb-8 drop-shadow-lg">
            Czy zostaniesz moją walentynką?
          </h1>

          <div className="flex flex-col gap-4">
            <button
              onClick={handleYesClick}
              className="bg-pink-600 hover:bg-pink-700 text-white text-2xl font-bold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              TAK
            </button>

            <button
              onClick={handleNoClick}
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-2xl font-bold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
              style={
                isPositioned
                  ? {
                      position: 'fixed',
                      top: `${noButtonPosition.top}px`,
                      left: `${noButtonPosition.left}px`,
                    }
                  : {}
              }
            >
              {noButtonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
