var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

// if the key name from salesTaxRates === companySalesData[i]["province"]province


function calculateSalesTax(salesData, taxRates) {
  var result = {};

  salesData.forEach(function(company){
    console.log(company)
    var total = (company.sales).reduce(function(sum, value) {
      return sum + value;
    }, 0);
    var taxes = total * taxRates[company.province]
    if (result[company.name]) {
      var oldTotalTaxes = result[company.name].totalTaxes;
      var oldTotalSales = result[company.name].totalSales;
      result[company.name] = {
        totalSales: oldTotalSales + total,
        totalTaxes: oldTotalTaxes + taxes
      }

    } else {
      result[company.name] = {
        totalSales: total,
        totalTaxes: taxes
      }
    }

    // totalSales.push({
    //   name: company.name,
    //   totalSales: total,
    //   totalTaxes: taxes
    // })
  })
//for (var i = 0; i < totalSales.length; i++)
//  if (companySalesData[i]["name"]
 //   )
// }
 // console.log(companySalesData[1]["name"])
 console.log('-----')
  return result;
}



//function calculateSalesTax(salesData, taxRates) {
  // Implement your code here
//}

console.log(calculateSalesTax(companySalesData, salesTaxRates));


/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/