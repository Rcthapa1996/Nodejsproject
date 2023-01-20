const ads = [
    { title: 'Hello, world (again)!' }
];

const account = [

  {
    id: "1",
    name: {np:"रामचन्द्र थापा",en:"Ramchandra Thapa"},
    address:{np:"फत्तेपुर",en:"Fattepur"},
    contact:'9876543210',
    accountCreationDate: {bs:"2078-02-10",ad:"2022-10-24"},
    transactionDetails: [ {
        id: 1,
        creationDate:{bs:"2078-02-10",ad:"2022-10-24"},
        principal: 1000,
        rate: 2,
        from: {bs:"2078-02-10",ad:"2022-10-24"},
        to: {bs:"2078-02-10",ad:"2022-10-24"},
        totalMonths:4,
        totalIntrest: 10,
        totalAmount: 1010,
        type:"Lent"
      },
      {
        id: 2,
        creationDate:{bs:"2078-02-10",ad:"2022-10-24"},
        principal: 1000,
        rate: 2,
        from: {bs:"2078-02-10",ad:"2022-10-24"},
        to: {bs:"2078-02-10",ad:"2022-10-24"},
        totalMonths:4,
        totalIntrest: 10,
        totalAmount: 1010,
        type:"Lent"
      },
      {   
        id: 3,
        creationDate:{bs:"2078-02-10",ad:"2022-10-24"},
        principal: 1000,
        rate: 2,
        from: {bs:"2078-02-10",ad:"2022-10-24"},
        to: {bs:"2078-02-10",ad:"2022-10-24"},
        totalMonths:4,
        totalIntrest: 10,
        totalAmount: 1010,
        type:"Lent"
      }
     ],
  },
  {
    id: "2",
    name: {np:"कैलाश थापा",en:"Kailash Thapa"},
    address:{np:"फत्तेपुर",en:"Fattepur"},
    contact:'9876543210',
    accountCreationDate: {bs:"2078-02-10",ad:"2022-10-24"},
    transactionDetails: [ {
        id: 1,
        creationDate:{bs:"2078-02-10",ad:"2022-10-24"},
        principal: 1000,
        rate: 2,
        from: {bs:"2078-02-10",ad:"2022-10-24"},
        to: {bs:"2078-02-10",ad:"2022-10-24"},
        totalMonths:4,
        totalIntrest: 10,
        totalAmount: 1010,
        type:"Lent"
      },
      {
        id: 2,
        creationDate:{bs:"2078-02-10",ad:"2022-10-24"},
        principal: 1000,
        rate: 2,
        from: {bs:"2078-02-10",ad:"2022-10-24"},
        to: {bs:"2078-02-10",ad:"2022-10-24"},
        totalMonths:4,
        totalIntrest: 10,
        totalAmount: 1010,
        type:"Lent"
      },
      {   
        id: 3,
        creationDate:{bs:"2078-02-10",ad:"2022-10-24"},
        principal: 1000,
        rate: 2,
        from: {bs:"2078-02-10",ad:"2022-10-24"},
        to: {bs:"2078-02-10",ad:"2022-10-24"},
        totalMonths:4,
        totalIntrest: 10,
        totalAmount: 1010,
        type:"Lent"
      }
     ],
  },
  {
    id: "3",
    name: {np:"विजया",en:"Bijaya Thapa"},
    address:{np:"फत्तेपुर",en:"Fattepur"},
    contact:'9876543210',
    accountCreationDate: {bs:"2078-02-10",ad:"2022-10-24"},
    transactionDetails: [ {
        id: 1,
        creationDate:{bs:"2078-02-10",ad:"2022-10-24"},
        principal: 1000,
        rate: 2,
        from: {bs:"2078-02-10",ad:"2022-10-24"},
        to: {bs:"2078-02-10",ad:"2022-10-24"},
        totalMonths:4,
        totalIntrest: 10,
        totalAmount: 1010,
        type:"Lent"
      },
      {
        id: 2,
        creationDate:{bs:"2078-02-10",ad:"2022-10-24"},
        principal: 1000,
        rate: 2,
        from: {bs:"2078-02-10",ad:"2022-10-24"},
        to: {bs:"2078-02-10",ad:"2022-10-24"},
        totalMonths:4,
        totalIntrest: 10,
        totalAmount: 1010,
        type:"Lent"
      },
      {   
        id: 3,
        creationDate:{bs:"2078-02-10",ad:"2022-10-24"},
        principal: 1000,
        rate: 2,
        from: {bs:"2078-02-10",ad:"2022-10-24"},
        to: {bs:"2078-02-10",ad:"2022-10-24"},
        totalMonths:4,
        totalIntrest: 10,
        totalAmount: 1010,
        type:"Lent"
      }
     ],
  }


  
  // {
  //       id: "1",
  //       name: "रामचन्द्र थापा",
  //       address: "फत्तेपुर",
  //       contact:'9876543210',
  //       principal: "2000",
  //       rate: "2",
  //       dateOfIssue: "2078-02-10",
  //       totalIntrest: "0",
  //       totalAmount: "0",
  //       transactionDetails: [ {
  //           id: 1,
  //           dateOfIssue: "2079-05-25",
  //           principal: 1000,
  //           rate: 2,
  //           totalIntrest: 10,
  //           totalAmount: 1010
  //         },
  //         {
  //           id: 2,
  //           dateOfIssue: "2079-04-25",
  //           principal: 2000,
  //           rate: 2,
  //           totalIntrest: 15,
  //           totalAmount: 1020
  //         }],
  //   },
  //   {
  //       name: "कैलाश थापा",
  //       address: "फत्तेपुर",
  //       contact:'9876543210',
  //       principal: "2000",
  //       rate: "2",
  //       dateOfIssue: "2079-02-25",
  //       totalIntrest: "0",
  //       totalAmount: "0",
  //       transactionDetails: [],
  //       id: "2"
  //   },
  //   {
  //       name: "विजया",
  //       address: "अम्बासी",
  //       contact:'9876543210',
  //       principal: "2000",
  //       rate: "2",
  //       dateOfIssue: "25-03-2079",
  //       totalIntrest: "0",
  //       totalAmount: "0",
  //       transactionDetails: [ {
  //           id: 1,
  //           dateOfIssue: "2078-02-10",
  //           principal: 1000,
  //           rate: 2,
  //           totalIntrest: 10,
  //           totalAmount: 1010
  //         },
  //         {
  //           id: 2,
  //           dateOfIssue: "2078-02-10",
  //           principal: 2000,
  //           rate: 2,
  //           totalIntrest: 15,
  //           totalAmount: 1020
  //         }],
  //       id: "3"
  //   },
  //   {
  //       name: "रामचन्द्र थापा",
  //       address: "फत्तेपुर",
  //       contact:'9876543210',
  //       principal: "2000",
  //       rate: "2",
  //       dateOfIssue: "2078-02-10",
  //       totalIntrest: "0",
  //       totalAmount: "0",
  //       transactionDetails: [ {
  //           id: 1,
  //           dateOfIssue: "2078-02-10",
  //           principal: 1000,
  //           rate: 2,
  //           totalIntrest: 10,
  //           totalAmount: 1010
  //         },
  //         {
  //           id: 2,
  //           dateOfIssue: "2078-02-10",
  //           principal: 2000,
  //           rate: 2,
  //           totalIntrest: 15,
  //           totalAmount: 1020
  //         }],
  //       id: "1"
  //   },
  //   {
  //       name: "कैलाश थापा",
  //       address: "फत्तेपुर",
  //       contact:'9876543210',
  //       principal: "2000",
  //       rate: "2",
  //       dateOfIssue: "2078-02-10",
  //       totalIntrest: "0",
  //       totalAmount: "0",
  //       transactionDetails: [],
  //       id: "2"
  //   },
  //   {
  //       name: "विजया",
  //       address: "अम्बासी",
  //       contact:'9876543210',
  //       principal: "2000",
  //       rate: "2",
  //       dateOfIssue: "2078-02-10",
  //       totalIntrest: "0",
  //       totalAmount: "0",
  //       transactionDetails: [ {
  //           id: 1,
  //           dateOfIssue: "2078-02-10",
  //           principal: 1000,
  //           rate: 2,
  //           totalIntrest: 10,
  //           totalAmount: 1010
  //         },
  //         {
  //           id: 2,
  //           dateOfIssue: "2078-02-10",
  //           principal: 2000,
  //           rate: 2,
  //           totalIntrest: 15,
  //           totalAmount: 1020
  //         }],
  //       id: "3"
  //   }
]

module.exports = { ads, account };