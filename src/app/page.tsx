import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[10px] row-start-2 items-center sm:items-start"> 
        <img
          src={"/ComingSoon.webp"}
          width={500}
          height={500}
        />
        
        {/* Loading Bar */}
        <div className="w-full max-w-md h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-[#8a1948] rounded-full"
            style={{
              width: '100%',
              background: 'linear-gradient(90deg, #8a1948 0%, #8a1948 50%, transparent 50%, transparent 100%)',
              backgroundSize: '200px 100%',
              animation: 'loading 2s ease-in-out infinite'
            }}
          ></div>
        </div>
      </main>

      <footer className="row-start-3 bottom-2 flex justify-center items-center w-full">
        <img
          src={"/Footer.webp"}
          alt="Qasioun EX Logo"
          width={200}
          height={200}
          
        />
      </footer>
    </div>
  );
}
