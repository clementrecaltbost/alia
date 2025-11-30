import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AthleteStepper from './AthleteStepper';

// Images servies depuis le dossier public - IDs exacts depuis Figma
const imgVector = '/assets/vector-palmares-1.svg';
const imgVector1 = '/assets/vector-palmares-2.svg';
const imgVector2 = '/assets/vector-palmares-3.svg';
const imgCircle = '/assets/circle-palmares.svg';
const imgGroup = '/assets/group-back-palmares.svg';
const imgFi3793594 = '/assets/fi-3793594-palmares.svg';
const imgLayer2 = '/assets/layer-2-palmares.svg';
const imgLayer22 = '/assets/layer-22-palmares.svg';
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
  { id: 3, label: 'Palmarès', active: true },
  { id: 4, label: 'Objectifs', active: false },
  { id: 5, label: 'Besoin de financement', active: false },
  { id: 6, label: 'Services', active: false },
  { id: 7, label: 'Calendrier sportif à venir', active: false },
  { id: 8, label: 'Statistiques et audiences', active: false },
  { id: 9, label: 'Collaborations précédentes', active: false },
  { id: 10, label: 'Documents disponibles', active: false },
];

export default function AthletePalmares() {
  const navigate = useNavigate();
  const [palmares, setPalmares] = useState([
    { competition: '', result: '', date: '' },
    { competition: '', result: '', date: '' }
  ]);

  const handleAddPalmares = () => {
    setPalmares([...palmares, { competition: '', result: '', date: '' }]);
  };

  const handleRemovePalmares = (index) => {
    setPalmares(palmares.filter((_, i) => i !== index));
  };

  const handleChange = (index, field, value) => {
    const newPalmares = [...palmares];
    newPalmares[index][field] = value;
    setPalmares(newPalmares);
  };

  const handleBack = () => {
    navigate('/athlete-story');
  };

  return (
    <div className="bg-[#f5f8ff] relative size-full" data-name="On boarding-3" data-node-id="447:1359">
      {/* Stepper - Left Sidebar */}
      <AthleteStepper activeStepId={3} />

      {/* Container - Right Column - Position exacte: x=364, y=12, width=1052, height=777 */}
      <div className="absolute backdrop-blur-[44px] backdrop-filter border border-[rgba(255,255,255,0.3)] border-solid h-[777px] left-[364px] overflow-clip rounded-[24px] top-[calc(50%+-1.5px)] translate-y-[-50%] w-[1052px]" data-name="Container" data-node-id="447:1426">
        {/* Block - Position exacte: x=40, y=36, width=972, height=705 (relatif au Container) */}
        <div className="absolute bg-white h-[705px] left-1/2 overflow-clip rounded-[16px] top-[35px] translate-x-[-50%] w-[972px]" data-name="Block" data-node-id="447:1427">
          {/* Heading - Position exacte: x=40, y=38, width=143, height=34 */}
          <div className="absolute content-stretch flex gap-[12px] items-center left-[40px] top-[38px]" data-name="Heading" data-node-id="447:1428">
            <button 
              onClick={handleBack}
              className="bg-[#e6ebef] box-border content-stretch cursor-pointer flex gap-[8px] items-center justify-center p-[10px] relative rounded-[8px] shrink-0 size-[34px]"
              data-node-id="447:1429"
            >
              <div className="overflow-clip relative shrink-0 size-[12px]" data-name="fi_130882" data-node-id="447:1430">
                <div className="absolute bottom-0 left-[22.47%] right-[22.47%] top-0" data-name="Group" data-node-id="447:1431">
                  <img alt="" className="block max-w-none size-full" src={imgGroup} />
                </div>
              </div>
            </button>
            <p className="font-['SF_Pro:Semibold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1a1a1a] text-[23px]" data-node-id="447:1433">
              Palmarès
            </p>
          </div>

          {/* Modal-add Palmarès - Position exacte: x=40, y=104, width=842, height=205 */}
          <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[40px] top-[104px] w-[842px]" data-name="Modal-add" data-node-id="447:1442">
            <p className="font-['SF_Pro:Semibold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1a1a1a] text-[15px] w-full whitespace-pre-wrap" data-node-id="447:1443">
              Résultats remarquables
            </p>
            <div className="box-border content-stretch flex flex-col gap-[16px] items-end px-0 py-[12px] relative shrink-0 w-full" data-name="List" data-node-id="447:1445">
              {palmares.map((item, index) => (
                <div key={index} className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Value-item" data-node-id={index === 0 ? "447:1446" : "858:4227"}>
                  <div className="relative shrink-0 size-[18px]" data-name="fi_3793594" data-node-id={index === 0 ? "447:1447" : "858:4228"}>
                    <img alt="" className="block max-w-none size-full" src={imgFi3793594} />
                  </div>
                  {/* Nom de la compétition */}
                  <input
                    type="text"
                    value={item.competition}
                    onChange={(e) => handleChange(index, 'competition', e.target.value)}
                    placeholder="Nom de la compétition"
                    className="bg-neutral-50 box-border content-stretch flex flex-[1_0_0] gap-[112px] h-[40px] items-center min-h-px min-w-px p-[12px] relative rounded-[8px] shrink-0 border-none outline-none font-['SF_Pro:Regular',sans-serif] leading-[1.4] not-italic text-[#1a1a1a] text-[15px] placeholder:text-[#b3b3b3]"
                    data-node-id={index === 0 ? "447:1454" : "858:4235"}
                  />
                  {/* Résultat */}
                  <input
                    type="text"
                    value={item.result}
                    onChange={(e) => handleChange(index, 'result', e.target.value)}
                    placeholder="Résultat"
                    className="bg-neutral-50 box-border content-stretch flex flex-[1_0_0] gap-[112px] h-[40px] items-center min-h-px min-w-px p-[12px] relative rounded-[8px] shrink-0 border-none outline-none font-['SF_Pro:Regular',sans-serif] leading-[1.4] not-italic text-[#1a1a1a] text-[15px] placeholder:text-[#b3b3b3]"
                    data-node-id={index === 0 ? "858:4222" : "858:4239"}
                  />
                  {/* Date */}
                  <div className="bg-neutral-50 box-border content-stretch flex h-[40px] items-center justify-between p-[12px] relative rounded-[8px] shrink-0 w-[149px]" data-node-id={index === 0 ? "508:1664" : "858:4243"}>
                    <input
                      type="text"
                      value={item.date}
                      onChange={(e) => handleChange(index, 'date', e.target.value)}
                      placeholder="Date"
                      className="flex-[1_0_0] font-['SF_Pro:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1a1a1a] text-[15px] placeholder:text-[#b3b3b3] border-none outline-none bg-transparent"
                      data-node-id={index === 0 ? "508:1665" : "858:4244"}
                    />
                    <div className="overflow-clip relative shrink-0 size-[14px]" data-name="fi_9458226" data-node-id={index === 0 ? "508:1669" : "858:4247"}>
                      <div className="absolute inset-[5.21%_5.21%_5.08%_5.21%]" data-name="Layer 2" data-node-id={index === 0 ? "508:1670" : "858:4248"}>
                        <img alt="" className="block max-w-none size-full" src={imgLayer2} />
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemovePalmares(index)}
                    className="overflow-clip relative shrink-0 size-[18px] cursor-pointer"
                    data-name="fi_2734822"
                    data-node-id={index === 0 ? "447:1458" : "858:4260"}
                  >
                    <div className="absolute inset-[6.25%_6.24%_6.25%_6.26%]" data-name="Layer 22" data-node-id={index === 0 ? "447:1459" : "858:4261"}>
                      <img alt="" className="block max-w-none size-full" src={imgLayer22} />
                    </div>
                  </button>
                </div>
              ))}
              <div className="content-stretch flex gap-[10px] h-[40px] items-center relative shrink-0 w-full cursor-pointer" data-name="Add" data-node-id="447:1491" onClick={handleAddPalmares}>
                <p className="font-['SF_Pro:Semibold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#0ca99a] text-[15px] hover:underline" data-node-id="447:1492">
                  +Ajouter un palmarès
                </p>
              </div>
            </div>
          </div>

          {/* Button Continuer - Position exacte: x=776, y=619, width=156, height=40 */}
          <button 
            onClick={() => navigate('/athlete-objectifs')}
            className="btn-primary absolute bottom-[46px] box-border content-stretch cursor-pointer flex gap-[10px] h-[40px] items-center justify-center left-[776px] p-[10px] rounded-[8px] w-[156px]" 
            data-name="Button" 
            data-node-id="447:1434"
          >
            <p className="font-['SF_Pro:Semibold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[15px] text-white" data-node-id="447:1435">
              Continuer
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

