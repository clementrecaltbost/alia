import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AthleteStepper from './AthleteStepper';

// Images servies depuis le dossier public - IDs exacts depuis Figma
const imgVector = '/assets/vector-services-1.svg';
const imgVector1 = '/assets/vector-services-2.svg';
const imgVector2 = '/assets/vector-services-3.svg';
const imgCircle = '/assets/circle-services.svg';
const imgGroup = '/assets/group-back-services.svg';
const imgFi1442912 = '/assets/fi-1442912-services.svg';
const imgGroup1 = '/assets/group-add-services-1.svg';
const imgGroup2 = '/assets/group-add-services-2.svg';
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
  { id: 6, label: 'Services', active: true, path: '/athlete-services' },
  { id: 7, label: 'Calendrier sportif à venir', active: false, path: '/athlete-calendrier' },
  { id: 8, label: 'Statistiques et audiences', active: false, path: '/athlete-statistiques' },
  { id: 9, label: 'Collaborations précédentes', active: false, path: '/athlete-collaborations' },
  { id: 10, label: 'Documents disponibles', active: false, path: '/athlete-documents' },
];

const services = [
  { 
    id: 'visibilite', 
    title: 'Visibilité & communication', 
    description: 'Logo sur la tenue, publications sur les réseaux, présence médiatique',
    selected: true,
    position: { x: 40, y: 98 },
    nodeId: '462:1525'
  },
  { 
    id: 'evenementiel', 
    title: 'Événementiel & team building', 
    description: 'Ateliers sportifs, animation d\'événements, journées cohésion',
    selected: false,
    position: { x: 492, y: 98 },
    nodeId: '462:1543'
  },
  { 
    id: 'conferences', 
    title: 'Conférences & inspiration', 
    description: 'Témoignages, interventions en entreprise, partage de parcours',
    selected: false,
    position: { x: 40, y: 217 },
    nodeId: '462:1555'
  },
  { 
    id: 'creation', 
    title: 'Création de contenu', 
    description: 'Shooting photo, vidéos, collaborations avec la marque',
    selected: false,
    position: { x: 492, y: 217 },
    nodeId: '462:1549'
  },
  { 
    id: 'ambassadeur', 
    title: 'Ambassadeur de marque', 
    description: 'Représentation officielle lors de compétitions ou d\'événements publics',
    selected: true,
    position: { x: 492, y: 336 },
    nodeId: '462:1561'
  },
  { 
    id: 'rse', 
    title: 'Engagement RSE & local', 
    description: 'Actions inclusives, projets associatifs, événements communautaires',
    selected: false,
    position: { x: 40, y: 336 },
    nodeId: '462:1567'
  },
];

export default function AthleteServices() {
  const navigate = useNavigate();
  const [selectedServices, setSelectedServices] = useState(
    services.filter(s => s.selected).map(s => s.id)
  );
  const [customDescription, setCustomDescription] = useState('');

  const handleBack = () => {
    navigate('/athlete-financement');
  };

  const handleServiceToggle = (serviceId) => {
    setSelectedServices(prev => 
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  return (
    <div className="bg-[#f5f8ff] relative size-full" data-name="On boarding-6" data-node-id="450:2493">
      {/* Stepper - Left Sidebar */}
      <AthleteStepper activeStepId={6} />
      {/* Container - Right Column */}
      <div className="absolute backdrop-blur-[44px] backdrop-filter border border-[rgba(255,255,255,0.3)] border-solid h-[777px] left-[364px] overflow-clip rounded-[24px] top-[calc(50%+-1.5px)] translate-y-[-50%] w-[1052px]" data-name="Container" data-node-id="450:2560">
        <div className="absolute bg-white h-[705px] left-1/2 overflow-clip rounded-[16px] top-[35px] translate-x-[-50%] w-[972px]" data-name="Block" data-node-id="450:2561">
          {/* Heading */}
          <div className="absolute content-stretch flex gap-[12px] items-center left-[40px] top-[38px]" data-name="Heading" data-node-id="450:2562">
            <button 
              onClick={handleBack}
              className="bg-[#e6ebef] box-border content-stretch cursor-pointer flex gap-[8px] items-center justify-center p-[10px] relative rounded-[8px] shrink-0 size-[34px]"
              data-node-id="450:2563"
            >
              <div className="overflow-clip relative shrink-0 size-[12px]" data-name="fi_130882" data-node-id="450:2564">
                <div className="absolute bottom-0 left-[22.47%] right-[22.47%] top-0" data-name="Group" data-node-id="450:2565">
                  <img alt="" className="block max-w-none size-full" src={imgGroup} />
                </div>
              </div>
            </button>
            <p className="font-['SF_Pro:Semibold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1a1a1a] text-[23px]" data-node-id="450:2567">
              Services
            </p>
          </div>

          {/* Services Grid */}
          {services.map((service) => {
            const isSelected = selectedServices.includes(service.id);
            return (
              <button
                key={service.id}
                onClick={() => handleServiceToggle(service.id)}
                className={`absolute border box-border content-stretch flex h-[107px] items-center justify-between px-[16px] py-[12px] rounded-[8px] ${
                  isSelected 
                    ? 'border-[#0ca99a] border-solid' 
                    : 'border-[#ececec] border-solid'
                }`}
                style={{
                  left: `${service.position.x}px`,
                  top: `${service.position.y}px`,
                  width: '440px'
                }}
                data-node-id={service.nodeId}
              >
                <div className="content-stretch flex flex-col gap-[8px] items-start leading-[1.4] not-italic relative shrink-0 text-[15px] w-[320px] whitespace-pre-wrap" data-node-id={service.nodeId === '462:1525' ? '462:1526' : service.nodeId === '462:1543' ? '462:1544' : service.nodeId === '462:1555' ? '462:1556' : service.nodeId === '462:1549' ? '462:1550' : service.nodeId === '462:1561' ? '462:1562' : '462:1568'}>
                  <p className="font-['SF_Pro:Semibold',sans-serif] relative shrink-0 text-[#1a1a1a] w-full" data-node-id={service.nodeId === '462:1525' ? '462:1527' : service.nodeId === '462:1543' ? '462:1545' : service.nodeId === '462:1555' ? '462:1557' : service.nodeId === '462:1549' ? '462:1551' : service.nodeId === '462:1561' ? '462:1563' : '462:1569'}>
                    {service.title}
                  </p>
                  <p className="font-['SF_Pro:Regular',sans-serif] relative shrink-0 text-[#666666] w-full" data-node-id={service.nodeId === '462:1525' ? '462:1528' : service.nodeId === '462:1543' ? '462:1546' : service.nodeId === '462:1555' ? '462:1558' : service.nodeId === '462:1549' ? '462:1552' : service.nodeId === '462:1561' ? '462:1564' : '462:1570'}>
                    {service.description}
                  </p>
                </div>
                {isSelected && (
                  <div className="relative shrink-0 size-[24px]" data-name="fi_1442912" data-node-id={service.nodeId === '462:1525' ? '462:1529' : '462:1565'}>
                    <img alt="" className="block max-w-none size-full" src={imgFi1442912} />
                  </div>
                )}
              </button>
            );
          })}

          {/* Description personnalisée */}
          <div className={`absolute border box-border content-stretch flex flex-col gap-[8px] h-[107px] items-start justify-between px-[16px] py-[12px] rounded-[8px] left-[40px] top-[455px] w-[440px] ${
            customDescription 
              ? 'border-[#0ca99a] border-solid' 
              : 'border-[#cccccc] border-dashed'
          }`} data-node-id="474:1448">
            {!customDescription && (
              <div className="absolute inset-0 flex gap-[8px] items-center justify-center px-[16px] py-[12px] pointer-events-none z-0" data-node-id="474:1449">
                <div className="overflow-clip relative shrink-0 size-[18px]" data-name="fi_9312231" data-node-id="474:1461">
                  <div className="absolute contents inset-[14.07%_11.47%_14.07%_16.67%]" data-name="Group" data-node-id="474:1462">
                    <div className="absolute inset-[14.07%_45.12%]" data-name="Group" data-node-id="474:1463">
                      <img alt="" className="block max-w-none size-full" src={imgGroup1} />
                    </div>
                    <div className="absolute inset-[44.44%_11.47%_45.79%_16.67%]" data-name="Group" data-node-id="474:1465">
                      <img alt="" className="block max-w-none size-full" src={imgGroup2} />
                    </div>
                  </div>
                </div>
                <p className="font-['SF_Pro:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#666666] text-[15px]" data-node-id="474:1451">
                  Description personnalisée (facultatif)
                </p>
              </div>
            )}
            <textarea
              value={customDescription}
              onChange={(e) => setCustomDescription(e.target.value)}
              placeholder=""
              className="flex-[1_0_0] font-['SF_Pro:Regular',sans-serif] leading-[1.4] min-h-px min-w-0 not-italic relative shrink-0 text-[#1a1a1a] text-[15px] w-full h-full border-none outline-none bg-transparent resize-none z-10"
              style={{ padding: 0 }}
            />
          </div>

          {/* Button Continuer */}
          <button 
            onClick={() => navigate('/athlete-calendrier')}
            className="btn-primary absolute box-border content-stretch cursor-pointer flex gap-[10px] h-[40px] items-center justify-center left-[776px] p-[10px] rounded-[8px] top-[619px] w-[156px]" 
            data-name="Button" 
            data-node-id="683:3283"
          >
            <p className="font-['SF_Pro:Semibold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[15px] text-white" data-node-id="683:3284">
              Continuer
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

