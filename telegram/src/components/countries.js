const countries = [
  {
    label: 'Country',
    callCode: -1,
  },
  {
    label: 'Turkey',
    callCode: 90,
  },
  {
    label: 'Afghanistan',
    callCode: 93,
  },
  {
    label: 'Albania',
    callCode: 355,
  },
  {
    label: 'Algeria',
    callCode: 213,
  },
  {
    label: 'American Samoa',
    callCode: 1684,
  },
  {
    label: 'Andorra',
    callCode: 376,
  },
  {
    label: 'Angola',
    callCode: 244,
  },
  {
    label: 'Anguilla',
    callCode: 1264,
  },
  {
    label: 'Antarctica',
    callCode: 672,
  },
  {
    label: 'Antigua and Barbuda',
    callCode: 1268,
  },
  {
    label: 'Argentina',
    callCode: 54,
  },
  {
    label: 'Armenia',
    callCode: 374,
  },
  {
    label: 'Aruba',
    callCode: 297,
  },
  {
    label: 'Australia',
    callCode: 61,
  },
  {
    label: 'Austria',
    callCode: 43,
  },
  {
    label: 'Azerbaijan',
    callCode: 994,
  },
  {
    label: 'Bahamas',
    callCode: 1242,
  },
  {
    label: 'Bahrain',
    callCode: 973,
  },
  {
    label: 'Bangladesh',
    callCode: 880,
  },
  {
    label: 'Barbados',
    callCode: 1246,
  },
  {
    label: 'Belarus',
    callCode: 375,
  },
  {
    label: 'Belgium',
    callCode: 32,
  },
  {
    label: 'Belize',
    callCode: 501,
  },
  {
    label: 'Benin',
    callCode: 229,
  },
  {
    label: 'Bermuda',
    callCode: 1441,
  },
  {
    label: 'Bhutan',
    callCode: 975,
  },
  {
    label: 'Bolivia',
    callCode: 591,
  },
  {
    label: 'Bosnia and Herzegovina',
    callCode: 387,
  },
  {
    label: 'Botswana',
    callCode: 267,
  },
  {
    label: 'Bouvet Island',
    callCode: 55,
  },
  {
    label: 'Brazil',
    callCode: 55,
  },
  {
    label: 'British Indian Ocean Territory',
    callCode: 246,
  },
  {
    label: 'Brunei',
    callCode: 673,
  },
  {
    label: 'Bulgaria',
    callCode: 359,
  },
  {
    label: 'Burkina Faso',
    callCode: 226,
  },
  {
    label: 'Burundi',
    callCode: 257,
  },
  {
    label: 'Cambodia',
    callCode: 855,
  },
  {
    label: 'Cameroon',
    callCode: 237,
  },
  {
    label: 'Canada',
    callCode: 1,
  },
  {
    label: 'Cape Verde',
    callCode: 238,
  },
  {
    label: 'Cayman Islands',
    callCode: 1345,
  },
  {
    label: 'Central African Republic',
    callCode: 236,
  },
  {
    label: 'Chad',
    callCode: 235,
  },
  {
    label: 'Chile',
    callCode: 56,
  },
  {
    label: 'China',
    callCode: 86,
  },
  {
    label: 'Christmas Island',
    callCode: 61,
  },
  {
    label: 'Cocos (Keeling) Islands',
    callCode: 61,
  },
  {
    label: 'Colombia',
    callCode: 57,
  },
  {
    label: 'Comoros',
    callCode: 269,
  },
  {
    label: 'Congo',
    callCode: 242,
  },
  {
    label: 'Cook Islands',
    callCode: 682,
  },
  {
    label: 'Costa Rica',
    callCode: 506,
  },
  {
    label: 'Croatia',
    callCode: 385,
  },
  {
    label: 'Cuba',
    callCode: 53,
  },
  {
    label: 'Cyprus',
    callCode: 357,
  },
  {
    label: 'Czech Republic',
    callCode: 420,
  },
  {
    label: 'Denmark',
    callCode: 45,
  },
  {
    label: 'Djibouti',
    callCode: 253,
  },
  {
    label: 'Dominica',
    callCode: 1767,
  },
  {
    label: 'Dominican Republic',
    callCode: 1849,
  },
  {
    label: 'East Timor',
    callCode: 670,
  },
  {
    label: 'Ecuador',
    callCode: 593,
  },
  {
    label: 'Egypt',
    callCode: 20,
  },
  {
    label: 'El Salvador',
    callCode: 503,
  },
  {
    label: 'England',
    callCode: 44,
  },
  {
    label: 'Equatorial Guinea',
    callCode: 240,
  },
  {
    label: 'Eritrea',
    callCode: 291,
  },
  {
    label: 'Estonia',
    callCode: 372,
  },
  {
    label: 'Ethiopia',
    callCode: 251,
  },
  {
    label: 'Falkland Islands',
    callCode: 500,
  },
  {
    label: 'Faroe Islands',
    callCode: 298,
  },
  {
    label: 'Fiji Islands',
    callCode: 679,
  },
  {
    label: 'Finland',
    callCode: 358,
  },
  {
    label: 'France',
    callCode: 33,
  },
  {
    label: 'French Guiana',
    callCode: 594,
  },
  {
    label: 'French Polynesia',
    callCode: 689,
  },
  {
    label: 'French Southern territories',
    callCode: 262,
  },
  {
    label: 'Gabon',
    callCode: 241,
  },
  {
    label: 'Gambia',
    callCode: 220,
  },
  {
    label: 'Georgia',
    callCode: 995,
  },
  {
    label: 'Germany',
    callCode: 49,
  },
  {
    label: 'Ghana',
    callCode: 233,
  },
  {
    label: 'Gibraltar',
    callCode: 350,
  },
  {
    label: 'Greece',
    callCode: 30,
  },
  {
    label: 'Greenland',
    callCode: 299,
  },
  {
    label: 'Grenada',
    callCode: 1473,
  },
  {
    label: 'Guadeloupe',
    callCode: 590,
  },
  {
    label: 'Guam',
    callCode: 1671,
  },
  {
    label: 'Guatemala',
    callCode: 502,
  },
  {
    label: 'Guinea',
    callCode: 224,
  },
  {
    label: 'Guinea-Bissau',
    callCode: 245,
  },
  {
    label: 'Guyana',
    callCode: 592,
  },
  {
    label: 'Haiti',
    callCode: 509,
  },
  {
    label: 'Heard Island and McDonald Islands',
    callCode: 672,
  },
  {
    label: 'Holy See (Vatican City State)',
    callCode: 379,
  },
  {
    label: 'Honduras',
    callCode: 504,
  },
  {
    label: 'Hong Kong',
    callCode: 852,
  },
  {
    label: 'Hungary',
    callCode: 36,
  },
  {
    label: 'Iceland',
    callCode: 354,
  },
  {
    label: 'India',
    callCode: 91,
  },
  {
    label: 'Indonesia',
    callCode: 62,
  },
  {
    label: 'Iran',
    callCode: 98,
  },
  {
    label: 'Iraq',
    callCode: 964,
  },
  {
    label: 'Ireland',
    callCode: 353,
  },
  {
    label: 'Israel',
    callCode: 972,
  },
  {
    label: 'Italy',
    callCode: 39,
  },
  {
    label: 'Ivory Coast',
    callCode: 225,
  },
  {
    label: 'Jamaica',
    callCode: 1876,
  },
  {
    label: 'Japan',
    callCode: 81,
  },
  {
    label: 'Jordan',
    callCode: 962,
  },
  {
    label: 'Kazakhstan',
    callCode: 7,
  },
  {
    label: 'Kenya',
    callCode: 254,
  },
  {
    label: 'Kiribati',
    callCode: 686,
  },
  {
    label: 'Kuwait',
    callCode: 965,
  },
  {
    label: 'Kyrgyzstan',
    callCode: 996,
  },
  {
    label: 'Laos',
    callCode: 856,
  },
  {
    label: 'Latvia',
    callCode: 371,
  },
  {
    label: 'Lebanon',
    callCode: 961,
  },
  {
    label: 'Lesotho',
    callCode: 266,
  },
  {
    label: 'Liberia',
    callCode: 231,
  },
  {
    label: 'Libyan Arab Jamahiriya',
    callCode: 218,
  },
  {
    label: 'Liechtenstein',
    callCode: 423,
  },
  {
    label: 'Lithuania',
    callCode: 370,
  },
  {
    label: 'Luxembourg',
    callCode: 352,
  },
  {
    label: 'Macao',
    callCode: 853,
  },
  {
    label: 'North Macedonia',
    callCode: 389,
  },
  {
    label: 'Madagascar',
    callCode: 261,
  },
  {
    label: 'Malawi',
    callCode: 265,
  },
  {
    label: 'Malaysia',
    callCode: 60,
  },
  {
    label: 'Maldives',
    callCode: 960,
  },
  {
    label: 'Mali',
    callCode: 223,
  },
  {
    label: 'Malta',
    callCode: 356,
  },
  {
    label: 'Marshall Islands',
    callCode: 692,
  },
  {
    label: 'Martinique',
    callCode: 596,
  },
  {
    label: 'Mauritania',
    callCode: 222,
  },
  {
    label: 'Mauritius',
    callCode: 230,
  },
  {
    label: 'Mayotte',
    callCode: 262,
  },
  {
    label: 'Mexico',
    callCode: 52,
  },
  {
    label: 'Micronesia, Federated States of',
    callCode: 691,
  },
  {
    label: 'Moldova',
    callCode: 373,
  },
  {
    label: 'Monaco',
    callCode: 377,
  },
  {
    label: 'Mongolia',
    callCode: 976,
  },
  {
    label: 'Montserrat',
    callCode: 1664,
  },
  {
    label: 'Morocco',
    callCode: 212,
  },
  {
    label: 'Mozambique',
    callCode: 258,
  },
  {
    label: 'Myanmar',
    callCode: 95,
  },
  {
    label: 'Namibia',
    callCode: 264,
  },
  {
    label: 'Nauru',
    callCode: 674,
  },
  {
    label: 'Nepal',
    callCode: 977,
  },
  {
    label: 'Netherlands',
    callCode: 31,
  },
  {
    label: 'Netherlands Antilles',
    callCode: 599,
  },
  {
    label: 'New Caledonia',
    callCode: 687,
  },
  {
    label: 'New Zealand',
    callCode: 64,
  },
  {
    label: 'Nicaragua',
    callCode: 505,
  },
  {
    label: 'Niger',
    callCode: 227,
  },
  {
    label: 'Nigeria',
    callCode: 234,
  },
  {
    label: 'Niue',
    callCode: 683,
  },
  {
    label: 'Norfolk Island',
    callCode: 672,
  },
  {
    label: 'North Korea',
    callCode: 850,
  },
  {
    label: 'Northern Ireland',
    callCode: 44,
  },
  {
    label: 'Northern Mariana Islands',
    callCode: 1670,
  },
  {
    label: 'Norway',
    callCode: 47,
  },
  {
    label: 'Oman',
    callCode: 968,
  },
  {
    label: 'Pakistan',
    callCode: 92,
  },
  {
    label: 'Palau',
    callCode: 680,
  },
  {
    label: 'Palestine',
    callCode: 970,
  },
  {
    label: 'Panama',
    callCode: 507,
  },
  {
    label: 'Papua New Guinea',
    callCode: 675,
  },
  {
    label: 'Paraguay',
    callCode: 595,
  },
  {
    label: 'Peru',
    callCode: 51,
  },
  {
    label: 'Philippines',
    callCode: 63,
  },
  {
    label: 'Pitcairn',
    callCode: 64,
  },
  {
    label: 'Poland',
    callCode: 48,
  },
  {
    label: 'Portugal',
    callCode: 351,
  },
  {
    label: 'Puerto Rico',
    callCode: 1939,
  },
  {
    label: 'Qatar',
    callCode: 974,
  },
  {
    label: 'Reunion',
    callCode: 262,
  },
  {
    label: 'Romania',
    callCode: 40,
  },
  {
    label: 'Russian Federation',
    callCode: 7,
  },
  {
    label: 'Rwanda',
    callCode: 250,
  },
  {
    label: 'Saint Helena',
    callCode: 290,
  },
  {
    label: 'Saint Kitts and Nevis',
    callCode: 1869,
  },
  {
    label: 'Saint Lucia',
    callCode: 1758,
  },
  {
    label: 'Saint Pierre and Miquelon',
    callCode: 508,
  },
  {
    label: 'Saint Vincent and the Grenadines',
    callCode: 1784,
  },
  {
    label: 'Samoa',
    callCode: 685,
  },
  {
    label: 'San Marino',
    callCode: 378,
  },
  {
    label: 'Sao Tome and Principe',
    callCode: 239,
  },
  {
    label: 'Saudi Arabia',
    callCode: 966,
  },
  {
    label: 'Scotland',
    callCode: 44,
  },
  {
    label: 'Senegal',
    callCode: 221,
  },
  {
    label: 'Serbia',
    callCode: 381,
  },
  {
    label: 'Seychelles',
    callCode: 248,
  },
  {
    label: 'Sierra Leone',
    callCode: 232,
  },
  {
    label: 'Singapore',
    callCode: 65,
  },
  {
    label: 'Slovakia',
    callCode: 421,
  },
  {
    label: 'Slovenia',
    callCode: 386,
  },
  {
    label: 'Solomon Islands',
    callCode: 677,
  },
  {
    label: 'Somalia',
    callCode: 252,
  },
  {
    label: 'South Africa',
    callCode: 27,
  },
  {
    label: 'South Georgia and the South Sandwich Islands',
    callCode: 500,
  },
  {
    label: 'South Korea',
    callCode: 82,
  },
  {
    label: 'South Sudan',
    callCode: 211,
  },
  {
    label: 'Spain',
    callCode: 34,
  },
  {
    label: 'Sri Lanka',
    callCode: 94,
  },
  {
    label: 'Sudan',
    callCode: 249,
  },
  {
    label: 'Suriname',
    callCode: 597,
  },
  {
    label: 'Svalbard and Jan Mayen',
    callCode: 47,
  },
  {
    label: 'Swaziland',
    callCode: 268,
  },
  {
    label: 'Sweden',
    callCode: 46,
  },
  {
    label: 'Switzerland',
    callCode: 41,
  },
  {
    label: 'Syria',
    callCode: 963,
  },
  {
    label: 'Tajikistan',
    callCode: 992,
  },
  {
    label: 'Tanzania',
    callCode: 255,
  },
  {
    label: 'Thailand',
    callCode: 66,
  },
  {
    label: 'The Democratic Republic of Congo',
    callCode: 243,
  },
  {
    label: 'Togo',
    callCode: 228,
  },
  {
    label: 'Tokelau',
    callCode: 690,
  },
  {
    label: 'Tonga',
    callCode: 676,
  },
  {
    label: 'Trinidad and Tobago',
    callCode: 1868,
  },
  {
    label: 'Tunisia',
    callCode: 216,
  },
  {
    label: 'Turkmenistan',
    callCode: 993,
  },
  {
    label: 'Turks and Caicos Islands',
    callCode: 1649,
  },
  {
    label: 'Tuvalu',
    callCode: 688,
  },
  {
    label: 'Uganda',
    callCode: 256,
  },
  {
    label: 'Ukraine',
    callCode: 380,
  },
  {
    label: 'United Arab Emirates',
    callCode: 971,
  },
  {
    label: 'United Kingdom',
    callCode: 44,
  },
  {
    label: 'United States',
    callCode: 1,
  },
  {
    label: 'United States Minor Outlying Islands',
    callCode: 1,
  },
  {
    label: 'Uruguay',
    callCode: 598,
  },
  {
    label: 'Uzbekistan',
    callCode: 998,
  },
  {
    label: 'Vanuatu',
    callCode: 678,
  },
  {
    label: 'Venezuela',
    callCode: 58,
  },
  {
    label: 'Vietnam',
    callCode: 84,
  },
  {
    label: 'Virgin Islands, British',
    callCode: 1,
  },
  {
    label: 'Virgin Islands, U.S.',
    callCode: 1,
  },
  {
    label: 'Wales',
    callCode: 44,
  },
  {
    label: 'Wallis and Futuna',
    callCode: 681,
  },
  {
    label: 'Western Sahara',
    callCode: 212,
  },
  {
    label: 'Yemen',
    callCode: 967,
  },
  {
    label: 'Zambia',
    callCode: 260,
  },
  {
    label: 'Zimbabwe',
    callCode: 263,
  },
];

export default countries;
