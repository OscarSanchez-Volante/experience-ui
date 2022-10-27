export const treeInputvalidators= [
    { 
       id: "free",
       name: "Free",
       items: [
        {
          id: "free1",
          name: "ACH",
          expand: false, 
        },
         {
           id: "free2",
           name: " AusPayNet ISO",
           expand: false, 
         },
         {
           id: "free3",
           name: "BAHTNET ISO",
           expand: false,
        
         },
         {
          id: "free4",
          name: "BAI2",
          expand: false,
       
        },
         {
           id: "free5",
           name: " CHAPS ISO",
           expand: false,
           childs: [
            {
              id: "free-child",
              name: " CHAPS ISO ENH 20022'",
              checked: false
            },
            {
              id: "free-child",
              name: "CHAPS ISO L4L 20022'",
              checked: false
            },
          ]
         },
         {
          id: "free6",
          name: "CHAPS MT",
          expand: false,
       
        },
         {
          id: "free7",
          name: "EURO1/STEP1",
          expand: false,
       
        },
        {
          id: "free8",
          name: "FedNow",
          expand: false,
       
        },
        {
          id: "free9",
          name: "GCC RTGS",
          expand: false,
       
        },
        {
          id: "free10",
          name: "Lynx ISO",
          expand: false,
       
        },
        {
          id: "free11",
          name: "MEPS+ NextGen",
          expand: false,
       
        },
        {
          id: "free12",
          name: "Payments NZ ISO",
          expand: false,
       
        },
        {
          id: "free13",
          name: "PhilPaSS ISO",
          expand: false,
       
        },
        {
          id: "free14",
          name: "NACHAM",
          expand: false,
       
        },
        {
          id: "free15",
          name: "NEFT",
          expand: false,
       
        },
        {
          id: "free16",
          name: "RTGS",
          expand: false,
       
        },
        {
          id: "free17",
          name: "Saudi IPS",
          expand: false,
       
        },
        {
          id: "free18",
          name: "SEPA",
          expand: false,
       
        },
        {
          id: "free19",
          name: "STEP 2",
          expand: false,
       
        },
        {
          id: "free20",
          name: " SWIFT",
          expand: false,
          childs: [
            {
              id: "free-child",
              name: " SWIFT CBPR+ ISO 20022 Messages for Payments and Reporting",
              checked: false
            },
            {
              id: "free-child",
              name: "SWIFT HVPS+",
              checked: false
            },
            {
              id: "free-child",
              name: "SWIFT MT 2022",
              checked: false
            },
            {
              id: "free-child",
              name: "SWIFT MT 2021",
              checked: false
            },
            {
              id: "free-child",
              name: "SWIFT MT 2020",
              checked: false
            },
            {
              id: "free-child",
              name: "SwiftNet XSYS",
              checked: false
            },
            ]
        },
        {
          id: "free21",
          name: "Swiss Payments",
          expand: false,
       
        },
        {
          id: "free22",
          name: " TARGET2",
          expand: false,
          childs: [
            {
              id: "free-child",
              name: " TARGET2 MT",
              checked: false
            },
            {
              id: "free-child",
              name: "TARGET2 RTGS",
              checked: false
            },
            {
              id: "free-child",
              name: "TARGET2 Securities",
              checked: false
            },
          ]
        },
        {
          id: "free23",
          name: "US TCH RTP",
          expand: false,
       
        },
       ]
     },
 
   ];
 