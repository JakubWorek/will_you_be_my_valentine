import { useEffect } from 'react';
import confetti from 'canvas-confetti';

function Yes() {
  useEffect(() => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: ReturnType<typeof setInterval> = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(bg.png)' }}>
      <div className="min-h-screen w-full backdrop-blur-sm bg-black/30 flex items-center justify-center">
        <div className="bg-pink-400 rounded-3xl shadow-2xl p-12 max-w-lg w-full mx-4">
          <h1 className="text-5xl font-bold text-white text-center mb-8 drop-shadow-lg">Jupiii! ❤️</h1>

          <div className="flex justify-center">
            <div
              className="tenor-gif-embed"
              data-postid="22536058"
              data-share-method="host"
              data-aspect-ratio="1"
              data-width="100%"
            >
              <a href="https://tenor.com/view/bear-kiss-bear-kisses-kiss-kisses-love-gif-22536058"></a>
            </div>{' '}
            <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Yes;
