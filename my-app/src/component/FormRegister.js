import React from 'react';
import styles from './style/FormRegister.module.css';

const FormRegister = ({
	handleSubmit,
	onSubmit,
	register,
	errors,
	sendRef,
	resetForm,
}) => {
	return (
		<div className={styles.App}>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.formRegister}>
				<div>
					<h2>Форма регистрации</h2>
				</div>

				<div className={styles.errorMessage}> </div>

				<div className={styles.fieldsForm}>
					<label htmlFor="email">Введите ваш Email:</label>
					<input
						{...register('email')}
						type="email"
						name="email"
						id="email"
						placeholder="123@mail.ru"
					/>
					{errors.email && (
						<p className={styles.paragraphError}>{errors.email?.message}</p>
					)}
				</div>
				<div className={styles.fieldsForm}>
					<label htmlFor="password">Введите ваш пароль:</label>
					<input
						{...register('password')}
						type="password"
						name="password"
						id="password"
						placeholder="пароль"
					/>
					{errors.password && (
						<p className={styles.paragraphError}>
							{errors.password?.message}
						</p>
					)}
				</div>
				<div className={styles.fieldsForm}>
					<label htmlFor="confirmPassword">Введите пароль еще раз:</label>
					<input
						{...register('confirmPassword')}
						type="password"
						name="confirmPassword"
						id="confirmPassword"
						placeholder="введите пароль еще раз"
					/>
					{errors.confirmPassword && (
						<p className={styles.paragraphError}>
							{errors.confirmPassword?.message}
						</p>
					)}
				</div>
				<div className={styles.fieldsForm}>
					<button ref={sendRef} type="submit">
						Отправить
					</button>
					<button type="button" onClick={resetForm}>
						Сброс
					</button>
				</div>
			</form>
		</div>
	);
};

export default FormRegister;
