import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-rail2',
  templateUrl: './payment-rail2.component.html',
  styleUrls: ['./payment-rail2.component.scss']
})
export class PaymentRail2Component implements OnInit {
  public selected:any={"title":sessionStorage.getItem('selectedAddOn')};

	public accordianData = [
		{
			gridId:'grid1' ,
		  id: "GB90CITI1850080091",
		  header: "CitiBank ",
		  content: "IBAN number  ",
		  amount: "Currency",
		  accNo: 2222222222,
		  amountIn: "INR",
		  name: "NttyStsCd",
		  state: "Active",
		  name1:"FctvFr",
		  date: 2016,
		  pty:"PtyCd",
		  ptyval:"SANTANDER",
		  acctp:"AcctTp",
		  acctpval:"NOS",
		  prefacc:"PrefrdAcct",
		  prefaccval:"False",
		  Dflt:"DfltCcy",
		  amtin:"EUR",
		  own:"OwningBrnchCd",
		  ownval:"USA Branch",
		},
		{
			gridId:'grid2',
		  id: "MU17BOMM010110103",
		  header: " Habib Bank Limited",
		  content: "IBAN number  " ,
		  amount: "Currency",
		  accNo: 2222222222,
		  amountIn: "Euro",
		  name: "NttyStsCd",
		  state: "Active",
		  name1:"FctvFr",
		  date: 2016,
		  pty:"PtyCd",
		  ptyval:"SANTANDER",
		  acctp:"AcctTp",
		  acctpval:"NOS",
		  prefacc:"PrefrdAcct",
		  prefaccval:"False",
		  Dflt:"DfltCcy",
		  amtin:"EUR",
		  own:"OwningBrnchCd",
		  ownval:"USA Branch",

		},
		{
		gridId:'grid3',
		  id: "DE565012010000637",
		  header: "ICICI Bank",
		  content: "IBAN number  ",
		  amount: "Currency",
		  accNo: 2222222222,
		  amountIn: "INR",
		  name: "NttyStsCd",
		  state: "Active",
		  name1:"FctvFr",
		  date: 2016,
		  pty:"PtyCd",
		  ptyval:"SANTANDER",
		  acctp:"AcctTp",
		  acctpval:"NOS",
		  prefacc:"PrefrdAcct",
		  prefaccval:"False",
		  Dflt:"DfltCcy",
		  amtin:"EUR",
		  own:"OwningBrnchCd",
		  ownval:"USA Branch",

		},
		{
			gridId:'grid4',
			id: "GB63CHAS60166819",
			header: "JP Morgan",
			content: "IBAN number  ",
			amount: "Currency",
			accNo: 2222222222,
			amountIn: "USD",
			name: "NttyStsCd",
			state: "Active",
			name1:"FctvFr",
			date: 2016,
			pty:"PtyCd",
			ptyval:"SANTANDER",
			acctp:"AcctTp",
			acctpval:"NOS",
			prefacc:"PrefrdAcct",
			prefaccval:"False",
			Dflt:"DfltCcy",
			amtin:"EUR",
			own:"OwningBrnchCd",
			ownval:"USA Branch",

		},
		{
			gridId:'grid5',

			id: "	EG3800190006380002",
			header: "Commercial International Bank",
			content: "IBAN number  ",
			amount: "Currency",
			accNo: 2222222222,
			amountIn: "EGP",
			name: "NttyStsCd",
			state: "Active",
			name1:"FctvFr",
			date: 2016,
			pty:"PtyCd",
			ptyval:"SANTANDER",
			acctp:"AcctTp",
			acctpval:"NOS",
			prefacc:"PrefrdAcct",
			prefaccval:"False",
			Dflt:"DfltCcy",
			amtin:"EUR",
			own:"OwningBrnchCd",
			ownval:"USA Branch",

		},
		{
			gridId: 'grid6',
			id: "DE89370400013000",
			header: "Deutsche Bank.",
			content: "IBAN number  ",
			amount: "Currency",
			accNo: 2222222222,
			amountIn: "Euro",
			name: "NttyStsCd",
			state: "Active",
			name1:"FctvFr",
			date: 2016,
			pty:"PtyCd",
			ptyval:"SANTANDER",
			acctp:"AcctTp",
			acctpval:"NOS",
			prefacc:"PrefrdAcct",
			prefaccval:"False",
			Dflt:"DfltCcy",
			amtin:"EUR",
			own:"OwningBrnchCd",
			ownval:"USA Branch",

		},

	  ];
  public tableHead2=[{
		"label": "ID",
		"fieldName": "ID"
	}, {
		"label": "Amount",
		"fieldName": "Amount"
	}, {
		"label": "Currency",
		"fieldName": "Currency"
	}, {
		"label": "Source",
		"fieldName": "Source"
	}, {
		"label": "Destination",
		"fieldName": "Destination"
	}, {
		"label": "Transaction Date",
		"fieldName": "Transaction Date"
	},{
		"label": "Status",
		"fieldName": "Status"
	}];
  public tableValues2=[{
    "ID": "01",
    "Amount": "$1000",
    "Currency": "USD",
    "Source": "Great Britain",
    "Destination": "United States",
    "Transaction Date": "08-08-2020 | 10:07:47.589",
    "Status": "Pending"
  },
  {
    "ID": "01",
    "Amount": "$2000",
    "Currency": "INR",
    "Source": "Great Britain",
    "Destination": "United States",
    "Transaction Date": "08-08-2020 | 10:07:47.589",
    "Status": "Initial"
  },
  {
    "ID": "02",
    "Amount": "$3000",
    "Currency": "USD",
    "Source": "Great Britain",
    "Destination": "United States",
    "Transaction Date": "08-08-2020 | 10:07:47.589",
    "Status": "Success"
  },
  {
    "ID": "03",
    "Amount": "$4000",
    "Currency": "RUPEES",
    "Source": "Great Britain",
    "Destination": "United States",
    "Transaction Date": "08-08-2020 | 10:07:47.589",
    "Status": "Progress"
  },
  {
    "ID": "04",
    "Amount": "$5000",
    "Currency": "EURO",
    "Source": "Great Britain",
    "Destination": "United States",
    "Transaction Date": "08-08-2020 | 10:07:47.589",
    "Status": "Pending"
  },
  {
    "ID": "05",
    "Amount": "$6000",
    "Currency": "RS",
    "Source": "Great Britain",
    "Destination": "United States",
    "Transaction Date": "08-08-2020 | 10:07:47.589",
    "Status": "Pending"
  },
  {
    "ID": "06",
    "Amount": "$6000",
    "Currency": "RS",
    "Source": "Great Britain",
    "Destination": "United States",
    "Transaction Date": "08-08-2020 | 10:07:47.589",
    "Status": "Pending"
  },
  {
    "ID": "07",
    "Amount": "$6000",
    "Currency": "RS",
    "Source": "Great Britain",
    "Destination": "United States",
    "Transaction Date": "08-08-2020 | 10:07:47.589",
    "Status": "Pending"
  },
  {
    "ID": "08",
    "Amount": "$6000",
    "Currency": "RS",
    "Source": "Great Britain",
    "Destination": "United States",
    "Transaction Date": "08-08-2020 | 10:07:47.589",
    "Status": "Pending"
  },
  {
    "ID": "09",
    "Amount": "$6000",
    "Currency": "RS",
    "Source": "Great Britain",
    "Destination": "United States",
    "Transaction Date": "08-08-2020 | 10:07:47.589",
    "Status": "Pending"
  },
  {
    "ID": "10",
    "Amount": "$6000",
    "Currency": "RS",
    "Source": "Great Britain",
    "Destination": "United States",
    "Transaction Date": "08-08-2020 | 10:07:47.589",
    "Status": "Pending"
  },
  {
    "ID": "11",
    "Amount": "$6000",
    "Currency": "RS",
    "Source": "Great Britain",
    "Destination": "United States",
    "Transaction Date": "08-08-2020 | 10:07:47.589",
    "Status": "Pending"
  },
  {
    "ID": "12",
    "Amount": "$6000",
    "Currency": "RS",
    "Source": "Great Britain",
    "Destination": "United States",
    "Transaction Date": "08-08-2020 | 10:07:47.589",
    "Status": "Pending"
  },
  {
    "ID": "13",
    "Amount": "$6000",
    "Currency": "RS",
    "Source": "Great Britain",
    "Destination": "United States",
    "Transaction Date": "08-08-2020 | 10:07:47.589",
    "Status": "Pending"
  },
  {
    "ID": "14",
    "Amount": "$6000",
    "Currency": "RS",
    "Source": "Great Britain",
    "Destination": "United States",
    "Transaction Date": "08-08-2020 | 10:07:47.589",
    "Status": "Pending"
  },
  {
    "ID": "15",
    "Amount": "$6000",
    "Currency": "RS",
    "Source": "Great Britain",
    "Destination": "United States",
    "Transaction Date": "08-08-2020 | 10:07:47.589",
    "Status": "Pending"
  },
  {
    "ID": "16",
    "Amount": "$6000",
    "Currency": "RS",
    "Source": "Great Britain",
    "Destination": "United States",
    "Transaction Date": "08-08-2020 | 10:07:47.589",
    "Status": "Pending"
  },
  {
    "ID": "17",
    "Amount": "$6000",
    "Currency": "RS",
    "Source": "Great Britain",
    "Destination": "United States",
    "Transaction Date": "08-08-2020 | 10:07:47.589",
    "Status": "Pending"
  },
  {
    "ID": "18",
    "Amount": "$6000",
    "Currency": "RS",
    "Source": "Great Britain",
    "Destination": "United States",
    "Transaction Date": "08-08-2020 | 10:07:47.589",
    "Status": "Pending"
  },
  {
    "ID": "19",
    "Amount": "$6000",
    "Currency": "RS",
    "Source": "Great Britain",
    "Destination": "United States",
    "Transaction Date": "08-08-2020 | 10:07:47.589",
    "Status": "Pending"
  },
  {
    "ID": "20",
    "Amount": "$6000",
    "Currency": "RS",
    "Source": "Great Britain",
    "Destination": "United States",
    "Transaction Date": "08-08-2020 | 10:07:47.589",
    "Status": "Pending"
  },
  {
    "ID": "21",
    "Amount": "$6000",
    "Currency": "RS",
    "Source": "Great Britain",
    "Destination": "United States",
    "Transaction Date": "08-08-2020 | 10:07:47.589",
    "Status": "Pending"
  },
  {
    "ID": "22",
    "Amount": "$6000",
    "Currency": "RS",
    "Source": "Great Britain",
    "Destination": "United States",
    "Transaction Date": "08-08-2020 | 10:07:47.589",
    "Status": "Pending"
  },
  {
    "ID": "23",
    "Amount": "$6000",
    "Currency": "RS",
    "Source": "Great Britain",
    "Destination": "United States",
    "Transaction Date": "08-08-2020 | 10:07:47.589",
    "Status": "Pending"
  },
  {
    "ID": "24",
    "Amount": "$6000",
    "Currency": "RS",
    "Source": "Great Britain",
    "Destination": "United States",
    "Transaction Date": "08-08-2020 | 10:07:47.589",
    "Status": "Pending"
  },
  {
    "ID": "25",
    "Amount": "$6000",
    "Currency": "RS",
    "Source": "Great Britain",
    "Destination": "United States",
    "Transaction Date": "08-08-2020 | 10:07:47.589",
    "Status": "Pending"
  },
  {
    "ID": "26",
    "Amount": "$6000",
    "Currency": "RS",
    "Source": "Great Britain",
    "Destination": "United States",
    "Transaction Date": "08-08-2020 | 10:07:47.589",
    "Status": "Pending"
  },
  {
    "ID": "27",
    "Amount": "$6000",
    "Currency": "RS",
    "Source": "Great Britain",
    "Destination": "United States",
    "Transaction Date": "08-08-2020 | 10:07:47.589",
    "Status": "Pending"
  },

 
]

  constructor() { }

  ngOnInit(): void {

  }
  
}
