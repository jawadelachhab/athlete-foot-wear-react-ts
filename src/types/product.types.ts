export type TProduct = {
    id: number;
    title: string;
    slug: string;
    price: number;
    cat_slug?: string;
    image: string;
    image_hover: string,
    max: number;
    quantity?: number;
    rating: number,
    isLiked?: boolean;
    isAuthenticated?: boolean;
};

