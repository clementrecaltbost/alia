import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AthleteStepper from './AthleteStepper';

// Images servies depuis le dossier public - IDs exacts depuis Figma
const imgVector = '/assets/vector-financement-1.svg';
const imgCheck = '/assets/check-financement.svg';
const imgVector1 = '/assets/vector-financement-2.svg';
const imgVector2 = '/assets/vector-financement-3.svg';
const imgVector3 = '/assets/vector-financement-4.svg';
const imgCircle = '/assets/circle-financement.svg';
const imgGroup = '/assets/group-back-financement.svg';
const logoSet = '/assets/Logo set.svg';

// Composant LogoSet basé sur les données exactes Figma
function LogoSet({ className }) {
  return (
    <div data-node-id="45:550" className={className}>
      <div data-node-id="45:520" className="absolute bottom-0 left-[11.25%] right-[69.65%] top-[67.47%]" data-name="Vector">
        <img className="block max-w-none size-full" alt="" src={imgVector1} />
      </div>
      <div data-node-id="45:521" className="absolute bottom-[0.08%] left-0 right-[67.74%] top-0" data-name="Vector">
        <img className="block max-w-none size-full" alt="" src={imgVector2} />
      </div>
      <div data-node-id="45:522" className="absolute bottom-[11.97%] left-[37.08%] right-0 top-[13.05%]" data-name="Vector">
        <img className="block max-w-none size-full" alt="" src={imgVector3} />
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

// Composant Checkbox
function Checkbox({ checked, onChange, className }) {
  return (
    <div className={`relative shrink-0 size-[24px] ${className}`}>
      {checked ? (
        <>
          <div className="absolute inset-[16.67%] rounded-[2px] bg-[#091e43]" data-name="Box" />
          <div className="absolute inset-[16.67%]" data-name="Icon">
            <div className="absolute inset-[31.25%_21.88%]" data-name="check-alternative">
              <div className="absolute inset-[-12.5%_-8.33%]">
                <img className="block max-w-none size-full" alt="" src={imgCheck} />
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="absolute inset-[16.67%] rounded-[2px] border-[#a6aeba] border-[1.5px] border-solid" data-name="Box" />
      )}
    </div>
  );
}

const steps = [
  { id: 1, label: 'Infos générales', active: false, path: '/athlete-onboarding' },
  { id: 2, label: 'Mon histoire', active: false, path: '/athlete-story' },
  { id: 3, label: 'Palmarès', active: false, path: '/athlete-palmares' },
  { id: 4, label: 'Objectifs', active: false, path: '/athlete-objectifs' },
  { id: 5, label: 'Besoin de financement', active: true, path: '/athlete-financement' },
  { id: 6, label: 'Services', active: false, path: '/athlete-services' },
  { id: 7, label: 'Calendrier sportif à venir', active: false, path: '/athlete-calendrier' },
  { id: 8, label: 'Statistiques et audiences', active: false, path: '/athlete-statistiques' },
  { id: 9, label: 'Collaborations précédentes', active: false, path: '/athlete-collaborations' },
  { id: 10, label: 'Documents disponibles', active: false, path: '/athlete-documents' },
];

const budgetItems = [
  { id: 'materiel', label: 'Matériel', checked: false },
  { id: 'deplacements', label: 'Déplacements', checked: false },
  { id: 'competitions', label: 'Compétitions', checked: true },
  { id: 'coaching', label: 'Coaching', checked: false },
  { id: 'hebergement', label: 'Hébergement', checked: true },
];

export default function AthleteFinancement() {
  const navigate = useNavigate();
  const [amount, setAmount] = useState('0.0');
  const [budgetItemsState, setBudgetItemsState] = useState(budgetItems);
  const [otherChecked, setOtherChecked] = useState(false);
  const [otherText, setOtherText] = useState('');
  const [supportAppeal, setSupportAppeal] = useState('');

  const handleBack = () => {
    navigate('/athlete-objectifs');
  };

  const handleCheckboxChange = (id) => {
    setBudgetItemsState(budgetItemsState.map(item => 
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  const handleOtherCheckboxChange = () => {
    setOtherChecked(!otherChecked);
  };

  return (
    <div className="bg-[#f5f8ff] relative size-full" data-name="On boarding-5" data-node-id="501:1629">
      {/* Stepper - Left Sidebar */}
      <AthleteStepper activeStepId={5} />
      {/* Container - Right Column */}
      <div className="absolute backdrop-blur-[44px] backdrop-filter border border-[rgba(255,255,255,0.3)] border-solid h-[777px] left-[364px] overflow-clip rounded-[24px] top-[calc(50%+-1.5px)] translate-y-[-50%] w-[1052px]" data-name="Container" data-node-id="501:1696">
        <div className="absolute bg-white h-[705px] left-1/2 overflow-clip rounded-[16px] top-[35px] translate-x-[-50%] w-[972px]" data-name="Block" data-node-id="501:1697">
          {/* Heading */}
          <div className="absolute content-stretch flex gap-[12px] items-center left-[40px] top-[38px]" data-name="Heading" data-node-id="501:1698">
            <button 
              onClick={handleBack}
              className="bg-[#e6ebef] box-border content-stretch cursor-pointer flex gap-[8px] items-center justify-center p-[10px] relative rounded-[8px] shrink-0 size-[34px]"
              data-node-id="501:1699"
            >
              <div className="overflow-clip relative shrink-0 size-[12px]" data-name="fi_130882" data-node-id="501:1700">
                <div className="absolute bottom-0 left-[22.47%] right-[22.47%] top-0" data-name="Group" data-node-id="501:1701">
                  <img alt="" className="block max-w-none size-full" src={imgGroup} />
                </div>
              </div>
            </button>
            <p className="font-['SF_Pro:Semibold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1a1a1a] text-[23px]" data-node-id="501:1703">
              Besoin de financement
            </p>
          </div>

          {/* Montant estimé par an */}
          <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[43px] top-[104px] w-[368px]" data-name="Textfield" data-node-id="501:1775">
            <p className="font-['SF_Pro:Semibold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1a1a1a] text-[15px] w-full whitespace-pre-wrap" data-node-id="501:1776">
              Montant estimé par an (€)
            </p>
            <div className="bg-neutral-50 box-border content-stretch flex gap-[12px] h-[62px] items-center p-[12px] relative rounded-[8px] shrink-0 w-full" data-node-id="501:1777">
              <p className="font-['SF_Pro:Semibold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1a1a1a] text-[23px]" data-node-id="501:1774">
                (€)
              </p>
              <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.0"
                className="flex-[1_0_0] font-['SF_Pro:Semibold',sans-serif] leading-[1.4] min-h-px min-w-0 not-italic relative shrink-0 text-[#1a1a1a] text-[19px] border-none outline-none bg-transparent placeholder:text-[#b3b3b3]"
              />
            </div>
          </div>

          {/* Ce que couvre ce budget */}
          <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[43px] top-[227px] w-[368px]" data-node-id="501:1897">
            <p className="font-['SF_Pro:Semibold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1a1a1a] text-[15px] w-full whitespace-pre-wrap" data-node-id="501:1782">
              Ce que couvre ce budget
            </p>
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Check list" data-node-id="501:1814">
              {budgetItemsState.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => handleCheckboxChange(item.id)}
                  className="box-border content-stretch cursor-pointer flex gap-[4px] items-center p-0 relative shrink-0 w-full"
                  data-name="Checkbox list"
                  data-node-id={index === 0 ? "501:1815" : index === 1 ? "501:1816" : index === 2 ? "501:1871" : index === 3 ? "501:1841" : "501:1847"}
                >
                  <Checkbox checked={item.checked} onChange={() => handleCheckboxChange(item.id)} />
                  <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[15px] whitespace-nowrap">
                    <p className="leading-[1.4]">{item.label}</p>
                  </div>
                </button>
              ))}
              
              {/* Autres avec champ de saisie */}
              <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-node-id="501:1890">
                <button
                  onClick={handleOtherCheckboxChange}
                  className="box-border content-stretch cursor-pointer flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px p-0 relative shrink-0"
                  data-name="Checkbox list"
                  data-node-id="501:1865"
                >
                  <Checkbox checked={otherChecked} onChange={handleOtherCheckboxChange} />
                  <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[15px] whitespace-nowrap">
                    <p className="leading-[1.4]">Autres</p>
                  </div>
                </button>
                <div className="bg-neutral-50 box-border content-stretch flex h-[40px] items-center justify-between p-[12px] relative rounded-[8px] shrink-0 w-[266px]" data-node-id="501:1883">
                  <input
                    type="text"
                    value={otherText}
                    onChange={(e) => setOtherText(e.target.value)}
                    placeholder="Saisir"
                    disabled={!otherChecked}
                    className="font-['SF_Pro:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1a1a1a] text-[15px] w-full border-none outline-none bg-transparent placeholder:text-[#b3b3b3] disabled:opacity-50"
                    data-node-id="501:1884"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Mon appel à soutien */}
          <div className="absolute content-stretch flex flex-col gap-[24px] h-[251px] items-start left-[calc(50%+205px)] top-[104px] translate-x-[-50%] w-[482px]" data-name="Form" data-node-id="501:1898">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Textfield" data-node-id="501:1899">
              <p className="font-['SF_Pro:Semibold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1a1a1a] text-[15px] w-full whitespace-pre-wrap" data-node-id="501:1900">
                Mon appel à soutien
              </p>
              <div className="bg-neutral-50 box-border content-stretch flex flex-[1_0_0] items-start justify-between min-h-[222px] min-w-px p-[12px] relative rounded-[8px] shrink-0 w-full" data-node-id="501:1901">
                {!supportAppeal && (
                  <p className="absolute inset-0 p-[12px] font-['SF_Pro:Regular',sans-serif] leading-[1.4] not-italic text-[#b3b3b3] text-[15px] whitespace-pre-wrap pointer-events-none z-0">
                    Expliquez en quelques phrases pourquoi votre projet mérite d'être soutenu et comment cette aide fera la différence dans votre parcours sportif.
                  </p>
                )}
                <textarea
                  value={supportAppeal}
                  onChange={(e) => setSupportAppeal(e.target.value)}
                  placeholder=""
                  className="block flex-[1_0_0] font-['SF_Pro:Regular',sans-serif] leading-[1.4] min-h-[198px] min-w-px not-italic relative shrink-0 text-[#1a1a1a] text-[15px] w-full border-none outline-none resize-none bg-transparent z-10"
                />
              </div>
            </div>
          </div>

          {/* Button Continuer */}
          <button 
            onClick={() => navigate('/athlete-services')}
            className="btn-primary absolute box-border content-stretch cursor-pointer flex gap-[10px] h-[40px] items-center justify-center left-[776px] p-[10px] rounded-[8px] top-[619px] w-[156px]" 
            data-name="Button" 
            data-node-id="501:1704"
          >
            <p className="font-['SF_Pro:Semibold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[15px] text-white" data-node-id="501:1705">
              Continuer
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

