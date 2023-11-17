import { get, isEmpty } from "lodash";

export const getNameWithLang = (obj: object, field: string, locale?: string) => {
	if (locale || field || !isEmpty(obj)) {
		return get(obj, [field + locale], "");
	} else "";
};
