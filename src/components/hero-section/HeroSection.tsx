import Hero from '../../assets/hero.png'
import Search from '../ui/Search'

const HeroSection = () => {
	return (
		<section className="flex flex-1 justify-between min-w-full align-middle px-20 bg-gradient-to-r from-primary to-secondary">
			<div className="text-white max-w-[50%]">
				<h1 className="pt-[8rem] text-5xl">
					We can get your Drug <br /> Prescriptions to You
				</h1>

				<p className="pt-4 mb-20">
					We have all the drugs your doctor prescribed for your health <br /> and what's more, we can get it to you.
				</p>

				<Search />
			</div>
			<div className="max-w-[50%] max-h-[80%]">
				<img src={Hero} alt="" className="max-h-[650px]" />
			</div>
		</section>
	)
}

export default HeroSection
