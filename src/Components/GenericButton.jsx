import "../css/GenericButton.css";
import { useNavigate } from "react-router-dom";

const GenericButton = ({
  text,
  choice,
  conditionMet,
  vibrateText,
  newButton,
  directNavigate,
  navigateTo,
  radiusBottom,
  productNavigate,
  productLink,
  set_url_function,
  id,
}) => {
  const navigate = useNavigate();
  const navigateCheck = () => {
    if (directNavigate) {
      navigate(parseInt(navigateTo), { replace: true });
      set_url_function("/" + parseInt(navigateTo));
    } else if (productNavigate) {
      const redirectToCheckout = async () => {
          window.open(`https://${process.env.REACT_APP_CART_LINK}/cart/${productLink}`);
      };
      redirectToCheckout();
    } else {
      if (conditionMet) {
        if(process.env.REACT_APP_BRAND == "Mars") {
          navigate("/pages/ghc-consultation-mars/" + choice);
          set_url_function("/pages/ghc-consultation-mars/" + choice);
        } else {
          navigate("/pages/ghc-consultation/" + choice);
          set_url_function("/pages/ghc-consultation/" + choice);
        }
      } else {
        vibrateText();
      }
    }
  };

  return (
    <button
      target="_blank"
      id={id}
      className={`generic-button ${newButton ? "backButtonStyle" : ""} ${
        radiusBottom ? "borderRadiusBottom" : ""
      }`}
      onClick={(e) => {
        e.preventDefault();
        navigateCheck();
      }}
    >
      {text}
    </button>
  );
};

export default GenericButton;
