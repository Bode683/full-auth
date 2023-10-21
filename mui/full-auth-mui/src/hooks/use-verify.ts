import { useEffect } from 'react';
import { useAppDispatch } from '@/reduxx/hooks';
import { setAuth, finishInitialLoad } from '@/reduxx/features/authSlice';
import { useVerifyMutation } from '@/reduxx/features/authApiSlice';

export default function useVerify() {
	const dispatch = useAppDispatch();

	const [verify] = useVerifyMutation();

	useEffect(() => {
		verify(undefined)
			.unwrap()
			.then(() => {
				dispatch(setAuth());
			})
			.finally(() => {
				dispatch(finishInitialLoad());
			});
	}, []);
}
