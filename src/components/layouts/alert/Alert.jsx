import "./Alert.css";
import { useEffect, useState } from "react";

function ProductAlert({ message, iconComponent, bgcolor }) {
  const [opacity, setOpacity] = useState(1);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      let isOpacity = true;
      const intervalId = setInterval(() => {
        if (isOpacity) {
          setOpacity((prevOpacity) => {
            isOpacity = prevOpacity > 0;
            return prevOpacity - 0.1;
          });
        } else {
          clearInterval(intervalId);
        }
      }, 30);
      return () => clearInterval(intervalId);
    }, 1300);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div
      className="alert-add"
      style={{ opacity: opacity, backgroundColor: bgcolor }}
    >
      <div className="container">
        {iconComponent}
        <p>{message}</p>
        {/* <FaCheckCircle size={18} /> */}
      </div>
    </div>
  );
}
export default ProductAlert;
