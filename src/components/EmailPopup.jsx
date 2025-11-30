import { useState } from 'react';
import { saveEmail } from '../services/emailService';

export default function EmailPopup({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setMessage({ type: 'error', text: 'Veuillez entrer votre adresse email' });
      return;
    }

    setIsLoading(true);
    setMessage({ type: '', text: '' });

    const result = await saveEmail(email);

    if (result.success) {
      setMessage({ type: 'success', text: result.message });
      setEmail('');
      // Fermer le popup après 2 secondes en cas de succès
      setTimeout(() => {
        onClose();
        setMessage({ type: '', text: '' });
      }, 2000);
    } else {
      setMessage({ type: 'error', text: result.message });
    }

    setIsLoading(false);
  };

  const handleClose = () => {
    setEmail('');
    setMessage({ type: '', text: '' });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm animate-fadeIn">
      <div className="relative bg-white rounded-[24px] shadow-2xl w-[90%] max-w-[480px] p-8 animate-slideUp">
        {/* Bouton de fermeture */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-[#b3b3b3] hover:text-[#1a1a1a] transition-colors duration-200"
          aria-label="Fermer"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Contenu */}
        <div className="text-center">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0ca99a] bg-opacity-10 rounded-full mb-4">
              <svg
                className="w-8 h-8 text-[#0ca99a]"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="font-['SF_Pro:Semibold',sans-serif] text-[28px] text-[#1a1a1a] mb-2">
              Restez informé !
            </h2>
            <p className="font-['SF_Pro:Regular',sans-serif] text-[15px] text-[#666666] leading-relaxed">
              Soyez le premier à utiliser Alia. Recevez l'alerte de lancement en avant-première.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre@email.com"
                className="w-full px-4 py-3 bg-neutral-50 border border-[#e0e0e0] rounded-[8px] font-['SF_Pro:Regular',sans-serif] text-[15px] text-[#1a1a1a] placeholder:text-[#b3b3b3] focus:outline-none focus:ring-2 focus:ring-[#0ca99a] focus:border-transparent transition-all duration-200"
                disabled={isLoading}
                autoFocus
              />
            </div>

            {message.text && (
              <div
                className={`p-3 rounded-[8px] text-sm font-['SF_Pro:Regular',sans-serif] ${
                  message.type === 'success'
                    ? 'bg-green-50 text-green-700 border border-green-200'
                    : 'bg-red-50 text-red-700 border border-red-200'
                }`}
              >
                {message.text}
              </div>
            )}

            <div className="flex gap-3">
              <button
                type="button"
                onClick={handleClose}
                className="flex-1 px-6 py-3 bg-[#e6ebef] text-[#1a1a1a] font-['SF_Pro:Semibold',sans-serif] text-[15px] rounded-[8px] hover:bg-[#d4dce3] transition-all duration-200"
                disabled={isLoading}
              >
                Plus tard
              </button>
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-[#0ca99a] text-white font-['SF_Pro:Semibold',sans-serif] text-[15px] rounded-[8px] hover:bg-[#0ba08f] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Envoi...
                  </span>
                ) : (
                  'Rejoignez-nous'
                )}
              </button>
            </div>
          </form>

          <p className="mt-4 text-xs text-[#999999] font-['SF_Pro:Regular',sans-serif]">
            En vous inscrivant, vous acceptez de recevoir nos communications. Vous pouvez vous désinscrire à tout moment.
          </p>
        </div>
      </div>
    </div>
  );
}

