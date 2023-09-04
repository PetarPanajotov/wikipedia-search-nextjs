interface Article {
    pageId: string,
    title: string,
    extract: string,
    thumbnail?: {
        source: string,
        width: number,
        height: number
    };
};

interface SearchResult {
    query?: {
        pages?: Result[]
    };
};

interface Props {
    params: {
        searchTerm: string
    };
};