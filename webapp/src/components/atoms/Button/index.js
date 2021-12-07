import style from './style.module.scss';
import cn from 'classnames';

const Button = ({ cardpage, value, children, type, color, onClick }) => {
  const buttonSelection = (type) => {
    switch (type) {
      case 'arrows':
        return style.buttonArrows;
      case 'view':
        return style.buttonView;
      case 'transparent':
        return style.buttonTransparent;
      case 'back':
        return style.buttonBack;
      case 'burger':
        return cardpage ? style.buttonMenuActive : style.buttonMenu;
      default:
        return style.button;
    }
  };
  const styleBtn = cn(buttonSelection(type), color ? style.buttonActive : null);
  return (
    <>
      {!children ? (
        <button className={styleBtn} onClick={onClick}>
          {value}
        </button>
      ) : (
        <button className={styleBtn} onClick={onClick}>
          {children} <span>{value}</span>
        </button>
      )}
    </>
  );
};

export default Button;