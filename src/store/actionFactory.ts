export function createActionFactory<T extends string>(actionType: T) {
	return function <PayloadType>() {
		const createAction = function (payload: PayloadType) {
			return {
				type: actionType,
				payload,
			};
		};
		createAction.type = actionType;
		return createAction;
	};
}
