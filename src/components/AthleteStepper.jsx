import { Link } from 'react-router-dom';

const logoSet = '/assets/Logo set.svg';
const imgCircle = '/assets/circle-step.svg';

const steps = [
  { id: 1, label: 'Infos générales', path: '/athlete-onboarding' },
  { id: 2, label: 'Mon histoire', path: '/athlete-story' },
  { id: 3, label: 'Palmarès', path: '/athlete-palmares' },
  { id: 4, label: 'Objectifs', path: '/athlete-objectifs' },
  { id: 5, label: 'Besoin de financement', path: '/athlete-financement' },
  { id: 6, label: 'Services', path: '/athlete-services' },
  { id: 7, label: 'Calendrier sportif à venir', path: '/athlete-calendrier' },
  { id: 8, label: 'Statistiques et audiences', path: '/athlete-statistiques' },
  { id: 9, label: 'Collaborations précédentes', path: '/athlete-collaborations' },
  { id: 10, label: 'Documents disponibles', path: '/athlete-documents' },
];

export default function AthleteStepper({ activeStepId }) {
  return (
    <div className="absolute bg-[#013563] h-[1094px] left-0 overflow-clip top-0 w-[410px]" data-name="Stepper">
      {/* Logo */}
      <Link to="/" className="block">
        <div className="absolute h-[27px] left-[calc(50%+-118.5px)] top-[33px] translate-x-[-50%] w-[73px]">
          <img src={logoSet} alt="Alia Logo" className="block max-w-none size-full" />
        </div>
      </Link>
      
      {/* Copyright */}
      <p className="absolute bottom-[-78px] font-['SF_Pro:Regular',sans-serif] leading-[1.4] left-[15px] not-italic text-[12px] text-white translate-y-[100%]">
        © 2025 Alia
      </p>
      
      {/* Titre principal */}
      <p className="absolute font-['SF_Pro:Semibold',sans-serif] leading-[1.4] left-[50px] not-italic text-[19px] text-white top-[97px]">
        Complétez votre profil
      </p>
      
      {/* Steps Container - Chaque étape avec cercle et texte alignés */}
      <div className="absolute left-[50px] top-[143px] flex flex-col gap-[4px]">
        {steps.map((step, index) => {
          const isActive = step.id === activeStepId;
          const isLast = index === steps.length - 1;
          
          return (
            <div key={step.id} className="flex items-start gap-[20px]">
              {/* Colonne cercle + trail */}
              <div className="flex flex-col items-center w-[26.952px] shrink-0">
                {/* Step Circle - Structure IDENTIQUE pour TOUS les cercles */}
                <div className={`border border-solid h-[26.952px] w-[26.952px] rounded-full flex items-center justify-center shrink-0 ${
                  isActive 
                    ? 'bg-[#0ca99a] border-[#66c9bf]' 
                    : 'bg-[#013563] border-[#92a8bc]'
                }`} data-name="_StepBaseItem">
                  <div className="bg-white rounded-full w-[8.984px] h-[8.984px]" data-name="Dot" />
                </div>
                
                {/* Step Trail (ligne de connexion) - seulement si ce n'est pas le dernier */}
                {!isLast && (
                  <div className="h-[26.002px] w-[1.733px] flex flex-col gap-[1.733px] items-center justify-center mt-[4px]">
                    {[...Array(8)].map((_, i) => (
                      <div key={i} className="w-[1.733px] h-[1.733px]" data-name="circle">
                        <img alt="" className="block max-w-none size-full" src={imgCircle} />
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Texte aligné verticalement avec le cercle */}
              <div className="flex items-center h-[26.952px] pt-[1px]">
                <Link
                  to={step.path}
                  className={`font-['SF_Pro:Semibold',sans-serif] leading-[1.4] not-italic text-[15px] hover:opacity-80 cursor-pointer transition-opacity ${
                    step.id === activeStepId ? 'text-[#38b8ac]' : index === steps.length - 1 ? 'text-white' : 'text-[#f2f2f2]'
                  }`}
                >
                  {step.label}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

