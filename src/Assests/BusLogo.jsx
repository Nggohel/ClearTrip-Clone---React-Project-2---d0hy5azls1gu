const BusLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="fill" viewBox="0 0 24 24">
    <mask
      id="a"
      width={24}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path fill="currentColor" d="M0 0h20v20H0z" />
    </mask>
    <g mask="url(#a)">
      <path d="M7.15 20a.578.578 0 0 1-.425-.175.61.61 0 0 1-.175-.45V17.6c-.333-.133-.675-.43-1.025-.888A2.542 2.542 0 0 1 5 15.125V6c0-1.033.563-1.792 1.688-2.275C7.813 3.242 9.583 3 12 3c2.5 0 4.292.23 5.375.688C18.458 4.146 19 4.917 19 6v9.125c0 .6-.175 1.129-.525 1.587-.35.459-.692.755-1.025.888v1.775a.61.61 0 0 1-.175.45.578.578 0 0 1-.425.175.61.61 0 0 1-.45-.175.61.61 0 0 1-.175-.45V18h-8.45v1.375a.589.589 0 0 1-.187.45.623.623 0 0 1-.438.175ZM6 11h12V6.55H6V11Zm2.5 4.625c.317 0 .583-.113.8-.338.217-.225.325-.487.325-.787 0-.317-.112-.583-.337-.8a1.101 1.101 0 0 0-.788-.325c-.317 0-.583.112-.8.337a1.101 1.101 0 0 0-.325.788c0 .317.113.583.338.8.225.217.487.325.787.325Zm7 0c.317 0 .583-.113.8-.338.217-.225.325-.487.325-.787 0-.317-.112-.583-.337-.8a1.101 1.101 0 0 0-.788-.325c-.317 0-.583.112-.8.337a1.101 1.101 0 0 0-.325.788c0 .317.113.583.338.8.225.217.487.325.787.325ZM6.1 5.55h11.825c-.183-.517-.721-.904-1.613-1.163C15.421 4.129 13.983 4 12 4c-1.95 0-3.375.129-4.275.387-.9.259-1.442.646-1.625 1.163ZM8 17h8c.55 0 1.021-.196 1.413-.587.391-.392.587-.863.587-1.413v-3H6v3c0 .55.196 1.021.588 1.413.391.391.862.587 1.412.587Z" />
    </g>
  </svg>
);
export default BusLogo;
