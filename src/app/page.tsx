import Image from 'next/image';
import homeImg from 'public/home.jpg';

export default function Home() {
  return (<div>
    <div className="flex flex-col justify-center max-w-500px items-center h-screen">
      <h1 className="text-4xl font-bold text-white">Professional Cloud Hosting</h1>
      <div className="absolute -z-10 inset-0">
        <Image
          alt="car assembly line"
          src={homeImg}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
  </div>

  )
}
