export default function NumberFormat(num, decimalsDigits = "0", thousandSeparator = ",") {
	const {format} = require('number-currency-format');
	return format(num, {thousandSeparator, decimalSeparator : "", decimalsDigits})
}
