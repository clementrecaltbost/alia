import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AthleteStepper from './AthleteStepper';

// Images servies depuis le dossier public - IDs exacts depuis Figma
const imgVector = '/assets/vector-objectifs-1.svg';
const imgVector1 = '/assets/vector-objectifs-2.svg';
const imgVector2 = '/assets/vector-objectifs-3.svg';
const imgCircle = '/assets/circle-objectifs.svg';
const imgGroup = '/assets/group-back-objectifs.svg';
const imgFi3793594 = '/assets/fi-3793594-objectifs.svg';
const imgLayer22 = '/assets/layer-22-objectifs.svg';
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
  { id: 1, label: 'Infos générales', active: false },
  { id: 2, label: 'Mon histoire', active: false },
  { id: 3, label: 'Palmarès', active: false },
  { id: 4, label: 'Objectifs', active: true },
  { id: 5, label: 'Besoin de financement', active: false },
  { id: 6, label: 'Services', active: false },
  { id: 7, label: 'Calendrier sportif à venir', active: false },
  { id: 8, label: 'Statistiques et audiences', active: false },
  { id: 9, label: 'Collaborations précédentes', active: false },
  { id: 10, label: 'Documents disponibles', active: false },
];

export default function AthleteObjectifs() {
  const navigate = useNavigate();
  const [shortTermGoals, setShortTermGoals] = useState([
    'Faire un podium au championnat national',
    ''
  ]);
  const [longTermGoals, setLongTermGoals] = useState([
    'Qualification à la coupe d\'Europe 2026'
  ]);
  const [ultimateDream, setUltimateDream] = useState('');

  const handleAddShortTermGoal = () => {
    setShortTermGoals([...shortTermGoals, '']);
  };

  const handleRemoveShortTermGoal = (index) => {
    setShortTermGoals(shortTermGoals.filter((_, i) => i !== index));
  };

  const handleAddLongTermGoal = () => {
    setLongTermGoals([...longTermGoals, '']);
  };

  const handleRemoveLongTermGoal = (index) => {
    setLongTermGoals(longTermGoals.filter((_, i) => i !== index));
  };

  const handleChangeShortTerm = (index, value) => {
    const newGoals = [...shortTermGoals];
    newGoals[index] = value;
    setShortTermGoals(newGoals);
  };

  const handleChangeLongTerm = (index, value) => {
    const newGoals = [...longTermGoals];
    newGoals[index] = value;
    setLongTermGoals(newGoals);
  };

  const handleBack = () => {
    navigate('/athlete-palmares');
  };

  return (
    <div className="bg-[#f5f8ff] relative size-full" data-name="On boarding-4" data-node-id="447:1586">
      {/* Stepper - Left Sidebar */}
      <AthleteStepper activeStepId={4} />

      {/* Container - Right Column - Position exacte: x=364, y=12, width=1052, height=777 */}
      <div className="absolute backdrop-blur-[44px] backdrop-filter border border-[rgba(255,255,255,0.3)] border-solid h-[777px] left-[364px] overflow-clip rounded-[24px] top-[calc(50%+-1.5px)] translate-y-[-50%] w-[1052px]" data-name="Container" data-node-id="447:1653">
        {/* Block - Position exacte: x=40, y=36, width=972, height=705 (relatif au Container) */}
        <div className="absolute bg-white h-[705px] left-1/2 overflow-clip rounded-[16px] top-[35px] translate-x-[-50%] w-[972px]" data-name="Block" data-node-id="447:1654">
          {/* Heading - Position exacte: x=40, y=38, width=142, height=34 */}
          <div className="absolute content-stretch flex gap-[12px] items-center left-[40px] top-[38px]" data-name="Heading" data-node-id="447:1655">
            <button 
              onClick={handleBack}
              className="bg-[#e6ebef] box-border content-stretch cursor-pointer flex gap-[8px] items-center justify-center p-[10px] relative rounded-[8px] shrink-0 size-[34px]"
              data-node-id="447:1656"
            >
              <div className="overflow-clip relative shrink-0 size-[12px]" data-name="fi_130882" data-node-id="447:1657">
                <div className="absolute bottom-0 left-[22.47%] right-[22.47%] top-0" data-name="Group" data-node-id="447:1658">
                  <img alt="" className="block max-w-none size-full" src={imgGroup} />
                </div>
              </div>
            </button>
            <p className="font-['SF_Pro:Semibold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1a1a1a] text-[23px]" data-node-id="447:1660">
              Objectifs
            </p>
          </div>

          {/* Objectifs à court terme - Position exacte: x=40, y=104, width=468, height=273 */}
          <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[40px] top-[104px] w-[468px]" data-name="Modal-add" data-node-id="449:1769">
            <p className="font-['SF_Pro:Semibold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1a1a1a] text-[15px] w-full whitespace-pre-wrap" data-node-id="449:1770">
              Objectifs à court terme (6 à 12 mois)
            </p>
            <div className="box-border content-stretch flex flex-col gap-[16px] items-end px-0 py-[12px] relative shrink-0 w-full" data-name="List" data-node-id="449:1772">
              {shortTermGoals.map((goal, index) => (
                <div key={index} className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Value-item" data-node-id={index === 0 ? "449:1773" : "449:1821"}>
                  <div className="relative shrink-0 size-[18px]" data-name="fi_3793594" data-node-id={index === 0 ? "449:1774" : "449:1822"}>
                    <img alt="" className="block max-w-none size-full" src={imgFi3793594} />
                  </div>
                  <div className="bg-neutral-50 box-border content-stretch flex flex-[1_0_0] gap-[112px] h-[74px] items-start min-h-px min-w-px p-[12px] relative rounded-[8px] shrink-0" data-node-id={index === 0 ? "449:1781" : "449:1829"}>
                    {!goal && (
                      <p className="absolute inset-0 p-[12px] font-['SF_Pro:Regular',sans-serif] leading-[1.4] not-italic text-[#b3b3b3] text-[15px] whitespace-pre-wrap pointer-events-none z-0">
                        Saisir votre objectif
                      </p>
                    )}
                    <textarea
                      value={goal}
                      onChange={(e) => handleChangeShortTerm(index, e.target.value)}
                      placeholder=""
                      className="block flex-[1_0_0] font-['SF_Pro:Regular',sans-serif] leading-[1.4] min-h-[50px] min-w-px not-italic relative shrink-0 text-[#1a1a1a] text-[15px] w-full border-none outline-none resize-none bg-transparent z-10"
                    />
                  </div>
                  <div className="flex flex-row items-center self-stretch">
                    <button
                      onClick={() => handleRemoveShortTermGoal(index)}
                      className="box-border content-stretch flex gap-[10px] h-full items-center overflow-clip p-px relative shrink-0 cursor-pointer"
                      data-name="fi_2734822"
                      data-node-id={index === 0 ? "449:1785" : "450:2485"}
                    >
                      <div className="relative shrink-0 size-[15.75px]" data-name="Layer 22" data-node-id={index === 0 ? "449:1786" : "450:2486"}>
                        <img alt="" className="block max-w-none size-full" src={imgLayer22} />
                      </div>
                    </button>
                  </div>
                </div>
              ))}
              <div className="content-stretch flex gap-[10px] h-[40px] items-center relative shrink-0 w-full cursor-pointer" data-name="Add" data-node-id="449:1818" onClick={handleAddShortTermGoal}>
                <p className="font-['SF_Pro:Semibold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#0ca99a] text-[15px] hover:underline" data-node-id="449:1819">
                  +Ajouter un objectif
                </p>
              </div>
            </div>
          </div>

          {/* Objectifs à long terme - Position exacte: x=40, y=409, width=468, height=183 */}
          <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[40px] top-[409px]" data-name="Modal-add" data-node-id="450:2448">
            <p className="font-['SF_Pro:Semibold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1a1a1a] text-[15px] w-full whitespace-pre-wrap" data-node-id="450:2449">
              Objectifs à long terme (2 à 4 ans)
            </p>
            <div className="box-border content-stretch flex flex-col gap-[16px] items-end px-0 py-[12px] relative shrink-0 w-full" data-name="List" data-node-id="450:2451">
              {longTermGoals.map((goal, index) => (
                <div key={index} className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0 w-[468px]" data-name="Value-item" data-node-id="450:2467">
                  <div className="relative shrink-0 size-[18px]" data-name="fi_3793594" data-node-id="450:2468">
                    <img alt="" className="block max-w-none size-full" src={imgFi3793594} />
                  </div>
                  <div className="bg-neutral-50 box-border content-stretch flex flex-[1_0_0] gap-[112px] h-[74px] items-start min-h-px min-w-px p-[12px] relative rounded-[8px] shrink-0" data-node-id="450:2475">
                    {!goal && (
                      <p className="absolute inset-0 p-[12px] font-['SF_Pro:Regular',sans-serif] leading-[1.4] not-italic text-[#b3b3b3] text-[15px] whitespace-pre-wrap pointer-events-none z-0">
                        Saisir votre objectif
                      </p>
                    )}
                    <textarea
                      value={goal}
                      onChange={(e) => handleChangeLongTerm(index, e.target.value)}
                      placeholder=""
                      className="block flex-[1_0_0] font-['SF_Pro:Regular',sans-serif] leading-[1.4] min-h-[50px] min-w-px not-italic relative shrink-0 text-[#1a1a1a] text-[15px] w-full border-none outline-none resize-none bg-transparent z-10"
                    />
                  </div>
                  <div className="flex flex-row items-center self-stretch">
                    <button
                      onClick={() => handleRemoveLongTermGoal(index)}
                      className="box-border content-stretch flex gap-[10px] h-full items-center overflow-clip p-px relative shrink-0 cursor-pointer"
                      data-name="fi_2734822"
                      data-node-id="450:2489"
                    >
                      <div className="relative shrink-0 size-[15.75px]" data-name="Layer 22" data-node-id="450:2490">
                        <img alt="" className="block max-w-none size-full" src={imgLayer22} />
                      </div>
                    </button>
                  </div>
                </div>
              ))}
              <div className="content-stretch flex gap-[10px] h-[40px] items-center relative shrink-0 w-full cursor-pointer" data-name="Add" data-node-id="450:2482" onClick={handleAddLongTermGoal}>
                <p className="font-['SF_Pro:Semibold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#0ca99a] text-[15px] hover:underline" data-node-id="450:2483">
                  +Ajouter un objectif
                </p>
              </div>
            </div>
          </div>

          {/* Mon rêve ultime - Position exacte: x=550, y=100, width=382, height=209 */}
          <div className="absolute content-stretch flex flex-col gap-[8px] h-[209px] items-start left-[550px] top-[100px] w-[382px]" data-name="Textfield" data-node-id="552:1976">
            <p className="font-['SF_Pro:Semibold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1a1a1a] text-[15px] w-full whitespace-pre-wrap" data-node-id="552:1977">
              Mon rêve ultime
            </p>
            <div className="bg-neutral-50 box-border content-stretch flex flex-[1_0_0] items-start justify-between min-h-[180px] min-w-px p-[12px] relative rounded-[8px] shrink-0 w-full" data-node-id="552:1978">
              {!ultimateDream && (
                <p className="absolute inset-0 p-[12px] font-['SF_Pro:Regular',sans-serif] leading-[1.4] not-italic text-[#b3b3b3] text-[15px] whitespace-pre-wrap pointer-events-none z-0">
                  Ce que tu aimerais accomplir dans ta carrière
                </p>
              )}
              <textarea
                value={ultimateDream}
                onChange={(e) => setUltimateDream(e.target.value)}
                placeholder=""
                className="block flex-[1_0_0] font-['SF_Pro:Regular',sans-serif] leading-[1.4] min-h-[156px] min-w-px not-italic relative shrink-0 text-[#1a1a1a] text-[15px] w-full border-none outline-none resize-none bg-transparent z-10"
              />
            </div>
          </div>

          {/* Button Continuer - Position exacte: x=776, y=619, width=156, height=40 */}
          <button 
            onClick={() => navigate('/athlete-financement')}
            className="btn-primary absolute box-border content-stretch cursor-pointer flex gap-[10px] h-[40px] items-center justify-center left-[776px] p-[10px] rounded-[8px] top-[619px] w-[156px]" 
            data-name="Button" 
            data-node-id="447:1661"
          >
            <p className="font-['SF_Pro:Semibold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[15px] text-white" data-node-id="447:1662">
              Continuer
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

