import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AthleteStepper from './AthleteStepper';

// Images servies depuis le dossier public - IDs exacts depuis Figma
const imgVector = '/assets/vector-calendrier-1.svg';
const imgVector1 = '/assets/vector-calendrier-2.svg';
const imgVector2 = '/assets/vector-calendrier-3.svg';
const imgCircle = '/assets/circle-calendrier.svg';
const imgGroup = '/assets/group-back-calendrier.svg';
const imgFi3793594 = '/assets/fi-3793594-calendrier.svg';
const imgLayer2 = '/assets/layer-2-calendrier.svg';
const imgLayer22 = '/assets/layer-22-calendrier.svg';
const logoSet = '/assets/Logo set.svg';

// Composant LogoSet basé sur les données exactes Figma
function LogoSet({ className }) {
  return (
    <div data-node-id="45:550" className={className}>
      <div data-node-id="45:520" className="absolute bottom-0 left-[11.25%] right-[69.65%] top-[67.47%]" data-name="Vector">
        <img className="block max-w-none size-full" alt="" src={imgVector} />
      </div>
      <div data-node-id="45:521" className="absolute bottom-[0.08%] left-0 right-[67.74%] top-0" data-name="Vector">
        <img className="block max-w-none size-full" alt="" src={imgVector1} />
      </div>
      <div data-node-id="45:522" className="absolute bottom-[11.97%] left-[37.08%] right-0 top-[13.05%]" data-name="Vector">
        <img className="block max-w-none size-full" alt="" src={imgVector2} />
      </div>
    </div>
  );
}

// Composant AliaLogo basé sur les données exactes Figma
function AliaLogo({ className }) {
  return (
    <div data-node-id="45:588" className={className}>
      <LogoSet className="absolute inset-0 overflow-clip" />
    </div>
  );
}

const steps = [
  { id: 1, label: 'Infos générales', active: false, path: '/athlete-onboarding' },
  { id: 2, label: 'Mon histoire', active: false, path: '/athlete-story' },
  { id: 3, label: 'Palmarès', active: false, path: '/athlete-palmares' },
  { id: 4, label: 'Objectifs', active: false, path: '/athlete-objectifs' },
  { id: 5, label: 'Besoin de financement', active: false, path: '/athlete-financement' },
  { id: 6, label: 'Services', active: false, path: '/athlete-services' },
  { id: 7, label: 'Calendrier sportif à venir', active: true, path: '/athlete-calendrier' },
  { id: 8, label: 'Statistiques et audiences', active: false, path: '/athlete-statistiques' },
  { id: 9, label: 'Collaborations précédentes', active: false, path: '/athlete-collaborations' },
  { id: 10, label: 'Documents disponibles', active: false, path: '/athlete-documents' },
];

export default function AthleteCalendrier() {
  const navigate = useNavigate();
  const [events, setEvents] = useState([
    { date: '', location: '', description: '' },
    { date: '', location: '', description: '' },
    { date: '', location: '', description: '' },
  ]);

  const handleBack = () => {
    navigate('/athlete-services');
  };

  const handleAddEvent = () => {
    setEvents([...events, { date: '', location: '', description: '' }]);
  };

  const handleDeleteEvent = (index) => {
    setEvents(events.filter((_, i) => i !== index));
  };

  const handleEventChange = (index, field, value) => {
    const newEvents = [...events];
    newEvents[index][field] = value;
    setEvents(newEvents);
  };

  return (
    <div className="bg-[#f5f8ff] relative size-full" data-name="On boarding-7" data-node-id="503:1949">
      {/* Stepper - Left Sidebar */}
      <AthleteStepper activeStepId={7} />
      {/* Container - Right Column */}
      <div className="absolute backdrop-blur-[44px] backdrop-filter border border-[rgba(255,255,255,0.3)] border-solid h-[777px] left-[364px] overflow-clip rounded-[24px] top-[calc(50%+-1.5px)] translate-y-[-50%] w-[1052px]" data-name="Container" data-node-id="503:2015">
        <div className="absolute bg-white h-[705px] left-1/2 overflow-clip rounded-[16px] top-[35px] translate-x-[-50%] w-[972px]" data-name="Block" data-node-id="503:2016">
          {/* Heading */}
          <div className="absolute content-stretch flex gap-[12px] items-center left-[40px] top-[38px]" data-name="Heading" data-node-id="503:2017">
            <button 
              onClick={handleBack}
              className="bg-[#e6ebef] box-border content-stretch cursor-pointer flex gap-[8px] items-center justify-center p-[10px] relative rounded-[8px] shrink-0 size-[34px]"
              data-node-id="503:2018"
            >
              <div className="overflow-clip relative shrink-0 size-[12px]" data-name="fi_130882" data-node-id="503:2019">
                <div className="absolute bottom-0 left-[22.47%] right-[22.47%] top-0" data-name="Group" data-node-id="503:2020">
                  <img alt="" className="block max-w-none size-full" src={imgGroup} />
                </div>
              </div>
            </button>
            <p className="font-['SF_Pro:Semibold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1a1a1a] text-[23px]" data-node-id="503:2022">
              Calendrier sportif à venir
            </p>
          </div>

          {/* Prochaines compétitions majeures */}
          <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-1/2 top-[104px] translate-x-[-50%] w-[892px]" data-name="Modal-add" data-node-id="503:2110">
            <p className="font-['SF_Pro:Semibold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1a1a1a] text-[15px] w-full whitespace-pre-wrap" data-node-id="503:2111">
              Prochaines compétitions majeures
            </p>
            <div className="box-border content-stretch flex flex-col gap-[16px] items-start justify-center px-0 py-[12px] relative shrink-0 w-full" data-name="List" data-node-id="503:2113">
              {events.map((event, index) => (
                <div key={index} className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Value-item" data-node-id={index === 0 ? "503:2114" : index === 1 ? "503:2224" : "503:2259"}>
                  <div className="relative shrink-0 size-[18px]" data-name="fi_3793594" data-node-id={index === 0 ? "503:2115" : index === 1 ? "503:2225" : "503:2260"}>
                    <img alt="" className="block max-w-none size-full" src={imgFi3793594} />
                  </div>
                  
                  {/* Date */}
                  <div className="bg-neutral-50 box-border content-stretch flex h-[40px] items-center justify-between p-[12px] relative rounded-[8px] shrink-0 w-[118px]" data-node-id={index === 0 ? "503:2122" : index === 1 ? "503:2232" : "503:2267"}>
                    {!event.date && (
                      <p className="absolute font-['SF_Pro:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#b3b3b3] text-[15px] pointer-events-none">
                        Date
                      </p>
                    )}
                    <input
                      type="text"
                      value={event.date}
                      onChange={(e) => handleEventChange(index, 'date', e.target.value)}
                      placeholder=""
                      className="font-['SF_Pro:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1a1a1a] text-[15px] w-full border-none outline-none bg-transparent"
                    />
                    <div className="overflow-clip relative shrink-0 size-[14px]" data-name="fi_9458226" data-node-id={index === 0 ? "503:2135" : index === 1 ? "503:2234" : "503:2269"}>
                      <div className="absolute inset-[5.21%_5.21%_5.08%_5.21%]" data-name="Layer 2" data-node-id={index === 0 ? "503:2136" : index === 1 ? "503:2235" : "503:2270"}>
                        <img alt="" className="block max-w-none size-full" src={imgLayer2} />
                      </div>
                    </div>
                  </div>
                  
                  {/* Emplacement */}
                  <div className="bg-neutral-50 box-border content-stretch flex gap-[112px] h-[40px] items-center p-[12px] relative rounded-[8px] shrink-0 w-[276px]" data-node-id={index === 0 ? "503:2126" : index === 1 ? "503:2247" : "503:2282"}>
                    {!event.location && (
                      <p className="absolute inset-0 p-[12px] font-['SF_Pro:Regular',sans-serif] leading-[1.4] not-italic text-[#b3b3b3] text-[15px] pointer-events-none z-0">
                        Entrez l'emplacement
                      </p>
                    )}
                    <input
                      type="text"
                      value={event.location}
                      onChange={(e) => handleEventChange(index, 'location', e.target.value)}
                      placeholder=""
                      className="font-['SF_Pro:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1a1a1a] text-[15px] w-full border-none outline-none bg-transparent z-10"
                    />
                  </div>
                  
                  {/* Description */}
                  <div className="bg-neutral-50 box-border content-stretch flex flex-[1_0_0] gap-[112px] h-[40px] items-center min-h-px min-w-px p-[12px] relative rounded-[8px] shrink-0" data-node-id={index === 0 ? "503:2149" : index === 1 ? "503:2251" : "503:2286"}>
                    {!event.description && (
                      <p className="absolute inset-0 p-[12px] font-['SF_Pro:Regular',sans-serif] leading-[1.4] not-italic text-[#b3b3b3] text-[15px] pointer-events-none z-0">
                        Stages, sélections, événements sponsorisables
                      </p>
                    )}
                    <input
                      type="text"
                      value={event.description}
                      onChange={(e) => handleEventChange(index, 'description', e.target.value)}
                      placeholder=""
                      className="flex-[1_0_0] font-['SF_Pro:Regular',sans-serif] leading-[1.4] min-h-px min-w-0 not-italic relative shrink-0 text-[#1a1a1a] text-[15px] w-full border-none outline-none bg-transparent z-10"
                    />
                  </div>
                  
                  {/* Delete button */}
                  <button
                    onClick={() => handleDeleteEvent(index)}
                    className="overflow-clip relative shrink-0 size-[18px] cursor-pointer hover:opacity-80 transition-opacity"
                    data-name="fi_2734822"
                    data-node-id={index === 0 ? "503:2130" : index === 1 ? "503:2255" : "503:2290"}
                  >
                    <div className="absolute inset-[6.25%_6.24%_6.25%_6.26%]" data-name="Layer 22" data-node-id={index === 0 ? "503:2131" : index === 1 ? "503:2256" : "503:2291"}>
                      <img alt="" className="block max-w-none size-full" src={imgLayer22} />
                    </div>
                  </button>
                </div>
              ))}
              
              {/* Add button */}
              <div className="content-stretch flex gap-[10px] h-[40px] items-center relative shrink-0 w-full cursor-pointer" data-name="Add" data-node-id="503:2133" onClick={handleAddEvent}>
                <p className="font-['SF_Pro:Semibold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#0ca99a] text-[15px] hover:underline" data-node-id="503:2134">
                  +Ajouter un événement
                </p>
              </div>
            </div>
          </div>

          {/* Button Continuer */}
          <button 
            onClick={() => navigate('/athlete-statistiques')}
            className="btn-primary absolute box-border content-stretch cursor-pointer flex gap-[10px] h-[40px] items-center justify-center left-[776px] p-[10px] rounded-[8px] top-[619px] w-[156px]" 
            data-name="Button" 
            data-node-id="683:3289"
          >
            <p className="font-['SF_Pro:Semibold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[15px] text-white" data-node-id="683:3290">
              Continuer
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

