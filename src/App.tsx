import logo from './twitter.png';
import './App.css';
import TwitterFollowers from './TwitterFollowers';
function App() {

  return (
    <div className="flex flex-col justify-center items-center w-full gap-10 text-center mt-[200px]">
      <header className="w-full flex justify-center items-center gap-4 text-center">
        <img src={logo} className=" w-[100px]" alt="logo" />
        <p className=' text-blue-500 text-[30px]'>
          Get twitter followers
        </p>
      </header>
      <main className=' flex justify-center items-center'>
        <TwitterFollowers/>

      </main>
    </div>
  );
}

export default App;
