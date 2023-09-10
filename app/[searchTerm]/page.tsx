import getWikiResults from "@/lib/getWikiResults";
import Article from "./components/Article";

export async function generateMetadata({ params: { searchTerm } }: Props) {
    const data: SearchResult = await getWikiResults(searchTerm);
    const displayTerm = searchTerm.replaceAll('%20', ' ') //replace URL white spaces
    if (!data.query?.pages) {
        return {
            title: `${displayTerm} Not Found`
        }
    }
    return {
        title: displayTerm,
        description: `Search result for ${displayTerm}`
    };
};

export default async function SearchResults({ params: { searchTerm } }: Props) {
    const data: SearchResult = await getWikiResults(searchTerm);
    const results: Article[] | undefined = data?.query?.pages;
    return (
        <main className="max-w-3xl container mx-auto flex flex-col bg-slate-500 justify-center">
            {results ? (
                Object.values(results).map((result: Article) => (
                    <Article key={result.pageId} result={result} />
                ))
            ) : (
                <p>No results...</p>
            )}
        </main>
    );
};