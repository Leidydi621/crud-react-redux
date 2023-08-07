import { useAppDispatch } from "../hooks/store";

import { UserId, addNewUser, deleteUserById } from "../store/users/slice"; //esta es la action de deleteuser que traje de la slice

export const useUserActions = () => {
	const dispatch = useAppDispatch();

	const addUser = ({ name, email, github }) => {
		dispatch(addNewUser({ name, email, github }));
	};

	const removeUser = (id: UserId) => {
		dispatch(deleteUserById(id));
	};

	return { addUser, removeUser };
};
