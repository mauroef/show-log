const HamburgerButton = ({ isOpen = false, onClick }) => (
  <button
    className='h-6 w-6 p-1 flex flex-col justify-between space-between transition-all duration-300 ease-in-out flex md:hidden hover:opacity-60'
    onClick={onClick}
    aria-label={isOpen ? 'Close menu' : 'Open menu'}
    aria-expanded={isOpen}
  >
    <span
      className={`block bg-white/90 h-0.5 w-full transform ${
        isOpen ? 'translate-y-1.5 rotate-45' : 'translate-y-0 rotate-0'
      } transition-all duration-300 ease-in-out`}
    ></span>
    <span
      className={`block bg-white/90 h-0.5 w-1/2 self-end ${
        isOpen ? 'opacity-0' : 'opacity-1'
      } transition-all duration-300 ease-in-out`}
    ></span>
    <span
      className={`block bg-white/90 h-0.5 w-full transform ${
        isOpen ? 'translate-y-[-8px] rotate-[-45deg]' : 'translate-y-0 rotate-0'
      } transition-all duration-300 ease-in-out`}
    ></span>
  </button>
);

export default HamburgerButton;
