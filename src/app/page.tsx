import EmailSection from "@/components/emailsection";
import Download from "@/components/download";
import Googletranslate from '@/components/googletranslate'
export default function Home() {
  return (
    <>
    <main className="flex min-h-screen flex-col bg-black container px-8">
      <h1 className="flex justify-center items-center text-center ">
        Hello
      </h1>
      
      
      <EmailSection/>
    </main>
    </>
    
  );
}
