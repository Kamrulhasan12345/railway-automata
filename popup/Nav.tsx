import railwayLogo from "./assets/bangladesh-railway.png";

const NavBar = () => {
  return (
    <>
      <div className="flex justify-center items-center h-20 sticky">
        <a href="https://eticket.railway.gov.bd">
          <div className="flex justify-between">
            <div className="flex items-center mr-4">
              <img src={railwayLogo} width={64} />
            </div>
            <div className="text-2xl font-bold flex items-center text-[#da924e]">
              Bangladesh
              <br />
              Railway
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default NavBar;
