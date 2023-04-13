import React from 'react';
import { CustomButton } from '../components';

const Payment = () => {
	return (
		<CustomButton
			type="filled"
			title="Pay Now"
			handleClick={window.open('https://rzp.io/i/2A6OBig', '_blank')}
			customStyles="w-fit px-4 py-2.5 font-bold text-sm"
		/>
	);
};

export default Payment;
