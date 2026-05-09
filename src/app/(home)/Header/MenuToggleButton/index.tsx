import type { MenuToggleButtonProps } from './menuToggleButton.type';

const MenuToggleButton = ({ icon: Icon, className = '', ...props }: MenuToggleButtonProps) => {
  return (
    <button
      type="button"
      aria-controls="primary-navigation"
      className={`transition-default flex h-9 w-9 items-center justify-center rounded-full bg-slate-300 hover:bg-slate-300/75 active:scale-90 active:bg-slate-300/90 ${className} `}
      {...props}
    >
      <Icon aria-hidden="true" focusable="false" />
    </button>
  );
};

export default MenuToggleButton;
