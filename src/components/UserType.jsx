import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AliaLogo from './AliaLogo';

const volleyballPlayers1 = '/assets/volleyball-players-1-usertype.jpg';
const volleyballPlayers2 = '/assets/volleyball-players-2-usertype.jpg';
const enterpriseIcon = '/assets/enterprise-icon.svg';
const athleteIcon = '/assets/athlete-icon.svg';

export default function UserType() {
  const [selectedRole, setSelectedRole] = useState(null);
  const navigate = useNavigate();

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
  };

  const handleContinue = () => {
    if (selectedRole) {
      if (selectedRole === 'athlete') {
        navigate('/athlete-onboarding');
      } else if (selectedRole === 'entreprise') {
        navigate('/enterprise-dashboard');
      }
    }
  };

  return (
    <div className="bg-neutral-100 relative size-full" data-name="User type" data-node-id="341:3732">
      {/* Sidenav - Left Column */}
      <div className="absolute bg-[#013563] h-[780px] left-0 overflow-clip top-0 w-[818px]" data-name="Sidenav" data-node-id="474:2103">
        <p className="absolute font-semibold leading-[1.4] left-[43px] not-italic text-[23px] text-white top-[523px] w-[301px] whitespace-pre-wrap" data-node-id="1024:2998">
          Une plateforme de confiance où athlètes et marques évoluent ensemble.
        </p>
        <p className="[text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] absolute font-normal leading-[1.1] left-[43px] not-italic text-[55px] text-white top-[269px] w-[349px] whitespace-pre-wrap" data-node-id="1024:2999">
          Fondé sur la confiance, guidé par les valeurs
        </p>
        <div className="absolute h-[522px] left-[409px] rounded-[16px] top-1/2 translate-y-[-50%] w-[348px] overflow-hidden group" data-name="volleyball-players-having-match 1" data-node-id="821:2394">
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
        <div className="absolute h-[180px] left-[225px] rounded-[16px] top-[50px] w-[219px] overflow-hidden group" data-name="volleyball-players-having-match 2" data-node-id="821:2395">
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

      {/* Container - Right Column with Role Selection */}
      <div className="absolute backdrop-blur-[44px] backdrop-filter border border-[rgba(255,255,255,0.3)] border-solid h-[714px] left-[calc(50%+386px)] overflow-clip rounded-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[620px]" data-name="Container" data-node-id="341:3741">
        <AliaLogo className="absolute h-[47px] left-[calc(50%+0.5px)] overflow-clip top-[calc(50%+-175.5px)] translate-x-[-50%] translate-y-[-50%] w-[131px]" useCombination={true} />
        <div className="absolute content-stretch flex flex-col gap-[32px] items-start justify-center left-1/2 top-[236px] translate-x-[-50%]" data-node-id="341:3743">
          <p className="font-semibold leading-[1.4] min-w-full not-italic relative shrink-0 text-[#1a1a1a] text-[23px] text-center w-[min-content] whitespace-pre-wrap" data-node-id="341:3744">
            Sélectionnez votre rôle
          </p>
          <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Options" data-node-id="341:3745">
            {/* Entreprise Card */}
            <button
              onClick={() => handleRoleSelect('entreprise')}
              className={`btn-role bg-white box-border content-stretch cursor-pointer flex flex-col gap-[12px] h-[174px] items-center justify-center p-[40px] relative rounded-[24px] shrink-0 w-[216px] ${
                selectedRole === 'entreprise' 
                  ? 'ring-2 ring-[#0ca99a] shadow-lg' 
                  : ''
              }`}
              data-name="Role"
              data-node-id="341:3752"
            >
              <div className="overflow-clip relative shrink-0 size-[32px]" data-name="fi_17274873" data-node-id="341:3753">
                <div className="absolute inset-[5.21%]">
                  <img alt="" className="block max-w-none size-full" src={enterpriseIcon} />
                </div>
              </div>
              <p className="font-normal leading-[1.4] not-italic relative shrink-0 text-[#1a1a1a] text-[15px]" data-node-id="341:3760">
                Entreprise
              </p>
            </button>

            {/* Athlète Card */}
            <button
              onClick={() => handleRoleSelect('athlete')}
              className={`btn-role bg-white box-border content-stretch flex flex-col gap-[12px] h-[174px] items-center justify-center p-[40px] relative rounded-[24px] shrink-0 w-[216px] ${
                selectedRole === 'athlete' 
                  ? 'ring-2 ring-[#0ca99a] shadow-lg' 
                  : ''
              }`}
              data-name="Role"
              data-node-id="341:3746"
            >
              <div className="relative shrink-0 size-[32px]" data-name="fi_1885282" data-node-id="341:3747">
                <img alt="" className="block max-w-none size-full" src={athleteIcon} />
              </div>
              <p className="font-normal leading-[1.4] not-italic relative shrink-0 text-[#1a1a1a] text-[15px]" data-node-id="341:3749">
                Athlète
              </p>
            </button>
          </div>
          <button
            onClick={handleContinue}
            disabled={!selectedRole}
            className={`btn-primary box-border content-stretch flex gap-[10px] h-[40px] items-center justify-center p-[10px] relative shrink-0 w-[463px] ${
              !selectedRole 
                ? 'opacity-50 cursor-not-allowed hover:scale-100' 
                : ''
            }`}
            data-name="Button"
            data-node-id="341:3761"
          >
            <p className="font-semibold leading-[1.4] not-italic relative shrink-0 text-[15px] text-white" data-node-id="341:3762">
              Commencez gratuitement
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

