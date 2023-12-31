import { useState } from "react";
const TapLink = ({ options = [] }) => {
  const [activeLink, setActiveLink] = useState(null);
  const handleSetLink = (name) => ()=> {
    setActiveLink(prev=>prev===name?null:name)
    
};
  console.log(activeLink, 'aqui');
  return (
    <section>
      {options?.map((option) => (
        <article key={option.name} className="  flex flex-col relative  items-center justify-center  gap-[18px] w-full">
          <button  key={option.name} id={option.id} onClick={handleSetLink(option.name)} className=" flex items-center relative  bg-primary font-UniversExtrablack w-full justify-center  rounded-full  py-[8px] text-[16px] px-[30px] lg:text-[24px] "> 
          
            {option.name}
             <img className={` absolute top-1/2 transform -translate-y-1/2 right-2 ${activeLink === option.name ? 'rotate-180' : ''}`}  src={option.src}/>
          </button>
          <div className={`flex flex-col gap-4 transition-all  rounded-sm overflow-hidden  ${activeLink===option.name ?'max-h-[1000px] delay-200 py-4 ease-in-out duration-400':'max-h-0 duration-200'}` }>
            {option?.sublinks.map((sublink) => (
              <button id={sublink.id} key={sublink.name} className="flex justify-center items-center bg-secondary hover:bg-opacity-90 transition-colors duration-300 ease-in-out py-2 px-6 rounded-full gap-2" > <img src={sublink.src}/>
              <a href={sublink.link} target="_blank" rel="noopener noreferrer " className="font-PalatinoNova text-[18px] lg:text-[24px]" > 
                {sublink.name}
              </a>
              </button>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
};
export default TapLink;
