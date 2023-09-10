import Image from "next/image";

type Props = {
    result: Article
}

export default function Article({result}: Props) {
    return (
        <div key={result.pageId} className="flex gap-2 text-white px-2 py-4">
            {result.thumbnail &&
                <Image
                    src={result.thumbnail?.source}
                    alt=""
                    width={result.thumbnail?.width}
                    height={result.thumbnail?.height}
                    loading="lazy"
                />
            }
            <div className="self-center">
                <h2 className="text-2xl underline">{result.title}</h2>
                <p>{result.extract}</p>
            </div>
        </div>
    );
};