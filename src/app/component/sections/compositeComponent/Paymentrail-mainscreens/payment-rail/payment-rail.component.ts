import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-payment-rail',
  templateUrl: './payment-rail.component.html',
  styleUrls: ['./payment-rail.component.scss']
})
export class PaymentRailComponent implements OnInit {
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

			id: "	EG3800190080002",
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
			id: "DE893704003000",
			header: "Deutsche Bank",
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
  constructor() { }
  public contain = {
    image: "lock-image.png",
    title: "Payment rail is off",
    description: "Enable this rail to see transactions",
	route :"ftuPaymentRail-14.0"

  }
  ngOnInit(): void {
  } 

}
