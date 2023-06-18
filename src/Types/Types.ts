export type CountriesType = {
	flags: {
		png: string
		svg: string
		alt: string
	}
	name: {
		common: string
		official: string
		nativeName: {
			[key: string]: {
				official: string
				common: string
			}
		}
	}
	capital: string[]
	region: string
	population: number
}

export type CountariesBoardType = {
	data: CountriesType[]
	paramsRegion: string | null
}

interface Currency {
	name: string
	symbol: string
}

export type CountryType = {
	name: {
		common: string
		official: string
		nativeName: {
			ara: {
				official: string
				common: string
			}
		}
	}
	tld?: string[]
	currencies?: {
		[key: string]: Currency
	}

	capital?: string[]
	region: string
	subregion: string
	languages?: {
		[key: string]: String
	}
	borders?: string[]
	population: number
	flags: {
		png: string
		svg: string
		alt: string
	}
}

export type CountryBoardType = {
	data: CountryType[]
	paramsRegion: string | null
}
