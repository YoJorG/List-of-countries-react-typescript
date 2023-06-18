import { Link } from 'react-router-dom'
import { CountriesType } from '../../../Types/Types'

interface CardInterface {
	country: CountriesType
}

export default function Card({ country }: CardInterface) {
	const params = country.name.common.replaceAll(' ', '-').toLowerCase()
	return (
		<div className=' bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-md shadow-md overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform mx-auto h-80 border-b-4 border-gray-300 dark:border-gray-700'>
			<Link to={`countries/${params}`}>
				<div className='h-1/2 max-w-xs overflow-hidden flex items-center justify-center'>
					<img src={country.flags.png} alt={country.flags.alt} className='min-w-full min-h-full ' />
				</div>
				<div className=' h-1/2 m-5'>
					<h2 className='font-bold mb-2 text-md'>{country.name.common}</h2>
					<div className='text-sm '>
						<p className='mb-1'>
							<span className='font-bold'>Region: </span>
							{country.region}
						</p>
						<p className='mb-1'>
							<span className='font-bold'>Population: </span>
							{String(country.population).replace(/(.)(?=(\d{3})+$)/g, '$1,')}
						</p>
						<p className=''>
							<span className='font-bold '>Capital: </span>
							{country.capital.length >= 1 ? country.capital : 'Does not have'}
						</p>
					</div>
				</div>
			</Link>
		</div>
	)
}
