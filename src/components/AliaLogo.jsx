import { Link } from 'react-router-dom';

// Images servies depuis le dossier public
const group1 = '/assets/Group 1.svg';
const vector = '/assets/Vector.svg';

function AliaLogo({ className, type = "Original", useCombination = false }) {
  const logoContent = useCombination ? (
    <>
      <div data-node-id="45:614" className="absolute bottom-0 left-0 right-[67.74%] top-0">
        <img 
          className="block max-w-none size-full" 
          alt="Alia Logo" 
          src={group1}
          loading="eager"
          fetchPriority="high"
          onError={(e) => {
            console.error('Error loading Group 1:', e);
            e.target.style.display = 'none';
          }}
        />
      </div>
      <div data-node-id="45:586" className="absolute bottom-[11.97%] left-[37.08%] right-0 top-[13.05%]" data-name="Vector">
        <img 
          className="block max-w-none size-full" 
          alt="" 
          src={vector}
          loading="eager"
          fetchPriority="high"
          onError={(e) => {
            console.error('Error loading Vector:', e);
            e.target.style.display = 'none';
          }}
        />
      </div>
    </>
  ) : (
    <img 
      className="block max-w-none size-full object-contain" 
      alt="Alia Logo" 
      src={group1}
      loading="eager"
      fetchPriority="high"
      onError={(e) => {
        console.error('Error loading Group 1:', e);
        e.target.style.display = 'none';
      }}
    />
  );

  return (
    <Link to="/" className={`${className} block transition-all duration-300 ease-in-out hover:opacity-80 hover:scale-110 cursor-pointer`}>
      <div data-node-id="45:587" className="relative size-full">
        {logoContent}
      </div>
    </Link>
  );
}

export default AliaLogo;

