import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import AliaLogo from './AliaLogo';
import SideNav from './SideNav';


export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation basique
    if (formData.password !== formData.confirmPassword) {
      alert('Les mots de passe ne correspondent pas');
      return;
    }
    // Rediriger vers la sélection de rôle
    navigate('/user-type');
  };

  return (
    <div className="bg-neutral-100 relative size-full" data-name="Register" data-node-id="341:3666">
      {/* Sidenav - Left Column */}
      <SideNav />

      {/* Container - Right Column with Register Form */}
      <div className="absolute backdrop-blur-[44px] backdrop-filter border border-[rgba(255,255,255,0.3)] border-solid h-[714px] left-[calc(50%+386px)] overflow-clip rounded-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[620px]" data-name="Container" data-node-id="341:3675">
        <AliaLogo className="absolute h-[47px] left-[calc(50%+0.5px)] overflow-clip top-[calc(50%+-232.5px)] translate-x-[-50%] translate-y-[-50%] w-[131px]" useCombination={true} />
        <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-1/2 top-[179px] translate-x-[-50%] w-[426px]" data-name="Form title" data-node-id="341:3677">
          <p className="font-semibold leading-[1.4] not-italic relative shrink-0 text-[#1a1a1a] text-[23px] text-center w-full whitespace-pre-wrap" data-node-id="341:3678">{`Inscrivez-vous`}</p>
          <div className="content-stretch flex flex-col gap-[30px] items-center justify-center relative shrink-0 w-full" data-name="Form" data-node-id="341:3679">
            {/* Email Field */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Textfield" data-node-id="341:3680">
              <p className="font-semibold leading-[1.4] not-italic relative shrink-0 text-[#1a1a1a] text-[15px] w-full whitespace-pre-wrap" data-node-id="341:3681">
                Email
              </p>
              <input 
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="bg-white box-border content-stretch flex h-[40px] items-center justify-between p-[12px] relative rounded-[8px] shrink-0 w-full border border-gray-200 focus:outline-none focus:border-[#0ca99a] focus:ring-1 focus:ring-[#0ca99a]" 
                placeholder="Votre email"
                data-node-id="341:3682"
              />
            </div>

            {/* Password Field */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Textfield" data-node-id="341:3686">
              <p className="font-semibold leading-[1.4] not-italic relative shrink-0 text-[#1a1a1a] text-[15px] w-full whitespace-pre-wrap" data-node-id="341:3687">
                Mot de passe
              </p>
              <div className="bg-white box-border content-stretch flex h-[40px] items-center justify-between p-[12px] relative rounded-[8px] shrink-0 w-full border border-gray-200 focus-within:border-[#0ca99a] focus-within:ring-1 focus-within:ring-[#0ca99a]" data-node-id="341:3690">
                <input 
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  className="flex-1 font-normal leading-[1.4] not-italic relative shrink-0 text-[#1a1a1a] text-[15px] border-none outline-none placeholder:text-[#b3b3b3]" 
                  placeholder="Créez votre mot de passe"
                  data-node-id="341:3691"
                />
              </div>
            </div>

            {/* Confirm Password Field */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Textfield" data-node-id="341:3686">
              <p className="font-semibold leading-[1.4] not-italic relative shrink-0 text-[#1a1a1a] text-[15px] w-full whitespace-pre-wrap" data-node-id="341:3687">
                Confirmer le mot de passe
              </p>
              <div className="bg-white box-border content-stretch flex h-[40px] items-center justify-between p-[12px] relative rounded-[8px] shrink-0 w-full border border-gray-200 focus-within:border-[#0ca99a] focus-within:ring-1 focus-within:ring-[#0ca99a]" data-node-id="341:3690">
                <input 
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                  className="flex-1 font-normal leading-[1.4] not-italic relative shrink-0 text-[#1a1a1a] text-[15px] border-none outline-none placeholder:text-[#b3b3b3]" 
                  placeholder="Confirmez votre mot de passe"
                  data-node-id="341:3691"
                />
              </div>
            </div>

            {/* Button Group */}
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Button group" data-node-id="474:2110">
              <button 
                onClick={handleSubmit}
                className="btn-primary box-border content-stretch cursor-pointer flex gap-[10px] h-[40px] items-center justify-center p-[10px] relative shrink-0 w-full" 
                data-name="Button" 
                data-node-id="341:3694"
              >
                <p className="font-semibold leading-[1.4] not-italic relative shrink-0 text-[15px] text-white" data-node-id="341:3695">
                  S'inscrire
                </p>
              </button>
            </div>

            {/* Login link */}
            <Link to="/login" className="block cursor-pointer font-normal leading-[0] not-italic relative shrink-0 text-[#121212] text-[0px] whitespace-nowrap hover:opacity-80" data-node-id="341:3698">
              <p className="leading-[1.4] text-[15px]">
                <span className="font-normal">Déjà membre ?</span>
                <span className="font-normal text-[#44c6a1]"> </span>
                <span className="font-semibold text-[#0ca99a] hover:underline">Connectez-vous</span>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

