export const selectedAddOn2=[
       
    {
    "title":"Message Constructors & Validators",
    "selected":true,
    "isDisabled":true,
    "desc":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
    "freeDetails":{
      "title":"Features",
      'items':[
        {
          id: "free1",
          name: "ACH",
          checked: false,
          expand: false,
     
          },
          {
            id: "free1",
            name: " AusPayNet ISO",
            checked: false,
            expand: false,
           
            }, {
              id: "free1",
              name: "CHAPS ISO",
              checked: false,
              expand: false,
              childs: [
                {
                  id: "free-child",
                  name: " CHAPS ISO ENH 20022",
                  checked: false
                },
                {
                  id: "free-child",
                  name: " CHAPS ISO L4L 20022",
                  checked: false
                },
          
              ]
              },
        
        
        
        ]
  }
},
  {
    "title":"Message Transformers",
    "selected":true,
    "isDisabled":true,
    "desc":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
    "freeDetails":{
      "title":"Features",
      'items':[
        {
          id: "free1",
          name: "SWIFT ISO 20022 (CBPR+) to SWIFT MT",
          checked: false,
          expand: false,
          childs: [
            {
              id: "free-child",
              name: "camt.029.001.09 ➔ MT196",
              checked: false
            },
            {
              id: "free-child",
              name: " camt.029.001.09 ➔ MT296",
              checked: false
            },
      
          ]
          },
          {
            id: "free1",
            name: "SWIFT MT to SWIFT ISO 20022 (CBPR+)",
            checked: false,
            expand: false,
            childs: [
              {
                id: "free-child",
                name: "MT103 ➔ pacs.008.001.08",
                checked: false
              },
              {
                id: "free-child",
                name: "MT103 (REJT) ➔ pacs.002.001.10",
                checked: false
              },
              {
                id: "free-child",
                name: "MT103 (RETN) ➔ pacs.004.001.09",
                checked: false
              },
        
            ]
            }, {
              id: "free1",
              name: "SAMOS ISO to SAMOS MT",
              checked: false,
              expand: false,
              childs: [
                {
                  id: "free-child",
                  name: "SAMOS_camt.004.001.08 ➔ MT998",
                  checked: false
                },
                {
                  id: "free-child",
                  name: "SAMOS_camt.050.001.05 ➔ MT202 (O)",
                  checked: false
                },
          
              ]
              },
        
        
        
        ]    }
  },
  {
    "title":"Message Creators",
    "selected":true,
    "isDisabled":true,
    "desc":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
    "freeDetails":{
      "title":"Features",
      'items':[
        {
          id: "free1",
          name: "SWIFT ISO 20022 (CBPR+) ⇆ Volante Standard",
          checked: false,
          expand: false,
          childs: [
            {
              id: "free-child",
              name: "camt.029.001.09 ⇆ ResolutionOfInvestigation",
              checked: false
            },
            {
              id: "free-child",
              name: "camt.052.001.08 ⇆ BankToCustomerAccountReport",
              checked: false
            },
      
          ]
          },
          {
            id: "free1",
            name: "SWIFT MT to Volante Standard",
            checked: false,
            expand: false,
            childs: [
              {
                id: "free-child",
                name: "MT103 ➔ FIToFICustomerCreditTransfer",
                checked: false
              },
              {
                id: "free-child",
                name: "MT103STP ➔ FIToFICustomerCreditTransfer",
                checked: false
              },
              {
                id: "free-child",
                name: "MT192 ➔ FIToFIPaymentCancellationRequest",
                checked: false
              },
        
            ]
            }, {
              id: "free1",
              name: "Volante Standard to SWIFT MT",
              checked: false,
              expand: false,
              childs: [
                {
                  id: "free-child",
                  name: "BankToCustomerDebitCreditNotification ➔ MT900",
                  checked: false
                },
                {
                  id: "free-child",
                  name: "BankToCustomerDebitCreditNotification ➔ MT910",
                  checked: false
                },
          
              ]
              },
        
        
        
        ]     
       }
  }]