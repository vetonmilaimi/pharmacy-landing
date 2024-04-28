import { SearchIcon } from 'lucide-react'

const Search = () => {
	return (
		<div className="relative inline-block max-w-[200px]">
			<SearchIcon color="gray" size="16px" className="absolute left-[12px] top-[12px]" />
			<input type="text" className="rounded-[20px] h-10" />
			<button className="bg-secondary h-10 right-[-160px] px-2 py-2 rounded-[20px] absolute">Find drug</button>
		</div>
	)
}

export default Search
