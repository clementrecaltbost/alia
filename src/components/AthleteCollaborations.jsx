import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AthleteStepper from './AthleteStepper';

// Images servies depuis le dossier public - IDs exacts depuis Figma
const imgVector = '/assets/vector-collaborations-1.svg';
const imgVector1 = '/assets/vector-collaborations-2.svg';
const imgVector2 = '/assets/vector-collaborations-3.svg';
const imgCircle = '/assets/circle-collaborations.svg';
const imgGroup = '/assets/group-back-collaborations.svg';
const imgLayer22 = '/assets/layer-22-collaborations.svg';
const logoSet = '/assets/Logo set.svg';

const steps = [
  { id: 1, label: 'Infos générales', active: false, path: '/athlete-onboarding' },
  { id: 2, label: 'Mon histoire', active: false, path: '/athlete-story' },
  { id: 3, label: 'Palmarès', active: false, path: '/athlete-palmares' },
  { id: 4, label: 'Objectifs', active: false, path: '/athlete-objectifs' },
  { id: 5, label: 'Besoin de financement', active: false, path: '/athlete-financement' },
  { id: 6, label: 'Services', active: false, path: '/athlete-services' },
  { id: 7, label: 'Calendrier sportif à venir', active: false, path: '/athlete-calendrier' },
  { id: 8, label: 'Statistiques et audiences', active: false, path: '/athlete-statistiques' },
  { id: 9, label: 'Collaborations précédentes', active: true, path: '/athlete-collaborations' },
  { id: 10, label: 'Documents disponibles', active: false, path: '/athlete-documents' },
];

export default function AthleteCollaborations() {
  const navigate = useNavigate();
  const [collaborations, setCollaborations] = useState([
    { brandName: '', experience: '', activities: '' },
  ]);

  const handleBack = () => {
    navigate('/athlete-statistiques');
  };

  const handleAddBrand = () => {
    setCollaborations([...collaborations, { brandName: '', experience: '', activities: '' }]);
  };

  const handleDeleteBrand = (index) => {
    setCollaborations(collaborations.filter((_, i) => i !== index));
  };

  const handleCollaborationChange = (index, field, value) => {
    const newCollaborations = [...collaborations];
    newCollaborations[index][field] = value;
    setCollaborations(newCollaborations);
  };

  return (
    <div className="bg-[#f5f8ff] relative size-full" data-name="On boarding-9" data-node-id="507:1590">
      {/* Stepper - Left Sidebar */}
      <AthleteStepper activeStepId={9} />
      {/* Container - Right Column */}
      <div className="absolute backdrop-blur-[44px] backdrop-filter border border-[rgba(255,255,255,0.3)] border-solid h-[777px] left-[364px] overflow-clip rounded-[24px] top-[calc(50%+-1.5px)] translate-y-[-50%] w-[1052px]" data-name="Container" data-node-id="507:1656">
        <div className="absolute bg-white h-[705px] left-1/2 overflow-clip rounded-[16px] top-[35px] translate-x-[-50%] w-[972px]" data-name="Block" data-node-id="507:1657">
          {/* Heading */}
          <div className="absolute content-stretch flex gap-[12px] items-center left-[40px] top-[38px]" data-name="Heading" data-node-id="507:1658">
            <button 
              onClick={handleBack}
              className="bg-[#e6ebef] box-border content-stretch cursor-pointer flex gap-[8px] items-center justify-center p-[10px] relative rounded-[8px] shrink-0 size-[34px]"
              data-node-id="507:1659"
            >
              <div className="overflow-clip relative shrink-0 size-[12px]" data-name="fi_130882" data-node-id="507:1660">
                <div className="absolute bottom-0 left-[22.47%] right-[22.47%] top-0" data-name="Group" data-node-id="507:1661">
                  <img alt="" className="block max-w-none size-full" src={imgGroup} />
                </div>
              </div>
            </button>
            <p className="font-['SF_Pro:Semibold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1a1a1a] text-[23px]" data-node-id="507:1663">
              Collaborations précédentes
            </p>
          </div>

          {/* List of collaborations */}
          <div className="absolute box-border content-stretch flex flex-col gap-[16px] items-start justify-center left-[40px] px-0 py-[12px] top-[104px]" data-name="List" data-node-id="947:3351">
            {collaborations.map((collab, index) => (
              <div key={index} className="border border-[#cccccc] border-dashed box-border content-stretch flex gap-[16px] items-start justify-center p-[12px] relative rounded-[12px] shrink-0" data-node-id="947:3482">
                <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-node-id="947:3481">
                  {/* Nom de marque et Avis d'expérience */}
                  <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Value-item" data-node-id="947:3352">
                    {/* Nom de marque */}
                    <div className="bg-neutral-50 box-border content-stretch flex flex-[1_0_0] gap-[112px] h-[40px] items-center min-h-px min-w-px p-[12px] relative rounded-[8px] shrink-0" data-node-id="947:3360">
                      {!collab.brandName && (
                        <p className="absolute inset-0 p-[12px] font-['SF_Pro:Regular',sans-serif] leading-[1.4] not-italic text-[#b3b3b3] text-[15px] pointer-events-none z-0">
                          Nom de marque
                        </p>
                      )}
                      <input
                        type="text"
                        value={collab.brandName}
                        onChange={(e) => handleCollaborationChange(index, 'brandName', e.target.value)}
                        placeholder=""
                        className="flex-[1_0_0] font-['SF_Pro:Regular',sans-serif] leading-[1.4] min-h-px min-w-0 not-italic relative shrink-0 text-[#1a1a1a] text-[15px] w-full border-none outline-none bg-transparent z-10"
                      />
                    </div>
                    
                    {/* Avis d'expérience */}
                    <div className="bg-neutral-50 box-border content-stretch flex flex-[1_0_0] gap-[112px] h-[40px] items-center min-h-px min-w-px p-[12px] relative rounded-[8px] shrink-0" data-node-id="947:3375">
                      {!collab.experience && (
                        <p className="absolute inset-0 p-[12px] font-['SF_Pro:Regular',sans-serif] leading-[1.4] not-italic text-[#b3b3b3] text-[15px] pointer-events-none z-0">
                          Avis d'expérience
                        </p>
                      )}
                      <input
                        type="text"
                        value={collab.experience}
                        onChange={(e) => handleCollaborationChange(index, 'experience', e.target.value)}
                        placeholder=""
                        className="flex-[1_0_0] font-['SF_Pro:Regular',sans-serif] leading-[1.4] min-h-px min-w-0 not-italic relative shrink-0 text-[#1a1a1a] text-[15px] w-full border-none outline-none bg-transparent z-10"
                      />
                    </div>
                  </div>
                  
                  {/* Partager les engagements et activités */}
                  <div className="bg-neutral-50 box-border content-stretch flex h-[113px] items-start justify-between p-[12px] relative rounded-[8px] shrink-0 w-[538px]" data-node-id="947:3457">
                    {!collab.activities && (
                      <p className="absolute inset-0 p-[12px] font-['SF_Pro:Regular',sans-serif] leading-[1.4] not-italic text-[#b3b3b3] text-[15px] whitespace-pre-wrap pointer-events-none z-0" data-node-id="947:3458">
                        Partager les engagements et activités pendant la collaboration
                      </p>
                    )}
                    <textarea
                      value={collab.activities}
                      onChange={(e) => handleCollaborationChange(index, 'activities', e.target.value)}
                      placeholder=""
                      className="flex-[1_0_0] font-['SF_Pro:Regular',sans-serif] leading-[1.4] min-h-px min-w-0 not-italic relative shrink-0 text-[#1a1a1a] text-[15px] w-full h-full border-none outline-none bg-transparent resize-none z-10"
                      style={{ padding: 0 }}
                    />
                  </div>
                </div>
                
                {/* Delete button */}
                <button
                  onClick={() => handleDeleteBrand(index)}
                  className="overflow-clip relative shrink-0 size-[18px] cursor-pointer hover:opacity-80 transition-opacity"
                  data-name="fi_2734822"
                  data-node-id="947:3383"
                >
                  <div className="absolute inset-[6.25%_6.24%_6.25%_6.26%]" data-name="Layer 22" data-node-id="947:3384">
                    <img alt="" className="block max-w-none size-full" src={imgLayer22} />
                  </div>
                </button>
              </div>
            ))}
            
            {/* Add button */}
            <div className="content-stretch flex gap-[10px] h-[40px] items-center relative shrink-0 cursor-pointer" data-name="Add" data-node-id="947:3454" onClick={handleAddBrand}>
              <p className="font-['SF_Pro:Semibold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#0ca99a] text-[15px] hover:underline" data-node-id="947:3455">
                +Ajouter une marque
              </p>
            </div>
          </div>

          {/* Button Continuer */}
          <button 
            onClick={() => navigate('/athlete-documents')}
            className="btn-primary absolute box-border content-stretch cursor-pointer flex gap-[10px] h-[40px] items-center justify-center left-[776px] p-[10px] rounded-[8px] top-[619px] w-[156px]" 
            data-name="Button" 
            data-node-id="507:1727"
          >
            <p className="font-['SF_Pro:Semibold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[15px] text-white" data-node-id="507:1728">
              Continuer
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

