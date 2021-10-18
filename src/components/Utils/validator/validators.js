export const requiredValidate = (value) => {
	if (value) return undefined;
	return "Field is empty";
}

export const TextLengthCreator = (maxLength) => (value) => {
	if (value.length > maxLength) return `Max ${maxLength} symbols`;
	return undefined;
}
