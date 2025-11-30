import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AthleteStepper from './AthleteStepper';

// Images servies depuis le dossier public
const imgGroup = '/assets/group-back-documents.svg';
const imgArrowUpload = '/assets/arrow-upload-documents.svg';
const imgLayer2 = '/assets/layer-2-documents.svg';
const imgLayer22 = '/assets/layer-22-documents.svg';

export default function AthleteDocuments() {
  const navigate = useNavigate();
  const [files, setFiles] = useState([
    { name: 'CV.pdf', size: '1.690 KB' },
    { name: 'Lettre_de_motivation.pdf', size: '3.67 KB' }
  ]);

  const handleBack = () => {
    navigate('/athlete-collaborations');
  };

  const handleFileUpload = (e) => {
    const uploadedFiles = Array.from(e.target.files).map(file => ({
      name: file.name,
      size: `${(file.size / 1024).toFixed(2)} KB`
    }));
    setFiles([...files, ...uploadedFiles]);
  };

  const handleRemoveFile = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-[#f5f8ff] relative size-full" data-name="On boarding-10" data-node-id="507:2798">
      {/* Stepper - Left Sidebar */}
      <AthleteStepper activeStepId={10} />

      {/* Container - Right Column */}
      <div className="absolute backdrop-blur-[44px] backdrop-filter border border-[rgba(255,255,255,0.3)] border-solid h-[777px] left-[364px] overflow-clip rounded-[24px] top-[calc(50%+-1.5px)] translate-y-[-50%] w-[1052px]" data-name="Container" data-node-id="507:2864">
        <div className="absolute bg-white h-[705px] left-1/2 overflow-clip rounded-[16px] top-[35px] translate-x-[-50%] w-[972px]" data-name="Block" data-node-id="507:2865">
          {/* Heading */}
          <div className="absolute content-stretch flex gap-[12px] items-center left-[40px] top-[38px]" data-name="Heading" data-node-id="507:2866">
            <button 
              onClick={handleBack}
              className="bg-[#e6ebef] box-border content-stretch cursor-pointer flex gap-[8px] items-center justify-center p-[10px] relative rounded-[8px] shrink-0 size-[34px]"
              data-node-id="507:2867"
            >
              <div className="overflow-clip relative shrink-0 size-[12px]" data-name="fi_130882" data-node-id="507:2868">
                <div className="absolute bottom-0 left-[22.47%] right-[22.47%] top-0" data-name="Group" data-node-id="507:2869">
                  <img alt="" className="block max-w-none size-full" src={imgGroup} />
                </div>
              </div>
            </button>
            <p className="font-['SF_Pro:Semibold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1a1a1a] text-[23px]" data-node-id="507:2871">
              Documents disponibles (en option)
            </p>
          </div>

          {/* Pièce jointe */}
          <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[40px] top-[104px] w-[468px]" data-name="Textfield" data-node-id="507:2934">
            <p className="font-['SF_Pro:Semibold',sans-serif] leading-[1.4] min-w-full not-italic relative shrink-0 text-[#1a1a1a] text-[15px] w-[min-content] whitespace-pre-wrap" data-node-id="507:2935">
              Pièce jointe
            </p>
            <label className="border border-[#cccccc] border-dashed box-border content-stretch flex gap-[10px] h-[80px] items-center justify-center relative rounded-[8px] shrink-0 w-full cursor-pointer hover:border-[#0ca99a] transition-colors" data-name="Icon Container" data-node-id="507:2937">
              <input
                type="file"
                multiple
                onChange={handleFileUpload}
                className="hidden"
              />
              <div className="relative shrink-0 size-[24px]" data-name="arrow upload" data-node-id="507:2938">
                <div className="absolute inset-[15.95%_12.5%_12.5%_12.5%]" data-name="Vector" data-node-id="I507:2938;22335:16302">
                  <img alt="" className="block max-w-none size-full" src={imgArrowUpload} />
                </div>
              </div>
              <p className="font-['SF_Pro:Semibold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#0ca99a] text-[12px]" data-node-id="507:2939">
                Parcourir le fichier
              </p>
            </label>
            
            {/* Liste des fichiers uploadés */}
            {files.map((file, index) => (
              <div key={index} className="content-stretch flex h-[37px] items-center justify-between relative rounded-[8px] shrink-0 w-[283px]" data-name="Uploaded" data-node-id={`507:${2940 + index * 9}`}>
                <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-node-id={`507:${2941 + index * 9}`}>
                  <div className="overflow-clip relative shrink-0 size-[18px]" data-name="fi_8138518" data-node-id={`507:${2942 + index * 9}`}>
                    <div className="absolute inset-[8.56%_4.12%_8.54%_4.12%]" data-name="Layer 2" data-node-id={`507:${2943 + index * 9}`}>
                      <img alt="" className="block max-w-none size-full" src={imgLayer2} />
                    </div>
                  </div>
                  <p className="font-['SF_Pro:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1a1a1a] text-[0px]" data-node-id={`507:${2945 + index * 9}`}>
                    <span className="text-[12px]">{file.name} </span>
                    <span className="font-['SF_Pro:Semibold',sans-serif] text-[#b3b3b3] text-[10px]">({file.size})</span>
                  </p>
                </div>
                <button
                  onClick={() => handleRemoveFile(index)}
                  className="overflow-clip relative shrink-0 size-[18px] cursor-pointer hover:opacity-80 transition-opacity"
                  data-name="fi_2734822"
                  data-node-id={`507:${2946 + index * 9}`}
                >
                  <div className="absolute inset-[6.25%]" data-name="Layer 22" data-node-id={`507:${2947 + index * 9}`}>
                    <img alt="" className="block max-w-none size-full" src={imgLayer22} />
                  </div>
                </button>
              </div>
            ))}
          </div>

          {/* Button Complète */}
          <button 
            onClick={() => navigate('/athlete-dashboard')}
            className="btn-primary absolute box-border content-stretch cursor-pointer flex gap-[10px] h-[40px] items-center justify-center left-[776px] p-[10px] rounded-[8px] top-[619px] w-[156px]" 
            data-name="Button" 
            data-node-id="507:2875"
          >
            <p className="font-['SF_Pro:Semibold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[15px] text-white" data-node-id="507:2876">
              Compléter
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

