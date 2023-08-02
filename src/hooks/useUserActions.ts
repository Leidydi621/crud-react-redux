import { useAppDispatch } from "../hooks/store";

import { UserId, deleteUserById } from "../store/users/slice"; //esta es la action de deleteuser que traje de la slice

export const useUserActions = () => {
	const dispatch = useAppDispatch();

	const removeUser = (id: UserId) => {
		dispatch(deleteUserById(id));
	};

	return { removeUser };
};
