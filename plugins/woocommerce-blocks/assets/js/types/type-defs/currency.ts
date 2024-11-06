export interface Currency {
	/**
	 * ISO 4217 Currency Code
	 */
	code: CurrencyCode;
	/**
	 * String which separates the decimals from the integer
	 */
	decimalSeparator: string;
	/**
	 * @todo Description of this currently unknown
	 */
	minorUnit: number;
	/**
	 * String to prefix the currency with.
	 *
	 * This property is generally exclusive with `suffix`.
	 */
	prefix: string;
	/**
	 * String to suffix the currency with.
	 *
	 * This property is generally exclusive with `prefix`.
	 */
	suffix: string;
	/**
	 * Currency symbol
	 */
	symbol: string; // @todo create a list of allowed currency symbols
	/**
	 * String which separates the thousands
	 */
	thousandSeparator: string;
}

type CurrencyPrefix =
	| 'kr' // Various Nordic currencies (e.g., Swedish Krona)
	| '£' // British Pound Sterling
	| '$' // US Dollar and others
	| '€' // Euro (used as a prefix in most Western European countries)
	| '؋' // Afghan Afghani
	| '֏' // Armenian Dram
	| 'Kz' // Angolan Kwanza
	| '₼' // Azerbaijani Manat
	| '৳' // Bangladeshi Taka
	| 'Bs' // Venezuelan Bolívar
	| 'P' // Botswana Pula
	| '¥' // Japanese Yen and Chinese Yuan
	| '₡' // Costa Rican Colón
	| 'E£' // Egyptian Pound
	| '₾' // Georgian Lari
	| 'GH₵' // Ghanaian Cedi
	| 'FG' // Guinean Franc
	| 'Q' // Guatemalan Quetzal
	| 'L' // Honduran Lempira and Albanian Lek
	| 'Rp' // Indonesian Rupiah
	| '₪' // Israeli Shekel
	| '₹' // Indian Rupee
	| '¥' // Japanese Yen
	| '៛' // Cambodian Riel
	| 'CF' // CFA Franc (Central and West Africa)
	| '₩' // South and North Korean Won
	| '₸' // Kazakhstani Tenge
	| 'L£' // Lebanese Pound
	| 'Ar' // Malagasy Ariary
	| 'K' // Papua New Guinean Kina
	| '₮' // Mongolian Tugrik
	| 'RM' // Malaysian Ringgit
	| '₦' // Nigerian Naira
	| '₱' // Philippine Peso
	| '₴' // Ukrainian Hryvnia
	| '₫' // Vietnamese Dong
	| 'R' // South African Rand
	| 'ZK' // Zambian Kwacha
	| 'Rs'; // Indian, Pakistani, and other rupees

// Currencies typically used as a suffix (e.g., "50 Ft")
type CurrencySuffix =
	| 'KM' // Bosnian Convertible Mark
	| 'Kč' // Czech Koruna
	| 'Ft' // Hungarian Forint
	| 'lei' // Romanian Leu
	| '₽' // Russian Ruble
	| 'RF' // Rwandan Franc
	| 'Db' // São Tomé and Príncipe Dobra
	| '฿' // Thai Baht
	| 'zł' // Polish Zloty
	| '₭'; // Lao Kip

// Currencies that can appear as either prefix or suffix depending on region or context (e.g., "€50" or "50 €")
type CurrencyBoth =
	| '€' // Euro (prefix in most countries, suffix in some like Spain)
	| '₫' // Vietnamese Dong
	| '$' // Dollar in some Spanish-speaking countries
	| '₡' // Costa Rican Colón
	| '₩'; // Korean Won
export interface CurrencyResponse {
	currency_code: CurrencyCode;

	currency_symbol:
		| CurrencyPrefix
		| CurrencySuffix
		| CurrencyBoth
		| ( string & {} ); // eslint-disable-line @typescript-eslint/ban-types

	currency_prefix: CurrencyPrefix | CurrencyBoth;

	currency_suffix: '' | CurrencySuffix | CurrencyBoth;

	// eslint-disable-next-line @typescript-eslint/ban-types
	currency_decimal_separator: '.' | ',' | ( string & {} );

	// eslint-disable-next-line @typescript-eslint/ban-types
	currency_thousand_separator: ',' | '.' | ( string & {} );

	currency_minor_unit: number;
}

export type SymbolPosition = 'left' | 'left_space' | 'right' | 'right_space';

export type CurrencyCode =
	| 'AED'
	| 'AFN'
	| 'ALL'
	| 'AMD'
	| 'ANG'
	| 'AOA'
	| 'ARS'
	| 'AUD'
	| 'AWG'
	| 'AZN'
	| 'BAM'
	| 'BBD'
	| 'BDT'
	| 'BGN'
	| 'BHD'
	| 'BIF'
	| 'BMD'
	| 'BND'
	| 'BOB'
	| 'BRL'
	| 'BSD'
	| 'BTC'
	| 'BTN'
	| 'BWP'
	| 'BYR'
	| 'BYN'
	| 'BZD'
	| 'CAD'
	| 'CDF'
	| 'CHF'
	| 'CLP'
	| 'CNY'
	| 'COP'
	| 'CRC'
	| 'CUC'
	| 'CUP'
	| 'CVE'
	| 'CZK'
	| 'DJF'
	| 'DKK'
	| 'DOP'
	| 'DZD'
	| 'EGP'
	| 'ERN'
	| 'ETB'
	| 'EUR'
	| 'FJD'
	| 'FKP'
	| 'GBP'
	| 'GEL'
	| 'GGP'
	| 'GHS'
	| 'GIP'
	| 'GMD'
	| 'GNF'
	| 'GTQ'
	| 'GYD'
	| 'HKD'
	| 'HNL'
	| 'HRK'
	| 'HTG'
	| 'HUF'
	| 'IDR'
	| 'ILS'
	| 'IMP'
	| 'INR'
	| 'IQD'
	| 'IRR'
	| 'IRT'
	| 'ISK'
	| 'JEP'
	| 'JMD'
	| 'JOD'
	| 'JPY'
	| 'KES'
	| 'KGS'
	| 'KHR'
	| 'KMF'
	| 'KPW'
	| 'KRW'
	| 'KWD'
	| 'KYD'
	| 'KZT'
	| 'LAK'
	| 'LBP'
	| 'LKR'
	| 'LRD'
	| 'LSL'
	| 'LYD'
	| 'MAD'
	| 'MDL'
	| 'MGA'
	| 'MKD'
	| 'MMK'
	| 'MNT'
	| 'MOP'
	| 'MRU'
	| 'MUR'
	| 'MVR'
	| 'MWK'
	| 'MXN'
	| 'MYR'
	| 'MZN'
	| 'NAD'
	| 'NGN'
	| 'NIO'
	| 'NOK'
	| 'NPR'
	| 'NZD'
	| 'OMR'
	| 'PAB'
	| 'PEN'
	| 'PGK'
	| 'PHP'
	| 'PKR'
	| 'PLN'
	| 'PRB'
	| 'PYG'
	| 'QAR'
	| 'RON'
	| 'RSD'
	| 'RUB'
	| 'RWF'
	| 'SAR'
	| 'SBD'
	| 'SCR'
	| 'SDG'
	| 'SEK'
	| 'SGD'
	| 'SHP'
	| 'SLL'
	| 'SOS'
	| 'SRD'
	| 'SSP'
	| 'STN'
	| 'SYP'
	| 'SZL'
	| 'THB'
	| 'TJS'
	| 'TMT'
	| 'TND'
	| 'TOP'
	| 'TRY'
	| 'TTD'
	| 'TWD'
	| 'TZS'
	| 'UAH'
	| 'UGX'
	| 'USD'
	| 'UYU'
	| 'UZS'
	| 'VEF'
	| 'VES'
	| 'VND'
	| 'VUV'
	| 'WST'
	| 'XAF'
	| 'XCD'
	| 'XOF'
	| 'XPF'
	| 'YER'
	| 'ZAR'
	| 'ZMW';
