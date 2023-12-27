import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import FormRegister from './component/FormRegister';

const schema = yup
	.object({
		email: yup.string().email('Email введен некорректно').required(),
		password: yup
			.string()
			.matches(/^[\w_]*$/, 'В пароле могут быть только цифры, буквы и знак _')
			.min(3, 'Пароль должен быть более 3 символов')
			.max(20, 'Пароль должен быть не более 20 символов')
			.required(),
		confirmPassword: yup
			.string()
			.matches(/^[\w_]*$/, 'В пароле могут быть только цифры, буквы и знак _')
			.min(3, 'Пароль должен быть более 3 символов')
			.max(20, 'Пароль должен быть не более 20 символов')
			.oneOf([yup.ref('password')], 'Пароли не одинаковы')
			.required(),
	})
	.required();

export const App = () => {
	const sendRef = useRef();

	const {
		register,
		handleSubmit,
		formState: { errors, isDirty, isValid },
		reset,
		setFocus,
	} = useForm({ resolver: yupResolver(schema) });

	const resetForm = () => {
		reset((formValue) => ({
			...formValue,
			email: '',
			password: '',
			confirmPassword: '',
		}));
	};

	useEffect(() => {
		setFocus('email');
	}, [setFocus]);

	const onSubmit = (data) => {
		console.log(data);
	};

	if (isDirty && isValid) {
		sendRef.current.focus();
	}

	return (
		<FormRegister
			handleSubmit={handleSubmit}
			onSubmit={onSubmit}
			register={register}
			errors={errors}
			sendRef={sendRef}
			resetForm={resetForm}
		/>
	);
};
