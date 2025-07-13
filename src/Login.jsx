import { useHistoty } from 'react-router-app'
import { apple, google } from "./assets";

const App = () => {
    const history = useHistoty();
     
    const handleLogin = () => {
        history.push('./index')
    };
    

  return (
    <div className="bg-black min-h-screen flex justify-center items-center">
      <div className="max-w-[410px] flex flex-col w-full border-[2px] border-[#33bbcf] bg-transparent rounded-lg shadow-[0_0_20px_#33bbcf] mx-auto p-6">
         <h2 className="text-gradient text-4xl py-4 font-poppins font-semibold text-center">Log in with</h2>
         <div className="flex py-2 gap-1 justify-center">
            <img src={google} alt="google" className="w-[100%] h-[42px] object-contain mr-5 cursor-pointer box-shadow"/>
            <img src={apple} alt="google" className="w-[100%] h-[42px] object-contain mr-5 cursor-pointer box-shadow"/>
         </div>
         
         <p className="separetor mx-1 text-center relative"><span className="relative bg-black text-xl z-10 px-2 text-white">or</span></p>
      
        <form action="#" className="form">
            <div className="w-[100%] h-[54px] my-[1.5rem] relative">
                <input type="email" placeholder="Email address" required
                className="w-[100%] h-[85%] outline-none text-[1.06rem] rounded-md text-slate-300 border-b bg-black-gradient-2 border-slate-400 px-8"/>
                <i className="bx bxs-envelope text-slate-300 text-2xl absolute top-[50%] left-0.5 pointer-events-none translate-y-[-55%]"></i>
            </div>

            <div className="w-[100%] h-[54px] mb-2 relative">
                <input type="password" placeholder="Password" required
                className="w-[100%] h-[85%] outline-none text-[1.06rem] rounded-md text-slate-300 border-b bg-black-gradient-2 border-slate-400 px-8"/>
                <i className="bx bxs-lock-alt text-slate-300 text-2xl absolute top-[50%] left-0.5 pointer-events-none translate-y-[-55%]"></i>
            </div>

            <a href="#" className="text-[#33bbcf] hover:underline font-poppins">Forget Password?</a>
            
             <button onClick={handleLogin}
            className="w-[100%] h-[48px] cursor-pointer font-poppins font-semibold outline-none border-none bg-blue-gradient text-xl transition-all rounded-md mt-10 hover:bg-[#27a7bb]">Log In</button>
        </form>

        <p className="font-poppins text-white my-6 text-center">Don't have an account? <a href="#" className="text-[#33bbcf] hover:underline">Signup now</a></p>
      </div>
    </div>
  );
};

export default App;