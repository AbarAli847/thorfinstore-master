import ArrivelCards from "@/app/components/sections/ArrivelParts/ArrivelCards";


const NewArrival = () => {
 


  

  return (
    <section className="py-10 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-10">
        
        <h2 className="text-[32px] md:text-[48px] font-black text-left mb-10 uppercase tracking-tighter text-black italic">
          New Arrivals
        </h2>
        <ArrivelCards/>
        
      </div>
    </section>
  );
};

export default NewArrival;