import { useQuery } from "@tanstack/react-query";

import { IMain } from "./types";
import { request } from "@/services/api";

// =========================================================================================================

interface IContentGetMenuQ extends IMain {
	categoryId?: string;
}

export const useContentGetMenuQ = ({ categoryId, enabled = true, options = {} }: IContentGetMenuQ) => {
	return useQuery({
		enabled: enabled && !!categoryId,
		queryKey: ["/content/get-menyu", categoryId],
		queryFn: () => request.get("/content/get-menyu", { params: { ["category_id"]: categoryId } }),
		...options
	});
};
