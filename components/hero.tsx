import Link from 'next/link';

export default function Hero() {
  return (
    <section>
      <div className="section pt-24 pb-4 bg-cover bg-[70%_100%] bg-[url('../public/hero-image.jpg')]">
        <h1 className="headline-1 max-w-[70%] mb-8">Digital workflow in three stages:</h1>
        <div className="flex items-center gap-x-2 mb-3">
          <span className="text-lg font-medium">1</span>
          <span className="h-[2px] border-r bg-success w-4 block rounded-md"></span>
          <span className="text-sm text-dark-blue-60">2</span>
          <span className="h-[2px] border-r bg-success w-4 block rounded-md">-</span>
          <span className="text-sm text-dark-blue-60">3</span>
        </div>
        <p className="headline-2 mb-2">Quick Registration</p>
        <p className="paragraph max-w-[65%] mb-9">
          We've created perhaps the easiest registration ever. Sign up, get full access to the service, and get 1,000
          document signatures as a gift!
        </p>
        <button className="btn-primary">Try for free</button>
        <div className="flex justify-center items-center gap-x-6 mt-8">
          <p className="w-[10px] h-[10px] bg-success rounded-full"></p>
          <p className="w-[10px] h-[10px] bg-transparent border-success border-2 rounded-full"></p>
          <p className="w-[10px] h-[10px] bg-transparent border-success border-2 rounded-full"></p>
        </div>
      </div>
    </section>
  );
}
