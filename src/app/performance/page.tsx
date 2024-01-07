import Hero from '@/components/hero';
import performanceImg from 'public/performance.jpg';

const Performance = () => {
  return (
    <Hero imgData={performanceImg} imgAlt={"assembly line"} title={"Blazing fast performance"} />
  )
}

export default Performance;