
import Stats from "../components/stats";
import { TextSplit } from "../components/textSplit";
import { LetterSplit2 } from "../components/letterSplit2";
import { AnimatedText } from "../components/animatedText";



export default function Hero() {
  return (
     
      <section className="relative grid gap-10 w-full h-[calc(100vh-6rem)] bg-white dark:bg-slate-950 px-4 md:px-8 lg:px-16 xl:px-20">
        <div className="w-full flex max-lg:flex-col justify-center mt-[40px] gap-2">


          <div className="flex flex-col flex-[2]">
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-oswald font-semibold text-slate-950 dark:text-slate-100 uppercase w-full min-w-[15rem]">
            <LetterSplit2 phrase="Développeur" delay={0.1} className="text-5xl lg:text-6xl xl:text-7xl text-slate-950 dark:text-slate-100" /> <br />
            <LetterSplit2 phrase="Front-End" delay={0.05} className="text-slate-950 dark:text-slate-100" />
            </h1>
          </div>

          <div className="w-full h-full flex flex-1 flex-col max-lg:items-center justify-center max-h-[50vh] gap-20">
            <div className="flex flex-1 mt-10 max-lg:justify-center max-w-80 ">
              <TextSplit text="Je suis un Développeur web, basé en Aquitaine, France. Je suis passionné par la conception web depuis que ça existe, et j&apos;aime créer sur tous supports." className="text-slate-950 dark:text-slate-200 leading-tight" />
            </div>
            <div className="w-full flex-1 flex flex-col max-lg:items-end justify-end">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-semibold text-slate-950 dark:text-slate-300 uppercase max-w-[28rem] text-start">
                <LetterSplit2 phrase="React" delay={0.05} className="text-slate-950 dark:text-slate-300" /> <br />
                <LetterSplit2 phrase="Freelance" delay={0.05} className="text-4xl lg:text-5xl xl:text-6xltext-slate-950 dark:text-slate-300" />
              </h1>
            </div>
          </div>
        </div>

        <AnimatedText text="Je suis un Développeur web, basé en Aquitaine, France. Je suis passionné par la conception web depuis que ça existe, et j&apos;aime créer sur tous supports." className="text-slate-950 dark:text-slate-200 leading-tight max-w-96 overflow-hidden" />

        <div className="grid w-full h-full">
          <Stats />
        </div>
      </section>
  );
}
