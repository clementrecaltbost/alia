import { Link } from 'react-router-dom';
import AliaLogo from './AliaLogo';
import SideNav from './SideNav';

export default function ForgotPassword() {
  return (
    <div className="bg-neutral-100 relative size-full" data-name="ForgotPassword" data-node-id="341:3666">
      {/* Sidenav - Left Column */}
      <SideNav />

      {/* Container - Right Column with Forgot Password Form */}
      <div className="absolute backdrop-blur-[44px] backdrop-filter border border-[rgba(255,255,255,0.3)] border-solid h-[714px] left-[calc(50%+386px)] overflow-clip rounded-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[620px]" data-name="Container" data-node-id="341:3675">
        <AliaLogo className="absolute h-[47px] left-[calc(50%+0.5px)] overflow-clip top-[calc(50%+-232.5px)] translate-x-[-50%] translate-y-[-50%] w-[131px]" useCombination={true} />
        <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-1/2 top-[179px] translate-x-[-50%] w-[426px]" data-name="Form title" data-node-id="341:3677">
          <p className="font-semibold leading-[1.4] not-italic relative shrink-0 text-[#1a1a1a] text-[23px] text-center w-full whitespace-pre-wrap" data-node-id="341:3678">{`Récupération de mot de passe`}</p>
          <div className="content-stretch flex flex-col gap-[30px] items-center justify-center relative shrink-0 w-full" data-name="Form" data-node-id="341:3679">
            {/* Description */}
            <p className="font-normal leading-[1.4] not-italic relative shrink-0 text-[#1a1a1a] text-[15px] text-center w-full whitespace-pre-wrap">
              Entrez votre adresse email et nous vous enverrons un lien pour réinitialiser votre mot de passe.
            </p>

            {/* Email Field */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Textfield" data-node-id="341:3680">
              <p className="font-semibold leading-[1.4] not-italic relative shrink-0 text-[#1a1a1a] text-[15px] w-full whitespace-pre-wrap" data-node-id="341:3681">
                Email
              </p>
              <input 
                type="email"
                className="bg-white box-border content-stretch flex h-[40px] items-center justify-between p-[12px] relative rounded-[8px] shrink-0 w-full border border-gray-200 focus:outline-none focus:border-[#0ca99a] focus:ring-1 focus:ring-[#0ca99a]" 
                placeholder="Votre email"
                data-node-id="341:3682"
              />
            </div>

            {/* Button */}
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Button group" data-node-id="474:2110">
              <button className="btn-primary box-border content-stretch cursor-pointer flex gap-[10px] h-[40px] items-center justify-center p-[10px] relative shrink-0 w-full" data-name="Button" data-node-id="341:3694">
                <p className="font-semibold leading-[1.4] not-italic relative shrink-0 text-[15px] text-white" data-node-id="341:3695">
                  Envoyer le lien de réinitialisation
                </p>
              </button>
            </div>

            {/* Back to login link */}
            <Link to="/login" className="block cursor-pointer font-normal leading-[0] not-italic relative shrink-0 text-[#121212] text-[0px] whitespace-nowrap hover:opacity-80" data-node-id="341:3698">
              <p className="leading-[1.4] text-[15px]">
                <span className="font-normal">Retour à la</span>
                <span className="font-normal text-[#44c6a1]"> </span>
                <span className="font-semibold text-[#0ca99a]">connexion</span>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

