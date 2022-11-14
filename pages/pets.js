// import Image from "next/image";
import Pet1 from "../public/1.jpg";

const PetsPage = () => {
  return (
    <div>
      Pets
      {/* <Image src={Pet1} placeholder="blur" alt="pet" width="280" height="420" />
      {["1", "2", "3", "4", "5"].map((path) => {
        return (
          <div key={path}>
            <Image src={`/${path}.jpg`} alt="pet" width="280" height="420" />
          </div>
        );
      })} */}
    </div>
  );
};

export default PetsPage;
