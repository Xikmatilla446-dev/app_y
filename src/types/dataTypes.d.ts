export interface IContentGetCarousel {
	id?: number;
	user_id?: any;
	enabled?: number;
	body_ru?: string;
	body_uz?: string;
	anons_ru?: string;
	anons_uz?: string;
	category?: number;
	title_ru?: string;
	title_uz?: string;
	class_name?: string;
	image_path?: string;
	thumbs_path?: string;
	created_date?: string;
}

export interface IContentGetMenu {
	name_uz?: string;
	name_ru?: string;
	parent_id?: any;
	path?: string;
	global_path?: string;
	pages_id?: any;
	icon?: any;
	child?: {
		id?: number;
		name_uz?: string;
		name_ru?: string;
		parent_id?: number;
		path?: string;
		global_path?: string;
		icon?: any;
		category_id?: number;
		pages_id?: any;
		sort_order?: number;
		enabled?: number;
	}[];
}

export interface IContentPageView {
	id?: number;
	user_id?: any;
	body_uz?: string;
	body_ru?: string;
	enabled?: number;
	category?: number;
	title_uz?: string;
	title_ru?: string;
	anons_uz?: string;
	anons_ru?: string;
	class_name?: string;
	image_path?: string;
	thumbs_path?: string;
	created_date?: string;
}
