// Images servies depuis le dossier public
const volleyballPlayers1 = '/assets/volleyball-players-1.jpg';
const volleyballPlayers2 = '/assets/volleyball-players-2.jpg';

export default function SideNav() {
  return (
    <div className="absolute bg-[#013563] h-[780px] left-0 overflow-clip top-0 w-[818px]" data-name="Sidenav" data-node-id="474:2089">
      <div className="absolute left-[43px] top-[249px] w-[349px]" data-name="Tagline" data-node-id="474:2091">
        <p className="[text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] font-normal leading-[1.1] not-italic text-[55px] text-white whitespace-pre-wrap" data-node-id="474:2092">{`Pour que tous les talents s'expriment pleinement`}</p>
      </div>
      <p className="absolute font-semibold leading-[1.4] left-[43px] not-italic text-[23px] text-white top-[580px] w-[301px] whitespace-pre-wrap" data-node-id="474:2090">
        Alia relie les athlètes et les entreprises pour bâtir des histoires communes de performance et de valeurs
      </p>
      <div className="absolute h-[522px] left-[409px] rounded-[16px] top-1/2 translate-y-[-50%] w-[348px] overflow-hidden group" data-name="volleyball-players-having-match 1" data-node-id="474:2093">
        <div className="absolute inset-0 overflow-hidden rounded-[16px]">
          <img 
            alt="" 
            className="absolute h-full left-[-20.12%] max-w-none top-0 w-[150%] transition-transform duration-500 ease-in-out group-hover:scale-110" 
            src={volleyballPlayers1}
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </div>
      <div className="absolute h-[180px] left-[225px] rounded-[16px] top-[50px] w-[219px] overflow-hidden group" data-name="volleyball-players-having-match 2" data-node-id="474:2094">
        <div className="absolute inset-0 overflow-hidden rounded-[16px]">
          <img 
            alt="" 
            className="absolute h-[121.67%] left-0 max-w-none top-[-2.11%] w-full transition-transform duration-500 ease-in-out group-hover:scale-110" 
            src={volleyballPlayers2}
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </div>
    </div>
  );
}

