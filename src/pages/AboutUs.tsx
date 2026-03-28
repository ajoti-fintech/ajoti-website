
import heroImage1 from '../assets/Hero IMGS.png'
import businessWomen from '../assets/young-businesswomen.png'
import EarnUp from '../assets/EarnUp.svg'
import FixedSaving from '../assets/FixedSaving.svg'
import GoalOriented from '../assets/GoalOriented.svg'
import DownloadSection from '../components/DownloadSection'


export default function AboutUs() {
  return (
    <div>
      <div className="bg-[#066F5B]">
        <section className="w-full px-6 py-12 h-151.5 flex flex-col ">
          <div className= "h-[105px] w-full   flex items-center justify-center">
            <h1 className=" text-[28px]  text-white font-medium">
              We are helping African <br />
              women buil real wealth
            </h1>
            <img
              src={heroImage1}
              alt="Hero Image 1"
              className="absolute w-[1153px] h-[455px] top-[236px] object-contain"
            />
          </div>
        </section>
      </div>
         
         <section className="w-full py-20 px-6 bg-white">
          <div className="max-w-3xl mx-auto text-center">
           <h2 className="text-2xl font-medium text-black leading-snug">
              Who we are
            </h2>
            <p className="mt-12 text-black text-sm leading-relaxed max-w-md mx-auto">
              Suprebase is a community driven financial platform dedicated to
              building wealth through structured savings and strategic investment
               opportunities. We empower individuals and businesses, especially 
               women and low income earners by offering accessible, secure and 
               user centric financial solutions.
            </p>
            <p className="mt-12 text-black text-sm leading-relaxed max-w-md mx-auto">
              We have a singular objective, to help you grow your finance. We
               envision a future where everyone, regardless of background, can 
               achieve financial independence. 
            </p>
            <img
              src={businessWomen}
              alt="businessWomen Image "
              className=" mt-15 object-contain mx-auto"
            />
            <h2 className="mt-12 text-2xl font-medium text-black leading-snug">
              Empowering You with Secure, Inclusive   <br />
              and Profitable Paths to Wealth
            </h2>
            <p className="mt-12 text-black text-sm leading-relaxed w-full max-w-lg mx-auto">
             At Suprebase, we provide secure, structured savings and investment solutions designed for 
             real financial growth. In many parts of Africa, investing remains inaccessible or unreliable, 
              limited by inflation, currency devaluation, and lack of financial literacy. We’re changing that.
            </p>
            <p className="mt-12 text-black text-sm leading-relaxed w-full max-w-lg mx-auto">
             Our platform empowers individuals and communities, especially underserved groups with
              easy access to profitable, inflation conscious investment opportunities. Built on a user
               friendly, ROSCA inspired system, Suprebase removes barriers and simplifies wealth building for everyone. 
            </p>
             </div>
            </section>

          <section className="w-full py-20 px-6 bg-white">
            <div className="max-w-3xl mx-auto text-center">
            <h2 className="mt-12 text-2xl font-medium text-black leading-snug">
            Learn more about our products
            </h2>

          <div className="mt-10 w-full ">
            <div className="flex flex-col lg:flex-row gap-6 justify-center items-start">
            <div className="relative w-[393px] h-[340px] shrink-0 rounded-[21px] bg-[#00C853] p-4 shadow-md">
              <h2 className=" text-[14px] font-medium text-white leading-snug">
                Earn Up to 12% returns
              </h2>
              <p className="mt-3 text-white text-[12px] leading-relaxed w-full max-w-lg mx-auto">
                Invest securely and confidently with different <br/>
                investment options available. Grow your money <br/>
                confidently.
              </p>
              <button  
                onClick={() => alert("clicked")}
                className="mt-3 text-white text-[10px] bg-transparent border-none p-0 cursor-pointer"
              >
                → Learn More about investment 
              </button>
               <img
              src={EarnUp} 
              alt="Learn about investment"
              className="mx-auto mt-1"/>
            </div>

            <div className="relative w-[393px] h-[340px] shrink-0 rounded-[21px] bg-[#066F5B] p-4 shadow-md">
              <h2 className=" text-[14px] font-medium text-white leading-snug">
                Fixed Savings
              </h2>
              <p className="mt-3 text-white text-[12px] leading-relaxed w-full max-w-lg mx-auto">
                Lock money away for a fixed duration without<br/>
                 having access to it until maturity.
              </p>
              <button  
                onClick={() => alert("clicked")}
                className="mt-6 text-white text-[10px] bg-transparent border-none p-0 cursor-pointer"
              >
                → Check Fixed Savings out 
              </button>
               <img
              src={FixedSaving} 
              alt="Check Fixed Savings out "
              className="mx-auto mt-3"/>
            </div>
          
            <div className="relative w-[393px] h-[340px] shrink-0 rounded-[21px] bg-[#0052B4] p-4 shadow-md">
              <h2 className=" text-[14px] font-medium text-white leading-snug">
                Goal oriented Savings
              </h2>
              <p className="mt-3 text-white text-[12px] leading-relaxed w-full max-w-lg mx-auto">
               Reach all your savings goals faster. Save <br />
               towards multiple goals on your own.
              </p>
              <button  
                onClick={() => alert("clicked")}
                className="mt-5 text-white text-[10px] bg-transparent border-none p-0 cursor-pointer"
              >
                → Start a Goal Today
              </button>
               <img
              src={GoalOriented} 
              alt="Start a Goal Today"
              className="mx-auto mt-4"/>
            </div>
          </div> 
        </div> 
        </div>
        </section>
     <DownloadSection />
    </div>
  )
}