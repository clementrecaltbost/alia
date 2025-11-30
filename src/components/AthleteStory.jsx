import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AthleteStepper from './AthleteStepper';

// Images servies depuis le dossier public - IDs exacts depuis Figma
const imgIconContainer = '/assets/icon-container-story-1.jpg';
const imgIconContainer1 = '/assets/icon-container-story-2.jpg';
const imgIconContainer2 = '/assets/icon-container-story-3.jpg';
const imgIconContainer3 = '/assets/icon-container-story-4.jpg';
const imgIconContainer4 = '/assets/icon-container-story-5.jpg';
const imgIconContainer5 = '/assets/icon-container-story-6.jpg';
const imgIconContainer6 = '/assets/icon-container-story-7.jpg';
const imgIconContainer7 = '/assets/icon-container-story-8.jpg';
const imgIconContainer8 = '/assets/icon-container-story-9.jpg';
const imgIconContainer9 = '/assets/icon-container-story-9.jpg';
const imgIconContainer10 = '/assets/icon-container-story-10.jpg';
const imgVector = '/assets/vector-story-logo-1.svg';
const imgVector1 = '/assets/vector-story-logo-2.svg';
const imgVector2 = '/assets/vector-story-logo-3.svg';
const imgCircle = '/assets/circle-story-exact.svg';
const imgGroup = '/assets/group-back-exact.svg';
const imgFi3793594 = '/assets/fi-3793594-exact.svg';
const imgLayer22 = '/assets/layer-22-exact.svg';
const imgGroup1 = '/assets/group-add-1-exact.svg';
const imgGroup2 = '/assets/group-add-2-exact.svg';
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

export default function AthleteStory() {
  const navigate = useNavigate();
  const [biography, setBiography] = useState('');
  const [inspiration, setInspiration] = useState('');
  const [values, setValues] = useState([
    'Création de contenu (séances photo, vidéos…)'
  ]);
  const [newValue, setNewValue] = useState('');

  const handleAddValue = () => {
    if (newValue.trim()) {
      setValues([...values, newValue.trim()]);
      setNewValue('');
    }
  };

  const handleRemoveValue = (index) => {
    setValues(values.filter((_, i) => i !== index));
  };

  const handleValueChange = (index, newValue) => {
    const newValues = [...values];
    newValues[index] = newValue;
    setValues(newValues);
  };

  const handleBack = () => {
    navigate('/athlete-onboarding');
  };

  return (
    <div className="bg-[#f5f8ff] relative size-full" data-name="2-Added" data-node-id="935:2418">
      {/* Stepper - Left Sidebar */}
      <AthleteStepper activeStepId={2} />

      {/* Container - Right Column */}
      <div className="absolute backdrop-blur-[44px] backdrop-filter border border-[rgba(255,255,255,0.3)] border-solid h-[1049px] left-[364px] overflow-clip rounded-[24px] top-0 w-[1052px]" data-name="Container" data-node-id="935:2606">
        {/* Block - Position exacte: x=40, y=36, width=972, height=977 (relatif au Container) */}
        <div className="absolute bg-white h-[977px] left-1/2 overflow-clip rounded-[16px] top-[35px] translate-x-[-50%] w-[972px]" data-name="Block" data-node-id="935:2607">
          {/* Heading - Position exacte: x=40, y=38, width=176, height=34 */}
          <div className="absolute content-stretch flex gap-[12px] items-center left-[40px] top-[38px]" data-name="Heading" data-node-id="935:2608">
            <button 
              onClick={handleBack}
              className="bg-[#e6ebef] box-border content-stretch cursor-pointer flex gap-[8px] items-center justify-center p-[10px] relative rounded-[8px] shrink-0 size-[34px]"
              data-node-id="935:2609"
            >
              <div className="overflow-clip relative shrink-0 size-[12px]" data-name="fi_130882" data-node-id="935:2610">
                <div className="absolute bottom-0 left-[22.47%] right-[22.47%] top-0" data-name="Group" data-node-id="935:2611">
                  <img alt="" className="block max-w-none size-full" src={imgGroup} />
                </div>
              </div>
            </button>
            <p className="font-['SF_Pro:Semibold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1a1a1a] text-[23px]" data-node-id="935:2613">
              Mon histoire
            </p>
          </div>

          {/* Form Biography - Position exacte: x=40, y=104, width=509, height=251 */}
          <div className="absolute content-stretch flex flex-col gap-[24px] h-[251px] items-start left-[calc(50%+-191.5px)] top-[104px] translate-x-[-50%] w-[509px]" data-name="Form" data-node-id="935:2614">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Textfield" data-node-id="935:2615">
              <p className="font-['SF_Pro:Semibold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1a1a1a] text-[15px] w-full whitespace-pre-wrap" data-node-id="935:2616">
                Biographie
              </p>
              <div className="bg-neutral-50 box-border content-stretch flex flex-[1_0_0] items-start justify-between min-h-[222px] min-w-px p-[12px] relative rounded-[8px] shrink-0 w-full" data-node-id="935:2617">
                {!biography && (
                  <div className="absolute inset-0 p-[12px] pointer-events-none">
                    <ul className="block font-['SF_Pro:Regular',sans-serif] leading-[1.4] not-italic text-[#b3b3b3] text-[15px] whitespace-pre-wrap list-disc list-inside">
                      <li className="mb-0">Qui es-tu ? Mon parcours personnel et sportif.</li>
                      <li className="mb-0">Qu'est-ce qui t'a inspiré à pratiquer ce sport ?</li>
                      <li>Un souvenir, une personne, un rêve, une passion…</li>
                    </ul>
                  </div>
                )}
                <textarea
                  value={biography}
                  onChange={(e) => setBiography(e.target.value)}
                  className="block flex-[1_0_0] font-['SF_Pro:Regular',sans-serif] leading-[1.4] min-h-[198px] min-w-px not-italic relative shrink-0 text-[#1a1a1a] text-[15px] w-full border-none outline-none resize-none bg-transparent"
                />
              </div>
            </div>
          </div>

          {/* Form Inspiration - Position exacte: x=40, y=387, width=509, height=174 */}
          <div className="absolute content-stretch flex flex-col gap-[24px] h-[174px] items-start left-[calc(50%+-191.5px)] top-[387px] translate-x-[-50%] w-[509px]" data-name="Form" data-node-id="935:2620">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Textfield" data-node-id="935:2621">
              <p className="font-['SF_Pro:Semibold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1a1a1a] text-[15px] w-full whitespace-pre-wrap" data-node-id="935:2622">
                Ce qui m'a donné envie de faire ce sport
              </p>
              <textarea
                value={inspiration}
                onChange={(e) => setInspiration(e.target.value)}
                placeholder="Un souvenir, une personne ou une inspiration..."
                className="bg-neutral-50 box-border content-stretch flex flex-[1_0_0] items-start justify-between min-h-[145px] min-w-px p-[12px] relative rounded-[8px] shrink-0 w-full border-none outline-none font-['SF_Pro:Regular',sans-serif] leading-[1.4] not-italic text-[#1a1a1a] text-[15px] placeholder:text-[#b3b3b3] resize-none"
                data-node-id="935:2623"
              />
            </div>
          </div>

          {/* Modal-add Values - Position exacte: x=40, y=593, width=509, height=261 */}
          <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[40px] top-[593px] w-[509px]" data-name="Modal-add" data-node-id="935:2626">
            <p className="font-['SF_Pro:Semibold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1a1a1a] text-[15px] w-full whitespace-pre-wrap" data-node-id="935:2627">
              Valeur ajoutée pour les marques
            </p>
            <div className="box-border content-stretch flex flex-col gap-[16px] items-end px-0 py-[12px] relative shrink-0 w-full" data-name="List" data-node-id="935:2629">
              {values.map((value, index) => (
                <div key={index} className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0 w-full" data-name="Value-item" data-node-id={`935:${2630 + index * 15}`}>
                  <div className="relative shrink-0 size-[18px]" data-name="fi_3793594" data-node-id={`935:${2631 + index * 15}`}>
                    <img alt="" className="block max-w-none size-full" src={imgFi3793594} />
                  </div>
                  <div className="bg-neutral-50 box-border content-stretch flex flex-[1_0_0] h-[40px] items-center justify-between min-h-px min-w-px p-[12px] relative rounded-[8px] shrink-0" data-node-id={`935:${2638 + index * 15}`}>
                    <input
                      type="text"
                      value={value}
                      onChange={(e) => handleValueChange(index, e.target.value)}
                      className="font-['SF_Pro:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1a1a1a] text-[15px] w-full border-none outline-none bg-transparent"
                      data-node-id={`935:${2639 + index * 15}`}
                    />
                  </div>
                  <button
                    onClick={() => handleRemoveValue(index)}
                    className="overflow-clip relative shrink-0 size-[18px] cursor-pointer"
                    data-name="fi_2734822"
                    data-node-id={`935:${2642 + index * 15}`}
                  >
                    <div className="absolute inset-[6.25%_6.24%_6.25%_6.26%]" data-name="Layer 22" data-node-id={`935:${2643 + index * 15}`}>
                      <img alt="" className="block max-w-none size-full" src={imgLayer22} />
                    </div>
                  </button>
                </div>
              ))}
              {/* Input pour nouvelle valeur */}
              <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0 w-full" data-name="Value-item" data-node-id="935:2660">
                <div className="relative shrink-0 size-[18px]" data-name="fi_3793594" data-node-id="935:2661">
                  <img alt="" className="block max-w-none size-full" src={imgFi3793594} />
                </div>
                <input
                  type="text"
                  value={newValue}
                  onChange={(e) => setNewValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleAddValue()}
                  placeholder="Saisir une valeur"
                  className="bg-neutral-50 box-border content-stretch flex flex-[1_0_0] h-[40px] items-center justify-between min-h-px min-w-px p-[12px] relative rounded-[8px] shrink-0 border-none outline-none font-['SF_Pro:Regular',sans-serif] leading-[1.4] not-italic text-[#1a1a1a] text-[15px] placeholder:text-[#b3b3b3]"
                  data-node-id="935:2668"
                />
                <div className="overflow-clip relative shrink-0 size-[18px] opacity-0 pointer-events-none">
                  <div className="absolute inset-[6.25%_6.24%_6.25%_6.26%]" data-name="Layer 22">
                    <img alt="" className="block max-w-none size-full" src={imgLayer22} />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[10px] h-[40px] items-center relative shrink-0 w-full cursor-pointer" data-name="Add" data-node-id="935:2675" onClick={handleAddValue}>
                <p className="font-['SF_Pro:Semibold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#0ca99a] text-[15px] hover:underline" data-node-id="935:2676">
                  +Ajouter une valeur
                </p>
              </div>
            </div>
          </div>

          {/* Photos/Vidéo - Position exacte: x=582, y=104, width=350, height=421 */}
          <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[582px] top-[104px] w-[350px]" data-name="Textfield" data-node-id="935:2677">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="935:2678">
              <p className="font-['SF_Pro:Semibold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1a1a1a] text-[15px]" data-node-id="935:2679">
                Photos/Vidéo
              </p>
            </div>
            {/* Ligne 1 - 3 images */}
            <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-node-id="935:2681">
              <div className="flex-[1_0_0] h-[92px] min-h-px min-w-px relative rounded-[8px] shrink-0 group" data-name="Icon Container" data-node-id="935:2682">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px] overflow-hidden">
                  <div className="absolute bg-[rgba(223,223,223,0.2)] inset-0 rounded-[8px]" />
                  <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full transition-transform duration-500 ease-in-out group-hover:scale-110" src={imgIconContainer} />
                </div>
              </div>
              <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] self-stretch shrink-0 group" data-name="Icon Container" data-node-id="935:2683">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px] overflow-hidden">
                  <div className="absolute bg-[rgba(223,223,223,0.2)] inset-0 rounded-[8px]" />
                  <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full transition-transform duration-500 ease-in-out group-hover:scale-110" src={imgIconContainer1} />
                </div>
              </div>
              <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] self-stretch shrink-0 group" data-name="Icon Container" data-node-id="935:2684">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px] overflow-hidden">
                  <div className="absolute bg-[rgba(223,223,223,0.2)] inset-0 rounded-[8px]" />
                  <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full transition-transform duration-500 ease-in-out group-hover:scale-110" src={imgIconContainer2} />
                </div>
              </div>
            </div>
            {/* Ligne 2 - 3 images */}
            <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-node-id="935:2685">
              <div className="flex-[1_0_0] h-[92px] min-h-px min-w-px relative rounded-[8px] shrink-0 group" data-name="Icon Container" data-node-id="935:2686">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px] overflow-hidden">
                  <div className="absolute bg-[rgba(223,223,223,0.2)] inset-0 rounded-[8px]" />
                  <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full transition-transform duration-500 ease-in-out group-hover:scale-110" src={imgIconContainer3} />
                </div>
              </div>
              <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] self-stretch shrink-0 group" data-name="Icon Container" data-node-id="935:2687">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px] overflow-hidden">
                  <div className="absolute bg-[rgba(223,223,223,0.2)] inset-0 rounded-[8px]" />
                  <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full transition-transform duration-500 ease-in-out group-hover:scale-110" src={imgIconContainer4} />
                </div>
              </div>
              <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] self-stretch shrink-0 group" data-name="Icon Container" data-node-id="935:2688">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px] overflow-hidden">
                  <div className="absolute bg-[rgba(223,223,223,0.2)] inset-0 rounded-[8px]" />
                  <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full transition-transform duration-500 ease-in-out group-hover:scale-110" src={imgIconContainer5} />
                </div>
              </div>
            </div>
            {/* Ligne 3 - 3 images */}
            <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-node-id="935:2689">
              <div className="flex-[1_0_0] h-[92px] min-h-px min-w-px relative rounded-[8px] shrink-0 group" data-name="Icon Container" data-node-id="935:2690">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px] overflow-hidden">
                  <div className="absolute bg-[rgba(223,223,223,0.2)] inset-0 rounded-[8px]" />
                  <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full transition-transform duration-500 ease-in-out group-hover:scale-110" src={imgIconContainer6} />
                </div>
              </div>
              <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] self-stretch shrink-0 group" data-name="Icon Container" data-node-id="935:2691">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px] overflow-hidden">
                  <div className="absolute bg-[rgba(223,223,223,0.2)] inset-0 rounded-[8px]" />
                  <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full transition-transform duration-500 ease-in-out group-hover:scale-110" src={imgIconContainer7} />
                </div>
              </div>
              <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] self-stretch shrink-0 group" data-name="Icon Container" data-node-id="935:2692">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px] overflow-hidden">
                  <div className="absolute bg-[rgba(223,223,223,0.2)] inset-0 rounded-[8px]" />
                  <div className="absolute inset-0 overflow-hidden rounded-[8px]">
                    <img alt="" className="absolute h-[121.01%] left-0 max-w-none top-[-1.58%] w-full" src={imgIconContainer8} />
                  </div>
                </div>
              </div>
            </div>
            {/* Ligne 4 - 2 images + bouton add */}
            <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-node-id="935:2693">
              <div className="flex-[1_0_0] h-[92px] min-h-px min-w-px relative rounded-[8px] shrink-0 group" data-name="Icon Container" data-node-id="935:2694">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px] overflow-hidden">
                  <div className="absolute bg-[rgba(223,223,223,0.2)] inset-0 rounded-[8px]" />
                  <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full transition-transform duration-500 ease-in-out group-hover:scale-110" src={imgIconContainer9} />
                </div>
              </div>
              <div className="flex-[1_0_0] h-[92px] min-h-px min-w-px relative rounded-[8px] shrink-0 group" data-name="Icon Container" data-node-id="935:2695">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px] overflow-hidden">
                  <div className="absolute bg-[rgba(223,223,223,0.2)] inset-0 rounded-[8px]" />
                  <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full transition-transform duration-500 ease-in-out group-hover:scale-110" src={imgIconContainer10} />
                </div>
              </div>
              <div className="border border-[#cccccc] border-dashed box-border content-stretch flex flex-[1_0_0] gap-[10px] h-[92px] items-center justify-center min-h-px min-w-px relative rounded-[12px] shrink-0 cursor-pointer hover:border-[#0ca99a] transition-colors" data-name="Icon Container" data-node-id="935:2696">
                <div className="overflow-clip relative shrink-0 size-[18px]" data-name="fi_9312231" data-node-id="935:2697">
                  <div className="absolute contents inset-[14.07%_14.06%_14.07%_14.07%]" data-name="Group" data-node-id="935:2698">
                    <div className="absolute inset-[14.07%_45.12%]" data-name="Group" data-node-id="935:2699">
                      <img alt="" className="block max-w-none size-full" src={imgGroup1} />
                    </div>
                    <div className="absolute inset-[45.12%_14.06%_45.12%_14.07%]" data-name="Group" data-node-id="935:2701">
                      <img alt="" className="block max-w-none size-full" src={imgGroup2} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Button Continuer - Position exacte: x=776, y=899, width=156, height=40 */}
          <button 
            onClick={() => navigate('/athlete-palmares')}
            className="btn-primary absolute bottom-[38px] box-border content-stretch cursor-pointer flex gap-[10px] h-[40px] items-center justify-center left-[776px] p-[10px] rounded-[8px] w-[156px]" 
            data-name="Button" 
            data-node-id="935:2703"
          >
            <p className="font-['SF_Pro:Semibold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[15px] text-white" data-node-id="935:2704">
              Continuer
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
