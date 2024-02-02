import LeagueForm from "./LeagueForm";

type NewLeagueModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const NewLeagueModal: React.FC<NewLeagueModalProps> = ({ isOpen, onClose }) => {
  const handleCloseModal = (e: React.MouseEvent<HTMLDivElement>) => {
    const isAriaHiddenTrue =
      e.target instanceof HTMLElement &&
      e.target.getAttribute("aria-hidden") === "true";

    if (e.target !== e.currentTarget && isAriaHiddenTrue) {
      onClose();
    }
  };
  return (
    <>
      {isOpen && (
        <div
          className="relative z-10 inset-0 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          onClick={handleCloseModal}
        >
          <div
            aria-hidden="true"
            className="fixed inset-0  bg-black/80 opacity-75"
          ></div>
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div
                className="fixed inset-0 transition-opacity"
                aria-hidden="true"
              ></div>

              <span
                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                aria-hidden="true"
              >
                &#8203;
              </span>

              <div className="inline-block align-bottom bg-slate-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle md:max-w-xl w-full ">
                <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <LeagueForm onSubmit={onClose} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NewLeagueModal;
