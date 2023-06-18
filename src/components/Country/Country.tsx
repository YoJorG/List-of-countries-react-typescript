import { useNavigate } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { CountryType } from '../../Types/Types'

interface Country {
	country: CountryType
}

export default function Country({ country }: Country) {
	const navigate = useNavigate()
	return (
		<div className='mx-5 sm:mx-10 lg:mt-20'>
			<div className='container mx-auto mt-5'>
				<button
					className='flex items-center py-2 px-4 mb-5 bg-gray-100 text-gray-900 dark:bg-slate-800 dark:text-gray-100 rounded-md shadow-md hover:bg-gray-200 hover:dark:bg-slate-700'
					onClick={() => navigate(-1)}
				>
					<AiOutlineArrowLeft className='mr-2' />
					back
				</button>
			</div>
			<div className='container lg:flex mx-auto mt-5 gap-10 lg:mt-10'>
				<div className='lg:w-1/2'>
					<img className='w-full  ' src={country.flags.png} alt={country.flags.alt} />
				</div>
				<div className='lg:w-1/2'>
					<h1 className='mt-5 lg:mt-0 text-2xl md:text-3xl xl:text-4xl xl:mb-8 font-extrabold'>
						{country.name.common}
					</h1>

					<div className='mt-3 font-semibold md:text-lg'>
						<p className='mb-1'>
							Population:
							<span className='font-light'> {String(country.population).replace(/(.)(?=(\d{3})+$)/g, '$1,')}</span>
						</p>
						<p className='mb-1'>
							Region:
							<span className='font-light'> {country.region ? country.region : 'no region'}</span>
						</p>
						<p className='mb-1'>
							Sub Region:
							<span className='font-light'> {country.subregion ? country.subregion : 'lack of a subregion'}</span>
						</p>
						<p className='mb-1'>
							Capital:
							<span className='font-light'> {country.capital ? country.capital : 'lack of capital'}</span>
						</p>
					</div>

					<div className='mt-5 font-semibold md:text-lg'>
						<p className='mb-1'>
							Top Level Domain:
							<span className='font-light'> {country.tld ? country.tld.map(domain => domain + ' ') : null}</span>
						</p>
						<p className='mb-1'>
							Currencies:
							<span className='font-light'>
								{country.currencies ? (
									Object.keys(country.currencies).map((keyName: string) => (
										<span key={keyName}>{country.currencies![keyName].name}</span>
									))
								) : (
									<span>This country does not have its own currency 🤔</span>
								)}
							</span>
						</p>
						<p className='mb-1'>
							Languages:
							<span className='font-light'>
								{country.languages ? (
									Object.keys(country.languages).map(keyName => (
										<span key={keyName}> {country.languages![keyName]} </span>
									))
								) : (
									<span> We don't have a language, but we have big balls 😚 </span>
								)}
							</span>
						</p>
					</div>

					<div>
						<h2 className='font-semibold md:text-lg mt-3'>
							Border Countries:
							{country.borders ? (
								country.borders.map(borderCountry => (
									<span className='font-light' key={borderCountry}>
										{' ' +
											borderCountry +
											(country.borders![country.borders!.length - 1] === borderCountry ? '' : ', ')}
									</span>
								))
							) : (
								<span className='font-light'> boundaries for me do not exist 😎</span>
							)}
						</h2>
					</div>
				</div>
			</div>
		</div>
	)
}
