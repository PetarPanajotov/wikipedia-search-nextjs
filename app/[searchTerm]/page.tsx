import getWikiResults from "@/lib/getWikiResults";

export default async function SearchResults({ params: { searchTerm } }: Props) {
    const data: SearchResult = await getWikiResults(searchTerm);
    const results: Article[] | undefined = data?.query?.pages;
    console.log(results)
    return (
        <>
            <main className="container mx-auto px-12 text-lg flex flex-col gap-6">
                {results ? (
                    Object.values(results).map((result) => (
                        <div key={result.pageId} className="flex gap-2 border-t-4 text-white">
                            <img src={result.thumbnail?.source} alt="" width={result.thumbnail?.width} height={result.thumbnail?.height}/>
                            <p className="self-center">{result.title}</p>
                            <p>{result.extract}</p>
                        </div>
                    ))
                ) : (
                    <p>No results...</p>
                )}
            </main>
        </>
    );
}