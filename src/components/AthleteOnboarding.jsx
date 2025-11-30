import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AthleteStepper from './AthleteStepper';

// Images servies depuis le dossier public
const logoSet = '/assets/Logo set.svg';
const circleStep = '/assets/circle-step.svg';
const fi9347603 = '/assets/fi-9347603.svg';
const fi149071 = '/assets/fi-149071.svg';
const fi2956744 = '/assets/fi-2956744.svg';

const sportsDisciplines = [
  'Football',
  'Tennis',
  'Équitation',
  'Basketball',
  'Judo',
  'Handball',
  'Rugby à XV',
  'Golf',
  'Natation',
  'Athlétisme',
  'Gymnastique',
  'Badminton',
  'Cyclisme',
  'Randonnée Pédestre',
  'Pétanque'
];

const categories = [
  'Catégories d\'âge',
  'U6',
  'U7',
  'U8',
  'U9',
  'U10',
  'U11',
  'U12',
  'U13',
  'U14',
  'U15',
  'U16',
  'U17',
  'U18',
  'U19',
  'U20',
  'Seniors',
  'Vétérans',
  'Niveaux de compétition',
  'Ligue 1',
  'Ligue 2',
  'National 1',
  'National 2',
  'National 3',
  'Régional 1',
  'Régional 2',
  'Régional 3',
  'Départemental 1',
  'Départemental 2',
  'Départemental 3',
  'Départemental 4',
  'Loisir'
];

const countries = [
  'France',
  'Allemagne',
  'Royaume-Uni',
  'Espagne',
  'Italie'
];

const citiesByCountry = {
  'France': [
    'Paris',
    'Marseille',
    'Lyon',
    'Toulouse',
    'Nice',
    'Nantes',
    'Montpellier',
    'Strasbourg',
    'Bordeaux',
    'Lille',
    'Rennes',
    'Reims',
    'Toulon',
    'Saint-Étienne',
    'Le Havre',
    'Grenoble',
    'Dijon',
    'Angers',
    'Villeurbanne',
    'Nîmes'
  ],
  'Allemagne': [
    'Berlin',
    'Hambourg',
    'Munich',
    'Cologne',
    'Francfort-sur-le-Main',
    'Stuttgart',
    'Düsseldorf',
    'Leipzig',
    'Dortmund',
    'Essen',
    'Brême',
    'Dresde',
    'Hanovre',
    'Nuremberg',
    'Duisbourg',
    'Bochum',
    'Wuppertal',
    'Bielefeld',
    'Bonn',
    'Münster'
  ],
  'Royaume-Uni': [
    'Londres',
    'Birmingham',
    'Glasgow',
    'Manchester',
    'Liverpool',
    'Leeds',
    'Sheffield',
    'Édimbourg',
    'Bristol',
    'Leicester',
    'Coventry',
    'Bradford',
    'Cardiff',
    'Belfast',
    'Nottingham',
    'Kingston upon Hull',
    'Newcastle upon Tyne',
    'Stoke-on-Trent',
    'Southampton',
    'Derby'
  ],
  'Espagne': [
    'Madrid',
    'Barcelone',
    'Valence',
    'Séville',
    'Saragosse',
    'Málaga',
    'Murcie',
    'Palma de Majorque',
    'Las Palmas de Gran Canaria',
    'Bilbao',
    'Alicante',
    'Cordoue',
    'Valladolid',
    'Vigo',
    'Gijón',
    'L\'Hospitalet de Llobregat',
    'Vitoria-Gasteiz',
    'La Corogne',
    'Elche',
    'Grenade'
  ],
  'Italie': [
    'Rome',
    'Milan',
    'Naples',
    'Turin',
    'Palerme',
    'Gênes',
    'Bologne',
    'Florence',
    'Bari',
    'Catane',
    'Venise',
    'Vérone',
    'Messine',
    'Padoue',
    'Trieste',
    'Tarente',
    'Brescia',
    'Parme',
    'Prato',
    'Modène'
  ]
};

export default function AthleteOnboarding() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('Guy Hawkins');
  const [clubName, setClubName] = useState('');
  const [selectedDiscipline, setSelectedDiscipline] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const disciplineSelectRef = useRef(null);
  const categorySelectRef = useRef(null);
  const countrySelectRef = useRef(null);
  const citySelectRef = useRef(null);

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    setSelectedCity(''); // Réinitialiser la ville quand le pays change
  };

  const handleArrowClick = (selectRef) => {
    if (selectRef.current) {
      // Focus le select
      selectRef.current.focus();
      
      // Créer et dispatcher un événement mousedown pour ouvrir le menu
      // C'est l'événement qui déclenche l'ouverture du menu déroulant natif
      const event = new MouseEvent('mousedown', {
        bubbles: true,
        cancelable: true,
        view: window,
        button: 0
      });
      
      // Dispatcher l'événement directement sur le select
      selectRef.current.dispatchEvent(event);
      
      // Aussi essayer avec un événement click après un court délai
      setTimeout(() => {
        const clickEvent = new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window,
          button: 0
        });
        selectRef.current.dispatchEvent(clickEvent);
      }, 10);
    }
  };
  return (
    <div className="bg-[#f5f8ff] relative size-full" data-name="On boarding-1" data-node-id="341:3333">
      {/* Stepper - Left Sidebar */}
      <AthleteStepper activeStepId={1} />

      {/* Container - Right Column with Form */}
      <div className="absolute backdrop-blur-[44px] backdrop-filter border border-[rgba(255,255,255,0.3)] border-solid h-[777px] left-[364px] overflow-clip rounded-[24px] top-[calc(50%+-1.5px)] translate-y-[-50%] w-[1052px]" data-name="Container" data-node-id="341:3411">
        <div className="absolute bg-white h-[705px] left-1/2 overflow-clip rounded-[16px] top-[35px] translate-x-[-50%] w-[972px]" data-name="Block" data-node-id="341:3412">
          {/* Heading */}
          <div className="absolute content-stretch flex gap-[12px] items-center left-[40px] top-[38px]" data-name="Heading" data-node-id="341:3482">
            <p className="font-['SF_Pro:Semibold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1a1a1a] text-[23px]" data-node-id="341:3487">
              Infos générales
            </p>
          </div>

          {/* Profile Picture Section */}
          <div className="absolute content-stretch flex gap-[12px] items-center left-[40px] top-[94px]" data-name="Update profile pic" data-node-id="341:3488">
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-items-start leading-[0] relative shrink-0" data-node-id="341:3489">
              <div className="col-[1] ml-0 mt-0 relative row-[1] size-[150px]" data-name="fi_149071" data-node-id="341:3490">
                <img alt="" className="block max-w-none size-full" src={fi149071} />
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[17px] items-start relative shrink-0 w-[209px]" data-node-id="341:3494">
              <button className="btn-secondary box-border content-stretch cursor-pointer flex gap-[10px] h-[40px] items-center justify-center p-[10px] relative rounded-[8px] shrink-0 w-[188px]" data-name="Button" data-node-id="341:3495">
                <div className="relative shrink-0 size-[18px]" data-name="fi_2956744" data-node-id="341:3496">
                  <img alt="" className="block max-w-none size-full" src={fi2956744} />
                </div>
                <p className="font-['SF_Pro:Semibold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1a1a1a] text-[15px]" data-node-id="341:3500">
                  Photo de profil
                </p>
              </button>
              <p className="font-['SF_Pro:Regular',sans-serif] leading-[1.4] min-w-full not-italic relative shrink-0 text-[#666666] text-[12px] w-[min-content] whitespace-pre-wrap" data-node-id="341:3501">
                Au moins 500×500 px recommandé.
                <br aria-hidden="true" />
                Les formats JPG ou PNG sont autorisés.
              </p>
            </div>
          </div>

          {/* Form Fields - Left Column */}
          <div className="absolute content-stretch flex flex-col gap-[24px] items-start justify-center left-[40px] top-[280px] w-[381px]" data-node-id="722:6203">
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Textfield" data-node-id="341:3450">
              <p className="font-['SF_Pro:Semibold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1a1a1a] text-[15px] w-full whitespace-pre-wrap" data-node-id="341:3451">
                Nom complet
              </p>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="bg-neutral-50 box-border content-stretch flex h-[40px] items-center justify-between p-[var(--12px,12px)] relative rounded-[8px] shrink-0 w-full border-none outline-none font-['SF_Pro:Regular',sans-serif] leading-[1.4] not-italic text-[#1a1a1a] text-[15px]"
                data-node-id="341:3452"
              />
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Textfield" data-node-id="722:6179">
              <p className="font-['SF_Pro:Semibold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1a1a1a] text-[15px] w-full whitespace-pre-wrap" data-node-id="722:6180">
                Discipline sportive
              </p>
              <div 
                className="bg-neutral-50 box-border content-stretch flex h-[40px] items-center justify-between p-[var(--12px,12px)] relative rounded-[8px] shrink-0 w-full" 
                data-node-id="722:6181"
              >
                <select
                  ref={disciplineSelectRef}
                  value={selectedDiscipline}
                  onChange={(e) => setSelectedDiscipline(e.target.value)}
                  className={`bg-transparent border-none outline-none flex-1 font-['SF_Pro:Regular',sans-serif] leading-[1.4] not-italic text-[15px] cursor-pointer appearance-none ${
                    selectedDiscipline ? 'text-[#1a1a1a]' : 'text-[#b3b3b3]'
                  }`}
                >
                  <option value="" disabled hidden></option>
                  {sportsDisciplines.map((discipline) => (
                    <option key={discipline} value={discipline} className="text-[#1a1a1a]">
                      {discipline}
                    </option>
                  ))}
                </select>
                <div 
                  className="relative shrink-0 size-[14px] cursor-pointer pointer-events-auto" 
                  data-name="fi_9347603" 
                  data-node-id="722:6183"
                  onClick={() => handleArrowClick(disciplineSelectRef)}
                >
                  <img alt="" className="block max-w-none size-full" src={fi9347603} />
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Textfield" data-node-id="722:6186">
              <p className="font-['SF_Pro:Semibold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1a1a1a] text-[15px] w-full whitespace-pre-wrap" data-node-id="722:6187">
                Catégorie
              </p>
              <div 
                className="bg-neutral-50 box-border content-stretch flex h-[40px] items-center justify-between p-[var(--12px,12px)] relative rounded-[8px] shrink-0 w-full" 
                data-node-id="722:6198"
              >
                <select
                  ref={categorySelectRef}
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className={`bg-transparent border-none outline-none flex-1 font-['SF_Pro:Regular',sans-serif] leading-[1.4] not-italic text-[15px] cursor-pointer appearance-none ${
                    selectedCategory ? 'text-[#1a1a1a]' : 'text-[#b3b3b3]'
                  }`}
                >
                  <option value="" disabled hidden></option>
                  {categories.map((category) => (
                    <option key={category} value={category} className="text-[#1a1a1a]">
                      {category}
                    </option>
                  ))}
                </select>
                <div 
                  className="relative shrink-0 size-[14px] cursor-pointer pointer-events-auto" 
                  data-name="fi_9347603"
                  onClick={() => handleArrowClick(categorySelectRef)}
                >
                  <img alt="" className="block max-w-none size-full" src={fi9347603} />
                </div>
              </div>
            </div>
          </div>

          {/* Form Fields - Right Column */}
          <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[calc(50%+224px)] top-[280px] translate-x-[-50%] w-[444px]" data-name="Form" data-node-id="341:3413">
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Textfield" data-node-id="341:3428">
              <p className="font-['SF_Pro:Semibold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1a1a1a] text-[15px] w-full whitespace-pre-wrap" data-node-id="341:3429">
                Club actuel
              </p>
              <input
                type="text"
                value={clubName}
                onChange={(e) => setClubName(e.target.value)}
                placeholder="Nom du club"
                className="bg-neutral-50 box-border content-stretch flex h-[40px] items-center justify-between p-[var(--12px,12px)] relative rounded-[8px] shrink-0 w-full border-none outline-none font-['SF_Pro:Regular',sans-serif] leading-[1.4] not-italic text-[#1a1a1a] text-[15px] placeholder:text-[#b3b3b3]"
                data-node-id="341:3430"
              />
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Textfield" data-node-id="341:3435">
              <p className="font-['SF_Pro:Semibold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1a1a1a] text-[15px] w-full whitespace-pre-wrap" data-node-id="341:3436">
                Pays
              </p>
              <div 
                className="bg-neutral-50 box-border content-stretch flex h-[40px] items-center justify-between p-[var(--12px,12px)] relative rounded-[8px] shrink-0 w-full" 
                data-node-id="341:3437"
              >
                <select
                  ref={countrySelectRef}
                  value={selectedCountry}
                  onChange={handleCountryChange}
                  className={`bg-transparent border-none outline-none flex-1 font-['SF_Pro:Regular',sans-serif] leading-[1.4] not-italic text-[15px] cursor-pointer appearance-none ${
                    selectedCountry ? 'text-[#1a1a1a]' : 'text-[#b3b3b3]'
                  }`}
                >
                  <option value="" disabled hidden></option>
                  {countries.map((country) => (
                    <option key={country} value={country} className="text-[#1a1a1a]">
                      {country}
                    </option>
                  ))}
                </select>
                <div 
                  className="relative shrink-0 size-[14px] cursor-pointer pointer-events-auto" 
                  data-name="fi_9347603" 
                  data-node-id="341:3439"
                  onClick={() => handleArrowClick(countrySelectRef)}
                >
                  <img alt="" className="block max-w-none size-full" src={fi9347603} />
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Textfield" data-node-id="341:3442">
              <p className="font-['SF_Pro:Semibold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1a1a1a] text-[15px] w-full whitespace-pre-wrap" data-node-id="341:3443">
                Ville
              </p>
              <div 
                className="bg-neutral-50 box-border content-stretch flex h-[40px] items-center justify-between p-[var(--12px,12px)] relative rounded-[8px] shrink-0 w-full" 
                data-node-id="341:3444"
              >
                <select
                  ref={citySelectRef}
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  disabled={!selectedCountry}
                  className={`bg-transparent border-none outline-none flex-1 font-['SF_Pro:Regular',sans-serif] leading-[1.4] not-italic text-[15px] cursor-pointer appearance-none ${
                    !selectedCountry 
                      ? 'text-[#b3b3b3] cursor-not-allowed' 
                      : selectedCity 
                        ? 'text-[#1a1a1a]' 
                        : 'text-[#b3b3b3]'
                  }`}
                >
                  <option value="" disabled hidden></option>
                  {selectedCountry && citiesByCountry[selectedCountry]?.map((city) => (
                    <option key={city} value={city} className="text-[#1a1a1a]">
                      {city}
                    </option>
                  ))}
                </select>
                <div 
                  className={`relative shrink-0 size-[14px] pointer-events-auto ${
                    selectedCountry ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'
                  }`}
                  data-name="fi_9347603" 
                  data-node-id="341:3446"
                  onClick={() => selectedCountry && handleArrowClick(citySelectRef)}
                >
                  <img alt="" className="block max-w-none size-full" src={fi9347603} />
                </div>
              </div>
            </div>
          </div>

          {/* Continue Button */}
          <button 
            onClick={() => navigate('/athlete-story')}
            className="btn-primary absolute box-border content-stretch cursor-pointer flex gap-[10px] h-[40px] items-center justify-center left-[776px] p-[10px] rounded-[8px] top-[619px] w-[156px]" 
            data-name="Button" 
            data-node-id="341:3502"
          >
            <p className="font-['SF_Pro:Semibold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[15px] text-white" data-node-id="341:3503">
              Continuer
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

