import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AthleteStepper from './AthleteStepper';

// Images servies depuis le dossier public - IDs exacts depuis Figma
const imgVector = '/assets/vector-statistiques-1.svg';
const imgVector1 = '/assets/vector-statistiques-2.svg';
const imgVector2 = '/assets/vector-statistiques-3.svg';
const imgCircle = '/assets/circle-statistiques.svg';
const imgGroup = '/assets/group-back-statistiques.svg';
const imgFi3793594 = '/assets/fi-3793594-statistiques.svg';
const imgFi9347603 = '/assets/fi-9347603-statistiques.svg';
const imgLayer22 = '/assets/layer-22-statistiques.svg';
const logoSet = '/assets/Logo set.svg';

const steps = [
  { id: 1, label: 'Infos générales', active: false, path: '/athlete-onboarding' },
  { id: 2, label: 'Mon histoire', active: false, path: '/athlete-story' },
  { id: 3, label: 'Palmarès', active: false, path: '/athlete-palmares' },
  { id: 4, label: 'Objectifs', active: false, path: '/athlete-objectifs' },
  { id: 5, label: 'Besoin de financement', active: false, path: '/athlete-financement' },
  { id: 6, label: 'Services', active: false, path: '/athlete-services' },
  { id: 7, label: 'Calendrier sportif à venir', active: false, path: '/athlete-calendrier' },
  { id: 8, label: 'Statistiques et audiences', active: true, path: '/athlete-statistiques' },
  { id: 9, label: 'Collaborations précédentes', active: false, path: '/athlete-collaborations' },
  { id: 10, label: 'Documents disponibles', active: false, path: '/athlete-documents' },
];

export default function AthleteStatistiques() {
  const navigate = useNavigate();
  const [socialMedia, setSocialMedia] = useState([
    { type: 'Instagram', link: '' },
    { type: 'Courriel (privé)', link: '' },
  ]);
  const [socialImpact, setSocialImpact] = useState('');
  const [otherAudiences, setOtherAudiences] = useState('');

  const handleBack = () => {
    navigate('/athlete-calendrier');
  };

  const handleAddContact = () => {
    setSocialMedia([...socialMedia, { type: '', link: '' }]);
  };

  const handleDeleteContact = (index) => {
    setSocialMedia(socialMedia.filter((_, i) => i !== index));
  };

  const handleContactChange = (index, field, value) => {
    const newSocialMedia = [...socialMedia];
    newSocialMedia[index][field] = value;
    setSocialMedia(newSocialMedia);
  };

  return (
    <div className="bg-[#f5f8ff] relative size-full" data-name="On boarding-8" data-node-id="450:2640">
      {/* Stepper - Left Sidebar */}
      <AthleteStepper activeStepId={8} />
      {/* Container - Right Column */}
      <div className="absolute backdrop-blur-[44px] backdrop-filter border border-[rgba(255,255,255,0.3)] border-solid h-[777px] left-[364px] overflow-clip rounded-[24px] top-[calc(50%+-1.5px)] translate-y-[-50%] w-[1052px]" data-name="Container" data-node-id="450:2707">
        <div className="absolute bg-white h-[705px] left-1/2 overflow-clip rounded-[16px] top-[35px] translate-x-[-50%] w-[972px]" data-name="Block" data-node-id="450:2708">
          {/* Heading */}
          <div className="absolute content-stretch flex gap-[12px] items-center left-[40px] top-[38px]" data-name="Heading" data-node-id="450:2709">
            <button 
              onClick={handleBack}
              className="bg-[#e6ebef] box-border content-stretch cursor-pointer flex gap-[8px] items-center justify-center p-[10px] relative rounded-[8px] shrink-0 size-[34px]"
              data-node-id="450:2710"
            >
              <div className="overflow-clip relative shrink-0 size-[12px]" data-name="fi_130882" data-node-id="450:2711">
                <div className="absolute bottom-0 left-[22.47%] right-[22.47%] top-0" data-name="Group" data-node-id="450:2712">
                  <img alt="" className="block max-w-none size-full" src={imgGroup} />
                </div>
              </div>
            </button>
            <p className="font-['SF_Pro:Semibold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1a1a1a] text-[23px]" data-node-id="450:2714">
              Statistiques et audiences
            </p>
          </div>

          {/* Social media */}
          <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[40px] top-[104px] w-[842px]" data-name="Modal-add" data-node-id="503:2497">
            <p className="font-['SF_Pro:Semibold',sans-serif] leading-[1.4] min-w-full not-italic relative shrink-0 text-[#1a1a1a] text-[15px] w-[min-content] whitespace-pre-wrap" data-node-id="503:2498">
              Social media
            </p>
            <div className="box-border content-stretch flex flex-col gap-[16px] items-start justify-center px-0 py-[12px] relative shrink-0" data-name="List" data-node-id="503:2500">
              {socialMedia.map((contact, index) => (
                <div key={index} className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Value-item" data-node-id={index === 0 ? "503:2501" : "503:2579"}>
                  <div className="relative shrink-0 size-[18px]" data-name="fi_3793594" data-node-id={index === 0 ? "503:2502" : "503:2580"}>
                    <img alt="" className="block max-w-none size-full" src={imgFi3793594} />
                  </div>
                  
                  {/* Type dropdown */}
                  <div className="bg-neutral-50 box-border content-stretch flex h-[40px] items-center justify-between p-[12px] relative rounded-[8px] shrink-0 w-[154px]" data-node-id={index === 0 ? "503:2509" : "503:2587"}>
                    {!contact.type && (
                      <p className="absolute font-['SF_Pro:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#b3b3b3] text-[15px] pointer-events-none">
                        Type
                      </p>
                    )}
                    <input
                      type="text"
                      value={contact.type}
                      onChange={(e) => handleContactChange(index, 'type', e.target.value)}
                      placeholder=""
                      className={`font-['SF_Pro:Semibold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[15px] w-full border-none outline-none bg-transparent ${
                        contact.type === 'Instagram' ? 'text-[#1a1a1a]' : contact.type === 'Courriel (privé)' ? 'text-[#666666]' : 'text-[#1a1a1a]'
                      }`}
                    />
                    <div className="relative shrink-0 size-[14px]" data-name="fi_9347603" data-node-id={index === 0 ? "503:2511" : "503:2589"}>
                      <img alt="" className="block max-w-none size-full" src={imgFi9347603} />
                    </div>
                  </div>
                  
                  {/* Link input */}
                  <div className="bg-neutral-50 box-border content-stretch flex gap-[112px] h-[40px] items-center p-[12px] relative rounded-[8px] shrink-0 w-[307px]" data-node-id={index === 0 ? "503:2513" : "503:2591"}>
                    {!contact.link && (
                      <p className="absolute inset-0 p-[12px] font-['SF_Pro:Regular',sans-serif] leading-[1.4] not-italic text-[#b3b3b3] text-[15px] pointer-events-none z-0">
                        Votre lien
                      </p>
                    )}
                    <input
                      type="text"
                      value={contact.link}
                      onChange={(e) => handleContactChange(index, 'link', e.target.value)}
                      placeholder=""
                      className="font-['SF_Pro:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1a1a1a] text-[15px] w-full border-none outline-none bg-transparent z-10"
                    />
                  </div>
                  
                  {/* Delete button */}
                  <button
                    onClick={() => handleDeleteContact(index)}
                    className="overflow-clip relative shrink-0 size-[18px] cursor-pointer hover:opacity-80 transition-opacity"
                    data-name="fi_2734822"
                    data-node-id={index === 0 ? "503:2517" : "503:2595"}
                  >
                    <div className="absolute inset-[6.25%_6.24%_6.25%_6.26%]" data-name="Layer 22" data-node-id={index === 0 ? "503:2518" : "503:2596"}>
                      <img alt="" className="block max-w-none size-full" src={imgLayer22} />
                    </div>
                  </button>
                </div>
              ))}
              
              {/* Add button */}
              <div className="content-stretch flex gap-[10px] h-[40px] items-center relative shrink-0 w-full cursor-pointer" data-name="Add" data-node-id="503:2539" onClick={handleAddContact}>
                <p className="font-['SF_Pro:Semibold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#0ca99a] text-[15px] hover:underline" data-node-id="503:2540">
                  +Ajouter votre contact
                </p>
              </div>
            </div>
          </div>

          {/* Indiquer l'impact sur les réseaux sociaux */}
          <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[40px] top-[333px] w-[892px]" data-name="Modal-add" data-node-id="901:4981">
            <p className="font-['SF_Pro:Semibold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1a1a1a] text-[15px] w-full whitespace-pre-wrap" data-node-id="901:4982">
              Indiquer l'impact sur les réseaux sociaux
            </p>
            <div className="bg-neutral-50 box-border content-stretch flex h-[94px] items-start justify-between p-[12px] relative rounded-[8px] shrink-0 w-full" data-node-id="901:4984">
              {!socialImpact && (
                <ul className="absolute inset-0 p-[12px] block font-['SF_Pro:Regular',sans-serif] leading-[0] not-italic text-[#b3b3b3] text-[15px] whitespace-pre-wrap pointer-events-none z-0" data-node-id="901:4985">
                  <li className="mb-0 ms-[22.5px]">
                    <span className="leading-[1.4]">Sur quels réseaux sociaux êtes-vous actif ?</span>
                  </li>
                  <li className="mb-0 ms-[22.5px]">
                    <span className="leading-[1.4]">Combien d'abonnés avez-vous ?</span>
                  </li>
                  <li className="ms-[22.5px]">
                    <span className="leading-[1.4]">Quelle est votre portée par publication et par story ?</span>
                  </li>
                </ul>
              )}
              <textarea
                value={socialImpact}
                onChange={(e) => setSocialImpact(e.target.value)}
                placeholder=""
                className="flex-[1_0_0] font-['SF_Pro:Regular',sans-serif] leading-[1.4] min-h-px min-w-0 not-italic relative shrink-0 text-[#1a1a1a] text-[15px] w-full h-full border-none outline-none bg-transparent resize-none z-10"
                style={{ padding: 0 }}
              />
            </div>
          </div>

          {/* Publics sous d'autres formes */}
          <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[40px] top-[492px] w-[892px]" data-name="Modal-add" data-node-id="901:4986">
            <p className="font-['SF_Pro:Semibold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1a1a1a] text-[15px] w-full whitespace-pre-wrap" data-node-id="901:4987">
              Publics sous d'autres formes
            </p>
            <div className="bg-neutral-50 box-border content-stretch flex h-[78px] items-start justify-between p-[12px] relative rounded-[8px] shrink-0 w-full" data-node-id="901:4988">
              {!otherAudiences && (
                <ul className="absolute inset-0 p-[12px] block font-['SF_Pro:Regular',sans-serif] leading-[0] not-italic text-[#b3b3b3] text-[15px] whitespace-pre-wrap pointer-events-none z-0" data-node-id="901:4989">
                  <li className="mb-0 ms-[22.5px]">
                    <span className="leading-[1.4]">À quelles finales avez-vous participé ?</span>
                  </li>
                  <li className="ms-[22.5px]">
                    <span className="leading-[1.4]">Quelle couverture médiatique avez-vous accordée à vous et à votre équipe ?</span>
                  </li>
                </ul>
              )}
              <textarea
                value={otherAudiences}
                onChange={(e) => setOtherAudiences(e.target.value)}
                placeholder=""
                className="flex-[1_0_0] font-['SF_Pro:Regular',sans-serif] leading-[1.4] min-h-px min-w-0 not-italic relative shrink-0 text-[#1a1a1a] text-[15px] w-full h-full border-none outline-none bg-transparent resize-none z-10"
                style={{ padding: 0 }}
              />
            </div>
          </div>

          {/* Button Continuer */}
          <button 
            onClick={() => navigate('/athlete-collaborations')}
            className="btn-primary absolute box-border content-stretch cursor-pointer flex gap-[10px] h-[40px] items-center justify-center left-[776px] p-[10px] rounded-[8px] top-[619px] w-[156px]" 
            data-name="Button" 
            data-node-id="450:2715"
          >
            <p className="font-['SF_Pro:Semibold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[15px] text-white" data-node-id="450:2716">
              Continuer
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

