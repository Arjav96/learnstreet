// This function calculates the tax according to the given tax-structure and returns the tax
function calculateTax(inc)
    {
        // REPLACE THIS CODE WITH YOUR calculateTax() METHOD
        inc = Number(inc);
        var totalTax = 0.0;
        if (inc > 40000) {
            totalTax += (inc - 40000)*0.30;
            inc = 40000
        }
        if (inc > 20000) {
            totalTax += (inc - 20000)*0.20;
            inc = 20000;
        }
        if (inc > 10000) {
            totalTax += (inc - 10000)*0.10;
            inc = 10000;
        }
        return totalTax;
    }

// This function reads a series of incomes from comma separated values in the string text and then formats the income and tax in a table and returns the string
function incomeList(text)
    {
        var incomes = text.split(",");
        var result = [];
        var taxes = [];
        
        for (var i = 0; i < incomes.length; ++i) {
            taxes.push(calculateTax(incomes[i]));
            result.push(incomes[i]+","+taxes[i]);
        }
        return result;
	}