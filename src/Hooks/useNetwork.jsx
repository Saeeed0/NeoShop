import { useEffect, useState } from "react";

function useNetwork() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    detectOnline();
  },[]);

  function detectOnline() {
    window.addEventListener("online", function () {
      setIsOnline(true);
    });
    window.addEventListener("offline", function () {
      setIsOnline(false);
    });
  }

  return (
    <>
      {isOnline ? (
        <div className="network">
          <i className="fas fa-wifi"></i>
          you'r Online!
        </div>
      ) : (
        <div className="network">
          <i className="fas fa-wifi"></i>
          you'r Offnline!
        </div>
      )}
    </>
  );
}

export default useNetwork;
